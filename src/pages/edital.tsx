import {
  BookOpenCheckIcon,
  CheckCheckIcon,
  DownloadIcon,
  ExpandIcon,
  InfoIcon,
  PrinterIcon,
  SearchIcon,
} from "lucide-react"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { PdfViewer } from "@/components/pdf-viewer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { documentoDoArquivo } from "@/data/documentos"
import { CARGOS, LISTA_CARGOS, SITUACAO } from "@/data/edital"
import { questoesDaDisciplina } from "@/data/questoes"
import type { Cargo, CargoId, Disciplina } from "@/data/types"
import { percentual } from "@/lib/cebraspe"
import { alternarTopico, marcarTopicos, useProgresso } from "@/lib/store"

const NOMES_BLOCO = {
  basicos: "Conhecimentos Básicos (P1)",
  especificos: "Conhecimentos Específicos (P2)",
} as const

function urlPublica(caminho: string) {
  return `${import.meta.env.BASE_URL}${caminho}`
}

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
}

export function EditalPage() {
  const { cargo: cargoId } = useProgresso()
  const cargo = CARGOS[cargoId]

  return (
    <>
      <PageHeader
        titulo={`Edital — ${cargo.nome}`}
        descricao={<>Base: {cargo.editalReferencia}. Marque os tópicos conforme for estudando.</>}
        acoes={
          <>
            <Button variant="outline" onClick={() => window.print()}>
              <PrinterIcon />
              Imprimir / salvar PDF
            </Button>
            <Button asChild>
              <a href={urlPublica(cargo.pdf.arquivo)} download>
                <DownloadIcon />
                Baixar edital oficial
              </a>
            </Button>
          </>
        }
      />

      <Alert className="no-print mb-6">
        <InfoIcon />
        <AlertTitle>Situação do concurso em {SITUACAO.atualizadoEm}</AlertTitle>
        <AlertDescription>{SITUACAO.resumo}</AlertDescription>
      </Alert>

      <Tabs defaultValue="conteudo">
        <TabsList className="no-print mb-4 w-full sm:w-auto">
          <TabsTrigger value="conteudo">
            <span className="sm:hidden">Conteúdo</span>
            <span className="hidden sm:inline">Conteúdo programático</span>
          </TabsTrigger>
          <TabsTrigger value="pdf">
            <span className="sm:hidden">PDF</span>
            <span className="hidden sm:inline">Edital em PDF</span>
          </TabsTrigger>
          <TabsTrigger value="prova">Cargo e prova</TabsTrigger>
        </TabsList>

        <TabsContent value="conteudo">
          <ConteudoProgramatico cargo={cargo} />
        </TabsContent>
        <TabsContent value="pdf">
          <VisualizadorPdf cargoAtual={cargoId} />
        </TabsContent>
        <TabsContent value="prova">
          <SobreProva cargo={cargo} />
        </TabsContent>
      </Tabs>
    </>
  )
}

