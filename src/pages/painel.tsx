import {
  ArrowRightIcon,
  BookOpenCheckIcon,
  CalendarClockIcon,
  FileTextIcon,
  GraduationCapIcon,
  LayersIcon,
  LibraryIcon,
  NotebookPenIcon,
  TimerIcon,
} from "lucide-react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CARGOS, SITUACAO } from "@/data/edital"
import { percentual } from "@/lib/cebraspe"
import { estatisticasPorDisciplina, resumoGeral } from "@/lib/estatisticas"
import { useProgresso } from "@/lib/store"

const RECOMENDACOES = [
  {
    titulo: "Priorize os Conhecimentos Específicos",
    texto: "A P2 vale 70 dos 120 itens e tem a nota mínima mais alta. Seguridade e benefícios do RGPS (Leis 8.212 e 8.213, EC 103) decidem a prova.",
  },
  {
    titulo: "Leia a lei seca",
    texto: "O Cebraspe cobra literalidade: prazos, idades, percentuais e exceções. Use a aba “Leis e provas” para abrir os textos oficiais.",
  },
  {
    titulo: "Estude em ciclos curtos",
    texto: "Aula do tópico → 15–20 questões → releia os comentários dos erros. Conclua a aula (marca o tópico no Edital) depois de praticar.",
  },
  {
    titulo: "Revise com espaçamento",
    texto: "Flashcards todo dia (os pendentes aparecem sozinhos) e caderno de erros uma vez por semana.",
  },
  {
    titulo: "Treine a estratégia do branco",
    texto: "Errar custa 1 ponto. No resultado do simulado, compare sua nota com a que teria se deixasse em branco o que errou.",
  },
  {
    titulo: "Faça provas anteriores cronometradas",
    texto: "Resolva as provas oficiais do Cebraspe em 3h30 e corrija com o gabarito aplicando a regra de −1 por erro.",
  },
]

