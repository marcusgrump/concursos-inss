import type { CargoId } from "./types"

/**
 * Materiais de estudo: legislação oficial (somente links) e provas anteriores
 * do Cebraspe (PDFs baixados do CDN oficial e guardados em public/provas/).
 *
 * As URLs da legislação foram verificadas (HTTP 200) em 30/09/2026. Prefira sempre
 * os textos compilados, que já incorporam as alterações posteriores.
 */

// ---- Legislação ------------------------------------------------------------

export type Prioridade = "alta" | "media" | "baixa"

export interface Norma {
  id: string
  /** Identificação formal, ex.: "Lei nº 8.213/1991". */
  nome: string
  /** Nome pelo qual a norma é conhecida, ex.: "Plano de Benefícios". */
  apelido: string
  /** Texto oficial (Planalto ou Imprensa Nacional), de preferência o compilado. */
  url: string
  prioridade: Prioridade
  /**
   * Cargos para os quais a norma é relevante, conforme os últimos editais (Técnico: 2022;
   * Analista: 2015). Normas posteriores ao edital de 2015, como a EC 103/2019, valem para ambos.
   */
  cargos: CargoId[]
  /** O que mais cai, em uma frase. */
  dica: string
}

const AMBOS: CargoId[] = ["tecnico", "analista"]
const SO_TECNICO: CargoId[] = ["tecnico"]
const SO_ANALISTA: CargoId[] = ["analista"]

