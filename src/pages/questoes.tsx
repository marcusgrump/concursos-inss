import { ArrowLeftIcon, ArrowRightIcon, RotateCcwIcon, ShuffleIcon, TrophyIcon } from "lucide-react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { QuestaoCard } from "@/components/questao-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CARGOS } from "@/data/edital"
import { QUESTOES_POR_ID, questoesDaDisciplina, questoesDoCargo } from "@/data/questoes"
import type { Gabarito, Questao } from "@/data/types"
import { apurar, embaralhar, notaCebraspe, percentual } from "@/lib/cebraspe"
import { lerProgresso, registrarResposta, useProgresso } from "@/lib/store"

type Filtro = "todas" | "nao-respondidas" | "erradas"

const NOMES_FILTRO: Record<Filtro, string> = {
  todas: "Todas",
  "nao-respondidas": "Não respondidas",
  erradas: "Errei da última vez",
}

interface ItemSessao {
  resposta: Gabarito | null
}

/** Monta a fila da sessão a partir de um retrato do progresso (não muda enquanto você responde). */
function montarFila(base: Questao[], filtro: Filtro, aleatoria: boolean): string[] {
  const { respostas } = lerProgresso()
  const filtradas = base.filter((q) => {
    if (filtro === "nao-respondidas") return !respostas[q.id]
    if (filtro === "erradas") return respostas[q.id]?.ultimaCorreta === false
    return true
  })
  const ids = filtradas.map((q) => q.id)
  return aleatoria ? embaralhar(ids) : ids
}

