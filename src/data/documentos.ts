import { CARGOS } from "./edital"
import { PROVAS_ANTERIORES } from "./materiais"

/** Um PDF servido pelo próprio site (pasta public/), aberto no leitor interno. */
export interface Documento {
  id: string
  titulo: string
  /** Rótulo curto para alternar entre documentos do mesmo grupo. */
  rotulo: string
  /** Caminho relativo a public/. */
  arquivo: string
  /** Documentos do mesmo grupo aparecem juntos no leitor (ex.: prova + gabarito). */
  grupo: string
  tituloGrupo: string
  tipo: "edital" | "prova" | "gabarito"
  fonteOficial: string
}

function idDoArquivo(caminho: string) {
  return caminho.replace(/^.*\//, "").replace(/\.pdf$/i, "")
}

const EDITAIS: Documento[] = Object.values(CARGOS).map((c) => ({
  id: idDoArquivo(c.pdf.arquivo),
  titulo: c.pdf.titulo,
  rotulo: c.id === "tecnico" ? "Edital 2022 (Técnico)" : "Edital 2015 (Analista)",
  arquivo: c.pdf.arquivo,
  grupo: "editais",
  tituloGrupo: "Editais oficiais",
  tipo: "edital",
  fonteOficial: c.pdf.fonteOficial,
}))

const PROVAS: Documento[] = PROVAS_ANTERIORES.flatMap((p) => [
  ...p.provas.map((a) => ({ a, tipo: "prova" as const })),
  ...p.gabaritos.map((a) => ({ a, tipo: "gabarito" as const })),
]).map(({ a, tipo }) => {
  const prova = PROVAS_ANTERIORES.find((p) => [...p.provas, ...p.gabaritos].includes(a))!
  return {
    id: idDoArquivo(a.caminho),
    titulo: `${prova.titulo} — ${a.rotulo}`,
    rotulo: a.rotulo,
    arquivo: a.caminho,
    grupo: prova.id,
    tituloGrupo: prova.titulo,
    tipo,
    fonteOficial: a.origem,
  }
})

export const DOCUMENTOS: Documento[] = [...EDITAIS, ...PROVAS]

export const DOCUMENTOS_POR_ID = new Map(DOCUMENTOS.map((d) => [d.id, d]))

export function documentoDoArquivo(caminho: string) {
  return DOCUMENTOS_POR_ID.get(idDoArquivo(caminho))
}

export function documentosDoGrupo(grupo: string) {
  return DOCUMENTOS.filter((d) => d.grupo === grupo)
}

export function urlDoDocumento(d: Documento) {
  return `${import.meta.env.BASE_URL}${d.arquivo}`
}
