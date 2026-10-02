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
]
