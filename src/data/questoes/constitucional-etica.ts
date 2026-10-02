import type { Questao } from "../types"

/** Direito Constitucional e Ética no Serviço Público. */
export const QUESTOES_CONSTITUCIONAL_ETICA: Questao[] = [
  {
    id: "dc-001",
    pool: "constitucional",
    assunto: "Princípios fundamentais",
    enunciado:
      "São fundamentos da República Federativa do Brasil a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político.",
    gabarito: "C",
    comentario: "Literalidade do art. 1º da CF (mnemônico SO-CI-DI-VA-PLU). Não confunda com os objetivos fundamentais do art. 3º.",
    fundamento: "CF/1988, art. 1º",
  },
  {
    id: "dc-002",
    pool: "constitucional",
    assunto: "Princípios fundamentais",
    enunciado: "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais é fundamento da República.",
    gabarito: "E",
    comentario: "É OBJETIVO fundamental (art. 3º, III), e não fundamento (art. 1º). Objetivos vêm com verbos: construir, garantir, erradicar, promover.",
    fundamento: "CF/1988, art. 3º, III",
  },
  {
    id: "dc-003",
    pool: "constitucional",
    assunto: "Direitos individuais",
    enunciado:
      "A casa é asilo inviolável do indivíduo, podendo nela penetrar-se, sem consentimento do morador, por determinação judicial, a qualquer hora do dia ou da noite.",
    gabarito: "E",
    comentario:
      "Por determinação judicial, somente durante o DIA. Em caso de flagrante delito, desastre ou para prestar socorro, a entrada pode ocorrer a qualquer hora.",
    fundamento: "CF/1988, art. 5º, XI",
  },
  {
    id: "dc-004",
    pool: "constitucional",
    assunto: "Remédios constitucionais",
    enunciado:
      "Conceder-se-á habeas data para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.",
    gabarito: "C",
    comentario: "Art. 5º, LXXII, a. O habeas data também serve para retificar dados, quando não se prefira fazê-lo por processo sigiloso.",
    fundamento: "CF/1988, art. 5º, LXXII",
  },
  {
    id: "dc-005",
    pool: "constitucional",
    assunto: "Remédios constitucionais",
    enunciado:
      "Qualquer pessoa física ou jurídica é parte legítima para propor ação popular que vise anular ato lesivo ao patrimônio público.",
    gabarito: "E",
    comentario:
      "Somente o CIDADÃO (eleitor, no gozo dos direitos políticos) pode propor ação popular; pessoa jurídica não tem legitimidade (Súmula 365 do STF). O autor fica isento de custas e ônus da sucumbência, salvo má-fé.",
    fundamento: "CF/1988, art. 5º, LXXIII",
  },
  {
    id: "dc-006",
    pool: "constitucional",
    assunto: "Remédios constitucionais",
    enunciado:
      "O direito de requerer mandado de segurança extingue-se decorridos 120 dias contados da ciência, pelo interessado, do ato impugnado.",
    gabarito: "C",
    comentario: "Prazo decadencial do art. 23 da Lei nº 12.016/2009.",
    fundamento: "Lei nº 12.016/2009, art. 23",
  },
  {
    id: "dc-007",
    pool: "constitucional",
    assunto: "Remédios constitucionais",
    enunciado:
      "Conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.",
    gabarito: "C",
    comentario:
      "Art. 5º, LXXI, da CF. O MI combate a omissão de norma regulamentadora (legislativa ou administrativa) que inviabiliza o exercício de direito constitucional; o procedimento está na Lei nº 13.300/2016.",
    fundamento: "CF/1988, art. 5º, LXXI",
  },
  {
    id: "dc-008",
    pool: "constitucional",
    assunto: "Direitos sociais",
    enunciado:
      "São direitos sociais, entre outros, a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância e a assistência aos desamparados.",
    gabarito: "C",
    comentario: "Rol do art. 6º da CF (alimentação incluída pela EC 64/2010, moradia pela EC 26/2000 e transporte pela EC 90/2015).",
    fundamento: "CF/1988, art. 6º",
  },
  {
    id: "dc-009",
    pool: "constitucional",
    assunto: "Nacionalidade",
    enunciado:
      "São brasileiros natos os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, mesmo que estes estejam a serviço de seu país.",
    gabarito: "E",
    comentario: "A exceção é justamente quando os pais estrangeiros estão a serviço de seu país: nesse caso, o filho nascido no Brasil não é brasileiro nato.",
    fundamento: "CF/1988, art. 12, I, a",
  },
  {
    id: "dc-010",
    pool: "constitucional",
    assunto: "Nacionalidade",
    enunciado:
      "São privativos de brasileiro nato, entre outros, os cargos de Presidente da Câmara dos Deputados, de Ministro do Supremo Tribunal Federal e de Ministro de Estado da Defesa.",
    gabarito: "C",
    comentario:
      "Rol do art. 12, § 3º: Presidente e Vice-Presidente da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa.",
    fundamento: "CF/1988, art. 12, § 3º",
  },
  {
    id: "dc-011",
    pool: "constitucional",
    assunto: "Nacionalidade",
    enunciado: "O cargo de Ministro do Superior Tribunal de Justiça é privativo de brasileiro nato.",
    gabarito: "E",
    comentario: "Apenas Ministro do STF é privativo de nato. Ministros de STJ, TST e demais tribunais podem ser naturalizados.",
    fundamento: "CF/1988, art. 12, § 3º",
  },
  {
    id: "dc-012",
    pool: "constitucional",
    assunto: "Direitos políticos",
    enunciado:
      "O alistamento eleitoral e o voto são facultativos para os analfabetos, para os maiores de setenta anos e para os maiores de dezesseis e menores de dezoito anos.",
    gabarito: "C",
    comentario:
      "Art. 14, § 1º, II, da CF. Para os demais maiores de 18 anos (isto é, alfabetizados e com até 70 anos), alistamento e voto são obrigatórios (inciso I).",
    fundamento: "CF/1988, art. 14, § 1º",
  },
  {
    id: "dc-013",
    pool: "constitucional",
    assunto: "Direitos políticos",
    enunciado: "A idade mínima para concorrer ao cargo de Senador da República é de trinta anos.",
    gabarito: "E",
    comentario:
      "Senador exige 35 anos (assim como Presidente e Vice). Governador: 30; Deputado, Prefeito e juiz de paz: 21; Vereador: 18.",
    fundamento: "CF/1988, art. 14, § 3º, VI",
  },
  {
    id: "dc-014",
    pool: "constitucional",
    assunto: "Administração pública",
    enunciado:
      "O prazo de validade do concurso público será de até dois anos, prorrogável uma vez, por igual período.",
    gabarito: "C",
    comentario: "Art. 37, III, da CF. 'Até' dois anos: o edital pode fixar prazo menor; a prorrogação deve ser por período igual ao inicial.",
    fundamento: "CF/1988, art. 37, III",
  },
  {
    id: "dc-015",
    pool: "constitucional",
    assunto: "Administração pública",
    enunciado:
      "É permitida a acumulação remunerada de dois cargos públicos técnicos, desde que haja compatibilidade de horários.",
    gabarito: "E",
    comentario:
      "Dois cargos técnicos não estão entre as exceções constitucionais. As hipóteses são: dois cargos de professor; um de professor com outro técnico ou científico; dois de profissionais de saúde com profissões regulamentadas — sempre com compatibilidade de horários e respeitado o teto remuneratório.",
    fundamento: "CF/1988, art. 37, XVI",
  },
  {
    id: "dc-016",
    pool: "constitucional",
    assunto: "Administração pública",
    enunciado:
      "O servidor público investido no mandato de vereador, havendo compatibilidade de horários, perceberá as vantagens de seu cargo, sem prejuízo da remuneração do cargo eletivo.",
    gabarito: "C",
    comentario:
      "Art. 38, III, da CF. Sem compatibilidade, aplica-se a regra do prefeito: afasta-se do cargo, podendo optar pela remuneração.",
    fundamento: "CF/1988, art. 38, III",
  },
  {
    id: "dc-017",
    pool: "constitucional",
    assunto: "Estabilidade",
    enunciado:
      "São estáveis após dois anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.",
    gabarito: "E",
    comentario:
      "A estabilidade é adquirida após TRÊS anos de efetivo exercício (EC 19/1998), exigindo-se ainda avaliação especial de desempenho por comissão instituída para essa finalidade.",
    fundamento: "CF/1988, art. 41, caput e § 4º",
  },
  {
    id: "dc-018",
    pool: "constitucional",
    assunto: "Estabilidade",
    enunciado:
      "O servidor público estável pode perder o cargo em virtude de sentença judicial transitada em julgado, de processo administrativo em que lhe seja assegurada ampla defesa ou de procedimento de avaliação periódica de desempenho, na forma de lei complementar.",
    gabarito: "C",
    comentario: "Hipóteses do art. 41, § 1º. Há ainda a perda por excesso de despesa com pessoal (art. 169, § 4º).",
    fundamento: "CF/1988, art. 41, § 1º",
  },
  {
    id: "dc-019",
    pool: "constitucional",
    assunto: "Administração pública",
    enunciado: "O direito de greve do servidor público civil será exercido nos termos e nos limites definidos em lei específica.",
    gabarito: "C",
    comentario:
      "Art. 37, VII. Enquanto não editada a lei, o STF determinou a aplicação, no que couber, da Lei de Greve do setor privado (Lei nº 7.783/1989). Ao militar, a greve é proibida (art. 142, § 3º, IV), e o STF estendeu a vedação aos servidores que atuam diretamente na segurança pública (Tema 541).",
    fundamento: "CF/1988, art. 37, VII",
  },
  {
    id: "dc-020",
    pool: "constitucional",
    assunto: "Ordem social",
    enunciado:
      "A assistência social será prestada a quem dela necessitar, independentemente de contribuição à seguridade social, e tem entre seus objetivos a garantia de um salário mínimo de benefício mensal à pessoa com deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção.",
    gabarito: "C",
    comentario: "Art. 203, V, da CF — base constitucional do BPC, regulamentado pela LOAS.",
    fundamento: "CF/1988, art. 203, V",
  },
  {
    id: "et-001",
    pool: "etica",
    assunto: "Regras deontológicas",
    enunciado:
      "Segundo o Código de Ética, o servidor terá de decidir não somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre o honesto e o desonesto.",
    gabarito: "C",
    comentario: "Literalidade do inciso II das regras deontológicas do Decreto nº 1.171/1994.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso II",
  },
  {
    id: "et-002",
    pool: "etica",
    assunto: "Regras deontológicas",
    enunciado:
      "Ressalvados os casos de segurança nacional, investigações policiais ou interesse superior do Estado e da Administração Pública, preservados em processo previamente declarado sigiloso, a publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade, e sua omissão compromete eticamente o bem comum, sendo imputável a quem a negar.",
    gabarito: "C",
    comentario:
      "Inciso VII do Código. A publicidade é a regra; o sigilo só se admite nas hipóteses ressalvadas, e mesmo assim em processo previamente declarado sigiloso, nos termos da lei.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso VII",
  },
  {
    id: "et-003",
    pool: "etica",
    assunto: "Regras deontológicas",
    enunciado:
      "O servidor pode omitir a verdade quando ela for contrária aos interesses da própria Administração Pública.",
    gabarito: "E",
    comentario:
      "Toda pessoa tem direito à verdade. O servidor não pode omiti-la ou falseá-la, ainda que contrária aos interesses da própria pessoa interessada ou da Administração Pública.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso VIII",
  },
  {
    id: "et-004",
    pool: "etica",
    assunto: "Regras deontológicas",
    enunciado:
      "Deixar o servidor qualquer pessoa à espera de solução que compete ao seu setor, permitindo a formação de longas filas, caracteriza não apenas atitude contra a ética, mas principalmente grave dano moral aos usuários dos serviços públicos.",
    gabarito: "C",
    comentario: "Inciso X do Código de Ética — tema muito ligado ao atendimento nas agências do INSS.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso X",
  },
  {
    id: "et-005",
    pool: "etica",
    assunto: "Penalidade",
    enunciado:
      "A pena aplicável ao servidor pela Comissão de Ética é a de suspensão, cuja fundamentação constará de parecer assinado por todos os seus integrantes.",
    gabarito: "E",
    comentario: "A única pena aplicável pela Comissão de Ética é a CENSURA. Suspensão é penalidade disciplinar da Lei nº 8.112/1990.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso XXII",
  },
  {
    id: "et-006",
    pool: "etica",
    assunto: "Conceito de servidor",
    enunciado:
      "Para fins de apuração do comprometimento ético, entende-se por servidor público apenas o ocupante de cargo efetivo que perceba remuneração dos cofres públicos.",
    gabarito: "E",
    comentario:
      "O conceito é amplo: todo aquele que, por força de lei, contrato ou qualquer ato jurídico, preste serviços de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, ligado direta ou indiretamente a órgão do poder estatal.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso XXIV",
  },
  {
    id: "et-007",
    pool: "etica",
    assunto: "Vedações",
    enunciado:
      "É vedado ao servidor deixar de utilizar os avanços técnicos e científicos ao seu alcance ou do seu conhecimento para atendimento do seu mister.",
    gabarito: "C",
    comentario: "Vedação do inciso XV, e, do Código de Ética.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso XV, e",
  },
  {
    id: "et-008",
    pool: "etica",
    assunto: "Regras deontológicas",
    enunciado:
      "Tratar mal uma pessoa que paga seus tributos direta ou indiretamente significa causar-lhe dano moral.",
    gabarito: "C",
    comentario: "Inciso IX do Código: a cortesia, a boa vontade, o cuidado e o tempo dedicados ao serviço público caracterizam o esforço pela disciplina.",
    fundamento: "Decreto nº 1.171/1994, Anexo, inciso IX",
  },
  {
    id: "et-009",
    pool: "etica",
    assunto: "Comissão de Ética Pública",
    enunciado:
      "A Comissão de Ética Pública é integrada por sete brasileiros designados pelo Presidente da República, para mandatos de três anos, não coincidentes, permitida uma única recondução.",
    gabarito: "C",
    comentario: "Art. 3º do Decreto nº 6.029/2007. Os membros são escolhidos entre cidadãos de idoneidade moral, reputação ilibada e notória experiência em administração pública.",
    fundamento: "Decreto nº 6.029/2007, art. 3º",
  },
  {
    id: "et-010",
    pool: "etica",
    assunto: "Comissões de ética",
    enunciado:
      "As comissões de ética dos órgãos e entidades são integradas por cinco servidores ou empregados titulares de cargo efetivo ou emprego permanente.",
    gabarito: "E",
    comentario: "São TRÊS membros titulares e três suplentes, escolhidos entre servidores e empregados do quadro permanente.",
    fundamento: "Decreto nº 6.029/2007, art. 5º",
  },
  {
    id: "et-011",
    pool: "etica",
    assunto: "Procedimento",
    enunciado:
      "Qualquer procedimento instaurado para apurar desrespeito às normas éticas será mantido com a chancela de 'reservado' até que esteja concluído.",
    gabarito: "C",
    comentario:
      "Art. 13 do Decreto nº 6.029/2007. Concluída a investigação e após a deliberação da comissão, os autos deixam de ser reservados; documentos protegidos por sigilo legal, porém, continuam com acesso restrito (§§ 1º e 2º).",
    fundamento: "Decreto nº 6.029/2007, art. 13",
  },
  {
    id: "et-012",
    pool: "etica",
    assunto: "Procedimento",
    enunciado: "Apenas agentes públicos podem provocar a atuação das comissões de ética.",
    gabarito: "E",
    comentario:
      "Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação da CEP ou de comissão de ética.",
    fundamento: "Decreto nº 6.029/2007, art. 11",
  },
]
