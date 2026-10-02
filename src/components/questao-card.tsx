import { CheckIcon, CircleSlashIcon, GraduationCapIcon, ScaleIcon, XIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { NOMES_POOLS } from "@/data/edital"
import type { Gabarito, Questao } from "@/data/types"
import { cn } from "@/lib/utils"

interface QuestaoCardProps {
  questao: Questao
  numero?: number
  /** Resposta marcada (null = em branco / ainda não respondida). */
  resposta: Gabarito | null
  /** Mostra gabarito e comentário. */
  revelada: boolean
  onResponder?: (resposta: Gabarito) => void
  /** Botão "Deixar em branco" (só no modo treino). */
  onPular?: () => void
  rodape?: React.ReactNode
}

export function QuestaoCard({ questao, numero, resposta, revelada, onResponder, onPular, rodape }: QuestaoCardProps) {
  const acertou = resposta !== null && resposta === questao.gabarito

  return (
    <Card className="gap-5">
      <CardHeader className="flex flex-wrap items-center gap-2">
        {numero !== undefined && <span className="font-mono text-xs text-muted-foreground">Item {numero}</span>}
        <Badge variant="secondary">{NOMES_POOLS[questao.pool]}</Badge>
        <Badge variant="outline">{questao.assunto}</Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {questao.texto && (
          <blockquote className="space-y-2 rounded-lg border-l-4 border-primary/40 bg-muted/50 p-4 text-sm leading-relaxed">
            {questao.texto.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
        )}

        <p className="text-base leading-relaxed text-pretty">{questao.enunciado}</p>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Julgue o item">
          <BotaoJulgamento
            valor="C"
            resposta={resposta}
            gabarito={questao.gabarito}
            revelada={revelada}
            onClick={onResponder}
          />
          <BotaoJulgamento
            valor="E"
            resposta={resposta}
            gabarito={questao.gabarito}
            revelada={revelada}
            onClick={onResponder}
          />
          {onPular && !revelada && (
            <Button variant="ghost" size="lg" onClick={onPular}>
              <CircleSlashIcon />
              Deixar em branco
            </Button>
          )}
        </div>

        {revelada && (
          <div
            className={cn(
              "space-y-2 rounded-lg border p-4 text-sm",
              resposta === null
                ? "border-border bg-muted/40"
                : acertou
                  ? "border-success/40 bg-success/10"
                  : "border-destructive/40 bg-destructive/10",
            )}
            aria-live="polite"
          >
            <p className="font-medium">
              {resposta === null ? "Item em branco (0 ponto)." : acertou ? "Você acertou! (+1 ponto)" : "Você errou (−1 ponto)."}{" "}
              Gabarito: <strong>{questao.gabarito === "C" ? "CERTO" : "ERRADO"}</strong>
            </p>
            <p className="leading-relaxed text-pretty">{questao.comentario}</p>
            {questao.fundamento && (
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ScaleIcon className="size-3.5" />
                {questao.fundamento}
              </p>
            )}
            <Link
              to={`/aulas?busca=${encodeURIComponent(questao.assunto.split(/[—–:-]/)[0].trim())}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <GraduationCapIcon className="size-3.5" />
              Estudar este assunto nas aulas
            </Link>
          </div>
        )}
      </CardContent>

      {rodape && <CardFooter className="flex flex-wrap justify-between gap-2 border-t pt-4 pb-4">{rodape}</CardFooter>}
    </Card>
  )
}

function BotaoJulgamento({
  valor,
  resposta,
  gabarito,
  revelada,
  onClick,
}: {
  valor: Gabarito
  resposta: Gabarito | null
  gabarito: Gabarito
  revelada: boolean
  onClick?: (valor: Gabarito) => void
}) {
  const marcado = resposta === valor
  const correto = revelada && gabarito === valor
  const errado = revelada && marcado && gabarito !== valor

  return (
    <Button
      size="lg"
      variant={marcado && !revelada ? "default" : "outline"}
      aria-pressed={marcado}
      disabled={revelada || !onClick}
      onClick={() => onClick?.(valor)}
      className={cn(
        "min-w-28 disabled:opacity-100",
        correto && "border-success bg-success/15 text-foreground",
        errado && "border-destructive bg-destructive/15 text-foreground",
      )}
    >
      {valor === "C" ? <CheckIcon /> : <XIcon />}
      {valor === "C" ? "Certo" : "Errado"}
    </Button>
  )
}
