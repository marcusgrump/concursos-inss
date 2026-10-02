import type { Aula } from "./types"

/**
 * Aulas de Serviço Social — conhecimentos específicos do Analista do Seguro
 * Social (formação em Serviço Social). Tópicos ana-ss-1 a ana-ss-13.
 */
export const AULAS_SERVICO_SOCIAL: Aula[] = [
  {
    id: "ss-aula-genese",
    titulo: "Gênese, institucionalização e significado social da profissão",
    pool: "servico-social",
    topicos: ["ana-ss-1"],
    texto: [
      "O Serviço Social não nasce da simples evolução da caridade. Na leitura histórico-crítica (Iamamoto, Netto, Montaño), a profissão surge quando o capitalismo, já na fase monopolista, precisa que o Estado intervenha de forma sistemática nas expressões da questão social por meio de políticas sociais. É essa demanda que cria um espaço no mercado de trabalho para um profissional especializado.",
      "No mundo, as raízes estão nas organizações de caridade do século XIX, como as Charity Organization Societies (COS), e na sistematização técnica feita por Mary Richmond, autora de 'Diagnóstico Social' (1917), base do chamado Serviço Social de Caso. Mais tarde, a influência norte-americana trouxe os métodos de caso, grupo e comunidade.",
      "No Brasil, a profissão surge nos anos 1930, ligada ao movimento católico de ação social e ao apostolado leigo. O Centro de Estudos e Ação Social (CEAS) de São Paulo deu origem à primeira escola de Serviço Social do país, em 1936. A base doutrinária inicial era a doutrina social da Igreja (encíclicas Rerum Novarum e Quadragesimo Anno) e o neotomismo, com forte viés moralizador.",
      "A institucionalização ocorre quando o Estado e o empresariado passam a contratar assistentes sociais, sobretudo a partir dos anos 1940, com a criação de grandes instituições assistenciais e de formação, como a LBA (1942), o SENAI (1942) e o SESI (1946), além da atuação nos institutos de previdência. A profissão foi regulamentada pela primeira vez em 1957 (Lei nº 3.252).",
      "Para Iamamoto, o assistente social é um trabalhador assalariado, inscrito na divisão social e técnica do trabalho. Embora a profissão seja regulamentada como liberal, sua autonomia é relativa, pois depende dos recursos e das condições oferecidas pelos empregadores. Sua atuação é contraditória: responde a interesses do capital e, ao mesmo tempo, a necessidades dos trabalhadores, o que abre espaço para fortalecer o polo do trabalho.",
    ],
    pontosChave: [
      "Mary Richmond: 'Diagnóstico Social' (1917) — sistematização do Serviço Social de Caso.",
      "Brasil: primeira escola em São Paulo, 1936, a partir do CEAS (iniciativa católica).",
      "Base inicial: doutrina social da Igreja e neotomismo; depois, influência norte-americana (caso, grupo e comunidade) e funcionalista.",
      "Institucionalização nos anos 1940: LBA (1942), SENAI (1942), SESI (1946).",
      "Primeira regulamentação da profissão: Lei nº 3.252/1957; a vigente é a Lei nº 8.662/1993.",
      "Iamamoto e Carvalho, 'Relações Sociais e Serviço Social no Brasil' (1982): profissão inserida na reprodução contraditória das relações sociais.",
      "Montaño distingue a tese endogenista (profissão como evolução da caridade) da tese histórico-crítica (profissão como produto da ordem monopolista).",
      "Assistente social: trabalhador assalariado, com autonomia relativa.",
    ],
    exemplos: [
      {
        titulo: "Autonomia relativa no INSS",
        texto:
          "Uma assistente social do INSS planeja reuniões socioeducativas sobre direitos previdenciários em comunidades rurais. Ela define conteúdo e metodologia com base em sua formação, mas depende de a instituição liberar veículo, agenda e espaço. Isso ilustra a autonomia relativa: há margem técnica e ética para decidir, condicionada pelas condições de trabalho dadas pelo empregador.",
      },
      {
        titulo: "Caráter contraditório da intervenção",
        texto:
          "Ao orientar um trabalhador afastado sobre seus direitos, o profissional atende a uma exigência institucional (organizar o fluxo de atendimento) e, ao mesmo tempo, amplia o acesso do usuário à proteção social. É a dupla face apontada por Iamamoto: a mesma ação pode reforçar a lógica institucional ou fortalecer o usuário como sujeito de direitos.",
      },
    ],
    esquemas: [
      {
        tipo: "linha-do-tempo",
        titulo: "Da gênese à institucionalização",
        itens: [
          { marco: "1917", texto: "Mary Richmond publica 'Diagnóstico Social'." },
          { marco: "1932", texto: "Criação do CEAS em São Paulo, ligado à Ação Católica." },
          { marco: "1936", texto: "Primeira escola de Serviço Social do Brasil (São Paulo)." },
          { marco: "Anos 1940", texto: "Institucionalização: LBA, SENAI, SESI e institutos de previdência contratam assistentes sociais." },
          { marco: "1957", texto: "Primeira lei de regulamentação da profissão (Lei nº 3.252)." },
        ],
      },
    ],
    pegadinhas: [
      "Afirmar que o Serviço Social é mera continuidade evolutiva da caridade e da filantropia: essa é a tese endogenista, criticada pela perspectiva histórico-crítica.",
      "Dizer que, por ser profissão liberal, o assistente social tem autonomia plena: a autonomia é relativa, pois ele é majoritariamente assalariado.",
      "Atribuir a gênese brasileira a uma iniciativa estatal: a origem é católica (CEAS); o Estado e o empresariado vêm depois, na institucionalização.",
      "Trocar a década: a profissão surge no Brasil nos anos 1930, não nos anos 1940 (que são de institucionalização).",
    ],
    fundamentos: [
      "Iamamoto e Carvalho, 'Relações Sociais e Serviço Social no Brasil'",
      "Netto, 'Capitalismo monopolista e Serviço Social'",
      "Montaño, 'A natureza do Serviço Social'",
      "Lei nº 3.252/1957 (revogada); Lei nº 8.662/1993",
    ],
  },
  {
    id: "ss-aula-renovacao",
    titulo: "Reconceituação e renovação do Serviço Social no Brasil",
    pool: "servico-social",
    topicos: ["ana-ss-2"],
    texto: [
      "O Movimento de Reconceituação foi um processo latino-americano, aproximadamente entre 1965 e 1975, de crítica ao Serviço Social tradicional, importado da Europa e dos Estados Unidos. Ele questionou a suposta neutralidade da profissão e buscou vinculá-la à realidade do continente, marcada pelo subdesenvolvimento e pela dependência.",
      "No Brasil, esse processo ocorreu sob a ditadura iniciada em 1964. José Paulo Netto, em 'Ditadura e Serviço Social', chama esse período de renovação e identifica nele três perspectivas (ou vertentes): a modernizadora, a de reatualização do conservadorismo e a de intenção de ruptura.",
      "A perspectiva modernizadora, expressa nos seminários de Araxá (1967) e Teresópolis (1970), promovidos pelo CBCISS, apoiou-se no estrutural-funcionalismo. Buscou adequar a profissão ao projeto desenvolvimentista do regime, com ênfase em técnica, planejamento e integração social, sem questionar a ordem vigente.",
      "A reatualização do conservadorismo, associada aos seminários de Sumaré (1978) e Alto da Boa Vista (1984), recorreu à fenomenologia. Valorizou a subjetividade, o diálogo e a dimensão psicossocial, mas, segundo Netto, recuperou sob roupagem nova a herança conservadora da profissão.",
      "A intenção de ruptura tem como marco inicial o Método BH (1972–1975), elaborado na Escola de Serviço Social da Universidade Católica de Minas Gerais. Buscou romper com o tradicionalismo por meio de aproximação à tradição marxista, de início com limites teóricos. Ganhou força nos anos 1980, com a pós-graduação e a obra de Iamamoto, e deu base ao projeto ético-político. O III CBAS, de 1979, o 'Congresso da Virada', marcou politicamente essa mudança de direção da categoria.",
    ],
    pontosChave: [
      "Reconceituação: América Latina, cerca de 1965 a 1975.",
      "Netto, 'Ditadura e Serviço Social': três perspectivas da renovação.",
      "Modernizadora: Araxá (1967) e Teresópolis (1970); estrutural-funcionalismo; desenvolvimentismo.",
      "Reatualização do conservadorismo: Sumaré (1978) e Alto da Boa Vista (1984); fenomenologia.",
      "Intenção de ruptura: Método BH (1972–1975), UCMG; aproximação ao marxismo.",
      "Congresso da Virada: III CBAS, São Paulo, 1979.",
      "Nos anos 1980, a intenção de ruptura se espraia pela categoria e fundamenta o Código de Ética de 1993.",
    ],
    exemplos: [
      {
        titulo: "Reconhecendo a vertente num enunciado",
        texto:
          "Se o item falar em 'adequar a profissão às exigências do desenvolvimento', 'planejamento' e 'integração', pense em perspectiva modernizadora. Se falar em 'vivência', 'pessoa', 'diálogo' e 'compreensão do sujeito', pense em reatualização do conservadorismo. Se falar em 'classes sociais', 'transformação' e 'crítica ao tradicionalismo', pense em intenção de ruptura.",
      },
      {
        titulo: "Reflexo no atendimento do INSS",
        texto:
          "Uma abordagem modernizadora trataria a segurada afastada como alguém a ser 'ajustado' às regras da instituição. Já a perspectiva herdeira da intenção de ruptura, que inspira a Matriz Teórico-Metodológica do INSS, enxerga a mesma segurada como sujeito de direitos e busca ampliar seu acesso à proteção previdenciária.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "As três perspectivas da renovação (Netto)",
        colunas: ["Perspectiva", "Marcos", "Base teórica", "Ideia central"],
        linhas: [
          ["Modernizadora", "Araxá (1967) e Teresópolis (1970)", "Estrutural-funcionalismo", "Adequar a profissão ao desenvolvimentismo, com técnica e planejamento"],
          ["Reatualização do conservadorismo", "Sumaré (1978) e Alto da Boa Vista (1984)", "Fenomenologia", "Ênfase na subjetividade e no psicossocial, mantendo a herança conservadora"],
          ["Intenção de ruptura", "Método BH (1972–1975)", "Tradição marxista", "Romper com o Serviço Social tradicional e vincular-se aos interesses dos trabalhadores"],
        ],
      },
      {
        tipo: "linha-do-tempo",
        titulo: "Marcos da renovação",
        itens: [
          { marco: "1965–1975", texto: "Movimento de Reconceituação na América Latina." },
          { marco: "1967", texto: "Seminário de Araxá (modernizadora)." },
          { marco: "1970", texto: "Seminário de Teresópolis (modernizadora)." },
          { marco: "1972–1975", texto: "Método BH (intenção de ruptura)." },
          { marco: "1978", texto: "Seminário de Sumaré (reatualização do conservadorismo)." },
          { marco: "1979", texto: "III CBAS — Congresso da Virada." },
          { marco: "1984", texto: "Seminário do Alto da Boa Vista (reatualização do conservadorismo)." },
          { marco: "1993", texto: "Código de Ética e Lei nº 8.662: consolidação da direção crítica." },
        ],
      },
    ],
    pegadinhas: [
      "Associar Araxá e Teresópolis à fenomenologia: a base é o estrutural-funcionalismo; a fenomenologia é da reatualização do conservadorismo.",
      "Dizer que o Método BH é expressão da perspectiva modernizadora: ele é o marco inicial da intenção de ruptura.",
      "Tratar a reconceituação como movimento homogêneo e já marxista desde o início: foi heterogêneo, e a aproximação ao marxismo foi inicialmente limitada.",
      "Localizar o Congresso da Virada em 1986 ou associá-lo ao Código de 1993: é o III CBAS, de 1979.",
    ],
    fundamentos: [
      "Netto, 'Ditadura e Serviço Social'",
      "Iamamoto, 'Renovação e conservadorismo no Serviço Social'",
    ],
  },
  {
    id: "ss-aula-questao-social",
    titulo: "Questão social, movimentos sociais e mudanças no mundo do trabalho",
    pool: "servico-social",
    topicos: ["ana-ss-3"],
    texto: [
      "Na tradição crítica, a questão social é o conjunto das expressões das desigualdades da sociedade capitalista. Sua raiz está na contradição entre a produção cada vez mais coletiva da riqueza e a apropriação privada de seus frutos (Iamamoto). Ela inclui também a rebeldia e a resistência dos trabalhadores, e não apenas a pobreza.",
      "A expressão surge no século XIX, quando o pauperismo dos trabalhadores industriais se torna questão política por causa das lutas operárias. Para Netto, a questão social é constitutiva do capitalismo: muda de forma ao longo do tempo, mas não pode ser eliminada sem que se supere a própria ordem do capital. Por isso, a tradição crítica rejeita a ideia de uma 'nova questão social'; o que existe são novas expressões da mesma questão.",
      "As expressões da questão social (desemprego, fome, violência, falta de moradia, adoecimento pelo trabalho) são a matéria-prima do trabalho do assistente social. O Estado responde a elas por meio de políticas sociais, em geral de forma fragmentada, tratando cada expressão como problema isolado.",
      "O mundo do trabalho mudou profundamente a partir da crise dos anos 1970. O modelo taylorista-fordista, de produção em massa e emprego estável, deu lugar à acumulação flexível (Harvey), inspirada no toyotismo. Isso trouxe reestruturação produtiva, terceirização, informalidade, precarização e, mais recentemente, o trabalho por plataformas. Ricardo Antunes descreve a 'classe-que-vive-do-trabalho' como mais fragmentada e heterogênea, mas não extinta.",
      "Os movimentos sociais são formas de ação coletiva que expressam demandas e conflitos. Ao lado dos movimentos clássicos, ligados ao trabalho (como o sindical), ganharam relevo os chamados 'novos movimentos sociais', ligados a gênero, raça, meio ambiente, moradia e terra. No Brasil, as lutas dos anos 1970 e 1980 (novo sindicalismo, comunidades eclesiais de base, movimentos populares urbanos e rurais) foram decisivas para a redemocratização e para os direitos inscritos na CF/1988.",
    ],
    pontosChave: [
      "Questão social (Iamamoto): expressões das desigualdades do capitalismo; raiz na produção social x apropriação privada da riqueza.",
      "Envolve desigualdade e também resistência/rebeldia dos trabalhadores.",
      "Netto: questão social é constitutiva do capitalismo; há novas expressões, não uma 'nova questão social'.",
      "Expressões da questão social = objeto/matéria-prima do trabalho profissional.",
      "Crise dos anos 1970: fordismo → acumulação flexível (Harvey), toyotismo, reestruturação produtiva.",
      "Antunes: 'classe-que-vive-do-trabalho', precarização, terceirização, informalidade.",
      "Novos movimentos sociais: gênero, raça, ambiente, moradia, terra; ao lado dos movimentos clássicos (sindical).",
    ],
    exemplos: [
      {
        titulo: "Uma expressão da questão social no atendimento",
        texto:
          "Um entregador por aplicativo, sem carteira assinada nem contribuição, sofre acidente e procura o INSS. O assistente social identifica que a falta de proteção não é falha individual, mas expressão da precarização do trabalho. Orienta sobre inscrição e contribuição, avalia acesso a outras políticas (como a assistência social) e registra a demanda como dado coletivo para subsidiar a instituição.",
      },
      {
        titulo: "Leitura crítica x leitura moralizadora",
        texto:
          "Numa reunião com trabalhadores rurais, a leitura moralizadora diria que eles 'não se organizaram' para comprovar a atividade. A leitura crítica relaciona a dificuldade à informalidade histórica do trabalho no campo e trabalha a socialização das informações sobre como comprovar a condição de segurado especial.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Fordismo x acumulação flexível",
        colunas: ["Aspecto", "Taylorismo-fordismo", "Acumulação flexível (toyotismo)"],
        linhas: [
          ["Produção", "Em massa, padronizada", "Enxuta, sob demanda (just in time)"],
          ["Vínculo de trabalho", "Emprego estável e formal", "Terceirização, contratos precários, informalidade"],
          ["Trabalhador", "Especializado em tarefa parcelar", "Polivalente, multifuncional"],
          ["Organização coletiva", "Sindicatos fortes", "Fragmentação e enfraquecimento sindical"],
        ],
      },
    ],
    pegadinhas: [
      "Reduzir a questão social à pobreza: ela inclui as desigualdades e também as lutas e resistências dos trabalhadores.",
      "Afirmar que a tradição crítica adota a tese da 'nova questão social': ela fala em novas expressões de uma questão constitutiva do capitalismo.",
      "Dizer que a reestruturação produtiva eliminou a classe trabalhadora: para Antunes, a classe ficou mais heterogênea e precarizada, não desapareceu.",
      "Confundir o objeto do trabalho profissional (expressões da questão social) com o 'cliente' ou com o 'problema individual' do usuário.",
    ],
    fundamentos: [
      "Iamamoto, 'O Serviço Social na contemporaneidade'",
      "Netto, 'Cinco notas a propósito da questão social'",
      "Antunes, 'Adeus ao trabalho?' e 'Os sentidos do trabalho'",
      "Harvey, 'Condição pós-moderna'",
      "Gohn, estudos sobre teorias dos movimentos sociais",
    ],
  },
  {
    id: "ss-aula-lei-8662",
    titulo: "Regulamentação da profissão: Lei nº 8.662/1993",
    pool: "servico-social",
    topicos: ["ana-ss-4"],
    texto: [
      "A Lei nº 8.662/1993 regulamenta a profissão de assistente social e substituiu a lei de 1957. Ela é, ao lado do Código de Ética de 1993, um dos pilares jurídicos do projeto ético-político da profissão.",
      "Para exercer a profissão, não basta o diploma de graduação em Serviço Social (ou diploma estrangeiro revalidado): é obrigatório o registro prévio no Conselho Regional de Serviço Social (CRESS) da área de atuação. A designação 'assistente social' é privativa de quem é habilitado na forma da lei.",
      "A distinção mais cobrada é entre competências (art. 4º) e atribuições privativas (art. 5º). Competências são atividades que o assistente social está habilitado a realizar, mas que outros profissionais também podem exercer, como elaborar e executar políticas sociais, orientar a população, prestar assessoria a movimentos sociais e realizar estudos socioeconômicos para concessão de benefícios. Atribuições privativas são exclusivas e se referem à 'matéria de Serviço Social'.",
      "Entre as atribuições privativas estão: elaborar vistorias, perícias, laudos, informações e pareceres sobre matéria de Serviço Social; supervisionar diretamente estagiários de Serviço Social; exercer o magistério de disciplinas de Serviço Social; dirigir cursos e unidades de ensino de Serviço Social; compor bancas de concurso que avaliem conhecimentos de Serviço Social; e dirigir serviços técnicos de Serviço Social.",
      "O conjunto CFESS/CRESS forma a entidade que disciplina, fiscaliza e defende o exercício profissional. O CFESS tem sede em Brasília e os CRESS atuam nas regiões. Desde 2010, a lei também fixa a jornada máxima de 30 horas semanais para o assistente social, sem redução salarial (art. 5º-A, incluído pela Lei nº 12.317/2010).",
    ],
    pontosChave: [
      "Exercício: diploma + registro prévio no CRESS (art. 2º).",
      "Art. 4º = competências (não exclusivas).",
      "Art. 5º = atribuições privativas (exclusivas; 'matéria de Serviço Social').",
      "Estudo socioeconômico para concessão de benefícios = competência (art. 4º, XI), não atribuição privativa.",
      "Pareceres, laudos e perícias em matéria de Serviço Social = atribuição privativa (art. 5º, IV).",
      "Supervisão direta de estagiário de Serviço Social = atribuição privativa (art. 5º, VI).",
      "Jornada: 30 horas semanais, sem redução de salário (art. 5º-A; Lei nº 12.317/2010).",
      "CFESS (federal, Brasília) e CRESS (regionais) disciplinam e fiscalizam o exercício profissional.",
    ],
    exemplos: [
      {
        titulo: "Competência ou atribuição privativa?",
        texto:
          "No INSS, um técnico administrativo pode fazer entrevista socioeconômica para cadastro de benefício, porque estudo socioeconômico para benefícios é competência (art. 4º), não exclusiva. Já o parecer social sobre a situação de um requerente, por tratar de matéria de Serviço Social, só pode ser emitido por assistente social (art. 5º).",
      },
      {
        titulo: "Estágio na agência",
        texto:
          "Uma universidade quer enviar estagiária de Serviço Social a uma agência onde não há assistente social lotado. O estágio não pode ocorrer: a supervisão direta de estagiário de Serviço Social é atribuição privativa, e o Código de Ética veda a supervisão em instituição sem assistente social para acompanhá-lo.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Competências (art. 4º) x atribuições privativas (art. 5º)",
        colunas: ["Competências — art. 4º", "Atribuições privativas — art. 5º"],
        linhas: [
          ["Elaborar, implementar, executar e avaliar políticas sociais", "Coordenar, elaborar, executar e avaliar estudos, pesquisas, planos e projetos na área de Serviço Social"],
          ["Encaminhar providências e orientar indivíduos, grupos e população", "Vistorias, perícias, laudos, informações e pareceres em matéria de Serviço Social"],
          ["Prestar assessoria e apoio a movimentos sociais em matéria de políticas sociais", "Assessoria e consultoria em matéria de Serviço Social"],
          ["Planejar, executar e avaliar pesquisas da realidade social", "Magistério de disciplinas de Serviço Social e direção de cursos da área"],
          ["Realizar estudos socioeconômicos para concessão de benefícios e serviços", "Supervisão direta de estagiários de Serviço Social"],
          ["Planejar, organizar e administrar benefícios e serviços sociais", "Compor bancas e comissões de concurso que aferem conhecimentos de Serviço Social"],
        ],
      },
    ],
    pegadinhas: [
      "Classificar o estudo socioeconômico para concessão de benefícios como atribuição privativa: é competência (art. 4º, XI).",
      "Dizer que o diploma registrado basta para exercer a profissão: exige-se também a inscrição prévia no CRESS.",
      "Afirmar que a assessoria a movimentos sociais em políticas sociais é privativa: está entre as competências.",
      "Confundir a jornada de 30 horas com 'redução salarial proporcional': a lei veda a redução do salário.",
    ],
    fundamentos: [
      "Lei nº 8.662/1993, arts. 2º, 3º, 4º, 5º, 5º-A e 6º",
      "Lei nº 12.317/2010 (jornada de 30 horas)",
    ],
  },
  {
    id: "ss-aula-tecnico-operativa",
    titulo: "Dimensão técnico-operativa: planejamento, instrumentos e técnicas",
    pool: "servico-social",
    topicos: ["ana-ss-5"],
    texto: [
      "O exercício profissional articula três dimensões: teórico-metodológica (como se lê a realidade), ético-política (para quê e a favor de quem se age) e técnico-operativa (como se age). A dimensão técnico-operativa é a mais visível, mas não é autônoma: os instrumentos só ganham sentido quando orientados pelas outras duas.",
      "Para Yolanda Guerra, instrumentalidade não é o mesmo que conjunto de instrumentos. É uma propriedade que a profissão adquire historicamente: a capacidade de transformar condições objetivas e subjetivas para alcançar finalidades. Os instrumentos e técnicas são parte disso, mas não o esgotam.",
      "O planejamento organiza a intervenção. Na tradição da área (Myrian Veras Baptista), costuma-se distinguir plano (diretrizes gerais), programa (conjunto articulado de ações) e projeto (unidade mais detalhada e delimitada). Planejar é também um ato político, pois envolve escolhas sobre prioridades e recursos.",
      "Os instrumentos costumam ser agrupados em dois blocos: os de contato direto (face a face), como entrevista, visita domiciliar, visita institucional, reunião, trabalho com grupos e observação; e os registros escritos, como relatório, parecer, diário de campo, livro de registro e encaminhamentos. A entrevista deve ser dialógica, com escuta qualificada; a visita domiciliar precisa de objetivo definido e respeito à privacidade, nunca servindo para fiscalizar a vida do usuário.",
      "O trabalho com redes busca articular serviços de diferentes políticas (intersetorialidade), evitando que o usuário seja empurrado de um lugar a outro. O trabalho com famílias, na perspectiva crítica (Regina Mioto), entende a família como instituição histórica e diversa, e recusa o 'familismo', isto é, a transferência para a família de responsabilidades de proteção que também cabem ao Estado.",
    ],
    pontosChave: [
      "Três dimensões: teórico-metodológica, ético-política e técnico-operativa (indissociáveis).",
      "Guerra: instrumentalidade ≠ instrumental técnico; é propriedade sócio-histórica da profissão.",
      "Planejamento: plano (geral) → programa → projeto (mais específico).",
      "Instrumentos face a face: entrevista, visita domiciliar e institucional, reunião, grupos, observação.",
      "Instrumentos escritos: relatório, parecer, diário de campo, livro de registro, encaminhamentos.",
      "Visita domiciliar: planejada, com objetivo, respeitando privacidade; nunca fiscalizatória.",
      "Redes e intersetorialidade: articular políticas para garantir acesso integral.",
      "Famílias (Mioto): crítica ao familismo e a modelos idealizados de família.",
    ],
    exemplos: [
      {
        titulo: "Entrevista social no INSS",
        texto:
          "Uma requerente de BPC chega insegura e com documentos incompletos. A assistente social conduz entrevista dialógica, explica o objetivo do atendimento, escuta a história de vida e de cuidado com o filho com deficiência e identifica barreiras de acesso. O foco não é 'checar mentiras', mas conhecer a situação e orientar sobre direitos.",
      },
      {
        titulo: "Articulação em rede",
        texto:
          "Durante o atendimento, o profissional percebe que o segurado idoso está sem acompanhamento de saúde e sem inscrição no CadÚnico. Em vez de apenas dizer 'procure o CRAS', ele faz encaminhamento por escrito, contata o serviço da assistência social do município e registra o retorno. Isso é trabalho em rede, com responsabilidade compartilhada.",
      },
      {
        titulo: "Grupo socioeducativo",
        texto:
          "A equipe de Serviço Social organiza reunião com trabalhadoras rurais sobre comprovação da atividade e acesso a benefícios. O grupo permite socializar informações, trocar experiências e fortalecer a organização coletiva, em vez de repetir orientações individuais.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Instrumentos técnico-operativos",
        grupos: [
          {
            nome: "Face a face (contato direto)",
            itens: ["Entrevista individual ou coletiva", "Visita domiciliar", "Visita institucional", "Reunião", "Trabalho com grupos", "Observação"],
          },
          {
            nome: "Por escrito (registro e documentação)",
            itens: ["Relatório social", "Parecer social", "Laudo social", "Diário de campo", "Livro de registro / prontuário", "Encaminhamento"],
          },
        ],
      },
    ],
    pegadinhas: [
      "Igualar instrumentalidade a 'conjunto de técnicas': para Guerra, são coisas distintas.",
      "Tratar a dimensão técnico-operativa como neutra ou independente das demais dimensões.",
      "Apresentar a visita domiciliar como instrumento de fiscalização ou comprovação de declarações: contraria o Código de Ética.",
      "Afirmar que o trabalho com famílias deve responsabilizá-las pela proteção de seus membros na ausência do Estado: é o familismo, criticado pela literatura.",
      "Inverter a hierarquia do planejamento: o projeto é o nível mais detalhado; o plano é o mais geral.",
    ],
    fundamentos: [
      "Guerra, 'A instrumentalidade do Serviço Social'",
      "Baptista, 'Planejamento social: intencionalidade e instrumentação'",
      "Mioto, estudos sobre família e trabalho social com famílias",
      "Resolução CFESS nº 273/1993, art. 3º",
    ],
  },
  {
    id: "ss-aula-documentos-557",
    titulo: "Estudo social, relatório, laudo e parecer; Resolução CFESS nº 557/2009",
    pool: "servico-social",
    topicos: ["ana-ss-5", "ana-ss-6"],
    texto: [
      "O estudo social é o processo metodológico de conhecimento aprofundado de uma situação social. Ele usa vários instrumentos (entrevistas, visitas, contatos com a rede, análise de documentos) e serve de base para os documentos escritos que o assistente social produz.",
      "O relatório social descreve e interpreta a situação estudada: quem é o usuário, quais suas condições de vida, que procedimentos foram feitos. O laudo social é o documento que registra o resultado de uma perícia social, muito usado no Judiciário. O parecer social é a manifestação técnica conclusiva, em geral sintética, fundamentada teórica, ética e tecnicamente; pode ser autônomo ou fechar um relatório ou laudo (Fávero).",
      "Laudos, perícias e pareceres em matéria de Serviço Social são atribuições privativas do assistente social (Lei nº 8.662/1993, art. 5º). Por isso, só ele pode assiná-los quanto à parte que diz respeito à sua área.",
      "A Resolução CFESS nº 557/2009 trata de pareceres, laudos e opiniões técnicas emitidos em conjunto com outros profissionais. A ideia central é preservar a especificidade do Serviço Social no trabalho em equipe: a discussão do caso pode ser multiprofissional, mas a conclusão do assistente social deve aparecer de forma própria.",
      "Pela Resolução, na opinião técnica conjunta, o assistente social deve destacar separadamente sua área de conhecimento, delimitar o âmbito de sua atuação, o objeto, os instrumentos utilizados e a análise social, e opinar somente sobre o que é de sua atribuição legal, assinando e informando o número de inscrição no CRESS.",
    ],
    pontosChave: [
      "Estudo social = processo de conhecimento (não é um documento em si).",
      "Relatório social = descreve e interpreta a situação.",
      "Laudo social = resultado de perícia social (típico do Judiciário).",
      "Parecer social = opinião técnica conclusiva; autônomo ou parte final de relatório/laudo.",
      "Perícia, laudo e parecer em matéria de Serviço Social = atribuição privativa (Lei nº 8.662/1993, art. 5º, IV).",
      "Resolução CFESS nº 557/2009: pareceres, laudos e opiniões técnicas conjuntos.",
      "Em documento conjunto: área destacada separadamente, âmbito delimitado, objeto, instrumentos, análise social, assinatura e nº do CRESS.",
      "Opina somente sobre matéria de sua atribuição legal.",
    ],
    exemplos: [
      {
        titulo: "Relatório x parecer num mesmo caso",
        texto:
          "Ao analisar a situação de um requerente com deficiência, a assistente social registra no relatório a composição familiar, a moradia, o acesso a serviços e as barreiras do território. Ao final, emite parecer: conclui, de forma fundamentada, como esses fatores restringem a participação social do requerente. O relatório descreve; o parecer conclui.",
      },
      {
        titulo: "Documento conjunto com outro profissional",
        texto:
          "Numa equipe com médico e psicólogo, pede-se um único documento sobre um caso. A assistente social pode participar da discussão, mas sua parte deve vir destacada, com a análise social, os instrumentos que usou e sua conclusão, assinada com nome e número do CRESS. Ela não opina sobre diagnóstico clínico, que é matéria de outra profissão.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Documentos técnicos do Serviço Social",
        colunas: ["Documento", "O que é", "Característica"],
        linhas: [
          ["Estudo social", "Processo de conhecimento da situação", "Base dos demais; usa vários instrumentos"],
          ["Relatório social", "Registro descritivo e interpretativo", "Mostra a situação e os procedimentos realizados"],
          ["Laudo social", "Resultado de perícia social", "Comum no Judiciário; conclui sobre o objeto periciado"],
          ["Parecer social", "Opinião técnica conclusiva", "Sintético; pode ser autônomo ou fechar relatório/laudo"],
        ],
      },
    ],
    pegadinhas: [
      "Tratar o estudo social como sinônimo de relatório: o estudo é o processo; o relatório é o registro.",
      "Dizer que o parecer social é apenas descritivo: ele é conclusivo e fundamentado.",
      "Afirmar que, em parecer conjunto, a opinião do assistente social se dilui na conclusão da equipe: a Resolução nº 557/2009 exige que sua área apareça destacada.",
      "Supor que o assistente social pode opinar sobre qualquer aspecto do caso em documento conjunto: só sobre matéria de sua atribuição.",
    ],
    fundamentos: [
      "Resolução CFESS nº 557/2009",
      "Lei nº 8.662/1993, art. 5º, IV",
      "CFESS (org.), 'O estudo social em perícias, laudos e pareceres técnicos' (Fávero e outros)",
    ],
  },
  {
    id: "ss-aula-previdencia",
    titulo: "Serviço Social na Previdência: arts. 88 e 89, parecer e avaliação social",
    pool: "servico-social",
    topicos: ["ana-ss-7"],
    texto: [
      "O Serviço Social está presente na previdência brasileira desde os antigos institutos de aposentadorias e pensões, nos anos 1940. Por muito tempo, sua atuação foi marcada pelo assistencialismo e pelo ajustamento do usuário às regras institucionais. Em meados da década de 1990, a Matriz Teórico-Metodológica do Serviço Social na Previdência Social reorientou o trabalho para a viabilização do acesso aos direitos, em sintonia com o projeto ético-político.",
      "O art. 88 da Lei nº 8.213/1991 define a competência do Serviço Social do INSS: esclarecer aos beneficiários seus direitos sociais e os meios de exercê-los e construir com eles soluções para os problemas que surgem da relação com a Previdência, dentro da instituição e na dinâmica da sociedade. A prioridade de atendimento é dos segurados em benefício por incapacidade temporária, e a atenção especial vai para aposentados e pensionistas.",
      "Para isso, a lei prevê intervenção técnica, assistência jurídica, ajuda material, recursos sociais, intercâmbio com empresas e pesquisa social, inclusive por convênios. Também prevê a participação do beneficiário no fortalecimento da política previdenciária, em articulação com associações e entidades de classe, e a assessoria técnica a Estados e Municípios. O art. 89 trata da habilitação e reabilitação profissional e social, obrigatória para os segurados (inclusive aposentados) e prestada aos dependentes conforme as possibilidades do órgão.",
      "O parecer social é um dos principais instrumentos do Serviço Social no INSS. Fundamentado em estudo social, ele subsidia o reconhecimento de direitos e as decisões da instituição quando a situação exige conhecimento aprofundado da realidade do requerente. Ao lado dele, a Matriz destaca três ações: socialização das informações previdenciárias e sociais, fortalecimento do coletivo e assessoria.",
      "Na avaliação da deficiência para o BPC, a lei exige avaliação médica (Perícia Médica Federal) e avaliação social (Serviço Social do INSS), com instrumentos baseados na CIF. A avaliação social examina fatores ambientais e as barreiras à atividade e à participação. Na aposentadoria da pessoa com deficiência (LC nº 142/2013), a avaliação também é médica e funcional, com o Índice de Funcionalidade Brasileiro (IFBr), que classifica a deficiência em grave, moderada ou leve.",
    ],
    pontosChave: [
      "Art. 88, caput: esclarecer direitos e meios de exercê-los; construir soluções com os beneficiários.",
      "Art. 88, § 1º: prioridade para segurados em benefício por incapacidade temporária; atenção especial a aposentados e pensionistas.",
      "Art. 88, § 2º: intervenção técnica, assistência jurídica, ajuda material, recursos sociais, intercâmbio com empresas, pesquisa social.",
      "Art. 88, § 3º: participação do beneficiário, com associações e entidades de classe.",
      "Art. 88, § 4º: assessoria técnica a Estados e Municípios.",
      "Art. 89: habilitação e reabilitação — obrigatória para segurados (inclusive aposentados); para dependentes, conforme as possibilidades.",
      "Matriz Teórico-Metodológica (meados dos anos 1990): socialização das informações, fortalecimento do coletivo, assessoria.",
      "BPC: avaliação médica (Perícia Médica Federal) + avaliação social (Serviço Social do INSS), com base na CIF.",
      "LC nº 142/2013: avaliação médica e funcional pelo IFBr; graus grave, moderada e leve.",
    ],
    exemplos: [
      {
        titulo: "Avaliação social de requerente do BPC",
        texto:
          "Um jovem com deficiência intelectual mora em área rural, sem transporte público, e a escola mais próxima não tem atendimento especializado. Na avaliação social, a assistente social registra essas barreiras ambientais e como elas limitam a participação dele na escola e na comunidade. Mesmo que o impedimento corporal pareça moderado, o contexto pode agravar a restrição, e é isso que o modelo biopsicossocial capta.",
      },
      {
        titulo: "Parecer social para subsidiar decisão",
        texto:
          "Num processo em que a documentação não basta para esclarecer a situação de vida do requerente, o servidor responsável pela análise solicita parecer social. A assistente social realiza estudo social (entrevista, visita, contato com a rede) e emite parecer conclusivo, fundamentado, que subsidia a decisão administrativa. O parecer não substitui a decisão, mas a qualifica.",
      },
      {
        titulo: "Socialização das informações",
        texto:
          "Em vez de atender um por um os trabalhadores de uma cooperativa com as mesmas dúvidas, o Serviço Social organiza reunião sobre contribuição, carência e benefícios. Isso é a socialização das informações prevista na Matriz, que também fortalece o coletivo.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Matriz Teórico-Metodológica: ações profissionais",
        grupos: [
          { nome: "Socialização das informações", itens: ["Orientação individual e coletiva sobre direitos", "Reuniões e palestras", "Materiais informativos"] },
          { nome: "Fortalecimento do coletivo", itens: ["Trabalho com grupos e organizações", "Articulação com movimentos e entidades", "Participação na política previdenciária"] },
          { nome: "Assessoria", itens: ["Apoio a movimentos sociais, entidades e conselhos", "Assessoria técnica a Estados e Municípios"] },
        ],
      },
    ],
    pegadinhas: [
      "Inverter as prioridades do art. 88, § 1º: prioridade é do benefício por incapacidade temporária; atenção especial é de aposentados e pensionistas.",
      "Dizer que a reabilitação profissional é obrigatória também para dependentes: para eles, depende das possibilidades do órgão.",
      "Afirmar que a deficiência no BPC é aferida só pela perícia médica: há também a avaliação social do Serviço Social do INSS.",
      "Associar a avaliação da LC nº 142/2013 à CID e ao modelo biomédico: o instrumento (IFBr) se baseia na CIF e no modelo biopsicossocial.",
      "Tratar a Matriz como reforço do papel assistencialista: ela rompe justamente com essa tradição.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 88 e 89",
      "Lei nº 8.742/1993, art. 20, § 6º; Decreto nº 6.214/2007, art. 16",
      "LC nº 142/2013, art. 4º; Portaria Interministerial nº 1/2014 (IFBr)",
      "Matriz Teórico-Metodológica do Serviço Social na Previdência Social",
    ],
  },
  {
    id: "ss-aula-etica",
    titulo: "Código de Ética de 1993 e projeto ético-político",
    pool: "servico-social",
    topicos: ["ana-ss-8"],
    texto: [
      "O Código de Ética do/a Assistente Social foi instituído pela Resolução CFESS nº 273/1993. Antes dele houve códigos em 1947, 1965, 1975 e 1986. O de 1986 já rompia com a ideia de neutralidade, mas o de 1993 deu maior fundamentação à ética, tendo a liberdade como valor central e articulando direitos, deveres e vedações de forma mais precisa.",
      "Os princípios fundamentais incluem: liberdade como valor ético central, com compromisso com autonomia, emancipação e plena expansão dos indivíduos; defesa intransigente dos direitos humanos e recusa do arbítrio e do autoritarismo; ampliação da cidadania; aprofundamento da democracia; equidade e justiça social; eliminação de preconceitos; garantia do pluralismo; opção por projeto profissional vinculado a uma nova ordem social sem dominação nem exploração; articulação com outras categorias e com as lutas dos trabalhadores; qualidade dos serviços; e exercício profissional sem discriminar nem ser discriminado.",
      "O sigilo profissional protege o usuário em tudo o que o assistente social souber no exercício da profissão. Ele não é absoluto: pode ser quebrado em situações graves que possam trazer prejuízo ao usuário, a terceiros ou à coletividade, e a revelação deve se limitar ao estritamente necessário. No trabalho em equipe, só se compartilham informações dentro desse limite.",
      "Na relação com a Justiça, o assistente social intimado deve comparecer e declarar que está obrigado ao sigilo; é vedado depor como testemunha sobre situação sigilosa do usuário, mesmo com autorização dele. Também é vedado aceitar nomeação como perito fora de sua competência. As penalidades previstas vão de multa e advertência (reservada ou pública) até suspensão e cassação do registro.",
      "O projeto ético-político, consolidado nos anos 1990, expressa a direção social hegemônica da profissão. Segundo Netto, materializa-se no Código de Ética de 1993, na Lei nº 8.662/1993 e nas Diretrizes Curriculares da ABEPSS (1996), além da produção de conhecimento e das entidades da categoria (CFESS/CRESS, ABEPSS, ENESSO). Vincula-se a um projeto societário que propõe uma ordem sem exploração de classe, etnia e gênero.",
    ],
    pontosChave: [
      "Resolução CFESS nº 273/1993; códigos anteriores: 1947, 1965, 1975 e 1986.",
      "Primeiro princípio: liberdade como valor ético central.",
      "Pluralismo: respeito às correntes democráticas, sem ecletismo nem neutralidade.",
      "Sigilo: quebra admitida em situações graves (prejuízo ao usuário, a terceiros ou à coletividade), só no estritamente necessário.",
      "Vedado depor como testemunha sobre situação sigilosa, mesmo com autorização do usuário; deve comparecer e declarar o sigilo.",
      "Vedado: policiamento de comportamentos, cercear decisões do usuário, bloquear acesso a serviços.",
      "Penalidades: multa, advertência reservada, advertência pública, suspensão e cassação do registro.",
      "Projeto ético-político: Código 1993 + Lei nº 8.662/1993 + Diretrizes Curriculares ABEPSS 1996.",
    ],
    exemplos: [
      {
        titulo: "Quando o sigilo pode ser quebrado",
        texto:
          "Durante atendimento, uma segurada idosa relata que o filho retém seu cartão do benefício e a agride. Há risco grave à usuária. A assistente social pode comunicar a situação aos órgãos de proteção (como Ministério Público ou rede de proteção à pessoa idosa), revelando apenas o necessário para a proteção, e não toda a história de vida da usuária.",
      },
      {
        titulo: "Intimação para depor",
        texto:
          "Um assistente social do INSS é intimado como testemunha num processo sobre a vida familiar de um usuário que atendeu. Mesmo que o usuário diga que autoriza, ele deve comparecer e declarar que está obrigado ao sigilo profissional, não revelando o que soube no atendimento.",
      },
      {
        titulo: "Respeito à decisão do usuário",
        texto:
          "Um segurado decide não aderir a uma orientação dada pelo Serviço Social sobre seu planejamento previdenciário. O profissional deve informar plenamente as consequências, mas respeitar a decisão, ainda que discorde. Usar a autoridade para pressioná-lo seria vedado.",
      },
    ],
    esquemas: [
      {
        tipo: "linha-do-tempo",
        titulo: "Códigos de Ética do Serviço Social",
        itens: [
          { marco: "1947", texto: "Primeiro código, de base doutrinária católica." },
          { marco: "1965", texto: "Revisão ainda conservadora, sob influência funcionalista." },
          { marco: "1975", texto: "Código de viés conservador, no contexto da ditadura." },
          { marco: "1986", texto: "Ruptura com a neutralidade e compromisso com a classe trabalhadora." },
          { marco: "1993", texto: "Código vigente (Res. CFESS nº 273): liberdade como valor central." },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o sigilo é absoluto: o Código admite a quebra em situações graves, limitada ao estritamente necessário.",
      "Afirmar que, com autorização do usuário, o assistente social pode depor como testemunha sobre situação sigilosa: é vedado mesmo autorizado.",
      "Afirmar que o Código de 1993 abandonou o pluralismo: o pluralismo é princípio fundamental.",
      "Trocar o valor central: é a liberdade, não a justiça social nem a igualdade.",
      "Dizer que o projeto ético-político é um documento único aprovado pelo CFESS: ele é um projeto coletivo que se materializa em vários componentes.",
    ],
    fundamentos: [
      "Resolução CFESS nº 273/1993 (Código de Ética), princípios fundamentais e arts. 3º a 6º, 15 a 20 e 24",
      "Netto, 'A construção do projeto ético-político do Serviço Social'",
      "Barroco, 'Ética e Serviço Social: fundamentos ontológicos'",
    ],
  },
  {
    id: "ss-aula-estado-politicas",
    titulo: "Estado, políticas públicas, Estado de bem-estar e cidadania regulada",
    pool: "servico-social",
    topicos: ["ana-ss-9"],
    texto: [
      "Políticas sociais são respostas do Estado às expressões da questão social. Na leitura crítica (Behring e Boschetti), elas são contraditórias: resultam das lutas dos trabalhadores por direitos e, ao mesmo tempo, ajudam a reproduzir a força de trabalho e a legitimar a ordem. Por isso, não são nem concessão pura do Estado nem simples conquista sem limites.",
      "As origens dos sistemas de proteção aparecem em dois modelos clássicos. O modelo bismarckiano (Alemanha, fim do século XIX) é de seguro social: contributivo e voltado a quem trabalha. O modelo beveridgiano (Plano Beveridge, Reino Unido, 1942) é universalista: proteção a todos, financiada por impostos. A seguridade brasileira combina os dois: previdência contributiva, saúde universal e assistência para quem dela necessitar.",
      "O Estado de bem-estar social se consolidou nos países centrais após a Segunda Guerra, apoiado nas ideias de Keynes, no pacto fordista e na busca do pleno emprego. Esping-Andersen classificou esses regimes em liberal, conservador-corporativo e social-democrata. A crise dos anos 1970 abriu espaço ao neoliberalismo, que defende Estado mínimo nas políticas sociais, focalização, privatização e flexibilização.",
      "T. H. Marshall descreveu a evolução da cidadania na Inglaterra: direitos civis (século XVIII), políticos (século XIX) e sociais (século XX). No Brasil, essa sequência não se repetiu. Wanderley Guilherme dos Santos chamou de 'cidadania regulada' o modelo da Era Vargas: era cidadão quem tinha ocupação reconhecida por lei, e a carteira de trabalho funcionava como certidão de cidadania. Quem estava no campo ou na informalidade ficava de fora.",
      "A previdência brasileira expressa essa trajetória: Caixas de Aposentadorias e Pensões (Lei Eloy Chaves, 1923), Institutos de Aposentadorias e Pensões por categoria (anos 1930), unificação no INPS (1966) e, por fim, a seguridade social da CF/1988, que ampliou direitos e a ideia de cidadania universal. O ciclo das políticas públicas costuma ser descrito em fases: agenda, formulação, implementação e avaliação.",
    ],
    pontosChave: [
      "Política social: contraditória — conquista dos trabalhadores e mecanismo de reprodução/legitimação da ordem.",
      "Bismarck (Alemanha, fim do séc. XIX): seguro social contributivo.",
      "Beveridge (Reino Unido, 1942): universalidade, financiamento por impostos.",
      "Welfare State: pós-1945, Keynes, fordismo, pleno emprego; crise nos anos 1970.",
      "Esping-Andersen: regimes liberal, conservador-corporativo e social-democrata.",
      "Marshall: direitos civis (XVIII), políticos (XIX), sociais (XX) — caso inglês.",
      "Cidadania regulada: Wanderley Guilherme dos Santos; ocupação regulamentada e carteira de trabalho.",
      "Brasil: Lei Eloy Chaves (1923) → IAPs (anos 1930) → INPS (1966) → seguridade social (CF/1988).",
    ],
    exemplos: [
      {
        titulo: "Cidadania regulada hoje",
        texto:
          "Um trabalhador que passou a vida na informalidade chega ao INSS aos 65 anos sem contribuições. Ele não tem direito à aposentadoria, mas pode acessar o BPC se cumprir os requisitos da assistência social. A cena mostra a herança da cidadania regulada (direito ligado ao trabalho formal) e a mudança trazida pela CF/1988, que incluiu a assistência como direito não contributivo.",
      },
      {
        titulo: "Focalização x universalização",
        texto:
          "Em debate sobre a política de saúde, um gestor propõe restringir o atendimento a quem comprove baixa renda. Essa é uma lógica de focalização, típica da agenda neoliberal, e contraria o caráter universal do SUS previsto na Constituição.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Modelos clássicos de proteção social",
        colunas: ["Aspecto", "Bismarckiano", "Beveridgiano"],
        linhas: [
          ["Origem", "Alemanha, fim do século XIX", "Reino Unido, Plano Beveridge (1942)"],
          ["Lógica", "Seguro social", "Seguridade universal"],
          ["Acesso", "Quem contribui (trabalhadores)", "Todos os cidadãos"],
          ["Financiamento", "Contribuições de empregados e empregadores", "Impostos (orçamento público)"],
          ["No Brasil", "Previdência social", "Saúde (SUS); assistência é não contributiva e seletiva"],
        ],
      },
    ],
    pegadinhas: [
      "Atribuir o conceito de cidadania regulada a Marshall: é de Wanderley Guilherme dos Santos.",
      "Dizer que o Plano Beveridge criou o seguro social contributivo: o modelo contributivo é bismarckiano; Beveridge é universalista.",
      "Afirmar que o Brasil seguiu a sequência de Marshall (civis, políticos, sociais): aqui os direitos sociais vieram antes da plena garantia de direitos civis e políticos.",
      "Tratar a política social apenas como conquista ou apenas como controle: a leitura crítica destaca seu caráter contraditório.",
    ],
    fundamentos: [
      "Behring e Boschetti, 'Política social: fundamentos e história'",
      "Santos, W. G., 'Cidadania e Justiça'",
      "Marshall, 'Cidadania, classe social e status'",
      "Esping-Andersen, 'As três economias políticas do Welfare State'",
    ],
  },
  {
    id: "ss-aula-participacao",
    titulo: "Participação e controle social; políticas de seguridade, educação e trabalho",
    pool: "servico-social",
    topicos: ["ana-ss-10"],
    texto: [
      "Na tradição democrática construída com a CF/1988, controle social significa o controle da sociedade sobre o Estado: a população participa da formulação, do acompanhamento e da fiscalização das políticas públicas. É o sentido oposto ao do controle do Estado (ou das classes dominantes) sobre a sociedade, que marcava o uso antigo da expressão.",
      "A Constituição fez da participação uma diretriz das políticas sociais. Na seguridade, prevê gestão democrática e descentralizada, com participação de trabalhadores, empregadores, aposentados e Governo nos órgãos colegiados (gestão quadripartite). Na saúde e na assistência social, a participação da comunidade e da população por meio de organizações representativas é diretriz expressa.",
      "Os principais espaços são os conselhos e as conferências. Na saúde, a Lei nº 8.142/1990 define os conselhos como permanentes e deliberativos, com representação dos usuários paritária em relação aos demais segmentos, e as conferências a cada quatro anos. Na assistência social, a LOAS prevê conselhos deliberativos, paritários entre governo e sociedade civil, como o Conselho Nacional de Assistência Social (CNAS). Na previdência, existe o Conselho Nacional de Previdência Social (CNPS), com representação do governo e da sociedade civil (aposentados e pensionistas, trabalhadores em atividade e empregadores).",
      "Autoras como Maria Inês Bravo e Raquel Raichelis mostram que os conselhos são espaços contraditórios: podem democratizar a gestão, mas também correm o risco de burocratização, cooptação e baixa representatividade. O assistente social atua neles como conselheiro, assessor ou trabalhador que socializa informações e fortalece a participação dos usuários.",
      "Educação e trabalho completam o tópico. A educação é direito de todos e dever do Estado e da família (CF, art. 205), e a Lei nº 13.935/2019 prevê serviços de psicologia e de Serviço Social nas redes públicas de educação básica. Na política de trabalho e emprego, destacam-se o seguro-desemprego e o Fundo de Amparo ao Trabalhador (FAT), gerido pelo CODEFAT, conselho tripartite e paritário, além da intermediação de mão de obra pelo SINE.",
    ],
    pontosChave: [
      "Controle social (sentido democrático): sociedade controla o Estado.",
      "Seguridade: gestão democrática, descentralizada e quadripartite (trabalhadores, empregadores, aposentados e Governo).",
      "Lei nº 8.142/1990: conselhos de saúde permanentes e deliberativos; usuários = paridade com os demais segmentos.",
      "Conferências de saúde: a cada quatro anos.",
      "LOAS: conselhos de assistência deliberativos e paritários (governo x sociedade civil); CNAS.",
      "CNPS: governo + sociedade civil (aposentados e pensionistas, trabalhadores ativos, empregadores).",
      "Lei nº 13.935/2019: psicólogos e assistentes sociais na educação básica pública.",
      "Trabalho e emprego: seguro-desemprego, FAT/CODEFAT (tripartite e paritário), SINE.",
    ],
    exemplos: [
      {
        titulo: "Assistente social no conselho municipal",
        texto:
          "Uma assistente social do INSS participa de reunião do conselho municipal de assistência social para apresentar dados sobre requerimentos de BPC no município e as principais barreiras de acesso. Ela não decide pelo conselho, mas qualifica o debate com informações, o que fortalece o controle social.",
      },
      {
        titulo: "Fortalecendo a participação dos usuários",
        texto:
          "Antes de uma conferência, o Serviço Social realiza reuniões com associações de aposentados para explicar como funcionam as etapas e como apresentar propostas. A ação socializa informação e amplia a participação, em vez de o profissional falar em nome dos usuários.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Espaços de controle social na seguridade",
        colunas: ["Política", "Base legal", "Característica dos conselhos"],
        linhas: [
          ["Saúde", "Lei nº 8.142/1990", "Permanentes e deliberativos; usuários com paridade frente aos demais segmentos; conferência a cada 4 anos"],
          ["Assistência social", "LOAS (Lei nº 8.742/1993)", "Deliberativos e paritários entre governo e sociedade civil (CNAS no plano nacional)"],
          ["Previdência", "Lei nº 8.213/1991, art. 3º", "CNPS com governo e sociedade civil (aposentados e pensionistas, trabalhadores, empregadores)"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que os conselhos de saúde são consultivos: são deliberativos e permanentes.",
      "Afirmar que as conferências de saúde são bienais: ocorrem a cada quatro anos.",
      "Descrever a paridade da saúde como 'metade governo, metade sociedade': a paridade é dos usuários em relação ao conjunto dos demais segmentos.",
      "Usar controle social no sentido de controle do Estado sobre a população: no sentido democrático da CF/1988, é o inverso.",
      "Chamar a gestão da seguridade de tripartite: a CF fala em gestão quadripartite (inclui aposentados).",
    ],
    fundamentos: [
      "CF/1988, arts. 194, parágrafo único, VII; 198, III; 204, II; 205",
      "Lei nº 8.142/1990, art. 1º",
      "Lei nº 8.742/1993 (LOAS), arts. 16 a 18",
      "Lei nº 8.213/1991, art. 3º",
      "Lei nº 13.935/2019",
      "Lei nº 7.998/1990 (seguro-desemprego e FAT)",
    ],
  },
  {
    id: "ss-aula-maria-da-penha",
    titulo: "Lei Maria da Penha (Lei nº 11.340/2006)",
    pool: "servico-social",
    topicos: ["ana-ss-11"],
    texto: [
      "A Lei nº 11.340/2006 cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher. Ela define essa violência como qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial.",
      "A lei vale em três âmbitos: a unidade doméstica (espaço de convívio, com ou sem vínculo familiar, inclusive pessoas esporadicamente agregadas), a família (pessoas que são ou se consideram aparentadas) e qualquer relação íntima de afeto, independentemente de coabitação. Essas relações independem de orientação sexual, de modo que a lei também protege mulheres em relações homoafetivas.",
      "São cinco as formas de violência: física, psicológica, sexual, patrimonial e moral. A violência patrimonial inclui reter, subtrair ou destruir documentos, bens e recursos da mulher; a moral inclui calúnia, difamação e injúria.",
      "As medidas protetivas de urgência (como afastamento do agressor do lar e proibição de aproximação) devem ser apreciadas pelo juiz em até 48 horas e podem ser concedidas independentemente de inquérito, boletim de ocorrência ou ação penal. Descumpri-las é crime. Aos crimes da lei não se aplica a Lei nº 9.099/1995 (juizados especiais criminais), e é vedada a aplicação de pena de cesta básica ou de pagamento isolado de multa.",
      "A lei prevê atendimento integral e intersetorial, com equipe multidisciplinar (psicossocial, jurídica e de saúde) nos Juizados de Violência Doméstica e Familiar contra a Mulher. Para a mulher trabalhadora, o juiz pode assegurar a manutenção do vínculo trabalhista por até seis meses quando for necessário o afastamento do local de trabalho. No INSS, o assistente social pode identificar situações de violência, orientar e articular a rede de proteção.",
    ],
    pontosChave: [
      "Lei nº 11.340/2006; violência baseada no gênero.",
      "Âmbitos: unidade doméstica, família e relação íntima de afeto (sem exigir coabitação).",
      "Independe de orientação sexual.",
      "Cinco formas: física, psicológica, sexual, patrimonial e moral.",
      "Medidas protetivas: juiz decide em até 48 horas; não dependem de inquérito, BO ou ação penal.",
      "Descumprir medida protetiva é crime (art. 24-A).",
      "Não se aplica a Lei nº 9.099/1995; vedadas penas de cesta básica e multa isolada.",
      "Manutenção do vínculo trabalhista por até 6 meses, se necessário o afastamento do trabalho.",
      "Renúncia à representação: só perante o juiz, em audiência designada para isso, antes do recebimento da denúncia (art. 16).",
    ],
    exemplos: [
      {
        titulo: "Violência patrimonial identificada no INSS",
        texto:
          "Uma beneficiária relata que o companheiro guarda seu cartão e documentos e decide como gastar o benefício. A assistente social reconhece violência patrimonial, orienta sobre direitos e serviços (delegacia especializada, centro de referência da mulher, Defensoria) e, com o consentimento dela e respeitando o sigilo, articula a rede de proteção.",
      },
      {
        titulo: "Relação sem coabitação",
        texto:
          "Uma segurada sofre ameaças do ex-namorado, com quem nunca morou. A Lei Maria da Penha se aplica, porque a relação íntima de afeto não exige coabitação. A orientação sobre medidas protetivas é cabível.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Formas de violência (art. 7º)",
        grupos: [
          { nome: "Física", itens: ["Ofensa à integridade ou à saúde corporal"] },
          { nome: "Psicológica", itens: ["Dano emocional, humilhação, ameaça, controle, isolamento"] },
          { nome: "Sexual", itens: ["Constranger a presenciar, manter ou participar de relação sexual não desejada", "Impedir o uso de método contraceptivo"] },
          { nome: "Patrimonial", itens: ["Reter, subtrair ou destruir bens, documentos, valores e recursos"] },
          { nome: "Moral", itens: ["Calúnia, difamação ou injúria"] },
        ],
      },
    ],
    pegadinhas: [
      "Exigir coabitação para aplicar a lei nas relações íntimas de afeto: não é exigida.",
      "Dizer que a lei não protege mulheres em relações homoafetivas: as relações independem de orientação sexual.",
      "Afirmar que as medidas protetivas dependem de boletim de ocorrência ou inquérito: não dependem.",
      "Dizer que crimes de violência doméstica contra a mulher podem ir ao juizado especial criminal (Lei nº 9.099/1995): a aplicação é vedada.",
      "Esquecer a violência patrimonial e a moral, citando apenas física, psicológica e sexual.",
    ],
    fundamentos: [
      "Lei nº 11.340/2006, arts. 5º, 7º, 9º, 16, 17, 18, 19, 24-A, 29 e 41",
      "Lei nº 13.641/2018 (crime de descumprimento de medida protetiva)",
      "Lei nº 14.550/2023 (medidas protetivas independentes de inquérito ou BO)",
    ],
  },
  {
    id: "ss-aula-cf88",
    titulo: "CF/1988: princípios fundamentais, direitos e ordem social",
    pool: "servico-social",
    topicos: ["ana-ss-12"],
    texto: [
      "A Constituição de 1988, chamada de 'Constituição Cidadã', é o marco jurídico da redemocratização e dos direitos sociais no Brasil. Ela é referência direta para o trabalho do assistente social, pois inscreve como direitos a saúde, a previdência, a assistência social e outros campos de atuação da profissão.",
      "Os fundamentos da República (art. 1º) são: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político. Os objetivos fundamentais (art. 3º) incluem construir uma sociedade livre, justa e solidária, garantir o desenvolvimento nacional, erradicar a pobreza e a marginalização, reduzir as desigualdades sociais e regionais e promover o bem de todos, sem preconceitos.",
      "Os direitos sociais (art. 6º) são: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. A EC nº 114/2021 acrescentou o direito a uma renda básica familiar para brasileiros em situação de vulnerabilidade, por meio de programa permanente de transferência de renda. As normas de direitos fundamentais têm aplicação imediata.",
      "A ordem social (art. 193) tem como base o primado do trabalho e como objetivo o bem-estar e a justiça sociais. A seguridade social (art. 194) integra saúde, previdência e assistência, com objetivos como universalidade da cobertura e do atendimento, uniformidade e equivalência entre populações urbanas e rurais, seletividade e distributividade, irredutibilidade do valor dos benefícios, equidade no custeio, diversidade da base de financiamento e gestão democrática e descentralizada.",
      "Cada política tem lógica própria: a saúde é direito de todos e dever do Estado (art. 196); a previdência é contributiva e de filiação obrigatória (art. 201); a assistência é prestada a quem dela necessitar, independentemente de contribuição, e prevê o BPC de um salário mínimo (art. 203, V). A ordem social ainda trata de educação, cultura, família, criança, adolescente e jovem (prioridade absoluta, art. 227), pessoa idosa (art. 230) e povos indígenas (art. 231).",
    ],
    pontosChave: [
      "Fundamentos (art. 1º): soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político.",
      "Objetivos (art. 3º): sociedade livre, justa e solidária; desenvolvimento; erradicar pobreza; reduzir desigualdades; bem de todos.",
      "Direitos sociais (art. 6º): 11 direitos + renda básica familiar (EC nº 114/2021).",
      "Ordem social (art. 193): base = primado do trabalho; objetivo = bem-estar e justiça sociais.",
      "Seguridade (art. 194) = saúde + previdência + assistência.",
      "Saúde: universal (art. 196). Previdência: contributiva e obrigatória (art. 201). Assistência: a quem necessitar, sem contribuição (art. 203).",
      "BPC: um salário mínimo à pessoa com deficiência e à pessoa idosa sem meios de prover a subsistência (art. 203, V).",
      "Criança, adolescente e jovem: prioridade absoluta (art. 227).",
    ],
    exemplos: [
      {
        titulo: "Lendo a lógica de cada política",
        texto:
          "Uma pessoa idosa sem contribuições procura o INSS. Ela não tem direito à aposentadoria (previdência é contributiva), mas pode ter direito ao BPC (assistência, sem contribuição) e é atendida no SUS (saúde universal). O assistente social usa a CF para mostrar que a seguridade combina lógicas diferentes.",
      },
      {
        titulo: "Fundamento x objetivo",
        texto:
          "Num item de prova: 'erradicar a pobreza é fundamento da República'. Está errado: é objetivo (art. 3º). Dignidade da pessoa humana, sim, é fundamento (art. 1º). Fundamentos são bases; objetivos são metas, normalmente expressos por verbos.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Tripé da seguridade social",
        colunas: ["Política", "Acesso", "Artigo"],
        linhas: [
          ["Saúde", "Direito de todos, dever do Estado; independe de contribuição", "Art. 196"],
          ["Previdência", "Caráter contributivo e filiação obrigatória", "Art. 201"],
          ["Assistência social", "A quem dela necessitar, independentemente de contribuição", "Art. 203"],
        ],
      },
    ],
    pegadinhas: [
      "Trocar fundamentos (art. 1º) por objetivos (art. 3º): erradicar a pobreza e reduzir desigualdades são objetivos.",
      "Dizer que a assistência social é universal como a saúde: ela é prestada a quem dela necessitar.",
      "Afirmar que a base da ordem social é a livre iniciativa: é o primado do trabalho.",
      "Esquecer direitos sociais incluídos por emenda, como alimentação, moradia, transporte e a renda básica familiar.",
      "Dizer que a previdência social, por integrar a seguridade, independe de contribuição: ela é contributiva; quem independe de contribuição são a saúde e a assistência.",
    ],
    fundamentos: [
      "CF/1988, arts. 1º, 3º, 5º, § 1º, 6º, 193, 194, 196, 201, 203, 205, 226, 227, 230 e 231",
      "EC nº 114/2021 (renda básica familiar)",
    ],
  },
  {
    id: "ss-aula-realidade-social",
    titulo: "Realidade social brasileira: desigualdade, pobreza, cidade, campo e demografia",
    pool: "servico-social",
    topicos: ["ana-ss-13"],
    texto: [
      "O Brasil está entre os países mais desiguais do mundo em distribuição de renda, medida, por exemplo, pelo índice de Gini. Essa desigualdade tem raízes na formação social: a escravidão, abolida em 1888 sem políticas de integração da população negra, a concentração da terra e um padrão de desenvolvimento que combinou modernização e exclusão.",
      "A pobreza não se resume à falta de renda. Amartya Sen a entende como privação de capacidades, o que fundamenta a abordagem multidimensional: contam também saúde, educação, moradia, saneamento, trabalho e acesso a serviços. A desigualdade tem cor e gênero: pessoas pretas e pardas e mulheres, sobretudo as chefes de família, estão super-representadas entre os mais pobres. Josué de Castro, em 'Geografia da Fome' (1946), mostrou a fome como fenômeno social e político, não natural.",
      "A questão urbana resulta de uma urbanização rápida e concentrada, que gerou periferias, favelas, déficit habitacional, problemas de mobilidade e de saneamento. O Estatuto da Cidade (Lei nº 10.257/2001) regulamentou a política urbana e a função social da propriedade. A questão agrária envolve concentração fundiária, conflitos pela terra e a luta por reforma agrária, prevista na CF/1988 para imóveis rurais que não cumprem sua função social.",
      "A dinâmica demográfica mudou: a queda da fecundidade e o aumento da expectativa de vida produzem envelhecimento populacional acelerado, mais rápido do que o vivido pelos países europeus. Isso amplia a demanda por previdência, saúde e cuidados de longa duração e pressiona o financiamento da seguridade. O mercado de trabalho, marcado por alta informalidade, deixa parcela grande da população fora da proteção previdenciária.",
      "Para o assistente social do INSS, essa realidade aparece todos os dias: trabalhadores informais sem cobertura, idosos pobres que dependem do BPC, mulheres sobrecarregadas pelo cuidado, populações rurais com dificuldade de comprovar atividade. Ler esses casos como expressões da questão social, e não como falhas individuais, é parte da competência profissional.",
    ],
    pontosChave: [
      "Brasil: um dos países mais desiguais do mundo (índice de Gini).",
      "Raízes: escravidão (abolição em 1888 sem integração), concentração fundiária, modernização excludente.",
      "Sen: pobreza como privação de capacidades → abordagem multidimensional.",
      "Desigualdade racial e de gênero: pretos, pardos e mulheres super-representados na pobreza.",
      "Josué de Castro, 'Geografia da Fome' (1946): fome como fenômeno social.",
      "Estatuto da Cidade: Lei nº 10.257/2001 (função social da propriedade urbana).",
      "Reforma agrária: imóvel rural que não cumpre função social (CF/1988).",
      "Transição demográfica: queda da fecundidade + aumento da expectativa de vida = envelhecimento acelerado.",
    ],
    exemplos: [
      {
        titulo: "Envelhecimento e cuidado",
        texto:
          "Uma mulher de 58 anos deixou o emprego formal para cuidar da mãe com demência e hoje não contribui. O caso mostra a sobreposição entre envelhecimento populacional, divisão sexual do trabalho de cuidado e desproteção previdenciária. O assistente social orienta sobre contribuição como facultativa (inclusive na modalidade de baixa renda, se cabível) e sobre serviços da rede para a pessoa idosa.",
      },
      {
        titulo: "Pobreza multidimensional na avaliação social",
        texto:
          "Na avaliação social para o BPC, a família tem renda baixa, mas o que mais restringe a participação do requerente é a falta de transporte acessível e de saneamento no bairro. Uma leitura só monetária deixaria de captar essas privações, que a abordagem multidimensional e o modelo da CIF ajudam a enxergar.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Transição demográfica e efeitos na proteção social",
        passos: [
          { titulo: "Queda da fecundidade", texto: "Menos nascimentos; famílias menores." },
          { titulo: "Aumento da expectativa de vida", texto: "Mais pessoas chegam e permanecem na velhice." },
          { titulo: "Envelhecimento populacional", texto: "Cresce a proporção de idosos em relação à população em idade ativa." },
          { titulo: "Pressão sobre as políticas", texto: "Mais demanda por previdência, saúde e cuidados de longa duração." },
        ],
      },
    ],
    pegadinhas: [
      "Definir pobreza só pela renda: a abordagem de Sen e a visão multidimensional incluem outras privações.",
      "Atribuir o envelhecimento apenas ao aumento da expectativa de vida: a queda da fecundidade é fator decisivo.",
      "Dizer que o envelhecimento brasileiro é mais lento que o europeu: é mais rápido.",
      "Tratar a fome e a pobreza como fenômenos naturais ou individuais: a tradição crítica (e Josué de Castro) as vê como produtos sociais e políticos.",
    ],
    fundamentos: [
      "Sen, 'Desenvolvimento como liberdade'",
      "Castro, Josué de, 'Geografia da Fome'",
      "Lei nº 10.257/2001 (Estatuto da Cidade)",
      "CF/1988, arts. 182 a 186",
    ],
  },
]
