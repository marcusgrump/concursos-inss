import {
  BookOpenCheckIcon,
  ClipboardListIcon,
  FileTextIcon,
  GaugeIcon,
  LayersIcon,
  LibraryIcon,
  MenuIcon,
  MoonIcon,
  NotebookPenIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Suspense, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LISTA_CARGOS } from "@/data/edital"
import type { CargoId } from "@/data/types"
import { definirCargo, useProgresso } from "@/lib/store"
import { cn } from "@/lib/utils"

const NAV = [
  { to: "/", rotulo: "Painel", icone: GaugeIcon, fim: true },
  { to: "/edital", rotulo: "Edital", icone: FileTextIcon },
  { to: "/questoes", rotulo: "Questões", icone: BookOpenCheckIcon },
  { to: "/simulado", rotulo: "Simulado", icone: TimerIcon },
  { to: "/flashcards", rotulo: "Flashcards", icone: LayersIcon },
  { to: "/revisao", rotulo: "Caderno de erros", icone: NotebookPenIcon },
  { to: "/materiais", rotulo: "Leis e provas", icone: LibraryIcon },
  { to: "/progresso", rotulo: "Meu progresso", icone: ClipboardListIcon },
]

function Marca() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
        CE
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold">Estudo INSS</p>
        <p className="text-xs text-muted-foreground">Certo ou Errado</p>
      </div>
    </div>
  )
}

function SeletorCargo() {
  const { cargo } = useProgresso()
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-muted-foreground">Cargo</p>
      <Select value={cargo} onValueChange={(v) => definirCargo(v as CargoId)}>
        <SelectTrigger className="w-full" aria-label="Selecionar cargo">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LISTA_CARGOS.map((c) => (
            <SelectItem key={c.id} value={c.id}>
              {c.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function AlternarTema() {
  const { resolvedTheme, setTheme } = useTheme()
  const escuro = resolvedTheme === "dark"
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start"
      onClick={() => setTheme(escuro ? "light" : "dark")}
    >
      {escuro ? <SunIcon /> : <MoonIcon />}
      {escuro ? "Tema claro" : "Tema escuro"}
    </Button>
  )
}

function Navegacao({ aoNavegar }: { aoNavegar?: () => void }) {
  return (
    <nav className="flex flex-col gap-0.5" aria-label="Principal">
      {NAV.map(({ to, rotulo, icone: Icone, fim }) => (
        <NavLink
          key={to}
          to={to}
          end={fim}
          onClick={aoNavegar}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              isActive && "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary",
            )
          }
        >
          <Icone className="size-4" />
          {rotulo}
        </NavLink>
      ))}
    </nav>
  )
}

function ConteudoLateral({ aoNavegar }: { aoNavegar?: () => void }) {
  return (
    <div className="flex h-full flex-col gap-6">
      <SeletorCargo />
      <Navegacao aoNavegar={aoNavegar} />
      <div className="mt-auto space-y-2">
        <AlternarTema />
        <p className="px-2.5 text-xs text-muted-foreground">
          Progresso salvo neste navegador. Faça backup em “Meu progresso”.
        </p>
      </div>
    </div>
  )
}

export function Layout() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="min-h-svh bg-background">
      <aside className="no-print fixed inset-y-0 left-0 hidden w-64 flex-col gap-6 border-r bg-sidebar p-4 md:flex">
        <Marca />
        <ConteudoLateral />
      </aside>

      <header className="no-print sticky top-0 z-20 flex items-center justify-between border-b bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <Marca />
        <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-4">
            <SheetHeader className="p-0">
              <SheetTitle>
                <Marca />
              </SheetTitle>
              <SheetDescription className="sr-only">Navegação do app</SheetDescription>
            </SheetHeader>
            <ConteudoLateral aoNavegar={() => setMenuAberto(false)} />
          </SheetContent>
        </Sheet>
      </header>

      <main className="md:pl-64">
        <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">
          <Suspense fallback={<p className="py-10 text-center text-sm text-muted-foreground">Carregando…</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
