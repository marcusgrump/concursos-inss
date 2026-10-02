import type { PoolId } from "../types"

/**
 * Esquema visual de uma aula (renderizado como componente, funciona no tema
 * claro/escuro e no celular). Use quando ajudar a enxergar a matéria.
 */
export type Esquema =
  | {
      tipo: "linha-do-tempo"
      titulo: string
      itens: { marco: string; texto: string }[]
    }
  | {
      tipo: "fluxo"
      titulo: string
      passos: { titulo: string; texto?: string }[]
    }
  | {
      tipo: "tabela"
      titulo: string
      colunas: string[]
      linhas: string[][]
    }
  | {
      tipo: "grupos"
      titulo: string
      grupos: { nome: string; itens: string[] }[]
    }

export interface Exemplo {
  titulo: string
  /** Situação concreta (caso prático, cálculo passo a passo, frase de exemplo). */
  texto: string
}

export interface Aula {
  /** Identificador único, ex.: "aula-carencia". */
  id: string
  titulo: string
  pool: PoolId
  /** Ids dos tópicos do edital (src/data/edital.ts) que esta aula cobre — dos dois cargos, quando houver. */
  topicos: string[]
  /** Explicação em parágrafos curtos, linguagem didática. */
  texto: string[]
  /** O que memorizar (números, prazos, listas). */
  pontosChave: string[]
  exemplos: Exemplo[]
  esquemas?: Esquema[]
  /** Como a banca costuma tentar enganar. */
  pegadinhas: string[]
  /** Base legal, ex.: "Lei nº 8.213/1991, arts. 24 a 27-A". */
  fundamentos: string[]
}
