import { NotebookPenIcon, RotateCcwIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { QuestaoCard } from "@/components/questao-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CARGOS } from "@/data/edital"
import { questoesDaDisciplina } from "@/data/questoes"
import { limparRespostas, useProgresso } from "@/lib/store"

export function RevisaoPage() {
  const { cargo: cargoId, respostas } = useProgresso()
  const cargo = CARGOS[cargoId]

  const grupos = cargo.disciplinas
    .map((d) => ({
      disciplina: d,
      questoes: questoesDaDisciplina(d)
        .filter((q) => respostas[q.id]?.ultimaCorreta === false)
        .sort((a, b) => respostas[b.id].em - respostas[a.id].em),
    }))
    .filter((g) => g.questoes.length > 0)

  // Uma questão pode aparecer em mais de uma disciplina (pools compartilhados); conta uma vez.
  const total = new Set(grupos.flatMap((g) => g.questoes.map((q) => q.id))).size

  return (
    <>
      <PageHeader
        titulo="Caderno de erros"
        descricao="Itens cuja última resposta foi errada. Releia o comentário, volte na lei seca e refaça até acertar — acertando, o item sai daqui."
        acoes={
          total > 0 && (
            <Button asChild>
              <Link to="/questoes?filtro=erradas">
                <RotateCcwIcon />
                Refazer os {total} itens
              </Link>
            </Button>
          )
        }
      />

      {total === 0 ? (
        <Card>
          <CardContent className="space-y-3 py-12 text-center">
            <NotebookPenIcon className="mx-auto size-10 text-muted-foreground" />
            <p className="font-medium">Seu caderno de erros está vazio.</p>
            <p className="text-sm text-muted-foreground">Os itens que você errar em Questões ou no Simulado aparecem aqui.</p>
            <Button variant="outline" asChild>
              <Link to="/questoes">Ir para as questões</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Accordion type="multiple" defaultValue={grupos.slice(0, 1).map((g) => g.disciplina.id)}>
          {grupos.map(({ disciplina, questoes }) => (
            <AccordionItem key={disciplina.id} value={disciplina.id}>
              <AccordionTrigger className="hover:no-underline">
                <span className="flex flex-1 items-center justify-between gap-3 pr-2">
                  <span className="text-left font-medium">{disciplina.nome}</span>
                  <Badge variant="destructive">{questoes.length}</Badge>
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild>
                    <Link to={`/questoes?d=${disciplina.id}&filtro=erradas`}>
                      <RotateCcwIcon />
                      Refazer esta disciplina
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => limparRespostas(questoes.map((q) => q.id))}>
                    <Trash2Icon />
                    Limpar da lista
                  </Button>
                </div>
                {questoes.map((q) => (
                  <QuestaoCard key={q.id} questao={q} resposta={respostas[q.id].ultima} revelada />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  )
}
