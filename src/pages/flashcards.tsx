import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon,
  CheckIcon,
  CircleCheckBigIcon,
  EyeIcon,
  PartyPopperIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CARGOS, NOMES_POOLS } from "@/data/edital"
import { FLASHCARDS } from "@/data/flashcards"
import { poolsDoCargo } from "@/data/questoes"
import type { Flashcard } from "@/data/types"
import { embaralhar } from "@/lib/cebraspe"
import { INTERVALOS_LEITNER, avaliarCartao, cartaoPendente, useProgresso, type EstadoCartao } from "@/lib/store"
import { cn } from "@/lib/utils"

type Modo = "pendentes" | "todos"

const TODAS = "todas"

/** Cor da barra de cada caixa (0 = novos ... 5 = dominados). */
const COR_CAIXA = ["bg-muted-foreground/40", "bg-destructive/60", "bg-warning", "bg-warning/60", "bg-success/70", "bg-success"]

const PRIMEIRO_INTERVALO = INTERVALOS_LEITNER[1] ?? 1

/** Alvos em que as teclas de atalho não devem ser interceptadas (digitação, listas abertas...). */
const SELETOR_CAMPO =
  "input, textarea, select, [contenteditable=''], [contenteditable='true'], [role='combobox'], [role='listbox'], [role='option'], [role='dialog']"
/** Controles que já reagem à tecla Espaço por conta própria. */
const SELETOR_CONTROLE = "button, a[href], summary, [role='button'], [role='radio'], [role='tab'], [role='switch'], [role='checkbox']"

function alvoCorresponde(alvo: EventTarget | null, seletor: string) {
  return alvo instanceof Element && alvo.closest(seletor) !== null
}

function plural(n: number, singular: string, pluralForma: string) {
  return `${n} ${n === 1 ? singular : pluralForma}`
}

function rotuloDias(dias: number) {
  return dias === 0 ? "hoje" : plural(dias, "dia", "dias")
}

/* -------------------------------------------------------------------------- */
/* Sessão de estudo                                                           */
/* -------------------------------------------------------------------------- */

interface SessaoEstudoProps {
  cartoes: Flashcard[]
  estadoCartoes: Record<string, EstadoCartao>
  modo: Modo
  onTrocarModo: (modo: Modo) => void
  onRecomecar: () => void
}

/**
 * A fila é embaralhada e fixada na montagem. O componente é remontado (via `key`)
 * quando o filtro, o modo ou a rodada mudam — e não a cada avaliação.
 */
