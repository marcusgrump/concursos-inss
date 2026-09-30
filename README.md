# Concursos INSS — Estudo do Edital

Aplicativo de estudos para os cargos de **Técnico** e **Analista do Seguro Social** do INSS, baseado nos últimos editais oficiais: **Técnico** — Edital nº 1 – INSS/2022 (Cebraspe); **Analista** — Edital nº 1 – INSS/2015 (Cebraspe), com formação em Serviço Social.

**Situação em 30/09/2026:** não há edital novo publicado. O pedido de 10 mil vagas (8.501 para Técnico e 1.499 para Analista) aguarda autorização do MGI, e a banca ainda não foi definida.

## Funcionalidades

- **Edital completo** com checklist de tópicos e acompanhamento de progresso.
- **PDFs oficiais dos editais** embutidos, para visualizar e baixar (ficam em `public/editais/`).
- **Questões Certo/Errado** no estilo Cebraspe, com comentário e fundamento legal.
- **Simulado cronometrado** com correção Cebraspe (um item errado anula um certo) e notas de corte do edital.
- **Flashcards** com repetição espaçada (sistema Leitner).
- **Caderno de erros** para revisar o que foi errado.
- **Modo escuro**.
- **Progresso salvo no navegador** (`localStorage`), com exportação e importação de backup em JSON.
- **Página imprimível** (salvar como PDF) do conteúdo programático.

## Stack

- [Vite](https://vite.dev/), [React](https://react.dev/) e TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix)
- [React Router](https://reactrouter.com/) (`HashRouter`)
- Fonte Geist auto-hospedada em woff2 (`src/assets/fonts`, licença OFL)

O app é 100% estático, sem backend. O `vite.config.ts` usa `base: './'` e o roteamento é por hash, então o build funciona em qualquer servidor estático ou subcaminho.

## Como rodar localmente

Requer Node 22.

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção (pasta dist/)
npm run preview   # serve o build localmente
```

## Publicação no GitHub Pages

O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) faz lint, build e publica o site a cada push na `main` (também pode ser disparado manualmente em Actions).

Configuração única: em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.

URL esperada: <https://marcusgrump.github.io/concursos-inss/>

## Estrutura de pastas

```
src/
  data/         edital.ts, questoes/ (questões por tema), flashcards.ts
  pages/        páginas do app (rotas)
  components/   componentes da interface (ui/ = shadcn)
  lib/          utilitários e funções auxiliares
  assets/fonts/ fontes Geist (woff2) e licença OFL
public/
  editais/      PDFs oficiais dos editais
```

## Aviso

As questões são **inéditas**, elaboradas no estilo da banca para fins de estudo. Confira sempre a legislação atualizada e o edital oficial quando for publicado.
