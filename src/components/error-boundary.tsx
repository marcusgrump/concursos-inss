import { AlertTriangleIcon, RotateCcwIcon } from "lucide-react"
import { Component, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
}

interface State {
  erro: Error | null
}

/**
 * Sem um limite de erro, qualquer exceção ao renderizar desmonta o app inteiro
 * e o usuário vê só uma tela branca. Aqui mostramos o erro e um caminho de volta.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { erro: null }

  static getDerivedStateFromError(erro: Error): State {
    return { erro }
  }

  componentDidCatch(erro: Error) {
    console.error("Erro ao renderizar a página:", erro)
  }

  render() {
    const { erro } = this.state
    if (!erro) return this.props.children

    return (
      <div className="mx-auto max-w-lg space-y-4 rounded-xl border p-6 text-center">
        <AlertTriangleIcon className="mx-auto size-10 text-warning" />
        <div className="space-y-1">
          <p className="font-semibold">Esta página não pôde ser exibida.</p>
          <p className="text-sm text-muted-foreground">
            Recarregar costuma resolver (por exemplo, quando o site acabou de ser atualizado). Seu progresso continua salvo.
          </p>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-left text-xs whitespace-pre-wrap">{erro.message}</pre>
        <div className="flex flex-wrap justify-center gap-2">
          <Button onClick={() => window.location.reload()}>
            <RotateCcwIcon />
            Recarregar
          </Button>
          <Button variant="outline" onClick={() => (window.location.hash = "#/")}>
            Ir para o painel
          </Button>
        </div>
      </div>
    )
  }
}
