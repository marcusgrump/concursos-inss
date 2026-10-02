export type CargoId = "tecnico" | "analista"

/** Banco de questões: cada questão pertence a um "pool" de assunto. */
export type PoolId =
  | "portugues"
  | "etica"
  | "constitucional"
  | "administrativo"
  | "informatica"
  | "rlm"
  | "seguridade"
  | "beneficios"
  | "loas"
  | "politicas-sociais"
  | "servico-social"

export type Gabarito = "C" | "E"

export interface Questao {
  id: string
  pool: PoolId
  assunto: string
  /** Texto-base opcional (ex.: questões de interpretação). */
  texto?: string
  enunciado: string
  gabarito: Gabarito
  comentario: string
  fundamento?: string
}

export interface Flashcard {
  id: string
  pool: PoolId
  frente: string
  verso: string
}

export interface Topico {
  id: string
  texto: string
}

export type Bloco = "basicos" | "especificos"

export interface Disciplina {
  id: string
  nome: string
  bloco: Bloco
  /** Pools de questões/flashcards que alimentam esta disciplina. */
  pools: PoolId[]
  topicos: Topico[]
}

export interface EditalPdf {
  titulo: string
  arquivo: string
  fonteOficial: string
}

export interface Cargo {
  id: CargoId
  nome: string
  nivel: string
  editalReferencia: string
  requisito: string
  remuneracaoReferencia: string
  atribuicoes: string
  prova: {
    duracao: string
    itensP1: number
    itensP2: number
    minimoP1: number
    minimoP2: number
    minimoTotal: number
  }
  pdf: EditalPdf
  observacao?: string
  disciplinas: Disciplina[]
}
