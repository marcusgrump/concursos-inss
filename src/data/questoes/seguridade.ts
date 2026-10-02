import type { Questao } from "../types"

/** Seguridade Social, custeio, decadência/prescrição, crimes e recursos. */
export const QUESTOES_SEGURIDADE: Questao[] = [
  {
    id: "seg-001",
    pool: "seguridade",
    assunto: "Conceito de seguridade social",
    enunciado:
      "A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.",
    gabarito: "C",
    comentario:
      "É a literalidade do caput do art. 194 da CF. Guarde o tripé: saúde, previdência e assistência social — e que a iniciativa é dos Poderes Públicos E da sociedade.",
    fundamento: "CF/1988, art. 194, caput",
  },
  {
    id: "seg-002",
    pool: "seguridade",
    assunto: "Contributividade",
    enunciado:
      "Assim como a previdência social, a assistência social e a saúde exigem contribuição direta do beneficiário como condição para o atendimento.",
    gabarito: "E",
    comentario:
      "Só a previdência tem caráter contributivo e filiação obrigatória (art. 201). A saúde é direito de todos e dever do Estado (art. 196) e a assistência é prestada a quem dela necessitar, independentemente de contribuição (art. 203).",
    fundamento: "CF/1988, arts. 196, 201 e 203",
  },
  {
    id: "seg-003",
    pool: "seguridade",
    assunto: "Princípios (objetivos) da seguridade",
    enunciado:
      "Entre os objetivos da seguridade social previstos na Constituição estão a seletividade e a distributividade na prestação dos benefícios e serviços e a irredutibilidade do valor dos benefícios.",
    gabarito: "C",
    comentario:
      "Os objetivos do art. 194, parágrafo único, são: universalidade da cobertura e do atendimento; uniformidade e equivalência urbano/rural; seletividade e distributividade; irredutibilidade do valor dos benefícios; equidade no custeio; diversidade da base de financiamento; caráter democrático e descentralizado (gestão quadripartite).",
    fundamento: "CF/1988, art. 194, parágrafo único",
  },
  {
    id: "seg-004",
    pool: "seguridade",
    assunto: "Gestão quadripartite",
    enunciado:
      "A gestão da seguridade social tem caráter democrático e descentralizado, com participação tripartite de trabalhadores, empregadores e Governo nos órgãos colegiados.",
    gabarito: "E",
    comentario:
      "A gestão é QUADRIPARTITE: trabalhadores, empregadores, aposentados e Governo. Cebraspe adora trocar quadripartite por tripartite.",
    fundamento: "CF/1988, art. 194, parágrafo único, VII",
  },
  {
    id: "seg-005",
    pool: "seguridade",
    assunto: "Regra da contrapartida",
    enunciado:
      "Lei ordinária pode criar benefício da seguridade social sem indicar a correspondente fonte de custeio total, desde que haja previsão na lei orçamentária anual.",
    gabarito: "E",
    comentario:
      "Pela regra da contrapartida, nenhum benefício ou serviço da seguridade pode ser criado, majorado ou estendido sem a correspondente fonte de custeio TOTAL. Previsão orçamentária não supre essa exigência.",
    fundamento: "CF/1988, art. 195, § 5º",
  },
  {
    id: "seg-006",
    pool: "seguridade",
    assunto: "Anterioridade nonagesimal",
    enunciado:
      "As contribuições sociais destinadas à seguridade social somente podem ser exigidas no exercício financeiro seguinte ao da publicação da lei que as instituiu ou modificou.",
    gabarito: "E",
    comentario:
      "Contribuições para a seguridade seguem apenas a anterioridade NONAGESIMAL: podem ser exigidas após 90 dias da publicação da lei, não se aplicando a anterioridade do exercício (art. 150, III, b).",
    fundamento: "CF/1988, art. 195, § 6º",
  },
  {
    id: "seg-007",
    pool: "seguridade",
    assunto: "Imunidade das entidades beneficentes",
    enunciado:
      "São imunes às contribuições para a seguridade social todas as entidades sem fins lucrativos, independentemente do cumprimento de requisitos legais.",
    gabarito: "E",
    comentario:
      "A imunidade do art. 195, § 7º, alcança apenas as entidades BENEFICENTES de assistência social que atendam às exigências de lei complementar (hoje, LC nº 187/2021). O texto constitucional usa 'isentas', mas trata-se de imunidade.",
    fundamento: "CF/1988, art. 195, § 7º",
  },
  {
    id: "seg-008",
    pool: "seguridade",
    assunto: "Evolução histórica",
    enunciado:
      "A Lei Eloy Chaves, de 1923, criou o Instituto Nacional de Previdência Social (INPS), que unificou os institutos de aposentadorias e pensões então existentes.",
    gabarito: "E",
    comentario:
      "A Lei Eloy Chaves (Decreto Legislativo nº 4.682/1923) criou as Caixas de Aposentadorias e Pensões dos ferroviários — marco inicial da previdência. O INPS surgiu só em 1966 (Decreto-Lei nº 72/1966), unificando os IAPs.",
    fundamento: "Decreto Legislativo nº 4.682/1923",
  },
  {
    id: "seg-009",
    pool: "seguridade",
    assunto: "Evolução histórica",
    enunciado:
      "O INSS foi criado em 1990, a partir da fusão do Instituto de Administração Financeira da Previdência e Assistência Social (IAPAS) com o Instituto Nacional de Previdência Social (INPS).",
    gabarito: "C",
    comentario: "A Lei nº 8.029/1990 autorizou a criação do INSS, concretizada pelo Decreto nº 99.350/1990, fundindo IAPAS e INPS.",
    fundamento: "Lei nº 8.029/1990; Decreto nº 99.350/1990",
  },
  {
    id: "seg-010",
    pool: "seguridade",
    assunto: "Evolução histórica",
    enunciado:
      "A expressão 'seguridade social', abrangendo saúde, previdência e assistência social, foi introduzida no ordenamento constitucional brasileiro pela Constituição de 1946.",
    gabarito: "E",
    comentario:
      "O conceito de seguridade social (saúde + previdência + assistência) foi inaugurado pela CF/1988. A Constituição de 1946 empregou a expressão 'previdência social'.",
  },
  {
    id: "seg-011",
    pool: "seguridade",
    assunto: "Segurados obrigatórios — empregado",
    enunciado:
      "O servidor público ocupante exclusivamente de cargo em comissão, sem vínculo efetivo com a União, suas autarquias e fundações, é segurado obrigatório do RGPS na qualidade de empregado.",
    gabarito: "C",
    comentario:
      "O comissionado sem vínculo efetivo é vinculado ao RGPS como empregado (art. 11, I, g, da Lei nº 8.213/1991; art. 40, § 13, da CF).",
    fundamento: "Lei nº 8.213/1991, art. 11, I, g",
  },
  {
    id: "seg-012",
    pool: "seguridade",
    assunto: "Segurados obrigatórios — doméstico",
    enunciado:
      "A trabalhadora que presta serviços de limpeza em uma mesma residência apenas dois dias por semana é, para o RGPS, segurada empregada doméstica.",
    gabarito: "E",
    comentario:
      "Pela LC nº 150/2015, doméstico é quem trabalha para a mesma pessoa ou família por MAIS de dois dias por semana. Quem trabalha até dois dias (diarista) é contribuinte individual.",
    fundamento: "LC nº 150/2015, art. 1º",
  },
  {
    id: "seg-013",
    pool: "seguridade",
    assunto: "Segurados obrigatórios — contribuinte individual",
    enunciado:
      "O ministro de confissão religiosa e o membro de instituto de vida consagrada são segurados obrigatórios do RGPS na categoria de contribuinte individual.",
    gabarito: "C",
    comentario: "Estão no rol de contribuintes individuais (art. 11, V, c, da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, art. 11, V, c",
  },
  {
    id: "seg-014",
    pool: "seguridade",
    assunto: "Segurados obrigatórios — avulso",
    enunciado:
      "Trabalhador avulso é aquele que presta serviço a diversas empresas, com vínculo empregatício, mediante intermediação obrigatória do órgão gestor de mão de obra ou do sindicato da categoria.",
    gabarito: "E",
    comentario:
      "O avulso presta serviço a diversas empresas SEM vínculo empregatício, com intermediação obrigatória do OGMO (portuário) ou do sindicato.",
    fundamento: "Lei nº 8.213/1991, art. 11, VI; Decreto nº 3.048/1999, art. 9º, VI",
  },
  {
    id: "seg-015",
    pool: "seguridade",
    assunto: "Segurado especial",
    enunciado:
      "É segurado especial o produtor rural que explore atividade agropecuária em área de até quatro módulos fiscais, individualmente ou em regime de economia familiar, ainda que com o auxílio eventual de terceiros.",
    gabarito: "C",
    comentario:
      "Limite de 4 módulos fiscais para a atividade agropecuária (art. 11, VII, a, 1). Pescador artesanal e seringueiro/extrativista vegetal também podem ser segurados especiais.",
    fundamento: "Lei nº 8.213/1991, art. 11, VII",
  },
  {
    id: "seg-016",
    pool: "seguridade",
    assunto: "Segurado especial — empregados",
    enunciado:
      "O grupo familiar do segurado especial perde essa condição caso contrate qualquer empregado, ainda que por prazo determinado.",
    gabarito: "E",
    comentario:
      "O grupo familiar pode contratar empregados por prazo determinado à razão de, no máximo, 120 pessoas/dia no ano civil, em períodos corridos ou intercalados, sem perder a condição.",
    fundamento: "Lei nº 8.213/1991, art. 11, § 7º",
  },
  {
    id: "seg-017",
    pool: "seguridade",
    assunto: "Segurado facultativo",
    enunciado:
      "É vedada a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.",
    gabarito: "C",
    comentario:
      "Vedação do art. 201, § 5º, da CF. O Decreto nº 3.048/1999 ressalva o afastamento sem vencimentos, desde que não permitida contribuição ao RPPS nessa condição.",
    fundamento: "CF/1988, art. 201, § 5º; Decreto nº 3.048/1999, art. 11, § 2º",
  },
  {
    id: "seg-018",
    pool: "seguridade",
    assunto: "Filiação e inscrição",
    enunciado:
      "Para o segurado obrigatório, a filiação ao RGPS decorre automaticamente do exercício de atividade remunerada, ao passo que, para o segurado facultativo, decorre da inscrição formalizada com o pagamento da primeira contribuição.",
    gabarito: "C",
    comentario:
      "Filiação é o vínculo jurídico com a previdência; inscrição é o ato cadastral. Para o facultativo, a filiação depende da inscrição + primeira contribuição sem atraso.",
    fundamento: "Decreto nº 3.048/1999, art. 20",
  },
  {
    id: "seg-019",
    pool: "seguridade",
    assunto: "Contribuição dos segurados",
    enunciado:
      "Após a EC nº 103/2019, a contribuição do segurado empregado passou a ter alíquotas progressivas de 7,5%, 9%, 12% e 14%, aplicadas de forma escalonada sobre as faixas do salário de contribuição.",
    gabarito: "C",
    comentario:
      "O art. 28 da EC nº 103/2019 fixou as alíquotas progressivas por faixas para empregado, doméstico e avulso — cada alíquota incide sobre a respectiva faixa.",
    fundamento: "EC nº 103/2019, art. 28",
  },
  {
    id: "seg-020",
    pool: "seguridade",
    assunto: "Contribuição do contribuinte individual",
    enunciado:
      "O contribuinte individual que opta pelo plano simplificado de previdência contribui com 11% sobre o salário mínimo e mantém o direito à aposentadoria por tempo de contribuição.",
    gabarito: "E",
    comentario:
      "Quem contribui pelo plano simplificado (11% sobre o salário mínimo) NÃO tem direito à aposentadoria por tempo de contribuição, salvo se complementar a contribuição. MEI e facultativo de baixa renda pagam 5%; a regra geral do CI é 20%.",
    fundamento: "Lei nº 8.212/1991, art. 21, §§ 2º e 3º",
  },
  {
    id: "seg-021",
    pool: "seguridade",
    assunto: "Contribuição da empresa",
    enunciado:
      "A contribuição da empresa destinada ao financiamento dos benefícios concedidos em razão do grau de incidência de incapacidade laborativa decorrente dos riscos ambientais do trabalho (GILRAT) é de 1%, 2% ou 3%, conforme o risco da atividade preponderante seja leve, médio ou grave.",
    gabarito: "C",
    comentario:
      "Art. 22, II, da Lei nº 8.212/1991. Essas alíquotas podem ser reduzidas pela metade ou dobradas pelo FAP (Fator Acidentário de Prevenção).",
    fundamento: "Lei nº 8.212/1991, art. 22, II",
  },
  {
    id: "seg-022",
    pool: "seguridade",
    assunto: "Clube de futebol profissional",
    enunciado:
      "A associação desportiva que mantém equipe de futebol profissional contribui com 5% da receita bruta decorrente dos espetáculos desportivos e de contratos de patrocínio, em acréscimo às contribuições patronais incidentes sobre a folha de salários.",
    gabarito: "E",
    comentario:
      "A contribuição de 5% da receita bruta é SUBSTITUTIVA: substitui a contribuição patronal de 20% sobre a folha e o GILRAT (art. 22, § 6º, da Lei nº 8.212/1991).",
    fundamento: "Lei nº 8.212/1991, art. 22, § 6º",
  },
  {
    id: "seg-023",
    pool: "seguridade",
    assunto: "Empregador doméstico",
    enunciado:
      "O empregador doméstico recolhe, além do FGTS, contribuição patronal previdenciária de 8% e contribuição de 0,8% para o financiamento do seguro contra acidentes do trabalho.",
    gabarito: "C",
    comentario:
      "LC nº 150/2015, art. 34: 8% patronal + 0,8% (acidente) + 8% FGTS + 3,2% (indenização compensatória), além da contribuição do empregado retida.",
    fundamento: "LC nº 150/2015, art. 34",
  },
  {
    id: "seg-024",
    pool: "seguridade",
    assunto: "Salário de contribuição",
    enunciado:
      "O décimo terceiro salário não integra o salário de contribuição.",
    gabarito: "E",
    comentario:
      "O 13º INTEGRA o salário de contribuição (art. 28, § 7º, da Lei nº 8.212/1991), mas não entra no cálculo do salário de benefício.",
    fundamento: "Lei nº 8.212/1991, art. 28, § 7º",
  },
  {
    id: "seg-025",
    pool: "seguridade",
    assunto: "Salário de contribuição — parcelas não integrantes",
    enunciado:
      "As férias indenizadas e o respectivo adicional constitucional de um terço não integram o salário de contribuição.",
    gabarito: "C",
    comentario: "Estão no rol de parcelas não integrantes do art. 28, § 9º, d, da Lei nº 8.212/1991.",
    fundamento: "Lei nº 8.212/1991, art. 28, § 9º, d",
  },
  {
    id: "seg-026",
    pool: "seguridade",
    assunto: "Prazo de recolhimento",
    enunciado:
      "A empresa deve recolher as contribuições descontadas dos segurados empregados até o dia 15 do mês subsequente ao da competência, prorrogando-se o vencimento para o primeiro dia útil seguinte se não houver expediente bancário.",
    gabarito: "E",
    comentario:
      "Empresa: até o dia 20 do mês seguinte, ANTECIPANDO-se para o dia útil anterior. O dia 15 com prorrogação é a regra do contribuinte individual e do facultativo. Empregador doméstico: dia 7.",
    fundamento: "Lei nº 8.212/1991, art. 30, I, b",
  },
  {
    id: "seg-027",
    pool: "seguridade",
    assunto: "Competência para arrecadar",
    enunciado:
      "Compete ao INSS arrecadar, fiscalizar e cobrar as contribuições sociais incidentes sobre a folha de salários.",
    gabarito: "E",
    comentario:
      "Desde a Lei nº 11.457/2007 (Super-Receita), essas atribuições são da Secretaria Especial da Receita Federal do Brasil. O INSS concede e mantém benefícios.",
    fundamento: "Lei nº 11.457/2007, art. 2º",
  },
  {
    id: "seg-028",
    pool: "seguridade",
    assunto: "Decadência — revisão de benefício",
    enunciado:
      "É de dez anos o prazo de decadência do direito do segurado de pedir a revisão do ato de concessão de benefício.",
    gabarito: "C",
    comentario:
      "Art. 103 da Lei nº 8.213/1991: 10 anos, contados do dia primeiro do mês subsequente ao do recebimento da primeira prestação.",
    fundamento: "Lei nº 8.213/1991, art. 103",
  },
  {
    id: "seg-029",
    pool: "seguridade",
    assunto: "Prescrição de parcelas",
    enunciado:
      "Prescreve em cinco anos a ação para haver prestações vencidas ou quaisquer restituições devidas pela previdência social, ressalvado o direito dos menores, incapazes e ausentes.",
    gabarito: "C",
    comentario: "Parágrafo único do art. 103 da Lei nº 8.213/1991 — prescrição quinquenal das parcelas.",
    fundamento: "Lei nº 8.213/1991, art. 103, parágrafo único",
  },
  {
    id: "seg-030",
    pool: "seguridade",
    assunto: "Decadência — anulação pela Previdência",
    enunciado:
      "O direito da previdência social de anular os atos administrativos de que decorram efeitos favoráveis a seus beneficiários decai em cinco anos, salvo comprovada má-fé.",
    gabarito: "E",
    comentario:
      "No âmbito previdenciário o prazo é de DEZ anos (art. 103-A da Lei nº 8.213/1991). O prazo de 5 anos é o da regra geral da Lei nº 9.784/1999 (art. 54).",
    fundamento: "Lei nº 8.213/1991, art. 103-A",
  },
  {
    id: "seg-031",
    pool: "seguridade",
    assunto: "Decadência do crédito tributário",
    enunciado:
      "Segundo a Súmula Vinculante nº 8 do STF, é constitucional o prazo decenal de decadência e prescrição dos créditos de contribuições previdenciárias previsto na Lei nº 8.212/1991.",
    gabarito: "E",
    comentario:
      "A SV 8 declarou INCONSTITUCIONAIS os arts. 45 e 46 da Lei nº 8.212/1991 (prazo de 10 anos). Aplica-se o CTN: 5 anos, pois a matéria exige lei complementar.",
    fundamento: "STF, Súmula Vinculante nº 8",
  },
  {
    id: "seg-032",
    pool: "seguridade",
    assunto: "Crimes contra a seguridade",
    enunciado:
      "Configura apropriação indébita previdenciária deixar de repassar à previdência social as contribuições recolhidas dos contribuintes, no prazo e forma legal ou convencional.",
    gabarito: "C",
    comentario: "Art. 168-A do Código Penal — pena de reclusão de 2 a 5 anos e multa.",
    fundamento: "Código Penal, art. 168-A",
  },
  {
    id: "seg-033",
    pool: "seguridade",
    assunto: "Crimes contra a seguridade",
    enunciado:
      "No crime de apropriação indébita previdenciária, é extinta a punibilidade se o agente, espontaneamente, declara, confessa e efetua o pagamento das contribuições e presta as informações devidas antes do início da ação fiscal.",
    gabarito: "C",
    comentario: "Art. 168-A, § 2º, do CP.",
    fundamento: "Código Penal, art. 168-A, § 2º",
  },
  {
    id: "seg-034",
    pool: "seguridade",
    assunto: "Recursos administrativos",
    enunciado:
      "É de dez dias o prazo para interposição de recurso às Juntas de Recursos do Conselho de Recursos da Previdência Social.",
    gabarito: "E",
    comentario:
      "Na Previdência o prazo é de 30 dias para recorrer e para contrarrazões (Decreto nº 3.048/1999, art. 305, § 1º). Os 10 dias são a regra geral da Lei nº 9.784/1999.",
    fundamento: "Decreto nº 3.048/1999, art. 305, § 1º",
  },
  {
    id: "seg-035",
    pool: "seguridade",
    assunto: "Recursos administrativos",
    enunciado:
      "O Conselho de Recursos da Previdência Social (CRPS) é composto por Juntas de Recursos, que julgam em primeira instância recursal, e por Câmaras de Julgamento, que julgam em segunda instância.",
    gabarito: "C",
    comentario: "Estrutura prevista no Decreto nº 3.048/1999 (arts. 303 e seguintes).",
    fundamento: "Decreto nº 3.048/1999, art. 303",
  },
  {
    id: "seg-036",
    pool: "seguridade",
    assunto: "Fontes e aplicação das normas",
    enunciado:
      "Em matéria de benefícios previdenciários, aplica-se, em regra, a lei vigente ao tempo em que foram preenchidos os requisitos para a concessão (tempus regit actum).",
    gabarito: "C",
    comentario:
      "Entendimento consolidado na jurisprudência (ex.: Súmula 340 do STJ: a lei aplicável à pensão por morte é a vigente na data do óbito). Protege o direito adquirido.",
    fundamento: "STJ, Súmula 340; CF, art. 5º, XXXVI",
  },
  {
    id: "seg-037",
    pool: "seguridade",
    assunto: "Receitas — concursos de prognósticos",
    enunciado: "A receita de concursos de prognósticos constitui uma das fontes de financiamento da seguridade social.",
    gabarito: "C",
    comentario: "Art. 195, III, da CF e art. 26 da Lei nº 8.212/1991.",
    fundamento: "CF/1988, art. 195, III",
  },
  {
    id: "seg-038",
    pool: "seguridade",
    assunto: "Empresa — conceito previdenciário",
    enunciado:
      "Para fins previdenciários, equipara-se a empresa o contribuinte individual em relação a segurado que lhe presta serviço.",
    gabarito: "C",
    comentario:
      "O parágrafo único do art. 15 da Lei nº 8.212/1991 equipara a empresa o CI em relação a quem lhe presta serviço, bem como cooperativas, associações, missões diplomáticas etc.",
    fundamento: "Lei nº 8.212/1991, art. 15, parágrafo único",
  },
]
