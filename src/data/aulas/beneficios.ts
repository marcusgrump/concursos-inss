import type { Aula } from "./types"

/**
 * Aulas do pool "beneficios": Plano de Benefícios do RGPS (Lei nº 8.213/1991),
 * Decreto nº 3.048/1999, IN PRES/INSS nº 128/2022, EC nº 103/2019,
 * LC nº 142/2013, contagem recíproca e serviços previdenciários.
 * Valores em reais são sempre hipotéticos (apenas para treinar o cálculo).
 */
export const AULAS_BENEFICIOS: Aula[] = [
  {
    id: "ben-normas-prestacoes",
    titulo: "Normas do RGPS e o cardápio de prestações (Lei 8.213, Decreto 3.048 e IN 128)",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-22", "tec-esp-23", "tec-esp-24", "ana-prev-9", "ana-prev-11"],
    texto: [
      "O Regime Geral de Previdência Social (RGPS), administrado pelo INSS, é organizado por um conjunto de normas em camadas. No topo está a Constituição (art. 201), muito alterada pela EC nº 103/2019 (Reforma da Previdência). Abaixo vêm as leis: a Lei nº 8.212/1991 trata do custeio (quem contribui e quanto) e a Lei nº 8.213/1991 trata do Plano de Benefícios (quem recebe, o quê e em que condições).",
      "O Decreto nº 3.048/1999 é o Regulamento da Previdência Social (RPS). Ele detalha as duas leis — custeio e benefícios — e foi amplamente atualizado pelo Decreto nº 10.410/2020 para se adequar à EC nº 103/2019. Por ser decreto, não pode criar direito nem obrigação contra a lei: serve para dar fiel execução a ela.",
      "Mais abaixo está a Instrução Normativa PRES/INSS nº 128/2022, editada pela Presidência do INSS em março de 2022. Ela substituiu a antiga IN nº 77/2015 e reúne as regras, procedimentos e rotinas que os servidores do INSS seguem para reconhecer, manter e revisar direitos (cadastro, benefícios, manutenção, acumulação, recursos, revisão, compensação previdenciária, reabilitação etc.). É complementada por portarias temáticas e já foi alterada por instruções normativas posteriores. Para a prova, o importante é saber o que ela é e sua posição na hierarquia: vincula a atuação interna do INSS, mas não pode contrariar lei ou decreto.",
      "A Lei nº 8.213 lista as prestações do RGPS (art. 18), que se dividem em benefícios (pagamentos em dinheiro) e serviços. Ao segurado cabem: aposentadorias, auxílio por incapacidade temporária (antigo auxílio-doença), salário-família, salário-maternidade e auxílio-acidente. Aos dependentes: pensão por morte e auxílio-reclusão. A ambos: serviço social e reabilitação profissional.",
      "Atenção aos nomes: a EC nº 103/2019 passou a usar 'auxílio por incapacidade temporária' e 'aposentadoria por incapacidade permanente', e as aposentadorias por idade e por tempo de contribuição deram lugar, para os novos filiados, à 'aposentadoria programada'. O texto da Lei nº 8.213 ainda conserva em vários pontos os nomes antigos (auxílio-doença, aposentadoria por invalidez) — a banca pode usar qualquer das duas formas.",
      "Por fim, o tempo também conta contra o beneficiário: o direito de pedir revisão do ato de concessão do benefício decai em 10 anos; as parcelas vencidas prescrevem em 5 anos; e o INSS tem 10 anos para anular atos que favoreçam o beneficiário, salvo comprovada má-fé.",
    ],
    pontosChave: [
      "Lei nº 8.212/1991 = custeio; Lei nº 8.213/1991 = Plano de Benefícios; Decreto nº 3.048/1999 = Regulamento (custeio + benefícios).",
      "IN PRES/INSS nº 128/2022: norma interna de procedimentos do INSS; substituiu a IN nº 77/2015.",
      "Prestações do segurado: aposentadorias, auxílio por incapacidade temporária, salário-família, salário-maternidade e auxílio-acidente.",
      "Prestações do dependente: pensão por morte e auxílio-reclusão. De ambos: serviço social e reabilitação profissional.",
      "Auxílio-acidente: só para empregado, doméstico (desde a LC nº 150/2015), avulso e segurado especial.",
      "Aposentado que continua trabalhando no RGPS contribui, mas só tem direito a salário-família e reabilitação profissional, quando empregado.",
      "Decadência para o segurado revisar o ato de concessão: 10 anos (art. 103). Prescrição das parcelas: 5 anos (art. 103, parágrafo único).",
      "INSS anula atos favoráveis ao beneficiário em até 10 anos, salvo má-fé (art. 103-A).",
      "Não se admite inscrição post mortem de contribuinte individual nem de facultativo (art. 17, § 7º).",
      "Reajuste dos benefícios: anual, na data do reajuste do salário mínimo, pelo INPC (art. 41-A).",
    ],
    exemplos: [
      {
        titulo: "Quem recebe o quê?",
        texto:
          "João, empregado, sofre um acidente e fica com sequela que reduz sua capacidade: recebe auxílio-acidente (prestação do segurado). Se João falecer, sua esposa e filhos recebem pensão por morte (prestação do dependente). Se o filho de João, dependente, tiver deficiência e precisar de reabilitação, o serviço pode alcançá-lo (prestação de segurado e dependente).",
      },
      {
        titulo: "Contando a decadência",
        texto:
          "Maria recebeu a primeira parcela da aposentadoria em 10/03/2016. O prazo de 10 anos para pedir revisão do cálculo começa no dia 1º do mês seguinte ao do primeiro pagamento: 01/04/2016. Logo, ela pode pedir a revisão até 31/03/2026. Mesmo que ganhe a revisão, só recebe as diferenças dos últimos 5 anos (prescrição quinquenal).",
      },
    ],
    esquemas: [
      {
        tipo: "grupos",
        titulo: "Prestações do RGPS (art. 18 da Lei nº 8.213/1991)",
        grupos: [
          {
            nome: "Segurado",
            itens: [
              "Aposentadorias (programada, por idade, especial, por incapacidade permanente etc.)",
              "Auxílio por incapacidade temporária",
              "Salário-família",
              "Salário-maternidade",
              "Auxílio-acidente",
            ],
          },
          { nome: "Dependente", itens: ["Pensão por morte", "Auxílio-reclusão"] },
          { nome: "Segurado e dependente", itens: ["Serviço social", "Reabilitação profissional"] },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Hierarquia das normas de benefícios",
        passos: [
          { titulo: "Constituição (art. 201) + EC nº 103/2019", texto: "Idades, tempo mínimo, regras de transição e cálculo provisório." },
          { titulo: "Leis (8.212/1991 e 8.213/1991) e LC nº 142/2013", texto: "Criam direitos e obrigações." },
          { titulo: "Decreto nº 3.048/1999 (RPS)", texto: "Regulamenta as leis; não pode inovar contra elas." },
          { titulo: "IN PRES/INSS nº 128/2022 e portarias", texto: "Procedimentos e rotinas internas do INSS." },
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o auxílio-acidente ou o salário-família é prestação do dependente — são do segurado. Ao dependente cabem só pensão e auxílio-reclusão (mais os serviços).",
      "Afirmar que o contribuinte individual ou o facultativo têm direito a auxílio-acidente — não têm.",
      "Dizer que o aposentado que volta a trabalhar tem direito a novo auxílio por incapacidade temporária — só tem salário-família e reabilitação profissional, quando empregado.",
      "Trocar o índice de reajuste: é o INPC, não o IPCA.",
      "Afirmar que uma instrução normativa do INSS pode criar requisito não previsto em lei — ela apenas orienta procedimentos.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 17, § 7º; 18; 41-A; 103 e 103-A",
      "Decreto nº 3.048/1999 (Regulamento da Previdência Social), atualizado pelo Decreto nº 10.410/2020",
      "Instrução Normativa PRES/INSS nº 128/2022",
      "CF/1988, art. 201 (redação da EC nº 103/2019)",
    ],
  },
  {
    id: "ben-dependentes",
    titulo: "Dependentes: as três classes e a dependência econômica",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-22", "ana-prev-9"],
    texto: [
      "Dependente é quem, por ter vínculo familiar com o segurado, pode receber prestações em nome próprio quando ele morre (pensão por morte) ou é preso (auxílio-reclusão). A Lei nº 8.213 organiza os dependentes em três classes, e a lógica é de preferência: se existir alguém de uma classe, as classes seguintes ficam de fora.",
      "Classe I: cônjuge, companheiro ou companheira e filho não emancipado, de qualquer condição, menor de 21 anos ou inválido ou com deficiência intelectual, mental ou grave. Classe II: os pais. Classe III: o irmão não emancipado, menor de 21 anos ou inválido ou com deficiência intelectual, mental ou grave.",
      "Na classe I a dependência econômica é presumida — basta provar o vínculo (casamento, união estável, filiação). Nas classes II e III é preciso comprovar que o dependente vivia às custas do segurado. Dentro da mesma classe, todos concorrem em igualdade: a pensão é dividida entre eles.",
      "Equiparam-se a filho, mediante declaração do segurado e desde que não tenham condições de se sustentar, o enteado, o menor sob tutela e — desde a Lei nº 15.108/2025 — o menor sob guarda judicial. O ex-cônjuge que recebia pensão de alimentos concorre em igualdade com a classe I.",
      "A Lei nº 13.846/2019 endureceu a prova: união estável e dependência econômica exigem início de prova material contemporânea, produzida nos 24 meses anteriores ao óbito ou à prisão; prova só testemunhal não basta, salvo força maior ou caso fortuito. E quem for condenado definitivamente por homicídio doloso (ou tentativa) contra o segurado é excluído como dependente, ressalvados os absolutamente incapazes e os inimputáveis.",
    ],
    pontosChave: [
      "Classe I: cônjuge, companheiro(a), filho < 21 anos ou inválido/com deficiência intelectual, mental ou grave — dependência PRESUMIDA.",
      "Classe II: pais — dependência deve ser COMPROVADA.",
      "Classe III: irmão < 21 anos ou inválido/com deficiência intelectual, mental ou grave — dependência COMPROVADA.",
      "A existência de dependente de uma classe exclui os das classes seguintes (art. 16, § 1º).",
      "Equiparados a filho: enteado, menor tutelado e menor sob guarda judicial (Lei nº 15.108/2025), com declaração do segurado e sem meios de sustento próprio.",
      "Prova de união estável/dependência: início de prova material dos últimos 24 meses antes do óbito ou da prisão; não vale prova exclusivamente testemunhal.",
      "Para a pensão do cônjuge durar mais de 4 meses, é preciso provar ao menos 2 anos de casamento/união (art. 16, § 6º, c/c art. 77).",
      "O dependente faz sua inscrição quando requer o benefício (art. 17, § 1º).",
    ],
    exemplos: [
      {
        titulo: "Classe anterior exclui a seguinte",
        texto:
          "Carlos morre deixando esposa e a mãe, que ele ajudava a sustentar. A esposa é da classe I; a mãe, da classe II. Resultado: só a esposa recebe pensão. A mãe fica de fora mesmo provando que dependia de Carlos.",
      },
      {
        titulo: "Sem classe I: vez dos pais",
        texto:
          "Pedro, solteiro e sem filhos, morre deixando a mãe (que dependia dele economicamente, com prova material) e um irmão de 17 anos. A mãe (classe II) exclui o irmão (classe III). Se a mãe não conseguir provar a dependência econômica, aí sim o irmão pode ser analisado — também com prova de dependência.",
      },
      {
        titulo: "Rateio dentro da classe",
        texto:
          "Ana morre deixando o companheiro e dois filhos (10 e 15 anos). Os três estão na classe I e dividem a pensão em partes iguais. O companheiro não precisa provar que dependia de Ana — só a união estável, com início de prova material.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Classes de dependentes (art. 16 da Lei nº 8.213/1991)",
        colunas: ["Classe", "Quem", "Dependência econômica"],
        linhas: [
          ["I", "Cônjuge, companheiro(a), filho < 21 ou inválido/com deficiência intelectual, mental ou grave (e equiparados)", "Presumida"],
          ["II", "Pais", "Deve ser comprovada"],
          ["III", "Irmão < 21 ou inválido/com deficiência intelectual, mental ou grave", "Deve ser comprovada"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que os pais concorrem com o cônjuge — não concorrem: a classe I exclui a II.",
      "Dizer que a dependência econômica dos pais é presumida — só a da classe I é presumida.",
      "Trocar a idade do filho/irmão: o limite é 21 anos (não 18 nem 24, e faculdade não prorroga).",
      "Afirmar que a união estável pode ser provada só por testemunhas — exige início de prova material, salvo força maior ou caso fortuito.",
      "Atenção à norma citada: o art. 23, § 6º, da EC nº 103/2019 fala apenas em enteado e menor tutelado; já a Lei nº 8.213 (redação da Lei nº 15.108/2025) inclui também o menor sob guarda judicial.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 16, 17 e 76",
      "EC nº 103/2019, art. 23, § 6º",
      "Lei nº 15.108/2025 (nova redação do art. 16, § 2º)",
    ],
  },
  {
    id: "ben-carencia",
    titulo: "Carência: quantas contribuições cada benefício exige",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-22", "tec-esp-23", "ana-prev-9"],
    texto: [
      "Carência é o número mínimo de contribuições mensais que o segurado precisa ter para ganhar determinado benefício. Não confunda com tempo de contribuição: carência conta meses com contribuição válida para esse fim; tempo de contribuição é o período total, usado para requisitos de aposentadoria e para o cálculo do valor.",
      "As carências estão no art. 25 da Lei nº 8.213: 12 contribuições para os benefícios por incapacidade (auxílio por incapacidade temporária e aposentadoria por incapacidade permanente); 180 contribuições para as aposentadorias programáveis (idade, tempo de contribuição, especial — hoje, aposentadoria programada); 10 contribuições para o salário-maternidade da contribuinte individual, da facultativa e da segurada especial; e 24 contribuições para o auxílio-reclusão (incluído pela Lei nº 13.846/2019).",
      "Sobre o salário-maternidade: embora o texto da lei ainda preveja as 10 contribuições para contribuinte individual, facultativa e segurada especial, o STF, no julgamento das ADIs 2110 e 2111 (2024), declarou inconstitucional essa exigência, por tratar de forma desigual seguradas que já tinham dispensa (empregada, doméstica e avulsa). Na prova, observe se o item pede a letra da lei ou o entendimento do STF.",
      "Diversas prestações independem de carência (art. 26): pensão por morte, salário-família e auxílio-acidente; benefícios por incapacidade decorrentes de acidente de qualquer natureza, doença profissional ou do trabalho, ou de doenças graves da lista oficial (tuberculose ativa, hanseníase, neoplasia maligna, cegueira, cardiopatia grave, doença de Parkinson, aids, entre outras) quando surgidas após a filiação; benefícios de valor mínimo do segurado especial; serviço social; reabilitação profissional; e salário-maternidade da empregada, doméstica e avulsa.",
      "Como contar: para empregado (inclusive doméstico) e avulso, conta-se desde a filiação, porque a contribuição é presumida (quem recolhe é o empregador). Para contribuinte individual, segurado especial e facultativo, só contam as contribuições a partir do primeiro pagamento feito em dia; as competências anteriores pagas com atraso não entram na carência.",
      "Se o segurado perder a qualidade de segurado e depois voltar a contribuir, precisa cumprir, a partir da nova filiação, METADE da carência para auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, salário-maternidade e auxílio-reclusão (art. 27-A).",
    ],
    pontosChave: [
      "12 contribuições: auxílio por incapacidade temporária e aposentadoria por incapacidade permanente.",
      "180 contribuições (15 anos): aposentadorias programáveis (idade, tempo de contribuição, especial).",
      "10 contribuições: salário-maternidade de CI, facultativa e segurada especial (letra da lei; exigência declarada inconstitucional pelo STF nas ADIs 2110/2111).",
      "24 contribuições: auxílio-reclusão (Lei nº 13.846/2019).",
      "Sem carência: pensão por morte, salário-família, auxílio-acidente, serviço social, reabilitação profissional, salário-maternidade de empregada/doméstica/avulsa.",
      "Sem carência: incapacidade por acidente de qualquer natureza, doença profissional/do trabalho ou doença grave da lista surgida após a filiação.",
      "Parto antecipado: a carência do salário-maternidade é reduzida no número de meses da antecipação (art. 25, parágrafo único).",
      "Após perda da qualidade: metade da carência — 6 (incapacidade), 5 (salário-maternidade, onde exigida) e 12 (auxílio-reclusão).",
      "Empregado, doméstico e avulso: carência desde a filiação. CI, especial e facultativo: desde o 1º pagamento em dia.",
      "Após a EC nº 103/2019, só conta a competência cuja contribuição corresponda a salário de contribuição igual ou superior ao mínimo mensal (CF, art. 195, § 14; Decreto nº 3.048, art. 26).",
    ],
    exemplos: [
      {
        titulo: "Acidente no primeiro mês",
        texto:
          "Lucas é contratado como empregado em 02/05 e, em 20/05, sofre acidente de trânsito no fim de semana, ficando 60 dias incapaz. Ele tem só 1 contribuição, mas o acidente de qualquer natureza dispensa carência: tem direito ao auxílio por incapacidade temporária (a empresa paga os 15 primeiros dias).",
      },
      {
        titulo: "Contribuinte individual com atraso",
        texto:
          "Bia, autônoma, se inscreve e paga de uma só vez, com atraso, 12 competências antigas. Depois começa a pagar em dia. As 12 competências atrasadas, anteriores ao primeiro pagamento em dia, não contam como carência. Se ela adoecer (doença comum) com apenas 5 pagamentos em dia, não terá as 12 contribuições exigidas.",
      },
      {
        titulo: "Voltando após perder a qualidade",
        texto:
          "Rui contribuiu 8 anos, ficou 5 anos sem contribuir e perdeu a qualidade de segurado. Voltou a contribuir. Para um auxílio por incapacidade temporária por doença comum, precisa de 6 novas contribuições (metade de 12). Para auxílio-reclusão (a ser pago a seus dependentes), 12 novas contribuições (metade de 24).",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Tabela de carências (arts. 25 a 27-A da Lei nº 8.213/1991)",
        colunas: ["Prestação", "Carência", "Após perder a qualidade"],
        linhas: [
          ["Auxílio por incapacidade temporária", "12", "6"],
          ["Aposentadoria por incapacidade permanente", "12", "6"],
          ["Aposentadorias programáveis", "180", "—"],
          ["Salário-maternidade (CI, facultativa, especial)", "10 na lei (afastada pelo STF)", "5 na lei"],
          ["Salário-maternidade (empregada, doméstica, avulsa)", "Isento", "—"],
          ["Auxílio-reclusão", "24", "12"],
          ["Pensão por morte, salário-família, auxílio-acidente", "Isento", "—"],
          ["Serviço social e reabilitação profissional", "Isento", "—"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a pensão por morte exige 18 contribuições de carência — não há carência; as 18 contribuições só influenciam a DURAÇÃO da pensão do cônjuge.",
      "Dizer que o auxílio-reclusão independe de carência — desde 2019 exige 24 contribuições.",
      "Afirmar que a carência das aposentadorias programáveis é de 120 contribuições — são 180.",
      "Dizer que contribuições pagas com atraso pelo contribuinte individual sempre contam para a carência — as anteriores ao 1º pagamento em dia não contam.",
      "Achar que, após perder a qualidade, o segurado precisa cumprir toda a carência de novo — é metade, nos 4 benefícios do art. 27-A.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 24, 25, 26, 27, 27-A e 151",
      "STF, ADIs 2110 e 2111 (julgamento de 2024) — salário-maternidade",
      "Decreto nº 3.048/1999, arts. 26 a 30",
    ],
  },
  {
    id: "ben-qualidade-segurado",
    titulo: "Qualidade de segurado e período de graça",
    pool: "beneficios",
    topicos: ["tec-esp-13", "tec-esp-23", "ana-prev-10"],
    texto: [
      "Ter 'qualidade de segurado' significa estar protegido pelo RGPS naquele momento. Em regra, quem trabalha e contribui é segurado. Mas a lei não desampara quem para de contribuir de uma hora para outra: existe o chamado período de graça, um prazo em que a pessoa continua segurada mesmo sem pagar nada, conservando todos os seus direitos.",
      "Os prazos estão no art. 15 da Lei nº 8.213. Sem limite de prazo: quem está recebendo benefício (exceto auxílio-acidente). Até 12 meses: o segurado obrigatório que deixa de exercer atividade remunerada (ou fica suspenso/licenciado sem remuneração), contados da cessação das contribuições; também 12 meses após o fim da segregação compulsória por doença e 12 meses após o livramento do preso. Até 3 meses: após o licenciamento de quem foi incorporado às Forças Armadas. Até 6 meses: o segurado facultativo, após parar de contribuir.",
      "O prazo de 12 meses do segurado obrigatório pode crescer: vai a 24 meses se ele já tiver mais de 120 contribuições mensais sem interrupção que tenha causado perda da qualidade; e ganha mais 12 meses se ele estiver desempregado e comprovar isso pelo registro no órgão próprio do Ministério do Trabalho. Somando tudo, o máximo é 36 meses.",
      "A perda da qualidade não acontece no último dia do período de graça. Ela ocorre no dia seguinte ao vencimento da contribuição (do contribuinte individual) referente ao mês imediatamente posterior ao fim do prazo. Como essa contribuição vence no dia 15 do mês seguinte, na prática a perda acontece no dia 16 do segundo mês após o término do período de graça.",
      "Perder a qualidade faz caducar os direitos ligados a ela, mas não apaga o passado: quem já tinha preenchido todos os requisitos de uma aposentadoria conserva o direito, e a perda da qualidade não é considerada para as aposentadorias programáveis quando a carência já foi cumprida. Já a pensão por morte não é devida se o segurado morreu depois de perder a qualidade — salvo se ele já tivesse direito a alguma aposentadoria.",
      "O restabelecimento ocorre com a nova filiação (voltar a trabalhar ou a contribuir). As contribuições antigas voltam a valer, mas, para auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, salário-maternidade e auxílio-reclusão, é preciso cumprir metade da carência a partir da nova filiação (art. 27-A).",
    ],
    pontosChave: [
      "Em gozo de benefício: sem limite de prazo — EXCETO auxílio-acidente.",
      "Segurado obrigatório que para de trabalhar/contribuir: até 12 meses.",
      "Mais de 120 contribuições sem perda da qualidade: +12 meses (vai a 24).",
      "Desempregado com registro no órgão do Ministério do Trabalho: +12 meses. Máximo: 36 meses.",
      "Segregação compulsória: 12 meses após cessar. Preso: 12 meses após o livramento.",
      "Serviço militar: 3 meses após o licenciamento. Facultativo: 6 meses.",
      "Perda: dia seguinte ao vencimento da contribuição do mês posterior ao fim do prazo — na prática, dia 16 do 2º mês após o fim do período de graça.",
      "Durante o período de graça, o segurado conserva TODOS os direitos perante a Previdência (art. 15, § 3º).",
      "Contribuinte individual: o período de graça começa no 1º dia do mês seguinte ao da última contribuição de valor igual ou superior ao mínimo (Decreto nº 3.048, art. 13, § 7º).",
      "Pensão por morte após a perda da qualidade: não é devida, salvo se o falecido já tinha direito a aposentadoria (art. 102, § 2º).",
    ],
    exemplos: [
      {
        titulo: "Empregado com 130 contribuições e desempregado",
        texto:
          "Ana trabalhou 130 meses seguidos com carteira assinada e foi demitida; sua última contribuição foi a da competência março/2023. Ela se registrou como desempregada no órgão do Ministério do Trabalho. Período de graça: 12 (regra) + 12 (mais de 120 contribuições) + 12 (desemprego) = 36 meses, ou seja, mantém a qualidade até março/2026. A contribuição da competência abril/2026 venceria em 15/05/2026; logo, Ana perde a qualidade em 16/05/2026.",
      },
      {
        titulo: "Facultativo que parou de pagar",
        texto:
          "Paulo, estudante, contribuía como facultativo e pagou até a competência junho/2025. Período de graça: 6 meses, até dezembro/2025. A contribuição de janeiro/2026 venceria em 15/02/2026; a perda ocorre em 16/02/2026. Se ele adoecer em 10/02/2026, ainda é segurado.",
      },
      {
        titulo: "Quem recebe só auxílio-acidente",
        texto:
          "Márcio recebe auxílio-acidente desde 2020, mas parou de trabalhar e de contribuir em 2023. Como o auxílio-acidente é a exceção do art. 15, I, ele NÃO mantém a qualidade indefinidamente: seu período de graça corre normalmente a partir da cessação das contribuições.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Calculando o período de graça do segurado obrigatório",
        passos: [
          { titulo: "Base: 12 meses", texto: "Contados da cessação das contribuições." },
          { titulo: "Tem mais de 120 contribuições sem perder a qualidade?", texto: "Se sim, +12 meses (total 24)." },
          { titulo: "Está desempregado e comprova pelo registro no órgão próprio?", texto: "Se sim, +12 meses (até 36)." },
          { titulo: "Fim do prazo + mês seguinte", texto: "A contribuição do mês seguinte vence no dia 15 do mês subsequente." },
          { titulo: "Perda da qualidade", texto: "No dia 16 do 2º mês após o término do período de graça." },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Prazos do art. 15 da Lei nº 8.213/1991",
        colunas: ["Situação", "Prazo"],
        linhas: [
          ["Em gozo de benefício (exceto auxílio-acidente)", "Sem limite"],
          ["Obrigatório que deixou de exercer atividade", "12 meses (24 ou 36 com prorrogações)"],
          ["Doença de segregação compulsória", "12 meses após cessar a segregação"],
          ["Preso (retido ou recluso)", "12 meses após o livramento"],
          ["Incorporado às Forças Armadas", "3 meses após o licenciamento"],
          ["Facultativo", "6 meses após cessar as contribuições"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que quem recebe qualquer benefício, inclusive auxílio-acidente, mantém a qualidade sem limite — o auxílio-acidente é a exceção.",
      "Dar 12 meses ao facultativo — são 6 meses.",
      "Dar 12 meses ao egresso do serviço militar — são 3 meses após o licenciamento.",
      "Afirmar que a perda ocorre no último dia do período de graça — ocorre no dia seguinte ao vencimento da contribuição do mês posterior (dia 16 do 2º mês).",
      "Somar as prorrogações além de 36 meses ou aplicá-las ao facultativo — as prorrogações são do segurado obrigatório (inciso II).",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 15, 27-A e 102",
      "Decreto nº 3.048/1999, arts. 13 e 14",
      "Lei nº 10.666/2003, art. 3º (perda da qualidade e aposentadorias)",
    ],
  },
  {
    id: "ben-calculo",
    titulo: "Salário de benefício, renda mensal e reajustamento (pós-EC 103)",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-19", "ana-prev-9"],
    texto: [
      "O cálculo de um benefício tem duas etapas. Primeiro apura-se o salário de benefício (SB), que é uma média dos salários de contribuição do segurado. Depois aplica-se um percentual (coeficiente) sobre essa média para chegar à renda mensal inicial (RMI), que é o valor efetivamente pago.",
      "Desde a EC nº 103/2019 (art. 26), o SB é a média aritmética simples de 100% dos salários de contribuição desde julho de 1994 (ou desde o início das contribuições, se posterior), corrigidos monetariamente. Acabou o antigo descarte dos 20% menores salários previsto na Lei nº 9.876/1999. O SB não pode ser menor que um salário mínimo nem maior que o teto do RGPS; o 13º salário não entra na média.",
      "Para as aposentadorias, a regra geral é: 60% da média + 2 pontos percentuais por ano de contribuição que passar de 20 anos (homens) ou de 15 anos (mulheres). Também se usa o marco de 15 anos para quem se aposenta pela atividade especial de 15 anos. O percentual pode ultrapassar 100%, mas o benefício sempre respeita o teto.",
      "Há exceções importantes: 100% da média na aposentadoria por incapacidade permanente decorrente de acidente do trabalho, doença profissional ou do trabalho, e na regra de transição do pedágio de 100%; média multiplicada pelo fator previdenciário na transição do pedágio de 50%; 91% do SB no auxílio por incapacidade temporária (limitado à média dos 12 últimos salários de contribuição); 50% do SB no auxílio-acidente. Salário-família, salário-maternidade, pensão por morte e auxílio-reclusão não seguem a lógica do SB — têm regras próprias.",
      "A EC também permite excluir da média as contribuições que reduzam o valor do benefício, desde que se mantenha o tempo mínimo exigido. O tempo excluído, porém, não pode ser usado para mais nada (nem para aumentar o percentual, nem para averbar em outro regime).",
      "Depois de concedidos, os benefícios são reajustados todo ano, na mesma data do reajuste do salário mínimo, pelo INPC, proporcionalmente (pro rata) à data de início. Os que substituem a renda do trabalho nunca podem ser inferiores a um salário mínimo; o auxílio-acidente, por ser indenização, pode.",
    ],
    pontosChave: [
      "SB = média de 100% dos salários de contribuição desde 07/1994 (EC nº 103, art. 26).",
      "Aposentadoria: 60% + 2 p.p. por ano acima de 20 anos (homem) ou 15 anos (mulher).",
      "100% da média: incapacidade permanente acidentária/doença ocupacional e pedágio de 100%.",
      "Pedágio de 50%: média × fator previdenciário.",
      "Auxílio por incapacidade temporária: 91% do SB, limitado à média dos últimos 12 salários de contribuição.",
      "Auxílio-acidente: 50% do SB; pode ser inferior ao salário mínimo.",
      "SB e RMI: mínimo de 1 salário mínimo e máximo no teto (o adicional de 25% pode ultrapassar o teto).",
      "Exclusão de contribuições que reduzam a média: permitida, mantido o tempo mínimo; o tempo excluído não serve para nada.",
      "Reajuste anual pelo INPC, na data do reajuste do salário mínimo, pro rata.",
      "13º salário não integra o SB.",
    ],
    exemplos: [
      {
        titulo: "Homem com 30 anos de contribuição",
        texto:
          "Média (hipotética) de R$ 4.000,00. Anos acima de 20: 30 − 20 = 10. Percentual: 60% + 10 × 2% = 80%. RMI = 80% × 4.000 = R$ 3.200,00.",
      },
      {
        titulo: "Mulher com 25 e com 37 anos de contribuição",
        texto:
          "Com 25 anos: anos acima de 15 = 10; 60% + 10 × 2% = 80% da média. Com 37 anos: anos acima de 15 = 22; 60% + 22 × 2% = 104% da média. Se a média hipotética for R$ 3.000,00, a RMI seria R$ 3.120,00 (desde que abaixo do teto).",
      },
      {
        titulo: "Vale a pena excluir contribuições baixas?",
        texto:
          "Homem com 24 anos de contribuição. Com todas as contribuições, média hipotética de R$ 2.500,00 e percentual de 60% + 4 × 2% = 68%: RMI = R$ 1.700,00. Excluindo 4 anos de salários baixos (fica com os 20 anos mínimos), a média sobe para R$ 3.000,00, mas o percentual cai para 60%: RMI = R$ 1.800,00. Neste caso, a exclusão compensa.",
      },
    ],
    esquemas: [
      {
        tipo: "fluxo",
        titulo: "Do salário de contribuição à renda mensal",
        passos: [
          { titulo: "Salários de contribuição desde 07/1994", texto: "Corrigidos monetariamente; sem o 13º." },
          { titulo: "Média de 100% = salário de benefício", texto: "Entre 1 salário mínimo e o teto." },
          { titulo: "Aplicar o coeficiente", texto: "60% + 2 p.p./ano (acima de 20 H / 15 M); 100%; 91%; 50% etc." },
          { titulo: "Renda mensal inicial", texto: "Respeita piso e teto." },
          { titulo: "Reajuste anual", texto: "INPC, na data do reajuste do salário mínimo." },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Coeficientes mais cobrados",
        colunas: ["Benefício", "Valor"],
        linhas: [
          ["Aposentadoria programada / especial / por incapacidade comum", "60% + 2 p.p. por ano acima de 20 (H) ou 15 (M)"],
          ["Incapacidade permanente acidentária ou por doença ocupacional", "100% da média"],
          ["Transição do pedágio de 100% (art. 20)", "100% da média"],
          ["Transição do pedágio de 50% (art. 17)", "Média × fator previdenciário"],
          ["Auxílio por incapacidade temporária", "91% do SB (teto: média dos 12 últimos SC)"],
          ["Auxílio-acidente", "50% do SB"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que, após a EC nº 103, a média considera os 80% maiores salários — agora é 100% do período desde 07/1994.",
      "Aplicar o acréscimo de 2 p.p. a partir de 15 anos para homens — para homens o marco é 20 anos (salvo atividade especial de 15 anos).",
      "Dizer que o fator previdenciário se aplica a todas as regras de transição — só ao pedágio de 50%.",
      "Afirmar que o auxílio por incapacidade temporária é de 100% do SB — é 91%, com limite na média dos 12 últimos salários de contribuição.",
      "Dizer que os benefícios são reajustados pelo IPCA ou que nenhum benefício pode ser inferior ao mínimo — é INPC, e o auxílio-acidente pode ser inferior ao mínimo.",
    ],
    fundamentos: [
      "EC nº 103/2019, art. 26",
      "Lei nº 8.213/1991, arts. 28, 29, 33, 41-A, 61 e 86",
      "CF/1988, art. 201, § 2º",
      "Decreto nº 3.048/1999, arts. 31 e 32",
    ],
  },
  {
    id: "ben-aposentadorias",
    titulo: "Aposentadorias do RGPS: regras permanentes (programada, rural, professor e especial)",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-19", "tec-esp-22", "ana-prev-9"],
    texto: [
      "A EC nº 103/2019 mudou a lógica da aposentadoria voluntária no RGPS: para quem se filiou depois de 13/11/2019, deixou de existir a aposentadoria só por tempo de contribuição. Agora há a aposentadoria programada, que exige idade mínima e tempo mínimo de contribuição ao mesmo tempo. Quem já era filiado antes da reforma pode usar as regras de transição (estudadas em aula própria) ou, se já tinha cumprido todos os requisitos até 13/11/2019, o direito adquirido às regras antigas.",
      "Aposentadoria programada (regra permanente): mulher aos 62 anos com 15 anos de contribuição; homem aos 65 anos com 20 anos de contribuição (o homem que já era filiado antes da reforma precisa de 15 anos pela regra de transição por idade). A carência continua sendo de 180 contribuições.",
      "Trabalhador rural: a reforma manteve as idades reduzidas de 55 anos (mulher) e 60 anos (homem) para os trabalhadores rurais e quem trabalha em regime de economia familiar — produtor rural, garimpeiro e pescador artesanal —, com 15 anos de atividade rural. O segurado especial que não contribui facultativamente recebe benefício de um salário mínimo. Quem mistura tempo rural e urbano (aposentadoria híbrida) segue as idades da regra urbana.",
      "Professor: para quem comprova 25 anos de contribuição exclusivamente em efetivo exercício de magistério na educação infantil e nos ensinos fundamental e médio, as idades são 57 anos (mulher) e 60 anos (homem). Professor universitário não tem essa redução.",
      "Aposentadoria especial: para quem trabalha exposto a agentes químicos, físicos ou biológicos prejudiciais à saúde por 15, 20 ou 25 anos, a EC passou a exigir também idade mínima: 55, 58 ou 60 anos, respectivamente. Não basta pertencer a uma categoria profissional — é preciso comprovar a exposição efetiva (formulário com base em laudo técnico, o PPP). A conversão de tempo especial em comum só é permitida para períodos trabalhados até 13/11/2019.",
      "Em todas essas aposentadorias, o valor segue a regra geral: 60% da média + 2 p.p. por ano acima de 20 anos (homem) ou 15 anos (mulher e atividade especial de 15 anos). A data de início, para o empregado, é a do desligamento (se pedida em até 90 dias) ou a do requerimento; para os demais segurados, a do requerimento.",
    ],
    pontosChave: [
      "Programada: 62 anos (M) + 15 anos de contribuição; 65 anos (H) + 20 anos (filiados após a EC).",
      "Carência das aposentadorias programáveis: 180 contribuições.",
      "Rural / economia familiar (inclui produtor, garimpeiro e pescador artesanal): 55 (M) e 60 (H), com 15 anos de atividade rural.",
      "Professor (educação infantil, fundamental e médio): 57 (M) e 60 (H), com 25 anos de magistério.",
      "Especial: 55, 58 ou 60 anos para 15, 20 ou 25 anos de efetiva exposição.",
      "Especial: vedada a caracterização por categoria profissional; conversão de tempo especial em comum só até 13/11/2019.",
      "Valor: 60% + 2 p.p. por ano acima de 20 (H) ou 15 (M e especial de 15 anos).",
      "Data de início (empregado): desligamento, se requerida em até 90 dias; senão, data do requerimento.",
      "Direito adquirido: quem cumpriu os requisitos até 13/11/2019 pode se aposentar pelas regras antigas a qualquer tempo.",
    ],
    exemplos: [
      {
        titulo: "Programada — mulher",
        texto:
          "Joana se filiou ao RGPS em 2021. Aos 62 anos, tem 22 anos de contribuição e média hipotética de R$ 3.500,00. Cumpre idade (62) e tempo (15). Percentual: 60% + (22 − 15) × 2% = 74%. RMI = 0,74 × 3.500 = R$ 2.590,00.",
      },
      {
        titulo: "Especial — mineração de subsolo (15 anos)",
        texto:
          "Um trabalhador com 15 anos de exposição em atividade especial de 15 anos, filiado após a reforma, só se aposenta com 55 anos de idade. Valor: 60% da média com acréscimo a partir de 15 anos — com exatamente 15 anos, recebe 60%.",
      },
      {
        titulo: "Professora",
        texto:
          "Lúcia, filiada após a reforma, tem 25 anos de magistério no ensino fundamental. Aposenta-se aos 57 anos. Percentual: 60% + (25 − 15) × 2% = 80% da média.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Idades e tempos — regras permanentes (CF, art. 201, § 7º; EC nº 103, art. 19)",
        colunas: ["Aposentadoria", "Mulher", "Homem", "Tempo"],
        linhas: [
          ["Programada (urbana)", "62 anos", "65 anos", "15 (M) / 20 (H) anos de contribuição"],
          ["Rural / economia familiar", "55 anos", "60 anos", "15 anos de atividade rural"],
          ["Professor (infantil, fundamental e médio)", "57 anos", "60 anos", "25 anos de magistério"],
          ["Especial — 15 anos de exposição", "55 anos", "55 anos", "15 anos"],
          ["Especial — 20 anos de exposição", "58 anos", "58 anos", "20 anos"],
          ["Especial — 25 anos de exposição", "60 anos", "60 anos", "25 anos"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a EC nº 103 elevou a idade do trabalhador rural para 62/65 — permaneceu 55/60.",
      "Afirmar que a aposentadoria especial continua sem idade mínima — agora exige 55/58/60 anos.",
      "Dizer que o tempo especial pode ser convertido em comum a qualquer tempo — só o trabalhado até 13/11/2019.",
      "Estender a redução do professor ao ensino superior — vale só para educação infantil, ensino fundamental e médio.",
      "Afirmar que a idade mínima na especial varia por sexo — não varia: depende do tempo de exposição (15/20/25).",
    ],
    fundamentos: [
      "CF/1988, art. 201, §§ 1º, 7º e 8º (redação da EC nº 103/2019)",
      "EC nº 103/2019, arts. 3º, 19, 25, § 2º, e 26",
      "Lei nº 8.213/1991, arts. 48, 49, 57 e 58",
    ],
  },
  {
    id: "ben-transicao-ec103",
    titulo: "EC nº 103/2019: as regras de transição da aposentadoria no RGPS",
    pool: "beneficios",
    topicos: ["tec-esp-19", "tec-esp-12"],
    texto: [
      "A EC nº 103/2019 entrou em vigor em 13/11/2019. Para não surpreender quem já contribuía, ela criou regras de transição para os segurados filiados ao RGPS até essa data. O segurado escolhe a regra que lhe for mais favorável — e quem já tinha cumprido todos os requisitos pelas regras antigas até 13/11/2019 tem direito adquirido a elas.",
      "Regra dos pontos (art. 15): exige 30 anos de contribuição (mulher) ou 35 (homem) e uma soma de idade + tempo de contribuição de 86 pontos (mulher) ou 96 (homem) em 2019. A partir de 1º/01/2020, soma-se 1 ponto por ano, até 100 pontos (mulher) e 105 (homem). Idade e tempo são contados em dias, incluindo frações.",
      "Idade mínima progressiva (art. 16): exige os mesmos 30/35 anos de contribuição e idade mínima de 56 anos (mulher) e 61 (homem) em 2019, acrescida de 6 meses a cada ano a partir de 2020, até chegar a 62 e 65 anos.",
      "Pedágio de 50% (art. 17): só para quem, em 13/11/2019, já tinha mais de 28 anos de contribuição (mulher) ou 33 (homem). Exige 30/35 anos de contribuição mais um adicional de 50% do tempo que faltava naquela data. Não há idade mínima, mas o valor é a média multiplicada pelo fator previdenciário. Pedágio de 100% (art. 20): exige 57 anos (mulher) ou 60 (homem), 30/35 anos de contribuição e um adicional igual a 100% do tempo que faltava em 13/11/2019; em troca, o valor é de 100% da média.",
      "Transição da aposentadoria por idade (art. 18): para os filiados antes da reforma, 15 anos de contribuição para ambos os sexos, 65 anos para o homem e, para a mulher, 60 anos em 2019, com acréscimo de 6 meses por ano a partir de 2020, até 62 anos (alcançados em 2023). Há ainda transição para a aposentadoria especial por pontos (art. 21): 66, 76 ou 86 pontos, com 15, 20 ou 25 anos de efetiva exposição, respectivamente.",
      "O professor da educação básica tem versões reduzidas: nos pontos, 81 (mulher) e 91 (homem), +1 por ano até 92 e 100, com 25/30 anos de magistério; na idade progressiva, 51 e 56 anos, +6 meses por ano até 57 e 60; no pedágio de 100%, 52 e 55 anos, com 25/30 anos de magistério e o pedágio. Nas regras de pontos, idade progressiva, idade (art. 18) e especial, o valor segue a regra geral de 60% + 2 p.p.",
    ],
    pontosChave: [
      "Data-chave: 13/11/2019 (entrada em vigor da EC nº 103/2019).",
      "Pontos (art. 15): 86 (M) / 96 (H) em 2019, +1 por ano desde 2020, até 100 (M) / 105 (H); com 30/35 anos de contribuição.",
      "Pontos em 2026: 93 (M) / 103 (H). Homens atingem 105 em 2028; mulheres, 100 em 2033.",
      "Idade progressiva (art. 16): 56 (M) / 61 (H) em 2019, +6 meses por ano, até 62/65; com 30/35 anos de contribuição. Em 2026: 59,5 (M) / 64,5 (H).",
      "Pedágio de 50% (art. 17): só para quem tinha mais de 28 (M) / 33 (H) anos em 13/11/2019; sem idade mínima; valor com fator previdenciário.",
      "Pedágio de 100% (art. 20): 57 (M) / 60 (H) anos + 30/35 de contribuição + pedágio de 100% do tempo faltante; valor = 100% da média.",
      "Idade (art. 18): 15 anos de contribuição; 65 (H); mulher 60 em 2019, +6 meses por ano, 62 desde 2023.",
      "Especial por pontos (art. 21): 66/76/86 pontos com 15/20/25 anos de exposição.",
      "Professor: pontos 81/91 (até 92/100); idade 51/56 (até 57/60); pedágio de 100% com 52/55 anos.",
    ],
    exemplos: [
      {
        titulo: "Regra dos pontos em 2026",
        texto:
          "Em 2026 a mulher precisa de 93 pontos e 30 anos de contribuição. Cláudia tem 58 anos de idade e 35 anos de contribuição: 58 + 35 = 93 pontos — cumpre. Valor: 60% + (35 − 15) × 2% = 100% da média.",
      },
      {
        titulo: "Pedágio de 50%",
        texto:
          "Em 13/11/2019, Roberto tinha 34 anos de contribuição (mais de 33, então pode usar a regra). Faltava 1 ano para os 35. Pedágio: 50% de 1 ano = 6 meses. Ele precisa de 35 anos e 6 meses de contribuição, sem idade mínima. O valor será a média multiplicada pelo fator previdenciário.",
      },
      {
        titulo: "Pedágio de 100%",
        texto:
          "Em 13/11/2019, Sônia tinha 27 anos de contribuição. Faltavam 3 anos para os 30. Pedágio: 100% de 3 anos = 3 anos. Ela precisa de 30 + 3 = 33 anos de contribuição e 57 anos de idade. O valor será 100% da média.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Evolução anual — pontos (art. 15) e idade progressiva (art. 16)",
        colunas: ["Ano", "Pontos M / H", "Idade mínima M / H"],
        linhas: [
          ["2019", "86 / 96", "56 / 61"],
          ["2020", "87 / 97", "56,5 / 61,5"],
          ["2021", "88 / 98", "57 / 62"],
          ["2022", "89 / 99", "57,5 / 62,5"],
          ["2023", "90 / 100", "58 / 63"],
          ["2024", "91 / 101", "58,5 / 63,5"],
          ["2025", "92 / 102", "59 / 64"],
          ["2026", "93 / 103", "59,5 / 64,5"],
          ["2027", "94 / 104", "60 / 65 (H no limite)"],
          ["2028", "95 / 105 (H no limite)", "60,5 / 65"],
          ["2031", "98 / 105", "62 / 65 (M no limite)"],
          ["2033", "100 / 105 (M no limite)", "62 / 65"],
        ],
      },
      {
        tipo: "tabela",
        titulo: "Resumo das transições do RGPS (filiados até 13/11/2019)",
        colunas: ["Regra", "Requisitos", "Valor"],
        linhas: [
          ["Pontos (art. 15)", "30/35 anos de contribuição + pontos progressivos", "60% + 2 p.p."],
          ["Idade progressiva (art. 16)", "30/35 anos de contribuição + idade progressiva", "60% + 2 p.p."],
          ["Pedágio 50% (art. 17)", "Mais de 28/33 anos em 13/11/2019; 30/35 + 50% do que faltava", "Média × fator previdenciário"],
          ["Idade (art. 18)", "62 (M, desde 2023) / 65 (H) + 15 anos de contribuição", "60% + 2 p.p."],
          ["Pedágio 100% (art. 20)", "57/60 anos + 30/35 + 100% do que faltava", "100% da média"],
          ["Especial (art. 21)", "66/76/86 pontos + 15/20/25 anos de exposição", "60% + 2 p.p."],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que o pedágio de 50% exige idade mínima — não exige; quem exige idade (57/60) é o pedágio de 100%.",
      "Trocar os valores dos pedágios: 50% → fator previdenciário; 100% → 100% da média.",
      "Afirmar que qualquer segurado pode usar o pedágio de 50% — só quem tinha mais de 28 (M) / 33 (H) anos de contribuição em 13/11/2019.",
      "Dizer que a pontuação sobe 1 ponto por ano até 105 para ambos os sexos — o limite é 100 (M) e 105 (H).",
      "Aplicar as regras de transição a quem se filiou depois de 13/11/2019 — para esses vale apenas a regra permanente.",
    ],
    fundamentos: [
      "EC nº 103/2019, arts. 3º, 15, 16, 17, 18, 20, 21 e 26",
      "Lei nº 8.213/1991, art. 29, §§ 7º a 9º (fator previdenciário)",
    ],
  },
  {
    id: "ben-incapacidade-acidente",
    titulo: "Benefícios por incapacidade e auxílio-acidente",
    pool: "beneficios",
    topicos: ["tec-esp-12", "tec-esp-22", "ana-prev-9"],
    texto: [
      "O auxílio por incapacidade temporária (antigo auxílio-doença) é devido ao segurado que fica incapaz para o seu trabalho ou atividade habitual por mais de 15 dias consecutivos. Exige, em regra, 12 contribuições de carência, dispensadas em acidente de qualquer natureza, doença profissional ou do trabalho e doenças graves da lista oficial. Não é devido se a pessoa já entrou no RGPS com a doença, salvo se a incapacidade vier do agravamento ou progressão dela.",
      "Para o empregado, a empresa paga o salário integral dos 15 primeiros dias de afastamento, e o INSS paga a partir do 16º dia. Para os demais segurados (inclusive o doméstico), o benefício começa na data do início da incapacidade. Se o pedido for feito com mais de 30 dias de afastamento, o benefício começa na data do requerimento. O valor é de 91% do salário de benefício, sem ultrapassar a média dos 12 últimos salários de contribuição.",
      "Sempre que possível, a concessão fixa uma data estimada de cessação; se não fixar, o benefício termina após 120 dias, salvo pedido de prorrogação. Quem não tem como voltar à atividade habitual deve passar por reabilitação profissional e continua recebendo até ser reabilitado ou aposentado. O segurado preso em regime fechado não recebe o auxílio; em regime aberto ou semiaberto, recebe.",
      "A aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez) é para quem está incapaz de forma total e definitiva, sem possibilidade de reabilitação para outra atividade. O valor é de 60% da média + 2 p.p. por ano acima de 20 (H) ou 15 (M), mas sobe para 100% quando decorre de acidente do trabalho, doença profissional ou do trabalho. Se o aposentado precisar da assistência permanente de outra pessoa, recebe adicional de 25%, mesmo que ultrapasse o teto; esse adicional não passa para a pensão. Se voltar a trabalhar voluntariamente, a aposentadoria é cancelada a partir do retorno.",
      "O auxílio-acidente é uma indenização (não substitui renda): é pago quando, após a consolidação das lesões de um acidente de qualquer natureza, ficam sequelas que reduzem a capacidade para o trabalho habitual. Vale 50% do salário de benefício, começa no dia seguinte à cessação do auxílio por incapacidade temporária, não exige carência, pode ser inferior ao salário mínimo e pode ser recebido junto com salário. Termina na véspera de qualquer aposentadoria ou com o óbito. Só têm direito o empregado, o doméstico, o avulso e o segurado especial.",
      "Quem recebe benefício por incapacidade pode ser convocado para perícia a qualquer momento e é obrigado a fazer exame médico, reabilitação e tratamento gratuito (cirurgia e transfusão de sangue são facultativas). O aposentado por incapacidade permanente fica isento da reavaliação após os 60 anos, ou após os 55 anos se já tiver 15 anos de benefício, salvo exceções (como verificar a necessidade do adicional de 25%).",
    ],
    pontosChave: [
      "Auxílio por incapacidade temporária: incapacidade por mais de 15 dias consecutivos; carência de 12 (com exceções).",
      "Empregado: empresa paga os 15 primeiros dias; INSS a partir do 16º dia. Pedido após 30 dias de afastamento: desde o requerimento.",
      "Valor do auxílio temporário: 91% do SB, limitado à média dos 12 últimos salários de contribuição.",
      "Sem data de cessação fixada: cessa em 120 dias, salvo pedido de prorrogação.",
      "Incapacidade permanente: 60% + 2 p.p.; 100% se acidente do trabalho/doença ocupacional.",
      "Adicional de 25% (art. 45): pode ultrapassar o teto; cessa com a morte; não se incorpora à pensão.",
      "Auxílio-acidente: 50% do SB, indenizatório, sem carência, pode ser < 1 SM; cessa com aposentadoria.",
      "Auxílio-acidente: empregado, doméstico, avulso e segurado especial (não CI nem facultativo).",
      "Isenção de reavaliação do aposentado por incapacidade: 60 anos, ou 55 anos + 15 anos de benefício (art. 101, § 1º).",
      "Recluso em regime fechado não recebe auxílio por incapacidade temporária; semiaberto/aberto recebe.",
    ],
    exemplos: [
      {
        titulo: "Auxílio temporário com limitador",
        texto:
          "Média geral hipotética (SB) de R$ 3.000,00. 91% de 3.000 = R$ 2.730,00. Mas a média dos 12 últimos salários de contribuição do segurado é R$ 2.500,00. Como o benefício não pode passar dessa média, ele recebe R$ 2.500,00.",
      },
      {
        titulo: "Incapacidade permanente comum x acidentária",
        texto:
          "Homem com 28 anos de contribuição e média hipotética de R$ 3.000,00. Doença comum: 60% + (28 − 20) × 2% = 76% → R$ 2.280,00. Se a incapacidade decorrer de acidente do trabalho: 100% → R$ 3.000,00. Precisando de cuidador permanente: + 25% → R$ 3.750,00 (pode passar do teto).",
      },
      {
        titulo: "Auxílio-acidente",
        texto:
          "Um pedreiro empregado perde parte dos movimentos da mão após acidente doméstico (fora do trabalho). Recebeu auxílio por incapacidade temporária e, consolidadas as lesões, voltou ao trabalho com redução da capacidade. A partir do dia seguinte à cessação do auxílio temporário, recebe auxílio-acidente de 50% do SB, junto com o salário. Ao se aposentar, o auxílio-acidente cessa.",
      },
    ],
    esquemas: [
      {
        tipo: "tabela",
        titulo: "Comparando os três benefícios",
        colunas: ["", "Incapacidade temporária", "Incapacidade permanente", "Auxílio-acidente"],
        linhas: [
          ["Natureza", "Substitui a renda", "Substitui a renda", "Indenização"],
          ["Carência", "12 (com exceções)", "12 (com exceções)", "Não exige"],
          ["Valor", "91% do SB (limite: média dos 12 últimos SC)", "60% + 2 p.p. ou 100% (acidentária)", "50% do SB"],
          ["Pode ser < 1 SM?", "Não", "Não", "Sim"],
          ["Acumula com salário?", "Não", "Não (retorno voluntário cancela)", "Sim"],
        ],
      },
    ],
    pegadinhas: [
      "Dizer que a empresa paga os 30 primeiros dias — são 15; o INSS paga a partir do 16º dia.",
      "Afirmar que o auxílio-acidente exige carência ou não pode ser inferior ao salário mínimo — não exige e pode.",
      "Dizer que o auxílio-acidente acumula com aposentadoria — cessa na véspera de qualquer aposentadoria.",
      "Afirmar que o adicional de 25% respeita o teto ou passa para a pensão — não respeita e não passa.",
      "Dizer que o auxílio-acidente só cabe em acidente do trabalho — cabe em acidente de qualquer natureza.",
    ],
    fundamentos: [
      "Lei nº 8.213/1991, arts. 42 a 47, 59 a 63, 86 e 101",
      "EC nº 103/2019, art. 26, §§ 2º, III, e 3º, II",
    ],
  },
]
