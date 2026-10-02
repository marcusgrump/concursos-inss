import { ExternalLinkIcon, FileTextIcon, InfoIcon, ScaleIcon, SearchIcon, TriangleAlertIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { documentoDoArquivo } from "@/data/documentos"
import { CARGOS } from "@/data/edital"
import {
  NORMAS,
  PROVAS_ANTERIORES,
  type ArquivoProva,
  type Norma,
  type Prioridade,
  type ProvaAnterior,
} from "@/data/materiais"
import type { CargoId } from "@/data/types"
import { useProgresso } from "@/lib/store"

const NOME_CURTO: Record<CargoId, string> = {
  tecnico: "Técnico",
  analista: "Analista",
}

const PRIORIDADES: { id: Prioridade; titulo: string; descricao: string; variante: "default" | "secondary" | "outline" }[] = [
  {
    id: "alta",
    titulo: "Prioridade alta",
    descricao: "Base da prova: leia primeiro e releia mais de uma vez.",
    variante: "default",
  },
  {
    id: "media",
    titulo: "Prioridade média",
    descricao: "Complementam a base: estude depois da prioridade alta.",
    variante: "secondary",
  },
  {
    id: "baixa",
    titulo: "Prioridade baixa",
    descricao: "Menor peso no edital: deixe para quando a base estiver sólida.",
    variante: "outline",
  },
]

function normalizar(texto: string) {
  return texto.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()
}

function semPontos(texto: string) {
  return texto.replace(/\./g, "")
}

function dominio(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function MateriaisPage() {
  return (
    <>
      <PageHeader
        titulo="Materiais de estudo"
        descricao="Legislação oficial para ler na lei seca e provas anteriores do Cebraspe para treinar com tempo e gabarito."
      />

      <Tabs defaultValue="legislacao">
        <TabsList className="mb-4 w-full sm:w-auto">
          <TabsTrigger value="legislacao">
            <ScaleIcon />
            Legislação
          </TabsTrigger>
          <TabsTrigger value="provas">
            <FileTextIcon />
            Provas anteriores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="legislacao">
          <Legislacao />
        </TabsContent>
        <TabsContent value="provas">
          <ProvasAnteriores />
        </TabsContent>
      </Tabs>
    </>
  )
}

// ---- Legislação ------------------------------------------------------------

function Legislacao() {
  const { cargo } = useProgresso()
  const [soMeuCargo, setSoMeuCargo] = useState(true)
  const [busca, setBusca] = useState("")

  const termo = normalizar(busca.trim())
  const filtrando = soMeuCargo || termo !== ""

  const normas = useMemo(
    () =>
      NORMAS.filter((n) => {
        if (soMeuCargo && !n.cargos.includes(cargo)) return false
        if (!termo) return true
        const alvo = normalizar(`${n.nome} ${n.apelido} ${n.dica}`)
        // "8213" deve achar "8.213".
        return alvo.includes(termo) || semPontos(alvo).includes(semPontos(termo))
      }),
    [cargo, soMeuCargo, termo],
  )

  return (
    <div className="space-y-6">
      <Alert role="note">
        <InfoIcon />
        <AlertTitle>Leia a lei seca</AlertTitle>
        <AlertDescription>
          O Cebraspe cobra a literalidade do texto legal: uma palavra trocada (“pode” por “deve”), um prazo ou um
          percentual inverte o gabarito do item. Os links abaixo levam aos textos oficiais, de preferência compilados,
          já com as alterações posteriores.
        </AlertDescription>
      </Alert>

      <Card size="sm">
        <CardContent className="space-y-3">
          <div className="relative">
            <SearchIcon
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar (ex.: 8.213, BPC, ética)…"
              className="pl-8"
              aria-label="Buscar na legislação"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <Switch id="so-meu-cargo" checked={soMeuCargo} onCheckedChange={setSoMeuCargo} />
              <Label htmlFor="so-meu-cargo" className="flex-wrap gap-x-1.5 leading-snug">
                Só do meu cargo
                <span className="font-normal text-muted-foreground">({CARGOS[cargo].nome})</span>
              </Label>
            </div>
            <p role="status" className="font-mono text-xs text-muted-foreground">
              {normas.length} de {NORMAS.length} normas
            </p>
          </div>
        </CardContent>
      </Card>

      {PRIORIDADES.map((p) => {
        const doGrupo = normas.filter((n) => n.prioridade === p.id)
        if (doGrupo.length === 0) return null
        return (
          <section key={p.id} aria-labelledby={`prioridade-${p.id}`} className="space-y-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 id={`prioridade-${p.id}`} className="font-heading text-lg font-semibold">
                  {p.titulo}
                </h2>
                <Badge variant={p.variante}>{doGrupo.length}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{p.descricao}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {doGrupo.map((n) => (
                <li key={n.id} className="flex">
                  <CartaoNorma norma={n} />
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      {normas.length === 0 && (
        <div className="space-y-3 py-8 text-center">
          <p className="text-sm text-muted-foreground">Nenhuma norma encontrada com os filtros atuais.</p>
          {filtrando && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBusca("")
                setSoMeuCargo(false)
              }}
            >
              Limpar busca e filtro
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

function CartaoNorma({ norma }: { norma: Norma }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="break-words">
          <h3>{norma.nome}</h3>
        </CardTitle>
        <CardDescription className="text-pretty">{norma.apelido}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {norma.cargos.map((c) => (
            <Badge key={c} variant="outline">
              {NOME_CURTO[c]}
            </Badge>
          ))}
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-muted-foreground">O que mais cai</p>
          <p className="text-sm text-pretty">{norma.dica}</p>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap justify-between gap-x-3 gap-y-2">
        <Button asChild size="sm">
          <a href={norma.url} target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
            Abrir texto oficial
            <span className="sr-only">
              : {norma.nome} (abre em nova aba)
            </span>
          </a>
        </Button>
        <span className="font-mono text-xs text-muted-foreground">{dominio(norma.url)}</span>
      </CardFooter>
    </Card>
  )
}

// ---- Provas anteriores -----------------------------------------------------

function ProvasAnteriores() {
  const { cargo } = useProgresso()
  const { prova } = CARGOS[cargo]

  // Provas do cargo escolhido primeiro; depois a mais recente.
  const provas = useMemo(
    () =>
      [...PROVAS_ANTERIORES].sort((a, b) => {
        const cargoA = a.cargo === cargo ? 0 : 1
        const cargoB = b.cargo === cargo ? 0 : 1
        return cargoA - cargoB || b.ano - a.ano
      }),
    [cargo],
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Como usar as provas</h2>
          </CardTitle>
          <CardDescription>Treine como se fosse o dia da prova e meça onde você está.</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm marker:font-mono marker:text-muted-foreground">
            <li>
              <span className="font-medium">Cronometre:</span> resolva em {prova.duracao}, como na prova real e sem
              consultar a lei.
            </li>
            <li>
              <span className="font-medium">Corrija com o gabarito definitivo</span> na regra do Cebraspe: item certo
              vale <span className="font-mono text-success">+1</span>, errado{" "}
              <span className="font-mono text-destructive">−1</span> e em branco{" "}
              <span className="font-mono">0</span>. Item anulado (X) vale ponto para todos.
            </li>
            <li>
              <span className="font-medium">Compare com as notas mínimas:</span> P1 ≥ {prova.minimoP1} (de{" "}
              {prova.itensP1} itens), P2 ≥ {prova.minimoP2} (de {prova.itensP2}) e total ≥ {prova.minimoTotal}. Ficar
              abaixo de qualquer uma elimina o candidato.
            </li>
          </ol>
        </CardContent>
      </Card>

      <div
        role="note"
        className="flex gap-3 rounded-lg border border-warning/40 bg-warning/10 px-3 py-2.5 text-sm"
      >
        <TriangleAlertIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-warning" />
        <p className="text-pretty">
          <span className="font-medium">A legislação mudou desde as provas.</span> A EC 103/2019, por exemplo, é
          posterior à prova de 2016, e a Lei 8.429/1992 foi alterada em 2021. Alguns gabaritos podem estar
          desatualizados: confira o item na lei atual antes de decorar a resposta.
        </p>
      </div>

      <section aria-labelledby="provas-disponiveis" className="space-y-3">
        <h2 id="provas-disponiveis" className="font-heading text-lg font-semibold">
          Provas disponíveis
        </h2>
        <ul className="grid gap-3 lg:grid-cols-2">
          {provas.map((p) => (
            <li key={p.id} className="flex">
              <CartaoProva prova={p} meuCargo={p.cargo === cargo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function CartaoProva({ prova, meuCargo }: { prova: ProvaAnterior; meuCargo: boolean }) {
  const { itensP1, itensP2 } = CARGOS[prova.cargo].prova

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-pretty">
          <h3>{prova.titulo}</h3>
        </CardTitle>
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <Badge variant="secondary">{prova.ano}</Badge>
          <Badge variant="outline">{NOME_CURTO[prova.cargo]}</Badge>
          <Badge variant="outline">{prova.banca}</Badge>
          {meuCargo && <Badge>Seu cargo</Badge>}
        </div>
        <CardDescription className="pt-1">
          Aplicada em {prova.aplicacao} · {itensP1 + itensP2} itens (P1: {itensP1} + P2: {itensP2})
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        {prova.observacao && <p className="text-sm text-pretty text-muted-foreground">{prova.observacao}</p>}
        <ul className="divide-y rounded-lg border">
          {prova.provas.map((a) => (
            <LinhaArquivo key={a.caminho} arquivo={a} tipo="prova" titulo={prova.titulo} />
          ))}
          {prova.gabaritos.map((a) => (
            <LinhaArquivo key={a.caminho} arquivo={a} tipo="gabarito" titulo={prova.titulo} />
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm" asChild className="px-0">
          <a href={prova.fonteOficial} target="_blank" rel="noreferrer">
            Fonte oficial ({prova.banca})
            <ExternalLinkIcon />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function LinhaArquivo({ arquivo, tipo, titulo }: { arquivo: ArquivoProva; tipo: "prova" | "gabarito"; titulo: string }) {
  return (
    <li className="flex flex-col gap-2 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
      <span className="min-w-0 text-sm text-pretty">{arquivo.rotulo}</span>
      <Button
        asChild
        size="sm"
        variant={tipo === "prova" ? "default" : "outline"}
        className="w-full shrink-0 sm:w-auto"
      >
        <Link to={`/leitor/${documentoDoArquivo(arquivo.caminho)?.id ?? ""}`}>
          <FileTextIcon />
          {tipo === "prova" ? "Abrir prova" : "Gabarito"}
          <span className="sr-only">
            : {titulo}, {arquivo.rotulo}
          </span>
        </Link>
      </Button>
    </li>
  )
}
