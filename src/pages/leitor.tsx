import { ArrowLeftIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { PdfViewer } from "@/components/pdf-viewer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DOCUMENTOS, DOCUMENTOS_POR_ID, documentosDoGrupo, urlDoDocumento } from "@/data/documentos"
import { cn } from "@/lib/utils"

const ROTULO_TIPO = { edital: "Edital", prova: "Prova", gabarito: "Gabarito" } as const

/** Leitor de PDF em página inteira: /leitor/:id */
export function LeitorPage() {
  const { id = "" } = useParams()
  const navegar = useNavigate()
  const doc = DOCUMENTOS_POR_ID.get(id)

  if (!doc) {
    return (
      <div className="space-y-4 py-10 text-center">
        <p className="font-medium">Documento não encontrado.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {DOCUMENTOS.filter((d) => d.tipo !== "gabarito").map((d) => (
            <Button key={d.id} variant="outline" size="sm" asChild>
              <Link to={`/leitor/${d.id}`}>{d.titulo}</Link>
            </Button>
          ))}
        </div>
      </div>
    )
  }

  const irmaos = documentosDoGrupo(doc.grupo)
  const url = urlDoDocumento(doc)
  const voltarPara = doc.tipo === "edital" ? "/edital" : "/materiais"

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className="-ml-2"
            onClick={() => (window.history.length > 1 ? navegar(-1) : navegar(voltarPara))}
          >
            <ArrowLeftIcon />
            Voltar
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-heading text-lg font-semibold text-balance">{doc.tituloGrupo}</h1>
            <Badge variant="secondary">{ROTULO_TIPO[doc.tipo]}</Badge>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={url} download>
              <DownloadIcon />
              Baixar
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={doc.fonteOficial} target="_blank" rel="noreferrer">
              <ExternalLinkIcon />
              Fonte oficial
            </a>
          </Button>
        </div>
      </div>

      {irmaos.length > 1 && (
        <nav aria-label="Documentos relacionados" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
          {irmaos.map((d) => (
            <Link
              key={d.id}
              to={`/leitor/${d.id}`}
              replace
              aria-current={d.id === doc.id ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors hover:bg-muted",
                d.id === doc.id && "border-primary bg-primary/10 text-primary hover:bg-primary/15",
              )}
            >
              {d.rotulo}
            </Link>
          ))}
        </nav>
      )}

      <PdfViewer key={doc.id} url={url} titulo={doc.titulo} altura="max(24rem, calc(100svh - 15rem))" />
    </div>
  )
}
