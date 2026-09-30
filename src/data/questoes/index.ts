import { CARGOS } from "../edital"
import type { CargoId, Disciplina, PoolId, Questao } from "../types"
import { QUESTOES_ADMINISTRATIVO } from "./administrativo"
import { QUESTOES_ASSISTENCIA } from "./assistencia"
import { QUESTOES_BENEFICIOS } from "./beneficios"
import { QUESTOES_CONSTITUCIONAL_ETICA } from "./constitucional-etica"
import { QUESTOES_GERAIS } from "./gerais"
import { QUESTOES_SEGURIDADE } from "./seguridade"
import { QUESTOES_SERVICO_SOCIAL } from "./servico-social"

export const QUESTOES: Questao[] = [
  ...QUESTOES_GERAIS,
  ...QUESTOES_CONSTITUCIONAL_ETICA,
  ...QUESTOES_ADMINISTRATIVO,
  ...QUESTOES_SEGURIDADE,
  ...QUESTOES_BENEFICIOS,
  ...QUESTOES_ASSISTENCIA,
  ...QUESTOES_SERVICO_SOCIAL,
]

export const QUESTOES_POR_ID = new Map(QUESTOES.map((q) => [q.id, q]))

export function questoesDosPools(pools: PoolId[]): Questao[] {
  const set = new Set(pools)
  return QUESTOES.filter((q) => set.has(q.pool))
}

export function questoesDaDisciplina(disciplina: Disciplina): Questao[] {
  return questoesDosPools(disciplina.pools)
}

/** Pools cobertos pelo edital do cargo, sem repetição. */
export function poolsDoCargo(cargo: CargoId): PoolId[] {
  return [...new Set(CARGOS[cargo].disciplinas.flatMap((d) => d.pools))]
}

export function questoesDoCargo(cargo: CargoId): Questao[] {
  return questoesDosPools(poolsDoCargo(cargo))
}

/** Disciplina do cargo à qual a questão pertence (primeira que contém o pool). */
export function disciplinaDaQuestao(cargo: CargoId, questao: Questao): Disciplina | undefined {
  return CARGOS[cargo].disciplinas.find((d) => d.pools.includes(questao.pool))
}
