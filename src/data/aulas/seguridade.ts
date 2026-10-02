import type { Aula } from "./types"

/**
 * Aulas de Seguridade Social e custeio (pool "seguridade").
 * Valores de teto e salário mínimo NÃO são fixados aqui: mudam todo ano por
 * portaria/decreto. Os números usados em exemplos de cálculo são hipotéticos.
 */
export const AULAS_SEGURIDADE: Aula[] = [
  // 1 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-origem-evolucao",
    titulo: "Seguridade Social: origem, evolução no Brasil e conceito",
    pool: "seguridade",
    topicos: ["tec-esp-1"],
    texto: [
      "Seguridade social é a rede de proteção que o Estado e a sociedade montam para amparar as pessoas diante de riscos da vida: doença, velhice, invalidez, morte, desemprego, maternidade e pobreza. A Constituição de 1988 a define como um conjunto integrado de ações dos Poderes Públicos e da sociedade voltado a assegurar três direitos: saúde, previdência social e assistência social (art. 194).",
      "Cada pé desse tripé funciona de um jeito. A saúde é para todos e não exige contribuição (art. 196). A assistência social é para quem dela necessitar, também sem contribuição (art. 203). Já a previdência social é contributiva e de filiação obrigatória: só tem direito quem é segurado e contribui (art. 201). Essa diferença é a base de muitas questões.",
      "No Brasil, a proteção nasceu fragmentada, por categoria profissional. O grande marco é a Lei Eloy Chaves (Decreto Legislativo nº 4.682/1923), que mandou criar Caixas de Aposentadorias e Pensões (CAPs) para os ferroviários, uma por empresa. Nos anos 1930 as CAPs foram dando lugar aos Institutos de Aposentadorias e Pensões (IAPs), organizados por categoria (marítimos, comerciários, bancários, industriários etc.).",
      "Depois veio a unificação: a Lei Orgânica da Previdência Social (LOPS, Lei nº 3.807/1960) uniformizou as regras, e o Decreto-Lei nº 72/1966 juntou os IAPs no Instituto Nacional de Previdência Social (INPS). Em 1977 foi criado o SINPAS, sistema que reunia INPS, INAMPS, IAPAS, LBA, FUNABEM, DATAPREV e CEME.",
      "A Constituição de 1988 inaugurou o conceito de seguridade social (saúde + previdência + assistência). Em 1990 nasceu o INSS, da fusão do INPS com o IAPAS (Lei nº 8.029/1990). Em 1991 vieram as duas leis-base: Lei nº 8.212 (custeio) e Lei nº 8.213 (benefícios). Depois, várias reformas mudaram a previdência, com destaque para as Emendas Constitucionais nº 20/1998, 41/2003, 47/2005 e 103/2019.",
      "Organização atual em poucas palavras: o INSS (autarquia federal) reconhece, concede e mantém os benefícios; a Receita Federal arrecada e fiscaliza as contribuições (Lei nº 11.457/2007); a saúde é executada pelo SUS; e a assistência social, pelo SUAS. Existe ainda o Conselho Nacional de Previdência Social (CNPS), órgão colegiado com representantes do governo e da sociedade.",
    ],
    pontosChave: [
      "Conceito (CF, art. 194): conjunto INTEGRADO de ações dos Poderes Públicos E da sociedade → saúde, previdência e assistência social.",
      "Saúde: direito de todos, sem contribuição. Assistência: a quem necessitar, sem contribuição. Previdência: contributiva e de filiação obrigatória.",
      "1923 – Lei Eloy Chaves: CAPs dos ferroviários (uma Caixa por empresa) — marco inicial da previdência no Brasil.",
      "Anos 1930 – IAPs por categoria profissional (o primeiro foi o dos marítimos, IAPM, em 1933).",
      "1960 – LOPS (Lei nº 3.807) uniformiza a legislação; 1966 – INPS unifica os IAPs (Decreto-Lei nº 72).",
      "1977 – SINPAS (Lei nº 6.439); 1988 – CF cria o conceito de seguridade social; 1990 – INSS (fusão INPS + IAPAS).",
      "1991 – Lei nº 8.212 (custeio) e Lei nº 8.213 (benefícios); 1999 – Decreto nº 3.048 (Regulamento da Previdência Social).",
      "2007 – Lei nº 11.457 (‘Super-Receita’): arrecadação e fiscalização passam para a Receita Federal.",
      "2019 – EC nº 103 (Reforma da Previdência) e Lei nº 13.846 (combate a fraudes e revisão de regras).",
      "CNPS (Lei nº 8.213, art. 3º): 6 representantes do Governo Federal + 9 da sociedade civil (3 aposentados/pensionistas, 3 trabalhadores em atividade, 3 empregadores).",
    ],
    exemplos: [
      {
        titulo: "Qual pé do tripé atende?",
        texto:
          "João nunca contribuiu e precisa de uma cirurgia: é atendido pelo SUS (saúde, sem contribuição). Dona Ana, 70 anos, sem renda e sem contribuições, pode pedir o BPC (assistência social, a quem necessitar). Carlos, empregado com carteira assinada, sofre um acidente e fica afastado: recebe auxílio por incapacidade da previdência, porque é segurado e contribui.",
      },
      {
        titulo: "Linha de raciocínio para questões históricas",
        texto:
          "Item: ‘A Lei Eloy Chaves criou o INPS’. Pense na ordem: primeiro vieram as CAPs (por empresa, 1923), depois os IAPs (por categoria, anos 1930), depois o INPS (unificação, 1966) e por fim o INSS (1990). Logo, o item está errado: Eloy Chaves criou as CAPs dos ferroviários.",
      },
    ],
    esquemas: [
      {
        tipo: "linha-do-tempo",
        titulo: "Evolução da previdência e da seguridade no Brasil",
        itens: [
          { marco: "1923", texto: "Lei Eloy Chaves: Caixas de Aposentadorias e Pensões (CAPs) dos ferroviários, uma por empresa." },
          { marco: "1933", texto: "Começam os IAPs, organizados por categoria (marítimos primeiro)." },
          { marco: "1960", texto: "LOPS (Lei nº 3.807) uniformiza as regras de previdência." },
          { marco: "1966", texto: "INPS (Decreto-Lei nº 72) unifica os IAPs." },
          { marco: "1977", texto: "SINPAS reúne INPS, INAMPS, IAPAS, LBA, FUNABEM, DATAPREV e CEME." },
          { marco: "1988", texto: "Constituição cria a seguridade social: saúde + previdência + assistência." },
          { marco: "1990", texto: "Criação do INSS (fusão INPS + IAPAS)." },
          { marco: "1991", texto: "Leis nº 8.212 (custeio) e nº 8.213 (benefícios)." },
          { marco: "2007", texto: "Lei nº 11.457: Receita Federal assume arrecadação e fiscalização das contribuições." },
          { marco: "2019", texto: "EC nº 103 (Reforma da Previdência) e Lei nº 13.846." },
        ],
      },
      {
        tipo: "tabela",
        titulo: "O tripé da seguridade social",
        colunas: ["Área", "Quem é atendido", "Exige contribuição?"],
        linhas: [
          ["Saúde (art. 196)", "Todos (acesso universal e igualitário)", "Não"],
          ["Previdência (art. 201)", "Segurados e seus dependentes", "Sim — caráter contributivo e filiação obrigatória"],
          ["Assistência (art. 203)", "Quem dela necessitar", "Não"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a seguridade é ação só dos Poderes Públicos: a CF fala em iniciativa dos Poderes Públicos E da sociedade.",
      "Afirmar que saúde ou assistência exigem contribuição: só a previdência é contributiva.",
      "Atribuir à Lei Eloy Chaves a criação do INPS ou do INSS: ela criou as CAPs dos ferroviários.",
      "Dizer que o conceito de seguridade social (tripé) existia antes de 1988: foi a CF/1988 que o inaugurou.",
      "Afirmar que o INSS arrecada as contribuições previdenciárias: desde 2007 isso é da Receita Federal.",
    ],
    fundamentos: [
      "CF/1988, arts. 194, 196, 201 e 203",
      "Decreto Legislativo nº 4.682/1923 (Lei Eloy Chaves)",
      "Lei nº 3.807/1960 (LOPS); Decreto-Lei nº 72/1966; Lei nº 6.439/1977",
      "Lei nº 8.029/1990 (criação do INSS)",
      "Lei nº 8.213/1991, art. 3º (CNPS)",
      "Lei nº 11.457/2007, art. 2º",
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-principios",
    titulo: "Princípios da Seguridade Social e da Previdência Social",
    pool: "seguridade",
    topicos: ["tec-esp-1", "ana-prev-1"],
    texto: [
      "Princípios são as regras-mãe que orientam o legislador e o aplicador da lei. Na seguridade social, a Constituição os chama de ‘objetivos’ e os lista no parágrafo único do art. 194. São sete, e a banca adora trocar uma palavra deles.",
      "Universalidade quer dizer que a proteção deve alcançar o maior número possível de riscos (cobertura) e de pessoas (atendimento). Uniformidade e equivalência garantem que trabalhadores urbanos e rurais recebam os mesmos benefícios, com o mesmo valor. Seletividade e distributividade permitem escolher quais riscos proteger e direcionar mais recursos a quem mais precisa — por isso o salário-família e o auxílio-reclusão são só para segurados de baixa renda.",
      "Irredutibilidade do valor dos benefícios impede reduzir o valor nominal do que é pago; para a previdência, a CF vai além e garante reajuste para manter o valor real (art. 201, § 4º). Equidade na participação no custeio significa que cada um contribui conforme sua capacidade e o risco que gera. Diversidade da base de financiamento quer dizer muitas fontes de dinheiro (folha, faturamento, lucro, concursos de prognósticos, importação), para não depender de uma só.",
      "Por fim, a gestão é democrática e descentralizada, com participação QUADRIPARTITE nos órgãos colegiados: trabalhadores, empregadores, aposentados e Governo. Além desses objetivos, há regras importantes no art. 195: nenhum benefício pode ser criado, aumentado ou estendido sem fonte de custeio total (regra da contrapartida) e as contribuições sociais só podem ser cobradas 90 dias após a lei que as criou ou aumentou (anterioridade nonagesimal).",
      "A finalidade da Previdência Social, segundo a Lei nº 8.213/1991 (art. 1º), é assegurar meios de manutenção aos beneficiários em casos de incapacidade, desemprego involuntário, idade avançada, tempo de serviço, encargos familiares, prisão ou morte de quem os sustentava. O art. 2º da mesma lei repete e detalha princípios próprios da previdência, como o cálculo dos benefícios com salários de contribuição corrigidos e a regra de que nenhum benefício que substitua a renda do trabalho pode ser menor que o salário mínimo.",
    ],
    pontosChave: [
      "Objetivos da seguridade (CF, art. 194, parágrafo único): I universalidade da cobertura e do atendimento; II uniformidade e equivalência urbano/rural; III seletividade e distributividade; IV irredutibilidade do valor dos benefícios; V equidade na forma de participação no custeio; VI diversidade da base de financiamento; VII gestão democrática e descentralizada, quadripartite.",
      "Gestão quadripartite: trabalhadores, empregadores, aposentados e Governo.",
      "Desde a EC nº 103/2019, a diversidade da base de financiamento exige identificar em rubricas contábeis separadas as receitas e despesas de saúde, previdência e assistência, preservando o caráter contributivo da previdência.",
      "Contrapartida (art. 195, § 5º): nenhum benefício ou serviço criado, majorado ou estendido sem a correspondente fonte de custeio TOTAL.",
      "Anterioridade nonagesimal (art. 195, § 6º): contribuições só podem ser exigidas 90 dias após a publicação da lei; não se aplica a anterioridade do exercício financeiro.",
      "Previdência (art. 201): caráter contributivo, filiação obrigatória e equilíbrio financeiro e atuarial.",
      "Benefício que substitui o salário de contribuição ou o rendimento do trabalho não pode ser inferior ao salário mínimo (art. 201, § 2º). Exemplo de exceção: auxílio-acidente e salário-família podem ser menores, pois não substituem a renda.",
      "Reajuste dos benefícios previdenciários deve preservar o valor real (art. 201, § 4º).",
      "Finalidade da previdência (Lei nº 8.213, art. 1º): incapacidade, desemprego involuntário, idade avançada, tempo de serviço, encargos familiares, prisão ou morte.",
    ],
    exemplos: [
      {
        titulo: "Seletividade e distributividade na prática",
        texto:
          "O auxílio-reclusão e o salário-família só são pagos a dependentes ou segurados de baixa renda. O legislador ‘selecionou’ quem precisa mais (seletividade) e assim redistribui renda (distributividade). Isso não fere a universalidade: a universalidade é um objetivo geral, aplicado conforme as possibilidades do sistema.",
      },
      {
        titulo: "Regra da contrapartida",
        texto:
          "Um projeto de lei quer criar um novo benefício previdenciário e diz apenas que ‘as despesas correrão à conta do orçamento’. Pela CF, isso não basta: é preciso indicar a fonte de custeio total. Previsão genérica no orçamento não supre a exigência do art. 195, § 5º.",
      },
      {
        titulo: "Contagem da noventena",
        texto:
          "Uma lei hipotética que aumenta uma contribuição social é publicada em 10 de novembro. Ela poderá ser cobrada depois de 90 dias da publicação (início de fevereiro do ano seguinte). Não é preciso esperar o ano seguinte inteiro nem respeitar a anterioridade do exercício: a regra das contribuições da seguridade é só a dos 90 dias.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Princípios: o que cada um protege",
        grupos: [
          { nome: "Quem e o que é protegido", itens: ["Universalidade da cobertura (riscos) e do atendimento (pessoas)", "Uniformidade e equivalência urbano/rural", "Seletividade e distributividade"] },
          { nome: "Valor dos benefícios", itens: ["Irredutibilidade (seguridade)", "Preservação do valor real (previdência, art. 201, § 4º)", "Piso de um salário mínimo para benefício substitutivo da renda"] },
          { nome: "Custeio", itens: ["Equidade na forma de participação", "Diversidade da base de financiamento", "Contrapartida: fonte de custeio total", "Anterioridade de 90 dias"] },
          { nome: "Gestão", itens: ["Democrática e descentralizada", "Quadripartite: trabalhadores, empregadores, aposentados e Governo"] },
        ],
      },
    ],
    pegadinhas: [
      "Trocar ‘quadripartite’ por ‘tripartite’ ou retirar os aposentados da gestão.",
      "Dizer que as contribuições da seguridade seguem a anterioridade do exercício financeiro: só vale a nonagesimal (90 dias).",
      "Afirmar que basta previsão na lei orçamentária para criar benefício: a CF exige fonte de custeio total.",
      "Dizer que a uniformidade urbano/rural impede regras diferenciadas para o trabalhador rural: a própria CF prevê idade menor para aposentadoria rural; o que se exige é igualdade de benefícios e de valores.",
      "Afirmar que todo benefício previdenciário tem piso de um salário mínimo: o piso vale para benefício que substitui a renda do trabalho (auxílio-acidente e salário-família podem ser menores).",
    ],
    fundamentos: [
      "CF/1988, art. 194, parágrafo único",
      "CF/1988, art. 195, §§ 5º e 6º",
      "CF/1988, art. 201, caput e §§ 2º e 4º",
      "Lei nº 8.212/1991, arts. 1º a 5º",
      "Lei nº 8.213/1991, arts. 1º e 2º",
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-legislacao-fontes",
    titulo: "Legislação previdenciária: fontes, autonomia, vigência, hierarquia, interpretação e integração",
    pool: "seguridade",
    topicos: ["tec-esp-2"],
    texto: [
      "Direito previdenciário é o ramo do direito público que estuda as regras de custeio e de benefícios da previdência. Ele é considerado AUTÔNOMO: tem princípios próprios, legislação própria (Leis nº 8.212 e 8.213, Decreto nº 3.048) e é estudado como disciplina separada. Ainda assim, conversa com outros ramos: com o direito tributário na parte de custeio (as contribuições são tributos), com o direito do trabalho e com o constitucional.",
      "Fontes são de onde nascem as normas. Fontes primárias criam direitos e obrigações: Constituição, emendas, leis complementares, leis ordinárias e medidas provisórias. Fontes secundárias apenas explicam e detalham a lei, sem poder inovar: decretos regulamentares (como o Decreto nº 3.048/1999), instruções normativas (como a IN PRES/INSS nº 128/2022), portarias e pareceres. Jurisprudência e doutrina ajudam a interpretar.",
      "Sobre competência para legislar: legislar sobre seguridade social é competência PRIVATIVA da União (CF, art. 22, XXIII), mas legislar sobre previdência social é competência CONCORRENTE (art. 24, XII) — por isso Estados e Municípios regulam seus regimes próprios de servidores. Matéria que a CF reserva à lei complementar, como normas gerais sobre decadência e prescrição tributárias (art. 146, III, b), não pode ser tratada por lei ordinária.",
      "Vigência e aplicação: se a lei não disser quando entra em vigor, vale a regra da LINDB (45 dias após a publicação no país). As contribuições sociais ainda precisam respeitar a noventena. Para benefícios, aplica-se a lei vigente quando o segurado preencheu os requisitos (tempus regit actum), o que protege o direito adquirido. Exemplo clássico: a pensão por morte é regida pela lei da data do óbito (Súmula 340 do STJ).",
      "Interpretação e integração: interpretar é descobrir o sentido da norma (literal, sistemática, histórica, teleológica). Integrar é preencher lacunas: pela LINDB usam-se analogia, costumes e princípios gerais do direito; na parte tributária (custeio), o CTN manda usar, nessa ordem, analogia, princípios gerais de direito tributário, princípios gerais de direito público e equidade — mas a analogia não pode criar tributo e a equidade não pode dispensar tributo. Isenções e benefícios fiscais se interpretam literalmente (CTN, art. 111).",
    ],
    pontosChave: [
      "Autonomia do direito previdenciário: legislativa, científica e didática; é ramo do direito público.",
      "Fontes primárias (inovam): CF, EC, LC, LO, MP. Fontes secundárias (não inovam): decretos, instruções normativas, portarias, orientações internas.",
      "Seguridade social: competência legislativa PRIVATIVA da União (CF, art. 22, XXIII). Previdência social: competência CONCORRENTE (art. 24, XII).",
      "Nova contribuição (competência residual) exige lei complementar e não pode ser cumulativa nem ter fato gerador/base de outra já prevista (art. 195, § 4º c/c art. 154, I).",
      "Hierarquia: Constituição → leis (LC, LO, MP) → decretos regulamentares → instruções normativas e portarias. Regulamento não pode contrariar nem ir além da lei.",
      "Vigência: silêncio da lei = 45 dias (LINDB, art. 1º); contribuições sociais = 90 dias após a publicação (art. 195, § 6º).",
      "Benefícios: tempus regit actum — lei da época em que se reuniram os requisitos (Súmula 340 STJ: pensão por morte = lei da data do óbito).",
      "Integração no custeio (CTN, art. 108): analogia → princípios gerais de direito tributário → princípios gerais de direito público → equidade.",
      "CTN, art. 111: interpretação literal para isenção, suspensão ou exclusão do crédito tributário.",
    ],
    exemplos: [
      {
        titulo: "Decreto que ‘cria’ exigência",
        texto:
          "Imagine que um decreto passe a exigir, para conceder um benefício, um requisito que a Lei nº 8.213/1991 não prevê. Esse decreto extrapola o poder regulamentar: fonte secundária só detalha a lei, não cria direitos nem obrigações novas.",
      },
      {
        titulo: "Lei aplicável à pensão por morte",
        texto:
          "Pedro morreu em 2018; a viúva só pediu a pensão em 2026. Aplica-se a lei vigente em 2018, data do óbito, e não as regras de cálculo da EC nº 103/2019. A data do requerimento não muda a lei aplicável.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Fontes do direito previdenciário",
        grupos: [
          { nome: "Primárias (inovam)", itens: ["Constituição e emendas", "Leis complementares", "Leis ordinárias (ex.: Leis nº 8.212 e 8.213/1991)", "Medidas provisórias"] },
          { nome: "Secundárias (não inovam)", itens: ["Decreto nº 3.048/1999 (Regulamento)", "Instruções normativas (ex.: IN PRES/INSS nº 128/2022)", "Portarias e orientações internas"] },
          { nome: "Auxiliam a interpretação", itens: ["Jurisprudência (súmulas, temas repetitivos)", "Doutrina"] },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a competência para legislar sobre previdência social é privativa da União: é concorrente; privativa é a de seguridade social.",
      "Afirmar que decreto ou instrução normativa pode criar obrigação não prevista em lei.",
      "Aplicar ao benefício a lei da data do requerimento, e não a da data em que os requisitos foram preenchidos.",
      "Dizer que a analogia pode ser usada para cobrar contribuição não prevista em lei ou que a equidade pode dispensar o pagamento.",
      "Afirmar que contribuição nova (residual) pode ser criada por lei ordinária: exige lei complementar.",
    ],
    fundamentos: [
      "CF/1988, arts. 22, XXIII; 24, XII; 146, III, b; 195, §§ 4º e 6º",
      "Decreto-Lei nº 4.657/1942 (LINDB), arts. 1º e 4º",
      "Código Tributário Nacional, arts. 108 e 111",
      "STJ, Súmula 340",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-segurados-obrigatorios",
    titulo: "RGPS: segurados obrigatórios (empregado, doméstico, contribuinte individual, avulso e segurado especial)",
    pool: "seguridade",
    topicos: ["tec-esp-3", "ana-prev-2"],
    texto: [
      "Segurado é a pessoa física protegida diretamente pela previdência. No Regime Geral (RGPS), o segurado OBRIGATÓRIO é quem exerce atividade remunerada: o simples fato de trabalhar já o vincula ao sistema, queira ele ou não. A lei divide os obrigatórios em cinco espécies: empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial.",
      "EMPREGADO é quem trabalha com subordinação, de forma não eventual e mediante salário, para empresa (urbano ou rural). Também entram aqui o trabalhador temporário, o aprendiz, o servidor ocupante só de cargo em comissão (sem cargo efetivo), o exercente de mandato eletivo que não tenha regime próprio e o brasileiro contratado no Brasil para trabalhar em filial de empresa brasileira no exterior, entre outros.",
      "EMPREGADO DOMÉSTICO é quem presta serviço contínuo, pessoal, subordinado e remunerado a pessoa ou família, no âmbito residencial, sem finalidade de lucro, por MAIS de 2 dias por semana (LC nº 150/2015). A diarista que vai até 2 dias por semana na mesma casa não é doméstica: é contribuinte individual. Se o trabalho gerar lucro para o patrão (ex.: cozinhar para venda), deixa de ser doméstico.",
      "CONTRIBUINTE INDIVIDUAL é a categoria ‘residual’ de quem trabalha por conta própria ou sem vínculo de emprego: autônomos, empresários e sócios que recebem pró-labore, diretor não empregado, ministro de confissão religiosa, quem presta serviço eventual a empresas, cooperado de cooperativa de trabalho, MEI, síndico remunerado, produtor rural pessoa física que não é segurado especial, garimpeiro, médico-residente, entre outros.",
      "TRABALHADOR AVULSO presta serviço a várias empresas SEM vínculo de emprego, com intermediação OBRIGATÓRIA do órgão gestor de mão de obra (OGMO, nos portos) ou do sindicato da categoria. SEGURADO ESPECIAL é o pequeno produtor rural, o pescador artesanal e o extrativista vegetal/seringueiro que trabalham individualmente ou em regime de economia familiar (o trabalho da família é indispensável à subsistência), com auxílio eventual de terceiros; ele contribui sobre a venda da produção, não sobre salário.",
    ],
    pontosChave: [
      "Cinco espécies de segurados obrigatórios: empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial.",
      "Idade mínima para filiação: 16 anos, salvo o aprendiz, a partir de 14 (CF, art. 7º, XXXIII).",
      "Doméstico: mais de 2 dias por semana para a mesma pessoa/família, sem fins lucrativos, no âmbito residencial; idade mínima de 18 anos (LC nº 150/2015, art. 1º).",
      "Comissionado puro (sem cargo efetivo) e exercente de mandato eletivo sem regime próprio = EMPREGADO no RGPS.",
      "Avulso: sem vínculo, várias empresas, intermediação obrigatória de OGMO ou sindicato; tem os mesmos direitos trabalhistas do empregado (CF, art. 7º, XXXIV).",
      "Segurado especial: produtor rural em área de até 4 módulos fiscais, pescador artesanal ou seringueiro/extrativista vegetal; cônjuge/companheiro e filhos maiores de 16 anos que trabalhem com o grupo também são segurados especiais.",
      "Segurado especial pode contratar empregados por prazo determinado até 120 pessoas/dia no ano civil, sem perder a condição (Lei nº 8.213, art. 11, § 7º).",
      "Quem exerce mais de uma atividade remunerada é segurado obrigatório em relação a cada uma delas.",
      "Contribuinte individual que presta serviço como taxista/condutor autônomo tem como remuneração 20% do valor bruto do frete ou corrida (Lei nº 8.212, art. 28, § 11).",
    ],
    exemplos: [
      {
        titulo: "Diarista x doméstica",
        texto:
          "Maria faz faxina na casa da família Souza às segundas e quintas (2 dias por semana): é contribuinte individual, pois não passa de 2 dias. Se passar a ir segunda, quarta e sexta (3 dias), torna-se empregada doméstica, e o empregador doméstico passa a ter obrigações de recolhimento.",
      },
      {
        titulo: "Caseiro: doméstico ou rural?",
        texto:
          "Zé cuida de um sítio de lazer da família no fim de semana, sem produção para venda: é empregado doméstico (não há lucro). Se o sítio passar a vender leite e queijo e Zé trabalhar na produção, ele passa a ser empregado rural, porque a atividade tem finalidade lucrativa.",
      },
      {
        titulo: "Segurado especial com ajuda de terceiros",
        texto:
          "Dona Rita planta milho com o marido e o filho de 17 anos em 3 módulos fiscais. Na colheita, contrata dois trabalhadores por 20 dias (2 × 20 = 40 pessoas/dia no ano). Continuam todos segurados especiais: área até 4 módulos, trabalho familiar e contratação dentro do limite de 120 pessoas/dia.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Espécies de segurados obrigatórios",
        colunas: ["Espécie", "Traço marcante", "Exemplos"],
        linhas: [
          ["Empregado", "Subordinação, não eventualidade, salário; trabalha para empresa", "Empregado com carteira, temporário, aprendiz, comissionado sem vínculo efetivo, mandato eletivo sem RPPS"],
          ["Empregado doméstico", "Pessoa/família, âmbito residencial, sem lucro, mais de 2 dias/semana", "Babá, cozinheira, motorista particular, caseiro de sítio de lazer"],
          ["Contribuinte individual", "Por conta própria ou sem vínculo de emprego", "Autônomo, sócio com pró-labore, MEI, diarista até 2 dias, ministro religioso, síndico remunerado, médico-residente"],
          ["Trabalhador avulso", "Várias empresas, sem vínculo, intermediação obrigatória de OGMO ou sindicato", "Estivador, conferente de carga portuário, ‘chapa’ sindicalizado de movimentação de mercadorias"],
          ["Segurado especial", "Economia familiar rural/pesqueira, contribui sobre a produção vendida", "Pequeno produtor (até 4 módulos fiscais), pescador artesanal, seringueiro"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o avulso tem vínculo empregatício com as empresas: não tem; o que é obrigatório é a intermediação de OGMO ou sindicato.",
      "Classificar como doméstica a diarista que trabalha 2 dias por semana: precisa ser MAIS de 2 dias.",
      "Afirmar que o segurado especial perde a condição se contratar qualquer empregado: pode contratar até 120 pessoas/dia por ano, por prazo determinado.",
      "Dizer que o servidor ocupante exclusivamente de cargo em comissão vai para o regime próprio: ele é empregado do RGPS.",
      "Trocar o limite de 4 módulos fiscais por outro número (2, 6 etc.).",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, art. 11 (espécies de segurados obrigatórios)",
      "Lei nº 8.212/1991, art. 12",
      "Decreto nº 3.048/1999, art. 9º",
      "Lei Complementar nº 150/2015, art. 1º",
      "CF/1988, art. 7º, XXXIII e XXXIV; art. 40, § 13",
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-facultativo-filiacao",
    titulo: "Segurado facultativo, filiação x inscrição e trabalhadores excluídos do RGPS",
    pool: "seguridade",
    topicos: ["tec-esp-3", "tec-esp-4", "ana-prev-2", "ana-prev-3"],
    texto: [
      "FILIAÇÃO e INSCRIÇÃO parecem a mesma coisa, mas não são. Filiação é o VÍNCULO jurídico entre a pessoa e a previdência, que gera direitos e deveres. Inscrição é o ato de CADASTRO, em que a pessoa é registrada no sistema com seus dados (ex.: NIT/CPF no CNIS). Para o segurado obrigatório, a filiação é automática: nasce no momento em que começa a trabalhar com remuneração, mesmo que ninguém o cadastre.",
      "Para o segurado FACULTATIVO é diferente: ele não trabalha de forma remunerada, mas QUER se proteger. A filiação dele é um ato de vontade e só acontece com a inscrição somada ao pagamento da primeira contribuição sem atraso. Ela não retroage: não dá para pagar meses anteriores à inscrição para ‘comprar’ tempo passado.",
      "Pode ser facultativo quem tem 16 anos ou mais e não exerce atividade que o torne segurado obrigatório. Exemplos do Regulamento: dona de casa, estudante, síndico NÃO remunerado, estagiário (Lei nº 11.788/2008), bolsista de pesquisa ou pós-graduação, quem deixou de ser segurado obrigatório, brasileiro que acompanha cônjuge no exterior, brasileiro residente no exterior e o presidiário que não exerce atividade remunerada.",
      "A Constituição proíbe que participante de regime próprio (servidor efetivo) se filie ao RGPS como facultativo (art. 201, § 5º). O Regulamento só admite exceção para o servidor afastado sem remuneração, quando o regime próprio não permitir que ele contribua nesse período.",
      "EXCLUÍDOS do RGPS são os que já têm regime próprio: servidores públicos ocupantes de cargo efetivo da União, Estados, DF e Municípios (e de suas autarquias e fundações) e militares, desde que amparados por regime próprio. Se esse servidor também exercer, ao mesmo tempo, uma atividade privada (ex.: professor efetivo que dá aulas em escola particular), ele será segurado obrigatório do RGPS em relação a essa outra atividade.",
    ],
    pontosChave: [
      "Filiação = vínculo jurídico; inscrição = cadastro.",
      "Obrigatório: filiação automática com o exercício de atividade remunerada. Facultativo: filiação com inscrição + 1º recolhimento em dia.",
      "Facultativo: idade mínima de 16 anos e não pode estar exercendo atividade que o enquadre como obrigatório.",
      "Filiação do facultativo não retroage: não se pagam competências anteriores à inscrição (Decreto nº 3.048, art. 11, § 3º).",
      "Vedada a filiação como facultativo de participante de regime próprio (CF, art. 201, § 5º), salvo afastamento sem vencimentos sem possibilidade de contribuir ao RPPS.",
      "Inscrição do empregado e do avulso: feita pela empresa/OGMO/sindicato (hoje via eSocial); doméstico: pelo empregador doméstico; contribuinte individual e facultativo: pelo próprio segurado.",
      "NÃO se admite inscrição post mortem de contribuinte individual nem de facultativo (Lei nº 8.213, art. 17, § 7º, incluído pela Lei nº 13.846/2019). Para o segurado especial, presentes os pressupostos, o Regulamento admite.",
      "Excluídos do RGPS: servidores efetivos e militares amparados por regime próprio; se exercerem atividade privada concomitante, filiam-se ao RGPS por ela.",
      "Período de graça do facultativo: mantém a qualidade de segurado por até 6 meses após parar de contribuir (Lei nº 8.213, art. 15, VI).",
    ],
    exemplos: [
      {
        titulo: "Empregado sem registro",
        texto:
          "Lucas trabalhou 8 meses numa loja sem carteira assinada. Mesmo sem inscrição pela empresa, ele já era FILIADO desde o 1º dia, porque exerceu atividade remunerada como empregado. Comprovado o vínculo, o tempo conta; a obrigação de recolher era da empresa.",
      },
      {
        titulo: "Facultativo não compra o passado",
        texto:
          "Bianca, estudante de 22 anos, se inscreve como facultativa em março de 2026 e paga a contribuição de março em dia. A filiação vale a partir de março/2026. Ela não pode pagar janeiro e fevereiro de 2026, nem anos anteriores, para contar como tempo de contribuição.",
      },
      {
        titulo: "Servidor com atividade privada",
        texto:
          "Paulo é professor efetivo da rede estadual (regime próprio) e dá aulas à noite numa faculdade particular com carteira assinada. Pela atividade estadual, está excluído do RGPS; pela faculdade, é segurado empregado do RGPS. Já sua esposa, servidora efetiva sem atividade privada, não pode contribuir ao RGPS como facultativa.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Como nasce o vínculo com o RGPS",
        passos: [
          { titulo: "Segurado obrigatório: começa a trabalhar", texto: "A filiação é automática com o exercício da atividade remunerada." },
          { titulo: "Inscrição (cadastro)", texto: "Feita pela empresa/empregador (empregado, doméstico, avulso) ou pelo próprio segurado (contribuinte individual, facultativo, segurado especial)." },
          { titulo: "Contribuição", texto: "Descontada pela empresa ou recolhida pelo próprio segurado, conforme a espécie." },
          { titulo: "Segurado facultativo", texto: "Precisa de inscrição + 1º pagamento em dia; só então há filiação, sem efeito retroativo." },
        ],
      },
      {
        tipo: "grupos",
        titulo: "Facultativo x excluído",
        grupos: [
          { nome: "Podem ser facultativos (exemplos)", itens: ["Dona de casa", "Estudante", "Síndico não remunerado", "Estagiário e bolsista de pesquisa", "Quem deixou de ser segurado obrigatório", "Brasileiro residente no exterior", "Presidiário sem atividade remunerada"] },
          { nome: "Excluídos do RGPS", itens: ["Servidor efetivo com regime próprio", "Militar com sistema próprio", "Exceção: atividade privada concomitante gera filiação ao RGPS por ela"] },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a filiação do segurado obrigatório depende de inscrição ou de contribuição: ela decorre do trabalho remunerado.",
      "Afirmar que o facultativo pode recolher contribuições de meses anteriores à inscrição.",
      "Dizer que o síndico de condomínio é sempre facultativo: só o NÃO remunerado; o remunerado é contribuinte individual.",
      "Afirmar que servidor efetivo pode contribuir ao RGPS como facultativo para ‘ter duas aposentadorias’: a CF veda.",
      "Admitir inscrição post mortem de contribuinte individual para gerar pensão: a Lei nº 13.846/2019 proibiu.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 12, 13, 15 e 17",
      "Lei nº 8.212/1991, arts. 13 e 14",
      "Decreto nº 3.048/1999, arts. 11, 18 e 20",
      "CF/1988, art. 201, § 5º",
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────
  {
    id: "seg-empresa-empregador-domestico",
    titulo: "Empresa e empregador doméstico: conceito previdenciário",
    pool: "seguridade",
    topicos: ["tec-esp-5", "ana-prev-4"],
    texto: [
      "Para a previdência, ‘empresa’ é um conceito muito mais amplo do que no dia a dia. É a firma individual ou a sociedade que assume o risco de atividade econômica urbana ou rural, COM OU SEM fins lucrativos, e também os órgãos e entidades da administração pública direta, indireta e fundacional. Ou seja: uma ONG, uma igreja e uma prefeitura também são ‘empresa’ para o custeio.",
      "Além disso, a lei EQUIPARA a empresa outras figuras, para que paguem contribuições e cumpram obrigações quando contratam trabalhadores: o contribuinte individual em relação a quem lhe presta serviço (ex.: o dentista autônomo que tem uma secretária); a pessoa física dona de obra de construção civil, em relação aos trabalhadores da obra; cooperativas, associações e entidades de qualquer natureza; missões diplomáticas e repartições consulares estrangeiras; e, pelo Regulamento, o operador portuário e o OGMO.",
      "EMPREGADOR DOMÉSTICO é a pessoa ou família que admite a seu serviço, sem finalidade lucrativa, empregado doméstico. Pessoa jurídica nunca é empregador doméstico. O empregador doméstico tem regime próprio de recolhimento, o Simples Doméstico (guia única pelo eSocial), criado pela LC nº 150/2015.",
      "Por que isso importa? Porque cada figura gera obrigações diferentes: a empresa paga a contribuição patronal sobre a folha, desconta e recolhe a contribuição dos empregados e dos contribuintes individuais que contrata, e entrega declarações. O empregador doméstico paga contribuição patronal reduzida, desconta a do empregado e recolhe tudo numa única guia.",
    ],
    pontosChave: [
      "Empresa (Lei nº 8.212, art. 15, I): firma individual ou sociedade com risco de atividade econômica urbana ou rural, com ou sem fins lucrativos + órgãos e entidades da administração pública direta, indireta e fundacional.",
      "Equiparam-se a empresa: contribuinte individual (em relação a quem lhe presta serviço); pessoa física dona de obra de construção civil; cooperativa, associação ou entidade de qualquer natureza; missão diplomática e repartição consular estrangeiras.",
      "O Regulamento também equipara a empresa o operador portuário e o órgão gestor de mão de obra (Decreto nº 3.048, art. 12, parágrafo único).",
      "Empregador doméstico (art. 15, II): pessoa ou família que admite empregado doméstico, sem finalidade lucrativa.",
      "Empregador doméstico recolhe 8% patronal + 0,8% para acidentes do trabalho (GILRAT), além de 8% de FGTS e 3,2% de indenização compensatória (LC nº 150/2015, art. 34), e desconta a contribuição do empregado.",
      "Prazo do empregador doméstico: até o dia 7 do mês seguinte, ANTECIPANDO-se se não houver expediente bancário.",
      "Empresa paga 20% sobre remunerações de empregados, avulsos e contribuintes individuais que lhe prestem serviço, mais GILRAT (1%, 2% ou 3%) sobre a folha de empregados e avulsos.",
    ],
    exemplos: [
      {
        titulo: "ONG é empresa?",
        texto:
          "Uma associação sem fins lucrativos contrata 3 empregados. Para o custeio, ela é empresa (ou equiparada): deve recolher a contribuição patronal e descontar a dos empregados — salvo se for entidade beneficente certificada que cumpra os requisitos da lei complementar (imunidade do art. 195, § 7º).",
      },
      {
        titulo: "Dentista autônomo com secretária",
        texto:
          "Dra. Lia é dentista autônoma (contribuinte individual) e contrata uma secretária com carteira assinada. Em relação à secretária, Dra. Lia é equiparada a empresa: paga a contribuição patronal, desconta a contribuição da empregada e cumpre as obrigações acessórias.",
      },
      {
        titulo: "Contribuições do empregador doméstico (valores hipotéticos)",
        texto:
          "Salário hipotético da doméstica: R$ 2.000,00. Encargos do patrão: 8% patronal = R$ 160,00; 0,8% GILRAT = R$ 16,00; FGTS 8% = R$ 160,00; indenização compensatória 3,2% = R$ 64,00. Além disso, o empregador desconta do salário a contribuição da empregada (alíquotas progressivas) e recolhe tudo na guia única até o dia 7 do mês seguinte.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Quem é ‘empresa’ para a previdência",
        grupos: [
          { nome: "Empresa", itens: ["Firma individual ou sociedade (com ou sem lucro)", "Administração pública direta, indireta e fundacional"] },
          { nome: "Equiparados a empresa", itens: ["Contribuinte individual que contrata alguém", "Pessoa física dona de obra de construção civil", "Cooperativa, associação, entidade de qualquer natureza", "Missão diplomática e repartição consular estrangeiras", "Operador portuário e OGMO (Regulamento)"] },
          { nome: "Empregador doméstico", itens: ["Pessoa ou família", "Sem finalidade lucrativa", "Admite empregado doméstico"] },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que só é empresa quem tem fins lucrativos: o conceito previdenciário inclui entidades sem fins lucrativos e órgãos públicos.",
      "Afirmar que pessoa jurídica pode ser empregador doméstico.",
      "Trocar o prazo do empregador doméstico (dia 7, antecipa) pelo da empresa (dia 20, antecipa) ou pelo do contribuinte individual (dia 15, prorroga).",
      "Dizer que o contribuinte individual nunca tem obrigações de empresa: ele é equiparado a empresa em relação a quem lhe presta serviço.",
    ],
    fundamentos: [
      "Lei nº 8.212/1991, art. 15",
      "Lei nº 8.213/1991, art. 14",
      "Decreto nº 3.048/1999, art. 12",
      "Lei Complementar nº 150/2015, arts. 34 e 35",
      "Lei nº 8.212/1991, arts. 22 e 24",
    ],
  },
]