export const NORMAS: Norma[] = [
  // Prioridade alta
  {
    id: "cf-1988",
    nome: "Constituição Federal de 1988",
    apelido: "CF/1988 (texto compilado)",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Arts. 5º–14 (direitos individuais, sociais, nacionalidade e direitos políticos), 37–41 (administração pública e servidores) e 194–204 (seguridade social: saúde, previdência e assistência); para Analista, inclua também os arts. 226–230 (família, criança, adolescente e idoso).",
  },
  {
    id: "ec-103-2019",
    nome: "Emenda Constitucional nº 103/2019",
    apelido: "Reforma da Previdência",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Regras de transição do RGPS (arts. 15–21: pontos, idade mínima progressiva e pedágios de 50% e 100%), art. 23 (pensão por morte: cota familiar de 50% + 10% por dependente) e art. 26 (cálculo do benefício pela média de todos os salários de contribuição).",
  },
  {
    id: "lei-8213-1991",
    nome: "Lei nº 8.213/1991",
    apelido: "Plano de Benefícios da Previdência Social",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Arts. 11–16 (segurados e dependentes), 15 (período de graça), 25–27 (carência), 18 (espécies de benefícios), 74–80 (pensão por morte e auxílio-reclusão) e 88–89 (serviço social e reabilitação profissional).",
  },
  {
    id: "lei-8212-1991",
    nome: "Lei nº 8.212/1991",
    apelido: "Plano de Custeio da Seguridade Social",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Arts. 12–15 (segurados e conceitos de empresa e empregador doméstico), 21–22 (alíquotas de segurados e empresas), 28 (salário de contribuição: parcelas que integram e que não integram) e 30 (prazos e obrigações de recolhimento).",
  },
  {
    id: "decreto-3048-1999",
    nome: "Decreto nº 3.048/1999",
    apelido: "Regulamento da Previdência Social (RPS)",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Regulamenta as Leis 8.212 e 8.213 e já traz as regras pós-EC 103; priorize os arts. 9º–16 (segurados e dependentes), 13 (manutenção da qualidade de segurado) e 26–30 (carência).",
  },
  {
    id: "lei-8742-1993",
    nome: "Lei nº 8.742/1993",
    apelido: "LOAS — Lei Orgânica da Assistência Social",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8742compilado.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Art. 20 (BPC: idoso com 65 anos ou mais ou pessoa com deficiência, renda per capita de até 1/4 do salário mínimo), 21 (revisão a cada 2 anos), 26-A (auxílio-inclusão) e arts. 2º–6º (objetivos, princípios, diretrizes e SUAS).",
  },
  {
    id: "lei-8112-1990",
    nome: "Lei nº 8.112/1990",
    apelido: "Regime Jurídico dos Servidores Públicos Federais",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Arts. 5º–9º (requisitos e provimento), 33 (vacância), 36–37 (remoção e redistribuição), 116–117 (deveres e proibições), 127–142 (penalidades) e 143–182 (sindicância e processo administrativo disciplinar).",
  },
  {
    id: "decreto-1171-1994",
    nome: "Decreto nº 1.171/1994",
    apelido: "Código de Ética Profissional do Servidor Público",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm",
    prioridade: "alta",
    cargos: AMBOS,
    dica: "Leia o anexo inteiro: Seção I (regras deontológicas), item XIV (deveres fundamentais), item XV (vedações) e o Capítulo II (Comissões de Ética).",
  },

  // Prioridade média
  {
    id: "in-128-2022",
    nome: "IN PRES/INSS nº 128/2022",
    apelido: "Disciplina as normas de direito previdenciário no INSS",
    url: "https://www.in.gov.br/web/dou/-/instrucao-normativa-pres/inss-n-128-de-28-de-marco-de-2022-389275446",
    prioridade: "media",
    cargos: SO_TECNICO,
    dica: "Citada expressamente no edital de 2022; é extensa, então priorize segurados e dependentes, filiação e inscrição, carência, qualidade de segurado e os benefícios (texto do DOU: pode ter sido alterada por normas posteriores).",
  },
  {
    id: "lc-142-2013",
    nome: "Lei Complementar nº 142/2013",
    apelido: "Aposentadoria da pessoa com deficiência",
    url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp142.htm",
    prioridade: "media",
    cargos: AMBOS,
    dica: "Art. 3º (25/29/33 anos de contribuição para homem e 20/24/28 para mulher, conforme a deficiência seja grave, moderada ou leve, ou 60/55 anos de idade) e art. 2º (conceito de pessoa com deficiência).",
  },
  {
    id: "lc-150-2015",
    nome: "Lei Complementar nº 150/2015",
    apelido: "Trabalho doméstico",
    url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp150.htm",
    prioridade: "media",
    cargos: AMBOS,
    dica: "Base do conceito de empregado doméstico (art. 1º: serviço contínuo, por mais de 2 dias por semana), jornada e tempo parcial (arts. 2º–3º) e recolhimento unificado pelo empregador (Simples Doméstico, arts. 31–34).",
  },
  {
    id: "decreto-6214-2007",
    nome: "Decreto nº 6.214/2007",
    apelido: "Regulamento do BPC",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6214.htm",
    prioridade: "media",
    cargos: AMBOS,
    dica: "Arts. 4º (definições: idoso, pessoa com deficiência, família e renda per capita de até 1/4 do salário mínimo) e 5º (não acumulação com outros benefícios), além das regras de revisão e cessação do Regulamento anexo.",
  },
  {
    id: "lei-9784-1999",
    nome: "Lei nº 9.784/1999",
    apelido: "Processo Administrativo Federal",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm",
    prioridade: "media",
    cargos: SO_TECNICO,
    dica: "Art. 2º (princípios), 49 (prazo de 30 dias para decidir), 53–55 (anulação, revogação, decadência em 5 anos e convalidação) e 56–65 (recursos; prazo de 10 dias, art. 59).",
  },
  {
    id: "lei-8429-1992",
    nome: "Lei nº 8.429/1992",
    apelido: "Lei de Improbidade Administrativa",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm",
    prioridade: "media",
    cargos: SO_TECNICO,
    dica: "Arts. 9º (enriquecimento ilícito), 10 (lesão ao erário) e 11 (violação aos princípios); atenção às mudanças da Lei 14.230/2021, como a exigência de dolo e a prescrição em 8 anos (art. 23).",
  },
  {
    id: "decreto-6029-2007",
    nome: "Decreto nº 6.029/2007",
    apelido: "Sistema de Gestão da Ética do Poder Executivo Federal",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6029.htm",
    prioridade: "media",
    cargos: AMBOS,
    dica: "Art. 2º (composição do sistema), 3º (Comissão de Ética Pública: 7 membros, mandato de 3 anos, uma recondução), 7º (competências das Comissões de Ética) e 11–12 (denúncia e apuração).",
  },
  {
    id: "lei-8662-1993",
    nome: "Lei nº 8.662/1993",
    apelido: "Profissão de Assistente Social",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8662.htm",
    prioridade: "media",
    cargos: SO_ANALISTA,
    dica: "Lei curta, vale ler inteira: art. 2º (quem pode exercer a profissão), 4º (competências) e 5º (atribuições privativas do assistente social).",
  },
  {
    id: "lei-10741-2003",
    nome: "Lei nº 10.741/2003",
    apelido: "Estatuto da Pessoa Idosa",
    url: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm",
    prioridade: "media",
    cargos: SO_ANALISTA,
    dica: "Arts. 1º (60 anos ou mais), 3º (prioridade absoluta) e 34 (BPC a partir dos 65 anos), além dos direitos à saúde (arts. 15–19) e à assistência social (arts. 33–36).",
  },
  {
    id: "lei-8069-1990",
    nome: "Lei nº 8.069/1990",
    apelido: "Estatuto da Criança e do Adolescente (ECA)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm",
    prioridade: "media",
    cargos: SO_ANALISTA,
    dica: "Arts. 2º (criança até 12 anos incompletos; adolescente de 12 a 18), 4º (prioridade absoluta), 98–102 (medidas de proteção) e 131–140 (Conselho Tutelar).",
  },
  {
    id: "lei-13146-2015",
    nome: "Lei nº 13.146/2015",
    apelido: "Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
    prioridade: "media",
    cargos: SO_ANALISTA,
    dica: "Art. 2º (conceito de pessoa com deficiência e avaliação biopsicossocial), 3º (definições, como acessibilidade e barreiras), 4º (igualdade e discriminação) e 39–40 (assistência social e benefício mensal).",
  },

  // Prioridade baixa
  {
    id: "lei-10779-2003",
    nome: "Lei nº 10.779/2003",
    apelido: "Seguro-defeso do pescador artesanal",
    url: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.779.htm",
    prioridade: "baixa",
    cargos: SO_TECNICO,
    dica: "Lei curta: requisitos para receber o seguro-desemprego no período de defeso (art. 1º), documentos exigidos (art. 2º) e sanções para quem usar atestado falso (art. 3º).",
  },
  {
    id: "lei-9796-1999",
    nome: "Lei nº 9.796/1999",
    apelido: "Compensação previdenciária entre o RGPS e os regimes próprios",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9796.htm",
    prioridade: "baixa",
    cargos: SO_TECNICO,
    dica: "Lei curta, vale ler inteira: arts. 1º–2º (compensação financeira na contagem recíproca e as definições de regime de origem e regime instituidor).",
  },
  {
    id: "decreto-10188-2019",
    nome: "Decreto nº 10.188/2019",
    apelido: "Regulamento da compensação previdenciária",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/D10188.htm",
    prioridade: "baixa",
    cargos: SO_TECNICO,
    dica: "Leia junto com a Lei nº 9.796/1999: quem é regime de origem e regime instituidor e como se processa a compensação.",
  },
  {
    id: "lei-14176-2021",
    nome: "Lei nº 14.176/2021",
    apelido: "Altera a LOAS e cria o auxílio-inclusão",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/L14176.htm",
    prioridade: "media",
    cargos: SO_TECNICO,
    dica: "Critério de renda de 1/4 do salário mínimo, possibilidade de ampliação até 1/2 e as regras do auxílio-inclusão (50% do BPC).",
  },
  {
    id: "decreto-8424-2015",
    nome: "Decreto nº 8.424/2015",
    apelido: "Regulamenta o seguro-defeso do pescador artesanal",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/decreto/d8424.htm",
    prioridade: "baixa",
    cargos: SO_TECNICO,
    dica: "Requisitos do pescador artesanal, habilitação no INSS e hipóteses de cancelamento do benefício.",
  },
  {
    id: "lei-11340-2006",
    nome: "Lei nº 11.340/2006",
    apelido: "Lei Maria da Penha",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
    prioridade: "baixa",
    cargos: SO_ANALISTA,
    dica: "Arts. 5º–7º (conceito de violência doméstica e familiar e suas formas) e 22–24 (medidas protetivas de urgência).",
  },
]

