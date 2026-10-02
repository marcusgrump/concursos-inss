import { ThemeProvider } from "next-themes"
import { lazy, useEffect } from "react"
import { HashRouter, Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PainelPage } from "@/pages/painel"

// Demais páginas carregadas sob demanda (chunks separados no build).
const EditalPage = lazy(() => import("@/pages/edital").then((m) => ({ default: m.EditalPage })))
const QuestoesPage = lazy(() => import("@/pages/questoes").then((m) => ({ default: m.QuestoesPage })))
const SimuladoPage = lazy(() => import("@/pages/simulado").then((m) => ({ default: m.SimuladoPage })))
const FlashcardsPage = lazy(() => import("@/pages/flashcards").then((m) => ({ default: m.FlashcardsPage })))
const RevisaoPage = lazy(() => import("@/pages/revisao").then((m) => ({ default: m.RevisaoPage })))
const MateriaisPage = lazy(() => import("@/pages/materiais").then((m) => ({ default: m.MateriaisPage })))
const ProgressoPage = lazy(() => import("@/pages/progresso").then((m) => ({ default: m.ProgressoPage })))

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
              <Route path="questoes" element={<QuestoesPage />} />
              <Route path="simulado" element={<SimuladoPage />} />
              <Route path="flashcards" element={<FlashcardsPage />} />
              <Route path="revisao" element={<RevisaoPage />} />
              <Route path="materiais" element={<MateriaisPage />} />
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
