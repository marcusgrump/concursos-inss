import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenCheckIcon,
  CheckCircle2Icon,
  KeyRoundIcon,
  LightbulbIcon,
  ScaleIcon,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { EsquemaVisual } from "@/components/esquema"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AULAS_POR_ID, aulasDaDisciplina, disciplinaDaAula, topicosDaAulaNoCargo } from "@/data/aulas"
import { CARGOS, NOMES_POOLS } from "@/data/edital"
import { questoesDosPools } from "@/data/questoes"
import { marcarTopicos, useProgresso } from "@/lib/store"

export function AulaPage() {
  const { id = "" } = useParams()
  const { cargo: cargoId, topicos } = useProgresso()
  const aula = AULAS_POR_ID.get(id)

  if (!aula) {
    return (
      <div className="space-y-3 py-10 text-center">
        <p className="font-medium">Aula não encontrada.</p>
        <Button variant="outline" asChild>
          <Link to="/aulas">Ver todas as aulas</Link>
        </Button>
      </div>
    )
  }

  const disciplina = disciplinaDaAula(cargoId, aula)
  const irmas = disciplina ? aulasDaDisciplina(disciplina) : []
  const pos = irmas.findIndex((a) => a.id === aula.id)
  const anterior = pos > 0 ? irmas[pos - 1] : undefined
  const proxima = pos >= 0 && pos < irmas.length - 1 ? irmas[pos + 1] : undefined
  const idsTopicos = topicosDaAulaNoCargo(cargoId, aula)
  const concluida = idsTopicos.length > 0 && idsTopicos.every((t) => topicos[t])
  const nomesTopicos = CARGOS[cargoId].disciplinas
    .flatMap((d) => d.topicos)
    .filter((t) => idsTopicos.includes(t.id))
    .map((t) => t.texto)
  const nQuestoes = questoesDosPools([aula.pool]).length

  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <Button variant="ghost" size="sm" className="-ml-2" asChild>
          <Link to="/aulas">
            <ArrowLeftIcon />
            Todas as aulas
          </Link>
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{disciplina?.nome ?? NOMES_POOLS[aula.pool]}</Badge>
          {concluida && (
            <Badge variant="outline" className="border-success/40 text-success">
              <CheckCircle2Icon />
              Concluída
            </Badge>
          )}
        </div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-balance">{aula.titulo}</h1>
        {nomesTopicos.length > 0 && (
          <p className="text-sm text-muted-foreground text-pretty">
            No edital: {nomesTopicos.join(" · ")}
          </p>
        )}
        {idsTopicos.length === 0 && (
          <p className="text-sm text-muted-foreground">Esta aula não faz parte do edital do cargo selecionado.</p>
        )}
      </div>

      <section className="space-y-3 text-[0.95rem] leading-relaxed">
        {aula.texto.map((p, i) => (
          <p key={i} className="text-pretty">
            {p}
          </p>
        ))}
      </section>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <KeyRoundIcon className="size-4 text-primary" />
            Pontos-chave
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {aula.pontosChave.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span className="text-pretty">{p}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {aula.esquemas && aula.esquemas.length > 0 && (
        <section className="space-y-3">
          {aula.esquemas.map((e, i) => (
            <EsquemaVisual key={i} esquema={e} />
          ))}
        </section>
      )}

      {aula.exemplos.length > 0 && (
        <section className="space-y-3">
          <h2 className="flex items-center gap-2 font-heading text-lg font-semibold">
            <LightbulbIcon className="size-4 text-warning" />
            Exemplos
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {aula.exemplos.map((ex, i) => (
              <div key={i} className="rounded-xl border p-4 text-sm">
                <p className="mb-1 font-medium">{ex.titulo}</p>
                <p className="whitespace-pre-line text-muted-foreground text-pretty">{ex.texto}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {aula.pegadinhas.length > 0 && (
        <section className="space-y-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
          <h2 className="flex items-center gap-2 font-heading text-base font-semibold">
            <AlertTriangleIcon className="size-4 text-destructive" />
            Pegadinhas da banca
          </h2>
          <ul className="space-y-2 text-sm">
            {aula.pegadinhas.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono text-destructive" aria-hidden>
                  ✗
                </span>
                <span className="text-pretty">{p}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {aula.fundamentos.length > 0 && (
        <p className="flex items-start gap-2 text-xs text-muted-foreground">
          <ScaleIcon className="mt-0.5 size-3.5 shrink-0" />
          <span>Base legal: {aula.fundamentos.join(" · ")}</span>
        </p>
      )}

      <div className="flex flex-wrap gap-2 border-t pt-4">
        {idsTopicos.length > 0 && (
          <Button
            variant={concluida ? "outline" : "default"}
            onClick={() => marcarTopicos(idsTopicos, !concluida)}
          >
            <CheckCircle2Icon />
            {concluida ? "Desmarcar aula" : "Concluir aula"}
          </Button>
        )}
        {disciplina && nQuestoes > 0 && (
          <Button variant="outline" asChild>
            <Link to={`/questoes?d=${disciplina.id}`}>
              <BookOpenCheckIcon />
              Praticar questões
            </Link>
          </Button>
        )}
      </div>

      {(anterior || proxima) && (
        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Navegação entre aulas">
          {anterior ? (
            <Link to={`/aulas/${anterior.id}`} className="rounded-xl border p-3 text-sm hover:bg-muted/60">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeftIcon className="size-3" /> Anterior
              </span>
              <span className="font-medium">{anterior.titulo}</span>
            </Link>
          ) : (
            <span />
          )}
          {proxima && (
            <Link to={`/aulas/${proxima.id}`} className="rounded-xl border p-3 text-right text-sm hover:bg-muted/60">
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Próxima <ArrowRightIcon className="size-3" />
              </span>
              <span className="font-medium">{proxima.titulo}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  )
}
