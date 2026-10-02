import type { Questao } from "../types"

/** Plano de benefícios (Lei nº 8.213/1991), EC nº 103/2019, LC nº 142/2013 e RPPS. */
export const QUESTOES_BENEFICIOS: Questao[] = [
  {
    id: "ben-001",
    pool: "beneficios",
    assunto: "Carência",
    enunciado:
      "O período de carência exigido para a concessão do auxílio por incapacidade temporária é, em regra, de dez contribuições mensais.",
    gabarito: "E",
    comentario:
      "A carência do auxílio por incapacidade temporária e da aposentadoria por incapacidade permanente é de 12 contribuições (art. 25, I). Dez contribuições é o número que o art. 25, III, previa para o salário-maternidade da contribuinte individual, da segurada especial e da facultativa — exigência declarada inconstitucional pelo STF nas ADIs 2110 e 2111 (2024).",
    fundamento: "Lei nº 8.213/1991, art. 25, I",
  },
  {
    id: "ben-002",
    pool: "beneficios",
    assunto: "Carência",
    enunciado: "A concessão do auxílio-reclusão independe de carência.",
    gabarito: "E",
    comentario: "Desde a Lei nº 13.846/2019, o auxílio-reclusão exige carência de 24 contribuições mensais (art. 25, IV).",
    fundamento: "Lei nº 8.213/1991, art. 25, IV",
  },
  {
    id: "ben-003",
    pool: "beneficios",
    assunto: "Carência",
    enunciado: "Independem de carência a pensão por morte, o salário-família e o auxílio-acidente.",
    gabarito: "C",
    comentario:
      "Art. 26, I, da Lei nº 8.213/1991. Também independem: serviço social; reabilitação profissional; benefícios por incapacidade decorrentes de acidente de qualquer natureza, doença profissional/do trabalho ou doenças listadas; e o salário-maternidade — a lei já dispensava a carência para empregada, doméstica e avulsa (art. 26, VI), e o STF (ADIs 2110 e 2111, 2024) declarou inconstitucional a carência exigida das demais seguradas.",
    fundamento: "Lei nº 8.213/1991, art. 26; STF, ADIs 2110 e 2111",
  },
  {
    id: "ben-004",
    pool: "beneficios",
    assunto: "Carência — aposentadorias programáveis",
    enunciado:
      "A carência para as aposentadorias programáveis do RGPS é de cento e vinte contribuições mensais.",
    gabarito: "E",
    comentario:
      "São 180 contribuições mensais (art. 25, II, da Lei nº 8.213/1991) — 15 anos.",
    fundamento: "Lei nº 8.213/1991, art. 25, II",
  },
  {
    id: "ben-005",
    pool: "beneficios",
    assunto: "Perda da qualidade de segurado e carência",
    enunciado:
      "Havendo perda da qualidade de segurado, para a concessão de auxílio por incapacidade temporária, o segurado deverá contar, a partir da nova filiação, com metade do período de carência exigido.",
    gabarito: "C",
    comentario:
      "Art. 27-A da Lei nº 8.213/1991 (Lei nº 13.846/2019): metade da carência para auxílio por incapacidade temporária (6 contribuições), aposentadoria por incapacidade permanente e auxílio-reclusão (12). O texto ainda menciona o salário-maternidade, mas a carência desse benefício foi afastada pelo STF nas ADIs 2110 e 2111 (2024).",
    fundamento: "Lei nº 8.213/1991, art. 27-A",
  },
  {
    id: "ben-006",
    pool: "beneficios",
    assunto: "Período de graça",
    enunciado:
      "Mantém a qualidade de segurado, sem limite de prazo, quem está em gozo de qualquer benefício, inclusive o auxílio-acidente.",
    gabarito: "E",
    comentario:
      "A Lei nº 13.846/2019 incluiu a ressalva: mantém a qualidade sem limite de prazo quem está em gozo de benefício, EXCETO auxílio-acidente.",
    fundamento: "Lei nº 8.213/1991, art. 15, I",
  },
  {
    id: "ben-007",
    pool: "beneficios",
    assunto: "Período de graça",
    enunciado:
      "O segurado facultativo mantém a qualidade de segurado até doze meses após a cessação das contribuições.",
    gabarito: "E",
    comentario:
      "O facultativo mantém a qualidade por até SEIS meses (art. 15, VI). Doze meses é a regra do segurado obrigatório que deixa de exercer atividade remunerada.",
    fundamento: "Lei nº 8.213/1991, art. 15, VI",
  },
  {
    id: "ben-008",
    pool: "beneficios",
    assunto: "Período de graça — prorrogações",
    enunciado:
      "O período de graça de doze meses do segurado obrigatório pode ser prorrogado para até 24 meses se ele já tiver pago mais de 120 contribuições sem interrupção que acarrete perda da qualidade, e acrescido de mais 12 meses se comprovar situação de desemprego pelo registro no órgão próprio.",
    gabarito: "C",
    comentario:
      "§§ 1º e 2º do art. 15 da Lei nº 8.213/1991 — o período pode chegar a 36 meses. Obs.: a jurisprudência (STJ, TNU) admite comprovar o desemprego por outros meios além do registro no órgão do Ministério do Trabalho.",
    fundamento: "Lei nº 8.213/1991, art. 15, §§ 1º e 2º",
  },
  {
    id: "ben-009",
    pool: "beneficios",
    assunto: "Período de graça",
    enunciado:
      "O segurado incorporado às Forças Armadas para prestar serviço militar mantém a qualidade de segurado até doze meses após o licenciamento.",
    gabarito: "E",
    comentario: "São até TRÊS meses após o licenciamento (art. 15, V, da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, art. 15, V",
  },
  {
    id: "ben-010",
    pool: "beneficios",
    assunto: "Dependentes",
    enunciado:
      "São dependentes de primeira classe o cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 anos ou inválido ou que tenha deficiência intelectual ou mental ou deficiência grave.",
    gabarito: "C",
    comentario:
      "Classe I (art. 16, I). Classe II: pais. Classe III: irmão não emancipado menor de 21 anos ou inválido/com deficiência. A dependência econômica da classe I é presumida; as demais devem comprová-la.",
    fundamento: "Lei nº 8.213/1991, art. 16",
  },
  {
    id: "ben-011",
    pool: "beneficios",
    assunto: "Dependentes",
    enunciado:
      "A existência de dependente de qualquer das classes exclui do direito às prestações os das classes seguintes.",
    gabarito: "C",
    comentario: "Art. 16, § 1º. Havendo cônjuge ou filho (classe I), os pais (classe II) não recebem pensão.",
    fundamento: "Lei nº 8.213/1991, art. 16, § 1º",
  },
  {
    id: "ben-012",
    pool: "beneficios",
    assunto: "Dependentes — equiparados",
    enunciado:
      "O enteado e o menor tutelado equiparam-se a filho mediante declaração do segurado e desde que comprovada a dependência econômica.",
    gabarito: "C",
    comentario: "Art. 16, § 2º, da Lei nº 8.213/1991 e art. 23, § 6º, da EC nº 103/2019.",
    fundamento: "Lei nº 8.213/1991, art. 16, § 2º",
  },
  {
    id: "ben-013",
    pool: "beneficios",
    assunto: "Pensão por morte — valor",
    enunciado:
      "Segundo a EC nº 103/2019, a pensão por morte corresponde a uma cota familiar de 60% do valor da aposentadoria do segurado, acrescida de cotas de 10 pontos percentuais por dependente, até o máximo de 100%.",
    gabarito: "E",
    comentario:
      "A cota familiar é de 50% (não 60%), acrescida de 10 p.p. por dependente, até 100% (art. 23 da EC nº 103/2019). As cotas não se revertem aos demais dependentes. Havendo dependente inválido ou com deficiência grave, a pensão é de 100% até o teto.",
    fundamento: "EC nº 103/2019, art. 23",
  },
  {
    id: "ben-014",
    pool: "beneficios",
    assunto: "Pensão por morte — data de início",
    enunciado:
      "A pensão por morte será devida a contar da data do óbito quando requerida em até 90 dias após o óbito, para os filhos menores de 16 anos, ou em até 180 dias, para os demais dependentes.",
    gabarito: "E",
    comentario:
      "Os prazos estão invertidos: 180 dias para os filhos menores de 16 anos e 90 dias para os demais dependentes (art. 74, I). Depois disso, a pensão é devida a partir do requerimento.",
    fundamento: "Lei nº 8.213/1991, art. 74",
  },
  {
    id: "ben-015",
    pool: "beneficios",
    assunto: "Pensão por morte — duração",
    enunciado:
      "A pensão por morte do cônjuge ou companheiro dura apenas quatro meses se o óbito ocorrer sem que o segurado tenha vertido 18 contribuições mensais ou se o casamento ou a união estável tiver sido iniciado em menos de dois anos antes do óbito, ressalvados, entre outros, os casos de óbito decorrente de acidente.",
    gabarito: "C",
    comentario:
      "Art. 77, § 2º, V, b, da Lei nº 8.213/1991. A regra dos 4 meses não se aplica se o óbito decorrer de acidente de qualquer natureza ou de doença profissional ou do trabalho (§ 2º-A), nem ao cônjuge/companheiro inválido ou com deficiência. Cumpridos os requisitos, a duração varia conforme a idade do beneficiário na data do óbito (alínea c).",
    fundamento: "Lei nº 8.213/1991, art. 77, §§ 2º, V, e 2º-A",
  },
  {
    id: "ben-016",
    pool: "beneficios",
    assunto: "Aposentadoria programada",
    enunciado:
      "Pela regra permanente da EC nº 103/2019, a aposentadoria programada do trabalhador urbano no RGPS exige 62 anos de idade, se mulher, e 65 anos, se homem, observado tempo mínimo de contribuição.",
    gabarito: "C",
    comentario:
      "Art. 201, § 7º, I, da CF c/c art. 19 da EC nº 103/2019: 62/65 anos, com 15 anos de contribuição (mulher) e 20 anos (homem que se filiar após a reforma; para o homem já filiado, 15 anos — art. 18). Rurais, professores e pessoas com deficiência têm regras próprias.",
    fundamento: "CF/1988, art. 201, § 7º, I; EC nº 103/2019, art. 19",
  },
  {
    id: "ben-017",
    pool: "beneficios",
    assunto: "Aposentadoria do trabalhador rural",
    enunciado:
      "A EC nº 103/2019 elevou a idade mínima da aposentadoria do trabalhador rural e do segurado especial para 62 anos (mulher) e 65 anos (homem).",
    gabarito: "E",
    comentario:
      "Para rurais e quem trabalha em regime de economia familiar (inclusive garimpeiro e pescador artesanal), a idade permaneceu 55 anos (mulher) e 60 anos (homem).",
    fundamento: "CF/1988, art. 201, § 7º, II",
  },
  {
    id: "ben-018",
    pool: "beneficios",
    assunto: "Cálculo — EC nº 103/2019",
    enunciado:
      "Após a EC nº 103/2019, o salário de benefício corresponde à média aritmética simples de 100% dos salários de contribuição desde julho de 1994 ou desde o início da contribuição, se posterior.",
    gabarito: "C",
    comentario:
      "Art. 26 da EC nº 103/2019 — acabou o descarte automático dos 20% menores salários da regra anterior. O § 6º permite excluir contribuições que reduzam a média, desde que mantido o tempo mínimo exigido, mas o tempo excluído não é aproveitado para nenhum outro fim.",
    fundamento: "EC nº 103/2019, art. 26",
  },
  {
    id: "ben-019",
    pool: "beneficios",
    assunto: "Cálculo — EC nº 103/2019",
    enunciado:
      "O valor da aposentadoria programada corresponde a 60% da média, com acréscimo de 2 pontos percentuais para cada ano de contribuição que exceder 15 anos, tanto para homens quanto para mulheres.",
    gabarito: "E",
    comentario:
      "O acréscimo de 2 p.p. conta a partir de 20 anos de contribuição para HOMENS e de 15 anos para MULHERES (art. 26, §§ 2º e 5º, da EC nº 103/2019).",
    fundamento: "EC nº 103/2019, art. 26, §§ 2º e 5º",
  },
  {
    id: "ben-020",
    pool: "beneficios",
    assunto: "Aposentadoria por incapacidade permanente",
    enunciado:
      "A aposentadoria por incapacidade permanente decorrente de acidente do trabalho, doença profissional ou do trabalho corresponde a 100% da média dos salários de contribuição.",
    gabarito: "C",
    comentario:
      "Art. 26, § 3º, II, da EC nº 103/2019. Nos demais casos aplica-se a regra 60% + 2 p.p. por ano excedente — regra que o STF considerou constitucional no Tema 1300 da repercussão geral.",
    fundamento: "EC nº 103/2019, art. 26, § 3º, II",
  },
  {
    id: "ben-021",
    pool: "beneficios",
    assunto: "Adicional de 25%",
    enunciado:
      "O valor da aposentadoria por incapacidade permanente do segurado que necessitar da assistência permanente de outra pessoa será acrescido de 25%, ainda que o valor ultrapasse o limite máximo legal.",
    gabarito: "C",
    comentario: "Art. 45 da Lei nº 8.213/1991 — o acréscimo é devido mesmo que ultrapasse o teto e cessa com a morte do aposentado (não se incorpora à pensão).",
    fundamento: "Lei nº 8.213/1991, art. 45",
  },
  {
    id: "ben-022",
    pool: "beneficios",
    assunto: "Auxílio por incapacidade temporária",
    enunciado:
      "No caso do segurado empregado, o auxílio por incapacidade temporária é devido a contar do 31º dia do afastamento, cabendo à empresa pagar o salário integral nos primeiros 30 dias.",
    gabarito: "E",
    comentario:
      "A empresa paga os primeiros 15 dias e o benefício é devido a partir do 16º dia de afastamento (art. 60, caput e § 3º, da Lei nº 8.213/1991). O prazo de 30 dias chegou a ser previsto na MP nº 664/2014, mas não foi mantido na lei de conversão.",
    fundamento: "Lei nº 8.213/1991, art. 60",
  },
  {
    id: "ben-023",
    pool: "beneficios",
    assunto: "Auxílio por incapacidade temporária — valor",
    enunciado:
      "A renda mensal do auxílio por incapacidade temporária corresponde a 100% do salário de benefício.",
    gabarito: "E",
    comentario:
      "Corresponde a 91% do salário de benefício, e não pode exceder a média dos últimos 12 salários de contribuição (arts. 61 e 29, § 10, da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, arts. 29, § 10, e 61",
  },
  {
    id: "ben-024",
    pool: "beneficios",
    assunto: "Auxílio-acidente",
    enunciado:
      "O auxílio-acidente tem natureza indenizatória, corresponde a 50% do salário de benefício e pode ter valor inferior ao salário mínimo.",
    gabarito: "C",
    comentario:
      "Como não substitui a remuneração do segurado, pode ser inferior ao salário mínimo (art. 86 da Lei nº 8.213/1991). É devido após a consolidação das lesões que reduzam a capacidade para o trabalho habitual.",
    fundamento: "Lei nº 8.213/1991, art. 86",
  },
  {
    id: "ben-025",
    pool: "beneficios",
    assunto: "Auxílio-acidente — beneficiários",
    enunciado: "O contribuinte individual faz jus ao auxílio-acidente.",
    gabarito: "E",
    comentario:
      "O auxílio-acidente é devido ao empregado, ao empregado doméstico (desde a LC nº 150/2015), ao trabalhador avulso e ao segurado especial. CI e facultativo não têm direito.",
    fundamento: "Lei nº 8.213/1991, art. 18, § 1º",
  },
  {
    id: "ben-026",
    pool: "beneficios",
    assunto: "Salário-maternidade",
    enunciado:
      "O salário-maternidade pago pelo RGPS tem duração de 180 dias para todas as seguradas.",
    gabarito: "E",
    comentario:
      "Em regra, o salário-maternidade do RGPS dura 120 dias, com início entre 28 dias antes do parto e a data do parto (art. 71). Há situações específicas de extensão — ex.: prorrogação de 60 dias no nascimento de criança com deficiência permanente decorrente de síndrome congênita associada ao vírus Zika (§ 2º) e pagamento durante a internação superior a duas semanas por complicações do parto, mais 120 dias após a alta (§ 3º, Lei nº 15.222/2025). A prorrogação de 60 dias do Programa Empresa Cidadã é custeada pela empresa, não pelo RGPS.",
    fundamento: "Lei nº 8.213/1991, art. 71",
  },
  {
    id: "ben-027",
    pool: "beneficios",
    assunto: "Salário-maternidade — adoção",
    enunciado:
      "Ao segurado ou segurada que adotar ou obtiver guarda judicial para fins de adoção de criança é devido salário-maternidade por 120 dias, independentemente da idade da criança adotada.",
    gabarito: "C",
    comentario:
      "Art. 71-A da Lei nº 8.213/1991 (Lei nº 12.873/2013). Antes, o prazo variava conforme a idade da criança; hoje é de 120 dias para qualquer criança (até 12 anos incompletos, conceito do ECA). O benefício também é devido ao segurado do sexo masculino e é pago diretamente pela Previdência.",
    fundamento: "Lei nº 8.213/1991, art. 71-A",
  },
  {
    id: "ben-028",
    pool: "beneficios",
    assunto: "Salário-família",
    enunciado:
      "O salário-família é devido ao segurado de baixa renda na proporção do número de filhos ou equiparados de até 18 anos de idade ou inválidos de qualquer idade.",
    gabarito: "E",
    comentario:
      "O limite é de até 14 anos de idade (ou inválido de qualquer idade), conforme art. 66 da Lei nº 8.213/1991. A CF (art. 7º, XII) apenas prevê o salário-família para o dependente do trabalhador de baixa renda, sem fixar idade. É devido ao empregado (inclusive doméstico) e ao avulso, não ao contribuinte individual.",
    fundamento: "Lei nº 8.213/1991, arts. 65 e 66",
  },
  {
    id: "ben-029",
    pool: "beneficios",
    assunto: "Auxílio-reclusão",
    enunciado:
      "O auxílio-reclusão é devido aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado ou semiaberto.",
    gabarito: "E",
    comentario:
      "Após a Lei nº 13.846/2019, o benefício é devido apenas no regime FECHADO (art. 80 da Lei nº 8.213/1991). O valor não pode exceder um salário mínimo (EC nº 103/2019, art. 27, § 1º).",
    fundamento: "Lei nº 8.213/1991, art. 80",
  },
  {
    id: "ben-030",
    pool: "beneficios",
    assunto: "Acumulação de benefícios",
    enunciado:
      "De acordo com a redação vigente da Lei nº 8.213/1991, é permitido o recebimento conjunto de qualquer aposentadoria com o auxílio-acidente.",
    gabarito: "E",
    comentario:
      "Desde a Lei nº 9.528/1997, é vedada a acumulação do auxílio-acidente com qualquer aposentadoria: ele é devido até a véspera do início da aposentadoria (art. 86, §§ 1º a 3º), e seu valor passa a integrar o salário de contribuição para o cálculo da aposentadoria (art. 31). Exceção por direito adquirido: Súmula 507 do STJ (lesão e aposentadoria anteriores a 11/11/1997).",
    fundamento: "Lei nº 8.213/1991, arts. 31 e 86, §§ 1º a 3º; STJ, Súmula 507",
  },
  {
    id: "ben-031",
    pool: "beneficios",
    assunto: "Acumulação de benefícios",
    enunciado:
      "No âmbito do RGPS, é vedado o recebimento conjunto de mais de uma pensão deixada por cônjuge ou companheiro, ressalvado o direito de opção pela mais vantajosa.",
    gabarito: "C",
    comentario:
      "Art. 124, VI, da Lei nº 8.213/1991, reforçado pelo art. 24, caput, da EC nº 103/2019 (vedação no mesmo regime). Pensões de regimes diferentes (ex.: RGPS + RPPS) podem ser acumuladas, com redução por faixas do benefício menos vantajoso.",
    fundamento: "Lei nº 8.213/1991, art. 124, VI; EC nº 103/2019, art. 24",
  },
  {
    id: "ben-032",
    pool: "beneficios",
    assunto: "Acumulação — EC nº 103/2019",
    enunciado:
      "A EC nº 103/2019 proibiu a acumulação de pensão por morte com aposentadoria, devendo o beneficiário optar pelo benefício mais vantajoso.",
    gabarito: "E",
    comentario:
      "A acumulação é permitida: recebe-se 100% do benefício mais vantajoso e parte do outro, calculada por faixas — 100% até 1 salário mínimo, 60% do que exceder 1 até 2 SM, 40% de 2 a 3 SM, 20% de 3 a 4 SM e 10% acima de 4 SM.",
    fundamento: "EC nº 103/2019, art. 24, §§ 1º e 2º",
  },
  {
    id: "ben-033",
    pool: "beneficios",
    assunto: "Reajustamento",
    enunciado:
      "Os benefícios do RGPS são reajustados anualmente com base no IPCA, índice oficial de inflação utilizado nas metas do Banco Central.",
    gabarito: "E",
    comentario:
      "O índice legal é o INPC, na mesma data do reajuste do salário mínimo, para preservar o valor real (art. 41-A da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, art. 41-A",
  },
  {
    id: "ben-034",
    pool: "beneficios",
    assunto: "Piso dos benefícios",
    enunciado:
      "Nenhum benefício do RGPS que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior ao salário mínimo.",
    gabarito: "C",
    comentario: "Art. 201, § 2º, da CF. Por isso o auxílio-acidente (que não substitui renda) pode ser inferior.",
    fundamento: "CF/1988, art. 201, § 2º",
  },
  {
    id: "ben-035",
    pool: "beneficios",
    assunto: "Aposentadoria especial",
    enunciado:
      "A EC nº 103/2019 vedou a conversão de tempo especial em tempo comum em relação ao trabalho exercido após a data de sua entrada em vigor.",
    gabarito: "C",
    comentario:
      "Art. 25, § 2º, da EC nº 103/2019: a conversão continua possível apenas para o tempo especial cumprido até 13/11/2019 (vedada também pelo art. 201, § 14, da CF a contagem de tempo fictício). Atenção à jurisprudência: no julgamento da ADI 6309 (junho/2026), o STF manteve essa vedação e o novo cálculo (60% + 2 p.p.), mas declarou inconstitucional a idade mínima de 55/58/60 anos que o art. 19, § 1º, I, havia criado para a aposentadoria especial.",
    fundamento: "EC nº 103/2019, art. 25, § 2º; STF, ADI 6309",
  },
  {
    id: "ben-036",
    pool: "beneficios",
    assunto: "Aposentadoria do professor",
    enunciado:
      "O professor filiado ao RGPS após a EC nº 103/2019 que comprove 25 anos de efetivo exercício das funções de magistério na educação infantil e no ensino fundamental e médio poderá aposentar-se aos 57 anos, se mulher, e aos 60 anos, se homem.",
    gabarito: "C",
    comentario:
      "Art. 19, § 1º, II, da EC nº 103/2019: 25 anos de magistério para ambos os sexos, com 57 (mulher) ou 60 anos (homem). Quem já era filiado antes da reforma dispõe de regras de transição próprias (arts. 15, § 3º, 16, § 2º, e 20, § 1º). O magistério no ensino superior não dá direito à regra especial.",
    fundamento: "EC nº 103/2019, art. 19, § 1º, II",
  },
  {
    id: "ben-037",
    pool: "beneficios",
    assunto: "Regras de transição — pedágio de 100%",
    enunciado:
      "Na regra de transição do pedágio de 100% da EC nº 103/2019, exigem-se 57 anos de idade (mulher) ou 60 anos (homem), 30 ou 35 anos de contribuição e período adicional equivalente ao tempo que faltava, na data de entrada em vigor da emenda, para atingir esse tempo de contribuição.",
    gabarito: "C",
    comentario: "Art. 20 da EC nº 103/2019. O valor corresponde a 100% da média.",
    fundamento: "EC nº 103/2019, art. 20",
  },
  {
    id: "ben-038",
    pool: "beneficios",
    assunto: "LC nº 142/2013",
    enunciado:
      "A aposentadoria por tempo de contribuição da pessoa com deficiência grave exige 30 anos de contribuição, se homem, e 25 anos, se mulher.",
    gabarito: "E",
    comentario:
      "Deficiência grave: 25 anos (homem) e 20 anos (mulher). Moderada: 29/24. Leve: 33/28 (LC nº 142/2013, art. 3º).",
    fundamento: "LC nº 142/2013, art. 3º",
  },
  {
    id: "ben-039",
    pool: "beneficios",
    assunto: "LC nº 142/2013",
    enunciado:
      "A aposentadoria por idade da pessoa com deficiência é concedida aos 60 anos (homem) e 55 anos (mulher), independentemente do grau de deficiência, desde que cumpridos 15 anos de contribuição e comprovada a deficiência durante igual período.",
    gabarito: "C",
    comentario: "LC nº 142/2013, art. 3º, IV.",
    fundamento: "LC nº 142/2013, art. 3º, IV",
  },
  {
    id: "ben-040",
    pool: "beneficios",
    assunto: "Contagem recíproca",
    enunciado:
      "Para fins de aposentadoria, é assegurada a contagem recíproca do tempo de contribuição entre o RGPS e os regimes próprios, e destes entre si, observada a compensação financeira.",
    gabarito: "C",
    comentario: "Art. 201, § 9º, da CF. A compensação financeira é regulada pela Lei nº 9.796/1999 e pelo Decreto nº 10.188/2019.",
    fundamento: "CF/1988, art. 201, § 9º",
  },
  {
    id: "ben-041",
    pool: "beneficios",
    assunto: "Contagem recíproca",
    enunciado:
      "Na contagem recíproca, admite-se a contagem de tempo de serviço público simultaneamente com o de atividade privada, quando concomitantes.",
    gabarito: "E",
    comentario:
      "É vedada a contagem de tempo de serviço público com o de atividade privada quando concomitantes, bem como a contagem em dobro ou em outras condições especiais (art. 96 da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, art. 96",
  },
  {
    id: "ben-042",
    pool: "beneficios",
    assunto: "Serviço social",
    enunciado:
      "Compete ao Serviço Social do INSS esclarecer junto aos beneficiários seus direitos sociais e os meios de exercê-los, dando prioridade aos segurados em benefício por incapacidade temporária e atenção especial aos aposentados e pensionistas.",
    gabarito: "C",
    comentario: "Art. 88 e § 1º da Lei nº 8.213/1991.",
    fundamento: "Lei nº 8.213/1991, art. 88",
  },
  {
    id: "ben-043",
    pool: "beneficios",
    assunto: "Reabilitação profissional — cotas",
    enunciado:
      "A empresa com 100 ou mais empregados está obrigada a preencher de 2% a 5% dos seus cargos com beneficiários reabilitados ou pessoas com deficiência habilitadas.",
    gabarito: "C",
    comentario: "Art. 93 da Lei nº 8.213/1991: até 200 empregados, 2%; 201 a 500, 3%; 501 a 1.000, 4%; mais de 1.000, 5%.",
    fundamento: "Lei nº 8.213/1991, art. 93",
  },
  {
    id: "ben-044",
    pool: "beneficios",
    assunto: "Reabilitação profissional",
    enunciado: "A reabilitação profissional é prestação que depende de carência de doze contribuições mensais.",
    gabarito: "E",
    comentario:
      "Serviço social e reabilitação profissional independem de carência (art. 26, IV e V, da Lei nº 8.213/1991). Doze contribuições é a carência do auxílio por incapacidade temporária e da aposentadoria por incapacidade permanente (art. 25, I).",
    fundamento: "Lei nº 8.213/1991, art. 26, IV e V",
  },
  {
    id: "ben-045",
    pool: "beneficios",
    assunto: "Espécies de prestações",
    enunciado:
      "O auxílio-acidente e a pensão por morte são prestações devidas exclusivamente aos dependentes do segurado.",
    gabarito: "E",
    comentario:
      "O auxílio-acidente é devido ao próprio SEGURADO. Aos dependentes cabem a pensão por morte e o auxílio-reclusão; a ambos, o serviço social e a reabilitação profissional (art. 18 da Lei nº 8.213/1991).",
    fundamento: "Lei nº 8.213/1991, art. 18",
  },
  {
    id: "ben-046",
    pool: "beneficios",
    assunto: "União estável — prova",
    enunciado:
      "A comprovação de união estável para fins de pensão por morte pode ser feita exclusivamente por prova testemunhal.",
    gabarito: "E",
    comentario:
      "Exige-se início de prova material contemporânea dos fatos, produzido em período não superior a 24 meses anterior ao óbito; não se admite prova exclusivamente testemunhal, salvo força maior ou caso fortuito.",
    fundamento: "Lei nº 8.213/1991, art. 16, § 5º",
  },
  {
    id: "ben-047",
    pool: "beneficios",
    assunto: "Aposentadoria e retorno ao trabalho",
    enunciado:
      "O aposentado pelo RGPS que permanecer em atividade sujeita a esse regime é segurado obrigatório em relação a essa atividade.",
    gabarito: "C",
    comentario:
      "Art. 11, § 3º, da Lei nº 8.213/1991. Ele contribui, mas só faz jus a salário-família e reabilitação profissional, quando empregado (art. 18, § 2º).",
    fundamento: "Lei nº 8.213/1991, arts. 11, § 3º, e 18, § 2º",
  },
  {
    id: "ben-048",
    pool: "beneficios",
    assunto: "Aposentadoria por incapacidade permanente — retorno",
    enunciado:
      "O aposentado por incapacidade permanente que retornar voluntariamente à atividade terá sua aposentadoria automaticamente cancelada a partir da data do retorno.",
    gabarito: "C",
    comentario: "Art. 46 da Lei nº 8.213/1991.",
    fundamento: "Lei nº 8.213/1991, art. 46",
  },
]