// ---- Provas anteriores -----------------------------------------------------

export interface ArquivoProva {
  rotulo: string
  /** Caminho relativo a public/ (use com import.meta.env.BASE_URL). */
  caminho: string
  /** URL oficial do arquivo no CDN do Cebraspe, de onde foi baixado. */
  origem: string
}

export interface ProvaAnterior {
  id: string
  titulo: string
  ano: number
  cargo: CargoId
  banca: "Cebraspe"
  /** Data de aplicação das provas objetivas. */
  aplicacao: string
  /** Cadernos de prova (mais de um arquivo quando a prova é dividida em P1 e P2). */
  provas: ArquivoProva[]
  /** Gabaritos definitivos oficiais. */
  gabaritos: ArquivoProva[]
  /** Página oficial do concurso no site do Cebraspe. */
  fonteOficial: string
  observacao?: string
}

const CDN_2022 = "https://cdn.cebraspe.org.br/concursos/INSS_22/arquivos"
const CDN_2015 = "https://cdn.cebraspe.org.br/concursos/INSS_2015/arquivos"

export const PROVAS_ANTERIORES: ProvaAnterior[] = [
  {
    id: "inss-2022-tecnico",
    titulo: "INSS 2022 — Técnico do Seguro Social",
    ano: 2022,
    cargo: "tecnico",
    banca: "Cebraspe",
    aplicacao: "27/11/2022",
    provas: [
      {
        rotulo: "Conhecimentos Básicos (P1, itens 1–50)",
        caminho: "provas/inss-2022-tecnico-prova-basicos.pdf",
        origem: `${CDN_2022}/760_INSS_CB1_01.PDF`,
      },
      {
        rotulo: "Conhecimentos Específicos (P2, itens 51–120)",
        caminho: "provas/inss-2022-tecnico-prova-especificos.pdf",
        origem: `${CDN_2022}/760_INSS_001_01.PDF`,
      },
    ],
    gabaritos: [
      {
        rotulo: "Gabarito definitivo — Básicos (P1)",
        caminho: "provas/inss-2022-tecnico-gabarito-definitivo-basicos.pdf",
        origem: `${CDN_2022}/GAB_DEFINITIVO_760_INSS_CB1_01.PDF`,
      },
      {
        rotulo: "Gabarito definitivo — Específicos (P2)",
        caminho: "provas/inss-2022-tecnico-gabarito-definitivo-especificos.pdf",
        origem: `${CDN_2022}/GAB_DEFINITIVO_760_INSS_001_01.PDF`,
      },
    ],
    fonteOficial: "https://www.cebraspe.org.br/concursos/INSS_22",
    observacao:
      "Prova do último concurso (edital de 2022), em dois arquivos: P1 e P2. É a versão aplicada em todas as unidades, exceto a GEX Guarulhos. No gabarito, X indica item anulado.",
  },
  {
    id: "inss-2016-tecnico",
    titulo: "INSS 2016 — Técnico do Seguro Social",
    ano: 2016,
    cargo: "tecnico",
    banca: "Cebraspe",
    aplicacao: "15/5/2016",
    provas: [
      {
        rotulo: "Caderno ALGA (P1 + P2, itens 1–120)",
        caminho: "provas/inss-2016-tecnico-prova.pdf",
        origem: `${CDN_2015}/234INSS_002_01_Caderno_ALGA.PDF`,
      },
    ],
    gabaritos: [
      {
        rotulo: "Gabarito definitivo — Caderno ALGA",
        caminho: "provas/inss-2016-tecnico-gabarito-definitivo.pdf",
        origem: `${CDN_2015}/Gab_Definitivo_234INSS_002_01.PDF`,
      },
    ],
    fonteOficial: "https://www.cebraspe.org.br/concursos/INSS_2015",
    observacao:
      "Concurso do Edital nº 1/2015, com provas aplicadas em 2016 (à tarde). Os outros cadernos (BETA e CUBO) trazem os mesmos itens em outra ordem: use sempre o gabarito do caderno que você resolver. No gabarito, X indica item anulado.",
  },
  {
    id: "inss-2016-analista-servico-social",
    titulo: "INSS 2016 — Analista do Seguro Social (Serviço Social)",
    ano: 2016,
    cargo: "analista",
    banca: "Cebraspe",
    aplicacao: "15/5/2016",
    provas: [
      {
        rotulo: "Caderno LUA (P1 + P2, itens 1–120)",
        caminho: "provas/inss-2016-analista-servico-social-prova.pdf",
        origem: `${CDN_2015}/234INSS_001_01_Caderno_LUA.PDF`,
      },
    ],
    gabaritos: [
      {
        rotulo: "Gabarito definitivo — Caderno LUA",
        caminho: "provas/inss-2016-analista-servico-social-gabarito-definitivo.pdf",
        origem: `${CDN_2015}/Gab_Definitivo_234INSS_001_01.PDF`,
      },
    ],
    fonteOficial: "https://www.cebraspe.org.br/concursos/INSS_2015",
    observacao:
      "Único concurso recente de Analista (Edital nº 1/2015, provas em 2016, pela manhã). Os outros cadernos (MAR e NEVE) trazem os mesmos itens em outra ordem: use sempre o gabarito do caderno que você resolver. No gabarito, X indica item anulado.",
  },
]
