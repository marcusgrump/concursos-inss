import { useSyncExternalStore } from "react"
import type { CargoId, Gabarito } from "@/data/types"

/**
 * Progresso do estudante, persistido no localStorage do navegador.
 * Não há backend: exporte um backup em JSON para levar a outro dispositivo.
 */

export interface RegistroResposta {
  tentativas: number
  acertos: number
  ultima: Gabarito
  ultimaCorreta: boolean
  em: number
}

export interface EstadoCartao {
  /** Caixa do sistema Leitner (0 = novo, 5 = dominado). */
  caixa: number
  /** Timestamp a partir do qual o cartão volta para revisão. */
  proxima: number
}

export interface ResultadoParcial {
  total: number
  certas: number
  erradas: number
  brancos: number
}

export interface RegistroSimulado extends ResultadoParcial {
  id: string
  em: number
  cargo: CargoId
  nota: number
  duracaoSeg: number
  basicos: ResultadoParcial
  especificos: ResultadoParcial
}

export interface Estado {
  versao: 1
  cargo: CargoId
  topicos: Record<string, boolean>
  respostas: Record<string, RegistroResposta>
  cartoes: Record<string, EstadoCartao>
  simulados: RegistroSimulado[]
}

const CHAVE = "concursos-inss:progresso"

const INICIAL: Estado = {
  versao: 1,
  cargo: "tecnico",
  topicos: {},
  respostas: {},
  cartoes: {},
  simulados: [],
}

function carregar(): Estado {
  try {
    const bruto = localStorage.getItem(CHAVE)
    if (!bruto) return INICIAL
    return normalizar(JSON.parse(bruto))
  } catch {
    return INICIAL
  }
}

function normalizar(dados: unknown): Estado {
  if (!dados || typeof dados !== "object") return INICIAL
  const d = dados as Partial<Estado>
  return {
    versao: 1,
    cargo: d.cargo === "analista" ? "analista" : "tecnico",
    topicos: d.topicos ?? {},
    respostas: d.respostas ?? {},
    cartoes: d.cartoes ?? {},
    simulados: Array.isArray(d.simulados) ? d.simulados : [],
  }
}

let estado: Estado = carregar()
const ouvintes = new Set<() => void>()

function definir(atualizar: (atual: Estado) => Estado) {
  estado = atualizar(estado)
  try {
    localStorage.setItem(CHAVE, JSON.stringify(estado))
  } catch {
    // Armazenamento indisponível (ex.: aba anônima): o progresso fica só em memória.
  }
  ouvintes.forEach((o) => o())
}

function inscrever(ouvinte: () => void) {
  ouvintes.add(ouvinte)
  const aoMudarEmOutraAba = (e: StorageEvent) => {
    if (e.key === CHAVE) {
      estado = carregar()
      ouvinte()
    }
  }
  window.addEventListener("storage", aoMudarEmOutraAba)
  return () => {
    ouvintes.delete(ouvinte)
    window.removeEventListener("storage", aoMudarEmOutraAba)
  }
}

export function useProgresso(): Estado {
  return useSyncExternalStore(inscrever, () => estado)
}

export function lerProgresso(): Estado {
  return estado
}

// ---- Ações ---------------------------------------------------------------

export function definirCargo(cargo: CargoId) {
  definir((e) => ({ ...e, cargo }))
}

export function alternarTopico(id: string, marcado?: boolean) {
  definir((e) => ({ ...e, topicos: { ...e.topicos, [id]: marcado ?? !e.topicos[id] } }))
}

export function marcarTopicos(ids: string[], marcado: boolean) {
  definir((e) => {
    const topicos = { ...e.topicos }
    ids.forEach((id) => (topicos[id] = marcado))
    return { ...e, topicos }
  })
}

export function registrarResposta(questaoId: string, resposta: Gabarito, gabarito: Gabarito) {
  const correta = resposta === gabarito
  definir((e) => {
    const anterior = e.respostas[questaoId]
    return {
      ...e,
      respostas: {
        ...e.respostas,
        [questaoId]: {
          tentativas: (anterior?.tentativas ?? 0) + 1,
          acertos: (anterior?.acertos ?? 0) + (correta ? 1 : 0),
          ultima: resposta,
          ultimaCorreta: correta,
          em: Date.now(),
        },
      },
    }
  })
  return correta
}

/** Intervalos (em dias) de cada caixa do sistema Leitner. */
export const INTERVALOS_LEITNER = [0, 1, 3, 7, 15, 30]
const DIA = 24 * 60 * 60 * 1000

export function avaliarCartao(cartaoId: string, lembrei: boolean) {
  definir((e) => {
    const atual = e.cartoes[cartaoId] ?? { caixa: 0, proxima: 0 }
    const caixa = lembrei ? Math.min(atual.caixa + 1, INTERVALOS_LEITNER.length - 1) : 1
    const proxima = lembrei ? Date.now() + INTERVALOS_LEITNER[caixa] * DIA : Date.now()
    return { ...e, cartoes: { ...e.cartoes, [cartaoId]: { caixa, proxima } } }
  })
}

export function cartaoPendente(estadoCartao: EstadoCartao | undefined, agora = Date.now()) {
  return !estadoCartao || estadoCartao.proxima <= agora
}

export function salvarSimulado(registro: RegistroSimulado) {
  definir((e) => ({ ...e, simulados: [registro, ...e.simulados].slice(0, 50) }))
}

export function limparRespostas(ids?: string[]) {
  definir((e) => {
    if (!ids) return { ...e, respostas: {} }
    const respostas = { ...e.respostas }
    ids.forEach((id) => delete respostas[id])
    return { ...e, respostas }
  })
}

export function resetarProgresso() {
  definir((e) => ({ ...INICIAL, cargo: e.cargo }))
}

export function exportarProgresso(): string {
  return JSON.stringify({ app: "concursos-inss", exportadoEm: new Date().toISOString(), ...estado }, null, 2)
}

export function importarProgresso(json: string) {
  const dados = JSON.parse(json)
  if (!dados || typeof dados !== "object" || !("respostas" in dados)) {
    throw new Error("Arquivo inválido: não parece um backup deste app.")
  }
  definir(() => normalizar(dados))
}