function SessaoEstudo({ cartoes, estadoCartoes, modo, onTrocarModo, onRecomecar }: SessaoEstudoProps) {
  const [fila] = useState<Flashcard[]>(() =>
    embaralhar(modo === "pendentes" ? cartoes.filter((c) => cartaoPendente(estadoCartoes[c.id])) : cartoes),
  )
  const [indice, setIndice] = useState(0)
  const [revelado, setRevelado] = useState(false)
  const [lembrei, setLembrei] = useState(0)
  const [errei, setErrei] = useState(0)

  const cartaoRef = useRef<HTMLDivElement>(null)
  const mostrarRef = useRef<HTMLButtonElement>(null)
  const fimRef = useRef<HTMLDivElement>(null)

  const cartao: Flashcard | undefined = fila[indice]
  const terminou = fila.length > 0 && indice >= fila.length

  const revelar = useCallback(() => setRevelado(true), [])

  const avaliar = useCallback(
    (lembrou: boolean) => {
      if (!cartao) return
      avaliarCartao(cartao.id, lembrou)
      if (lembrou) setLembrei((n) => n + 1)
      else setErrei((n) => n + 1)
      setIndice((i) => i + 1)
      setRevelado(false)
    },
    [cartao],
  )

  // Atalhos: Espaço = mostrar resposta, 1 = errei, 2 = lembrei.
  const ativa = cartao !== undefined
  useEffect(() => {
    if (!ativa) return
    function aoPressionar(e: KeyboardEvent) {
      if (e.defaultPrevented || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return
      if (e.target instanceof HTMLElement && e.target.isContentEditable) return
      if (alvoCorresponde(e.target, SELETOR_CAMPO)) return
      if (e.code === "Space" || e.key === " ") {
        if (revelado || alvoCorresponde(e.target, SELETOR_CONTROLE)) return
        e.preventDefault()
        revelar()
      } else if (revelado && (e.key === "1" || e.key === "2")) {
        e.preventDefault()
        avaliar(e.key === "2")
      }
    }
    window.addEventListener("keydown", aoPressionar)
    return () => window.removeEventListener("keydown", aoPressionar)
  }, [ativa, revelado, revelar, avaliar])

  // Mantém o foco coerente quando os botões trocam (evita cair no <body>).
  useEffect(() => {
    if (terminou) {
      fimRef.current?.focus()
    } else if (revelado) {
      cartaoRef.current?.focus({ preventScroll: true })
    } else if (indice > 0) {
      mostrarRef.current?.focus({ preventScroll: true })
    }
  }, [indice, revelado, terminou])

  // --- Estados sem fila ----------------------------------------------------
  if (fila.length === 0) {
    const semCartoes = cartoes.length === 0
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
          <CircleCheckBigIcon className="size-10 text-success" aria-hidden="true" />
          <div className="space-y-1">
            <h2 className="font-heading text-lg font-semibold">
              {semCartoes ? "Ainda não há cartões aqui" : "Tudo em dia por hoje!"}
            </h2>
            <p className="mx-auto max-w-md text-sm text-muted-foreground text-pretty">
              {semCartoes
                ? "Não encontramos flashcards para esta seleção. Tente outra disciplina."
                : "Nenhum cartão pendente para esta seleção. Os que você acertou voltam nos próximos dias. Se quiser praticar agora, faça uma revisão livre com todos os cartões."}
            </p>
          </div>
          {!semCartoes && modo === "pendentes" && (
            <Button onClick={() => onTrocarModo("todos")}>Revisar todos os cartões</Button>
          )}
        </CardContent>
      </Card>
    )
  }

  // --- Fim da fila ---------------------------------------------------------
  if (terminou || !cartao) {
    const aproveitamento = Math.round((lembrei / fila.length) * 100)
    return (
      <Card ref={fimRef} tabIndex={-1} className="outline-none" role="status">
        <CardContent className="flex flex-col items-center gap-5 py-8 text-center">
          <PartyPopperIcon className="size-10 text-success" aria-hidden="true" />
          <div className="space-y-1">
            <h2 className="font-heading text-xl font-semibold">Sessão concluída, parabéns!</h2>
            <p className="text-sm text-muted-foreground">
              Você revisou {plural(fila.length, "cartão", "cartões")} ({aproveitamento}% de aproveitamento).
            </p>
          </div>

          <dl className="grid w-full max-w-sm grid-cols-2 gap-3">
            <div className="rounded-lg border border-success/40 bg-success/10 p-3">
              <dt className="text-xs text-muted-foreground">Lembrei</dt>
              <dd className="font-mono text-2xl font-semibold text-success">{lembrei}</dd>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
              <dt className="text-xs text-muted-foreground">Errei</dt>
              <dd className="font-mono text-2xl font-semibold text-destructive">{errei}</dd>
            </div>
          </dl>

          <p className="max-w-md text-xs text-muted-foreground text-pretty">
            {modo === "pendentes" && errei > 0
              ? `${plural(errei, "cartão errado continua pendente", "cartões errados continuam pendentes")} hoje: recomece para revê-los.`
              : modo === "pendentes"
                ? "Os cartões que você acertou voltam nos próximos dias, conforme a caixa de cada um."
                : "Recomeçar embaralha todos os cartões da seleção de novo."}
          </p>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button onClick={onRecomecar} className="h-10 sm:min-w-36">
              <RotateCcwIcon data-icon="inline-start" aria-hidden="true" />
              Recomeçar
            </Button>
            <Button variant="outline" asChild className="h-10">
              <Link to="/questoes">
                Praticar com questões
                <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // --- Cartão em andamento -------------------------------------------------
  const caixaAtual = estadoCartoes[cartao.id]?.caixa ?? 0
  const proximaCaixa = Math.min(caixaAtual + 1, INTERVALOS_LEITNER.length - 1)
  const diasSeLembrar = INTERVALOS_LEITNER[proximaCaixa] ?? PRIMEIRO_INTERVALO
  const progresso = Math.round((indice / fila.length) * 100)

  return (
    <section aria-label="Sessão de revisão" className="space-y-4">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
          <p className="font-medium">
            Cartão <span className="font-mono">{indice + 1}</span> de <span className="font-mono">{fila.length}</span>
          </p>
          <p className="text-muted-foreground">
            <span className="text-success">{lembrei} lembrei</span> · <span className="text-destructive">{errei} errei</span>
          </p>
        </div>
        <Progress value={progresso} aria-label="Progresso da sessão" aria-valuenow={progresso} />
      </div>

      <Card className="gap-0 py-0">
        <div ref={cartaoRef} tabIndex={-1} aria-live="polite" className="outline-none">
          <div
            key={cartao.id}
            className="flex min-h-64 flex-col p-5 duration-200 animate-in fade-in-0 motion-reduce:animate-none sm:min-h-72 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{NOMES_POOLS[cartao.pool] ?? cartao.pool}</Badge>
              <Badge variant="outline">{caixaAtual === 0 ? "Novo" : `Caixa ${caixaAtual}`}</Badge>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-5 py-6 text-center">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Pergunta</p>
                <p
                  className={cn(
                    "font-medium text-balance whitespace-pre-line transition-all duration-300 motion-reduce:transition-none",
                    revelado ? "text-base text-muted-foreground" : "text-xl sm:text-2xl",
                  )}
                >
                  {cartao.frente}
                </p>
              </div>

              {revelado && (
                <div className="space-y-2 border-t pt-5 duration-300 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 motion-reduce:animate-none">
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">Resposta</p>
                  <p className="text-lg leading-relaxed text-pretty whitespace-pre-line sm:text-xl">{cartao.verso}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {revelado ? (
        <div className="space-y-3">
          <p className="text-center text-xs text-muted-foreground text-pretty">
            Lembrou? Volta em {rotuloDias(diasSeLembrar)} (caixa {proximaCaixa}). Errou? Volta hoje, na caixa 1.
          </p>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
            <Button
              variant="destructive"
              className="h-11 text-base"
              onClick={() => avaliar(false)}
              aria-keyshortcuts="1"
              aria-label="Errei (tecla 1)"
            >
              <XIcon data-icon="inline-start" aria-hidden="true" />
              Errei
              <kbd aria-hidden="true" className="ml-1 hidden rounded border border-current/30 px-1.5 font-mono text-xs sm:inline">
                1
              </kbd>
            </Button>
            <Button
              className="h-11 bg-success text-base text-success-foreground hover:bg-success/90"
              onClick={() => avaliar(true)}
              aria-keyshortcuts="2"
              aria-label="Lembrei (tecla 2)"
            >
              <CheckIcon data-icon="inline-start" aria-hidden="true" />
              Lembrei
              <kbd aria-hidden="true" className="ml-1 hidden rounded border border-current/30 px-1.5 font-mono text-xs sm:inline">
                2
              </kbd>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Button
            ref={mostrarRef}
            className="h-11 w-full text-base sm:w-auto sm:min-w-64"
            onClick={revelar}
            aria-keyshortcuts="Space"
          >
            <EyeIcon data-icon="inline-start" aria-hidden="true" />
            Mostrar resposta
            <kbd aria-hidden="true" className="ml-1 hidden rounded border border-current/30 px-1.5 font-mono text-xs sm:inline">
              Espaço
            </kbd>
          </Button>
        </div>
      )}
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Página                                                                     */
/* -------------------------------------------------------------------------- */

export function FlashcardsPage() {
  const { cargo, cartoes: estadoCartoes } = useProgresso()
  const [disciplinaId, setDisciplinaId] = useState(TODAS)
  const [modo, setModo] = useState<Modo>("pendentes")
  const [rodada, setRodada] = useState(0)

  // Disciplinas do edital do cargo que têm ao menos um cartão.
  const disciplinas = useMemo(
    () =>
      CARGOS[cargo].disciplinas
        .map((disciplina) => ({
          disciplina,
          total: FLASHCARDS.filter((f) => disciplina.pools.includes(f.pool)).length,
        }))
        .filter((d) => d.total > 0),
    [cargo],
  )

  // Se o cargo mudou e a disciplina escolhida não existe mais, volta para "Todas".
  const disciplinaAtiva = disciplinas.find((d) => d.disciplina.id === disciplinaId)
  const idAtivo = disciplinaAtiva ? disciplinaId : TODAS

  const cartoesFiltrados = useMemo(() => {
    const pools = new Set(disciplinaAtiva ? disciplinaAtiva.disciplina.pools : poolsDoCargo(cargo))
    return FLASHCARDS.filter((f) => pools.has(f.pool))
  }, [cargo, disciplinaAtiva])

  const resumo = useMemo(() => {
    const porCaixa = INTERVALOS_LEITNER.map(() => 0)
    let pendentes = 0
    for (const f of cartoesFiltrados) {
      const estado = estadoCartoes[f.id]
      const caixa = Math.min(Math.max(estado?.caixa ?? 0, 0), porCaixa.length - 1)
      porCaixa[caixa] += 1
      if (cartaoPendente(estado)) pendentes += 1
    }
    return { porCaixa, pendentes }
  }, [cartoesFiltrados, estadoCartoes])

  const total = cartoesFiltrados.length
  const intervalos = INTERVALOS_LEITNER.slice(1)
    .map((d) => String(d))
    .join(", ")

  return (
    <>
      <PageHeader
        titulo="Flashcards"
        descricao={`Sistema Leitner: ao lembrar, o cartão sobe de caixa e volta em ${intervalos} dias; ao errar, volta para a caixa 1 e reaparece hoje.`}
      />

      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1.5">
          <Label htmlFor="filtro-disciplina">Disciplina</Label>
          <Select value={idAtivo} onValueChange={setDisciplinaId}>
            <SelectTrigger id="filtro-disciplina" className="w-full sm:w-80">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODAS}>Todas as disciplinas</SelectItem>
              {disciplinas.map(({ disciplina, total: n }) => (
                <SelectItem key={disciplina.id} value={disciplina.id}>
                  {disciplina.nome} ({n})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label id="rotulo-modo">Modo de revisão</Label>
          <ToggleGroup
            type="single"
            variant="outline"
            spacing={0}
            value={modo}
            onValueChange={(v) => {
              if (v === "pendentes" || v === "todos") setModo(v)
            }}
            aria-labelledby="rotulo-modo"
            className="w-full sm:w-fit"
          >
            <ToggleGroupItem value="pendentes" className="h-auto min-h-8 flex-1 py-1 leading-tight whitespace-normal sm:flex-none">
              Pendentes para hoje
            </ToggleGroupItem>
            <ToggleGroupItem value="todos" className="h-auto min-h-8 flex-1 py-1 leading-tight whitespace-normal sm:flex-none">
              Todos (revisão livre)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <Card size="sm" className="mb-6">
        <CardContent className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-medium">
              Cartões por caixa <span className="font-normal text-muted-foreground">({plural(total, "cartão", "cartões")})</span>
            </h2>
            <Badge variant={resumo.pendentes > 0 ? "default" : "secondary"}>
              {resumo.pendentes === 0 ? "Nenhum pendente hoje" : `${plural(resumo.pendentes, "pendente", "pendentes")} hoje`}
            </Badge>
          </div>
          <ul className="grid grid-cols-3 gap-x-4 gap-y-3 sm:grid-cols-6">
            {resumo.porCaixa.map((qtd, caixa) => (
              <li key={caixa} className="space-y-1">
                <div className="flex items-baseline justify-between gap-1">
                  <span className="text-xs font-medium">{caixa === 0 ? "Novos" : `Caixa ${caixa}`}</span>
                  <span className="font-mono text-sm font-semibold">{qtd}</span>
                </div>
                <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full transition-all motion-reduce:transition-none", COR_CAIXA[caixa])}
                    style={{ width: `${total === 0 ? 0 : (qtd / total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {caixa === 0 ? "não revisados" : `a cada ${rotuloDias(INTERVALOS_LEITNER[caixa] ?? 0)}`}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <SessaoEstudo
        key={`${cargo}:${idAtivo}:${modo}:${rodada}`}
        cartoes={cartoesFiltrados}
        estadoCartoes={estadoCartoes}
        modo={modo}
        onTrocarModo={setModo}
        onRecomecar={() => setRodada((r) => r + 1)}
      />
    </>
  )
}
