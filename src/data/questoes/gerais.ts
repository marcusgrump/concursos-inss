import type { Questao } from "../types"

const TEXTO_PREVIDENCIA =
  "A previdência social é um pacto entre gerações: quem trabalha hoje contribui para que os idosos de hoje recebam seus benefícios, na expectativa de que as gerações futuras façam o mesmo por eles. Por isso, a transparência na gestão dos recursos públicos é condição para a confiança no sistema e deve ser cobrada pela sociedade. Os cidadãos, quando bem informados, exercem o controle social e exigem serviços eficientes. Cabe, pois, ao poder público divulgar dados claros e acessíveis sobre arrecadação e despesas, a fim de que ninguém se veja privado de seus direitos por falta de informação."

const TEXTO_ATENDIMENTO =
  "O atendimento ao público é a face mais visível do serviço público. Quando o segurado procura uma agência da Previdência Social, espera ser recebido com cortesia e obter informações precisas. Muitas vezes, porém, a linguagem técnica dificulta a compreensão: termos como “carência” e “qualidade de segurado”, de uso corrente entre os servidores, soam estranhos ao cidadão comum. Cabe ao servidor traduzir essa linguagem, sem prejuízo da exatidão das informações prestadas. Hoje, o agendamento eletrônico, que permite marcar o atendimento pela internet, reduziu o tempo de espera."

