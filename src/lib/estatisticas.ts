import { CARGOS } from "@/data/edital"
import { FLASHCARDS } from "@/data/flashcards"
import { poolsDoCargo, questoesDaDisciplina, questoesDoCargo } from "@/data/questoes"
import type { CargoId, Disciplina } from "@/data/types"
import { cartaoPendente, type Estado } from "./store"

export interface EstatisticaDisciplina {
  disciplina: Disciplina
  topicosFeitos: number
  topicosTotal: number
  questoesTotal: number
  respondidas: number
  /** Questões cuja última resposta foi correta. */
  acertadas: number
}

export function estatisticasPorDisciplina(estado: Estado, cargo: CargoId): EstatisticaDisciplina[] {
  return CARGOS[cargo].disciplinas.map((d) => {
    const questoes = questoesDaDisciplina(d)
    const respondidas = questoes.filter((q) => estado.respostas[q.id])
    return {
      disciplina: d,
      topicosFeitos: d.topicos.filter((t) => estado.topicos[t.id]).length,
      topicosTotal: d.topicos.length,
      questoesTotal: questoes.length,
      respondidas: respondidas.length,
      acertadas: respondidas.filter((q) => estado.respostas[q.id].ultimaCorreta).length,
    }
  })
}

export function resumoGeral(estado: Estado, cargo: CargoId) {
  const topicos = CARGOS[cargo].disciplinas.flatMap((d) => d.topicos)
  const questoes = questoesDoCargo(cargo)
  const respondidas = questoes.filter((q) => estado.respostas[q.id])
  const pools = new Set(poolsDoCargo(cargo))
  const cartoes = FLASHCARDS.filter((c) => pools.has(c.pool))
  const agora = Date.now()
  const tentativas = respondidas.reduce((s, q) => s + estado.respostas[q.id].tentativas, 0)
  const acertosTotais = respondidas.reduce((s, q) => s + estado.respostas[q.id].acertos, 0)

  return {
    topicosFeitos: topicos.filter((t) => estado.topicos[t.id]).length,
    topicosTotal: topicos.length,
    questoesTotal: questoes.length,
    respondidas: respondidas.length,
    acertadas: respondidas.filter((q) => estado.respostas[q.id].ultimaCorreta).length,
    erradasPendentes: respondidas.filter((q) => !estado.respostas[q.id].ultimaCorreta).length,
    tentativas,
    acertosTotais,
    cartoesTotal: cartoes.length,
    cartoesPendentes: cartoes.filter((c) => cartaoPendente(estado.cartoes[c.id], agora)).length,
    cartoesDominados: cartoes.filter((c) => (estado.cartoes[c.id]?.caixa ?? 0) >= 4).length,
    simulados: estado.simulados.filter((s) => s.cargo === cargo),
  }
}
