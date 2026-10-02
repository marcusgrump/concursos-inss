import { lazy, type ComponentType } from "react"

const CHAVE = "concursos-inss:recarregou-chunk"

/**
 * `React.lazy` que se recupera de deploys novos: se o arquivo da página não
 * existir mais (o site foi atualizado com a aba aberta), recarrega uma vez para
 * buscar a versão atual em vez de deixar a tela em branco.
 */
export function lazyPagina<T extends ComponentType>(carregar: () => Promise<T>) {
  return lazy(async () => {
    try {
      const componente = await carregar()
      try {
        sessionStorage.removeItem(CHAVE)
      } catch {
        // sessionStorage indisponível: segue sem a proteção contra loop
      }
      return { default: componente }
    } catch (erro) {
      let jaRecarregou = true
      try {
        jaRecarregou = sessionStorage.getItem(CHAVE) === "1"
        if (!jaRecarregou) sessionStorage.setItem(CHAVE, "1")
      } catch {
        // sem sessionStorage não dá para evitar loop: não recarrega
      }
      if (!jaRecarregou) {
        window.location.reload()
        return new Promise<never>(() => {})
      }
      throw erro
    }
  })
}
