import type { Aula } from "./types"

/** Aulas de Língua Portuguesa, Informática e Raciocínio Lógico (comuns aos dois cargos). */
export const AULAS_GERAIS: Aula[] = [
  // ───────────────────────── LÍNGUA PORTUGUESA ─────────────────────────
  {
    id: "ger-interpretacao",
    titulo: "Interpretação de textos: o que o texto diz, e só isso",
    pool: "portugues",
    topicos: ["tec-pt-1", "ana-pt-1"],
    texto: [
      "No Cebraspe, a interpretação de texto não pede que você concorde com o autor nem que use o que sabe sobre o assunto. Pede que você confira se a afirmação do item está sustentada pelas palavras do texto. A pergunta certa é sempre: onde, no texto, está escrito ou decorre logicamente isso?",
      "Há três níveis de leitura. Compreensão é captar o que está dito de forma explícita. Interpretação é extrair o que está implícito e decorre do que foi dito (inferência). Extrapolação é ir além do texto, acrescentando causas, consequências ou generalizações que o autor não afirmou. Os dois primeiros níveis tornam o item certo; a extrapolação o torna errado.",
      "Os itens costumam trabalhar de quatro formas: reproduzir uma ideia com outras palavras (paráfrase), trocar a relação entre as ideias (causa vira consequência, oposição vira adição), exagerar a força da afirmação (usar ‘sempre’, ‘nunca’, ‘todos’, ‘apenas’) ou atribuir ao autor uma opinião que é de outra pessoa citada no texto.",
      "A coesão ajuda a ler com precisão. Pronomes (‘este’, ‘o qual’, ‘lhe’), advérbios e expressões retomam termos anteriores; descobrir exatamente o que cada um retoma evita erros de sentido. Conectivos mostram a relação lógica: ‘porém’, ‘contudo’ e ‘mas’ indicam oposição; ‘portanto’ e ‘logo’, conclusão; ‘porque’ e ‘pois’ (anteposto ao verbo), explicação ou causa; ‘embora’ e ‘ainda que’, concessão.",
      "Na prática: leia o texto uma vez inteira para pegar a ideia central, depois leia o item com atenção às palavras-chave e volte ao trecho correspondente. Se você precisa ‘imaginar’ algo para tornar o item verdadeiro, ele provavelmente é uma extrapolação e está errado.",
    ],
    pontosChave: [
      "Julgue pelo que está no texto, não pelo que você sabe ou acha do assunto.",
      "Inferência legítima decorre do que foi dito; extrapolação acrescenta algo que o texto não afirma.",
      "Palavras absolutas (sempre, nunca, todos, exclusivamente, apenas) exigem cuidado: o texto precisa sustentar essa totalidade.",
      "Trocar a relação lógica entre as ideias (causa por consequência, oposição por adição) muda o sentido e torna o item errado.",
      "Distinga a opinião do autor da opinião de terceiros citados e de fatos apresentados como exemplo.",
      "Reescrita só é correta se preservar o sentido original e a correção gramatical; trocar um conectivo por outro de valor diferente altera o sentido.",
      "Conectivos adversativos (mas, porém, contudo, todavia, no entanto) opõem ideias; concessivos (embora, ainda que, mesmo que) admitem algo contrário sem anular a ideia principal.",
      "Para saber o que um pronome retoma, procure o termo mais próximo anterior que concorde em gênero e número.",
    ],
    exemplos: [
      {
        titulo: "Inferência certa x extrapolação",
        texto: "Texto: ‘Muitos segurados desconhecem seus direitos, o que os leva a deixar de requerer benefícios.’ Item certo: ‘A falta de conhecimento dos direitos pode levar segurados a não solicitar benefícios.’ Item errado: ‘A maioria dos segurados deixa de requerer benefícios por falta de interesse.’ O texto fala em ‘muitos’ (não ‘a maioria’) e aponta o desconhecimento como causa, não o desinteresse.",
      },
      {
        titulo: "Troca da relação lógica",
        texto: "Texto: ‘O atendimento melhorou, embora as filas ainda sejam longas.’ Item errado: ‘As filas longas são consequência da melhoria do atendimento.’ ‘Embora’ indica concessão (um fato contrário ao esperado), e não relação de causa e consequência.",
      },
      {
        titulo: "Reescrita com troca de conectivo",
        texto: "Original: ‘O servidor foi atencioso; contudo, não resolveu o problema.’ Reescrita errada: ‘O servidor foi atencioso; portanto, não resolveu o problema.’ ‘Contudo’ é adversativo; ‘portanto’ é conclusivo. A troca inventa uma relação de causa que o texto não tem.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Valor semântico dos conectivos mais cobrados",
        colunas: ["Relação", "Conectivos", "Exemplo"],
        linhas: [
          ["Oposição", "mas, porém, contudo, todavia, entretanto, no entanto", "Estudou, mas não passou."],
          ["Concessão", "embora, ainda que, mesmo que, conquanto, apesar de", "Embora estudasse, não passou."],
          ["Conclusão", "portanto, logo, por isso, pois (depois do verbo)", "Estudou; logo, passou."],
          ["Causa/explicação", "porque, já que, visto que, pois (antes do verbo)", "Passou porque estudou."],
          ["Condição", "se, caso, desde que, contanto que", "Se estudar, passará."],
          ["Finalidade", "para, a fim de que", "Estuda para passar."],
        ],
      },
    ],
    pegadinhas: [
      "Item que troca ‘muitos’ ou ‘alguns’ por ‘todos’ ou ‘a maioria’: o exagero transforma uma afirmação certa em errada.",
      "Item que apresenta como opinião do autor algo que o texto atribui a outra pessoa ou apenas menciona para criticar.",
      "Item que inverte causa e consequência, mantendo as mesmas palavras do texto para parecer fiel.",
      "Reescrita que parece elegante, mas troca um conectivo (porém por logo, embora por porque) e muda o sentido.",
      "Item que traz informação verdadeira no mundo real, mas ausente no texto: o julgamento é só sobre o texto.",
    ],
    fundamentos: [
      "Gramática normativa: coesão e coerência textuais (conectivos e referenciação)",
      "Padrão de itens Certo/Errado do Cebraspe (julgamento de paráfrases, inferências e reescritas)",
    ],
  },
  {
    id: "ger-tipologia",
    titulo: "Tipologia textual e gêneros",
    pool: "portugues",
    topicos: ["tec-pt-2", "ana-pt-2"],
    texto: [
      "Tipo textual é a estrutura que organiza o texto conforme o seu objetivo principal. Os tipos tradicionais são narração, descrição, dissertação e injunção (instrução). Gênero textual é a forma concreta que o texto assume na vida social: notícia, carta, ofício, receita, bula, artigo de opinião, requerimento. Um mesmo gênero pode misturar tipos, mas costuma ter um tipo predominante.",
      "Na narração, há uma sequência de acontecimentos no tempo, com personagens, ambiente e enredo; predominam verbos de ação e marcas de tempo. Na descrição, o texto retrata características de pessoas, lugares ou objetos, e predominam verbos de ligação, adjetivos e o presente ou o imperfeito do indicativo.",
      "A dissertação trata de ideias, e se divide em expositiva (apresenta e explica um assunto, sem defender posição) e argumentativa (defende uma tese com argumentos). O texto dissertativo-argumentativo costuma ter introdução com a tese, desenvolvimento com argumentos e conclusão. O Cebraspe pergunta muito pela finalidade: convencer, informar, instruir.",
      "A injunção (ou texto instrucional) orienta o leitor a fazer algo: receitas, manuais, regulamentos e instruções. Marcam o tipo os verbos no imperativo ou no infinitivo e a segunda pessoa, como em ‘Preencha o formulário’ e ‘Anexar os documentos’.",
    ],
    pontosChave: [
      "Tipo textual: narração, descrição, dissertação (expositiva ou argumentativa) e injunção.",
      "Gênero textual: notícia, ofício, carta, artigo de opinião, requerimento, bula e outros; o gênero é diferente do tipo.",
      "Narração: sequência de fatos no tempo, com personagens e enredo.",
      "Descrição: retrato de características; predominam adjetivos e verbos de ligação.",
      "Dissertação argumentativa: defende uma tese com argumentos; a expositiva só explica, sem defender posição.",
      "Injunção: instrui o leitor, com verbos no imperativo ou no infinitivo.",
      "Um texto pode misturar tipos; julgue pelo tipo predominante e pela finalidade principal.",
      "Marcas linguísticas ajudam: tempo verbal, adjetivação, conectivos de oposição e conclusão (argumentação).",
    ],
    exemplos: [
      {
        titulo: "Identificando o tipo",
        texto: "‘O servidor abriu a pasta, conferiu os documentos e, em seguida, chamou o próximo segurado.’ É narração: sucessão de ações no tempo. ‘A agência é espaçosa, bem iluminada e dotada de rampas de acesso.’ É descrição: características de um lugar, com verbos de ligação e adjetivos.",
      },
      {
        titulo: "Dissertativo-argumentativo",
        texto: "‘A digitalização dos serviços é desejável, mas deve ser acompanhada de orientação aos idosos; do contrário, a tecnologia excluirá quem mais precisa do atendimento.’ Há tese (digitalização com orientação), ressalva (mas) e argumento de conclusão (do contrário). Predomina a argumentação.",
      },
      {
        titulo: "Injunção",
        texto: "‘Para solicitar o benefício, acesse o aplicativo, escolha a opção desejada e anexe os documentos.’ O objetivo é orientar o leitor a executar passos: texto injuntivo, com imperativo.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Tipos textuais: finalidade e marcas",
        colunas: ["Tipo", "Finalidade", "Marcas típicas"],
        linhas: [
          ["Narração", "Contar fatos", "Verbos de ação, tempo e lugar, personagens"],
          ["Descrição", "Caracterizar", "Adjetivos, verbos de ligação, comparações"],
          ["Dissertação expositiva", "Explicar, informar", "Definições, dados, linguagem impessoal"],
          ["Dissertação argumentativa", "Convencer", "Tese, argumentos, conectivos de oposição e conclusão"],
          ["Injunção", "Orientar a ação", "Imperativo ou infinitivo, segunda pessoa"],
        ],
      },
    ],
    pegadinhas: [
      "Confundir tipo com gênero: ‘ofício’ é gênero; ‘injunção’, ‘narração’ e ‘descrição’ são tipos.",
      "Chamar de argumentativo um texto que apenas expõe informações, sem defender tese.",
      "Considerar narrativo qualquer texto com verbo no passado: narração exige sequência de fatos e enredo.",
      "Afirmar que um texto tem um só tipo: os gêneros costumam misturar tipos, e o item pede o predominante.",
    ],
    fundamentos: [
      "Teoria dos tipos e gêneros textuais (Marcuschi; Bakhtin)",
      "Gramática normativa: estruturas do texto dissertativo, narrativo, descritivo e injuntivo",
    ],
  },
  {
    id: "ger-ortografia-acentuacao",
    titulo: "Ortografia oficial e acentuação gráfica (Novo Acordo)",
    pool: "portugues",
    topicos: ["tec-pt-3", "tec-pt-4", "ana-pt-3", "ana-pt-4"],
    texto: [
      "O Acordo Ortográfico de 1990 uniformizou a escrita nos países de língua portuguesa e, no Brasil, tornou-se plenamente obrigatório em 2016. As mudanças mais cobradas são: fim do trema (frequente, linguiça, cinquenta), fim do acento em ditongos abertos ‘ei’ e ‘oi’ de palavras paroxítonas (ideia, assembleia, jiboia, heroico) e fim do circunflexo em ‘oo’ e ‘ee’ (voo, enjoo, leem, veem).",
      "A acentuação começa pela sílaba tônica. As oxítonas (tônica na última sílaba) são acentuadas quando terminam em a, e, o, em, seguidas ou não de ‘s’: sofá, café, cipó, também, parabéns. As paroxítonas (tônica na penúltima) são acentuadas quando terminam em l, n, r, x, ps, i(s), um/uns, us, ã(s), ão(s) e ditongos: fácil, hífen, caráter, tórax, bíceps, táxi, álbum, ônus, órfã, órgão, história. As proparoxítonas (tônica na antepenúltima) são sempre acentuadas: médico, ônibus, lâmpada.",
      "Alguns acentos independem da tonicidade. Monossílabos tônicos terminados em a, e, o recebem acento (pá, pé, só, já, três). Os verbos ter, vir e derivados diferenciam singular e plural pelo acento: ele tem/vem, eles têm/vêm; ele contém, eles contêm. Permanecem os acentos diferenciais de ‘pôde’ (passado) e ‘pôr’ (verbo), que o Acordo manteve. Perderam o acento diferencial pelo, pera, polo e para (verbo).",
      "Em ortografia, o Cebraspe cobra sobretudo os pares confundíveis: ‘por que’, ‘porque’, ‘porquê’ e ‘por quê’; ‘mal’ e ‘mau’; ‘a fim de’ e ‘afim’; ‘há’ e ‘a’; ‘cessão’, ‘sessão’ e ‘seção’. Também aparece o hífen: usa-se com prefixos terminados em vogal quando a palavra seguinte começa pela mesma vogal (micro-ondas, anti-inflamatório) ou por ‘h’ (anti-higiênico), e com ex-, vice-, pós-, pré- e pró- tônicos (ex-diretor, pós-graduação). Prefixo terminado em vogal seguido de ‘r’ ou ‘s’ dobra a consoante: antirrábico, ultrassom.",
    ],
    pontosChave: [
      "Acordo de 1990: sem trema (exceto em nomes próprios estrangeiros e derivados, como Müller) e sem acento em ‘ideia’, ‘assembleia’, ‘jiboia’, ‘heroico’.",
      "Ditongos abertos continuam acentuados em oxítonas e monossílabos: herói, papéis, troféu, céu, dói.",
      "‘Voo’, ‘enjoo’, ‘leem’, ‘veem’, ‘creem’ e ‘deem’ não têm mais circunflexo.",
      "Oxítonas: acento se terminam em a, e, o, em (+ s); paroxítonas: acento se terminam em l, n, r, x, ps, i(s), um/uns, us, ã(s), ão(s) ou ditongo; proparoxítonas: sempre.",
      "‘Têm’ e ‘vêm’ (plural) x ‘tem’ e ‘vem’ (singular); ‘contêm’ x ‘contém’; ‘mantêm’ x ‘mantém’.",
      "‘Pôde’ (passado) x ‘pode’ (presente) e ‘pôr’ (verbo) x ‘por’ (preposição) mantêm o acento diferencial.",
      "Hiato com ‘i’ ou ‘u’ tônicos: acentua-se (saúde, país, balaústre), salvo quando o ‘i/u’ vem depois de ditongo em paroxítona (feiura, baiuca).",
      "Porquês: ‘por que’ (pergunta, ou preposição + que), ‘porque’ (causa), ‘porquê’ (substantivo: o porquê) e ‘por quê’ (fim de frase).",
      "Hífen: prefixo + mesma vogal ou ‘h’; ex-, vice-, pré-/pós-/pró- tônicos; prefixo vogal + r/s dobra a letra (ultrassom, antirreligioso).",
    ],
    exemplos: [
      {
        titulo: "Frases certas x erradas (acento e trema)",
        texto: "Certo: ‘A ideia foi aprovada na assembleia.’ Errado: ‘A idéia foi aprovada na assembléia.’ Certo: ‘Os servidores têm prazo; o chefe tem autoridade.’ Errado: ‘Os servidores tem prazo.’ Certo: ‘Ela enjoou durante o voo.’ Errado: ‘Ela enjoou durante o vôo.’",
      },
      {
        titulo: "Porquês",
        texto: "‘Por que o sistema está lento?’ (pergunta). ‘O sistema está lento porque há muitos acessos.’ (causa). ‘Ninguém soube explicar o porquê da falha.’ (substantivo, antecedido de artigo). ‘A falha ocorreu, mas ninguém sabe por quê.’ (fim de frase).",
      },
      {
        titulo: "Mal x mau, a fim de x afim, há x a",
        texto: "‘Ele agiu mal’ (contrário de bem) / ‘Ele é um mau servidor’ (contrário de bom). ‘Estudou a fim de passar’ (finalidade) / ‘Os dois têm interesses afins’ (semelhantes). ‘Concluiu o curso há dois anos’ (passado) / ‘Concluirá o curso daqui a dois anos’ (futuro).",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Acentuação pela posição da sílaba tônica",
        colunas: ["Classe", "Quando acentua", "Exemplos"],
        linhas: [
          ["Oxítona", "Termina em a(s), e(s), o(s), em, ens", "sofá, café, cipó, armazém, parabéns"],
          ["Paroxítona", "Termina em l, n, r, x, ps, i(s), um/uns, us, ã(s), ão(s), ditongo", "fácil, hífen, caráter, tórax, bíceps, táxi, álbum, ônus, órfã, órgão, série"],
          ["Proparoxítona", "Sempre", "médico, ônibus, lâmpada, física"],
          ["Monossílabo tônico", "Terminado em a(s), e(s), o(s)", "pá, pé, só, já, três"],
        ],
      },
      {
        tipo: "tabela",
        titulo: "Pares que a banca adora",
        colunas: ["Forma", "Uso", "Exemplo"],
        linhas: [
          ["por que", "Pergunta ou preposição + que", "Por que ele saiu? / Ignoro o motivo por que saiu."],
          ["porque", "Conjunção causal ou explicativa", "Saiu porque tinha pressa."],
          ["porquê", "Substantivo (vem com artigo ou pronome)", "Explicou o porquê."],
          ["por quê", "Final de frase", "Saiu, mas não disse por quê."],
          ["mal / mau", "Contrário de bem / contrário de bom", "Passou mal. / Mau hábito."],
          ["cessão / sessão / seção", "Ceder / reunião / divisão", "Cessão de direitos; sessão plenária; seção de benefícios."],
        ],
      },
    ],
    pegadinhas: [
      "Item que mantém acento em ‘ideia’, ‘assembleia’, ‘heroico’ e ‘voo’ como se ainda fosse correto: esses acentos foram suprimidos.",
      "Item que tira o acento de ‘herói’, ‘papéis’ e ‘troféu’ por analogia com ‘ideia’: nas oxítonas o acento permanece.",
      "‘Eles tem’ ou ‘eles vem’ sem circunflexo: o plural leva ‘têm’ e ‘vêm’.",
      "Uso de ‘porque’ no lugar de ‘por que’ em perguntas diretas, ou ‘mau’ no lugar de ‘mal’ (e vice-versa).",
      "Dizer que ‘hífen’ perde o acento: o singular ‘hífen’ é acentuado; só o plural ‘hifens’ não é.",
    ],
    fundamentos: [
      "Acordo Ortográfico da Língua Portuguesa de 1990 (Decreto nº 6.583/2008; obrigatoriedade a partir de 2016)",
      "Vocabulário Ortográfico da Língua Portuguesa (VOLP), Academia Brasileira de Letras",
    ],
  },
  {
    id: "ger-classes-palavras",
    titulo: "Classes de palavras, formação, flexão e verbos",
    pool: "portugues",
    topicos: ["tec-pt-5", "ana-pt-5"],
    texto: [
      "As palavras da língua portuguesa se dividem em dez classes: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição. A classe de uma palavra depende da função que ela exerce na frase, e não da forma isolada: ‘como’ pode ser conjunção, advérbio ou verbo, conforme o contexto.",
      "As palavras variáveis (substantivo, adjetivo, artigo, numeral, pronome e verbo) flexionam em gênero, número, pessoa ou tempo; as invariáveis (advérbio, preposição, conjunção e interjeição) não flexionam. Preposições ligam termos e estabelecem relações (a, de, em, por, com, para); conjunções ligam orações ou termos de mesma função; o advérbio modifica verbo, adjetivo ou outro advérbio.",
      "Duas palavrinhas rendem muitas questões. O ‘que’ pode ser pronome relativo (o livro que li, equivale a ‘o qual’), conjunção integrante (disse que viria) ou advérbio de intensidade (que bonito!, quando equivale a ‘quão’). O ‘se’ pode ser pronome reflexivo (feriu-se), partícula apassivadora (vendem-se casas), índice de indeterminação do sujeito (precisa-se de técnicos), conjunção integrante (não sei se virá) ou condicional (se chover, adiaremos).",
      "Na formação de palavras, a derivação cria palavras por prefixo (infeliz), sufixo (felizmente), prefixo e sufixo ao mesmo tempo (parassíntese: entardecer) ou por redução (derivação regressiva: o ataque, de atacar). A composição une radicais: por justaposição (guarda-chuva) ou por aglutinação, em que há perda de sons (planalto, de plano + alto). No plural dos compostos, varia só o segundo elemento quando o primeiro é verbo (os guarda-chuvas, os beija-flores) e variam os dois quando são substantivo mais substantivo ou substantivo mais adjetivo (couves-flores, amores-perfeitos).",
      "Nos verbos, os modos são indicativo (certeza), subjuntivo (dúvida, hipótese) e imperativo (ordem, pedido). Cuidado com o futuro do subjuntivo dos verbos irregulares, que a banca adora: ‘se eu vir’ (de ver), ‘quando ele vier’ (de vir), ‘se ele mantiver’ (de manter), ‘se ele propuser’ (de propor). Formas como ‘se ele manter’ ou ‘quando eu ver’ são erradas.",
    ],
    pontosChave: [
      "Dez classes: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção, interjeição.",
      "Invariáveis: advérbio, preposição, conjunção e interjeição.",
      "A classe depende da função na frase: ‘mais’ pode ser advérbio (mais rápido) ou pronome (mais pessoas).",
      "‘Que’ relativo pode ser trocado por ‘o qual’; ‘que’ integrante introduz oração que completa um verbo ou nome.",
      "‘Se’ apassivador: o verbo concorda com o sujeito paciente (vendem-se casas); ‘se’ índice de indeterminação: verbo na 3ª pessoa do singular, com verbo sem objeto direto (precisa-se de técnicos).",
      "Derivação: prefixal, sufixal, parassintética, regressiva e imprópria (muda a classe sem mudar a forma: o jantar).",
      "Composição: justaposição (guarda-chuva) e aglutinação (planalto, aguardente).",
      "Plural de composto: verbo + substantivo, varia só o segundo (os beija-flores); substantivo + substantivo, variam os dois (couves-flores).",
      "Futuro do subjuntivo: ver, vir, manter, propor fazem ‘vir’, ‘vier’, ‘mantiver’, ‘propuser’.",
      "Plurais em -ão: cidadãos, mãos, irmãos; pães, cães, capitães; ações, botões.",
    ],
    exemplos: [
      {
        titulo: "Classificando ‘que’ e ‘se’",
        texto: "‘O benefício que ele pediu foi concedido’: ‘que’ é pronome relativo (= o qual). ‘O servidor disse que o sistema caiu’: ‘que’ é conjunção integrante (introduz o objeto direto). ‘Vendem-se imóveis’: ‘se’ apassivador (imóveis é o sujeito, por isso ‘vendem’). ‘Precisa-se de técnicos’: ‘se’ indica sujeito indeterminado, e o verbo fica no singular.",
      },
      {
        titulo: "Futuro do subjuntivo",
        texto: "Errado: ‘Se o governo manter o prazo, ninguém será prejudicado.’ Certo: ‘Se o governo mantiver o prazo, ninguém será prejudicado.’ Errado: ‘Quando você ver o resultado...’ Certo: ‘Quando você vir o resultado...’ O futuro do subjuntivo segue a forma da 3ª pessoa do plural do pretérito perfeito: mantiveram, mantiver; viram, vir; vieram, vier.",
      },
      {
        titulo: "Plural de compostos",
        texto: "‘O guarda-chuva’ leva ao plural ‘os guarda-chuvas’ (guarda é verbo: invariável). ‘A couve-flor’ leva ao plural ‘as couves-flores’ (substantivo mais substantivo: os dois variam). ‘A segunda-feira’ leva ao plural ‘as segundas-feiras’.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "As dez classes de palavras",
        colunas: ["Classe", "Função", "Exemplo"],
        linhas: [
          ["Substantivo", "Nomeia seres, ações, sentimentos", "segurado, benefício"],
          ["Adjetivo", "Caracteriza o substantivo", "justo, previdenciário"],
          ["Artigo", "Define ou indefine o substantivo", "o, a, um, uma"],
          ["Numeral", "Indica quantidade ou ordem", "dois, segundo, triplo"],
          ["Pronome", "Substitui ou acompanha o nome", "ele, meu, este, quem"],
          ["Verbo", "Indica ação, estado, fenômeno", "requer, é, chove"],
          ["Advérbio", "Modifica verbo, adjetivo ou advérbio", "muito, bem, hoje"],
          ["Preposição", "Liga termos e dá relação entre eles", "de, para, com"],
          ["Conjunção", "Liga orações ou termos de mesma função", "e, mas, porque"],
          ["Interjeição", "Exprime emoção", "ai!, oba!"],
        ],
      },
    ],
    pegadinhas: [
      "Item que classifica ‘que’ sempre como conjunção: é preciso olhar a função (relativo substitui um termo; integrante só introduz oração).",
      "Verbo no singular com ‘se’ apassivador e sujeito plural (‘vende-se casas’): o certo é ‘vendem-se casas’.",
      "Futuro do subjuntivo incorreto de verbos compostos (‘se ele propor’, ‘se manter’, ‘quando eu ver’).",
      "Afirmar que a derivação imprópria muda a forma da palavra: ela só muda a classe (o ‘não’, o ‘jantar’).",
      "Trocar ‘advérbio’ por ‘adjetivo’ em frases como ‘Eles falaram alto’ (alto modifica o verbo: advérbio, e por isso não varia).",
    ],
    fundamentos: [
      "Gramática normativa da língua portuguesa: morfologia e formação de palavras",
      "Nomenclatura Gramatical Brasileira (Portaria MEC nº 36/1959)",
    ],
  },
  {
    id: "ger-crase",
    titulo: "Emprego do sinal indicativo de crase",
    pool: "portugues",
    topicos: ["tec-pt-6", "ana-pt-6"],
    texto: [
      "Crase é a fusão da preposição ‘a’ com o artigo definido feminino ‘a(s)’ ou com o início de pronomes como ‘aquele’, ‘aquela’, ‘aquilo’ e ‘a qual’. O acento grave indica essa fusão. Logo, só há crase se, ao mesmo tempo, o termo regente pedir a preposição ‘a’ e o termo seguinte aceitar o artigo ‘a’.",
      "Um teste prático: troque a palavra feminina por uma masculina. Se aparecer ‘ao’, há crase com a palavra feminina (‘Fui à agência’ / ‘Fui ao posto’). Outro teste, para verbos de movimento: ‘vou a, volto da’ gera crase (volto da Bahia, então ‘vou à Bahia’); ‘vou a, volto de’ não gera (volto de Roma, então ‘vou a Roma’).",
      "A crase é obrigatória diante de palavras femininas com artigo quando há preposição ‘a’ (‘Referiu-se à proposta’), nas locuções adverbiais, prepositivas e conjuntivas femininas (à noite, às vezes, à vista, à medida que), nas horas determinadas (às 8h, à uma hora) e antes de ‘aquele(s)’, ‘aquela(s)’ e ‘aquilo’ quando o termo regente pede ‘a’ (‘Refiro-me àquela decisão’).",
      "A crase é proibida antes de palavras masculinas (a pé, a cavalo), de verbos (começou a chover), de pronomes pessoais, de demonstrativos como ‘esta’ e ‘essa’, de indefinidos (a toda hora, a qualquer momento), de pronomes de tratamento (a Vossa Excelência, exceto senhora e senhorita), de palavras no plural sem artigo (refiro-me a pessoas), e de expressões com palavras repetidas (cara a cara, gota a gota).",
      "É facultativa antes de pronome possessivo feminino singular (‘Referi-me à/a sua proposta’), antes de nome próprio feminino de pessoa (‘Entreguei o documento à/a Maria’) e depois de ‘até’ (‘Fui até à/a praça’).",
    ],
    pontosChave: [
      "Crase = preposição ‘a’ + artigo ‘a(s)’ (ou ‘a’ inicial de aquele, aquela, aquilo, a qual).",
      "Teste do masculino: se, com palavra masculina, aparece ‘ao’, a feminina leva crase.",
      "Obrigatória em locuções femininas: à noite, à tarde, às vezes, às pressas, à vista, à direita, à esquerda, à medida que.",
      "Horas determinadas: ‘às 8h’, ‘à uma hora’; mas ‘a partir das 8h’ não leva crase (a locução é ‘a partir de’, e o ‘a’ faz parte dela).",
      "Proibida antes de verbo, masculino, pronome pessoal, demonstrativo (esta, essa), indefinido, pronome de tratamento e expressões de palavras repetidas.",
      "‘A Vossa Excelência’, ‘a Vossa Senhoria’: sem crase; ‘à senhora’, ‘à senhorita’, ‘à dona’: com crase.",
      "Facultativa: possessivo feminino singular; nome próprio feminino de pessoa; ‘até a(a)’.",
      "‘A distância’ sem determinação não leva crase; com a distância determinada, leva: ‘à distância de 20 metros’.",
      "Lugares: crase se o lugar aceita artigo (à Bahia, à Itália); sem artigo, não (a Roma, a Brasília).",
    ],
    exemplos: [
      {
        titulo: "Casos obrigatórios",
        texto: "‘O segurado compareceu à agência pela manhã e foi atendido à tarde.’ Compareceu a + a agência = à agência (locução ‘à tarde’ também). ‘Refiro-me àquele processo’: refiro-me a + aquele. ‘O prazo termina às 17h.’",
      },
      {
        titulo: "Casos proibidos",
        texto: "‘Ele começou a falar sem dizer a ninguém’: antes de verbo e antes de indefinido. ‘Entregou o documento a ela’: pronome pessoal. ‘Solicito a Vossa Senhoria que analise o pedido’: pronome de tratamento. ‘Fez referência a questões antigas’: palavra feminina no plural sem artigo.",
      },
      {
        titulo: "Casos facultativos e o teste do ‘volto da’",
        texto: "‘Escreveu a/à sua mãe’ e ‘Entregou o documento a/à Ana’: ambos corretos. Lugares: ‘Vou à Bahia’ (volto da Bahia); ‘Vou a Salvador’ (volto de Salvador); ‘Vou a Brasília’, mas ‘Vou à Brasília dos anos 60’ (com especificação, o nome aceita artigo).",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Crase: obrigatória, proibida e facultativa",
        grupos: [
          {
            nome: "Obrigatória",
            itens: [
              "Palavra feminina com artigo + termo que exige ‘a’ (refiro-me à diretora)",
              "Locuções femininas: à noite, às vezes, à vista, às pressas, à medida que",
              "Horas determinadas: às 8h, à uma hora",
              "Antes de aquele(s), aquela(s), aquilo, a qual, as quais, quando há ‘a’ regido",
            ],
          },
          {
            nome: "Proibida",
            itens: [
              "Antes de masculino: a pé, a cavalo",
              "Antes de verbo: começou a chover",
              "Antes de pronome pessoal, demonstrativo (esta, essa), indefinido e de tratamento (exceto senhora, senhorita)",
              "Expressões com palavra repetida: cara a cara, gota a gota",
              "Palavra feminina plural sem artigo: refiro-me a pessoas",
            ],
          },
          {
            nome: "Facultativa",
            itens: [
              "Pronome possessivo feminino singular: à/a minha casa",
              "Nome próprio feminino de pessoa: à/a Maria",
              "Depois de ‘até’: até à/a escola",
            ],
          },
        ],
      },
    ],
    pegadinhas: [
      "Crase antes de verbo (‘disposto à colaborar’): é sempre erro, porque verbo não aceita artigo.",
      "Crase antes de palavra masculina: só ocorre quando ‘à moda de’ ou ‘à maneira de’ está subentendido (‘sapatos à Luís XV’); fora desse caso, é erro.",
      "Crase em ‘a Vossa Excelência’ e ‘a Vossa Senhoria’: não existe, pois pronome de tratamento não aceita artigo.",
      "Crase em ‘a toda hora’, ‘a qualquer momento’, ‘a cada dia’: proibida diante de indefinidos.",
      "Item que marca crase antes de ‘casa’ e ‘terra’ sem determinante: ‘Cheguei a casa’ (sem crase); ‘Cheguei à casa de meus pais’ (com crase, pois há determinante).",
    ],
    fundamentos: [
      "Gramática normativa: regras de emprego da crase (Bechara; Cegalla)",
      "Manual de Redação da Presidência da República, 3ª ed. (uso de pronomes de tratamento)",
    ],
  },
  {
    id: "ger-sintaxe",
    titulo: "Sintaxe da oração e do período",
    pool: "portugues",
    topicos: ["tec-pt-7", "ana-pt-7"],
    texto: [
      "Sintaxe estuda a função das palavras e das orações. Em uma oração há os termos essenciais (sujeito e predicado), os integrantes (objeto direto, objeto indireto, complemento nominal, agente da passiva) e os acessórios (adjunto adnominal, adjunto adverbial, aposto e vocativo). Para analisar, comece pelo verbo: ele organiza a oração.",
      "O sujeito pode ser simples, composto, oculto (identificado pela desinência do verbo), indeterminado (não se quer ou não se pode identificar: ‘Roubaram o carro’; ‘Precisa-se de técnicos’) ou inexistente (oração sem sujeito). São sem sujeito: verbos que indicam fenômenos da natureza (chove), ‘haver’ no sentido de existir ou de tempo decorrido (‘Há vagas’, ‘Há dois anos’) e ‘fazer’ ou ‘ser’ indicando tempo (‘Faz dois anos’, ‘É tarde’).",
      "O objeto direto completa o verbo sem preposição obrigatória; o indireto, com preposição. O complemento nominal completa o sentido de um substantivo, adjetivo ou advérbio, e tem sentido passivo (‘a necessidade de reforma’; ‘fiel à lei’). O adjunto adnominal modifica um substantivo e não o completa (‘casa do vizinho’, ‘livros novos’). O agente da passiva é quem pratica a ação na voz passiva (‘O ato foi praticado pelo servidor’).",
      "No período composto, as orações podem ser coordenadas (independentes entre si: aditivas, adversativas, alternativas, conclusivas e explicativas) ou subordinadas (uma depende da outra). As subordinadas são substantivas (exercem função de substantivo: subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa, apositiva), adjetivas (restritivas ou explicativas) e adverbiais (causal, concessiva, condicional, final, temporal, conformativa, comparativa, consecutiva e proporcional).",
      "A vírgula nas adjetivas muda o sentido: ‘Os servidores que faltaram foram advertidos’ (restritiva: só alguns faltaram e foram advertidos) é diferente de ‘Os servidores, que faltaram, foram advertidos’ (explicativa: todos faltaram).",
    ],
    pontosChave: [
      "Termos essenciais: sujeito e predicado; integrantes: objetos, complemento nominal, agente da passiva; acessórios: adjuntos, aposto, vocativo.",
      "Orações sem sujeito: fenômenos da natureza, ‘haver’ (existir ou tempo) e ‘fazer/ser’ indicando tempo.",
      "Sujeito indeterminado: verbo na 3ª pessoa do plural sem referente, ou verbo sem objeto direto + ‘se’ (precisa-se de, vive-se bem).",
      "Voz passiva sintética: verbo transitivo direto + ‘se’, e o verbo concorda com o sujeito paciente.",
      "Complemento nominal: completa nome (substantivo, adjetivo ou advérbio) e tem valor de paciente; adjunto adnominal: modifica o substantivo sem complementá-lo.",
      "Predicado nominal: verbo de ligação + predicativo do sujeito; verbal: verbo significativo; verbo-nominal: os dois juntos.",
      "Coordenadas: aditivas (e, nem), adversativas (mas, porém), alternativas (ou, ora…ora), conclusivas (logo, portanto), explicativas (pois, que).",
      "Subordinadas adjetivas restritivas (sem vírgula) limitam o antecedente; as explicativas (entre vírgulas) apenas acrescentam informação.",
      "Não se separa com vírgula sujeito de verbo, verbo de complemento e oração subordinada substantiva da principal.",
    ],
    exemplos: [
      {
        titulo: "Classificando termos",
        texto: "‘O pedido foi analisado pelo servidor do setor.’ Sujeito: ‘O pedido’ (paciente); ‘pelo servidor do setor’: agente da passiva. ‘A necessidade de reforma é evidente.’ ‘de reforma’: complemento nominal. ‘Casa do vizinho’: ‘do vizinho’ é adjunto adnominal.",
      },
      {
        titulo: "Orações sem sujeito e sujeito indeterminado",
        texto: "‘Há muitos processos parados’: ‘há’ = existem; oração sem sujeito, e o verbo fica no singular (errado: ‘Hão muitos processos’). ‘Faz dois anos que ele se aposentou’: oração sem sujeito. ‘Atenderam o segurado com atraso’: sujeito indeterminado (3ª pessoa do plural, sem referente).",
      },
      {
        titulo: "Classificando orações",
        texto: "‘É necessário que todos cumpram o prazo.’ A oração ‘que todos cumpram o prazo’ é subordinada substantiva subjetiva (equivale a ‘o cumprimento do prazo é necessário’). ‘Embora estivesse cansado, atendeu a todos.’ A primeira é subordinada adverbial concessiva. ‘O requerimento que foi protocolado ontem está incompleto.’ Subordinada adjetiva restritiva.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Termos da oração",
        grupos: [
          { nome: "Essenciais", itens: ["Sujeito (simples, composto, oculto, indeterminado)", "Predicado (verbal, nominal, verbo-nominal)"] },
          { nome: "Integrantes", itens: ["Objeto direto e objeto indireto", "Complemento nominal", "Agente da passiva"] },
          { nome: "Acessórios", itens: ["Adjunto adnominal", "Adjunto adverbial", "Aposto", "Vocativo"] },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Orações subordinadas adverbiais",
        colunas: ["Tipo", "Ideia", "Conjunção típica"],
        linhas: [
          ["Causal", "Causa", "porque, já que, visto que"],
          ["Concessiva", "Oposição que não impede", "embora, ainda que, mesmo que"],
          ["Condicional", "Condição", "se, caso, desde que"],
          ["Final", "Finalidade", "para que, a fim de que"],
          ["Temporal", "Tempo", "quando, assim que, enquanto"],
          ["Conformativa", "Conformidade", "conforme, segundo, como"],
          ["Consecutiva", "Consequência", "tão... que, de modo que"],
          ["Proporcional", "Proporção", "à medida que, quanto mais... mais"],
        ],
      },
    ],
    pegadinhas: [
      "‘Hão muitos candidatos’ ou ‘Haviam vagas’: ‘haver’ no sentido de existir é impessoal, e fica no singular (há, havia).",
      "Confundir complemento nominal com adjunto adnominal: se o termo ‘completa’ o sentido do nome com valor passivo, é complemento nominal.",
      "Separar sujeito e verbo com vírgula (‘Os candidatos, serão convocados’) ou separar o verbo do complemento.",
      "Tratar adjetiva explicativa (entre vírgulas) como restritiva e vice-versa: a vírgula altera o sentido.",
      "Chamar de adjunto adverbial um termo com valor de agente da passiva (‘pelo servidor’), ou de objeto direto o que tem preposição obrigatória.",
    ],
    fundamentos: [
      "Gramática normativa da língua portuguesa: sintaxe do período simples e composto",
      "Nomenclatura Gramatical Brasileira (Portaria MEC nº 36/1959)",
    ],
  },
  {
    id: "ger-pontuacao",
    titulo: "Pontuação: vírgula, ponto e vírgula e dois-pontos",
    pool: "portugues",
    topicos: ["tec-pt-8", "ana-pt-8"],
    texto: [
      "A pontuação organiza o texto e pode mudar o sentido de uma frase. ‘Não, espere’ e ‘Não espere’ dizem coisas opostas. Por isso o Cebraspe cobra tanto a vírgula, em itens que perguntam se determinada vírgula é obrigatória, facultativa ou proibida, e se a retirada dela altera o sentido.",
      "A vírgula é usada para separar elementos de uma enumeração (compareceram o chefe, o técnico e o analista), para isolar o vocativo (‘Senhor Diretor, solicito...’), o aposto (‘Maria, servidora do setor, atendeu...’), expressões explicativas (isto é, por exemplo), o adjunto adverbial deslocado (‘Na semana passada, o prazo terminou’), as orações adjetivas explicativas e as conjunções adversativas e conclusivas intercaladas (‘O pedido, porém, foi negado’). Também se usa para indicar elipse do verbo (‘Ele estudou Direito; ela, Economia’), em datas com local (‘Brasília, 2 de outubro de 2026’) e antes de ‘mas’, ‘porém’, ‘contudo’, ‘todavia’ no início da oração adversativa.",
      "A vírgula é proibida entre termos que formam uma unidade sintática: entre o sujeito e o verbo, entre o verbo e seu complemento, entre o nome e seu complemento nominal, e entre a oração principal e a subordinada substantiva. Errado: ‘Os candidatos aprovados, serão convocados’; ‘O chefe pediu, que todos comparecessem’.",
      "O ponto e vírgula marca uma pausa maior que a da vírgula. Serve para separar itens longos de enumeração (como os incisos de uma lista), orações coordenadas extensas e orações adversativas ou conclusivas mais longas. Os dois-pontos introduzem enumeração, explicação, esclarecimento ou citação, e geralmente vêm depois de um termo que anuncia o que vem a seguir. Travessão e parênteses isolam informação intercalada; as reticências indicam suspensão ou interrupção.",
    ],
    pontosChave: [
      "Vírgula obrigatória: enumeração, vocativo, aposto, adjuntos adverbiais deslocados e longos, orações adjetivas explicativas, expressões explicativas.",
      "Vírgula proibida: entre sujeito e verbo, entre verbo e complemento, entre nome e complemento nominal, entre principal e subordinada substantiva.",
      "A vírgula isola a conjunção adversativa ou conclusiva intercalada (‘O pedido, portanto, foi indeferido’).",
      "A oração adjetiva explicativa vai entre vírgulas; a restritiva não leva vírgula.",
      "Adjunto adverbial curto, deslocado, tem vírgula facultativa (‘Hoje o prazo termina’); longo ou intercalado, tem vírgula recomendada.",
      "Elipse do verbo é marcada por vírgula (‘Eu estudei Português; ela, Matemática’).",
      "Ponto e vírgula separa itens longos de enumeração e orações coordenadas extensas.",
      "Dois-pontos anunciam enumeração, explicação ou citação.",
      "Antes de ‘e’ com o mesmo sujeito não se usa vírgula; com sujeitos diferentes ou valor adversativo, pode-se usar.",
    ],
    exemplos: [
      {
        titulo: "A vírgula muda o sentido",
        texto: "‘Os servidores que faltaram foram advertidos’: só os que faltaram. ‘Os servidores, que faltaram, foram advertidos’: todos faltaram e foram advertidos. ‘Vamos comer, crianças’ (vocativo) x ‘Vamos comer crianças’ (objeto direto, sentido absurdo).",
      },
      {
        titulo: "Vírgulas certas e erradas",
        texto: "Certo: ‘O segurado, após a análise, recebeu o benefício.’ (adjunto intercalado). Errado: ‘O segurado recebeu, o benefício.’ (verbo e complemento). Errado: ‘A necessidade, de reforma é evidente.’ (nome e complemento nominal). Certo: ‘Fui à agência, mas não fui atendido.’",
      },
      {
        titulo: "Ponto e vírgula e dois-pontos",
        texto: "‘São requisitos: idade mínima; tempo de contribuição; carência cumprida.’ Os dois-pontos anunciam a lista, e o ponto e vírgula separa os itens. ‘O candidato disse apenas uma coisa: tinha estudado.’ Aqui os dois-pontos introduzem o esclarecimento.",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Vírgula: usar x não usar",
        grupos: [
          {
            nome: "Usar",
            itens: [
              "Enumeração de termos",
              "Vocativo e aposto",
              "Adjunto adverbial deslocado (longo) ou intercalado",
              "Oração adjetiva explicativa",
              "Conjunção intercalada (porém, portanto, contudo)",
              "Elipse do verbo",
              "Data com local",
            ],
          },
          {
            nome: "Não usar",
            itens: [
              "Entre sujeito e verbo",
              "Entre verbo e complemento",
              "Entre nome e complemento nominal",
              "Entre principal e subordinada substantiva",
              "Antes de oração adjetiva restritiva",
            ],
          },
        ],
      },
    ],
    pegadinhas: [
      "Vírgula entre sujeito e verbo: ‘Os servidores da agência, foram convocados’ está errado, a menos que haja um termo intercalado fechado por outra vírgula.",
      "Item que diz que a retirada das vírgulas em oração adjetiva ‘não altera o sentido’: altera, porque a explicativa vira restritiva.",
      "Vírgula antes de ‘que’ integrante, como em ‘Disse, que viria’: proibida, pois separa o verbo de seu complemento.",
      "Item que afirma que a vírgula antes de ‘e’ é sempre proibida: pode ocorrer, por exemplo, quando os sujeitos são diferentes ou quando o ‘e’ tem valor adversativo.",
      "Troca de ponto e vírgula por vírgula em enumeração longa e complexa sem avaliar se a mudança prejudica a clareza.",
    ],
    fundamentos: [
      "Gramática normativa da língua portuguesa: emprego dos sinais de pontuação",
      "Manual de Redação da Presidência da República, 3ª ed. (uso da pontuação em textos oficiais)",
    ],
  },
  {
    id: "ger-concordancia",
    titulo: "Concordância nominal e verbal",
    pool: "portugues",
    topicos: ["tec-pt-9", "ana-pt-7"],
    texto: [
      "Concordância é o ajuste de gênero, número e pessoa entre os termos da oração. Na concordância verbal, o verbo se ajusta ao sujeito em número e pessoa. Na nominal, adjetivos, artigos, pronomes e numerais se ajustam ao substantivo em gênero e número. A primeira tarefa é achar o verdadeiro sujeito, que quase nunca é a palavra mais próxima do verbo.",
      "Com sujeito composto antes do verbo, o verbo vai para o plural (‘O chefe e o analista decidiram’). Com sujeito composto depois do verbo, pode ir para o plural ou concordar com o mais próximo (‘Chegaram o chefe e o analista’ ou ‘Chegou o chefe e o analista’). Quando os núcleos são ligados por ‘ou’, o verbo vai para o singular se a ideia é de exclusão (‘Ana ou Marta será a diretora’) e para o plural se há ideia de adição.",
      "Verbos impessoais ficam no singular: ‘Há (existem) vagas’, ‘Faz dois anos’, ‘Choveu muito’. Já ‘existir’, ‘ocorrer’ e ‘acontecer’ têm sujeito e concordam: ‘Existem vagas’. Na voz passiva sintética, o verbo concorda com o sujeito paciente (‘Alugam-se salas’); no sujeito indeterminado com ‘se’, fica no singular (‘Precisa-se de técnicos’).",
      "Há ainda regras de expressões. ‘Mais de um’ pede singular (‘Mais de um servidor faltou’). ‘Cerca de’ e ‘perto de’ com numeral concordam com o numeral (‘Cerca de cem pessoas compareceram’). Coletivos no singular levam verbo no singular (‘O grupo decidiu’). Com expressões como ‘a maioria de’ e ‘grande parte de’ seguidas de substantivo no plural, o verbo pode ir para o singular ou o plural.",
      "Na concordância nominal, ‘meio’ (advérbio) e ‘bastante’ (advérbio) não variam (‘meio cansada’, ‘bastante cansados’); ‘meio’ numeral e ‘bastante’ pronome variam (‘meia hora’, ‘bastantes motivos’). Anexo, incluso, mesmo e próprio concordam com o substantivo (‘anexas as cópias’), e ‘em anexo’ é invariável. ‘É proibido’, ‘é necessário’ e ‘é bom’ ficam invariáveis quando o sujeito não tem artigo (‘É proibido entrada’; com artigo: ‘É proibida a entrada’).",
    ],
    pontosChave: [
      "Primeiro identifique o sujeito; o verbo concorda com ele, e não com o termo mais próximo.",
      "Sujeito composto anteposto: verbo no plural; posposto: plural ou concordância com o mais próximo.",
      "‘Ou’ com exclusão: singular; com adição: plural.",
      "‘Haver’ (existir ou tempo) e ‘fazer’ (tempo): singular e sem sujeito (há vagas, faz dois anos).",
      "Voz passiva sintética: concorda com o sujeito paciente (vendem-se casas); com ‘se’ indeterminador, singular (precisa-se de técnicos).",
      "‘Mais de um’: singular; ‘cerca de/perto de + numeral’: concorda com o numeral.",
      "‘Meio’ e ‘bastante’: invariáveis como advérbios, variáveis como numeral e pronome.",
      "‘Anexo’, ‘incluso’, ‘mesmo’, ‘próprio’ e ‘obrigado’ concordam com o nome; ‘em anexo’ é invariável.",
      "‘É proibido’, ‘é necessário’, ‘é bom’ ficam invariáveis se o sujeito não vem determinado por artigo.",
    ],
    exemplos: [
      {
        titulo: "Concordância verbal: certo x errado",
        texto: "Certo: ‘Há muitos candidatos.’ Errado: ‘Hão muitos candidatos.’ Certo: ‘Fazem-se cópias.’ (passiva sintética: sujeito ‘cópias’). Errado: ‘Faz-se cópias.’ Certo: ‘Faz dois anos que ele se aposentou.’ Errado: ‘Fazem dois anos...’ Certo: ‘Mais de um candidato foi aprovado.’",
      },
      {
        titulo: "Concordância nominal: certo x errado",
        texto: "Certo: ‘Seguem anexas as certidões.’ Errado: ‘Seguem anexo as certidões.’ Certo: ‘A servidora está meio cansada.’ Errado: ‘A servidora está meia cansada.’ Certo: ‘Esperei meia hora.’ Certo: ‘Ela agradeceu: obrigada.’ Quem fala ou escreve é mulher, por isso o ‘obrigada’.",
      },
      {
        titulo: "Sujeito afastado do verbo",
        texto: "‘O conjunto de documentos apresentados pelos segurados está completo.’ O núcleo do sujeito é ‘conjunto’ (singular), e não ‘segurados’ ou ‘documentos’. Já em ‘A maioria dos servidores faltou/faltaram’, as duas concordâncias são aceitas.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Palavras que variam ou não variam",
        colunas: ["Palavra", "Varia", "Não varia"],
        linhas: [
          ["meio", "Numeral: meia hora", "Advérbio: meio cansada"],
          ["bastante", "Pronome: bastantes razões", "Advérbio: bastante cansados"],
          ["anexo, incluso", "Concorda: anexas as cópias", "‘em anexo’: invariável"],
          ["obrigado", "Concorda com quem fala: obrigada (mulher)", "—"],
          ["é proibido / é necessário", "Com artigo: é proibida a entrada", "Sem artigo: é proibido entrada"],
          ["menos", "—", "Sempre invariável: menos pessoas"],
        ],
      },
    ],
    pegadinhas: [
      "Fazer concordar o verbo com o termo mais próximo (‘O conjunto de normas foram aprovados’) quando o núcleo do sujeito está afastado.",
      "‘Haviam’, ‘hão’ e ‘fazem’ no sentido impessoal: errados; ‘havia’, ‘há’ e ‘faz’.",
      "Verbo no singular com ‘se’ apassivador e sujeito plural (‘Aluga-se casas’): o certo é ‘Alugam-se casas’.",
      "Deixar ‘anexo’ ou ‘incluso’ invariáveis e concordar ‘meio’ com adjetivo (‘meia cansada’): invertem-se as regras.",
      "‘Menos’ no plural (‘menas pessoas’): ‘menos’ é invariável.",
    ],
    fundamentos: [
      "Gramática normativa da língua portuguesa: concordância nominal e verbal",
      "Manual de Redação da Presidência da República, 3ª ed.",
    ],
  },
  {
    id: "ger-regencia",
    titulo: "Regência nominal e verbal",
    pool: "portugues",
    topicos: ["tec-pt-10"],
    texto: [
      "Regência é a relação de dependência entre um termo regente (verbo ou nome) e seu complemento, normalmente intermediada por preposição. A regência verbal estuda se o verbo é transitivo direto (sem preposição), indireto (com preposição) ou ambos; a nominal estuda as preposições exigidas por substantivos, adjetivos e advérbios.",
      "Alguns verbos mudam de regência conforme o sentido. ‘Assistir’ no sentido de ver exige ‘a’ (assistir ao jogo); no sentido de dar assistência, é direto (assistir o doente). ‘Aspirar’ no sentido de respirar é direto (aspirar o ar); no sentido de desejar, exige ‘a’ (aspirar a um cargo). ‘Visar’ como mirar ou dar visto é direto (visar o cheque); como ter por objetivo, exige ‘a’ (visar à aprovação).",
      "Outros têm regência fixa e cobrada. ‘Obedecer’ e ‘desobedecer’ exigem ‘a’ (obedecer às normas). ‘Preferir’ exige ‘a’ (prefiro estudar a dormir; sem ‘do que’ e sem ‘mais’). ‘Responder’ pede ‘a’ (responder ao ofício). ‘Agradecer’ e ‘perdoar’ são diretos para coisa e indiretos (com ‘a’) para pessoa (agradeci o convite; agradeci ao colega). ‘Implicar’ no sentido de acarretar é direto (isso implica custos), e não ‘implicar em’. ‘Chegar’ e ‘ir’ pedem ‘a’ (cheguei à agência). ‘Morar’ pede ‘em’. ‘Proceder’ no sentido de realizar pede ‘a’ (proceder à análise).",
      "Na regência nominal, os nomes pedem preposições específicas: acesso a, favorável a, contrário a, compatível com, preferência por, anterior a, posterior a, superior a, inferior a. Como regra, a preposição exigida pelo substantivo é a mesma do verbo correspondente (obedecer a, obediência a). Vale lembrar que a regência determina a crase: se o termo regente exige ‘a’ e a palavra seguinte aceita artigo feminino, há crase.",
    ],
    pontosChave: [
      "Assistir (ver): a; assistir (dar assistência): objeto direto.",
      "Aspirar (desejar): a; aspirar (respirar): direto.",
      "Visar (objetivar): a; visar (mirar, dar visto): direto.",
      "Preferir: ‘prefiro X a Y’; não use ‘do que’ nem ‘mais’ com ‘preferir’.",
      "Obedecer, desobedecer, responder: a.",
      "Agradecer e perdoar: coisa é objeto direto; pessoa é objeto indireto com ‘a’.",
      "Implicar (acarretar) é direto; ‘implicar em’ é condenado pela norma.",
      "Ir, chegar, comparecer: a; morar: em.",
      "Regência nominal: acesso a, favorável a, contrário a, compatível com, preferência por, superior a.",
    ],
    exemplos: [
      {
        titulo: "Assistir, aspirar e visar",
        texto: "‘Os segurados assistiram à palestra.’ (ver) / ‘A equipe assistiu os idosos.’ (dar assistência). ‘Ele aspira a um cargo público.’ / ‘Aspirou a poeira.’ ‘A medida visa à economia de recursos.’ / ‘O fiscal visou o documento.’",
      },
      {
        titulo: "Preferir e obedecer",
        texto: "Errado: ‘Prefiro mais ler do que escrever.’ Certo: ‘Prefiro ler a escrever.’ Errado: ‘O servidor obedece as normas.’ Certo: ‘O servidor obedece às normas.’ Errado: ‘A decisão implica em novos custos.’ Certo: ‘A decisão implica novos custos.’",
      },
      {
        titulo: "Regência e crase",
        texto: "‘Os segurados têm acesso à informação.’ ‘Acesso’ pede ‘a’; ‘a informação’ aceita artigo, logo há crase. ‘O pedido é anterior a 2020’: sem crase, porque ‘2020’ não aceita artigo feminino (ano).",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Verbos de regência muito cobrada",
        colunas: ["Verbo", "Sentido", "Regência", "Exemplo"],
        linhas: [
          ["assistir", "ver", "a", "Assistiu ao filme."],
          ["assistir", "dar assistência", "direto", "Assistiu o paciente."],
          ["aspirar", "desejar", "a", "Aspira a uma vaga."],
          ["visar", "objetivar", "a", "Visa ao lucro."],
          ["preferir", "—", "a", "Prefere café a chá."],
          ["obedecer", "—", "a", "Obedece às leis."],
          ["implicar", "acarretar", "direto", "Implica gastos."],
          ["agradecer", "—", "algo (direto); a alguém (indireto)", "Agradeci o convite ao colega."],
        ],
      },
    ],
    pegadinhas: [
      "‘Prefiro X do que Y’ e ‘prefiro mais X que Y’: errados; o correto é ‘prefiro X a Y’.",
      "Itens que tratam como corretas as formas populares ‘implicar em’ e ‘assistir o jogo’ (no sentido de ver): em linguagem formal, são erradas.",
      "Item que troca a preposição exigida pelo substantivo (‘acesso em’, ‘contrário de’ em lugar de ‘contrário a’).",
      "‘Obedecer as normas’ sem a preposição: errado, o verbo pede ‘a’.",
      "Dizer que ‘aspirar’ é sempre transitivo indireto: no sentido de respirar, é direto.",
    ],
    fundamentos: [
      "Gramática normativa da língua portuguesa: regência verbal e nominal",
      "Manual de Redação da Presidência da República, 3ª ed. (clareza e correção da linguagem oficial)",
    ],
  },
  {
    id: "ger-significacao-figuras",
    titulo: "Significação das palavras e figuras de linguagem",
    pool: "portugues",
    topicos: ["tec-pt-11", "ana-pt-10", "ana-pt-9"],
    texto: [
      "Estudar a significação é entender como as palavras se relacionam pelo sentido. Sinônimos têm sentido próximo (casa e lar), antônimos têm sentidos opostos (deferir e indeferir). Hiperônimo é a palavra mais geral e hipônimo a mais específica (flor é hiperônimo de rosa). Polissemia é uma só palavra com vários sentidos relacionados (cabeça da pessoa, cabeça do prego); homonímia é a coincidência de forma entre palavras diferentes (manga da fruta e manga da camisa).",
      "Homônimos podem ser homógrafos (mesma escrita: ‘colher’ verbo e ‘colher’ objeto) ou homófonos (mesmo som: cesta e sexta, concerto e conserto). Parônimos são palavras parecidas na forma e diferentes no sentido, e geram confusões frequentes: deferir (conceder) e diferir (adiar, distinguir-se); ratificar (confirmar) e retificar (corrigir); infringir (violar) e infligir (aplicar pena); cumprimento (saudação ou execução) e comprimento (extensão); eminente (notável) e iminente (prestes a ocorrer); emigrar (sair) e imigrar (entrar); mandado (ordem) e mandato (período de representação).",
      "O sentido pode ser denotativo (literal, dicionarizado) ou conotativo (figurado, dependente do contexto). Em questões de significado, o contexto decide: palavras sinônimas nem sempre podem ser trocadas em qualquer frase sem alterar o sentido, o registro ou a regência.",
      "As figuras de linguagem exploram o sentido conotativo. Entre as de palavra: metáfora (comparação implícita: ‘o tempo é um rio’), comparação (com conectivo: ‘forte como um touro’), metonímia (troca por relação de proximidade: ‘li Machado de Assis’, autor pela obra; ‘bebeu um copo’, continente pelo conteúdo) e catacrese (metáfora já incorporada à língua: ‘pé da mesa’). Entre as de pensamento: antítese (oposição de ideias), paradoxo ou oxímoro (contradição aparente: ‘silêncio ensurdecedor’), hipérbole (exagero), eufemismo (suavização), ironia (dizer o contrário do que se pensa), personificação (atribuir ações humanas a seres não humanos) e gradação (sequência crescente ou decrescente).",
    ],
    pontosChave: [
      "Sinonímia (sentido próximo) e antonímia (sentido oposto): troque por sinônimo apenas se o sentido e a regência forem preservados.",
      "Hiperônimo = termo geral; hipônimo = termo específico.",
      "Polissemia: uma palavra, vários sentidos ligados; homonímia: palavras diferentes com a mesma forma.",
      "Deferir = conceder; diferir = adiar ou distinguir-se; indeferir = negar.",
      "Ratificar = confirmar; retificar = corrigir. Infringir = violar; infligir = aplicar (pena, castigo).",
      "Denotação: sentido literal; conotação: sentido figurado.",
      "Metáfora é comparação sem conectivo; comparação tem conectivo (como, tal qual).",
      "Metonímia: troca por proximidade (autor pela obra, parte pelo todo, continente pelo conteúdo).",
      "Antítese aproxima ideias opostas; paradoxo ou oxímoro reúne ideias contraditórias em uma só.",
      "Hipérbole exagera; eufemismo suaviza; ironia diz o contrário do que se pensa.",
    ],
    exemplos: [
      {
        titulo: "Parônimos no ambiente do INSS",
        texto: "‘O requerimento foi deferido’: foi concedido. ‘O requerimento foi indeferido’: foi negado. ‘A decisão foi diferida para a próxima sessão’: foi adiada. ‘O servidor ratificou o parecer’: confirmou. ‘O servidor retificou o parecer’: corrigiu. ‘Infringiu a norma’: violou. ‘Infligiu uma penalidade’: aplicou.",
      },
      {
        titulo: "Identificando figuras",
        texto: "‘A agência é um formigueiro’: metáfora. ‘A fila andava como lesma’: comparação. ‘Li toda a obra de Drummond’: metonímia. ‘O braço da cadeira’: catacrese. ‘Já te disse mil vezes’: hipérbole. ‘Ele partiu desta para melhor’: eufemismo. ‘Que ótimo, perdi o prazo!’, dito em tom de crítica: ironia.",
      },
      {
        titulo: "Sentido conotativo",
        texto: "‘O servidor tem coração de pedra.’ O sentido é figurado: indica frieza, e não que o coração seja feito de pedra. Em ‘A cadeira tem pés de madeira’, o termo ‘pés’ é catacrese, porque o uso comum já a incorporou ao vocabulário.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Figuras de linguagem mais cobradas",
        colunas: ["Figura", "Como reconhecer", "Exemplo"],
        linhas: [
          ["Metáfora", "Comparação implícita, sem conectivo", "Seus olhos são estrelas."],
          ["Comparação", "Com conectivo (como, tal qual)", "Corre como o vento."],
          ["Metonímia", "Troca por proximidade", "Leio Machado de Assis."],
          ["Antítese", "Ideias opostas lado a lado", "É pequeno no tamanho, grande no valor."],
          ["Paradoxo / oxímoro", "Contradição aparente", "silêncio ensurdecedor"],
          ["Hipérbole", "Exagero", "Estou morrendo de fome."],
          ["Eufemismo", "Suaviza algo desagradável", "Ele nos deixou."],
          ["Ironia", "Diz o contrário do que pensa", "Ótima ideia, atrasar tudo!"],
          ["Personificação", "Humaniza o que não é humano", "O vento sussurrou."],
        ],
      },
    ],
    pegadinhas: [
      "Item que trata ‘deferir’ e ‘diferir’ como sinônimos: deferir é conceder, diferir é adiar.",
      "Confundir metáfora com comparação: se há ‘como’, é comparação.",
      "Chamar de metonímia o que é metáfora (a metonímia é substituição por contiguidade, e não por semelhança).",
      "Item que troca uma palavra por sinônimo que exige outra preposição ou muda o grau de formalidade, alterando o sentido do trecho.",
      "Confundir ‘infringir’ com ‘infligir’ e ‘ratificar’ com ‘retificar’ em itens de reescrita.",
    ],
    fundamentos: [
      "Gramática normativa e estilística da língua portuguesa: semântica e figuras de linguagem",
      "Dicionários da língua portuguesa (sinônimos, antônimos e parônimos)",
    ],
  },
  {
    id: "ger-correspondencia-oficial",
    titulo: "Correspondência oficial: padrão ofício e pronomes de tratamento",
    pool: "portugues",
    topicos: ["tec-pt-12", "ana-pt-11"],
    texto: [
      "O Manual de Redação da Presidência da República (3ª edição, 2018) orienta a redação dos documentos oficiais. A comunicação oficial deve ter impessoalidade, formalidade, padronização, clareza, concisão e uso da norma-padrão da língua. O texto não expressa opinião pessoal do redator: quem fala é o órgão público, e não a pessoa, por isso a linguagem é impessoal e sem gírias, regionalismos ou expressões afetivas.",
      "Na 3ª edição, o aviso, o ofício e o memorando adotam um mesmo formato, chamado padrão ofício. Diferem pela finalidade: o aviso é comunicação entre Ministros de Estado e autoridades de mesma hierarquia; o ofício é a comunicação entre órgãos e entidades públicas e também com particulares; o memorando é a comunicação entre unidades administrativas de um mesmo órgão. Os três têm a mesma estrutura: identificação do documento (tipo, número e sigla do órgão), local e data, assunto, endereçamento, texto, fecho e assinatura.",
      "Os pronomes de tratamento são empregados com verbo e pronomes na 3ª pessoa. ‘Vossa Excelência’ é usada para autoridades como Presidente da República, ministros, governadores, parlamentares, magistrados e oficiais-generais; ‘Vossa Senhoria’ para as demais autoridades e para particulares; ‘Vossa Magnificência’ para reitores de universidades. ‘Vossa’ é usada ao dirigir-se à pessoa, e ‘Sua’ ao falar a respeito dela (‘Sua Excelência o Ministro foi informado’). Como o pronome tem forma feminina, os adjetivos concordam com o sexo da pessoa tratada (‘Vossa Excelência está convencida’, se for uma ministra).",
      "O fecho de cada documento no padrão ofício deve ser ‘Respeitosamente,’ para autoridades superiores, inclusive o Presidente da República, e ‘Atenciosamente,’ para autoridades de mesma hierarquia ou inferiores. O vocativo, no caso de autoridades tratadas por Vossa Excelência, é formado por ‘Senhor’ mais o cargo (‘Senhor Ministro,’). O Manual não considera ‘doutor’ forma de tratamento: é título acadêmico, não aplicável a toda autoridade com curso superior. O tratamento ‘digníssimo’ (DD) está abolido na comunicação oficial.",
    ],
    pontosChave: [
      "Manual de Redação da Presidência da República, 3ª ed. (2018): aviso, ofício e memorando seguem o padrão ofício.",
      "Qualidades da redação oficial: impessoalidade, formalidade, padronização, clareza, concisão e norma-padrão.",
      "Aviso: entre Ministros de Estado e autoridades de mesma hierarquia; ofício: entre órgãos públicos e com particulares; memorando: entre unidades de um mesmo órgão.",
      "Fecho: ‘Respeitosamente,’ para autoridade superior (inclusive o Presidente); ‘Atenciosamente,’ para as de mesma hierarquia ou inferiores.",
      "Vossa Excelência: chefes de Poder, ministros, parlamentares, magistrados; Vossa Senhoria: demais autoridades e particulares; Vossa Magnificência: reitores.",
      "Pronomes de tratamento levam o verbo e os pronomes possessivos na 3ª pessoa (‘Vossa Excelência trouxe seus documentos’).",
      "‘Vossa’ ao se dirigir à pessoa; ‘Sua’ ao se referir a ela.",
      "Os adjetivos concordam com o gênero da pessoa tratada, e não com o pronome de tratamento.",
      "‘Doutor’ não é pronome de tratamento; ‘digníssimo’ (DD) foi abolido.",
      "Local e data em linha própria, com mês por extenso (‘Brasília, 2 de outubro de 2026.’), e o assunto resumido, iniciado por ‘Assunto:’.",
    ],
    exemplos: [
      {
        titulo: "Escolha do fecho",
        texto: "Ofício do Gerente-Executivo ao Presidente do INSS (autoridade superior): ‘Respeitosamente,’. Ofício do Gerente-Executivo a outro Gerente-Executivo ou a um servidor subordinado: ‘Atenciosamente,’.",
      },
      {
        titulo: "Frases certas x erradas",
        texto: "Certo: ‘Vossa Excelência encaminhará seus pareceres.’ Errado: ‘Vossa Excelência encaminhará vossos pareceres.’ Errado: ‘Vossa Excelência vos enviou’: o tratamento exige 3ª pessoa. Certo: ‘Sua Excelência, o Ministro, aprovou o documento.’ (referência a terceiro). Certo: ‘Vossa Excelência está convencida da proposta.’, dito a uma ministra (o adjetivo concorda com a pessoa tratada).",
      },
      {
        titulo: "Estrutura de um ofício",
        texto: "1) Tipo e número: ‘Ofício nº 15/2026-GEX’. 2) Local e data: ‘Brasília, 2 de outubro de 2026.’ 3) Assunto: ‘Solicitação de informações.’ 4) Destinatário: nome, cargo e endereço. 5) Texto: introdução (apresenta o assunto), desenvolvimento e conclusão. 6) Fecho: ‘Atenciosamente,’. 7) Assinatura, nome e cargo do signatário.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Pronomes de tratamento (Manual de Redação, 3ª ed.)",
        colunas: ["Tratamento", "Para quem", "Abreviatura"],
        linhas: [
          ["Vossa Excelência", "Presidente da República, ministros, governadores, parlamentares, magistrados, oficiais-generais", "V. Exa."],
          ["Vossa Senhoria", "Demais autoridades e particulares", "V. Sa."],
          ["Vossa Magnificência", "Reitores de universidades", "V. Mag.ª"],
          ["Vossa Santidade", "Papa", "V. S."],
          ["Vossa Eminência", "Cardeais", "V. Ema."],
        ],
      },
      {
        tipo: "tabela",
        titulo: "Padrão ofício: aviso, ofício e memorando",
        colunas: ["Expediente", "Comunicação", "Fecho"],
        linhas: [
          ["Aviso", "Entre Ministros de Estado e autoridades de mesma hierarquia", "Conforme a hierarquia: Respeitosamente (superior) ou Atenciosamente"],
          ["Ofício", "Entre órgãos públicos e com particulares", "Conforme a hierarquia: Respeitosamente ou Atenciosamente"],
          ["Memorando", "Entre unidades de um mesmo órgão", "Conforme a hierarquia: Respeitosamente ou Atenciosamente"],
        ],
      },
    ],
    pegadinhas: [
      "Fecho ‘Atenciosamente’ para autoridade hierarquicamente superior: o correto é ‘Respeitosamente’.",
      "‘Vossa Excelência’ combinada com pronome de 2ª pessoa (‘vos’, ‘vosso’): o verbo e os possessivos ficam na 3ª pessoa (‘seu’, ‘lhe’).",
      "Usar ‘Vossa Excelência’ para reitor (o correto é Vossa Magnificência) ou ‘Vossa Senhoria’ para ministro.",
      "Tratar ‘doutor’ como forma de tratamento obrigatória para todo cargo superior: o Manual não a adota assim.",
      "Dizer que memorando é o expediente usado para comunicar-se com particulares: isso é o ofício.",
    ],
    fundamentos: [
      "Manual de Redação da Presidência da República, 3ª ed. (2018)",
      "Constituição Federal, art. 37, caput (impessoalidade e publicidade, base da redação oficial)",
    ],
  },
  // ───────────────────────── INFORMÁTICA ─────────────────────────
  {
    id: "ger-internet-intranet",
    titulo: "Internet, intranet e extranet",
    pool: "informatica",
    topicos: ["tec-inf-1", "ana-inf-1"],
    texto: [
      "A Internet é a rede mundial que interliga redes de computadores usando o conjunto de protocolos TCP/IP. Ela é a infraestrutura; a Web (WWW) é apenas um dos serviços que funcionam sobre ela, assim como o correio eletrônico, a transferência de arquivos (FTP) e a mensagem instantânea. Não são sinônimos: ‘a Internet’ e ‘a Web’ costumam ser trocadas em itens para induzir ao erro.",
      "A intranet é uma rede privada, de uma organização, que usa as mesmas tecnologias da Internet (navegador, protocolos HTTP, TCP/IP, páginas) e é acessada apenas por usuários autorizados. A extranet é uma extensão da intranet que permite o acesso controlado de pessoas externas (clientes, fornecedores, parceiros). Uma intranet pode ser acessada de fora da empresa por meio de uma VPN, que cria um túnel seguro pela Internet.",
      "Alguns protocolos e serviços valem ser memorizados. HTTP transfere páginas da Web, e HTTPS faz o mesmo com criptografia (usa TLS/SSL, com um cadeado no navegador). FTP transfere arquivos. DNS traduz nomes de domínio (www.gov.br) em endereços IP. DHCP atribui endereços IP automaticamente. IP é o endereço lógico de um dispositivo: o IPv4 tem 32 bits (ex.: 192.168.0.1) e o IPv6, 128 bits. Cada página tem um endereço, a URL.",
      "Quanto à abrangência, as redes se classificam em PAN (pessoal), LAN (local, como a de um escritório), MAN (metropolitana) e WAN (extensa, como a própria Internet). A computação em nuvem fornece serviços (armazenamento, aplicativos, processamento) pela Internet, sem que o usuário precise instalar ou manter a infraestrutura. Exemplos: armazenar arquivos em nuvem e usar editores de texto no navegador.",
    ],
    pontosChave: [
      "Internet: rede mundial de redes com TCP/IP. Web: serviço (páginas, links) que roda na Internet.",
      "Intranet: rede privada de uma organização com tecnologias da Internet; acesso restrito.",
      "Extranet: parte da intranet aberta a usuários externos autorizados (clientes, fornecedores).",
      "VPN: rede privada virtual que usa a Internet para acesso seguro à rede corporativa.",
      "HTTP transfere páginas; HTTPS é HTTP com criptografia (TLS/SSL).",
      "DNS converte nomes de domínio em endereços IP; DHCP distribui IPs automaticamente.",
      "IPv4: 32 bits; IPv6: 128 bits.",
      "LAN é rede local; MAN, metropolitana; WAN, extensa (a Internet é uma WAN).",
      "Computação em nuvem: serviços sob demanda pela Internet (armazenamento, aplicativos).",
      "Download baixa arquivos para o dispositivo; upload envia arquivos para a rede.",
    ],
    exemplos: [
      {
        titulo: "Situação: acesso do servidor em casa",
        texto: "O servidor do INSS precisa acessar o sistema interno do órgão de casa. Como o sistema só existe na intranet, ele se conecta por VPN, que cria um canal seguro pela Internet. Sem VPN, o endereço da intranet não é acessível de fora.",
      },
      {
        titulo: "Diferenciando Internet, intranet e extranet",
        texto: "Intranet: portal interno com circulares e formulários, só para servidores. Extranet: o mesmo portal, ampliado para que uma empresa prestadora de serviços acompanhe suas ordens de serviço. Internet: o site público do órgão, acessível a qualquer pessoa.",
      },
      {
        titulo: "Leitura de endereço",
        texto: "Em ‘https://www.gov.br/inss’: ‘https’ é o protocolo (com criptografia); ‘www.gov.br’ é o domínio, que o DNS traduz em IP; ‘/inss’ indica o caminho da página no servidor. O cadeado no navegador indica conexão criptografada, mas não garante que o site seja confiável.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Internet x intranet x extranet",
        colunas: ["Rede", "Abrangência", "Quem acessa", "Exemplo"],
        linhas: [
          ["Internet", "Mundial e pública", "Qualquer pessoa", "Sites e e-mails"],
          ["Intranet", "Privada, da organização", "Usuários internos autorizados", "Portal interno do órgão"],
          ["Extranet", "Intranet estendida", "Internos e externos autorizados", "Portal de parceiros e fornecedores"],
        ],
      },
      {
        tipo: "tabela",
        titulo: "Protocolos básicos",
        colunas: ["Protocolo", "Para que serve"],
        linhas: [
          ["TCP/IP", "Conjunto base da Internet"],
          ["HTTP / HTTPS", "Páginas da Web (sem e com criptografia)"],
          ["FTP", "Transferência de arquivos"],
          ["DNS", "Nome de domínio para IP"],
          ["DHCP", "Atribuição automática de IP"],
          ["SMTP, POP3, IMAP", "Correio eletrônico (veja a aula de e-mail)"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que Internet e Web são a mesma coisa: a Web é um serviço da Internet.",
      "Afirmar que a intranet é uma rede pública ou que não usa protocolos da Internet: ela é privada e os usa.",
      "Item que atribui ao HTTPS a garantia de que o site é legítimo: HTTPS protege o tráfego, não atesta a idoneidade do site.",
      "Confundir DNS (nome para IP) com DHCP (distribui IP automaticamente).",
      "Dizer que intranet só funciona dentro do prédio: com VPN, pode ser acessada remotamente.",
    ],
    fundamentos: [
      "Conceitos de redes de computadores: modelo TCP/IP e protocolos de aplicação",
      "Padrão de itens Cebraspe sobre Internet, intranet e extranet",
    ],
  },
  // FIM_AULAS
]
