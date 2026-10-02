import type { Questao } from "../types"

/** Direito Administrativo: organização, poderes, atos, serviços, responsabilidade, Lei nº 8.112/1990, Lei nº 9.784/1999 e Lei nº 8.429/1992. */
export const QUESTOES_ADMINISTRATIVO: Questao[] = [
  {
    id: "da-001",
    pool: "administrativo",
    assunto: "Organização administrativa",
    enunciado:
      "Somente por lei específica pode ser criada autarquia, ao passo que a instituição de empresa pública e de sociedade de economia mista depende de autorização em lei específica.",
    gabarito: "C",
    comentario:
      "A autarquia nasce diretamente da lei. Já a empresa pública e a sociedade de economia mista têm a criação apenas autorizada por lei, e a personalidade jurídica surge com o registro dos atos constitutivos.",
    fundamento: "CF, art. 37, XIX",
  },
  {
    id: "da-002",
    pool: "administrativo",
    assunto: "Organização administrativa",
    enunciado: "Por ser autarquia federal, o INSS integra a administração pública direta da União.",
    gabarito: "E",
    comentario:
      "O INSS é autarquia federal, pessoa jurídica de direito público com personalidade própria, e integra a administração indireta. A administração direta é composta pelos órgãos da própria União, sem personalidade jurídica.",
    fundamento: "Decreto-Lei nº 200/1967, arts. 4º e 5º, I",
  },
  {
    id: "da-003",
    pool: "administrativo",
    assunto: "Desconcentração e descentralização",
    enunciado:
      "A distribuição de competências entre superintendências regionais e agências da Previdência Social, unidades sem personalidade jurídica própria integrantes da estrutura do INSS, é exemplo de descentralização administrativa.",
    gabarito: "E",
    comentario:
      "Trata-se de desconcentração: distribuição interna de competências dentro da mesma pessoa jurídica, com criação de órgãos. Descentralização é a transferência da atividade a outra pessoa, como ocorre quando a União atribui a uma autarquia (o INSS) a gestão de benefícios.",
  },
  {
    id: "da-004",
    pool: "administrativo",
    assunto: "Controle da administração indireta",
    enunciado:
      "O INSS está hierarquicamente subordinado ao ministério ao qual se vincula, o qual pode, com fundamento no poder hierárquico, rever livremente qualquer ato praticado pela autarquia.",
    gabarito: "E",
    comentario:
      "Entre a administração direta e as entidades da indireta há vinculação, e não subordinação hierárquica. O controle é finalístico (tutela ou supervisão ministerial), exercido nos limites da lei; a hierarquia só existe dentro de uma mesma pessoa jurídica.",
    fundamento: "Decreto-Lei nº 200/1967, arts. 19 e 26",
  },
  {
    id: "da-005",
    pool: "administrativo",
    assunto: "Princípios",
    enunciado: "Em decorrência do princípio da legalidade, é lícito ao administrador público fazer tudo aquilo que a lei não proíbe.",
    gabarito: "E",
    comentario:
      "Poder fazer tudo o que a lei não proíbe é a lógica aplicável aos particulares (CF, art. 5º, II). Para a administração vigora a legalidade estrita: ela só pode agir quando e como a lei autoriza ou determina.",
    fundamento: "CF, art. 37, caput",
  },
  {
    id: "da-006",
    pool: "administrativo",
    assunto: "Princípios",
    enunciado:
      "Embora não estejam expressos no caput do art. 37 da Constituição Federal, os princípios da razoabilidade e da proporcionalidade são expressamente mencionados pela Lei nº 9.784/1999 entre os princípios que a administração pública deve obedecer.",
    gabarito: "C",
    comentario:
      "O caput do art. 37 traz o LIMPE (legalidade, impessoalidade, moralidade, publicidade e eficiência). O art. 2º da Lei nº 9.784/1999 inclui, entre outros, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa, contraditório, segurança jurídica e interesse público.",
    fundamento: "Lei nº 9.784/1999, art. 2º",
  },
  {
    id: "da-007",
    pool: "administrativo",
    assunto: "Poderes administrativos",
    enunciado:
      "O poder disciplinar autoriza a administração a aplicar sanções a particulares que com ela não mantêm vínculo jurídico específico, como ocorre na imposição de multa de trânsito a um motorista.",
    gabarito: "E",
    comentario:
      "O poder disciplinar alcança servidores e particulares ligados à administração por vínculo especial (por exemplo, contratados). A multa de trânsito aplicada ao cidadão em geral decorre do poder de polícia.",
  },
  {
    id: "da-008",
    pool: "administrativo",
    assunto: "Poder regulamentar",
    enunciado:
      "Compete privativamente ao Presidente da República dispor, mediante decreto, sobre a organização e o funcionamento da administração federal, quando isso não implicar aumento de despesa nem criação ou extinção de órgãos públicos.",
    gabarito: "C",
    comentario:
      "É a hipótese de decreto autônomo introduzida pela EC nº 32/2001. Essa atribuição pode ser delegada aos Ministros de Estado, ao Procurador-Geral da República ou ao Advogado-Geral da União (art. 84, parágrafo único).",
    fundamento: "CF, art. 84, VI, a",
  },
  {
    id: "da-009",
    pool: "administrativo",
    assunto: "Poder de polícia",
    enunciado:
      "Segundo o STF, é constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da administração pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial.",
    gabarito: "C",
    comentario:
      "É a tese fixada no Tema 532 da repercussão geral. A delegação não alcança, portanto, empresas privadas nem estatais que atuem em regime concorrencial.",
    fundamento: "STF, RE 633.782 (Tema 532)",
  },
  {
    id: "da-010",
    pool: "administrativo",
    assunto: "Poder de polícia",
    enunciado:
      "Em razão do atributo da autoexecutoriedade, a administração pode, em regra, cobrar coercitivamente multa decorrente do poder de polícia não paga pelo particular, sem necessidade de recorrer ao Poder Judiciário.",
    gabarito: "E",
    comentario:
      "A administração pode impor a multa por conta própria, mas, se ela não for paga, a cobrança forçada depende de execução fiscal no Poder Judiciário. A autoexecutoriedade não alcança a execução de multas.",
    fundamento: "Lei nº 6.830/1980",
  },
  {
    id: "da-011",
    pool: "administrativo",
    assunto: "Abuso de poder",
    enunciado:
      "Considera-se excesso de poder a conduta do agente que atua além dos limites de sua competência, e desvio de finalidade a do agente que, embora competente, pratica o ato visando a fim diverso daquele previsto, explícita ou implicitamente, na regra de competência.",
    gabarito: "C",
    comentario:
      "Excesso de poder e desvio de finalidade (ou de poder) são as duas espécies de abuso de poder. No excesso, o vício está na competência; no desvio, na finalidade.",
    fundamento: "Lei nº 4.717/1965, art. 2º, parágrafo único, a e e",
  },
  {
    id: "da-012",
    pool: "administrativo",
    assunto: "Ato administrativo — elementos",
    enunciado:
      "Competência, finalidade e forma são, segundo a doutrina majoritária, elementos vinculados do ato administrativo, ao passo que o motivo e o objeto podem ser discricionários, compondo o denominado mérito administrativo.",
    gabarito: "C",
    comentario:
      "Nos atos discricionários, a margem de liberdade do administrador (conveniência e oportunidade) recai sobre motivo e objeto. Competência, finalidade e forma são definidas pela lei.",
    fundamento: "Lei nº 4.717/1965, art. 2º",
  },
  {
    id: "da-013",
    pool: "administrativo",
    assunto: "Ato administrativo — atributos",
    enunciado:
      "A presunção de legitimidade dos atos administrativos é absoluta, razão pela qual não pode ser afastada por prova em contrário produzida pelo administrado.",
    gabarito: "E",
    comentario:
      "A presunção de legitimidade e veracidade é relativa (juris tantum): admite prova em contrário e transfere ao administrado o ônus de demonstrar o vício.",
  },
  {
    id: "da-014",
    pool: "administrativo",
    assunto: "Ato administrativo — atributos",
    enunciado:
      "A imperatividade, atributo que permite à administração impor obrigações a terceiros independentemente de sua concordância, está presente em todos os atos administrativos, inclusive nos enunciativos, como certidões e atestados.",
    gabarito: "E",
    comentario:
      "A imperatividade não existe em todos os atos. Está ausente nos atos enunciativos (certidões, atestados, pareceres) e nos negociais (licenças, autorizações), que apenas atestam fatos ou atendem a pedido do interessado.",
  },
  {
    id: "da-015",
    pool: "administrativo",
    assunto: "Anulação e revogação",
    enunciado:
      "A anulação de ato administrativo por vício de legalidade produz, em regra, efeitos ex nunc, ao passo que a revogação por motivo de conveniência e oportunidade produz efeitos ex tunc.",
    gabarito: "E",
    comentario:
      "Os efeitos estão invertidos. A anulação retroage (ex tunc), ressalvados os direitos de terceiros de boa-fé; a revogação não retroage (ex nunc) e deve respeitar os direitos adquiridos.",
    fundamento: "Súmula 473 do STF; Lei nº 9.784/1999, art. 53",
  },
  {
    id: "da-016",
    pool: "administrativo",
    assunto: "Anulação e revogação",
    enunciado:
      "No exercício da função jurisdicional, o Poder Judiciário pode revogar ato administrativo discricionário praticado pelo Poder Executivo que considere inconveniente ou inoportuno.",
    gabarito: "E",
    comentario:
      "O controle judicial é de legalidade: o Judiciário pode anular atos ilegais, mas não revogá-los. A revogação é privativa da própria administração que praticou o ato; o Judiciário só revoga os atos administrativos que ele mesmo edita, no exercício de função atípica.",
  },
  {
    id: "da-017",
    pool: "administrativo",
    assunto: "Anulação e revogação",
    enunciado:
      "A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos, ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial.",
    gabarito: "C",
    comentario:
      "É o teor da Súmula 473 do STF, expressão do princípio da autotutela. A Lei nº 9.784/1999 transformou o dever de anular em regra legal: a administração 'deve' anular os atos ilegais e 'pode' revogar os inconvenientes.",
    fundamento: "Súmula 473 do STF; Lei nº 9.784/1999, art. 53",
  },
  {
    id: "da-018",
    pool: "administrativo",
    assunto: "Convalidação",
    enunciado:
      "É possível a convalidação de ato administrativo praticado com vício de competência, ainda que se trate de competência exclusiva, desde que a convalidação não acarrete lesão ao interesse público nem prejuízo a terceiros.",
    gabarito: "E",
    comentario:
      "Só os defeitos sanáveis admitem convalidação: vício de competência não exclusiva e vício de forma não essencial. Competência exclusiva não se convalida, e os vícios de finalidade, motivo e objeto são, em regra, insanáveis.",
    fundamento: "Lei nº 9.784/1999, art. 55",
  },
  {
    id: "da-019",
    pool: "administrativo",
    assunto: "Serviços públicos — concessão",
    enunciado:
      "A concessão de serviço público, formalizada mediante contrato e precedida de licitação na modalidade concorrência ou diálogo competitivo, pode ser outorgada a pessoa física ou jurídica que demonstre capacidade para o seu desempenho.",
    gabarito: "E",
    comentario:
      "A concessão só pode ser outorgada a pessoa jurídica ou a consórcio de empresas. A permissão é que admite delegação a pessoa física ou jurídica.",
    fundamento: "Lei nº 8.987/1995, art. 2º, II e IV",
  },
  {
    id: "da-020",
    pool: "administrativo",
    assunto: "Serviços públicos — permissão",
    enunciado:
      "A permissão de serviço público será formalizada mediante contrato de adesão, que observará, entre outros aspectos, a precariedade e a revogabilidade unilateral do contrato pelo poder concedente.",
    gabarito: "C",
    comentario:
      "A permissão é delegação a título precário, mediante licitação, formalizada por contrato de adesão. A autorização de serviço público, por sua vez, é tratada pela doutrina como ato administrativo unilateral, discricionário e precário.",
    fundamento: "Lei nº 8.987/1995, arts. 2º, IV, e 40",
  },
  {
    id: "da-021",
    pool: "administrativo",
    assunto: "Responsabilidade civil do Estado",
    enunciado:
      "A responsabilidade civil das pessoas jurídicas de direito privado prestadoras de serviço público pelos danos que seus agentes, nessa qualidade, causarem a terceiros é subjetiva, dependendo da comprovação de dolo ou culpa.",
    gabarito: "E",
    comentario:
      "A responsabilidade é objetiva (teoria do risco administrativo), tanto para as pessoas jurídicas de direito público quanto para as de direito privado prestadoras de serviço público. Dolo ou culpa só são exigidos na ação regressiva contra o agente causador do dano.",
    fundamento: "CF, art. 37, § 6º",
  },
  {
    id: "da-022",
    pool: "administrativo",
    assunto: "Responsabilidade civil do Estado",
    enunciado:
      "Segundo o STF, a vítima de dano causado por agente público no exercício da função pode ajuizar a ação indenizatória diretamente contra o agente, sem incluir o Estado no polo passivo, desde que comprove a culpa ou o dolo do agente.",
    gabarito: "E",
    comentario:
      "No Tema 940, o STF fixou que a ação deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo o autor do ato parte ilegítima. Fica assegurado o direito de regresso contra o agente nos casos de dolo ou culpa (teoria da dupla garantia).",
    fundamento: "CF, art. 37, § 6º; STF, RE 1.027.633 (Tema 940)",
  },
  {
    id: "da-023",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — provimento",
    enunciado:
      "Nos termos da Lei nº 8.112/1990, são formas de provimento de cargo público a nomeação, a promoção, a readaptação, a reversão, o aproveitamento, a reintegração, a recondução e a transferência.",
    gabarito: "E",
    comentario:
      "A transferência (assim como a ascensão) foi revogada pela Lei nº 9.527/1997, por permitir ingresso em outro cargo sem concurso. O art. 8º prevê hoje sete formas: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.",
    fundamento: "Lei nº 8.112/1990, art. 8º; Súmula Vinculante 43",
  },
  {
    id: "da-024",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — posse e exercício",
    enunciado:
      "A posse ocorrerá no prazo de trinta dias contados da publicação do ato de provimento, e o servidor empossado terá quinze dias, contados da data da posse, para entrar em exercício.",
    gabarito: "C",
    comentario:
      "Se a posse não ocorrer no prazo, o ato de provimento é tornado sem efeito. Se o servidor empossado não entrar em exercício no prazo, será exonerado (e não demitido, pois demissão é penalidade).",
    fundamento: "Lei nº 8.112/1990, arts. 13, §§ 1º e 6º, e 15, §§ 1º e 2º",
  },
  {
    id: "da-025",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — vacância",
    enunciado: "A promoção e a readaptação são, simultaneamente, formas de provimento e de vacância de cargo público.",
    gabarito: "C",
    comentario:
      "O art. 33 lista como causas de vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. Promoção e readaptação também constam do art. 8º como formas de provimento.",
    fundamento: "Lei nº 8.112/1990, arts. 8º e 33",
  },
  {
    id: "da-026",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — remoção e redistribuição",
    enunciado:
      "Redistribuição é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede.",
    gabarito: "E",
    comentario:
      "O conceito descrito é o de remoção (art. 36). Redistribuição é o deslocamento de cargo de provimento efetivo, ocupado ou vago, no âmbito do quadro geral de pessoal, para outro órgão ou entidade do mesmo Poder, com prévia apreciação do órgão central do SIPEC (art. 37).",
    fundamento: "Lei nº 8.112/1990, arts. 36 e 37",
  },
  {
    id: "da-027",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — férias",
    enunciado:
      "O servidor fará jus a trinta dias de férias, que podem ser acumuladas, até o máximo de dois períodos, no caso de necessidade do serviço, sendo exigidos doze meses de exercício para o primeiro período aquisitivo.",
    gabarito: "C",
    comentario:
      "É a regra do art. 77 da Lei nº 8.112/1990, ressalvadas as hipóteses previstas em legislação específica. É vedado levar à conta de férias qualquer falta ao serviço.",
    fundamento: "Lei nº 8.112/1990, art. 77",
  },
  {
    id: "da-028",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — licenças",
    enunciado:
      "A critério da administração, poderá ser concedida ao servidor ocupante de cargo efetivo, ainda que em estágio probatório, licença para o trato de assuntos particulares pelo prazo de até três anos consecutivos, sem remuneração.",
    gabarito: "E",
    comentario:
      "A licença para tratar de interesses particulares só pode ser concedida ao servidor que não esteja em estágio probatório. Ela é sem remuneração, dura até três anos e pode ser interrompida a qualquer tempo, a pedido do servidor ou no interesse do serviço.",
    fundamento: "Lei nº 8.112/1990, art. 91",
  },
  {
    id: "da-029",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — penalidades",
    enunciado:
      "A penalidade de suspensão, que não pode exceder noventa dias, pode ser convertida em multa, na base de cinquenta por cento por dia de vencimento ou remuneração, quando houver conveniência para o serviço, ficando o servidor obrigado a permanecer em serviço.",
    gabarito: "C",
    comentario:
      "A multa não é penalidade autônoma: surge apenas da conversão da suspensão. O art. 127 prevê advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada.",
    fundamento: "Lei nº 8.112/1990, arts. 127 e 130",
  },
  {
    id: "da-030",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — prescrição disciplinar",
    enunciado:
      "A ação disciplinar prescreve em cinco anos quanto às infrações puníveis com demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; em dois anos, quanto à suspensão; e em cento e oitenta dias, quanto à advertência, contando-se o prazo da data em que o fato se tornou conhecido.",
    gabarito: "C",
    comentario:
      "São os prazos do art. 142, que começam a correr da data em que o fato se tornou conhecido pela autoridade competente para instaurar o procedimento (e não da data em que foi praticado). A abertura de sindicância punitiva ou a instauração de PAD interrompe a prescrição; segundo a Súmula 635 do STJ, o prazo volta a correr por inteiro após 140 dias da interrupção (prazo máximo legal para concluir o PAD).",
    fundamento: "Lei nº 8.112/1990, art. 142; Súmula 635 do STJ",
  },
  {
    id: "da-031",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — sindicância e PAD",
    enunciado:
      "O prazo para conclusão da sindicância não excederá trinta dias, e o do processo disciplinar, sessenta dias, admitida, em ambos os casos, a prorrogação por igual período.",
    gabarito: "C",
    comentario:
      "A sindicância pode resultar em arquivamento, advertência ou suspensão de até trinta dias, ou em instauração de PAD. O prazo do PAD conta da publicação do ato que constituir a comissão.",
    fundamento: "Lei nº 8.112/1990, arts. 145 e 152",
  },
  {
    id: "da-032",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — PAD",
    enunciado:
      "O processo disciplinar será conduzido por comissão composta de três servidores ocupantes de cargo efetivo, não se exigindo que sejam estáveis.",
    gabarito: "E",
    comentario:
      "A comissão deve ser composta de três servidores estáveis. O presidente deve ocupar cargo efetivo superior ou de mesmo nível, ou ter nível de escolaridade igual ou superior ao do indiciado.",
    fundamento: "Lei nº 8.112/1990, art. 149",
  },
  {
    id: "da-033",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — afastamento preventivo",
    enunciado:
      "Como medida cautelar, a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá determinar o seu afastamento do exercício do cargo pelo prazo de até sessenta dias, prorrogável por igual prazo, sem prejuízo da remuneração.",
    gabarito: "C",
    comentario:
      "O afastamento preventivo não é punição, por isso não suspende a remuneração. Findo o prazo de prorrogação, cessam os seus efeitos, ainda que o processo não esteja concluído.",
    fundamento: "Lei nº 8.112/1990, art. 147",
  },
  {
    id: "da-034",
    pool: "administrativo",
    assunto: "Lei nº 8.112/1990 — responsabilidades",
    enunciado:
      "A responsabilidade administrativa do servidor será afastada no caso de absolvição criminal que negue a existência do fato ou a sua autoria.",
    gabarito: "C",
    comentario:
      "As instâncias civil, penal e administrativa são independentes e as sanções podem cumular-se (art. 125). A exceção é a absolvição penal que nega o fato ou a autoria; a absolvição por insuficiência de provas não repercute na esfera administrativa.",
    fundamento: "Lei nº 8.112/1990, arts. 125 e 126",
  },
  {
    id: "da-035",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — recurso",
    enunciado:
      "Salvo disposição legal específica, é de dez dias o prazo para interposição de recurso administrativo, contado a partir da ciência ou divulgação oficial da decisão recorrida; quando a lei não fixar prazo diferente, o recurso deverá ser decidido no prazo máximo de trinta dias, a partir do recebimento dos autos pelo órgão competente.",
    gabarito: "C",
    comentario:
      "São os prazos do art. 59. O prazo de trinta dias para decidir pode ser prorrogado por igual período, ante justificativa explícita.",
    fundamento: "Lei nº 9.784/1999, art. 59",
  },
  {
    id: "da-036",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — recurso",
    enunciado:
      "O recurso administrativo será dirigido à autoridade que proferiu a decisão, a qual, se não a reconsiderar no prazo de cinco dias, o encaminhará à autoridade superior; salvo disposição legal diversa, o recurso tramitará por, no máximo, duas instâncias administrativas.",
    gabarito: "E",
    comentario:
      "O erro está no número de instâncias: salvo disposição legal diversa, o recurso tramita por no máximo três instâncias administrativas. O restante está correto (art. 56, § 1º).",
    fundamento: "Lei nº 9.784/1999, arts. 56, § 1º, e 57",
  },
  {
    id: "da-037",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — decadência",
    enunciado:
      "O direito da administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, ainda que comprovada a má-fé do beneficiário.",
    gabarito: "E",
    comentario:
      "O prazo decadencial de cinco anos do art. 54 não se aplica quando comprovada a má-fé. Em matéria previdenciária há regra específica: o art. 103-A da Lei nº 8.213/1991 fixa em dez anos o prazo para a Previdência Social anular atos favoráveis aos beneficiários, também salvo má-fé.",
    fundamento: "Lei nº 9.784/1999, art. 54; Lei nº 8.213/1991, art. 103-A",
  },
  {
    id: "da-038",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — delegação",
    enunciado:
      "Não podem ser objeto de delegação a edição de atos de caráter normativo, a decisão de recursos administrativos e as matérias de competência exclusiva do órgão ou autoridade.",
    gabarito: "C",
    comentario:
      "É o rol do art. 13 (mnemônico 'CE-NO-RE': competência exclusiva, normativos, recursos). Fora dessas hipóteses, a delegação é possível, ainda que a órgão não subordinado hierarquicamente, e é revogável a qualquer tempo.",
    fundamento: "Lei nº 9.784/1999, arts. 12 a 14",
  },
  {
    id: "da-039",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — prazos",
    enunciado:
      "Inexistindo disposição específica, os atos do órgão ou autoridade responsável pelo processo e dos administrados que dele participem devem ser praticados no prazo de cinco dias, salvo motivo de força maior, podendo esse prazo ser dilatado até o dobro, mediante comprovada justificação.",
    gabarito: "C",
    comentario:
      "É a regra geral de prazo do art. 24 da Lei nº 9.784/1999. Não confundir com os cinco dias que a autoridade tem para reconsiderar a decisão recorrida (art. 56, § 1º).",
    fundamento: "Lei nº 9.784/1999, art. 24",
  },
  {
    id: "da-040",
    pool: "administrativo",
    assunto: "Lei nº 9.784/1999 — revisão",
    enunciado:
      "Os processos administrativos de que resultem sanções poderão ser revistos, a qualquer tempo, a pedido ou de ofício, quando surgirem fatos novos ou circunstâncias relevantes suscetíveis de justificar a inadequação da sanção aplicada, podendo a revisão resultar em agravamento da penalidade.",
    gabarito: "E",
    comentario:
      "Da revisão não pode resultar agravamento da sanção (art. 65, parágrafo único). Já no julgamento de recurso admite-se a reforma para pior, desde que o recorrente seja cientificado para formular alegações antes da decisão (art. 64).",
    fundamento: "Lei nº 9.784/1999, arts. 64 e 65",
  },
  {
    id: "da-041",
    pool: "administrativo",
    assunto: "Improbidade administrativa",
    enunciado:
      "Após as alterações promovidas pela Lei nº 14.230/2021, somente condutas dolosas configuram ato de improbidade administrativa, inclusive nos casos de lesão ao erário, não mais subsistindo a modalidade culposa.",
    gabarito: "C",
    comentario:
      "Dolo é a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11, não bastando a voluntariedade do agente. No Tema 1.199, o STF decidiu que a revogação da modalidade culposa não retroage para atingir condenações transitadas em julgado, mas alcança os atos culposos praticados antes da lei cujos processos ainda não tinham trânsito em julgado, cabendo ao juiz verificar se houve dolo. A exigência de dolo foi confirmada pelo STF no julgamento das ADIs 7156 e 7236 (2026).",
    fundamento: "Lei nº 8.429/1992, arts. 1º, §§ 1º e 2º, e 10; STF, Tema 1.199 (ARE 843.989)",
  },
  {
    id: "da-042",
    pool: "administrativo",
    assunto: "Improbidade administrativa",
    enunciado:
      "Com a Lei nº 14.230/2021, o rol de condutas do art. 11 da Lei nº 8.429/1992, referente aos atos de improbidade que atentam contra os princípios da administração pública, passou a ser exemplificativo, de modo que qualquer violação a princípio pode configurar improbidade.",
    gabarito: "E",
    comentario:
      "O rol do art. 11 passou a ser taxativo: a conduta dolosa que viole os deveres de honestidade, imparcialidade e legalidade deve estar 'caracterizada por uma das seguintes condutas' listadas nos incisos. O STF manteve a taxatividade ao julgar as ADIs 7156 e 7236 (2026).",
    fundamento: "Lei nº 8.429/1992, art. 11",
  },
  {
    id: "da-043",
    pool: "administrativo",
    assunto: "Improbidade administrativa",
    enunciado:
      "A ação para a aplicação das sanções previstas na Lei de Improbidade Administrativa prescreve em oito anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência.",
    gabarito: "C",
    comentario:
      "É o prazo do art. 23, com a redação da Lei nº 14.230/2021, que o STF considerou válido. Nas ADIs 7156 e 7236 (julho de 2026), porém, o STF invalidou a regra que fazia o prazo recomeçar pela metade (quatro anos) após a interrupção — ele recomeça por inteiro — e fixou o limite máximo de 20 anos. Continua imprescritível a ação de ressarcimento ao erário fundada em ato doloso de improbidade (STF, Tema 897).",
    fundamento: "Lei nº 8.429/1992, art. 23; STF, ADIs 7156 e 7236; STF, Tema 897",
  },
]
