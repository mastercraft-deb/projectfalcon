/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Química
   Fontes: IUPAC Standards, Modelos Atômicos, Tabela Periódica dos Elementos,
           Teoria das Ligações Químicas e Reações no Cotidiano.
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.quimica = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a Química como a ciência central que estuda a matéria, suas transformações e a conservação da massa no universo.`,
            `### 1. O que é a Química`,
            `A Química estuda a composição, estrutura, propriedades da matéria e as transformações que ela sofre durante as reações. Frequentemente chamada de "a ciência central", a Química conecta a Física fundamental com a Biologia dos seres vivos, a Geologia da Terra e a Ciência dos Materiais.`,
            `### 2. O Conceito de Matéria, Corpo e Objeto`,
            `- **Matéria:** Tudo aquilo que tem massa e ocupa lugar no espaço (possui volume). Ex.: madeira, água, ar, ferro.`,
            `- **Corpo:** Uma porção limitada da matéria. Ex.: uma tora de madeira, uma barra de ferro.`,
            `- **Objeto:** Um corpo trabalhado pelo ser humano para uma utilidade específica. Ex.: uma cadeira de madeira, uma faca de ferro.`,
            `### 3. Propriedades Gerais vs Específicas`,
            `- **Gerais:** Comuns a toda e qualquer matéria (massa, volume, inércia, impenetrabilidade: dois corpos não ocupam o mesmo lugar no espaço ao mesmo tempo).`,
            `- **Específicas:** Permitem diferenciar uma substância da outra: ponto de fusão, ponto de ebulição, densidade (\`d = m / V\`) e solubilidade.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na matéria como os blocos de LEGO da realidade: você pode desmontar um castelo e montar uma nave, mas as pecinhas fundamentais continuam sendo as mesmas!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'Estados Físicos da Matéria e Mudanças de Fase em Nível Molecular' },
        conteudo: [
            `## 📺 Guia da Videoaula: Agitação Molecular e Mudanças de Estado`,
            `Assista ao vídeo demonstrando o comportamento cinético das partículas no aquecimento e resfriamento. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Os 3 Estados Físicos Fundamentais:**`,
            `  • **Sólido:** Forma e volume fixos. Baixa energia cinética; partículas fortemente unidas em rede organizada.`,
            `  • **Líquido:** Forma variável (adota o recipiente) e volume fixo. Partículas deslizam umas sobre as outras.`,
            `  • **Gasoso:** Forma e volume variáveis (expande-se para ocupar todo o espaço). Alta energia e grande afastamento.`,
            `- **Nomenclatura das Mudanças de Fase:**`,
            `  • Sólido → Líquido: **Fusão**.`,
            `  • Líquido → Gasoso: **Vaporização** (Evaporação lenta, Ebulição turbulenta, Calefação instantânea).`,
            `  • Gasoso → Líquido: **Condensação** ou **Liquefação**.`,
            `  • Líquido → Sólido: **Solidificação**.`,
            `  • Sólido ⇄ Gasoso direto (sem passar pelo líquido): **Sublimação** (ex.: gelo seco, naftalina).`,
            `> Conclua este resumo para liberar a gamificação na Lição 3!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Estados da Matéria & Mudanças de Fase: Selecione todas as afirmações corretas:',
                    dica: 'Lembre-se dos nomes científicos das transições térmicas como fusão e sublimação!',
                    opcoes: [
                        { texto: 'A passagem direta do estado sólido para o gasoso chama-se Sublimação', correta: true },
                        { texto: 'No estado sólido, a matéria possui forma e volume definidos', correta: true },
                        { texto: 'A passagem de líquido para sólido chama-se Solidificação', correta: true },
                        { texto: 'Densidade é calculada pela razão entre massa e volume (d = m/V)', correta: true },
                        { texto: 'A evaporação e a ebulição são modalidades de vaporização', correta: true },
                        { texto: 'No estado gasoso as moléculas ficam completamente imóveis', correta: false },
                        { texto: 'A passagem de sólido para líquido chama-se condensação', correta: false }
                    ],
                    explicacao: 'A sublimação é a transição direta sólido-gás. No estado sólido as partículas vibram em posições fixas com forma e volume definidos.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Mudança Direta de Fase: A passagem direta do estado sólido para o estado gasoso (sem passar pelo líquido), como no gelo seco, chama-se:',
                    dica: 'Ocorre também com bolinhas de naftalina guardadas no armário.',
                    template: 'A transição direta de sólido para gás é a {lacuna}',
                    opcoes: ['Sublimação', 'Fusão', 'Ebulição', 'Liquefação'],
                    respostaCorreta: 'Sublimação',
                    explicacao: 'A sublimação é o fenômeno físico onde certas substâncias passam diretamente do estado sólido para a fase de vapor.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug das Mudanças de Fase: Localize a linha que trocou o nome científico da mudança de estado físico:',
                    dica: 'A passagem de sólido para líquido é FUSÃO. Condensação é a passagem de gás para líquido!',
                    linhasCodigo: [
                        '1. Fenômeno A: Água líquida vira gelo no freezer (Solidificação)',
                        '2. Fenômeno B: Gelo derrete ao sol virando água líquida (Condensação)',
                        '3. Fenômeno C: Água ferve na chaleira virando vapor (Vaporização/Ebulição)',
                        '4. Fenômeno D: Vapor de água vira orvalho na relva fria (Liquefação)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, chamaram o derretimento do gelo de condensação. A passagem de sólido para líquido chama-se rigorosamente FUSÃO.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Aquecimento da Água: Ordene os estados da água em pressão normal ao ser aquecida de -10 ºC até 120 ºC:',
                    dica: 'Comece pelo gelo, passe pela fusão a 0 ºC, líquido e atinja a ebulição a 100 ºC.',
                    itens: [
                        'Gelo sólido rígido com moléculas fixas em retículo cristalino (-10 ºC)',
                        'Fusão a 0 ºC com quebra da rigidez cristalina virando água líquida',
                        'Água líquida com moléculas deslizando fluidas entre 0 ºC e 100 ºC',
                        'Ebulição turbulenta a 100 ºC com transição total para vapor gasoso'
                    ],
                    ordemCorreta: [
                        'Gelo sólido rígido com moléculas fixas em retículo cristalino (-10 ºC)',
                        'Fusão a 0 ºC com quebra da rigidez cristalina virando água líquida',
                        'Água líquida com moléculas deslizando fluidas entre 0 ºC e 100 ºC',
                        'Ebulição turbulenta a 100 ºC com transição total para vapor gasoso'
                    ],
                    explicacao: 'O aumento de temperatura intensifica a agitação térmica molecular promovendo transições de fase endotérmicas sucessivas.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: A grandeza física que expressa a quantidade de matéria contida em um determinado volume é a:',
                    dica: 'Calculada pela razão d = massa / volume.',
                    template: 'A propriedade física d = m/V corresponde à {lacuna}',
                    opcoes: ['densidade', 'viscosidade', 'solubilidade', 'pressão'],
                    respostaCorreta: 'densidade',
                    explicacao: 'A densidade é uma propriedade física específica fundamental para prever se corpos flutuam ou afundam em líquidos.'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Diferenciar substâncias puras de misturas homogêneas e heterogêneas e dominar os métodos mecânicos e físicos de separação.`,
            `### 1. Substâncias Puras vs Misturas`,
            `- **Substância Pura:** Possui composição química fixa e pontos de fusão e ebulição constantes (ex.: água destilada H₂O, gás oxigênio O₂). Pode ser simples (formada por um elemento só) ou composta (dois ou mais elementos combinados).`,
            `- **Mistura:** Junção física de duas ou mais substâncias sem reação química:`,
            `  • **Homogênea (Solução):** Apresenta uma única fase visual uniforme até no microscópio (ex.: água com sal dissolvido, ar atmosférico filtrado).`,
            `  • **Heterogênea:** Apresenta duas ou mais fases visíveis distintas (ex.: água e óleo, granito, água e areia).`,
            `### 2. Principais Métodos de Separação`,
            `- **Filtração:** Separa sólido insolúvel de líquido através de uma barreira porosa (ex.: coar café).`,
            `- **Decantação:** Baseia-se na diferença de densidade; após repouso, o componente mais denso deposita-se no fundo.`,
            `- **Destilação Simples:** Separa sólido dissolvido em líquido explorando a diferença nos pontos de ebulição (ex.: dessalinizar água salgada). O vapor da água sobe, passa pelo condensador frio e vira líquido puro.`,
            `- **Destilação Fracionada:** Separa líquidos miscíveis com pontos de ebulição próximos (ex.: refino do petróleo em gasolina, diesel e querosene).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na destilação como fazer suor num copo: a água evapora pelo calor, bate na tampa fria e pinga límpida de volta, deixando as impurezas para trás!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Evolução dos Modelos Atômicos: Dalton, Thomson e Rutherford' },
        conteudo: [
            `## 📺 Guia da Videoaula: A Viagem Histórica ao Coração do Átomo`,
            `Assista ao vídeo demonstrando como experimentos científicos sucessivos refinaram o modelo atômico. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **1. Dalton (1803) - A "Bola de Bilhar":** Átomo como esfera maciça, indivisível, indestrutível e homogênea. Explicou a conservação das massas de Lavoisier.`,
            `- **2. Thomson (1897) - O "Pudim de Passas":** Descobriu o **elétron** através de experimentos com raios catódicos. O átomo é uma esfera positiva com elétrons negativos incrustados, sendo eletricamente neutro e divisível!`,
            `- **3. Rutherford (1911) - O "Sistema Planetário":** Bombardeou lâminas de ouro ultrafinas com partículas alfa. Descobriu que a maior parte do átomo é **espaço vazio**, com um **núcleo** minúsculo, denso e positivo onde residem os prótons, rodeado pela eletrosfera onde os elétrons orbitam.`,
            `> Conclua este resumo para liberar a gamificação na Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Linha do Tempo Atômica: Ordene a evolução dos Modelos Atômicos em ordem cronológica:',
                    dica: 'Comece pela bola de bilhar maciça, passe pela descoberta do elétron e chegue ao átomo com núcleo e espaço vazio.',
                    itens: [
                        'Modelo de Dalton (Esfera maciça indivisível - Bola de Bilhar)',
                        'Modelo de Thomson (Esfera positiva com elétrons - Pudim de Passas)',
                        'Modelo de Rutherford (Núcleo denso positivo e eletrosfera vazia)'
                    ],
                    ordemCorreta: [
                        'Modelo de Dalton (Esfera maciça indivisível - Bola de Bilhar)',
                        'Modelo de Thomson (Esfera positiva com elétrons - Pudim de Passas)',
                        'Modelo de Rutherford (Núcleo denso positivo e eletrosfera vazia)'
                    ],
                    explicacao: 'A cronologia clássica é: Dalton (1803, esfera maciça indivisível), Thomson (1897, descoberta do elétron) e Rutherford (1911, descoberta do núcleo atômico e espaço vazio).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Métodos de Separação de Misturas: Selecione os métodos químicos/físicos adequados para cada separação:',
                    dica: 'Lembre-se da diferença entre misturas homogêneas (soluções) e heterogêneas!',
                    opcoes: [
                        { texto: 'Filtração: separa sólidos insolúveis de líquidos (ex: coar café)', correta: true },
                        { texto: 'Destilação Simples: separa sólido dissolvido em líquido (ex: água e sal)', correta: true },
                        { texto: 'Decantação: separa líquidos imiscíveis por diferença de densidade (água e óleo)', correta: true },
                        { texto: 'Destilação Fracionada: separa frações do petróleo por pontos de ebulição', correta: true },
                        { texto: 'Filtração simples consegue separar sal totalmente dissolvido em água', correta: false },
                        { texto: 'Decantação exige aquecimento a 1000 ºC', correta: false }
                    ],
                    explicacao: 'Filtração retém apenas partículas insolúveis. Para solutos dissolvidos (misturas homogêneas), a separação exige destilação.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de História da Química: Localize a linha que atribui uma descoberta moderna ao modelo de Dalton:',
                    dica: 'No modelo de Dalton (1803), o átomo era indivisível e maciço; elétrons e prótons ainda eram completamente desconhecidos!',
                    linhasCodigo: [
                        '1. Dalton postulou que a matéria é formada por átomos esféricos',
                        '2. Átomos do mesmo elemento químico possuem massas idênticas',
                        '3. Dalton descobriu que os elétrons orbitam ao redor do núcleo positivo',
                        '4. Nas reações químicas, os átomos apenas se reorganizam sem serem destruídos'
                    ],
                    linhaBug: 2,
                    explicacao: 'A linha 3 erra gravemente. Dalton considerava o átomo maciço e indivisível ("bola de bilhar"). O elétron só foi descoberto quase um século depois por Thomson (1897).'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Algoritmo da Destilação Simples: Ordene o processo de purificação da água a partir de uma salmoura:',
                    dica: 'Aqueça a mistura, evapore a água, condense o vapor no tubo refrigerado e colete água destilada pura.',
                    itens: [
                        'Aquecer a salmoura (água com sal dissolvido) no balão de destilação',
                        'A água atinge o ponto de ebulição (100 ºC), vaporiza e deixa o sal no fundo',
                        'O vapor d\'água sobe e entra no condensador resfriado por água corrente',
                        'O vapor condensa-se e pinga como água pura destilada no frasco coletor'
                    ],
                    ordemCorreta: [
                        'Aquecer a salmoura (água com sal dissolvido) no balão de destilação',
                        'A água atinge o ponto de ebulição (100 ºC), vaporiza e deixa o sal no fundo',
                        'O vapor d\'água sobe e entra no condensador resfriado por água corrente',
                        'O vapor condensa-se e pinga como água pura destilada no frasco coletor'
                    ],
                    explicacao: 'A destilação simples explora a enorme diferença nos pontos de ebulição entre o solvente volátil (água) e o soluto fixo (sal).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: O físico britânico que descobriu a primeira partícula subatômica (o elétron) foi J.J.:',
                    dica: 'Criador do modelo do "pudim de passas" em 1897.',
                    template: 'A descoberta do elétron através dos raios catódicos foi realizada por {lacuna}',
                    opcoes: ['Thomson', 'Rutherford', 'Bohr', 'Dalton'],
                    respostaCorreta: 'Thomson',
                    explicacao: 'J.J. Thomson demonstrou a existência dos elétrons, provando que o átomo não era indivisível como se pensava desde a Grécia antiga.'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a estrutura nuclear do átomo: Número Atômico (\`Z\`), Número de Massa (\`A\`), nêutrons e o conceito de isótopos.`,
            `### 1. As Partículas Subatômicas Fundamentais`,
            `No núcleo atômico residem os **Prótons** (carga positiva \`+1\`, massa relativa \`1\`) e os **Nêutrons** (sem carga elétrica \`0\`, massa relativa \`1\`). Na eletrosfera distante giram os **Elétrons** (carga negativa \`-1\`, com massa cerca de 1836 vezes menor que a do próton, considerada desprezível no cálculo de massa).`,
            `### 2. O Número Atômico (Z) é o RG do Elemento`,
            `- **Número Atômico (\`Z\'):** É o número de prótons existentes no núcleo. É o que define a identidade química do elemento: qualquer átomo no universo com 6 prótons é invariavelmente Carbono; com 8 prótons, Oxigênio.`,
            `- Em um átomo neutro, o número de prótons é rigorosamente igual ao número de elétrons (\`Z = p = e\`).`,
            `### 3. Número de Massa (A) e Isótopos`,
            `- **Número de Massa (\`A\'):** É a soma dos prótons e nêutrons no núcleo: \`A = Z + n\`.`,
            `- **Isótopos:** Átomos que possuem o **mesmo número atômico (Z)**, mas **diferentes números de massa (A)** por terem quantidades desiguais de nêutrons. Ex.: Carbono-12 e Carbono-14 (usado na datação arqueológica).`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: Isóto**P**os têm o mesmo número de **P**rótons; Isóba**R**os têm a mesma massa **A**; e Isóto**N**os têm os mesmos **N**êutrons!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'A Tabela Periódica: Famílias, Períodos e Propriedades Periódicas' },
        conteudo: [
            `## 📺 Guia da Videoaula: Como a Tabela Periódica Organiza o Universo`,
            `Assista ao vídeo explicativo sobre a genialidade da tabela de Mendeleev e a Lei Periódica de Moseley. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Organização Moderna:** Os elementos estão dispostos em ordem crescente de seu **Número Atômico (Z)**.`,
            `- **Períodos (7 Linhas Horizontais):** Indicam o número de **camadas eletrônicas** ocupadas pelo átomo (1 a 7).`,
            `- **Famílias ou Grupos (18 Colunas Verticais):** Reúnem elementos com propriedades químicas muito semelhantes por possuírem a mesma quantidade de elétrons na camada de valência:`,
            `  • Grupo 1: **Metais Alcalinos** (lítio, sódio, potássio) - ultra reativos com água.`,
            `  • Grupo 2: **Metais Alcalino-Terrosos** (magnésio, cálcio).`,
            `  • Grupo 17: **Halogênios** (flúor, cloro, bromo) - altamente eletronegativos.`,
            `  • Grupo 18: **Gases Nobres** (hélio, neônio, argônio) - quimicamente estáveis com octeto completo.`,
            `> Conclua este resumo para liberar a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Estrutura Atômica & Tabela Periódica: Selecione todas as afirmações cientificamente VERDADEIRAS:',
                    dica: 'Lembre-se do significado do número atômico Z, dos períodos e da estabilidade dos gases nobres!',
                    opcoes: [
                        { texto: 'O número atômico (Z) representa a quantidade de prótons no núcleo', correta: true },
                        { texto: 'Os elementos são dispostos na tabela em ordem crescente de Z', correta: true },
                        { texto: 'Os Gases Nobres (Grupo 18) são conhecidos por sua alta estabilidade química', correta: true },
                        { texto: 'Isótopos são átomos com o mesmo número atômico Z e massas diferentes', correta: true },
                        { texto: 'Os períodos horizontais indicam o número de camadas eletrônicas', correta: true },
                        { texto: 'Os elétrons ficam localizados dentro do núcleo com os prótons', correta: false },
                        { texto: 'A Tabela Periódica é organizada em ordem alfabética de nomes', correta: false }
                    ],
                    explicacao: 'O número atômico Z define o elemento e dita a ordem da tabela. Isótopos compartilham o mesmo Z. Os elétrons ficam na eletrosfera e os gases nobres possuem octeto estável.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - A Identidade do Átomo: O Número Atômico (Z), que identifica unicamente cada elemento químico na natureza, é igual à quantidade de:',
                    dica: 'Essas partículas subatômicas possuem carga elétrica positiva +1 e residem no núcleo.',
                    template: 'O Número Atômico (Z) de um átomo é rigorosamente igual ao número de {lacuna}',
                    opcoes: ['prótons', 'elétrons', 'nêutrons', 'fótons'],
                    respostaCorreta: 'prótons',
                    explicacao: 'O número de prótons (Z) é a impressão digital do elemento químico: qualquer átomo no cosmos com 6 prótons é Carbono; com 8, Oxigênio.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Semelhanças Atômicas: Localize a linha que inverteu a definição clássica de isótopos:',
                    dica: 'IsótoPos têm o mesmo número de Prótons (mesmo Z), mas massas (A) diferentes!',
                    linhasCodigo: [
                        '1. O Carbono-12 possui 6 prótons e 6 nêutrons (massa A = 12)',
                        '2. O Carbono-14 possui 6 prótons e 8 nêutrons (massa A = 14)',
                        '3. Afirmação falsa: Isótopos possuem números atômicos Z diferentes e massas A iguais',
                        '4. Correção: Como pertencem ao mesmo elemento Carbono, ambos possuem Z = 6 idêntico'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, inverteram a definição. Isótopos têm obrigatoriamente o MESMO Z (mesmo número atômico), variando apenas a quantidade de nêutrons e o número de massa A.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Grupos da Tabela Periódica: Ordene as famílias químicas clássicas da esquerda para a direita na tabela:',
                    dica: 'Inicie pelos Metais Alcalinos no Grupo 1 e termine nos Gases Nobres no Grupo 18.',
                    itens: [
                        'Metais Alcalinos (Grupo 1) e Alcalino-Terrosos (Grupo 2)',
                        'Metais de Transição nos blocos centrais da tabela',
                        'Halogênios altamente reativos e eletronegativos (Grupo 17)',
                        'Gases Nobres inertes com camada de valência completa (Grupo 18)'
                    ],
                    ordemCorreta: [
                        'Metais Alcalinos (Grupo 1) e Alcalino-Terrosos (Grupo 2)',
                        'Metais de Transição nos blocos centrais da tabela',
                        'Halogênios altamente reativos e eletronegativos (Grupo 17)',
                        'Gases Nobres inertes com camada de valência completa (Grupo 18)'
                    ],
                    explicacao: 'A Tabela Periódica moderna distribui os grupos do caráter mais eletropositivo (esquerda) ao mais eletronegativo e estável (direita).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: O Número de Massa (A) de qualquer núcleo atômico é dado pela soma entre a quantidade de prótons e:',
                    dica: 'Partículas nucleares neutras que estabilizam as cargas positivas dos prótons.',
                    template: 'O número de massa é calculado por A = Z + {lacuna}',
                    opcoes: ['nêutrons', 'elétrons', 'posítrons', 'órbitas'],
                    respostaCorreta: 'nêutrons',
                    explicacao: 'Como a massa dos elétrons na eletrosfera é desprezível (1/1836), a massa de todo átomo concentra-se no núcleo: A = prótons + nêutrons.'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a distribuição eletrônica em subníveis de energia (Diagrama de Linus Pauling) e o papel dos elétrons de valência.`,
            `### 1. A Eletrosfera em Camadas e Subníveis`,
            `Os elétrons não giram em órbitas simples como planetas; eles ocupam regiões de alta probabilidade chamadas orbitais dentro de 7 camadas energéticas (\`K, L, M, N, O, P, Q\`), que por sua vez são divididas em 4 subníveis: \`s\` (máx 2 elétrons), \`p\` (máx 6), \`d\` (máx 10) e \`f\` (máx 14).`,
            `### 2. O Diagrama de Linus Pauling`,
            `Os elétrons preenchem a eletrosfera seguindo o princípio da energia crescente: \`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶...\`.`,
            `### 3. A Camada de Valência e a Regra do Octeto`,
            `- **Camada de Valência:** É a camada mais externa do átomo. É exclusivamente nela que ocorrem as reações e ligações químicas.`,
            `- **Regra do Octeto (Gilbert N. Lewis):** Átomos tendem a doar, receber ou compartilhar elétrons até completarem **8 elétrons na camada de valência** (adquirindo a configuração estável de um gás nobre).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na camada de valência como as mãos do átomo: ele usa seus elétrons de valência para dar as mãos a outros átomos e formar moléculas estáveis!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'Ligações Químicas: Ligação Iônica (Transferência) vs Covalente (Compartilhamento)' },
        conteudo: [
            `## 📺 Guia da Videoaula: Como os Átomos se Conectam`,
            `Assista ao vídeo demonstrando a formação do sal de cozinha (NaCl) e da molécula de água (H₂O). A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Ligação Iônica (Transferência de Elétrons):**`,
            `  • Ocorre entre um **Metal** (com tendência a perder elétrons, virando cátion \`+\`) e um **Ametal** (com tendência a ganhar elétrons, virando ânion \`-\`).`,
            `  • A ligação se dá pela intensa atração eletrostática entre cargas opostas, formando redes cristalinas rígidas (ex.: \`Na⁺ + Cl⁻ → NaCl\`). Possuem altos pontos de fusão e conduzem eletricidade quando fundidos ou dissolvidos em água.`,
            `- **Ligação Covalente (Compartilhamento de Elétrons):**`,
            `  • Ocorre entre **Ametais** que compartilham pares de elétrons para completarem o octeto juntos (ex.: \`H₂O\`, \`CO₂\`, \`O₂\`). Formam moléculas independentes.`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Ligações Químicas: A ligação no sal de cozinha (NaCl), formada pela transferência definitiva de elétrons, é do tipo:',
                    dica: 'Essa ligação ocorre entre o cátion de um metal (Na+) e o ânion de um ametal (Cl-) por atração eletrostática.',
                    template: 'A ligação química formada entre sódio e cloro no composto NaCl é a ligação {lacuna}',
                    opcoes: ['iônica', 'covalente', 'metálica', 'nuclear'],
                    respostaCorreta: 'iônica',
                    explicacao: 'O sódio (metal) doa um elétron para o cloro (ametal), formando os íons Na+ e Cl- unidos por forte atração eletrostática iônica.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Iônica vs Covalente: Selecione todas as características corretas das ligações químicas:',
                    dica: 'Lembre-se: iônica transfere elétrons e covalente compartilha elétrons!',
                    opcoes: [
                        { texto: 'Ligação iônica envolve transferência definitiva de elétrons (metal + ametal)', correta: true },
                        { texto: 'Ligação covalente envolve compartilhamento de pares de elétrons (ametais)', correta: true },
                        { texto: 'Compostos iônicos conduzem eletricidade quando dissolvidos em água ou fundidos', correta: true },
                        { texto: 'A água (H₂O) e o gás carbônico (CO₂) são substâncias moleculares covalentes', correta: true },
                        { texto: 'Compostos iônicos são formados apenas por gases nobres', correta: false },
                        { texto: 'Na ligação covalente ocorre a formação de cátions metálicos', correta: false }
                    ],
                    explicacao: 'Ligações iônicas formam retículos cristalinos rígidos com altos pontos de fusão, enquanto ligações covalentes geram moléculas independentes.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Tipos de Ligação: Localize a linha que classificou a molécula de água incorretamente:',
                    dica: 'A água H₂O é formada por hidrogênio e oxigênio (dois ametais) que COMPARTILHAM elétrons em ligação covalente!',
                    linhasCodigo: [
                        '1. Análise da substância cloreto de sódio (NaCl): Ligação iônica por transferência',
                        '2. Análise do gás oxigênio (O₂): Ligação covalente por compartilhamento duplo',
                        '3. Análise da água pura (H₂O): Ligação iônica formada pela doação de elétrons do hidrogênio',
                        '4. Correção: A ligação no H₂O é covalente polar por compartilhamento de pares'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, afirmam que H₂O é iônica. A água é rigorosamente uma substância molecular covalente: o oxigênio compartilha elétrons com os dois hidrogênios.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Formação do Sal NaCl: Ordene as etapas da transferência eletrônica na síntese do cloreto de sódio:',
                    dica: 'O sódio doa seu elétron de valência, atinge o octeto e atrai o ânion cloreto.',
                    itens: [
                        'Átomo de Sódio neutro (1 elétron de valência) aproxima-se do Cloro (7 elétrons)',
                        'O Sódio transfere seu elétron mais externo para a camada de valência do Cloro',
                        'O Sódio torna-se o cátion Na⁺ e o Cloro torna-se o ânion Cl⁻ com octetos completos',
                        'A forte atração eletrostática mútua entre Na⁺ e Cl⁻ forma o cristal cúbico de NaCl'
                    ],
                    ordemCorreta: [
                        'Átomo de Sódio neutro (1 elétron de valência) aproxima-se do Cloro (7 elétrons)',
                        'O Sódio transfere seu elétron mais externo para a camada de valência do Cloro',
                        'O Sódio torna-se o cátion Na⁺ e o Cloro torna-se o ânion Cl⁻ com octetos completos',
                        'A forte atração eletrostática mútua entre Na⁺ e Cl⁻ forma o cristal cúbico de NaCl'
                    ],
                    explicacao: 'A atração coulômbica tridimensional entre cátions e ânions opostos estabiliza o retículo cristalino iônico.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: O princípio químico segundo o qual os átomos realizam ligações para adquirir 8 elétrons na camada de valência é a Regra do:',
                    dica: 'Baseia-se na estabilidade observada nos gases nobres.',
                    template: 'A estabilidade química pela posse de 8 elétrons é descrita pela Regra do {lacuna}',
                    opcoes: ['Octeto', 'Dupleto', 'Pauling', 'Lavoisier'],
                    respostaCorreta: 'Octeto',
                    explicacao: 'A Regra do Octeto formulada por Gilbert Lewis explica a formação da esmagadora maioria das ligações químicas dos elementos representativos.'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender as funções inorgânicas clássicas de Arrhenius: a definição e comportamento dos Ácidos e das Bases.`,
            `### 1. A Teoria de Arrhenius (1887)`,
            `O químico sueco Svante Arrhenius estabeleceu a definição clássica para substâncias inorgânicas em meio aquoso através da condutividade elétrica.`,
            `### 2. Ácidos de Arrhenius`,
            `- São substâncias que, em solução aquosa, sofrem ionização e liberam exclusivamente como cátion o **íon hidrogênio (\`H⁺\` ou hidrônio \`H₃O⁺\`)**.`,
            `- Possuem sabor azedo/ácido (ex.: ácido cítrico do limão, ácido acético do vinagre, ácido clorídrico \`HCl\` do estômago).`,
            `- Tornam o papel tornassol azul em vermelho.`,
            `### 3. Bases (Hidróxidos) de Arrhenius`,
            `- São compostos que, em solução aquosa, sofrem dissociação iônica liberando exclusivamente como ânion o **íon hidróxido (\`OH⁻\`, hidroxila)**.`,
            `- Possuem sabor adstringente/cáustico (que "amarra" a boca) e textura escorregadia ao tato (ex.: hidróxido de sódio \`NaOH\` da soda cáustica, leite de magnésia \`Mg(OH)₂\`).`,
            `- Tornam a solução de fenolftaleína intensamente rosa/carmesim.`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: Ácidos começam com **H** (\`HCl\`, \`H₂SO₄\`) e soltam \`H⁺\`; Bases terminam com **OH** (\`NaOH\`, \`KOH\`) e soltam \`OH⁻\`!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'Reação de Neutralização, Formação de Sais e Óxidos' },
        conteudo: [
            `## 📺 Guia da Videoaula: Quando Ácidos e Bases se Encontram`,
            `Assista ao vídeo demonstrando a reação de neutralização e seus efeitos. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Reação de Neutralização Total:**`,
            `  \`Ácido + Base → Sal + Água\``,
            `  Exemplo clássico: \`HCl + NaOH → NaCl + H₂O\`. O \`H⁺\` do ácido se junta com o \`OH⁻\` da base formando água neutra, enquanto os íons restantes formam o sal.`,
            `- **Sais:** Compostos iônicos formados por cátions de uma base e ânions de um ácido.`,
            `- **Óxidos:** Compostos binários (formados por apenas dois elementos) onde o oxigênio é o elemento mais eletronegativo (ex.: \`CO₂\`, \`SO₂\`, \`CaO\`, \`Fe₂O₃\`).`,
            `> Conclua este resumo para liberar a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Neutralização Total: Complete os produtos gerados na reação inorgânica entre um ácido e uma base de Arrhenius:',
                    dica: 'A união dos íons H+ e OH- produz água, enquanto os íons restantes formam o sal.',
                    template: 'A reação de neutralização entre Ácido + Base produz sempre {lacuna}',
                    opcoes: ['Sal + Água', 'Apenas Gás Hidrogênio', 'Dois novos Ácidos', 'Gás Carbônico puro'],
                    respostaCorreta: 'Sal + Água',
                    explicacao: 'A reação canônica de neutralização total entre um ácido e uma base produz invariavelmente Sal e Água (Ácido + Base -> Sal + Água).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Ácidos e Bases de Arrhenius: Selecione todas as propriedades físico-químicas verdadeiras:',
                    dica: 'Lembre-se dos íons liberados (H+ para ácidos e OH- para bases) e das cores de indicadores!',
                    opcoes: [
                        { texto: 'Ácidos de Arrhenius liberam íons H⁺ (hidrônio) em solução aquosa', correta: true },
                        { texto: 'Bases de Arrhenius liberam íons hidróxido (OH⁻) em solução aquosa', correta: true },
                        { texto: 'Ácidos possuem sabor azedo característico (ex: limão, vinagre)', correta: true },
                        { texto: 'Bases tornam a solução de fenolftaleína intensamente cor-de-rosa', correta: true },
                        { texto: 'Ácidos tornam a fenolftaleína azul-escura', correta: false },
                        { texto: 'Bases liberam gás cloro puro espontaneamente no ar', correta: false }
                    ],
                    explicacao: 'A teoria clássica de Arrhenius baseia-se na liberação de H+ (ácidos) e OH- (bases) em meio aquoso.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Função Inorgânica: Localize a linha que classificou a soda cáustica erroneamente como ácido:',
                    dica: 'O hidróxido de sódio (NaOH) termina com OH (hidroxila), sendo uma base extremamente forte!',
                    linhasCodigo: [
                        '1. Substância HCl (ácido clorídrico): Ácido que libera H⁺ no estômago',
                        '2. Substância H₂SO₄ (ácido sulfúrico): Ácido diprótico usado em baterias',
                        '3. Substância NaOH (soda cáustica): Ácido fraco porque contém hidrogênio na fórmula',
                        '4. Correção: NaOH é uma Base (hidróxido) que libera ânions OH⁻ cáusticos'
                    ],
                    linhaBug: 2,
                    explicacao: 'A linha 3 erra grosseiramente. O NaOH é uma base forte (hidróxido de sódio) e não um ácido! A presença de OH⁻ define a função base.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Reação de Neutralização Ácido-Base: Ordene os passos em nível iônico da reação entre HCl e NaOH:',
                    dica: 'Dissocie o ácido e a base em solução, junte H+ e OH- para formar água e una o sal.',
                    itens: [
                        'O ácido clorídrico (HCl) sofre ionização aquosa liberando cátions H⁺ e ânions Cl⁻',
                        'O hidróxido de sódio (NaOH) dissocia-se liberando cátions Na⁺ e ânions OH⁻',
                        'Os íons H⁺ e OH⁻ colidem e neutralizam-se formando moléculas neutras de água (H₂O)',
                        'Os íons espectadores Na⁺ e Cl⁻ permanecem em solução compondo o sal dissolvido (NaCl)'
                    ],
                    ordemCorreta: [
                        'O ácido clorídrico (HCl) sofre ionização aquosa liberando cátions H⁺ e ânions Cl⁻',
                        'O hidróxido de sódio (NaOH) dissocia-se liberando cátions Na⁺ e ânions OH⁻',
                        'Os íons H⁺ e OH⁻ colidem e neutralizam-se formando moléculas neutras de água (H₂O)',
                        'Os íons espectadores Na⁺ e Cl⁻ permanecem em solução compondo o sal dissolvido (NaCl)'
                    ],
                    explicacao: 'A essência termodinâmica da neutralização de Arrhenius é a reação H⁺ + OH⁻ → H₂O.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Compostos inorgânicos binários formados por apenas 2 elementos onde o oxigênio é o mais eletronegativo são os:',
                    dica: 'Exemplos incluem CO₂, SO₂, CaO e Fe₂O₃.',
                    template: 'Compostos binários contendo oxigênio como elemento mais eletronegativo são os {lacuna}',
                    opcoes: ['óxidos', 'ácidos', 'sais', 'hidretos'],
                    respostaCorreta: 'óxidos',
                    explicacao: 'Os óxidos desempenham papéis vitais no efeito estufa (CO₂), chuva ácida (SO₂) e na indústria química.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a escala logarítmica de pH (Potencial Hidrogeniônico), acidez, neutralidade, alcalinidade e indicadores ácido-base.`,
            `### 1. O que Mede o pH`,
            `Criada pelo químico dinamarquês Søren Sørensen em 1909, a escala de **pH (Potencial Hidrogeniônico)** mede a concentração molar de íons \`H⁺\` presentes em uma solução aquosa: \`pH = -log[H⁺]\`.`,
            `### 2. A Escala de 0 a 14 a 25 ºC`,
            `- **pH < 7 (Meio Ácido):** Alta concentração de \`H⁺\`. Quanto menor o valor, mais ácido (ex.: suco gástrico \`pH ≈ 1,5\`, suco de limão \`pH ≈ 2,2\`, café \`pH ≈ 5\`).`,
            `- **pH = 7 (Meio Neutro):** Concentração equilibrada de \`H⁺\` e \`OH⁻\` (ex.: água destilada pura a 25 ºC).`,
            `- **pH > 7 (Meio Básico / Alcalino):** Baixa concentração de \`H⁺\` e alta de \`OH⁻\` (ex.: sangue humano \`pH ≈ 7,4\`, água sanitária \`pH ≈ 12\`).`,
            `### 3. A Natureza Logarítmica`,
            `Por ser uma escala logarítmica de base 10, uma solução de pH 3 é **10 vezes** mais ácida que uma de pH 4, e **100 vezes** mais ácida que uma de pH 5!`,
            `> **Dica de Fixação Galea (TDAH):** Pense no pH como uma gangorra: no meio (7) tudo está equilibrado; para a esquerda (0 a 6) o ácido vence; para a direita (8 a 14) a base vence!`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Reações Químicas, Evidências Experimentais e a Lei de Lavoisier' },
        conteudo: [
            `## 📺 Guia da Videoaula: Conservação de Massas e Evidências Visuais`,
            `Assista ao vídeo demonstrando como identificar se uma reação química ocorreu. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Evidências Visuais de Reação:**`,
            `  • Liberação de gás (efervescência).`,
            `  • Mudança espontânea de cor.`,
            `  • Formação de precipitado sólido insolúvel no fundo.`,
            `  • Liberação ou absorção sensível de calor (variação térmica / luz).`,
            `- **A Lei de Lavoisier (Conservação das Massas):**`,
            `  > "Na natureza nada se cria, nada se perde, tudo se transforma."`,
            `- Em qualquer sistema fechado, a massa total dos reagentes consumidos é rigorosamente igual à massa total dos produtos gerados. É por isso que balanceamos equações químicas igualando o número de átomos de cada elemento antes e depois da seta!`,
            `> Conclua este resumo para liberar a gamificação na Lição 18!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Escala de pH & Lei de Lavoisier: Selecione todas as afirmações cientificamente corretas:',
                    dica: 'Lembre-se da faixa de pH ácido, neutro e básico e da conservação de massa de Lavoisier!',
                    opcoes: [
                        { texto: 'Uma solução aquosa com pH 2 é considerada fortemente ácida', correta: true },
                        { texto: 'pH igual a 7 indica neutralidade química a 25 ºC (água pura)', correta: true },
                        { texto: 'A Lei de Lavoisier afirma que a massa se conserva nas reações em sistema fechado', correta: true },
                        { texto: 'Soluções com pH maior que 7 são classificadas como básicas ou alcalinas', correta: true },
                        { texto: 'Liberação de gás e alteração de cor são evidências de reação química', correta: true },
                        { texto: 'Uma solução com pH 12 é fortemente ácida', correta: false },
                        { texto: 'Água pura possui pH igual a 0', correta: false }
                    ],
                    explicacao: 'pH < 7 indica meio ácido; pH = 7 é neutro; pH > 7 é básico. Pela Lei de Lavoisier, em recipiente fechado a massa total de reagentes é igual à dos produtos.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Neutralidade Química: A 25 ºC, uma solução aquosa perfeitamente equilibrada (como a água destilada pura) possui pH igual a:',
                    dica: 'Fica exatamente no centro da escala convencional de 0 a 14.',
                    template: 'O valor de pH que define a neutralidade química absoluta a 25 ºC é {lacuna}',
                    opcoes: ['7', '0', '14', '1'],
                    respostaCorreta: '7',
                    explicacao: 'Em pH 7 a 25 ºC, as concentrações de íons H⁺ e OH⁻ são rigorosamente idênticas (10⁻⁷ mol/L).'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Conservação de Massas: Localize a linha que viola a Lei de Lavoisier em recipiente fechado:',
                    dica: 'Em sistema fechado sem troca de matéria com o exterior, a massa inicial DEVE ser rigorosamente igual à final!',
                    linhasCodigo: [
                        '1. Reação química em reator hermeticamente selado: A + B → C + D',
                        '2. Massa inicial pesada dos reagentes: 50 g de A + 50 g de B = 100 g total',
                        '3. Registro do operador: Massa dos produtos pesou 130 g porque formou novo composto',
                        '4. Correção: A massa final é obrigatoriamente 100 g (na natureza nada se cria do nada)'
                    ],
                    linhaBug: 2,
                    explicacao: 'A linha 3 comete erro impossível. Átomos não são criados do vácuo; pela Lei de Lavoisier, a massa dos produtos em frasco fechado é exatamente igual aos 100 g de reagentes.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Balanceamento Químico: Ordene as etapas para balancear a combustão simples do hidrogênio (formação de água):',
                    dica: 'Escreva reagentes e produtos, conte os átomos em cada membro e ajuste os coeficientes estequiométricos.',
                    itens: [
                        'Identificar a fórmula molecular dos reagentes: Gás Hidrogênio (H₂) e Gás Oxigênio (O₂)',
                        'Identificar o produto gerado da combinação: Molécula de Água (H₂O)',
                        'Verificar que há 2 átomos de O nos reagentes e apenas 1 átomo de O no produto',
                        'Ajustar os coeficientes estequiométricos mínimos inteiros: 2 H₂ + 1 O₂ → 2 H₂O'
                    ],
                    ordemCorreta: [
                        'Identificar a fórmula molecular dos reagentes: Gás Hidrogênio (H₂) e Gás Oxigênio (O₂)',
                        'Identificar o produto gerado da combinação: Molécula de Água (H₂O)',
                        'Verificar que há 2 átomos de O nos reagentes e apenas 1 átomo de O no produto',
                        'Ajustar os coeficientes estequiométricos mínimos inteiros: 2 H₂ + 1 O₂ → 2 H₂O'
                    ],
                    explicacao: 'O balanceamento de equações assegura a conservação estrita de átomos de cada elemento químico presente.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Soluções cáusticas como alvejantes e soda dissolvida possuem pH acima de 7, sendo denominadas:',
                    dica: 'Sinônimo de substâncias com propriedades de base.',
                    template: 'Soluções aquosas com pH compreendido entre 8 e 14 são classificadas como {lacuna}',
                    opcoes: ['básicas (alcalinas)', 'ácidas', 'neutras', 'destiladas'],
                    respostaCorreta: 'básicas (alcalinas)',
                    explicacao: 'Valores de pH > 7 indicam predominância de íons hidroxila (OH⁻), caracterizando o meio alcalino ou básico.'
                }
            ]
        }
    },

    // --- BLOCO 7 (Aulas 19 e 20 - Encerramento de Química) ---
    19: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a física-química das soluções, cálculo de concentração comum (\`g/L\`) e a importância da Química Verde para o meio ambiente.`,
            `### 1. Soluções: Soluto e Solvente`,
            `Uma solução é uma mistura homogênea composta por pelo menos dois elementos:`,
            `- **Soluto:** A substância que se dissolve e se dispersa (em menor quantidade, ex.: sal de cozinha).`,
            `- **Solvente:** O meio dispersante que dissolve o soluto (em maior quantidade, ex.: água, considerada o solvente universal).`,
            `### 2. Concentração Comum (C)`,
            `É a razão entre a massa do soluto (em gramas) e o volume total da solução (em litros):`,
            `\`Concentração = massa do soluto (g) / volume da solução (L)\` (\`C = m / V\`)`,
            `- Se você dissolve 20 g de açúcar em água até completar 2 litros de refresco, a concentração comum da bebida é \`20 g / 2 L = 10 g/L\`.`,
            `### 3. Química Verde e Sustentabilidade`,
            `A química moderna foca em processos limpos: desenvolvimento de plásticos biodegradáveis, reciclagem de baterias de íon-lítio, redução de emissão de gases de efeito estufa (\`CO₂\`, \`CH₄\`) e tratamento de efluentes industriais para proteger os lençóis freáticos.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na concentração como um achocolatado: 1 colher de pó no copo fica suave (baixa concentração), mas 5 colheres deixam o leite super concentrado e doce!`
        ].join('\n\n')
    },

    20: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Concentração Comum: Calcule a concentração comum (C = m/V) de uma solução com 50 g de sal dissolvidos em 2 litros de água:',
                    dica: 'Aplique a fórmula C = massa / volume (divida 50 g por 2 L).',
                    template: 'A concentração comum da solução salina é igual a {lacuna} g/L',
                    opcoes: ['25', '100', '52', '10'],
                    respostaCorreta: '25',
                    explicacao: 'C = massa / volume => C = 50 g / 2 L = 25 g/L.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Soluções & Química Verde: Selecione todas as afirmativas cientificamente corretas:',
                    dica: 'A água é o solvente universal e a química verde visa reduzir a toxicidade e o desperdício industrial.',
                    opcoes: [
                        { texto: 'Em misturas homogêneas, o componente dissolvido em menor quantidade é o soluto', correta: true },
                        { texto: 'A água é considerada o solvente universal devido à sua polaridade', correta: true },
                        { texto: 'A concentração comum é expressa no SI em g/L', correta: true },
                        { texto: 'A Química Verde busca desenvolver processos que não gerem resíduos tóxicos', correta: true },
                        { texto: 'Plásticos biodegradáveis e reciclagem de lítio são metas da sustentabilidade', correta: true },
                        { texto: 'Soluto e solvente podem ser separados por filtração simples de papel', correta: false },
                        { texto: 'Concentração comum multiplica a massa pelo volume da solução', correta: false }
                    ],
                    explicacao: 'Soluções homogêneas contêm soluto dissolvido molecularmente no solvente. A Química Verde prioriza economia atômica e prevenção de poluição.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Unidade de Volume: Localize a linha onde esqueceram de converter mililitros (mL) para Litros (L):',
                    dica: 'Para calcular a concentração em g/L, o volume em mL deve ser dividido por 1000 (ex: 500 mL = 0,5 L)!',
                    linhasCodigo: [
                        '1. Dissolver 20 g de sacarose (açúcar) em água até completar 500 mL de solução',
                        '2. Identificação das variáveis: massa m = 20 g e volume V = 500 mL',
                        '3. Cálculo com erro de unidade: C = 20 / 500 = 0,04 g/L',
                        '4. Correção: 500 mL = 0,5 L, portanto C = 20 g / 0,5 L = 40 g/L!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, dividiram por 500 direto. Em concentração comum (g/L), 500 mL deve ser convertido para 0,5 L, resultando em 40 g/L e não 0,04 g/L.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Preparo de Solução Padronizada: Ordene o procedimento experimental canônico para preparar uma solução em laboratório:',
                    dica: 'Pese o soluto, dissolva em béquer, transfira ao balão volumétrico e complete com água até o menisco.',
                    itens: [
                        'Pesar com exatidão a massa calculada do soluto sólido em balança analítica',
                        'Dissolver o soluto completamente em um béquer com pequena porção de água destilada',
                        'Transferir quantitativamente a solução para o balão volumétrico com o auxílio de funil',
                        'Adicionar água destilada até atingir rigorosamente o traço de calibração (menisco) e agitar'
                    ],
                    ordemCorreta: [
                        'Pesar com exatidão a massa calculada do soluto sólido em balança analítica',
                        'Dissolver o soluto completamente em um béquer com pequena porção de água destilada',
                        'Transferir quantitativamente a solução para o balão volumétrico com o auxílio de funil',
                        'Adicionar água destilada até atingir rigorosamente o traço de calibração (menisco) e agitar'
                    ],
                    explicacao: 'O uso de balão volumétrico com ajuste no menisco assegura a precisão volumétrica necessária em análises químicas.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Química: Em uma mistura homogênea de água e sal de cozinha, o componente líquido dispersante é denominado:',
                    dica: 'O componente que dissolve o soluto.',
                    template: 'O meio dispersante que dissolve o soluto em uma solução aquosa é o {lacuna}',
                    opcoes: ['solvente', 'soluto', 'precipitado', 'catalisador'],
                    respostaCorreta: 'solvente',
                    explicacao: 'Parabéns! O solvente dissolve o soluto originando soluções homogêneas. Você concluiu com excelência a trilha de Química!'
                }
            ]
        }
    }
};
