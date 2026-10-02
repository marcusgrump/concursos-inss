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
  // FIM_AULAS
]
