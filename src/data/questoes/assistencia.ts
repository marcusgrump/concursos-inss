import type { Questao } from "../types"

/** LOAS/BPC, legislações especiais, políticas sociais e Serviço Social. */
export const QUESTOES_ASSISTENCIA: Questao[] = [
  {
    id: "loas-001",
    pool: "loas",
    assunto: "BPC — requisitos",
    enunciado:
      "O benefício de prestação continuada garante um salário mínimo mensal à pessoa com deficiência e ao idoso com 60 anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.",
    gabarito: "E",
    comentario:
      "Para o BPC, idoso é quem tem 65 anos ou mais (art. 20 da LOAS). Os 60 anos são o marco do Estatuto da Pessoa Idosa, mas não valem para o BPC.",
    fundamento: "Lei nº 8.742/1993, art. 20",
  },
  {
    id: "loas-002",
    pool: "loas",
    assunto: "BPC — renda",
    enunciado:
      "Pela LOAS, considera-se incapaz de prover a manutenção da pessoa com deficiência ou idosa a família cuja renda mensal per capita seja igual ou inferior a 1/2 salário mínimo.",
    gabarito: "E",
    comentario:
      "O critério legal é renda per capita igual ou inferior a 1/4 do salário mínimo (art. 20, § 3º). O regulamento PODE ampliar esse limite para até 1/2 salário mínimo considerando outros fatores (art. 20-B), mas a regra geral é 1/4.",
    fundamento: "Lei nº 8.742/1993, art. 20, § 3º",
  },
  {
    id: "loas-003",
    pool: "loas",
    assunto: "BPC — natureza",
    enunciado: "O BPC é benefício previdenciário e, por isso, exige a qualidade de segurado do requerente.",
    gabarito: "E",
    comentario:
      "O BPC é benefício ASSISTENCIAL: independe de contribuição. O INSS apenas o operacionaliza; a coordenação é do ministério responsável pela assistência social.",
    fundamento: "CF/1988, art. 203, V; Lei nº 8.742/1993",
  },
  {
    id: "loas-004",
    pool: "loas",
    assunto: "BPC — 13º e pensão",
    enunciado: "O beneficiário do BPC faz jus ao abono anual (13º) e, com sua morte, o benefício é convertido em pensão para os dependentes.",
    gabarito: "E",
    comentario:
      "O BPC não gera abono anual nem pensão por morte. É intransferível (Decreto nº 6.214/2007, art. 22 e art. 23).",
    fundamento: "Decreto nº 6.214/2007, arts. 22 e 23",
  },
  {
    id: "loas-005",
    pool: "loas",
    assunto: "BPC — deficiência",
    enunciado:
      "Para fins do BPC, considera-se impedimento de longo prazo aquele que produza efeitos pelo prazo mínimo de dois anos.",
    gabarito: "C",
    comentario: "Art. 20, § 10, da LOAS.",
    fundamento: "Lei nº 8.742/1993, art. 20, § 10",
  },
  {
    id: "loas-006",
    pool: "loas",
    assunto: "BPC — revisão",
    enunciado:
      "O BPC deve ser revisto a cada cinco anos para avaliação da continuidade das condições que lhe deram origem.",
    gabarito: "E",
    comentario:
      "A revisão é a cada DOIS anos (art. 21 da LOAS).",
    fundamento: "Lei nº 8.742/1993, art. 21",
  },
  {
    id: "loas-007",
    pool: "loas",
    assunto: "BPC — cálculo da renda",
    enunciado:
      "O BPC ou o benefício previdenciário de até um salário mínimo concedido a idoso acima de 65 anos ou a pessoa com deficiência não será computado no cálculo da renda familiar per capita para a concessão do BPC a outro idoso ou pessoa com deficiência da mesma família.",
    gabarito: "C",
    comentario: "Art. 20, § 14, da LOAS (Lei nº 13.982/2020).",
    fundamento: "Lei nº 8.742/1993, art. 20, § 14",
  },
  {
    id: "loas-008",
    pool: "loas",
    assunto: "BPC — acumulação",
    enunciado:
      "O BPC não pode ser acumulado com qualquer outro benefício da seguridade social ou de outro regime, salvo os da assistência médica e da pensão especial de natureza indenizatória.",
    gabarito: "C",
    comentario: "Art. 20, § 4º, da LOAS. A remuneração de contrato de aprendizagem também não impede o BPC (limitada a 2 anos, § 9º).",
    fundamento: "Lei nº 8.742/1993, art. 20, § 4º",
  },
  {
    id: "loas-009",
    pool: "loas",
    assunto: "BPC — CadÚnico",
    enunciado:
      "A concessão, manutenção e revisão do BPC dependem de inscrição do requerente no CPF e no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico).",
    gabarito: "C",
    comentario: "Art. 20, § 12, da LOAS (Lei nº 13.846/2019).",
    fundamento: "Lei nº 8.742/1993, art. 20, § 12",
  },
  {
    id: "loas-010",
    pool: "loas",
    assunto: "Auxílio-inclusão",
    enunciado:
      "O auxílio-inclusão corresponde a 100% do valor do BPC e é pago cumulativamente com este à pessoa com deficiência que passa a exercer atividade remunerada.",
    gabarito: "E",
    comentario:
      "O auxílio-inclusão vale 50% do BPC e, durante seu recebimento, o BPC é SUSPENSO (não há cumulação). É devido à PcD moderada ou grave que recebe (ou recebeu nos últimos 5 anos) o BPC e passa a trabalhar com remuneração de até 2 salários mínimos.",
    fundamento: "Lei nº 8.742/1993, arts. 26-A a 26-H",
  },
  {
    id: "loas-011",
    pool: "loas",
    assunto: "Família para o BPC",
    enunciado:
      "Para o cálculo da renda per capita do BPC, a família é composta pelo requerente, o cônjuge ou companheiro, os pais e, na ausência de um deles, a madrasta ou o padrasto, os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, desde que vivam sob o mesmo teto.",
    gabarito: "C",
    comentario: "Art. 20, § 1º, da LOAS.",
    fundamento: "Lei nº 8.742/1993, art. 20, § 1º",
  },
  {
    id: "loas-012",
    pool: "loas",
    assunto: "Seguro-defeso",
    enunciado:
      "O pescador artesanal que exerça sua atividade de forma ininterrupta, individualmente ou em regime de economia familiar, faz jus ao seguro-desemprego de um salário mínimo mensal durante o período de defeso.",
    gabarito: "C",
    comentario: "Art. 1º da Lei nº 10.779/2003. A habilitação é feita pelo INSS.",
    fundamento: "Lei nº 10.779/2003, art. 1º",
  },
  {
    id: "loas-013",
    pool: "loas",
    assunto: "Pensões especiais",
    enunciado:
      "A pensão especial devida às pessoas atingidas pela hanseníase submetidas a isolamento e internação compulsórios é mensal, vitalícia e intransferível.",
    gabarito: "C",
    comentario: "Lei nº 11.520/2007 — destina-se a quem foi internado compulsoriamente em hospitais-colônia até 31/12/1986.",
    fundamento: "Lei nº 11.520/2007, art. 1º",
  },
  {
    id: "loas-014",
    pool: "loas",
    assunto: "Pensões especiais",
    enunciado:
      "A pensão especial aos portadores da síndrome da talidomida é benefício previdenciário que exige carência de doze contribuições mensais.",
    gabarito: "E",
    comentario:
      "A pensão da Lei nº 7.070/1982 é uma pensão especial de natureza indenizatória, mensal e vitalícia, sem exigência de contribuição ou carência. O INSS apenas a operacionaliza.",
    fundamento: "Lei nº 7.070/1982",
  },
  {
    id: "loas-015",
    pool: "loas",
    assunto: "LOAS — princípios",
    enunciado:
      "A assistência social, direito do cidadão e dever do Estado, é política de seguridade social não contributiva, que provê os mínimos sociais.",
    gabarito: "C",
    comentario: "Art. 1º da LOAS.",
    fundamento: "Lei nº 8.742/1993, art. 1º",
  },
  {
    id: "pol-001",
    pool: "politicas-sociais",
    assunto: "SUAS — proteção social",
    enunciado:
      "O Centro de Referência de Assistência Social (CRAS) é a unidade pública responsável pela oferta de serviços da proteção social especial de média complexidade.",
    gabarito: "E",
    comentario:
      "O CRAS oferta a proteção social BÁSICA (ex.: PAIF). A proteção especial de média complexidade é ofertada no CREAS (ex.: PAEFI).",
    fundamento: "Lei nº 8.742/1993, art. 6º-C",
  },
  {
    id: "pol-002",
    pool: "politicas-sociais",
    assunto: "Estatuto da Pessoa Idosa",
    enunciado:
      "O Estatuto da Pessoa Idosa considera idosa a pessoa com idade igual ou superior a 65 anos.",
    gabarito: "E",
    comentario:
      "O Estatuto considera idosa a pessoa com 60 anos ou mais (art. 1º). A idade de 65 anos é a exigida para o BPC e para a gratuidade no transporte coletivo urbano.",
    fundamento: "Lei nº 10.741/2003, art. 1º",
  },
  {
    id: "pol-003",
    pool: "politicas-sociais",
    assunto: "Estatuto da Pessoa Idosa",
    enunciado: "Entre as pessoas idosas, é assegurada prioridade especial aos maiores de 80 anos.",
    gabarito: "C",
    comentario: "Art. 3º, § 2º, da Lei nº 10.741/2003.",
    fundamento: "Lei nº 10.741/2003, art. 3º, § 2º",
  },
  {
    id: "pol-004",
    pool: "politicas-sociais",
    assunto: "ECA",
    enunciado:
      "Para o Estatuto da Criança e do Adolescente, considera-se criança a pessoa até 14 anos incompletos.",
    gabarito: "E",
    comentario:
      "Criança é a pessoa até 12 anos incompletos; adolescente, entre 12 e 18 anos (art. 2º do ECA).",
    fundamento: "Lei nº 8.069/1990, art. 2º",
  },
  {
    id: "pol-005",
    pool: "politicas-sociais",
    assunto: "Lei Brasileira de Inclusão",
    enunciado:
      "Considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.",
    gabarito: "C",
    comentario: "Art. 2º da Lei nº 13.146/2015, que reproduz o conceito da Convenção da ONU (modelo biopsicossocial).",
    fundamento: "Lei nº 13.146/2015, art. 2º",
  },
  {
    id: "pol-006",
    pool: "politicas-sociais",
    assunto: "CIF",
    enunciado:
      "A CIF, da Organização Mundial da Saúde, adota um modelo exclusivamente biomédico, no qual a incapacidade decorre apenas da doença ou lesão do indivíduo.",
    gabarito: "E",
    comentario:
      "A CIF adota o modelo BIOPSICOSSOCIAL, integrando funções e estruturas do corpo, atividades e participação e fatores contextuais (ambientais e pessoais).",
  },
  {
    id: "pol-007",
    pool: "politicas-sociais",
    assunto: "Lei Maria da Penha",
    enunciado:
      "São formas de violência doméstica e familiar contra a mulher, entre outras, a violência física, psicológica, sexual, patrimonial e moral.",
    gabarito: "C",
    comentario: "Art. 7º da Lei nº 11.340/2006.",
    fundamento: "Lei nº 11.340/2006, art. 7º",
  },
  {
    id: "ss-001",
    pool: "servico-social",
    assunto: "Lei nº 8.662/1993",
    enunciado:
      "Constitui atribuição privativa do assistente social realizar vistorias, perícias técnicas, laudos periciais, informações e pareceres sobre a matéria de Serviço Social.",
    gabarito: "C",
    comentario: "Art. 5º, IV, da Lei nº 8.662/1993.",
    fundamento: "Lei nº 8.662/1993, art. 5º",
  },
  {
    id: "ss-002",
    pool: "servico-social",
    assunto: "Código de Ética",
    enunciado:
      "O Código de Ética do/a Assistente Social de 1993 tem, entre seus princípios fundamentais, o reconhecimento da liberdade como valor ético central.",
    gabarito: "C",
    comentario:
      "É o primeiro princípio do Código (Resolução CFESS nº 273/1993). Outros: defesa intransigente dos direitos humanos, ampliação da cidadania, aprofundamento da democracia, equidade e justiça social, eliminação de preconceitos, pluralismo.",
    fundamento: "Resolução CFESS nº 273/1993",
  },
  {
    id: "ss-003",
    pool: "servico-social",
    assunto: "Renovação do Serviço Social",
    enunciado:
      "Na leitura de José Paulo Netto, a renovação do Serviço Social no Brasil compreende as perspectivas modernizadora, de reatualização do conservadorismo e de intenção de ruptura.",
    gabarito: "C",
    comentario:
      "Modernizadora (Araxá e Teresópolis), reatualização do conservadorismo (fenomenologia; Sumaré) e intenção de ruptura (Método BH; aproximação à tradição marxista).",
  },
  {
    id: "ss-004",
    pool: "servico-social",
    assunto: "Resolução CFESS nº 557/2009",
    enunciado:
      "Em parecer conjunto com outros profissionais, o assistente social deve destacar sua área de conhecimento separadamente, delimitar o âmbito de sua atuação e identificar-se com seu número de registro no CRESS.",
    gabarito: "C",
    comentario: "A Resolução CFESS nº 557/2009 disciplina pareceres, laudos e opiniões técnicas conjuntos, preservando a especificidade profissional.",
    fundamento: "Resolução CFESS nº 557/2009",
  },
  {
    id: "ss-005",
    pool: "servico-social",
    assunto: "Congresso da Virada",
    enunciado:
      "O III Congresso Brasileiro de Assistentes Sociais, de 1979, conhecido como 'Congresso da Virada', é considerado marco da ruptura da categoria com o conservadorismo.",
    gabarito: "C",
    comentario: "O III CBAS (São Paulo, 1979) marcou a virada política da categoria, alinhando-a às lutas dos trabalhadores.",
  },
  {
    id: "ss-006",
    pool: "servico-social",
    assunto: "Sigilo profissional",
    enunciado:
      "O sigilo profissional do assistente social é absoluto, não podendo ser quebrado em nenhuma hipótese.",
    gabarito: "E",
    comentario:
      "O Código de Ética admite a quebra do sigilo em situações cuja gravidade possa trazer prejuízo aos interesses do usuário, de terceiros e da coletividade, restringindo-se a revelação ao estritamente necessário (art. 18).",
    fundamento: "Resolução CFESS nº 273/1993, art. 18",
  },
  {
    id: "ss-007",
    pool: "servico-social",
    assunto: "Questão social",
    enunciado:
      "Na tradição crítica do Serviço Social, a questão social é compreendida como o conjunto das expressões das desigualdades da sociedade capitalista, tendo raiz na contradição entre a produção social da riqueza e sua apropriação privada.",
    gabarito: "C",
    comentario: "Concepção difundida por Marilda Iamamoto, base do projeto ético-político profissional.",
  },
]
