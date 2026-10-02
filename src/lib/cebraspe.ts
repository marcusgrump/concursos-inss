import type { Gabarito } from "@/data/types"
import type { ResultadoParcial } from "./store"

/**
 * Correção no padrão Cebraspe: +1 por item certo, −1 por item errado,
 * 0 para item em branco. Um erro anula um acerto.
 */
export function notaCebraspe(r: Pick<ResultadoParcial, "certas" | "erradas">) {
  return r.certas - r.erradas
}

export function apurar(itens: { resposta: Gabarito | null; gabarito: Gabarito }[]): ResultadoParcial {
  let certas = 0
  let erradas = 0
  let brancos = 0
  for (const { resposta, gabarito } of itens) {
    if (resposta === null) brancos++
    else if (resposta === gabarito) certas++
    else erradas++
  }
  return { total: itens.length, certas, erradas, brancos }
}

/** Nota mínima proporcional quando o simulado tem menos itens que a prova real. */
export function minimoProporcional(minimo: number, itensProva: number, itensSimulado: number) {
  if (itensSimulado === 0) return 0
  return Math.ceil((minimo / itensProva) * itensSimulado)
}

export function percentual(parte: number, total: number) {
  return total === 0 ? 0 : Math.round((parte / total) * 100)
}

export function formatarDuracao(segundos: number) {
  const h = Math.floor(segundos / 3600)
  const m = Math.floor((segundos % 3600) / 60)
  const s = segundos % 60
  const mm = String(m).padStart(2, "0")
  const ss = String(s).padStart(2, "0")
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

export function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
