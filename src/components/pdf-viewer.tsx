import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  Loader2Icon,
  MaximizeIcon,
  MinimizeIcon,
  MoveHorizontalIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react"
import type { PDFDocumentProxy, PDFPageProxy, RenderTask } from "pdfjs-dist"
// Worker do pdf.js (build "legacy", compatível com navegadores mais antigos, como Safari de iPhones antigos)
import workerUrl from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"
import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ZOOM_MIN = 0.5
const ZOOM_MAX = 3
const ZOOM_PASSO = 0.25

/** Carrega o pdf.js só quando um PDF é aberto (não pesa no restante do app). */
async function carregarPdfJs() {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs")
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
  return pdfjs
}

interface PdfViewerProps {
  url: string
  titulo: string
  /** Altura da área de leitura (CSS). */
  altura?: string
  className?: string
}

/**
 * Leitor de PDF dentro do site: renderiza as páginas com pdf.js em canvas,
 * sob demanda (só as próximas da área visível), com zoom e navegação.
 * Funciona igual no celular, onde o navegador não exibe PDF embutido.
 */
export function PdfViewer({ url, titulo, altura = "75svh", className }: PdfViewerProps) {
  const raiz = useRef<HTMLDivElement>(null)
  const rolagem = useRef<HTMLDivElement>(null)
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null)
  const [erro, setErro] = useState<string | null>(null)
  const [largura, setLargura] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [paginaAtual, setPaginaAtual] = useState(1)
  const [proporcao, setProporcao] = useState(1.414) // altura/largura da 1ª página (A4 por padrão)
  const [telaCheia, setTelaCheia] = useState(false)

  // Carrega o documento. Quem usa o leitor passa `key={url}`, então o estado
  // começa limpo a cada documento.
  useEffect(() => {
    let cancelado = false
    let tarefa: { destroy: () => Promise<void> } | null = null

    carregarPdfJs()
      .then((pdfjs) => {
        const t = pdfjs.getDocument({ url })
        tarefa = t
        return t.promise
      })
      .then(async (d) => {
        const primeira = await d.getPage(1)
        const vp = primeira.getViewport({ scale: 1 })
        if (cancelado) return
        setProporcao(vp.height / vp.width)
        setDoc(d)
      })
      .catch((e: unknown) => {
        if (!cancelado) setErro(e instanceof Error ? e.message : "Falha ao abrir o PDF.")
      })

    return () => {
      cancelado = true
      void tarefa?.destroy()
    }
  }, [url])

  // Largura disponível (acompanha redimensionamento e rotação do celular)
  useEffect(() => {
    const el = rolagem.current
    if (!el) return
    const ro = new ResizeObserver(([entrada]) => setLargura(Math.floor(entrada.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Tela cheia
  useEffect(() => {
    const aoMudar = () => setTelaCheia(document.fullscreenElement === raiz.current)
    document.addEventListener("fullscreenchange", aoMudar)
    return () => document.removeEventListener("fullscreenchange", aoMudar)
  }, [])

  const alternarTelaCheia = () => {
    if (document.fullscreenElement) void document.exitFullscreen()
    else void raiz.current?.requestFullscreen?.()
  }
  const podeTelaCheia = typeof document !== "undefined" && document.fullscreenEnabled

  const irPara = useCallback((n: number) => {
    const alvo = rolagem.current?.querySelector<HTMLElement>(`[data-pagina="${n}"]`)
    alvo?.scrollIntoView({ block: "start" })
  }, [])

  const aoVerPagina = useCallback((n: number) => setPaginaAtual(n), [])

  const total = doc?.numPages ?? 0
  // Margem interna (p-3 = 12px de cada lado)
  const larguraPagina = Math.max(200, (largura - 24) * zoom)

  return (
    <div
      ref={raiz}
      className={cn("flex flex-col overflow-hidden rounded-xl border bg-muted/40", telaCheia && "bg-muted", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-background px-2 py-1.5">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Página anterior"
            disabled={paginaAtual <= 1}
            onClick={() => irPara(paginaAtual - 1)}
          >
            <ChevronLeftIcon />
          </Button>
          <span className="min-w-20 text-center font-mono text-xs tabular-nums" aria-live="polite">
            {total ? `${paginaAtual} / ${total}` : "–"}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Próxima página"
            disabled={!total || paginaAtual >= total}
            onClick={() => irPara(paginaAtual + 1)}
          >
            <ChevronRightIcon />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Diminuir zoom"
            disabled={zoom <= ZOOM_MIN}
            onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_PASSO))}
          >
            <ZoomOutIcon />
          </Button>
          <button
            type="button"
            className="min-w-12 rounded px-1 font-mono text-xs tabular-nums hover:bg-muted"
            onClick={() => setZoom(1)}
            aria-label="Ajustar à largura"
            title="Ajustar à largura"
          >
            {Math.round(zoom * 100)}%
          </button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Aumentar zoom"
            disabled={zoom >= ZOOM_MAX}
            onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_PASSO))}
          >
            <ZoomInIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Ajustar à largura" onClick={() => setZoom(1)}>
            <MoveHorizontalIcon />
          </Button>
          {podeTelaCheia && (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={telaCheia ? "Sair da tela cheia" : "Tela cheia"}
              onClick={alternarTelaCheia}
            >
              {telaCheia ? <MinimizeIcon /> : <MaximizeIcon />}
            </Button>
          )}
        </div>
      </div>

      <div
        ref={rolagem}
        className={cn("overflow-auto overscroll-contain", telaCheia && "min-h-0 flex-1")}
        style={telaCheia ? undefined : { height: altura }}
        aria-label={titulo}
        role="document"
      >
        {erro ? (
          <div className="space-y-3 p-8 text-center text-sm">
            <p>Não foi possível exibir este PDF aqui ({erro}).</p>
            <Button asChild variant="outline">
              <a href={url} target="_blank" rel="noreferrer">
                <ExternalLinkIcon />
                Abrir o arquivo
              </a>
            </Button>
          </div>
        ) : !doc || largura === 0 ? (
          <div className="flex h-full items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2Icon className="size-4 animate-spin" />
            Carregando PDF…
          </div>
        ) : (
          <div className="flex w-max min-w-full flex-col items-center gap-3 p-3">
            {Array.from({ length: total }, (_, i) => (
              <Pagina
                key={i + 1}
                doc={doc}
                numero={i + 1}
                largura={larguraPagina}
                proporcaoPadrao={proporcao}
                raizRolagem={rolagem}
                aoVer={aoVerPagina}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Pagina({
  doc,
  numero,
  largura,
  proporcaoPadrao,
  raizRolagem,
  aoVer,
}: {
  doc: PDFDocumentProxy
  numero: number
  largura: number
  proporcaoPadrao: number
  raizRolagem: React.RefObject<HTMLDivElement | null>
  aoVer: (n: number) => void
}) {
  const caixa = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const [perto, setPerto] = useState(false)
  const [pagina, setPagina] = useState<PDFPageProxy | null>(null)
  const [renderizada, setRenderizada] = useState(false)

  // Renderiza só quando a página chega perto da área visível
  useEffect(() => {
    const el = caixa.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setPerto(e.isIntersecting), {
      root: raizRolagem.current,
      rootMargin: "800px 0px",
    })
    io.observe(el)
    return () => io.disconnect()
  }, [raizRolagem])

  // Informa qual página ocupa o meio da área visível
  useEffect(() => {
    const el = caixa.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && aoVer(numero), {
      root: raizRolagem.current,
      rootMargin: "-45% 0px -45% 0px",
    })
    io.observe(el)
    return () => io.disconnect()
  }, [raizRolagem, numero, aoVer])

  useEffect(() => {
    if (!perto || pagina) return
    let ativo = true
    void doc.getPage(numero).then((p) => ativo && setPagina(p))
    return () => {
      ativo = false
    }
  }, [perto, pagina, doc, numero])

  const vp = pagina?.getViewport({ scale: 1 })
  const escala = vp ? largura / vp.width : 1
  const alturaCss = vp ? vp.height * escala : largura * proporcaoPadrao

  useEffect(() => {
    if (!pagina || !perto || !canvas.current) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const viewport = pagina.getViewport({ scale: escala * dpr })
    const c = canvas.current
    c.width = Math.floor(viewport.width)
    c.height = Math.floor(viewport.height)
    let tarefa: RenderTask | null = pagina.render({ canvas: c, viewport })
    tarefa.promise
      .then(() => setRenderizada(true))
      .catch(() => {
        // renderização cancelada (zoom/rolagem): ignorar
      })
      .finally(() => {
        tarefa = null
      })
    return () => tarefa?.cancel()
  }, [pagina, perto, escala])

  return (
    <div
      ref={caixa}
      data-pagina={numero}
      className="relative shrink-0 bg-white shadow-sm ring-1 ring-black/10"
      style={{ width: largura, height: alturaCss }}
    >
      <canvas
        ref={canvas}
        className={cn("block size-full transition-opacity", renderizada ? "opacity-100" : "opacity-0")}
        aria-label={`Página ${numero}`}
      />
      {!renderizada && (
        <span className="absolute inset-0 grid place-items-center font-mono text-xs text-neutral-400">
          {numero}
        </span>
      )}
    </div>
  )
}
