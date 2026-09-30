import { useEffect, useMemo, useRef, useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  EraserIcon,
  FlagIcon,
  HistoryIcon,
  LightbulbIcon,
  PlayIcon,
  RotateCcwIcon,
  TimerIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { QuestaoCard } from "@/components/questao-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CARGOS } from "@/data/edital"
import { disciplinaDaQuestao, questoesDoCargo } from "@/data/questoes"
import type { Bloco, Cargo, CargoId, Disciplina, Gabarito, Questao } from "@/data/types"
import { apurar, embaralhar, formatarDuracao, minimoProporcional, notaCebraspe, percentual } from "@/lib/cebraspe"
import {
  registrarResposta,
  salvarSimulado,
  useProgresso,
  type RegistroSimulado,
  type ResultadoParcial,
} from "@/lib/store"
import { cn } from "@/lib/utils"

// ---- Tipos ----------------------------------------------------------------

type Resposta = Gabarito | null
type Tamanho = "20" | "40" | "60" | "max"
type FiltroRevisao = "todos" | "errados" | "brancos"

interface ItemSimulado {
  questao: Questao
  bloco: Bloco
  disciplina: Disciplina | undefined
}

interface SessaoProva {
  cargo: CargoId
  itens: ItemSimulado[]
  /** Timestamp de início (ms). */
  inicio: number
  /** Limite do cronômetro regressivo, em segundos (null = sem limite). */
  limiteSeg: number | null
}

interface ResultadoFinal {
  sessao: SessaoProva
  respostas: Resposta[]
  registro: RegistroSimulado
  esgotado: boolean
}

type EstadoPagina =
  | { fase: "config" }
  | { fase: "prova"; sessao: SessaoProva }
  | { fase: "resultado"; resultado: ResultadoFinal }

interface Criterio {
  id: string
  rotulo: string
  parcial: ResultadoParcial
  nota: number
  minimo: number
  ok: boolean
}

interface LinhaDisciplina {
  id: string
  nome: string
  bloco: Bloco
  parcial: ResultadoParcial
}

// ---- Constantes e utilitários ---------------------------------------------

const TAMANHOS_FIXOS = [20, 40, 60] as const
const AVISO_FINAL_SEG = 5 * 60
const MINUTOS_PROVA_PADRAO = 210

const NOMES_BLOCO: Record<Bloco, string> = {
  basicos: "Conhecimentos básicos",
  especificos: "Conhecimentos específicos",
}

function ehTamanho(valor: string): valor is Tamanho {
  return valor === "20" || valor === "40" || valor === "60" || valor === "max"
}

function ehFiltro(valor: string): valor is FiltroRevisao {
  return valor === "todos" || valor === "errados" || valor === "brancos"
}

function itensDaProva(prova: Cargo["prova"]) {
  return prova.itensP1 + prova.itensP2
}

/** Converte "3 horas e 30 minutos" em 210. */
function minutosDaProva(duracao: string) {
  const horas = /(\d+)\s*hora/i.exec(duracao)
  const minutos = /(\d+)\s*minuto/i.exec(duracao)
  const total = (horas ? Number(horas[1]) * 60 : 0) + (minutos ? Number(minutos[1]) : 0)
  return total > 0 ? total : MINUTOS_PROVA_PADRAO
}

/** Tempo proporcional à prova real (3h30 × itens / 120), arredondado para minutos. */
function tempoProporcionalSeg(cargo: Cargo, itens: number) {
  const minutos = Math.round((minutosDaProva(cargo.prova.duracao) * itens) / itensDaProva(cargo.prova))
  return Math.max(1, minutos) * 60
}

function formatarMinutos(segundos: number) {
  const total = Math.round(segundos / 60)
  const h = Math.floor(total / 60)
  const m = total % 60
  if (h === 0) return `${m} min`
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`
}

function formatarNota(nota: number) {
  if (nota > 0) return `+${nota}`
  if (nota < 0) return `−${Math.abs(nota)}`
  return "0"
}

function plural(n: number, singular: string, pluralForma: string) {
  return `${n} ${n === 1 ? singular : pluralForma}`
}

function segundosDesde(inicio: number) {
  return Math.max(0, Math.floor((Date.now() - inicio) / 1000))
}

function comportamentoRolagem(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
}

function gerarId() {
  return typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `simulado-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

// ---- Montagem e apuração --------------------------------------------------

function classificarQuestoes(cargoId: CargoId): ItemSimulado[] {
  return questoesDoCargo(cargoId).map((questao) => {
    const disciplina = disciplinaDaQuestao(cargoId, questao)
    return { questao, disciplina, bloco: disciplina?.bloco ?? "especificos" }
  })
}

/** Divide os itens na proporção P1/P2 da prova real, completando com o outro bloco se faltar questão. */
function planejarComposicao(total: number, dispBasicos: number, dispEspecificos: number, prova: Cargo["prova"]) {
  const alvo = Math.min(total, dispBasicos + dispEspecificos)
  const ideal = Math.min(Math.round((alvo * prova.itensP1) / itensDaProva(prova)), dispBasicos)
  const especificos = Math.min(alvo - ideal, dispEspecificos)
  const basicos = Math.min(alvo - especificos, dispBasicos)
  return { basicos, especificos }
}

function montarSimulado(cargoId: CargoId, banco: ItemSimulado[], total: number): ItemSimulado[] {
  const cargo = CARGOS[cargoId]
  const basicos = embaralhar(banco.filter((i) => i.bloco === "basicos"))
  const especificos = embaralhar(banco.filter((i) => i.bloco === "especificos"))
  const plano = planejarComposicao(total, basicos.length, especificos.length, cargo.prova)

  // Como na prova: básicos primeiro e, dentro de cada bloco, agrupados na ordem das disciplinas do edital.
  const ordem = new Map(cargo.disciplinas.map((d, i) => [d.id, i]))
  const posicao = (item: ItemSimulado) =>
    item.disciplina ? (ordem.get(item.disciplina.id) ?? ordem.size) : ordem.size
  const porDisciplina = (a: ItemSimulado, b: ItemSimulado) => posicao(a) - posicao(b)

  return [
    ...basicos.slice(0, plano.basicos).sort(porDisciplina),
    ...especificos.slice(0, plano.especificos).sort(porDisciplina),
  ]
}

function criarSessao(
  cargoId: CargoId,
  banco: ItemSimulado[],
  total: number,
  limiteSeg: number | null,
): SessaoProva {
  return { cargo: cargoId, itens: montarSimulado(cargoId, banco, total), inicio: Date.now(), limiteSeg }
}

function apurarItens(
  itens: ItemSimulado[],
  respostas: Resposta[],
  filtro?: (item: ItemSimulado) => boolean,
): ResultadoParcial {
  return apurar(
    itens.flatMap((item, i) =>
      !filtro || filtro(item) ? [{ resposta: respostas[i] ?? null, gabarito: item.questao.gabarito }] : [],
    ),
  )
}

function avaliarCriterios(
  cargoId: CargoId,
  r: ResultadoParcial & Pick<RegistroSimulado, "basicos" | "especificos">,
): Criterio[] {
  const { prova } = CARGOS[cargoId]
  const criterio = (
    id: string,
    rotulo: string,
    parcial: ResultadoParcial,
    minimoEdital: number,
    itensEdital: number,
  ): Criterio => {
    const minimo = minimoProporcional(minimoEdital, itensEdital, parcial.total)
    const nota = notaCebraspe(parcial)
    return { id, rotulo, parcial, nota, minimo, ok: nota >= minimo }
  }

  const lista: Criterio[] = []
  if (r.basicos.total > 0) {
    lista.push(criterio("p1", "P1 — Conhecimentos básicos", r.basicos, prova.minimoP1, prova.itensP1))
  }
  if (r.especificos.total > 0) {
    lista.push(criterio("p2", "P2 — Conhecimentos específicos", r.especificos, prova.minimoP2, prova.itensP2))
  }
  const geral: ResultadoParcial = { total: r.total, certas: r.certas, erradas: r.erradas, brancos: r.brancos }
  lista.push(criterio("total", "Nota total", geral, prova.minimoTotal, itensDaProva(prova)))
  return lista
}

function desempenhoPorDisciplina(cargoId: CargoId, itens: ItemSimulado[], respostas: Resposta[]): LinhaDisciplina[] {
  const linhas: LinhaDisciplina[] = CARGOS[cargoId].disciplinas.map((d) => ({
    id: d.id,
    nome: d.nome,
    bloco: d.bloco,
    parcial: apurarItens(itens, respostas, (item) => item.disciplina?.id === d.id),
  }))
  const semDisciplina = apurarItens(itens, respostas, (item) => !item.disciplina)
  if (semDisciplina.total > 0) {
    linhas.push({ id: "outras", nome: "Outros assuntos", bloco: "especificos", parcial: semDisciplina })
  }
  return linhas.filter((l) => l.parcial.total > 0)
}

// ---- Página ---------------------------------------------------------------

export function SimuladoPage() {
  const { cargo, simulados } = useProgresso()
  const [estado, setEstado] = useState<EstadoPagina>({ fase: "config" })
  const [tamanho, setTamanho] = useState<Tamanho>("20")
  const [cronometro, setCronometro] = useState(true)

  const cargoAtivo =
    estado.fase === "prova"
      ? estado.sessao.cargo
      : estado.fase === "resultado"
        ? estado.resultado.sessao.cargo
        : cargo
  const nomeCargo = CARGOS[cargoAtivo].nome

  function iniciar(sessao: SessaoProva) {
    setEstado({ fase: "prova", sessao })
    window.scrollTo({ top: 0 })
  }

  function finalizar(sessao: SessaoProva, respostas: Resposta[], esgotado: boolean) {
    const decorrido = segundosDesde(sessao.inicio)
    const duracaoSeg = sessao.limiteSeg === null ? decorrido : Math.min(decorrido, sessao.limiteSeg)

    sessao.itens.forEach((item, i) => {
      const resposta = respostas[i]
      if (resposta !== null) registrarResposta(item.questao.id, resposta, item.questao.gabarito)
    })

    const geral = apurarItens(sessao.itens, respostas)
    const registro: RegistroSimulado = {
      ...geral,
      id: gerarId(),
      em: Date.now(),
      cargo: sessao.cargo,
      nota: notaCebraspe(geral),
      duracaoSeg,
      basicos: apurarItens(sessao.itens, respostas, (item) => item.bloco === "basicos"),
      especificos: apurarItens(sessao.itens, respostas, (item) => item.bloco === "especificos"),
    }
    salvarSimulado(registro)
    setEstado({ fase: "resultado", resultado: { sessao, respostas, registro, esgotado } })

    if (esgotado) toast.warning("Tempo esgotado! O simulado foi finalizado automaticamente.")
    else toast.success("Simulado finalizado e salvo no histórico.")
    window.scrollTo({ top: 0 })
  }

  function novoSimulado() {
    setEstado({ fase: "config" })
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <PageHeader
        titulo="Simulado"
        descricao={
          estado.fase === "prova"
            ? `Prova em andamento — ${nomeCargo}. Julgue cada item como Certo ou Errado, ou deixe em branco.`
            : `Treine no formato Cebraspe (Certo/Errado, correção líquida) para ${nomeCargo}.`
        }
        acoes={
          estado.fase === "resultado" ? (
            <Button onClick={novoSimulado}>
              <RotateCcwIcon />
              Novo simulado
            </Button>
          ) : undefined
        }
      />

      {estado.fase === "config" && (
        <div className="space-y-6">
          <ConfiguracaoSimulado
            cargoId={cargo}
            tamanho={tamanho}
            onTamanhoChange={setTamanho}
            cronometro={cronometro}
            onCronometroChange={setCronometro}
            onIniciar={iniciar}
          />
          <HistoricoSimulados cargoId={cargo} simulados={simulados} />
        </div>
      )}

      {estado.fase === "prova" && (
        <ProvaSimulado key={estado.sessao.inicio} sessao={estado.sessao} onFinalizar={finalizar} />
      )}

      {estado.fase === "resultado" && (
        <ResultadoSimulado resultado={estado.resultado} onNovoSimulado={novoSimulado} />
      )}
    </>
  )
}

// ---- Fase 1: configuração -------------------------------------------------

function ConfiguracaoSimulado({
  cargoId,
  tamanho,
  onTamanhoChange,
  cronometro,
  onCronometroChange,
  onIniciar,
}: {
  cargoId: CargoId
  tamanho: Tamanho
  onTamanhoChange: (tamanho: Tamanho) => void
  cronometro: boolean
  onCronometroChange: (ligado: boolean) => void
  onIniciar: (sessao: SessaoProva) => void
}) {
  const cargo = CARGOS[cargoId]
  const banco = useMemo(() => classificarQuestoes(cargoId), [cargoId])
  const dispBasicos = banco.filter((i) => i.bloco === "basicos").length
  const dispEspecificos = banco.length - dispBasicos
  const disponivel = banco.length
  // "Prova completa": o tamanho da prova real (120 itens), limitado ao banco.
  const provaCompleta = Math.min(itensDaProva(cargo.prova), disponivel)

  const selecionado: Tamanho = tamanho === "max" || Number(tamanho) <= disponivel ? tamanho : "max"
  const itens = selecionado === "max" ? provaCompleta : Math.min(Number(selecionado), disponivel)
  const plano = planejarComposicao(itens, dispBasicos, dispEspecificos, cargo.prova)
  const limiteSeg = tempoProporcionalSeg(cargo, itens)

  function iniciar() {
    if (itens === 0) return
    onIniciar(criarSessao(cargoId, banco, itens, cronometro ? limiteSeg : null))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurar simulado</CardTitle>
        <CardDescription className="text-pretty">
          Correção Cebraspe: item certo vale +1, item errado vale −1 e item em branco vale 0 — cada erro anula um
          acerto. A prova real tem {itensDaProva(cargo.prova)} itens (P1 Conhecimentos Básicos: {cargo.prova.itensP1};
          P2 Conhecimentos Específicos: {cargo.prova.itensP2}) em {cargo.prova.duracao}.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <span className="text-muted-foreground">Cargo:</span>
          <Badge variant="secondary">{cargo.nome}</Badge>
          <span className="text-muted-foreground">
            <span className="font-mono">{disponivel}</span> questões no banco (
            <span className="font-mono">{dispBasicos}</span> de básicos,{" "}
            <span className="font-mono">{dispEspecificos}</span> de específicos)
          </span>
        </div>

        <div className="space-y-3">
          <p id="simulado-tamanho" className="text-sm font-medium">
            Número de itens
          </p>
          <ToggleGroup
            type="single"
            variant="outline"
            value={selecionado}
            onValueChange={(valor) => {
              if (ehTamanho(valor)) onTamanhoChange(valor)
            }}
            aria-labelledby="simulado-tamanho"
            className="flex-wrap"
          >
            {TAMANHOS_FIXOS.map((n) => (
              <ToggleGroupItem key={n} value={String(n)} disabled={n > disponivel} className="font-mono">
                {n}
              </ToggleGroupItem>
            ))}
            <ToggleGroupItem value="max" disabled={disponivel === 0}>
              {`Prova completa (${provaCompleta})`}
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-xs text-muted-foreground text-pretty">
            Composição proporcional à prova real: <span className="font-mono">{plano.basicos}</span> itens de
            Conhecimentos Básicos e <span className="font-mono">{plano.especificos}</span> de Conhecimentos
            Específicos, sorteados e apresentados com os básicos primeiro, como na prova.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-lg border p-3">
          <Switch
            id="simulado-cronometro"
            checked={cronometro}
            onCheckedChange={onCronometroChange}
            className="mt-0.5"
          />
          <div className="space-y-1">
            <Label htmlFor="simulado-cronometro">Cronômetro regressivo</Label>
            <p className="text-xs text-muted-foreground text-pretty">
              {cronometro ? (
                <>
                  Tempo proporcional à prova real: <span className="font-mono">{formatarMinutos(limiteSeg)}</span>{" "}
                  para {plural(itens, "item", "itens")}. Ao zerar, o simulado é entregue automaticamente.
                </>
              ) : (
                "Sem limite de tempo: apenas o tempo decorrido é exibido."
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" onClick={iniciar} disabled={itens === 0}>
            <PlayIcon />
            Iniciar simulado
          </Button>
          {itens === 0 && (
            <p className="text-sm text-muted-foreground">Ainda não há questões cadastradas para este cargo.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function HistoricoSimulados({ cargoId, simulados }: { cargoId: CargoId; simulados: RegistroSimulado[] }) {
  const doCargo = simulados.filter((s) => s.cargo === cargoId).slice(0, 10)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HistoryIcon className="size-4" aria-hidden="true" />
          Últimos simulados
        </CardTitle>
        <CardDescription>{CARGOS[cargoId].nome}</CardDescription>
      </CardHeader>
      <CardContent>
        {doCargo.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum simulado finalizado para este cargo ainda.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">Últimos simulados de {CARGOS[cargoId].nome}</caption>
              <thead>
                <tr className="border-b text-left text-xs text-muted-foreground">
                  <th scope="col" className="py-2 pr-3 font-medium">
                    Data
                  </th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">
                    Itens
                  </th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">
                    Nota
                  </th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">
                    Acerto
                  </th>
                  <th scope="col" className="hidden py-2 pl-2 text-right font-medium sm:table-cell">
                    Mínimos
                  </th>
                </tr>
              </thead>
              <tbody>
                {doCargo.map((s) => {
                  const ok = avaliarCriterios(s.cargo, s).every((c) => c.ok)
                  return (
                    <tr key={s.id} className="border-b last:border-0">
                      <td className="py-2 pr-3 whitespace-nowrap">
                        {new Date(s.em).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
                      </td>
                      <td className="px-2 py-2 text-right font-mono">{s.total}</td>
                      <td
                        className={cn(
                          "px-2 py-2 text-right font-mono font-medium",
                          s.nota < 0 && "text-destructive",
                        )}
                      >
                        {formatarNota(s.nota)}
                      </td>
                      <td className="px-2 py-2 text-right font-mono">{percentual(s.certas, s.total)}%</td>
                      <td className="hidden py-2 pl-2 text-right sm:table-cell">
                        {ok ? (
                          <Badge variant="outline" className="border-success/40 bg-success/10 text-success">
                            Atingiu
                          </Badge>
                        ) : (
                          <Badge variant="destructive">Abaixo</Badge>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ---- Fase 2: prova --------------------------------------------------------

/** Relógio isolado: só ele re-renderiza a cada segundo, não a prova inteira. */
function Relogio({
  inicio,
  limiteSeg,
  onEsgotado,
}: {
  inicio: number
  limiteSeg: number | null
  onEsgotado: () => void
}) {
  const [decorrido, setDecorrido] = useState(() => segundosDesde(inicio))
  const aoEsgotar = useRef(onEsgotado)

  useEffect(() => {
    aoEsgotar.current = onEsgotado
  }, [onEsgotado])

  useEffect(() => {
    let avisou = limiteSeg === null || limiteSeg - segundosDesde(inicio) <= AVISO_FINAL_SEG
    const id = window.setInterval(() => {
      const s = segundosDesde(inicio)
      setDecorrido(s)
      if (limiteSeg === null) return
      const restante = limiteSeg - s
      if (!avisou && restante <= AVISO_FINAL_SEG) {
        avisou = true
        toast.warning("Faltam 5 minutos para o fim do simulado.")
      }
      if (restante <= 0) {
        window.clearInterval(id)
        aoEsgotar.current()
      }
    }, 1000)
    return () => window.clearInterval(id)
  }, [inicio, limiteSeg])

  const restante = limiteSeg === null ? null : Math.max(0, limiteSeg - decorrido)
  const rotulo = restante === null ? "decorrido" : "restante"

  return (
    <div
      role="timer"
      aria-label={`Tempo ${rotulo}`}
      className={cn(
        "flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-sm",
        restante !== null && restante <= 60
          ? "bg-destructive/10 text-destructive"
          : restante !== null && restante <= AVISO_FINAL_SEG && "bg-warning/20",
      )}
    >
      <TimerIcon className="size-4" aria-hidden="true" />
      <span className="font-mono font-medium tabular-nums">{formatarDuracao(restante ?? decorrido)}</span>
      <span className="hidden text-xs text-muted-foreground sm:inline">{rotulo}</span>
    </div>
  )
}

function ProvaSimulado({
  sessao,
  onFinalizar,
}: {
  sessao: SessaoProva
  onFinalizar: (sessao: SessaoProva, respostas: Resposta[], esgotado: boolean) => void
}) {
  const { itens } = sessao
  const total = itens.length
  const [respostas, setRespostas] = useState<Resposta[]>(() => itens.map(() => null))
  const [atual, setAtual] = useState(0)
  const [confirmando, setConfirmando] = useState(false)
  const concluido = useRef(false)
  const cabecalhoRef = useRef<HTMLDivElement>(null)
  const questaoRef = useRef<HTMLDivElement>(null)

  const respondidas = respostas.reduce((n, r) => (r === null ? n : n + 1), 0)
  const brancos = total - respondidas
  const item = itens[atual]
  const resposta = respostas[atual]
  const ultimo = atual === total - 1

  // Evita perder a prova ao recarregar ou fechar a aba sem querer.
  useEffect(() => {
    const avisar = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener("beforeunload", avisar)
    return () => window.removeEventListener("beforeunload", avisar)
  }, [])

  function responder(valor: Gabarito) {
    // Clicar de novo na opção marcada deixa o item em branco.
    setRespostas((anteriores) => anteriores.map((r, i) => (i === atual ? (r === valor ? null : valor) : r)))
  }

  function limpar() {
    setRespostas((anteriores) => anteriores.map((r, i) => (i === atual ? null : r)))
  }

  function irPara(indice: number) {
    setAtual(Math.min(Math.max(indice, 0), total - 1))
    const alvo = questaoRef.current
    if (!alvo) return
    const margem = (cabecalhoRef.current?.offsetHeight ?? 0) + 8
    const { top } = alvo.getBoundingClientRect()
    if (top < margem || top > window.innerHeight * 0.5) {
      window.scrollTo({ top: window.scrollY + top - margem, behavior: comportamentoRolagem() })
    }
  }

  function concluir(esgotado: boolean) {
    if (concluido.current) return
    concluido.current = true
    setConfirmando(false)
    onFinalizar(sessao, respostas, esgotado)
  }

  return (
    <div className="space-y-4">
      <div
        ref={cabecalhoRef}
        className="sticky top-0 z-20 rounded-xl border bg-background/95 p-3 shadow-xs backdrop-blur supports-backdrop-filter:bg-background/80"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="w-full min-w-0 space-y-1.5 sm:w-auto sm:flex-1">
            <div className="flex items-baseline justify-between gap-2 text-xs">
              <span className="font-medium">
                Item <span className="font-mono">{atual + 1}</span> de <span className="font-mono">{total}</span>
              </span>
              <span className="text-muted-foreground">
                <span className="font-mono text-foreground">
                  {respondidas}/{total}
                </span>{" "}
                respondidas
              </span>
            </div>
            <Progress
              value={percentual(respondidas, total)}
              aria-label={`${respondidas} de ${total} itens respondidos`}
            />
          </div>
          <Relogio inicio={sessao.inicio} limiteSeg={sessao.limiteSeg} onEsgotado={() => concluir(true)} />
          <Button onClick={() => setConfirmando(true)} className="ml-auto sm:ml-0">
            <FlagIcon />
            Finalizar
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
        <div ref={questaoRef} className="min-w-0">
          <QuestaoCard
            key={item.questao.id}
            questao={item.questao}
            numero={atual + 1}
            resposta={resposta}
            revelada={false}
            onResponder={responder}
            rodape={
              <>
                <Button
                  variant="outline"
                  onClick={() => irPara(atual - 1)}
                  disabled={atual === 0}
                  aria-label="Ir para o item anterior"
                >
                  <ChevronLeftIcon />
                  Anterior
                </Button>
                <Button variant="ghost" onClick={limpar} disabled={resposta === null} aria-label="Limpar resposta">
                  <EraserIcon />
                  <span className="hidden sm:inline">Limpar resposta</span>
                </Button>
                {ultimo ? (
                  <Button onClick={() => setConfirmando(true)} aria-label="Finalizar simulado">
                    <FlagIcon />
                    Finalizar
                  </Button>
                ) : (
                  <Button onClick={() => irPara(atual + 1)} aria-label="Ir para o próximo item">
                    Próximo
                    <ChevronRightIcon />
                  </Button>
                )}
              </>
            }
          />
        </div>

        <FolhaRespostas
          itens={itens}
          respostas={respostas}
          atual={atual}
          onIr={irPara}
          className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
        />
      </div>

      <Dialog open={confirmando} onOpenChange={setConfirmando}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Finalizar simulado?</DialogTitle>
            <DialogDescription>
              {brancos > 0
                ? `Há ${plural(brancos, "item", "itens")} em branco. Em branco vale 0; errado vale −1. Finalizar?`
                : `Todos os ${total} itens foram respondidos. Deseja entregar a prova e ver o resultado?`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Continuar respondendo</Button>
            </DialogClose>
            <Button onClick={() => concluir(false)}>
              <FlagIcon />
              Finalizar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function FolhaRespostas({
  itens,
  respostas,
  atual,
  onIr,
  className,
}: {
  itens: ItemSimulado[]
  respostas: Resposta[]
  atual: number
  onIr: (indice: number) => void
  className?: string
}) {
  const grupos = (["basicos", "especificos"] as const)
    .map((bloco) => ({ bloco, indices: itens.flatMap((item, i) => (item.bloco === bloco ? [i] : [])) }))
    .filter((g) => g.indices.length > 0)

  return (
    <Card size="sm" className={className}>
      <CardHeader>
        <CardTitle>Folha de respostas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {grupos.map((g) => (
          <nav key={g.bloco} aria-label={`Itens de ${NOMES_BLOCO[g.bloco]}`} className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">{NOMES_BLOCO[g.bloco]}</p>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))] gap-1.5">
              {g.indices.map((i) => {
                const r = respostas[i]
                const estadoItem = r === null ? "em branco" : r === "C" ? "marcado Certo" : "marcado Errado"
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => onIr(i)}
                      aria-label={`Item ${i + 1}, ${estadoItem}`}
                      aria-current={i === atual ? "step" : undefined}
                      className={cn(
                        "flex h-10 w-full flex-col items-center justify-center gap-0.5 rounded-md border font-mono text-xs leading-none transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                        r === null
                          ? "border-border bg-background hover:bg-muted"
                          : "border-primary bg-primary text-primary-foreground hover:bg-primary/85",
                        i === atual && "ring-2 ring-ring ring-offset-2 ring-offset-background",
                      )}
                    >
                      <span>{i + 1}</span>
                      <span aria-hidden="true" className="text-[0.625rem] opacity-75">
                        {r ?? "–"}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        ))}

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground" aria-hidden="true">
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-sm bg-primary" />
            Marcado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-sm border border-border" />
            Em branco
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-sm ring-2 ring-ring" />
            Atual
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

// ---- Fase 3: resultado ----------------------------------------------------

function Estatistica({ rotulo, valor, className }: { rotulo: string; valor: string | number; className?: string }) {
  return (
    <div className="rounded-lg bg-muted/50 p-3">
      <dt className="text-xs text-muted-foreground">{rotulo}</dt>
      <dd className={cn("font-mono text-2xl font-semibold tabular-nums", className)}>{valor}</dd>
    </div>
  )
}

function ResultadoSimulado({ resultado, onNovoSimulado }: { resultado: ResultadoFinal; onNovoSimulado: () => void }) {
  const { sessao, respostas, registro, esgotado } = resultado
  const [filtro, setFiltro] = useState<FiltroRevisao>("todos")
  const { prova } = CARGOS[registro.cargo]

  const criterios = avaliarCriterios(registro.cargo, registro)
  const aprovado = criterios.every((c) => c.ok)
  const reprovados = criterios.filter((c) => !c.ok)
  const disciplinas = desempenhoPorDisciplina(registro.cargo, sessao.itens, respostas)
  const respondidas = registro.certas + registro.erradas
  const taxaMarcados = percentual(registro.certas, respondidas)

  const indicesRevisao = sessao.itens.flatMap((item, i) => {
    const r = respostas[i]
    if (filtro === "errados") return r !== null && r !== item.questao.gabarito ? [i] : []
    if (filtro === "brancos") return r === null ? [i] : []
    return [i]
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
          <div className="text-center sm:border-r sm:pr-6 sm:text-left">
            <p className="text-sm text-muted-foreground">Nota líquida</p>
            <p
              className={cn(
                "font-mono text-5xl font-semibold tracking-tight tabular-nums",
                registro.nota < 0 && "text-destructive",
                registro.nota > 0 && "text-success",
              )}
            >
              {formatarNota(registro.nota)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-mono">
                {registro.certas} − {registro.erradas}
              </span>{" "}
              em {plural(registro.total, "item", "itens")} ·{" "}
              <span className="font-mono">{percentual(registro.certas, registro.total)}%</span> de acerto
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Estatistica rotulo="Certas" valor={registro.certas} className="text-success" />
            <Estatistica rotulo="Erradas" valor={registro.erradas} className="text-destructive" />
            <Estatistica rotulo="Em branco" valor={registro.brancos} />
            <Estatistica rotulo="Tempo" valor={formatarDuracao(registro.duracaoSeg)} />
          </dl>
          {(esgotado || sessao.limiteSeg !== null) && (
            <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:col-span-2">
              {sessao.limiteSeg !== null && (
                <span>
                  Tempo disponível: <span className="font-mono">{formatarDuracao(sessao.limiteSeg)}</span>
                </span>
              )}
              {esgotado && <Badge variant="destructive">Tempo esgotado</Badge>}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Critérios mínimos do edital</CardTitle>
          <CardDescription className="text-pretty">
            Mínimos proporcionais ao tamanho deste simulado. No edital: P1 ≥ {prova.minimoP1} de {prova.itensP1}, P2 ≥{" "}
            {prova.minimoP2} de {prova.itensP2} e total ≥ {prova.minimoTotal} de {itensDaProva(prova)}.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {aprovado ? (
            <Alert className="border-success/40 bg-success/10 text-success">
              <CircleCheckIcon />
              <AlertTitle>Aprovado nos critérios mínimos</AlertTitle>
              <AlertDescription>
                Com esse desempenho você não seria eliminado. A classificação final depende da nota dos demais
                candidatos.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive">
              <TriangleAlertIcon />
              <AlertTitle>Abaixo do mínimo</AlertTitle>
              <AlertDescription>
                Nota abaixo do mínimo em: {reprovados.map((c) => c.rotulo).join("; ")}. Na prova real, isso eliminaria
                o candidato.
              </AlertDescription>
            </Alert>
          )}

          <ul className="divide-y">
            {criterios.map((c) => (
              <li
                key={c.id}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 first:pt-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="font-medium">{c.rotulo}</p>
                  <p className="text-xs text-muted-foreground">
                    {plural(c.parcial.total, "item", "itens")} · {c.parcial.certas} certas, {c.parcial.erradas} erradas,{" "}
                    {c.parcial.brancos} em branco
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm">
                    Nota <strong className="font-mono">{formatarNota(c.nota)}</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      / mínimo <span className="font-mono">{c.minimo}</span>
                    </span>
                  </span>
                  {c.ok ? (
                    <Badge variant="outline" className="border-success/40 bg-success/10 text-success">
                      Atingiu
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Abaixo</Badge>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Desempenho por disciplina</CardTitle>
          <CardDescription>Percentual de acerto sobre os itens de cada disciplina neste simulado.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-5">
            {disciplinas.map((d) => {
              const pct = percentual(d.parcial.certas, d.parcial.total)
              return (
                <li key={d.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="flex min-w-0 flex-wrap items-center gap-2 text-sm font-medium">
                      {d.nome}
                      <Badge variant="outline">{d.bloco === "basicos" ? "P1" : "P2"}</Badge>
                    </span>
                    <span className="font-mono text-sm font-semibold">{pct}%</span>
                  </div>
                  <Progress value={pct} aria-label={`Acerto em ${d.nome}`} />
                  <p className="text-xs text-muted-foreground">
                    <span className="text-success">{plural(d.parcial.certas, "certa", "certas")}</span> ·{" "}
                    <span className="text-destructive">{plural(d.parcial.erradas, "errada", "erradas")}</span> ·{" "}
                    {d.parcial.brancos} em branco · nota{" "}
                    <span className="font-mono">{formatarNota(notaCebraspe(d.parcial))}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LightbulbIcon className="size-4" aria-hidden="true" />
            Dica de estratégia
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-relaxed text-pretty">
          {registro.erradas > 0 ? (
            <p>
              Se você tivesse deixado em branco os {plural(registro.erradas, "item", "itens")} que errou, sua nota seria{" "}
              <strong className="font-mono">{formatarNota(registro.certas)}</strong> em vez de{" "}
              <strong className="font-mono">{formatarNota(registro.nota)}</strong> —{" "}
              {plural(registro.erradas, "ponto", "pontos")} a mais.
            </p>
          ) : respondidas > 0 ? (
            <p>Você não errou nenhum dos itens que marcou: nenhum ponto perdido por chute.</p>
          ) : (
            <p>Você não marcou nenhum item. Em branco não perde ponto, mas também não soma.</p>
          )}
          {respondidas > 0 && (
            <p>
              Entre os itens que você marcou, acertou <strong className="font-mono">{taxaMarcados}%</strong>.{" "}
              {taxaMarcados < 50
                ? "Com menos de 50% de acerto, marcar derrubou sua nota: na dúvida, deixe em branco."
                : taxaMarcados < 75
                  ? "Marcar valeu a pena, mas cada erro custa um acerto: revise os itens errados abaixo."
                  : "Boa precisão: continue marcando os itens em que você tem segurança."}
            </p>
          )}
          <p className="text-muted-foreground">
            No Cebraspe, marcar um item só compensa quando sua chance de acertar passa de 50%: o ganho esperado é 2p − 1.
          </p>
        </CardContent>
      </Card>

      <section aria-labelledby="simulado-revisao" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="simulado-revisao" className="font-heading text-lg font-semibold">
            Revisão dos itens
          </h2>
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={filtro}
            onValueChange={(valor) => {
              if (ehFiltro(valor)) setFiltro(valor)
            }}
            aria-label="Filtrar itens da revisão"
            className="flex-wrap"
          >
            <ToggleGroupItem value="todos">
              Todos (<span className="font-mono">{registro.total}</span>)
            </ToggleGroupItem>
            <ToggleGroupItem value="errados">
              Errados (<span className="font-mono">{registro.erradas}</span>)
            </ToggleGroupItem>
            <ToggleGroupItem value="brancos">
              Em branco (<span className="font-mono">{registro.brancos}</span>)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {indicesRevisao.length === 0 ? (
          <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            Nenhum item neste filtro.
          </p>
        ) : (
          <div className="space-y-4">
            {indicesRevisao.map((i) => (
              <QuestaoCard
                key={sessao.itens[i].questao.id}
                questao={sessao.itens[i].questao}
                numero={i + 1}
                resposta={respostas[i]}
                revelada
              />
            ))}
          </div>
        )}
      </section>

      <div className="flex justify-center pt-2">
        <Button size="lg" onClick={onNovoSimulado}>
          <RotateCcwIcon />
          Novo simulado
        </Button>
      </div>
    </div>
  )
}