export function QuestoesPage() {
  const { cargo: cargoId } = useProgresso()
  const cargo = CARGOS[cargoId]
  const [params, setParams] = useSearchParams()

  const disciplinaParam = params.get("d")
  const disciplinaId = cargo.disciplinas.some((d) => d.id === disciplinaParam) ? disciplinaParam! : "todas"
  const filtroParam = params.get("filtro") as Filtro | null
  const filtro: Filtro = filtroParam && filtroParam in NOMES_FILTRO ? filtroParam : "todas"

  const [aleatoria, setAleatoria] = useState(true)
  const [versao, setVersao] = useState(0)

  const base = useMemo(() => {
    const d = cargo.disciplinas.find((x) => x.id === disciplinaId)
    return d ? questoesDaDisciplina(d) : questoesDoCargo(cargoId)
  }, [cargo, cargoId, disciplinaId])

  // `versao` força uma nova fila (recomeçar / reembaralhar).
  const fila = useMemo(() => montarFila(base, filtro, aleatoria), [base, filtro, aleatoria, versao]) // eslint-disable-line react-hooks/exhaustive-deps

  const [indice, setIndice] = useState(0)
  const [sessao, setSessao] = useState<Record<string, ItemSessao>>({})

  // Nova fila (filtro trocado ou "recomeçar"): zera a sessão durante o render.
  const [filaDaSessao, setFilaDaSessao] = useState(fila)
  if (filaDaSessao !== fila) {
    setFilaDaSessao(fila)
    setIndice(0)
    setSessao({})
  }

  const atualizarParam = (chave: string, valor: string, padrao: string) => {
    const novos = new URLSearchParams(params)
    if (valor === padrao) novos.delete(chave)
    else novos.set(chave, valor)
    setParams(novos, { replace: true })
  }

  const questao = fila[indice] ? QUESTOES_POR_ID.get(fila[indice]) : undefined
  const itemAtual = questao ? sessao[questao.id] : undefined
  const revelada = itemAtual !== undefined
  const concluida = fila.length > 0 && indice >= fila.length

  const { certas, erradas, brancos } = apurar(
    Object.entries(sessao).map(([id, { resposta }]) => ({ resposta, gabarito: QUESTOES_POR_ID.get(id)!.gabarito })),
  )

  const responder = useCallback(
    (resposta: Gabarito) => {
      if (!questao || revelada) return
      registrarResposta(questao.id, resposta, questao.gabarito)
      setSessao((s) => ({ ...s, [questao.id]: { resposta } }))
    },
    [questao, revelada],
  )

  const pular = useCallback(() => {
    if (!questao || revelada) return
    setSessao((s) => ({ ...s, [questao.id]: { resposta: null } }))
  }, [questao, revelada])

  const avancar = useCallback(() => setIndice((i) => Math.min(i + 1, fila.length)), [fila.length])
  const voltar = useCallback(() => setIndice((i) => Math.max(i - 1, 0)), [])

  // Atalhos: C = Certo, E = Errado, B = em branco, Enter/→ = próxima, ← = anterior
  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      const alvo = e.target as HTMLElement
      if (alvo.closest("input, textarea, select, [role='combobox'], [role='listbox']") || e.metaKey || e.ctrlKey) return
      const tecla = e.key.toLowerCase()
      if (tecla === "c") responder("C")
      else if (tecla === "e") responder("E")
      else if (tecla === "b") pular()
      else if ((tecla === "enter" || tecla === "arrowright") && revelada) avancar()
      else if (tecla === "arrowleft") voltar()
    }
    window.addEventListener("keydown", aoTeclar)
    return () => window.removeEventListener("keydown", aoTeclar)
  }, [responder, pular, avancar, voltar, revelada])

  return (
    <>
      <PageHeader
        titulo="Questões Certo/Errado"
        descricao="Itens inéditos no estilo Cebraspe, com gabarito comentado e fundamento legal. Atalhos: C (certo), E (errado), B (em branco), Enter (próxima)."
      />

      <Card className="mb-6">
        <CardContent className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <Select value={disciplinaId} onValueChange={(v) => atualizarParam("d", v, "todas")}>
            <SelectTrigger className="w-full" aria-label="Disciplina">
              <SelectValue />
            </SelectTrigger>
            <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
              <SelectItem value="todas">Todas as disciplinas ({questoesDoCargo(cargoId).length})</SelectItem>
              {cargo.disciplinas.map((d) => (
                <SelectItem key={d.id} value={d.id}>
                  {d.nome} ({questoesDaDisciplina(d).length})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filtro} onValueChange={(v) => atualizarParam("filtro", v, "todas")}>
            <SelectTrigger className="w-full sm:w-52" aria-label="Filtro">
              <SelectValue />
            </SelectTrigger>
            <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
              {(Object.keys(NOMES_FILTRO) as Filtro[]).map((f) => (
                <SelectItem key={f} value={f}>
                  {NOMES_FILTRO[f]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => {
              setAleatoria(true)
              setVersao((v) => v + 1)
            }}
          >
            <ShuffleIcon />
            Embaralhar
          </Button>
        </CardContent>
      </Card>

      {fila.length === 0 ? (
        <Card>
          <CardContent className="space-y-3 py-10 text-center">
            <p className="font-medium">Nenhuma questão neste filtro.</p>
            <p className="text-sm text-muted-foreground">
              {filtro === "erradas"
                ? "Você não tem erros pendentes aqui. Ótimo sinal!"
                : filtro === "nao-respondidas"
                  ? "Você já respondeu todas as questões desta seleção."
                  : "Ainda não há questões para esta disciplina."}
            </p>
            <Button variant="outline" onClick={() => atualizarParam("filtro", "todas", "todas")}>
              Ver todas
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <Placar
            posicao={Math.min(indice + 1, fila.length)}
            total={fila.length}
            certas={certas}
            erradas={erradas}
            brancos={brancos}
          />

          {concluida ? (
            <Card>
              <CardContent className="space-y-4 py-10 text-center">
                <TrophyIcon className="mx-auto size-10 text-warning" />
                <div>
                  <p className="text-lg font-semibold">Sessão concluída!</p>
                  <p className="text-sm text-muted-foreground">
                    Nota líquida Cebraspe: <strong className="font-mono">{notaCebraspe({ certas, erradas })}</strong> ·
                    aproveitamento de {percentual(certas, certas + erradas)}% nos itens marcados.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button onClick={() => setVersao((v) => v + 1)}>
                    <RotateCcwIcon />
                    Recomeçar
                  </Button>
                  {erradas > 0 && (
                    <Button variant="outline" asChild>
                      <Link to="/revisao">Ver caderno de erros</Link>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <Link to="/simulado">Fazer um simulado</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            questao && (
              <QuestaoCard
                key={questao.id}
                questao={questao}
                numero={indice + 1}
                resposta={itemAtual?.resposta ?? null}
                revelada={revelada}
                onResponder={responder}
                onPular={pular}
                rodape={
                  <>
                    <Button variant="ghost" onClick={voltar} disabled={indice === 0}>
                      <ArrowLeftIcon />
                      Anterior
                    </Button>
                    <Button onClick={avancar} variant={revelada ? "default" : "outline"}>
                      {revelada ? "Próxima" : "Pular sem responder"}
                      <ArrowRightIcon />
                    </Button>
                  </>
                }
              />
            )
          )}
        </div>
      )}
    </>
  )
}

function Placar({
  posicao,
  total,
  certas,
  erradas,
  brancos,
}: {
  posicao: number
  total: number
  certas: number
  erradas: number
  brancos: number
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
        <span className="text-muted-foreground">
          Questão <span className="font-mono text-foreground">{posicao}</span> de{" "}
          <span className="font-mono text-foreground">{total}</span>
        </span>
        <span className="flex gap-3 font-mono text-xs">
          <span className="text-success">✓ {certas}</span>
          <span className="text-destructive">✗ {erradas}</span>
          <span className="text-muted-foreground">○ {brancos}</span>
          <span>
            Nota: <strong>{notaCebraspe({ certas, erradas })}</strong>
          </span>
        </span>
      </div>
      <Progress value={percentual(posicao - 1, total)} />
    </div>
  )
}