export function PainelPage() {
  const estado = useProgresso()
  const cargo = CARGOS[estado.cargo]
  const r = resumoGeral(estado, estado.cargo)
  const porDisciplina = estatisticasPorDisciplina(estado, estado.cargo)
  const ultimoSimulado = r.simulados[0]

  // Sugere a disciplina com menor cobertura de questões respondidas.
  const sugestao = [...porDisciplina]
    .filter((d) => d.questoesTotal > 0)
    .sort((a, b) => a.respondidas / a.questoesTotal - b.respondidas / b.questoesTotal)[0]

  return (
    <>
      <PageHeader
        titulo={`Olá! Bora estudar para ${cargo.nome}?`}
        descricao={`${cargo.nivel} · base: ${cargo.editalReferencia}. Troque o cargo no menu lateral.`}
      />

      <Card className="mb-6 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>Situação do concurso</CardTitle>
            <Badge variant="outline">
              <CalendarClockIcon />
              {SITUACAO.atualizadoEm}
            </Badge>
          </div>
          <CardDescription className="text-pretty">{SITUACAO.resumo}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
            {SITUACAO.pontos.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Indicador
          titulo="Edital estudado"
          valor={`${percentual(r.topicosFeitos, r.topicosTotal)}%`}
          detalhe={`${r.topicosFeitos} de ${r.topicosTotal} tópicos`}
          progresso={percentual(r.topicosFeitos, r.topicosTotal)}
        />
        <Indicador
          titulo="Questões respondidas"
          valor={`${r.respondidas}/${r.questoesTotal}`}
          detalhe={
            r.tentativas > 0 ? `${percentual(r.acertosTotais, r.tentativas)}% de acerto nas tentativas` : "Comece pelas questões"
          }
          progresso={percentual(r.respondidas, r.questoesTotal)}
        />
        <Indicador
          titulo="Flashcards para hoje"
          valor={String(r.cartoesPendentes)}
          detalhe={`${r.cartoesDominados} de ${r.cartoesTotal} dominados`}
          progresso={percentual(r.cartoesDominados, r.cartoesTotal)}
        />
        <Indicador
          titulo="Último simulado"
          valor={ultimoSimulado ? `${ultimoSimulado.nota} pts` : "—"}
          detalhe={
            ultimoSimulado
              ? `${ultimoSimulado.certas} C · ${ultimoSimulado.erradas} E · ${ultimoSimulado.brancos} em branco (${ultimoSimulado.total} itens)`
              : "Nenhum simulado feito ainda"
          }
        />
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Atalho para="/aulas" icone={GraduationCapIcon} titulo="Aulas" texto="Teoria, exemplos e esquemas de cada tópico" />
        <Atalho
          para={sugestao ? `/questoes?d=${sugestao.disciplina.id}` : "/questoes"}
          icone={BookOpenCheckIcon}
          titulo="Continuar questões"
          texto={sugestao ? `Sugestão: ${sugestao.disciplina.nome}` : "Treine item a item"}
        />
        <Atalho para="/simulado" icone={TimerIcon} titulo="Fazer simulado" texto="Prova cronometrada com correção Cebraspe" />
        <Atalho
          para="/flashcards"
          icone={LayersIcon}
          titulo="Revisar flashcards"
          texto={r.cartoesPendentes > 0 ? `${r.cartoesPendentes} cartões pendentes hoje` : "Nada pendente — revisão livre"}
        />
        <Atalho
          para="/revisao"
          icone={NotebookPenIcon}
          titulo="Caderno de erros"
          texto={r.erradasPendentes > 0 ? `${r.erradasPendentes} itens para refazer` : "Nenhum erro pendente"}
        />
        <Atalho para="/edital" icone={FileTextIcon} titulo="Edital e PDF oficial" texto="Checklist do conteúdo programático" />
        <Atalho para="/materiais" icone={LibraryIcon} titulo="Leis e provas anteriores" texto="Lei seca e provas oficiais do Cebraspe" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Como estudar (recomendações)</CardTitle>
          <CardDescription>Um ciclo simples, pensado para a prova Certo/Errado do Cebraspe.</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 text-sm sm:grid-cols-2">
            {RECOMENDACOES.map((r, i) => (
              <li key={r.titulo} className="flex gap-3 rounded-lg border p-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-medium">{r.titulo}</span>
                  <span className="text-muted-foreground text-pretty">{r.texto}</span>
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Progresso por disciplina</CardTitle>
          <CardDescription>Tópicos do edital marcados e desempenho na última resposta de cada questão.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {porDisciplina.map((d) => (
            <div key={d.disciplina.id} className="grid gap-2 sm:grid-cols-[1fr_10rem_10rem] sm:items-center sm:gap-4">
              <Link to={`/questoes?d=${d.disciplina.id}`} className="text-sm font-medium hover:underline">
                {d.disciplina.nome}
              </Link>
              <div className="space-y-1">
                <Progress value={percentual(d.topicosFeitos, d.topicosTotal)} />
                <p className="font-mono text-xs text-muted-foreground">
                  edital {d.topicosFeitos}/{d.topicosTotal}
                </p>
              </div>
              <div className="space-y-1">
                <Progress value={percentual(d.acertadas, d.respondidas)} className="[&>*]:bg-success" />
                <p className="font-mono text-xs text-muted-foreground">
                  {d.respondidas > 0 ? `${percentual(d.acertadas, d.respondidas)}% de ${d.respondidas}` : "sem respostas"}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  )
}

function Indicador({
  titulo,
  valor,
  detalhe,
  progresso,
}: {
  titulo: string
  valor: string
  detalhe: string
  progresso?: number
}) {
  return (
    <Card size="sm">
      <CardContent className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">{titulo}</p>
        <p className="font-mono text-2xl font-semibold tracking-tight">{valor}</p>
        {progresso !== undefined && <Progress value={progresso} />}
        <p className="text-xs text-muted-foreground">{detalhe}</p>
      </CardContent>
    </Card>
  )
}

function Atalho({
  para,
  icone: Icone,
  titulo,
  texto,
}: {
  para: string
  icone: typeof TimerIcon
  titulo: string
  texto: string
}) {
  return (
    <Button variant="outline" asChild className="h-auto justify-start gap-3 p-4 text-left whitespace-normal">
      <Link to={para}>
        <Icone className="size-5! text-primary" />
        <span className="min-w-0 flex-1">
          <span className="block font-medium">{titulo}</span>
          <span className="block text-xs font-normal text-muted-foreground">{texto}</span>
        </span>
        <ArrowRightIcon className="text-muted-foreground" />
      </Link>
    </Button>
  )
}
