import { CheckCircle2Icon, CircleIcon, SearchIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { aulasDaDisciplina, topicosDaAulaNoCargo, type Aula } from "@/data/aulas"
import { CARGOS } from "@/data/edital"
import { percentual } from "@/lib/cebraspe"
import { useProgresso } from "@/lib/store"

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
}

export function AulasPage() {
  const { cargo: cargoId, topicos } = useProgresso()
  const cargo = CARGOS[cargoId]
  const [params] = useSearchParams()
  const [busca, setBusca] = useState(params.get("busca") ?? "")
  const termo = normalizar(busca.trim())

  const estudada = (a: Aula) => {
    const ids = topicosDaAulaNoCargo(cargoId, a)
    return ids.length > 0 && ids.every((id) => topicos[id])
  }

  const grupos = useMemo(
    () =>
      cargo.disciplinas
        .map((d) => ({
          disciplina: d,
          aulas: aulasDaDisciplina(d).filter(
            (a) =>
              !termo ||
              normalizar(a.titulo).includes(termo) ||
              a.pontosChave.some((p) => normalizar(p).includes(termo)) ||
              a.texto.some((p) => normalizar(p).includes(termo)),
          ),
        }))
        .filter((g) => g.aulas.length > 0),
    [cargo, termo],
  )

  const todas = [...new Map(cargo.disciplinas.flatMap((d) => aulasDaDisciplina(d)).map((a) => [a.id, a])).values()]
  const feitas = todas.filter(estudada).length

  return (
    <>
      <PageHeader
        titulo="Aulas"
        descricao={`Teoria de cada tópico do edital de ${cargo.nome}: explicação, pontos-chave, exemplos, esquemas e pegadinhas da banca. Ao concluir uma aula, os tópicos dela são marcados no Edital.`}
      />

      <Card className="mb-6">
        <CardContent className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-medium">Aulas concluídas</p>
            <p className="font-mono text-sm text-muted-foreground">
              {feitas}/{todas.length} · {percentual(feitas, todas.length)}%
            </p>
          </div>
          <Progress value={percentual(feitas, todas.length)} />
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar nas aulas (ex.: carência, crase, BPC)…"
              className="pl-8"
              aria-label="Buscar nas aulas"
            />
          </div>
        </CardContent>
      </Card>

      {grupos.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">Nenhuma aula encontrada para “{busca}”.</p>
      )}

      <div className="space-y-6">
        {grupos.map(({ disciplina, aulas }) => (
          <Card key={disciplina.id}>
            <CardHeader className="flex flex-wrap items-center gap-2">
              <CardTitle>{disciplina.nome}</CardTitle>
              <Badge variant="secondary">{disciplina.bloco === "basicos" ? "P1 · Básicos" : "P2 · Específicos"}</Badge>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                {aulas.map((a) => {
                  const ok = estudada(a)
                  return (
                    <li key={a.id}>
                      <Link
                        to={`/aulas/${a.id}`}
                        className="flex items-start gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-muted/60"
                      >
                        {ok ? (
                          <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-success" aria-label="Concluída" />
                        ) : (
                          <CircleIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-label="Não concluída" />
                        )}
                        <span className="min-w-0">
                          <span className="block text-sm font-medium">{a.titulo}</span>
                          <span className="line-clamp-1 text-xs text-muted-foreground">{a.texto[0]}</span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