function ConteudoProgramatico({ cargo }: { cargo: Cargo }) {
  const { topicos } = useProgresso()
  const [busca, setBusca] = useState("")
  const termo = normalizar(busca.trim())

  const todos = cargo.disciplinas.flatMap((d) => d.topicos)
  const feitos = todos.filter((t) => topicos[t.id]).length

  const filtradas = useMemo(
    () =>
      cargo.disciplinas
        .map((d) => ({
          ...d,
          topicos: termo
            ? d.topicos.filter((t) => normalizar(t.texto).includes(termo) || normalizar(d.nome).includes(termo))
            : d.topicos,
        }))
        .filter((d) => d.topicos.length > 0),
    [cargo, termo],
  )

  return (
    <div className="space-y-6">
      <Card className="no-print">
        <CardContent className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-medium">Progresso no edital</p>
            <p className="font-mono text-sm text-muted-foreground">
              {feitos}/{todos.length} tópicos · {percentual(feitos, todos.length)}%
            </p>
          </div>
          <Progress value={percentual(feitos, todos.length)} />
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar no conteúdo (ex.: carência, crase, LOAS)…"
              className="pl-8"
              aria-label="Buscar no conteúdo programático"
            />
          </div>
        </CardContent>
      </Card>

      {(["basicos", "especificos"] as const).map((bloco) => {
        const disciplinas = filtradas.filter((d) => d.bloco === bloco)
        if (disciplinas.length === 0) return null
        const itens = bloco === "basicos" ? cargo.prova.itensP1 : cargo.prova.itensP2
        return (
          <section key={bloco} className="no-print space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-lg font-semibold">{NOMES_BLOCO[bloco]}</h2>
              <Badge variant="secondary">{itens} itens</Badge>
            </div>
            <Accordion type="multiple" defaultValue={termo ? disciplinas.map((d) => d.id) : undefined}>
              {disciplinas.map((d) => (
                <ItemDisciplina
                  key={d.id}
                  disciplina={d}
                  original={cargo.disciplinas.find((o) => o.id === d.id)!}
                  topicos={topicos}
                />
              ))}
            </Accordion>
          </section>
        )
      })}

      {filtradas.length === 0 && (
        <p className="no-print py-8 text-center text-sm text-muted-foreground">Nenhum tópico encontrado para “{busca}”.</p>
      )}

      <VersaoImpressao cargo={cargo} topicos={topicos} />
    </div>
  )
}

