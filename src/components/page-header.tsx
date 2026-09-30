interface PageHeaderProps {
  titulo: string
  descricao?: React.ReactNode
  acoes?: React.ReactNode
}

export function PageHeader({ titulo, descricao, acoes }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-balance">{titulo}</h1>
        {descricao && <p className="max-w-2xl text-sm text-muted-foreground text-pretty">{descricao}</p>}
      </div>
      {acoes && <div className="no-print flex flex-wrap gap-2">{acoes}</div>}
    </div>
  )
}
