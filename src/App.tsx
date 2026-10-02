import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import { HashRouter, Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { lazyPagina } from "@/lib/lazy-pagina"
import { PainelPage } from "@/pages/painel"

// Demais páginas carregadas sob demanda (chunks separados no build).
const EditalPage = lazyPagina(() => import("@/pages/edital").then((m) => m.EditalPage))
const AulasPage = lazyPagina(() => import("@/pages/aulas").then((m) => m.AulasPage))
const AulaPage = lazyPagina(() => import("@/pages/aula").then((m) => m.AulaPage))
const QuestoesPage = lazyPagina(() => import("@/pages/questoes").then((m) => m.QuestoesPage))
const SimuladoPage = lazyPagina(() => import("@/pages/simulado").then((m) => m.SimuladoPage))
const FlashcardsPage = lazyPagina(() => import("@/pages/flashcards").then((m) => m.FlashcardsPage))
const RevisaoPage = lazyPagina(() => import("@/pages/revisao").then((m) => m.RevisaoPage))
const MateriaisPage = lazyPagina(() => import("@/pages/materiais").then((m) => m.MateriaisPage))
const LeitorPage = lazyPagina(() => import("@/pages/leitor").then((m) => m.LeitorPage))
const ProgressoPage = lazyPagina(() => import("@/pages/progresso").then((m) => m.ProgressoPage))

function RolarAoTopo() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        {/* HashRouter: funciona no GitHub Pages (subcaminho) sem configurar o servidor */}
        <HashRouter>
          <RolarAoTopo />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<PainelPage />} />
              <Route path="edital" element={<EditalPage />} />
              <Route path="aulas" element={<AulasPage />} />
              <Route path="aulas/:id" element={<AulaPage />} />
              <Route path="questoes" element={<QuestoesPage />} />
              <Route path="simulado" element={<SimuladoPage />} />
              <Route path="flashcards" element={<FlashcardsPage />} />
              <Route path="revisao" element={<RevisaoPage />} />
              <Route path="materiais" element={<MateriaisPage />} />
              <Route path="leitor/:id" element={<LeitorPage />} />
              <Route path="progresso" element={<ProgressoPage />} />
              <Route path="*" element={<PainelPage />} />
            </Route>
          </Routes>
        </HashRouter>
        <Toaster richColors position="top-center" />
      </TooltipProvider>
    </ThemeProvider>
  )
}
