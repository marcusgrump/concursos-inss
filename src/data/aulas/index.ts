import { CARGOS } from "../edital"
import type { CargoId, Disciplina } from "../types"
import { AULAS_ASSISTENCIA } from "./assistencia"
import { AULAS_BENEFICIOS } from "./beneficios"
import { AULAS_DIREITO } from "./direito"
import { AULAS_GERAIS } from "./gerais"
import { AULAS_SEGURIDADE } from "./seguridade"
import { AULAS_SERVICO_SOCIAL } from "./servico-social"
import type { Aula } from "./types"

export type { Aula, Esquema, Exemplo } from "./types"

export const AULAS: Aula[] = [
  ...AULAS_GERAIS,
  ...AULAS_DIREITO,
  ...AULAS_SEGURIDADE,
  ...AULAS_BENEFICIOS,
  ...AULAS_ASSISTENCIA,
  ...AULAS_SERVICO_SOCIAL,
]

export const AULAS_POR_ID = new Map(AULAS.map((a) => [a.id, a]))

export function aulasDoTopico(topicoId: string): Aula[] {
  return AULAS.filter((a) => a.topicos.includes(topicoId))
}

/** Aulas da disciplina do edital, na ordem dos tópicos. */
export function aulasDaDisciplina(disciplina: Disciplina): Aula[] {
  const vistas = new Set<string>()
  const lista: Aula[] = []
  for (const t of disciplina.topicos) {
    for (const a of aulasDoTopico(t.id)) {
      if (!vistas.has(a.id)) {
        vistas.add(a.id)
        lista.push(a)
      }
    }
  }
  return lista
}

/** Disciplina do cargo que contém a aula (pelo primeiro tópico em comum). */
export function disciplinaDaAula(cargo: CargoId, aula: Aula): Disciplina | undefined {
  return CARGOS[cargo].disciplinas.find((d) => d.topicos.some((t) => aula.topicos.includes(t.id)))
}

/** Tópicos do cargo cobertos pela aula. */
export function topicosDaAulaNoCargo(cargo: CargoId, aula: Aula): string[] {
  return CARGOS[cargo].disciplinas.flatMap((d) => d.topicos.map((t) => t.id)).filter((id) => aula.topicos.includes(id))
}