function ItemDisciplina({
  disciplina,
  original,
  topicos,
}: {
  disciplina: Disciplina
  original: Disciplina
  topicos: Record<string, boolean>
}) {
  const feitos = original.topicos.filter((t) => topicos[t.id]).length
  const total = original.topicos.length
  const nQuestoes = questoesDaDisciplina(original).length
  const tudoMarcado = feitos === total

  return (
    <AccordionItem value={disciplina.id}>
      <AccordionTrigger className="gap-4 hover:no-underline">
        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="min-w-0 flex-1 text-left font-medium">{disciplina.nome}</span>
          <span className="flex items-center gap-3">
            <Progress value={percentual(feitos, total)} className="w-24" />
            <span className="w-12 text-right font-mono text-xs text-muted-foreground">
              {feitos}/{total}
            </span>
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4">
        <ul className="space-y-1">
          {disciplina.topicos.map((t, i) => (
            <li key={t.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-md px-2 py-1.5 hover:bg-muted/60">
                <Checkbox
                  className="mt-0.5"
                  checked={!!topicos[t.id]}
                  onCheckedChange={(v) => alternarTopico(t.id, v === true)}
                />
                <span className={topicos[t.id] ? "text-muted-foreground line-through decoration-muted-foreground/40" : ""}>
                  <span className="mr-1.5 font-mono text-xs text-muted-foreground">{i + 1}.</span>
                  {t.texto}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm">
            <Link to={`/questoes?d=${original.id}`}>
              <BookOpenCheckIcon />
              Praticar ({nQuestoes} {nQuestoes === 1 ? "questão" : "questões"})
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              marcarTopicos(
                original.topicos.map((t) => t.id),
                !tudoMarcado,
              )
            }
          >
            <CheckCheckIcon />
            {tudoMarcado ? "Desmarcar todos" : "Marcar todos"}
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

/** Lista completa, visível só na impressão (Ctrl+P → salvar como PDF). */
function VersaoImpressao({ cargo, topicos }: { cargo: Cargo; topicos: Record<string, boolean> }) {
  return (
    <div className="hidden space-y-5 text-sm print:block">
      <p className="text-xs">
        {cargo.editalReferencia} · Requisito: {cargo.requisito}
      </p>
      {(["basicos", "especificos"] as const).map((bloco) => (
        <section key={bloco} className="space-y-3">
          <h2 className="text-base font-semibold">
            {NOMES_BLOCO[bloco]} — {bloco === "basicos" ? cargo.prova.itensP1 : cargo.prova.itensP2} itens
          </h2>
          {cargo.disciplinas
            .filter((d) => d.bloco === bloco)
            .map((d) => (
              <div key={d.id} className="break-inside-avoid">
                <h3 className="font-medium">{d.nome}</h3>
                <ul className="mt-1 space-y-0.5 pl-1">
                  {d.topicos.map((t) => (
                    <li key={t.id}>
                      {topicos[t.id] ? "☑" : "☐"} {t.texto}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      ))}
    </div>
  )
}

function VisualizadorPdf({ cargoAtual }: { cargoAtual: CargoId }) {
  const [selecionado, setSelecionado] = useState<CargoId>(cargoAtual)
  const pdf = CARGOS[selecionado].pdf
  const url = urlPublica(pdf.arquivo)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ToggleGroup
          type="single"
          variant="outline"
          value={selecionado}
          onValueChange={(v) => v && setSelecionado(v as CargoId)}
          aria-label="Escolher edital"
        >
          {LISTA_CARGOS.map((c) => (
            <ToggleGroupItem key={c.id} value={c.id} className="px-3">
              {c.id === "tecnico" ? "Técnico · 2022" : "Analista · 2015"}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/leitor/${documentoDoArquivo(pdf.arquivo)?.id ?? ""}`}>
              <ExpandIcon />
              Abrir em tela inteira
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={url} download>
              <DownloadIcon />
              Baixar
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={pdf.fonteOficial} target="_blank" rel="noreferrer">
              Fonte oficial (Cebraspe)
            </a>
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{pdf.titulo}</p>

      <PdfViewer key={url} url={url} titulo={pdf.titulo} />
    </div>
  )
}

function SobreProva({ cargo }: { cargo: Cargo }) {
  const { prova } = cargo
  const total = prova.itensP1 + prova.itensP2

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{cargo.nome}</CardTitle>
          <CardDescription>{cargo.nivel}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <Info rotulo="Requisito" valor={cargo.requisito} />
          <Info rotulo="Remuneração (referência)" valor={cargo.remuneracaoReferencia} />
          <Info rotulo="Atribuições" valor={cargo.atribuicoes} />
          {cargo.observacao && <Info rotulo="Observação" valor={cargo.observacao} />}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estrutura da prova objetiva</CardTitle>
          <CardDescription>
            {total} itens Certo/Errado · {prova.duracao}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <table className="w-full text-left">
            <thead className="text-xs text-muted-foreground">
              <tr className="border-b">
                <th className="py-2 font-medium">Prova</th>
                <th className="py-2 text-right font-medium">Itens</th>
                <th className="py-2 text-right font-medium">Mínimo</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="border-b">
                <td className="py-2 font-sans">P1 · Básicos</td>
                <td className="py-2 text-right">{prova.itensP1}</td>
                <td className="py-2 text-right">{prova.minimoP1.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-sans">P2 · Específicos</td>
                <td className="py-2 text-right">{prova.itensP2}</td>
                <td className="py-2 text-right">{prova.minimoP2.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2 font-sans font-medium">Total</td>
                <td className="py-2 text-right">{total}</td>
                <td className="py-2 text-right">{prova.minimoTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-muted-foreground">
            Estrutura dos últimos editais do Cebraspe. Pode mudar no próximo concurso (inclusive a banca).
          </p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Como funciona a correção Certo/Errado</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm sm:grid-cols-3">
          <Regra titulo="+1 ponto" texto="Item marcado de acordo com o gabarito." className="text-success" />
          <Regra titulo="−1 ponto" texto="Item marcado em desacordo: um erro anula um acerto." className="text-destructive" />
          <Regra titulo="0 ponto" texto="Item deixado em branco (ou com marcação dupla)." className="text-muted-foreground" />
          <p className="text-muted-foreground sm:col-span-3">
            Estratégia: só marque quando tiver segurança razoável. Com 50% de chance de acerto no “chute”, o saldo
            esperado é zero — e você ainda corre o risco de ficar abaixo da nota mínima em um dos blocos.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Info({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">{rotulo}</p>
      <p className="text-pretty">{valor}</p>
    </div>
  )
}

function Regra({ titulo, texto, className }: { titulo: string; texto: string; className?: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className={`font-mono text-lg font-semibold ${className ?? ""}`}>{titulo}</p>
      <p className="text-muted-foreground">{texto}</p>
    </div>
  )
}
