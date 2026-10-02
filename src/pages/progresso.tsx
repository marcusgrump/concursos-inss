import { DownloadIcon, RotateCcwIcon, UploadIcon } from "lucide-react"
import { useRef, useState } from "react"
import { toast } from "sonner"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CARGOS } from "@/data/edital"
import { formatarDuracao, percentual } from "@/lib/cebraspe"
import { estatisticasPorDisciplina, resumoGeral } from "@/lib/estatisticas"
import { exportarProgresso, importarProgresso, resetarProgresso, useProgresso } from "@/lib/store"

export function ProgressoPage() {
  const estado = useProgresso()
  const cargo = CARGOS[estado.cargo]
  const r = resumoGeral(estado, estado.cargo)
  const linhas = estatisticasPorDisciplina(estado, estado.cargo)
  const arquivo = useRef<HTMLInputElement>(null)
  const [confirmarReset, setConfirmarReset] = useState(false)

  const baixarBackup = () => {
    const blob = new Blob([exportarProgresso()], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `estudo-inss-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    toast.success("Backup baixado.")
  }

  const restaurar = async (file: File | undefined) => {
    if (!file) return
    try {
      importarProgresso(await file.text())
      toast.success("Progresso restaurado.")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível ler o arquivo.")
    } finally {
      if (arquivo.current) arquivo.current.value = ""
    }
  }

  return (
    <>
      <PageHeader
        titulo="Meu progresso"
        descricao={`${cargo.nome}. Seus dados ficam apenas neste navegador — exporte um backup para não perder nada ou para continuar em outro dispositivo.`}
      />

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Desempenho por disciplina</CardTitle>
          <CardDescription>
            {r.respondidas} de {r.questoesTotal} questões respondidas · {r.tentativas} tentativas no total ·{" "}
            {percentual(r.acertosTotais, r.tentativas)}% de acerto geral
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[34rem] text-sm">
            <thead className="text-left text-xs text-muted-foreground">
              <tr className="border-b">
                <th className="py-2 font-medium">Disciplina</th>
                <th className="py-2 text-right font-medium">Edital</th>
                <th className="py-2 text-right font-medium">Respondidas</th>
                <th className="py-2 text-right font-medium">Acerto*</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {linhas.map((l) => (
                <tr key={l.disciplina.id} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-sans">{l.disciplina.nome}</td>
                  <td className="py-2 text-right">
                    {l.topicosFeitos}/{l.topicosTotal}
                  </td>
                  <td className="py-2 text-right">
                    {l.respondidas}/{l.questoesTotal}
                  </td>
                  <td className="py-2 text-right">{l.respondidas ? `${percentual(l.acertadas, l.respondidas)}%` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-muted-foreground">* Considerando a última resposta de cada questão.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Histórico de simulados</CardTitle>
        </CardHeader>
        <CardContent>
          {r.simulados.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhum simulado realizado para este cargo.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] text-sm">
                <thead className="text-left text-xs text-muted-foreground">
                  <tr className="border-b">
                    <th className="py-2 font-medium">Data</th>
                    <th className="py-2 text-right font-medium">Itens</th>
                    <th className="py-2 text-right font-medium">C / E / B</th>
                    <th className="py-2 text-right font-medium">Nota</th>
                    <th className="py-2 text-right font-medium">Tempo</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {r.simulados.map((s) => (
                    <tr key={s.id} className="border-b last:border-0">
                      <td className="py-2 font-sans">{new Date(s.em).toLocaleString("pt-BR")}</td>
                      <td className="py-2 text-right">{s.total}</td>
                      <td className="py-2 text-right">
                        {s.certas} / {s.erradas} / {s.brancos}
                      </td>
                      <td className="py-2 text-right font-semibold">{s.nota}</td>
                      <td className="py-2 text-right">{formatarDuracao(s.duracaoSeg)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Backup dos dados</CardTitle>
          <CardDescription>Inclui tópicos marcados, respostas, flashcards e simulados dos dois cargos.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button onClick={baixarBackup}>
            <DownloadIcon />
            Exportar backup (.json)
          </Button>
          <Button variant="outline" onClick={() => arquivo.current?.click()}>
            <UploadIcon />
            Importar backup
          </Button>
          <input
            ref={arquivo}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => restaurar(e.target.files?.[0])}
          />
          <Button variant="destructive" onClick={() => setConfirmarReset(true)}>
            <RotateCcwIcon />
            Apagar progresso
          </Button>
        </CardContent>
      </Card>

      <Dialog open={confirmarReset} onOpenChange={setConfirmarReset}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apagar todo o progresso?</DialogTitle>
            <DialogDescription>
              Tópicos marcados, respostas, flashcards e histórico de simulados serão removidos deste navegador. Exporte um
              backup antes se quiser guardar.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                resetarProgresso()
                setConfirmarReset(false)
                toast.success("Progresso apagado.")
              }}
            >
              Apagar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
