import type { Aula } from "./types"

/**
 * Aulas de Assistência Social, legislações especiais e políticas sociais.
 * Pools "loas" (Técnico: tec-esp-15, 16, 17; Analista: ana-as-1, ana-as-4) e
 * "politicas-sociais" (Analista: ana-as-2, 3, 5, 6, 8, 9, 10, 11; Técnico: tec-esp-25).
 */
export const AULAS_ASSISTENCIA: Aula[] = [
  {
    id: "as-loas",
    titulo: "LOAS: conceito, objetivos, princípios, diretrizes, organização e financiamento",
    pool: "loas",
    topicos: ["ana-as-1", "tec-esp-17"],
    texto: [
      "A Lei Orgânica da Assistência Social (LOAS, Lei nº 8.742/1993) regulamenta os arts. 203 e 204 da Constituição. Logo no art. 1º, ela define a assistência social como direito do cidadão e dever do Estado, uma política de seguridade social NÃO contributiva, que provê os mínimos sociais por meio de ações integradas do poder público e da sociedade para atender às necessidades básicas. Quem precisa recebe, independentemente de ter contribuído.",
      "Os objetivos estão no art. 2º e formam um tripé: (1) proteção social — garantia da vida, redução de danos e prevenção de riscos, com destaque para a proteção à família, à maternidade, à infância, à adolescência e à velhice, o amparo a crianças e adolescentes carentes, a integração ao mercado de trabalho, a habilitação e reabilitação da pessoa com deficiência e a garantia de um salário mínimo ao idoso e à pessoa com deficiência sem meios de subsistência (o BPC); (2) vigilância socioassistencial — análise territorial das vulnerabilidades e da capacidade protetiva das famílias; (3) defesa de direitos.",
      "Os princípios (art. 4º) giram em torno da ideia de que a necessidade social vem antes da lógica do lucro: supremacia do atendimento às necessidades sociais sobre a rentabilidade econômica; universalização dos direitos sociais; respeito à dignidade e à autonomia do cidadão, com proibição de qualquer comprovação vexatória de necessidade; igualdade de acesso, com equivalência entre populações urbanas e rurais; e ampla divulgação dos benefícios, serviços e critérios de concessão.",
      "As diretrizes (art. 5º) dizem COMO a política se organiza: descentralização político-administrativa para Estados, DF e Municípios, com comando único em cada esfera; participação da população, por organizações representativas, na formulação e no controle; e primazia da responsabilidade do Estado na condução da política. A gestão se dá pelo Sistema Único de Assistência Social (SUAS), sistema descentralizado e participativo que tem a família como foco e o território como base de organização.",
      "Na repartição de competências, cabe à União responder pela concessão e manutenção do BPC e cofinanciar a política; Estados, DF e Municípios custeiam os benefícios eventuais (auxílios por natalidade e funeral, situações de vulnerabilidade temporária e calamidade). As instâncias deliberativas são os Conselhos de Assistência Social, de composição paritária entre governo e sociedade civil; o CNAS tem 18 membros (9 governamentais e 9 da sociedade civil), com mandato de 2 anos e uma recondução.",
      "O financiamento (art. 28) vem de recursos da União, Estados, DF e Municípios, das contribuições sociais do art. 195 da CF e do Fundo Nacional de Assistência Social (FNAS). Para receber repasses federais, o ente precisa ter efetivamente instituídos e em funcionamento o tripé Conselho + Fundo + Plano de Assistência Social (art. 30), além de comprovar recursos próprios alocados no seu fundo.",
    ],
    pontosChave: [
      "Assistência social: direito do cidadão, dever do Estado, política de seguridade NÃO contributiva, que provê os mínimos sociais (art. 1º).",
      "Objetivos (art. 2º): proteção social, vigilância socioassistencial e defesa de direitos.",
      "Princípio marcante: vedação de comprovação vexatória de necessidade (art. 4º, III).",
      "Diretrizes (art. 5º): descentralização com comando único em cada esfera; participação popular; primazia da responsabilidade do Estado.",
      "SUAS: foco na família, base no território; integrado pelos entes federativos, conselhos e entidades de assistência social.",
      "Conselhos de assistência social: deliberativos, permanentes e paritários; CNAS com 18 membros (9 + 9), mandato de 2 anos, uma recondução.",
      "Benefícios eventuais (art. 22): provisões suplementares e provisórias (nascimento, morte, vulnerabilidade temporária, calamidade), definidos e custeados por Estados, DF e Municípios.",
      "Condição para repasses (art. 30): Conselho paritário + Fundo + Plano de Assistência Social.",
      "Entidades de assistência social: sem fins lucrativos; dependem de inscrição prévia no Conselho Municipal (ou do DF).",
    ],
    exemplos: [
      {
        titulo: "Comprovação vexatória",
        texto:
          "Um município exige que a família, para receber cesta básica, se apresente publicamente em fila identificada como 'carentes' e assine declaração de pobreza diante de outros moradores. A conduta viola o princípio do art. 4º, III, da LOAS, que garante a dignidade do cidadão e veda qualquer comprovação vexatória de necessidade.",
      },
      {
        titulo: "Repasse bloqueado",
        texto:
          "O Município X criou por lei o Conselho Municipal de Assistência Social, mas nunca instalou o Fundo Municipal nem aprovou o Plano. Ele não cumpre a condição do art. 30 da LOAS e, por isso, não pode receber os repasses federais destinados aos serviços socioassistenciais até regularizar o tripé Conselho + Fundo + Plano.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Estrutura básica da LOAS",
        grupos: [
          { nome: "Objetivos (art. 2º)", itens: ["Proteção social", "Vigilância socioassistencial", "Defesa de direitos"] },
          {
            nome: "Princípios (art. 4º)",
            itens: [
              "Necessidades sociais acima da rentabilidade econômica",
              "Universalização dos direitos sociais",
              "Dignidade e autonomia; sem comprovação vexatória",
              "Igualdade de acesso (urbano = rural)",
              "Divulgação ampla de benefícios e critérios",
            ],
          },
          {
            nome: "Diretrizes (art. 5º)",
            itens: ["Descentralização + comando único", "Participação da população", "Primazia da responsabilidade do Estado"],
          },
          { nome: "Prestações", itens: ["BPC (art. 20)", "Benefícios eventuais (art. 22)", "Serviços (art. 23)", "Programas (art. 24)", "Projetos de enfrentamento da pobreza (art. 25)"] },
        ],
      },
    ],
    pegadinhas: [
      "Chamar a assistência social de política contributiva ou exigir qualidade de segurado: ela é não contributiva e independe de contribuição (CF, art. 203).",
      "Trocar princípios por diretrizes: descentralização, participação popular e primazia do Estado são DIRETRIZES (art. 5º), não princípios.",
      "Dizer que os benefícios eventuais são pagos pela União ou pelo INSS: são definidos e custeados por Estados, DF e Municípios.",
      "Afirmar que o CNAS é composto majoritariamente por representantes do governo: a composição é paritária (9 governamentais e 9 da sociedade civil).",
      "Trocar a ordem do tripé de repasse: a LOAS exige Conselho, Fundo e Plano — não basta a existência formal de um só deles.",
    ],
    fundamentos: [
      "CF/1988, arts. 203 e 204",
      "Lei nº 8.742/1993, arts. 1º a 6º-F, 12 a 19, 22 a 25, 28 e 30",
    ],
  },
  {
    id: "as-bpc",
    titulo: "BPC na LOAS: quem tem direito, conceito de família e cálculo da renda",
    pool: "loas",
    topicos: ["tec-esp-17", "ana-as-1", "ana-as-4"],
    texto: [
      "O Benefício de Prestação Continuada (BPC) é a garantia de UM salário mínimo mensal a dois públicos: a pessoa idosa com 65 anos ou mais e a pessoa com deficiência de qualquer idade, desde que comprovem não ter meios de se manter nem de ser mantidas pela família (CF, art. 203, V; LOAS, art. 20). É benefício assistencial: não exige contribuição nem qualidade de segurado. O INSS apenas operacionaliza; a coordenação é do ministério responsável pela assistência social.",
      "Pessoa com deficiência, para o BPC, é quem tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, em interação com barreiras, pode obstruir sua participação plena na sociedade em igualdade com os demais. 'Longo prazo' significa efeitos por no mínimo 2 anos. A deficiência é verificada por avaliação médica (perícia médica) e avaliação social (assistentes sociais do INSS), num modelo biopsicossocial.",
      "O critério de renda é objetivo: renda familiar mensal per capita IGUAL OU INFERIOR a 1/4 do salário mínimo (art. 20, § 3º). A lei permite que o regulamento amplie esse limite para até 1/2 salário mínimo (art. 20, § 11-A), em escalas graduais, considerando o grau da deficiência, a dependência de terceiros e o comprometimento do orçamento com gastos de saúde não cobertos pelo SUS ou pelo SUAS (art. 20-B). A soma da renda é dos membros que vivem sob o mesmo teto, sem deduções não previstas em lei.",
      "Família, para esse cálculo, é um grupo fechado: requerente, cônjuge ou companheiro, pais (e, na falta de um deles, madrasta ou padrasto), irmãos solteiros, filhos e enteados solteiros e menores tutelados — todos vivendo sob o mesmo teto (art. 20, § 1º). Quem não está na lista (avós, tios, netos, irmão casado, filho casado) não entra no grupo, mesmo morando na casa.",
      "Algumas rendas não entram no cálculo: o BPC ou benefício previdenciário de até 1 salário mínimo pago a idoso acima de 65 anos ou a pessoa com deficiência da mesma família (§ 14); a remuneração de estágio supervisionado e de aprendizagem; e auxílios ou indenizações por rompimento de barragens (§ 9º). O BPC pode ser pago a mais de um membro da mesma família (§ 15).",
      "Outras regras importantes: o BPC não se acumula com outro benefício da seguridade ou de outro regime, salvo assistência médica, pensão especial de natureza indenizatória e as transferências de renda (como o Bolsa Família) (§ 4º); acolhimento em instituição de longa permanência não impede o benefício (§ 5º); a inscrição no CPF e no CadÚnico é requisito para conceder, manter e revisar (§ 12); e o benefício deve ser revisto a cada 2 anos (art. 21). O BPC não paga 13º e não gera pensão por morte.",
    ],
    pontosChave: [
      "Valor: 1 salário mínimo. Público: idoso 65+ ou pessoa com deficiência (qualquer idade).",
      "Renda per capita ≤ 1/4 do salário mínimo (art. 20, § 3º); regulamento pode ampliar até 1/2 SM (art. 20, § 11-A, e art. 20-B).",
      "Impedimento de longo prazo = efeitos por no mínimo 2 anos (art. 20, § 10).",
      "Família: requerente, cônjuge/companheiro, pais (ou madrasta/padrasto na falta de um), irmãos solteiros, filhos e enteados solteiros, menores tutelados — sob o mesmo teto.",
      "Não entram na renda: BPC/benefício previdenciário de até 1 SM de idoso 65+ ou PcD da família; estágio e aprendizagem; auxílios por rompimento de barragem.",
      "Inscrição no CPF e no CadÚnico: obrigatória para concessão, manutenção e revisão (§ 12).",
      "Revisão a cada 2 anos (art. 21); sem 13º e sem pensão por morte.",
      "Não acumula com outro benefício, exceto assistência médica, pensão especial indenizatória e transferências de renda (§ 4º).",
      "Aprendiz com deficiência: pode receber BPC e remuneração juntos por até 2 anos (art. 21-A, § 2º).",
    ],
    exemplos: [
      {
        titulo: "Cálculo da renda per capita (valores hipotéticos)",
        texto:
          "Considere um salário mínimo HIPOTÉTICO de R$ 1.600,00 (1/4 = R$ 400,00). Pedro, 8 anos, com deficiência, mora com o pai (salário de R$ 1.200,00), a mãe (sem renda) e a irmã de 12 anos (sem renda). Família: 4 pessoas. Renda total: R$ 1.200,00. Per capita: 1.200 ÷ 4 = R$ 300,00, que é inferior a R$ 400,00. O critério de renda está atendido; falta ainda a avaliação da deficiência.",
      },
      {
        titulo: "Quem entra e quem não entra no grupo familiar",
        texto:
          "Dona Lúcia, 67 anos, sem renda, mora com o filho solteiro (renda de R$ 1.000,00), a neta de 5 anos e um irmão casado que ganha R$ 3.000,00. Para o BPC, a família é Lúcia + filho solteiro (2 pessoas). A neta e o irmão casado NÃO integram o grupo do art. 20, § 1º, e a renda do irmão não é somada. Com o salário mínimo hipotético de R$ 1.600,00, a per capita é 1.000 ÷ 2 = R$ 500,00, acima de 1/4 (R$ 400,00): pelo critério objetivo, não há direito, salvo ampliação prevista em regulamento.",
      },
      {
        titulo: "Idosa de 63 anos",
        texto:
          "Maria tem 63 anos e renda familiar zero. Pelo Estatuto ela já é pessoa idosa (60+), mas o BPC ao idoso exige 65 anos. Ela só poderá obter o BPC antes disso se for pessoa com deficiência, comprovada por avaliação médica e social. Caso contrário, deverá aguardar completar 65 anos.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Renda do BPC: o que entra e o que não entra",
        colunas: ["Situação", "Entra no cálculo?"],
        linhas: [
          ["Salário de membro do grupo familiar sob o mesmo teto", "Sim"],
          ["Renda de irmão casado, avô, tio ou neto que mora junto", "Não (não integram a família do § 1º)"],
          ["BPC ou benefício previdenciário de até 1 SM de idoso 65+ ou PcD da família", "Não (§ 14)"],
          ["Bolsa de estágio supervisionado ou remuneração de aprendiz", "Não (§ 9º)"],
          ["Auxílio ou indenização por rompimento de barragem", "Não (§ 9º)"],
          ["Deduções de despesas não previstas em lei", "Vedadas (§ 3º-A)"],
        ],
      },
    ],
    pegadinhas: [
      "Idade de 60 anos para o BPC ao idoso: ERRADO. O BPC exige 65 anos; 60 é a idade do Estatuto da Pessoa Idosa.",
      "Renda per capita 'inferior a 1/4': a lei diz IGUAL OU INFERIOR a 1/4. E o limite legal é 1/4, não 1/2 — o 1/2 é teto de eventual ampliação por regulamento.",
      "Dizer que o BPC gera pensão por morte ou paga 13º: não gera nem paga.",
      "Afirmar que o BPC exige carência ou qualidade de segurado: é assistencial e não contributivo.",
      "Incluir avós, netos ou irmãos casados no grupo familiar só porque moram na mesma casa: a lista do § 1º é fechada.",
    ],
    fundamentos: [
      "CF/1988, art. 203, V",
      "Lei nº 8.742/1993, arts. 20, 20-B, 21 e 21-A",
      "Lei nº 14.176/2021 (critério de 1/4 e ampliação até 1/2)",
    ],
  },
  {
    id: "as-bpc-decreto",
    titulo: "BPC no Decreto nº 6.214/2007: requerimento, concessão, manutenção, suspensão e cessação",
    pool: "loas",
    topicos: ["ana-as-4", "tec-esp-17"],
    texto: [
      "O Decreto nº 6.214/2007 aprova o Regulamento do BPC. Ele deixa claro que o benefício integra a proteção social básica do SUAS e reparte papéis: o ministério responsável pela assistência social coordena, regula, financia e avalia; o INSS operacionaliza (recebe o requerimento, concede, mantém, revisa, suspende e cessa). Os recursos para pagamento vêm do Fundo Nacional de Assistência Social (FNAS).",
      "Antes de pedir, a família precisa estar inscrita no CadÚnico, com dados atualizados, e o requerente deve ter CPF. As informações de renda são declaradas na inscrição do CadÚnico e ratificadas no requerimento; o INSS confronta essas informações com outras bases oficiais e, havendo divergência, prevalece a que indicar maior renda. Normas recentes passaram a exigir também registro biométrico do requerente ou do responsável legal, ressalvadas as exceções previstas em ato do Poder Executivo.",
      "O requerimento é feito pelos canais da Previdência Social ou outros autorizados. Documentação incompleta não autoriza recusa liminar do pedido. Se a renda per capita não atender ao critério, o INSS indefere sem precisar avaliar a deficiência. Quando necessária, a avaliação da deficiência segue a CIF e é feita em duas partes: avaliação social (fatores ambientais, sociais e pessoais) pelo serviço social do INSS e avaliação médica (funções e estruturas do corpo) pela perícia médica federal; ambas analisam limitações de atividades e restrições de participação.",
      "Concedido, o pagamento deve ocorrer em até 45 dias após cumpridas as exigências. A concessão independe de interdição judicial. O benefício é intransferível: não gera pensão por morte, mas o resíduo não recebido em vida é pago aos herdeiros na forma da lei civil. Não há desconto de contribuição nem abono anual. Do indeferimento cabe recurso à Junta de Recursos do Conselho de Recursos da Previdência Social (CRPS), em 30 dias.",
      "Na manutenção, o beneficiário deve informar mudanças (endereço, estado civil, emprego, outro benefício). A revisão periódica (bienal, pela LOAS) usa cruzamento de dados e atualização do CadÚnico. Quando a pessoa com deficiência passa a trabalhar, inclusive como MEI, o BPC é SUSPENSO em caráter especial — não cessado —, podendo ser retomado sem nova perícia ao fim da atividade, se não houver direito a benefício previdenciário. A cessação ocorre, entre outras hipóteses, com a morte (ou ausência/morte presumida) do beneficiário, com a superação das condições (por exemplo, renda ou deficiência) e quando, suspenso por falta de providência (defesa, agendamento de reavaliação, CadÚnico ou biometria), o beneficiário não regulariza no prazo.",
    ],
    pontosChave: [
      "Coordenação: ministério da assistência social. Operacionalização: INSS. Recursos: FNAS.",
      "BPC integra a proteção social básica do SUAS.",
      "CadÚnico atualizado e CPF são requisitos; o CadÚnico desatualizado há mais de 24 meses exige regularização.",
      "Renda não atendida: indeferimento sem avaliação da deficiência.",
      "Avaliação da deficiência com base na CIF: social (INSS) + médica (perícia médica federal).",
      "Pagamento em até 45 dias após cumpridas as exigências; independe de interdição judicial.",
      "Intransferível, sem pensão; resíduo pago aos herdeiros; sem 13º e sem desconto de contribuição.",
      "Recurso do indeferimento: Junta de Recursos do CRPS, em 30 dias.",
      "PcD que passa a trabalhar (inclusive MEI): suspensão especial, com retomada sem nova perícia ao fim da atividade.",
      "Cessação do BPC não impede nova concessão, se atendidos os requisitos.",
    ],
    exemplos: [
      {
        titulo: "Indeferimento pela renda",
        texto:
          "João pede o BPC como pessoa com deficiência. O cruzamento de dados mostra que a renda per capita da família é muito superior a 1/4 do salário mínimo. O INSS indefere o pedido sem agendar avaliação médica e social, pois a renda já afasta o direito. João pode recorrer à Junta de Recursos do CRPS em 30 dias.",
      },
      {
        titulo: "Beneficiária que consegue emprego",
        texto:
          "Ana, beneficiária do BPC por deficiência, é contratada com carteira assinada. O BPC é suspenso em caráter especial. Um ano depois, o contrato termina e ela não tem direito a benefício previdenciário. Ana pode pedir o restabelecimento do BPC sem nova perícia. Se a remuneração for de até 2 salários mínimos e ela for deficiente moderada ou grave, poderia ainda receber o auxílio-inclusão enquanto trabalha.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Caminho do requerimento do BPC",
        passos: [
          { titulo: "CadÚnico e CPF", texto: "Família inscrita e atualizada no CadÚnico; requerente com CPF regular (e registro biométrico, conforme regulamento)." },
          { titulo: "Requerimento", texto: "Pelos canais do INSS; documentação incompleta não gera recusa liminar." },
          { titulo: "Análise da renda", texto: "Cruzamento de bases; per capita acima do critério leva ao indeferimento direto." },
          { titulo: "Avaliação (só PcD)", texto: "Avaliação social (serviço social do INSS) e médica (perícia médica federal), com base na CIF." },
          { titulo: "Decisão", texto: "Concessão (pagamento em até 45 dias) ou indeferimento motivado, com recurso ao CRPS em 30 dias." },
          { titulo: "Manutenção", texto: "Revisão a cada 2 anos, atualização cadastral e comunicação de mudanças." },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a concessão do BPC à pessoa com deficiência exige interdição judicial ou curatela: não exige.",
      "Afirmar que o INSS é o gestor/coordenador do BPC: o INSS operacionaliza; a coordenação é do ministério da assistência social.",
      "Dizer que a PcD que começa a trabalhar tem o BPC cessado: a regra é a SUSPENSÃO especial, com possibilidade de retomada.",
      "Afirmar que, com a morte do beneficiário, os valores atrasados se perdem: o resíduo não recebido em vida é pago aos herdeiros, embora não haja pensão.",
      "Dizer que a apresentação de documentação incompleta permite recusar o protocolo do pedido: é vedada a recusa liminar.",
    ],
    fundamentos: [
      "Decreto nº 6.214/2007 (Regulamento do BPC), arts. 1º a 25, 36, 39, 42 e 47-A a 48",
      "Lei nº 8.742/1993, arts. 20, 21, 21-A e 21-B",
      "Lei nº 15.077/2024 (CadÚnico atualizado e biometria)",
    ],
  },
  {
    id: "as-auxilio-inclusao",
    titulo: "Auxílio-inclusão e as mudanças da Lei nº 14.176/2021",
    pool: "loas",
    topicos: ["tec-esp-17", "ana-as-1", "ana-as-11"],
    texto: [
      "O auxílio-inclusão foi previsto pela Lei Brasileira de Inclusão (art. 94 da Lei nº 13.146/2015), mas só ganhou regras concretas com a Lei nº 14.176/2021, que inseriu os arts. 26-A a 26-H na LOAS. A ideia é eliminar o 'medo de perder o BPC': a pessoa com deficiência que consegue um emprego deixa de receber o BPC, mas passa a receber um complemento que estimula a entrada no mercado de trabalho.",
      "Tem direito a pessoa com deficiência MODERADA ou GRAVE que, cumulativamente: recebe o BPC e passa a exercer atividade com remuneração limitada a 2 salários mínimos, que a enquadre como segurada obrigatória do RGPS ou filiada a regime próprio; tem inscrição atualizada no CadÚnico; tem CPF regular; e continua atendendo aos critérios de manutenção do BPC, inclusive de renda. Também pode pedir quem recebeu o BPC nos 5 anos anteriores ao início da atividade remunerada e o teve suspenso por exercer trabalho (sem pagamento retroativo).",
      "O valor é de 50% do BPC em vigor (ou seja, meio salário mínimo), devido a partir do requerimento. Ao pedir o auxílio, o beneficiário autoriza a suspensão do BPC — os dois NÃO são pagos juntos. O INSS também pode concedê-lo automaticamente quando constatar que o beneficiário do BPC está trabalhando. Para calcular a renda per capita do auxílio-inclusão, desconsidera-se a remuneração do próprio requerente de até 2 salários mínimos e as rendas de estágio e aprendizagem.",
      "O auxílio-inclusão não pode ser acumulado com BPC, aposentadorias, pensões, benefícios por incapacidade de qualquer regime, nem com seguro-desemprego. Não sofre desconto de contribuição e não gera abono anual. A gestão cabe ao ministério da assistência social e a operacionalização e o pagamento, ao INSS. A lei previu sua revisão em até 10 anos para aprimoramento e ampliação.",
      "A Lei nº 14.176/2021 também mexeu no BPC: fixou de forma definitiva o critério de renda de 1/4 do salário mínimo, autorizou o regulamento a ampliá-lo para até 1/2 salário mínimo (art. 20, § 11-A) com base nos fatores do art. 20-B (grau da deficiência, dependência de terceiros e gastos com saúde não cobertos por SUS ou SUAS), aplicados em escalas graduais.",
    ],
    pontosChave: [
      "Base: art. 94 da LBI + arts. 26-A a 26-H da LOAS (incluídos pela Lei nº 14.176/2021).",
      "Público: PcD moderada ou grave que recebe BPC (ou recebeu nos últimos 5 anos) e passa a trabalhar.",
      "Remuneração da atividade: até 2 salários mínimos; atividade que a torne segurada obrigatória do RGPS ou filiada a RPPS.",
      "Valor: 50% do BPC; devido desde o requerimento.",
      "BPC fica suspenso enquanto recebe o auxílio-inclusão: não há acumulação.",
      "Inacumulável com aposentadoria, pensão, benefício por incapacidade e seguro-desemprego.",
      "Sem desconto de contribuição e sem abono anual (13º).",
      "Gestão: ministério da assistência social; operacionalização e pagamento: INSS.",
    ],
    exemplos: [
      {
        titulo: "Cálculo do valor (salário mínimo hipotético)",
        texto:
          "Com salário mínimo HIPOTÉTICO de R$ 1.600,00, o BPC vale R$ 1.600,00 e o auxílio-inclusão, R$ 800,00. Carla, com deficiência grave, recebia BPC e foi contratada por R$ 2.000,00 (abaixo de 2 SM = R$ 3.200,00). Ela passa a receber salário de R$ 2.000,00 + auxílio-inclusão de R$ 800,00, e o BPC fica suspenso.",
      },
      {
        titulo: "Remuneração acima do limite",
        texto:
          "Rafael, com deficiência moderada e beneficiário do BPC, é contratado com salário de 3 salários mínimos. Como a remuneração supera 2 salários mínimos, não há direito ao auxílio-inclusão; o BPC é suspenso pelo exercício de atividade remunerada e poderá ser retomado quando o vínculo terminar, se mantidos os requisitos.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "BPC x auxílio-inclusão",
        colunas: ["Item", "BPC", "Auxílio-inclusão"],
        linhas: [
          ["Valor", "1 salário mínimo", "50% do BPC"],
          ["Público", "Idoso 65+ ou PcD", "PcD moderada ou grave que trabalha"],
          ["Atividade remunerada", "Suspende o BPC da PcD", "Exige trabalho com remuneração até 2 SM"],
          ["13º (abono anual)", "Não", "Não"],
          ["Acumulação entre si", "Não", "Não"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o auxílio-inclusão corresponde a 100% do BPC ou que é pago junto com ele: vale 50% e o BPC fica suspenso.",
      "Estender o auxílio-inclusão a qualquer grau de deficiência: a lei exige deficiência moderada ou grave.",
      "Afirmar que o limite de remuneração é de 1/4 ou 1 salário mínimo: o limite da atividade é de 2 salários mínimos.",
      "Dizer que o auxílio-inclusão gera 13º: não gera abono anual.",
      "Afirmar que foi criado pela Lei nº 14.176/2021: ele foi PREVISTO na LBI (2015) e REGULAMENTADO pela Lei nº 14.176/2021.",
    ],
    fundamentos: [
      "Lei nº 13.146/2015, art. 94",
      "Lei nº 8.742/1993, arts. 20, § 11-A, 20-B e 26-A a 26-H",
      "Lei nº 14.176/2021",
    ],
  },
  {
    id: "as-pensoes-especiais-1",
    titulo: "Benefícios de legislações especiais I: Talidomida, seringueiros, ex-combatente e anistiado político",
    pool: "loas",
    topicos: ["tec-esp-15"],
    texto: [
      "Além dos benefícios previdenciários e do BPC, existem pensões e reparações criadas por leis específicas para indenizar grupos atingidos por fatos históricos ou tragédias. Elas têm natureza indenizatória ou especial, são custeadas pelo Tesouro Nacional e não dependem de contribuição. Muitas são operacionalizadas pelo INSS, mas não são benefícios do RGPS.",
      "Síndrome da Talidomida (Lei nº 7.070/1982): pensão especial, mensal, vitalícia e intransferível para quem nasceu com a deficiência causada pelo uso do medicamento talidomida pela mãe na gestação. O valor é calculado por pontos: a dependência é avaliada em quatro naturezas (trabalho, deambulação, higiene pessoal e alimentação), com 1 ponto se parcial e 2 se total; cada ponto equivale a metade do maior salário mínimo. Depende de atestado de junta médica oficial, é mantida e paga pelo INSS à conta do Tesouro, tem natureza indenizatória (não prejudica benefícios previdenciários) e não é reduzida se a pessoa ganhar capacidade de trabalho. Há adicionais de 25% e 35% em situações específicas, e a pensão é isenta de imposto de renda.",
      "Seringueiros ou 'soldados da borracha' (Lei nº 7.986/1989, que regulamenta o art. 54 do ADCT): pensão mensal vitalícia de 2 salários mínimos aos seringueiros recrutados para a produção de borracha na Amazônia durante a Segunda Guerra Mundial e que não tenham meios de subsistência. Diferentemente da maioria das pensões especiais, é TRANSFERÍVEL aos dependentes que comprovem carência. A comprovação do serviço exige início de prova material — não basta prova exclusivamente testemunhal.",
      "Ex-combatente (Lei nº 8.059/1990, art. 53 do ADCT): pensão especial a quem participou de operações bélicas na Segunda Guerra Mundial, com valor igual à pensão militar deixada por segundo-tenente das Forças Armadas. Com a morte do ex-combatente, reverte aos dependentes (viúva, companheira, filhos e irmãos solteiros menores de 21 ou inválidos, pais inválidos), em cotas iguais. É inacumulável com rendimentos dos cofres públicos, EXCETO benefícios previdenciários. Atenção: seu processamento cabe ao ministério militar ao qual o ex-combatente esteve vinculado, e não ao INSS.",
      "Anistiado político (Lei nº 10.559/2002, art. 8º do ADCT): o regime do anistiado inclui a declaração da condição de anistiado e a reparação econômica de caráter indenizatório, em prestação única (30 salários mínimos por ano de punição, limitada a R$ 100 mil) ou em prestação mensal, permanente e continuada (equivalente à remuneração que teria na ativa, entre o salário mínimo e o teto constitucional). As duas formas não se acumulam. O tempo de afastamento é contado para todos os efeitos, sem exigência de contribuições, e os valores são isentos de imposto de renda. O pedido é analisado pela Comissão de Anistia. As antigas aposentadorias excepcionais de anistiado pagas pelo INSS foram mantidas até sua substituição pelo novo regime.",
    ],
    pontosChave: [
      "Talidomida: pensão mensal, vitalícia e intransferível; pontos (1 ou 2 por natureza; cada ponto = metade do maior salário mínimo); natureza indenizatória; isenta de IR.",
      "Talidomida: não é reduzida se o beneficiário recuperar capacidade de trabalho e não prejudica benefícios previdenciários.",
      "Seringueiros: 2 salários mínimos, vitalícia; exige falta de meios de subsistência; transferível a dependentes carentes.",
      "Seringueiros: comprovação do trabalho com início de prova material (prova só testemunhal não basta).",
      "Ex-combatente: valor da pensão militar de segundo-tenente; reverte a dependentes; inacumulável com rendimentos públicos, salvo benefícios previdenciários.",
      "Ex-combatente: processada pelo ministério militar, não pelo INSS.",
      "Anistiado: reparação em prestação única (30 SM por ano de punição, até R$ 100 mil) OU mensal, permanente e continuada — não acumulam.",
      "Anistiado: tempo de afastamento contado sem exigir contribuições; valores isentos de IR.",
    ],
    exemplos: [
      {
        titulo: "Pontuação da Talidomida",
        texto:
          "Uma pessoa com a síndrome tem incapacidade total para o trabalho (2 pontos), parcial para deambulação (1 ponto), parcial para higiene (1 ponto) e nenhuma limitação para alimentação (0). Total: 4 pontos, cada um valendo metade do maior salário mínimo. Se, anos depois, ela passar a trabalhar, a pensão NÃO é reduzida.",
      },
      {
        titulo: "Morte do soldado da borracha",
        texto:
          "Seu Antônio recebia a pensão de seringueiro e faleceu. A esposa, sem renda e com atestado oficial de carência, pode requerer a transferência da pensão. Se a pensão fosse a da hanseníase ou a da Talidomida, isso não seria possível, pois elas são personalíssimas/intransferíveis.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Pensões especiais (parte I)",
        colunas: ["Lei", "Quem recebe", "Destaques"],
        linhas: [
          ["Lei nº 7.070/1982 (Talidomida)", "Pessoas com a síndrome da talidomida", "Valor por pontos; vitalícia e intransferível; indenizatória; isenta de IR"],
          ["Lei nº 7.986/1989 (seringueiros)", "Soldados da borracha sem meios de subsistência", "2 SM; vitalícia; transferível a dependentes carentes"],
          ["Lei nº 8.059/1990 (ex-combatente)", "Ex-combatente da 2ª Guerra e dependentes", "Valor da pensão de 2º-tenente; processada pelo ministério militar"],
          ["Lei nº 10.559/2002 (anistiado)", "Anistiados políticos", "Reparação única ou mensal (não acumulam); isenta de IR"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a pensão da Talidomida exige carência ou qualidade de segurado: é indenizatória e não depende de contribuição.",
      "Afirmar que a pensão dos seringueiros é intransferível: a Lei nº 7.986/1989 permite a transferência a dependentes carentes.",
      "Dizer que a pensão do ex-combatente é inacumulável com qualquer benefício: a exceção são justamente os benefícios previdenciários.",
      "Afirmar que o anistiado pode receber a reparação em prestação única e, cumulativamente, a mensal: as duas modalidades não se acumulam.",
    ],
    fundamentos: [
      "Lei nº 7.070/1982",
      "Lei nº 7.986/1989; ADCT, art. 54",
      "Lei nº 8.059/1990; ADCT, art. 53",
      "Lei nº 10.559/2002; ADCT, art. 8º",
    ],
  },
  {
    id: "as-pensoes-especiais-2",
    titulo: "Benefícios de legislações especiais II: hemodiálise de Caruaru, Césio 137, hanseníase e Zika vírus",
    pool: "loas",
    topicos: ["tec-esp-15"],
    texto: [
      "Hemodiálise de Caruaru (Lei nº 9.422/1996): em 1996, pacientes do Instituto de Doenças Renais de Caruaru (PE) morreram de hepatite tóxica por contaminação no processo de hemodiálise. A lei autorizou pensão especial mensal de UM salário mínimo, retroativa à data do óbito, aos dependentes das vítimas fatais: cônjuge, companheiro(a), descendentes, ascendentes e colaterais até o 2º grau. Havendo vários pensionistas, aplica-se o rateio da pensão por morte do RGPS. A pensão não se transmite a sucessores e se extingue com a morte do último beneficiário; a despesa corre no orçamento do INSS por conta do Tesouro.",
      "Césio 137 (Lei nº 9.425/1996): concede pensão vitalícia, a título de indenização especial, às vítimas do acidente radioativo de Goiânia (1987). É personalíssima — não passa ao cônjuge nem aos herdeiros. O valor varia conforme a gravidade (as faixas da lei foram fixadas em UFIR: incapacidade permanente, nível de irradiação ou contaminação, descendentes nascidos com anomalia). A condição de vítima é comprovada por junta médica oficial a cargo da Fundação Leide das Neves Ferreira, com supervisão do Ministério Público Federal. Eventual condenação da União em ação de indenização terá o valor da pensão deduzido.",
      "Hanseníase (Lei nº 11.520/2007): pensão especial mensal, vitalícia e intransferível para quem foi compulsoriamente submetido, até 31/12/1986, a isolamento (domiciliar ou em seringais) ou internação em hospitais-colônia. É personalíssima e tem valor não inferior ao salário mínimo, reajustado anualmente. Desde a Lei nº 14.736/2023, também os FILHOS separados dos pais por causa desse isolamento ou internação podem requerer a pensão, sem efeitos retroativos. A concessão depende de parecer de comissão interministerial e ato da autoridade de direitos humanos; o INSS processa, mantém e paga. Não se acumula com indenização da União sobre os mesmos fatos (cabe opção), mas não impede benefício previdenciário.",
      "Síndrome congênita do Zika vírus (Lei nº 13.985/2020): pensão especial mensal, vitalícia e intransferível, de UM salário mínimo, para crianças com a síndrome nascidas entre 1º/1/2015 e 31/12/2019 que eram beneficiárias do BPC. A pensão substitui o BPC — não se acumulam — e é devida a partir do dia seguinte à cessação dele. Não gera abono anual nem pensão por morte. O requerimento é feito no INSS, com exame pericial por perito médico federal para confirmar a relação entre a síndrome e o vírus, e exige a desistência de ação judicial com pedido idêntico.",
      "Atualização: a Lei nº 15.156/2025 ampliou a proteção às pessoas com deficiência permanente decorrente da síndrome congênita do Zika, prevendo indenização por dano moral em parcela única (R$ 50 mil, atualizada) e uma pensão especial mensal e vitalícia de valor equivalente ao maior salário de benefício do RGPS, requerida no INSS. Para a prova, os itens clássicos continuam sendo os da Lei nº 13.985/2020; fique atento à forma como o próximo edital tratar o tema.",
    ],
    pontosChave: [
      "Caruaru: 1 salário mínimo; dependentes das vítimas fatais (inclui colaterais até 2º grau); retroativa ao óbito; extingue-se com o último beneficiário.",
      "Césio 137: pensão vitalícia indenizatória e personalíssima; valor por faixas de gravidade; junta médica da Fundação Leide das Neves Ferreira.",
      "Hanseníase: isolamento ou internação compulsória até 31/12/1986; mensal, vitalícia, intransferível; não inferior ao salário mínimo.",
      "Hanseníase: filhos separados dos pais também têm direito (Lei nº 14.736/2023), sem retroatividade.",
      "Hanseníase: não impede benefício previdenciário; não acumula com indenização da União pelos mesmos fatos.",
      "Zika (Lei nº 13.985/2020): nascidos de 2015 a 2019, beneficiários do BPC; 1 salário mínimo; substitui o BPC; sem 13º e sem pensão por morte.",
      "Zika: requerimento no INSS com perícia médica federal; exige desistência de ação judicial idêntica.",
      "Lei nº 15.156/2025: indenização de R$ 50 mil e pensão vitalícia no valor do maior salário de benefício do RGPS para pessoas com a síndrome do Zika.",
    ],
    exemplos: [
      {
        titulo: "Dependentes em Caruaru",
        texto:
          "Uma vítima fatal da tragédia deixou a mãe e um irmão. Pela Lei nº 9.422/1996, ascendentes e colaterais até o 2º grau (irmãos) são beneficiários; a pensão de um salário mínimo é rateada entre eles e, com a morte do último, a pensão se extingue — não vai para os herdeiros deles.",
      },
      {
        titulo: "Criança com síndrome do Zika",
        texto:
          "Lucas nasceu em 2017 com síndrome congênita do Zika e recebia o BPC. A família requer no INSS a pensão especial da Lei nº 13.985/2020. Após a perícia médica federal confirmar a relação com o vírus, o BPC cessa e a pensão especial passa a ser paga a partir do dia seguinte. Se Lucas tivesse nascido em 2021, não estaria no período de 2015 a 2019 previsto por essa lei.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Pensões especiais (parte II)",
        colunas: ["Lei", "Quem recebe", "Destaques"],
        linhas: [
          ["Lei nº 9.422/1996 (Caruaru)", "Dependentes das vítimas fatais da hemodiálise", "1 SM; retroativa ao óbito; não se transmite"],
          ["Lei nº 9.425/1996 (Césio 137)", "Vítimas do acidente radioativo de Goiânia", "Vitalícia, personalíssima; valor por gravidade"],
          ["Lei nº 11.520/2007 (hanseníase)", "Isolados/internados compulsoriamente até 1986 e filhos separados", "Não inferior a 1 SM; INSS paga; não impede benefício previdenciário"],
          ["Lei nº 13.985/2020 (Zika)", "Crianças nascidas 2015–2019 com a síndrome, beneficiárias do BPC", "1 SM; substitui o BPC; sem 13º e sem pensão"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a pensão do Zika pode ser recebida junto com o BPC: pela Lei nº 13.985/2020, ela o substitui.",
      "Afirmar que a pensão da hanseníase é transmitida aos dependentes após a morte do titular: é personalíssima. Os filhos separados têm direito PRÓPRIO, por requerimento.",
      "Dizer que a pensão das vítimas do Césio 137 passa ao cônjuge sobrevivente: é personalíssima e intransferível.",
      "Restringir os beneficiários da pensão de Caruaru ao cônjuge e aos filhos: a lei inclui ascendentes e colaterais até o 2º grau.",
      "Afirmar que a pensão da hanseníase impede a concessão de aposentadoria do RGPS: a lei diz expressamente que não impede benefício previdenciário.",
    ],
    fundamentos: [
      "Lei nº 9.422/1996",
      "Lei nº 9.425/1996",
      "Lei nº 11.520/2007 (alterada pela Lei nº 14.736/2023)",
      "Lei nº 13.985/2020",
      "Lei nº 15.156/2025",
    ],
  },
  {
    id: "as-seguro-defeso",
    titulo: "Seguro-desemprego do pescador artesanal (seguro-defeso)",
    pool: "loas",
    topicos: ["tec-esp-16"],
    texto: [
      "O defeso é o período em que a pesca de determinada espécie fica proibida para permitir sua reprodução. Como o pescador artesanal fica impedido de trabalhar, a Lei nº 10.779/2003 garante a ele o seguro-desemprego no valor de UM salário mínimo mensal durante o defeso. O benefício é pago com recursos do Fundo de Amparo ao Trabalhador (FAT) — ou seja, não é benefício previdenciário nem assistencial, embora o pescador seja segurado especial do RGPS.",
      "Tem direito o pescador profissional artesanal (segurado especial das Leis nº 8.212 e 8.213/1991) que exerce a atividade de forma ininterrupta, individualmente ou em regime de economia familiar. Considera-se ininterrupta a atividade exercida entre o defeso anterior e o atual, ou nos 12 meses anteriores ao defeso em curso — o que for menor. O pescador não pode ter outra fonte de renda além da pesca nem estar recebendo benefício previdenciário ou assistencial de natureza continuada, exceto pensão por morte, auxílio-acidente e transferências de renda (como o Bolsa Família).",
      "Para se habilitar, a lei exige registro como pescador profissional artesanal no Registro Geral da Atividade Pesqueira (RGP) com antecedência mínima de 1 ano da data do requerimento, comprovantes de venda do pescado ou de contribuição previdenciária e outros documentos definidos pelo Codefat. Pelo Decreto nº 8.424/2015, o prazo para requerer começa 30 dias antes do início do defeso e termina no último dia dele; pedido feito dentro do prazo dá direito ao pagamento desde o início do defeso.",
      "O benefício é pessoal e intransferível, não se estende às atividades de apoio à pesca nem aos familiares que não cumpram os requisitos, e o pescador não pode receber, no mesmo ano, mais de um seguro-defeso por defesos de espécies diferentes. É cancelado com o início de atividade remunerada ou de outra renda, morte, desrespeito ao defeso ou falsidade das informações. Quem fraudar fica sujeito, entre outras sanções, ao impedimento de requerer o benefício por 5 anos (o dobro na reincidência).",
      "Competência — atenção à atualização: entre 2015 e 2025, o INSS recebia, processava e habilitava os requerimentos (é o cenário do edital de 2022). A Lei nº 15.265/2025 alterou o art. 2º da Lei nº 10.779/2003 e atribuiu ao Ministério do Trabalho e Emprego (MTE) receber e processar os requerimentos e habilitar os beneficiários, segundo resolução do Codefat. O Decreto nº 8.424/2015 ainda menciona o INSS em vários dispositivos, então acompanhe a regulamentação e o próximo edital.",
    ],
    pontosChave: [
      "Valor: 1 salário mínimo mensal durante o defeso; pago pelo FAT.",
      "Beneficiário: pescador profissional artesanal, segurado especial, atividade ininterrupta, individual ou em economia familiar.",
      "Atividade ininterrupta: entre o defeso anterior e o atual, ou nos 12 meses anteriores — o que for menor.",
      "RGP como pescador artesanal com antecedência mínima de 1 ano do requerimento.",
      "Sem outra fonte de renda; não pode receber benefício continuado, salvo pensão por morte, auxílio-acidente e transferências de renda.",
      "Pessoal e intransferível; no máximo um seguro-defeso por ano, ainda que haja defesos de espécies distintas.",
      "Prazo para requerer (Decreto nº 8.424/2015): de 30 dias antes do início até o último dia do defeso.",
      "Cancelamento: atividade remunerada, outra renda, morte, desrespeito ao defeso, falsidade.",
      "Competência para habilitar: INSS (2015–2025) → MTE (Lei nº 15.265/2025).",
    ],
    exemplos: [
      {
        titulo: "Pescador com dois defesos no ano",
        texto:
          "Seu Raimundo pesca camarão e, em outra época, uma espécie de peixe com defeso próprio. Mesmo que os dois defesos ocorram no mesmo ano, ele só pode receber um seguro-defeso nesse ano, pois a lei veda mais de um benefício no mesmo ano por defesos de espécies distintas.",
      },
      {
        titulo: "Pescador aposentado e pescador pensionista",
        texto:
          "José é pescador artesanal e recebe aposentadoria por idade: não tem direito ao seguro-defeso, pois está em gozo de benefício previdenciário continuado. Já Maria, pescadora artesanal que recebe pensão por morte do marido, pode receber, pois a pensão por morte é uma das exceções legais.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Do defeso ao pagamento",
        passos: [
          { titulo: "Defeso fixado", texto: "Órgão ambiental federal define o período de proibição da pesca da espécie." },
          { titulo: "Requisitos prévios", texto: "RGP artesanal há pelo menos 1 ano; atividade ininterrupta; sem outra renda." },
          { titulo: "Requerimento", texto: "De 30 dias antes do início até o último dia do defeso (Decreto nº 8.424/2015)." },
          { titulo: "Habilitação", texto: "Hoje a cargo do MTE (Lei nº 15.265/2025), conforme resolução do Codefat." },
          { titulo: "Pagamento", texto: "1 salário mínimo por mês de defeso, com recursos do FAT." },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o seguro-defeso é benefício previdenciário pago pelo RGPS: é seguro-desemprego, custeado pelo FAT.",
      "Afirmar que se estende aos trabalhadores de apoio à pesca (ex.: quem conserta redes) ou a familiares que não pescam: a lei proíbe.",
      "Dizer que o pescador pode receber vários seguros-defeso no mesmo ano, um para cada espécie: é vedado.",
      "Afirmar que a pensão por morte impede o seguro-defeso: pensão por morte e auxílio-acidente são exceções expressas.",
      "Exigir RGP com antecedência mínima de 6 meses: a lei exige 1 ano.",
      "Afirmar, com base na lei vigente, que compete ao INSS receber, processar e habilitar o seguro-defeso: desde a Lei nº 15.265/2025 (originada da MP nº 1.323/2025), essa competência é do MTE, conforme resolução do Codefat. O INSS fez esse papel de 2015 (Lei nº 13.134/2015) até a mudança — questões antigas trazem o INSS como gabarito certo.",
    ],
    fundamentos: [
      "Lei nº 10.779/2003, arts. 1º a 5º (com alterações das Leis nº 13.134/2015, 15.265/2025 e 15.399/2026)",
      "Decreto nº 8.424/2015",
    ],
  },
  {
    id: "as-pnas-suas",
    titulo: "Política Nacional de Assistência Social (PNAS/2004) e o SUAS",
    pool: "politicas-sociais",
    topicos: ["ana-as-2"],
    texto: [
      "A Política Nacional de Assistência Social (PNAS) foi aprovada pela Resolução CNAS nº 145/2004 e deu as bases para a construção do Sistema Único de Assistência Social (SUAS), que depois foi incorporado à LOAS pela Lei nº 12.435/2011. A PNAS rompe com a visão de assistência como caridade e afirma a assistência social como política pública de proteção social, direito do cidadão e dever do Estado.",
      "A PNAS organiza a política em torno de seguranças que devem ser afiançadas: segurança de sobrevivência (de rendimento e de autonomia), segurança de acolhida e segurança de convívio ou vivência familiar. Seus eixos estruturantes incluem a matricialidade sociofamiliar (a família como centro da proteção), a descentralização político-administrativa e a territorialização, novas bases para a relação entre Estado e sociedade civil, o financiamento, o controle social, a participação do usuário, a política de recursos humanos e a informação, monitoramento e avaliação.",
      "A proteção social é hierarquizada em dois níveis. A proteção social BÁSICA é preventiva: atua antes da violação de direitos, fortalecendo vínculos familiares e comunitários de famílias em situação de vulnerabilidade (pobreza, acesso precário a serviços, fragilização de vínculos). Sua unidade é o CRAS, que oferta obrigatoriamente o PAIF, além de serviços como o de Convivência e Fortalecimento de Vínculos. O BPC e os benefícios eventuais integram a proteção básica.",
      "A proteção social ESPECIAL atende famílias e indivíduos em situação de risco pessoal e social, com direitos já violados (violência, abandono, abuso, trabalho infantil, situação de rua, cumprimento de medida socioeducativa). Divide-se em MÉDIA complexidade — quando há violação de direitos mas os vínculos familiares não foram rompidos; unidade de referência: CREAS, que oferta o PAEFI — e ALTA complexidade — quando é preciso proteção integral (moradia, alimentação, cuidados) porque os vínculos foram rompidos ou a pessoa está ameaçada, como no acolhimento institucional, nas repúblicas e na família acolhedora.",
      "Os serviços de cada nível foram padronizados pela Tipificação Nacional de Serviços Socioassistenciais (Resolução CNAS nº 109/2009). Pela LOAS, CRAS e CREAS são unidades públicas estatais: o CRAS é municipal e de base territorial, instalado em áreas de maior vulnerabilidade; o CREAS pode ter abrangência municipal, estadual ou regional.",
    ],
    pontosChave: [
      "PNAS: Resolução CNAS nº 145/2004. SUAS incorporado à LOAS pela Lei nº 12.435/2011.",
      "Seguranças da PNAS: sobrevivência (rendimento e autonomia), acolhida e convívio ou vivência familiar.",
      "Matricialidade sociofamiliar: a família é o foco; o território é a base de organização.",
      "Proteção básica: preventiva; CRAS; PAIF (exclusivo do CRAS); Serviço de Convivência e Fortalecimento de Vínculos; BPC e benefícios eventuais.",
      "Proteção especial de média complexidade: direitos violados, vínculos mantidos; CREAS; PAEFI; abordagem social; medidas socioeducativas em meio aberto (LA e PSC); Centro POP.",
      "Proteção especial de alta complexidade: vínculos rompidos; acolhimento institucional, república, família acolhedora, calamidades.",
      "Tipificação Nacional dos Serviços Socioassistenciais: Resolução CNAS nº 109/2009.",
      "CRAS e CREAS: unidades públicas estatais (não podem ser entidades privadas).",
    ],
    exemplos: [
      {
        titulo: "Onde a família deve ser atendida?",
        texto:
          "Família com renda baixa, filhos fora da escola e sem acesso a serviços, mas sem violência: proteção básica, no CRAS (PAIF). Criança vítima de violência doméstica que continua morando com a mãe protetora: proteção especial de média complexidade, no CREAS (PAEFI). Criança afastada da família por decisão judicial após abandono: alta complexidade (acolhimento institucional ou família acolhedora).",
      },
      {
        titulo: "Adolescente em liberdade assistida",
        texto:
          "Um adolescente cumpre medida socioeducativa de liberdade assistida, em meio aberto. O acompanhamento socioassistencial é feito pelo serviço de proteção a adolescentes em cumprimento de medida socioeducativa de LA e PSC, ofertado no CREAS (média complexidade). Se fosse internação, a execução caberia ao sistema socioeducativo, não ao CRAS.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "CRAS x CREAS",
        colunas: ["Aspecto", "CRAS", "CREAS"],
        linhas: [
          ["Nível de proteção", "Básica", "Especial de média complexidade"],
          ["Situação atendida", "Vulnerabilidade social; prevenção", "Risco pessoal e social com direitos violados"],
          ["Serviço principal", "PAIF", "PAEFI"],
          ["Abrangência", "Municipal, base territorial", "Municipal, estadual ou regional"],
          ["Vínculos familiares", "Fortalecer e prevenir rompimento", "Reconstruir e proteger (vínculos ainda não rompidos)"],
        ],
      },
      {
        tipo: "grupos",
        titulo: "Níveis de proteção do SUAS",
        grupos: [
          { nome: "Proteção social básica", itens: ["CRAS / PAIF", "Serviço de Convivência e Fortalecimento de Vínculos", "Proteção básica no domicílio para PcD e idosos", "BPC e benefícios eventuais"] },
          { nome: "Especial – média complexidade", itens: ["CREAS / PAEFI", "Abordagem social", "Medidas socioeducativas em meio aberto (LA e PSC)", "PcD, idosos e suas famílias", "Centro POP (população de rua)"] },
          { nome: "Especial – alta complexidade", itens: ["Acolhimento institucional", "República", "Família acolhedora", "Situações de calamidade e emergência"] },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o CRAS oferta o PAEFI ou atende situações de violação de direitos: o CRAS é da proteção básica (PAIF); o PAEFI é do CREAS.",
      "Classificar o acolhimento institucional como média complexidade: é alta complexidade.",
      "Afirmar que o BPC integra a proteção social especial: integra a proteção social BÁSICA.",
      "Dizer que a PNAS tem foco no indivíduo isoladamente: a matricialidade é sociofamiliar.",
      "Afirmar que CRAS e CREAS podem ser geridos por entidades privadas sem fins lucrativos: são unidades públicas estatais (entidades podem compor a rede, mas não ser CRAS/CREAS).",
    ],
    fundamentos: [
      "Resolução CNAS nº 145/2004 (PNAS)",
      "Resolução CNAS nº 109/2009 (Tipificação Nacional de Serviços Socioassistenciais)",
      "Lei nº 8.742/1993, arts. 6º a 6º-E e 24-A a 24-B (Lei nº 12.435/2011)",
    ],
  },
  {
    id: "as-nob-suas",
    titulo: "NOB/SUAS 2012: gestão, pactuação, financiamento e controle social",
    pool: "politicas-sociais",
    topicos: ["ana-as-3"],
    texto: [
      "A Norma Operacional Básica do SUAS de 2012 (NOB/SUAS 2012), aprovada pela Resolução CNAS nº 33/2012, disciplina a gestão da política de assistência social em todo o território nacional, substituindo a NOB/SUAS de 2005. Ela detalha como União, Estados, DF e Municípios se organizam, planejam, financiam e prestam contas no SUAS.",
      "Os princípios organizativos do SUAS são: universalidade (proteção a quem dela necessitar, sem discriminação), gratuidade (sem exigir contribuição ou contrapartida do usuário, ressalvada a participação prevista no Estatuto da Pessoa Idosa para instituições de longa permanência), integralidade da proteção social, intersetorialidade e equidade (respeito às diversidades regionais, culturais e territoriais, priorizando quem está em maior vulnerabilidade).",
      "A NOB/SUAS 2012 amplia as seguranças afiançadas pelo SUAS: acolhida; renda; convívio ou vivência familiar, comunitária e social; desenvolvimento de autonomia; e apoio e auxílio. Também reforça diretrizes como a primazia da responsabilidade do Estado, a descentralização, o financiamento partilhado entre os entes, a matricialidade sociofamiliar, a territorialização e o controle social com participação popular.",
      "Um dos instrumentos centrais é o Pacto de Aprimoramento do SUAS, por meio do qual se fixam prioridades e metas nacionais para Estados, DF e Municípios. Ele é pactuado na Comissão Intergestores Tripartite (CIT) a cada quatro anos, em sintonia com o Plano Plurianual, e acompanhado ao longo do período. A NOB também organiza os níveis de gestão a partir de indicadores de desenvolvimento do SUAS e valoriza a vigilância socioassistencial como função da política.",
      "No financiamento, a regra é o cofinanciamento com transferências fundo a fundo, regulares e automáticas, organizadas em blocos. As instâncias de negociação e pactuação são a CIT (nacional) e as Comissões Intergestores Bipartites (CIB, estaduais), compostas só por gestores; já as instâncias de deliberação e controle social são os Conselhos de Assistência Social (paritários) e as Conferências de Assistência Social.",
    ],
    pontosChave: [
      "NOB/SUAS 2012: Resolução CNAS nº 33/2012 (substituiu a NOB/SUAS 2005).",
      "Princípios organizativos: universalidade, gratuidade, integralidade da proteção social, intersetorialidade e equidade.",
      "Seguranças afiançadas: acolhida; renda; convívio familiar, comunitário e social; desenvolvimento de autonomia; apoio e auxílio.",
      "Pacto de Aprimoramento do SUAS: prioridades e metas pactuadas na CIT a cada 4 anos.",
      "Pactuação (só gestores): CIT (União, Estados e Municípios) e CIB (Estado e Municípios).",
      "Deliberação e controle social: Conselhos (paritários) e Conferências.",
      "Financiamento: cofinanciamento, transferências fundo a fundo, regulares e automáticas, em blocos.",
      "Vigilância socioassistencial: função da política, junto com proteção social e defesa de direitos.",
    ],
    exemplos: [
      {
        titulo: "Onde se decide o quê?",
        texto:
          "Para definir critérios de partilha de recursos federais entre os municípios, os gestores negociam na CIT, que pactua. Para aprovar o plano municipal de assistência social e fiscalizar sua execução, a competência é do Conselho Municipal de Assistência Social, que delibera. Trocar pactuação (comissões intergestores) com deliberação (conselhos) é erro comum.",
      },
      {
        titulo: "Gratuidade x coparticipação",
        texto:
          "Um serviço de convivência para idosos no CRAS não pode cobrar mensalidade, pela gratuidade. Já em uma instituição de longa permanência, o Estatuto da Pessoa Idosa admite cobrar participação do idoso de até 70% do benefício que ele recebe — exceção expressamente ressalvada pela NOB.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Instâncias do SUAS",
        grupos: [
          { nome: "Pactuação (gestores)", itens: ["CIT – Comissão Intergestores Tripartite", "CIB – Comissões Intergestores Bipartites"] },
          { nome: "Deliberação e controle social", itens: ["Conselhos de Assistência Social (paritários)", "Conferências de Assistência Social"] },
          { nome: "Planejamento", itens: ["Planos de Assistência Social", "Pacto de Aprimoramento do SUAS (quadrienal)"] },
          { nome: "Financiamento", itens: ["Fundos de Assistência Social", "Repasses fundo a fundo, regulares e automáticos", "Blocos de financiamento"] },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a NOB/SUAS vigente é de 2005: a vigente é a de 2012 (Resolução CNAS nº 33/2012).",
      "Afirmar que a CIT e a CIB são instâncias paritárias com a sociedade civil: são compostas apenas por gestores; paritários são os conselhos.",
      "Dizer que o Pacto de Aprimoramento é anual: é quadrienal, com acompanhamento periódico.",
      "Afirmar que a gratuidade não admite nenhuma exceção: há a ressalva da coparticipação em instituições de longa permanência prevista no Estatuto da Pessoa Idosa.",
      "Trocar seguranças: 'segurança de renda' e 'de acolhida' estão entre as afiançadas; 'segurança de emprego' não.",
    ],
    fundamentos: [
      "Resolução CNAS nº 33/2012 (NOB/SUAS 2012)",
      "Lei nº 8.742/1993, arts. 6º, 16 e 30",
      "Lei nº 10.741/2003, art. 35",
    ],
  },
]