/** Língua Portuguesa, Informática e Raciocínio Lógico. */
export const QUESTOES_GERAIS: Questao[] = [
  // ───────────────────────── LÍNGUA PORTUGUESA ─────────────────────────
  // Texto-base 1
  {
    id: "pt-001",
    pool: "portugues",
    assunto: "Interpretação de texto",
    texto: TEXTO_PREVIDENCIA,
    enunciado:
      "De acordo com o texto, o sistema previdenciário se sustenta na solidariedade entre as gerações, pois os trabalhadores atuais contribuem na expectativa de que as gerações futuras façam o mesmo.",
    gabarito: "C",
    comentario:
      "O texto abre afirmando que a previdência é “um pacto entre gerações” e explica o mecanismo: quem trabalha hoje contribui para os idosos de hoje, esperando reciprocidade no futuro. A assertiva reproduz fielmente essa ideia.",
  },
  {
    id: "pt-002",
    pool: "portugues",
    assunto: "Conjunções e valor semântico",
    texto: TEXTO_PREVIDENCIA,
    enunciado:
      "No trecho “Cabe, pois, ao poder público”, a palavra “pois” introduz uma explicação para o que foi dito antes, equivalendo a “porque”.",
    gabarito: "E",
    comentario:
      "Posposto ao verbo e isolado por vírgulas, “pois” tem valor conclusivo, equivalente a “portanto”. Com valor explicativo (“porque”), ele aparece anteposto ao verbo e sem a pausa das vírgulas.",
  },
  {
    id: "pt-003",
    pool: "portugues",
    assunto: "Reescrita de frases",
    texto: TEXTO_PREVIDENCIA,
    enunciado:
      "A substituição de “a fim de que” por “para que” preservaria a correção gramatical e o sentido de finalidade do último período do texto.",
    gabarito: "C",
    comentario:
      "As duas locuções conjuntivas introduzem oração subordinada adverbial final e exigem verbo no subjuntivo (“se veja”). A troca mantém a correção e o sentido.",
  },
  {
    id: "pt-004",
    pool: "portugues",
    assunto: "Crase",
    texto: TEXTO_PREVIDENCIA,
    enunciado:
      "A substituição de “ao poder público” por “a administração pública” preservaria a correção gramatical do texto.",
    gabarito: "E",
    comentario:
      "O verbo “caber” exige a preposição “a”, que se funde com o artigo feminino “a” de “administração”: “Cabe, pois, à administração pública”. Sem o acento grave, a frase fica incorreta.",
  },
  // Texto-base 2
  {
    id: "pt-005",
    pool: "portugues",
    assunto: "Interpretação de texto",
    texto: TEXTO_ATENDIMENTO,
    enunciado:
      "O texto aponta a linguagem técnica utilizada pelos servidores como possível obstáculo à compreensão das informações por parte do cidadão.",
    gabarito: "C",
    comentario:
      "O terceiro período afirma que a linguagem técnica “dificulta a compreensão” e que certos termos “soam estranhos ao cidadão comum”, o que sustenta a assertiva.",
  },
  {
    id: "pt-006",
    pool: "portugues",
    assunto: "Significação de expressões",
    texto: TEXTO_ATENDIMENTO,
    enunciado:
      "A expressão “sem prejuízo de”, em “sem prejuízo da exatidão das informações prestadas”, indica que a exatidão pode ser sacrificada em favor da clareza da linguagem.",
    gabarito: "E",
    comentario:
      "“Sem prejuízo de” significa “sem deixar de preservar” ou “sem afetar”. O texto determina que a linguagem seja traduzida mantendo a exatidão, e não que a exatidão seja sacrificada.",
  },
  {
    id: "pt-007",
    pool: "portugues",
    assunto: "Reescrita de frases",
    texto: TEXTO_ATENDIMENTO,
    enunciado:
      "A substituição de “porém” por “contudo”, em “Muitas vezes, porém, a linguagem técnica dificulta a compreensão”, preservaria a correção gramatical e o sentido do texto.",
    gabarito: "C",
    comentario:
      "Ambos são conjunções adversativas e podem ocupar a mesma posição, isoladas por vírgulas, sem alterar a relação de oposição entre as ideias.",
  },
  {
    id: "pt-008",
    pool: "portugues",
    assunto: "Orações subordinadas adjetivas",
    texto: TEXTO_ATENDIMENTO,
    enunciado:
      "No último período do texto, a oração “que permite marcar o atendimento pela internet” é restritiva, pois delimita o tipo de agendamento a que o texto se refere.",
    gabarito: "E",
    comentario:
      "A oração está entre vírgulas e apenas acrescenta uma informação sobre “o agendamento eletrônico”, sem restringir o sentido do termo: é explicativa. A oração restritiva não vem isolada por vírgulas.",
  },
  // Itens avulsos
  {
    id: "pt-009",
    pool: "portugues",
    assunto: "Crase",
    enunciado:
      "Está correto o emprego do sinal indicativo de crase em: “O requerimento foi encaminhado àquela agência, que fica à direita da praça”.",
    gabarito: "C",
    comentario:
      "“Àquela” resulta da fusão da preposição “a” (exigida por “encaminhar a”) com o demonstrativo “aquela”. Já “à direita” é locução adverbial feminina, que leva crase.",
  },
  {
    id: "pt-010",
    pool: "portugues",
    assunto: "Crase",
    enunciado: "Está correto o emprego do sinal indicativo de crase em: “O servidor está disposto à colaborar com a equipe”.",
    gabarito: "E",
    comentario: "Não há crase diante de verbo, pois não existe artigo antes de verbo. O correto é “disposto a colaborar”.",
  },
  {
    id: "pt-011",
    pool: "portugues",
    assunto: "Concordância verbal",
    enunciado: "Está de acordo com a norma-padrão da língua portuguesa a frase “Faz dois anos que o sistema foi implantado”.",
    gabarito: "C",
    comentario:
      "O verbo “fazer”, indicando tempo decorrido, é impessoal e fica na 3ª pessoa do singular, independentemente do número que o acompanha.",
  },
  {
    id: "pt-012",
    pool: "portugues",
    assunto: "Concordância verbal",
    enunciado: "Está de acordo com a norma-padrão da língua portuguesa a frase “Haviam muitos segurados aguardando atendimento”.",
    gabarito: "E",
    comentario:
      "No sentido de “existir”, o verbo “haver” é impessoal e não concorda com o complemento. O correto é “Havia muitos segurados aguardando atendimento”.",
  },
  {
    id: "pt-013",
    pool: "portugues",
    assunto: "Concordância nominal",
    enunciado: "Está de acordo com a norma-padrão da língua portuguesa a frase “Seguem anexo as certidões solicitadas”.",
    gabarito: "E",
    comentario: "“Anexo” é adjetivo e concorda em gênero e número com o substantivo a que se refere: “Seguem anexas as certidões solicitadas”.",
  },
  {
    id: "pt-014",
    pool: "portugues",
    assunto: "Regência verbal",
    enunciado:
      "Está de acordo com a norma-padrão da língua portuguesa a frase “Os servidores assistiram à palestra sobre atendimento ao público”.",
    gabarito: "C",
    comentario:
      "No sentido de “presenciar” ou “ver”, “assistir” é transitivo indireto e exige a preposição “a”, que se funde com o artigo de “palestra”: “à palestra”.",
  },
  {
    id: "pt-015",
    pool: "portugues",
    assunto: "Regência verbal",
    enunciado:
      "Está de acordo com a norma-padrão da língua portuguesa a frase “O servidor prefere atender por agendamento do que atender sem hora marcada”.",
    gabarito: "E",
    comentario:
      "O verbo “preferir” rege a preposição “a”, e não “do que”: “prefere atender por agendamento a atender sem hora marcada”. Também não se usa “mais” com esse verbo.",
  },
  {
    id: "pt-016",
    pool: "portugues",
    assunto: "Pontuação",
    enunciado: "Está correta a pontuação da frase “Os segurados que procuram a agência sem agendamento, enfrentam longa espera”.",
    gabarito: "E",
    comentario:
      "A vírgula separa o sujeito (“Os segurados que procuram a agência sem agendamento”) do verbo “enfrentam”, o que é inadmissível. A oração “que procuram...” é restritiva e não recebe vírgulas.",
  },
  {
    id: "pt-017",
    pool: "portugues",
    assunto: "Pontuação: orações adjetivas",
    enunciado:
      "Em “Os servidores, que concluíram o curso, receberam certificado”, a oração destacada é explicativa e indica que todos os servidores concluíram o curso; sem as vírgulas, a oração seria restritiva e limitaria o grupo aos que o concluíram.",
    gabarito: "C",
    comentario:
      "A oração adjetiva explicativa vem entre vírgulas e se aplica a todo o grupo. A restritiva não tem vírgulas e restringe o sentido do antecedente, selecionando apenas parte dele.",
  },
  {
    id: "pt-018",
    pool: "portugues",
    assunto: "Acentuação gráfica (Novo Acordo)",
    enunciado:
      "Com o Novo Acordo Ortográfico, deixaram de ser acentuadas as palavras paroxítonas com ditongo aberto “ei” ou “oi”, como “ideia” e “heroico”.",
    gabarito: "C",
    comentario:
      "A regra vale apenas para paroxítonas (ideia, assembleia, jiboia, heroico). Permanecem acentuados os ditongos abertos em palavras oxítonas ou monossílabas, como “herói” e “papéis”.",
  },
  {
    id: "pt-019",
    pool: "portugues",
    assunto: "Ortografia (Novo Acordo)",
    enunciado: "Com o Novo Acordo Ortográfico, o trema foi mantido em palavras como “freqüência” e “lingüiça”.",
    gabarito: "E",
    comentario:
      "O trema foi abolido em palavras portuguesas: grafa-se “frequência” e “linguiça”. Ele só permanece em palavras estrangeiras e derivadas, como “mülleriano”.",
  },
  {
    id: "pt-020",
    pool: "portugues",
    assunto: "Classes de palavras",
    enunciado:
      "Em “O servidor que atendeu o segurado foi elogiado”, o vocábulo “que” é uma conjunção integrante.",
    gabarito: "E",
    comentario:
      "“Que” retoma “o servidor” e exerce a função de sujeito de “atendeu”: é pronome relativo. A conjunção integrante introduz oração substantiva, como em “É necessário que o servidor seja cortês”.",
  },
  {
    id: "pt-021",
    pool: "portugues",
    assunto: "Significação de palavras (parônimos)",
    enunciado:
      "Os vocábulos “mandado” e “mandato” são parônimos: o primeiro designa ordem emanada de autoridade, como o mandado de segurança; o segundo, o período de exercício de função eletiva ou a procuração.",
    gabarito: "C",
    comentario: "Parônimos são palavras de grafia e pronúncia semelhantes e sentidos distintos. A distinção apresentada está correta.",
  },
  {
    id: "pt-022",
    pool: "portugues",
    assunto: "Significação de palavras (parônimos)",
    enunciado:
      "Em “O servidor infringiu o regulamento”, a substituição de “infringiu” por “infligiu” preservaria a correção gramatical e o sentido da frase.",
    gabarito: "E",
    comentario:
      "“Infringir” significa “violar, descumprir”. “Infligir” significa “aplicar (pena ou castigo)”. Com “o regulamento” como complemento, a troca torna a frase incoerente.",
  },
  {
    id: "pt-023",
    pool: "portugues",
    assunto: "Colocação pronominal",
    enunciado:
      "Em “Não se esqueça de conferir os documentos”, a próclise do pronome “se” está de acordo com a norma-padrão, em razão da presença do advérbio de negação.",
    gabarito: "C",
    comentario: "Palavras de sentido negativo, como “não”, atraem o pronome oblíquo átono e tornam a próclise obrigatória.",
  },
  {
    id: "pt-024",
    pool: "portugues",
    assunto: "Colocação pronominal",
    enunciado: "Está de acordo com a norma-padrão da língua portuguesa a frase “Me informaram que o benefício foi concedido”.",
    gabarito: "E",
    comentario: "Na norma-padrão, não se inicia oração com pronome oblíquo átono. O correto é “Informaram-me que o benefício foi concedido”.",
  },
  {
    id: "pt-025",
    pool: "portugues",
    assunto: "Correspondência oficial: fechos",
    enunciado:
      "Segundo o Manual de Redação da Presidência da República (3.ª ed.), o fecho “Respeitosamente” é empregado em comunicações dirigidas a autoridades de hierarquia superior, ao passo que “Atenciosamente” é usado para autoridades de mesma hierarquia ou de hierarquia inferior.",
    gabarito: "C",
    comentario: "É exatamente o critério do Manual, que reduziu os fechos das comunicações oficiais a apenas esses dois.",
    fundamento: "Manual de Redação da Presidência da República, 3.ª ed.",
  },
  {
    id: "pt-026",
    pool: "portugues",
    assunto: "Correspondência oficial: vocativos",
    enunciado:
      "De acordo com o Manual de Redação da Presidência da República (3.ª ed.), os vocativos das comunicações oficiais devem trazer os adjetivos “Digníssimo” e “Ilustríssimo”, como em “Ilustríssimo Senhor Diretor”.",
    gabarito: "E",
    comentario: "O Manual aboliu o uso de “Digníssimo” e “Ilustríssimo” nos vocativos e nos endereçamentos. Basta o pronome de tratamento adequado, como “Senhor Diretor”.",
    fundamento: "Manual de Redação da Presidência da República, 3.ª ed.",
  },
  {
    id: "pt-027",
    pool: "portugues",
    assunto: "Correspondência oficial: pronomes de tratamento",
    enunciado:
      "Embora se dirijam ao interlocutor, os pronomes de tratamento, como “Vossa Excelência”, levam o verbo e os pronomes possessivos para a 3.ª pessoa, como em “Vossa Excelência encaminhou o seu parecer”.",
    gabarito: "C",
    comentario:
      "Os pronomes de tratamento, embora usados na 2.ª pessoa do discurso, exigem verbo e pronomes possessivos na 3.ª pessoa (“seu”, “sua”). Por isso se escreve “Vossa Excelência encaminhou o seu parecer”.",
    fundamento: "Manual de Redação da Presidência da República, 3.ª ed.",
  },
  {
    id: "pt-028",
    pool: "portugues",
    assunto: "Correspondência oficial: fechos",
    enunciado:
      "O Manual de Redação da Presidência da República (3.ª ed.) admite, além de “Respeitosamente” e “Atenciosamente”, o uso de outros fechos nas comunicações oficiais, como “Cordialmente” e “Sem mais para o momento”.",
    gabarito: "E",
    comentario:
      "O Manual simplificou e uniformizou os fechos, estabelecendo somente dois para todas as modalidades de comunicação oficial: “Respeitosamente” e “Atenciosamente”.",
    fundamento: "Manual de Redação da Presidência da República, 3.ª ed.",
  },

  // ───────────────────────── NOÇÕES DE INFORMÁTICA ─────────────────────────
  {
    id: "inf-001",
    pool: "informatica",
    assunto: "Internet, intranet e extranet",
    enunciado:
      "A intranet é uma rede privada de uma organização que utiliza os mesmos protocolos e serviços da Internet, como o TCP/IP e os navegadores, mas cujo acesso é, em regra, restrito a usuários autorizados.",
    gabarito: "C",
    comentario: "É a definição clássica de intranet: rede corporativa interna baseada na tecnologia da Internet, com acesso restrito ao público interno.",
  },
  {
    id: "inf-002",
    pool: "informatica",
    assunto: "Internet, intranet e extranet",
    enunciado:
      "A extranet é uma rede pública e de livre acesso que permite a qualquer usuário da Internet acessar, sem autenticação, os recursos internos de uma organização.",
    gabarito: "E",
    comentario:
      "A extranet estende a intranet a um público externo específico, como parceiros e clientes, mediante autenticação. Não é de livre acesso ao público em geral.",
  },
  {
    id: "inf-003",
    pool: "informatica",
    assunto: "Protocolos: HTTP e HTTPS",
    enunciado:
      "O protocolo HTTPS é a versão segura do HTTP e utiliza criptografia (SSL/TLS) na comunicação entre o navegador e o servidor web.",
    gabarito: "C",
    comentario: "O “S” de HTTPS indica comunicação segura (Secure), com criptografia e autenticação do servidor por certificado digital.",
  },
  {
    id: "inf-004",
    pool: "informatica",
    assunto: "Protocolos de correio eletrônico",
    enunciado:
      "O protocolo SMTP é utilizado pelo cliente de e-mail para receber as mensagens armazenadas no servidor, ao passo que o POP3 é empregado no envio das mensagens.",
    gabarito: "E",
    comentario: "A função está invertida: o SMTP serve ao envio de mensagens (e à troca entre servidores), enquanto POP3 e IMAP servem ao recebimento.",
  },
  {
    id: "inf-005",
    pool: "informatica",
    assunto: "Protocolos de correio eletrônico",
    enunciado:
      "Diferentemente do POP3, que em geral baixa as mensagens para o computador local, o IMAP mantém as mensagens no servidor e permite acessá-las e sincronizá-las a partir de vários dispositivos.",
    gabarito: "C",
    comentario: "Essa é a principal diferença prática entre os protocolos: o IMAP trabalha com as mensagens no servidor, o que favorece o uso em múltiplos dispositivos.",
  },
  {
    id: "inf-006",
    pool: "informatica",
    assunto: "Protocolos: DNS",
    enunciado:
      "O DNS é o serviço responsável por atribuir automaticamente endereços IP aos dispositivos conectados a uma rede local.",
    gabarito: "E",
    comentario:
      "A atribuição automática de endereços IP é função do DHCP. O DNS traduz nomes de domínio (como www.exemplo.gov.br) em endereços IP.",
  },
  {
    id: "inf-007",
    pool: "informatica",
    assunto: "Navegadores: navegação anônima",
    enunciado:
      "A navegação anônima (janela anônima) dos navegadores impede que os sites visitados e o provedor de acesso identifiquem o usuário, tornando a navegação totalmente privada.",
    gabarito: "E",
    comentario:
      "A janela anônima apenas não grava localmente histórico, cookies e dados de formulários ao ser fechada. Sites, provedor e administrador da rede continuam podendo registrar o acesso.",
  },
  {
    id: "inf-008",
    pool: "informatica",
    assunto: "Navegadores: cookies",
    enunciado:
      "Cookies são pequenos arquivos de texto gravados no computador pelo navegador, a pedido dos sites visitados, e podem armazenar informações como preferências do usuário e dados de sessão.",
    gabarito: "C",
    comentario: "É o conceito correto de cookie, usado para manter login, carrinho de compras e preferências, mas também para rastrear a navegação.",
  },
  {
    id: "inf-009",
    pool: "informatica",
    assunto: "Navegadores: cache",
    enunciado:
      "O cache do navegador tem a finalidade de armazenar as senhas digitadas pelo usuário, evitando que elas sejam solicitadas novamente em acessos posteriores.",
    gabarito: "E",
    comentario:
      "O cache guarda cópias de recursos das páginas visitadas, como imagens, scripts e arquivos de estilo, para acelerar o carregamento em novos acessos. Senhas ficam no gerenciador de senhas.",
  },
  {
    id: "inf-010",
    pool: "informatica",
    assunto: "Correio eletrônico: CC e CCO",
    enunciado:
      "Os endereços inseridos no campo CCO (cópia oculta) de uma mensagem de correio eletrônico não são exibidos aos demais destinatários.",
    gabarito: "C",
    comentario: "No campo CCO, os destinatários recebem a mensagem sem que os demais vejam seus endereços. No campo CC (com cópia), todos os endereços são visíveis.",
  },
  {
    id: "inf-011",
    pool: "informatica",
    assunto: "LibreOffice Writer: atalhos",
    enunciado: "No LibreOffice Writer, o atalho Ctrl+N aplica negrito ao texto selecionado.",
    gabarito: "E",
    comentario:
      "No LibreOffice, Ctrl+N cria um novo documento. O negrito é aplicado com Ctrl+B, e não com Ctrl+N, como ocorre no Word em português.",
  },
  {
    id: "inf-012",
    pool: "informatica",
    assunto: "LibreOffice Writer: atalhos",
    enunciado:
      "No LibreOffice Writer, as combinações Ctrl+I e Ctrl+U aplicam, respectivamente, itálico e sublinhado ao texto selecionado.",
    gabarito: "C",
    comentario: "No LibreOffice: Ctrl+B para negrito, Ctrl+I para itálico e Ctrl+U para sublinhado.",
  },
  {
    id: "inf-013",
    pool: "informatica",
    assunto: "LibreOffice: extensões de arquivo",
    enunciado:
      "No formato padrão OpenDocument do LibreOffice, as extensões .odt, .ods e .odp correspondem, respectivamente, a documentos de texto (Writer), planilhas (Calc) e apresentações (Impress).",
    gabarito: "C",
    comentario: "As letras finais indicam o tipo: t (text), s (spreadsheet) e p (presentation).",
  },
  {
    id: "inf-014",
    pool: "informatica",
    assunto: "LibreOffice Calc: funções",
    enunciado:
      "No LibreOffice Calc, se as células A1, A2 e A3 contêm, respectivamente, os valores 10, 20 e 30, a fórmula =SOMA(A1;A3) retorna 60.",
    gabarito: "E",
    comentario:
      "O ponto e vírgula separa argumentos distintos, então a fórmula soma apenas A1 e A3: 10 + 30 = 40. Para somar todo o intervalo, seria =SOMA(A1:A3), que retornaria 60.",
  },
  {
    id: "inf-015",
    pool: "informatica",
    assunto: "LibreOffice Calc: funções",
    enunciado:
      "No LibreOffice Calc, se a célula B2 contém o valor 7, a fórmula =SE(B2>=6;\"Aprovado\";\"Reprovado\") retornará o texto Aprovado.",
    gabarito: "C",
    comentario: "A função SE retorna o segundo argumento quando o teste é verdadeiro. Como 7 >= 6, o resultado é “Aprovado”.",
  },
  {
    id: "inf-016",
    pool: "informatica",
    assunto: "LibreOffice Calc: funções",
    enunciado:
      "No LibreOffice Calc, a fórmula =CONT.SE(A1:A10;\">5\") retorna a soma dos valores maiores que 5 existentes no intervalo A1:A10.",
    gabarito: "E",
    comentario:
      "CONT.SE conta quantas células do intervalo atendem ao critério, e não soma seus valores. A soma condicional é feita com SOMASE.",
  },
  {
    id: "inf-017",
    pool: "informatica",
    assunto: "LibreOffice Calc: referências",
    enunciado:
      "No LibreOffice Calc, se a célula C2 contém a fórmula =B2*$E$1 e ela é copiada para a célula C3, a fórmula resultante em C3 será =B3*$E$1.",
    gabarito: "C",
    comentario: "A referência relativa B2 se ajusta ao deslocamento (B3), enquanto a referência absoluta $E$1 permanece fixa.",
  },
  {
    id: "inf-018",
    pool: "informatica",
    assunto: "Windows 10: atalhos",
    enunciado:
      "No Windows 10, a combinação Win+E abre o Explorador de Arquivos, e a combinação Win+L bloqueia a estação de trabalho.",
    gabarito: "C",
    comentario: "Win+E abre o Explorador de Arquivos e Win+L bloqueia o computador, exibindo a tela de bloqueio.",
  },
  {
    id: "inf-019",
    pool: "informatica",
    assunto: "Windows 10: atalhos",
    enunciado:
      "No Windows 10, a combinação Win+D abre o Gerenciador de Tarefas, enquanto a combinação Ctrl+Shift+Esc minimiza todas as janelas e exibe a Área de Trabalho.",
    gabarito: "E",
    comentario: "As funções estão invertidas: Ctrl+Shift+Esc abre o Gerenciador de Tarefas e Win+D mostra a Área de Trabalho.",
  },
  {
    id: "inf-020",
    pool: "informatica",
    assunto: "Windows 10: Lixeira",
    enunciado:
      "No Windows 10, o arquivo excluído com a combinação Shift+Delete é removido permanentemente, sem passar pela Lixeira, o mesmo ocorrendo, em regra, com arquivos excluídos de unidades removíveis, como pen drives.",
    gabarito: "C",
    comentario: "Com Shift+Delete a exclusão é definitiva, e arquivos apagados de pen drives não vão para a Lixeira do computador.",
  },
  {
    id: "inf-021",
    pool: "informatica",
    assunto: "Segurança: malware",
    enunciado:
      "Diferentemente dos vírus, que dependem de um arquivo hospedeiro, os worms são capazes de se autorreplicar e de se propagar pela rede sem precisar se anexar a outros programas.",
    gabarito: "C",
    comentario: "O worm é um programa autônomo que explora vulnerabilidades e se dissemina pelas redes. O vírus precisa infectar um arquivo ou programa hospedeiro.",
  },
  {
    id: "inf-022",
    pool: "informatica",
    assunto: "Segurança: phishing",
    enunciado:
      "O phishing consiste na instalação, no computador da vítima, de um programa que registra as teclas digitadas e as envia ao invasor.",
    gabarito: "E",
    comentario:
      "O programa que registra as teclas digitadas é o keylogger. O phishing é uma técnica de engenharia social, em que mensagens ou páginas falsas induzem a vítima a fornecer dados sigilosos.",
  },
  {
    id: "inf-023",
    pool: "informatica",
    assunto: "Segurança: backup",
    enunciado:
      "O backup incremental copia todos os arquivos alterados desde o último backup completo; por isso, para restaurar os dados, bastam o último backup completo e o último backup incremental.",
    gabarito: "E",
    comentario:
      "O incremental copia apenas o que mudou desde o último backup de qualquer tipo. A restauração exige o último completo e todos os incrementais feitos depois dele. A descrição da assertiva é a do backup diferencial.",
  },
  {
    id: "inf-024",
    pool: "informatica",
    assunto: "Segurança: backup",
    enunciado:
      "O backup diferencial copia os arquivos alterados desde o último backup completo; por isso, a restauração exige apenas o último backup completo e o último backup diferencial.",
    gabarito: "C",
    comentario:
      "O diferencial é cumulativo em relação ao último completo, portanto basta o último completo mais o último diferencial.",
  },
  {
    id: "inf-025",
    pool: "informatica",
    assunto: "Segurança: firewall e antivírus",
    enunciado:
      "O firewall, ao filtrar o tráfego de rede, dispensa o uso de antivírus, pois impede a ação de todos os vírus que já estejam em arquivos armazenados no computador.",
    gabarito: "E",
    comentario:
      "O firewall controla conexões de entrada e saída, mas não examina nem remove vírus de arquivos já armazenados. Ele complementa o antivírus, não o substitui.",
  },

  // ───────────────────────── RACIOCÍNIO LÓGICO-MATEMÁTICO ─────────────────────────
  {
    id: "rlm-001",
    pool: "rlm",
    assunto: "Proposições",
    enunciado:
      "As sentenças “Qual é o valor do benefício?” e “Seja bem-vindo à agência!” são proposições lógicas.",
    gabarito: "E",
    comentario:
      "Proposição é uma sentença declarativa que pode ser julgada verdadeira ou falsa. Sentenças interrogativas, exclamativas e imperativas não são proposições.",
  },
  {
    id: "rlm-002",
    pool: "rlm",
    assunto: "Proposições",
    enunciado:
      "A sentença “x + 3 = 10” é uma sentença aberta e, por isso, não é proposição enquanto o valor de x não for especificado.",
    gabarito: "C",
    comentario:
      "Sem que se conheça o valor de x, não é possível atribuir V ou F à sentença. Sentenças abertas se tornam proposições quando x é substituído ou quantificado.",
  },
  {
    id: "rlm-003",
    pool: "rlm",
    assunto: "Tabela-verdade",
    enunciado:
      "A tabela-verdade de uma proposição composta formada por três proposições simples distintas possui oito linhas.",
    gabarito: "C",
    comentario: "O número de linhas é 2^n, em que n é a quantidade de proposições simples distintas. Com n = 3, tem-se 2³ = 8 linhas.",
  },
  {
    id: "rlm-004",
    pool: "rlm",
    assunto: "Condicional",
    enunciado:
      "Sabe-se que a proposição “Se o servidor é eficiente, então ele é promovido” é falsa. Logo, o servidor é eficiente e não é promovido.",
    gabarito: "C",
    comentario:
      "A condicional p → q só é falsa quando p é verdadeira e q é falsa. Portanto, “o servidor é eficiente” é V e “ele é promovido” é F.",
  },
  {
    id: "rlm-005",
    pool: "rlm",
    assunto: "Negação de proposições",
    enunciado:
      "A negação da proposição “O segurado é idoso e reside em área rural” é “O segurado não é idoso ou não reside em área rural”.",
    gabarito: "C",
    comentario: "Pela lei de De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q. Nega-se cada parte e troca-se “e” por “ou”.",
  },
  {
    id: "rlm-006",
    pool: "rlm",
    assunto: "Negação de proposições",
    enunciado:
      "A negação da proposição “A agência abre às segundas ou às terças” é “A agência não abre às segundas ou não abre às terças”.",
    gabarito: "E",
    comentario:
      "Pela lei de De Morgan, ~(p ∨ q) ≡ ~p ∧ ~q. A negação correta é “A agência não abre às segundas e não abre às terças”.",
  },
  {
    id: "rlm-007",
    pool: "rlm",
    assunto: "Negação de proposições",
    enunciado:
      "A negação da proposição “Se chover, então o atendimento será suspenso” é “Se não chover, então o atendimento não será suspenso”.",
    gabarito: "E",
    comentario:
      "A negação de p → q é p ∧ ~q, ou seja, “Choveu e o atendimento não foi suspenso”. A frase da assertiva é a inversa negada, que não é a negação da condicional.",
  },
  {
    id: "rlm-008",
    pool: "rlm",
    assunto: "Equivalências lógicas",
    enunciado:
      "A proposição “Se o requerimento é protocolado, então ele é analisado” é logicamente equivalente a “Se o requerimento não é analisado, então ele não é protocolado”.",
    gabarito: "C",
    comentario: "É a contrapositiva: p → q ≡ ~q → ~p.",
  },
  {
    id: "rlm-009",
    pool: "rlm",
    assunto: "Equivalências lógicas",
    enunciado:
      "A proposição “Se p, então q” é logicamente equivalente à proposição “Se q, então p”.",
    gabarito: "E",
    comentario:
      "“Se q, então p” é a recíproca (ou inversa) de p → q e não é equivalente a ela. As equivalências da condicional são a contrapositiva (~q → ~p) e ~p ∨ q.",
  },
  {
    id: "rlm-010",
    pool: "rlm",
    assunto: "Tautologia e contradição",
    enunciado: "A proposição (p ∧ q) → p é uma tautologia.",
    gabarito: "C",
    comentario:
      "A condicional só seria falsa se p ∧ q fosse verdadeira e p falsa, o que é impossível, pois p ∧ q verdadeira exige p verdadeira. Logo, o valor lógico é sempre V.",
  },
  {
    id: "rlm-011",
    pool: "rlm",
    assunto: "Tautologia e contradição",
    enunciado: "A proposição p ∨ ~p é uma contradição.",
    gabarito: "E",
    comentario:
      "Uma das duas, p ou ~p, é sempre verdadeira, então a disjunção é sempre V: trata-se de uma tautologia (princípio do terceiro excluído). A contradição seria p ∧ ~p.",
  },
  {
    id: "rlm-012",
    pool: "rlm",
    assunto: "Conjuntos",
    enunciado:
      "Em um grupo de 50 candidatos, 28 estudam Direito, 30 estudam Informática e 12 estudam as duas matérias. Nesse caso, 4 candidatos não estudam nenhuma das duas.",
    gabarito: "C",
    comentario:
      "n(D ∪ I) = 28 + 30 − 12 = 46. Então 50 − 46 = 4 candidatos ficam fora dos dois conjuntos.",
  },
  {
    id: "rlm-013",
    pool: "rlm",
    assunto: "Conjuntos",
    enunciado:
      "Em um grupo de 60 segurados atendidos, 35 apresentaram o RG, 40 apresentaram o CPF e 15 apresentaram os dois documentos. Nesse caso, 5 segurados não apresentaram nenhum dos dois documentos.",
    gabarito: "E",
    comentario:
      "n(RG ∪ CPF) = 35 + 40 − 15 = 60. Como o grupo tem 60 segurados, nenhum deles ficou fora da união, isto é, 0 segurado não apresentou documento algum.",
  },
  {
    id: "rlm-014",
    pool: "rlm",
    assunto: "Conjuntos: subconjuntos",
    enunciado:
      "O conjunto A = {a, b, c, d} possui exatamente 8 subconjuntos.",
    gabarito: "E",
    comentario:
      "Um conjunto com n elementos possui 2^n subconjuntos. Com n = 4, são 2⁴ = 16 subconjuntos, incluindo o vazio e o próprio A.",
  },
  {
    id: "rlm-015",
    pool: "rlm",
    assunto: "Porcentagem: variações sucessivas",
    enunciado:
      "Um valor que sofre um aumento de 20% e, em seguida, um desconto de 20% retorna ao valor original.",
    gabarito: "E",
    comentario:
      "Os percentuais incidem sobre bases diferentes: 1,20 × 0,80 = 0,96. O valor final é 4% menor que o original.",
  },
  {
    id: "rlm-016",
    pool: "rlm",
    assunto: "Porcentagem: variações sucessivas",
    enunciado:
      "Um benefício de R$ 2.000,00 recebeu reajuste de 10% e, depois, novo reajuste de 5% sobre o valor já reajustado. O valor final do benefício é R$ 2.310,00.",
    gabarito: "C",
    comentario: "2.000 × 1,10 = 2.200 e 2.200 × 1,05 = 2.310. O fator acumulado é 1,155, isto é, 15,5%, e não 15%.",
  },
  {
    id: "rlm-017",
    pool: "rlm",
    assunto: "Análise combinatória: combinação",
    enunciado:
      "Uma comissão de 3 servidores será formada escolhendo-se entre 6 candidatos, sem distinção de funções entre os membros. Nesse caso, podem ser formadas 20 comissões distintas.",
    gabarito: "C",
    comentario: "A ordem não importa, então se trata de combinação: C(6,3) = 6·5·4 / (3·2·1) = 20.",
  },
  {
    id: "rlm-018",
    pool: "rlm",
    assunto: "Análise combinatória: arranjo",
    enunciado:
      "Entre 6 servidores serão escolhidos 3 para ocupar as funções distintas de presidente, secretário e relator de uma comissão. Nesse caso, há 20 maneiras diferentes de fazer a escolha.",
    gabarito: "E",
    comentario:
      "Como as funções são distintas, a ordem importa, então se trata de arranjo: A(6,3) = 6 × 5 × 4 = 120 maneiras. O valor 20 é o número de combinações, que não considera as funções.",
  },
  {
    id: "rlm-019",
    pool: "rlm",
    assunto: "Probabilidade",
    enunciado:
      "Ao se lançarem dois dados honestos e se somarem os números das faces voltadas para cima, a probabilidade de a soma ser igual a 7 é de 1/12.",
    gabarito: "E",
    comentario:
      "Existem 6 × 6 = 36 resultados possíveis. A soma 7 ocorre em 6 deles: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1). A probabilidade é 6/36 = 1/6.",
  },
  {
    id: "rlm-020",
    pool: "rlm",
    assunto: "Probabilidade",
    enunciado:
      "Uma urna contém 4 bolas azuis e 6 bolas vermelhas, todas idênticas, exceto pela cor. Retirando-se ao acaso uma bola, a probabilidade de que ela seja azul é de 40%.",
    gabarito: "C",
    comentario: "P = casos favoráveis / casos possíveis = 4/10 = 0,4 = 40%.",
  },
]
