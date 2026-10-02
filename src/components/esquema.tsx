import { ArrowDownIcon } from "lucide-react"
import type { Esquema } from "@/data/aulas"

/** Esquemas visuais das aulas (linha do tempo, fluxo, tabela e grupos). */
export function EsquemaVisual({ esquema }: { esquema: Esquema }) {
  return (
    <figure className="space-y-3 rounded-xl border bg-muted/30 p-4">
      <figcaption className="text-sm font-semibold">{esquema.titulo}</figcaption>
      {esquema.tipo === "linha-do-tempo" && (
        <ol className="relative space-y-4 border-l-2 border-primary/30 pl-5">
          {esquema.itens.map((item, i) => (
            <li key={i} className="relative">
              <span
                className="absolute top-1 -left-[1.66rem] size-3 rounded-full border-2 border-background bg-primary"
                aria-hidden
              />
              <p className="font-mono text-xs font-semibold text-primary">{item.marco}</p>
              <p className="text-sm text-pretty">{item.texto}</p>
            </li>
          ))}
        </ol>
      )}

      {esquema.tipo === "fluxo" && (
        <ol className="flex flex-col items-stretch gap-1">
          {esquema.passos.map((passo, i) => (
            <li key={i} className="flex flex-col items-center gap-1">
              <div className="w-full rounded-lg border bg-background p-3 text-sm">
                <p className="flex items-start gap-2 font-medium">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary font-mono text-[0.65rem] text-primary-foreground">
                    {i + 1}
                  </span>
                  {passo.titulo}
                </p>
                {passo.texto && <p className="mt-1 pl-7 text-muted-foreground text-pretty">{passo.texto}</p>}
              </div>
              {i < esquema.passos.length - 1 && <ArrowDownIcon className="size-4 text-muted-foreground" aria-hidden />}
            </li>
          ))}
        </ol>
      )}

      {esquema.tipo === "tabela" && (
        <div className="overflow-x-auto rounded-lg border bg-background">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-muted/60 text-xs">
              <tr>
                {esquema.colunas.map((c) => (
                  <th key={c} className="px-3 py-2 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {esquema.linhas.map((linha, i) => (
                <tr key={i} className="border-t align-top">
                  {linha.map((celula, j) => (
                    <td key={j} className={j === 0 ? "px-3 py-2 font-medium" : "px-3 py-2"}>
                      {celula}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {esquema.tipo === "grupos" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {esquema.grupos.map((g) => (
            <div key={g.nome} className="rounded-lg border bg-background p-3">
              <p className="mb-1.5 text-sm font-semibold text-primary">{g.nome}</p>
              <ul className="space-y-1 text-sm">
                {g.itens.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </figure>
  )
}
