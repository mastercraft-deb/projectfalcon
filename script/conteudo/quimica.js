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
                    enunciado: 'Selecione todas as afirmações corretas sobre os estados da matéria e as mudanças de fase:',
                    dica: 'Lembre-se dos nomes científicos das transições térmicas como fusão e sublimação!',
                    opcoes: [
                        { texto: 'A passagem direta do estado sólido para o gasoso chama-se Sublimação', correta: true },
                        { texto: 'No estado sólido, a matéria possui forma e volume definidos', correta: true },
                        { texto: 'A passagem de líquido para sólido chama-se Solidificação', correta: true },
                        { texto: 'Densidade é uma propriedade física específica calculada por d = m/V', correta: true },
                        { texto: 'A evaporação e a ebulição são modalidades de vaporização', correta: true },
                        { texto: 'No estado gasoso as moléculas ficam completamente imóveis', correta: false },
                        { texto: 'Dois corpos podem ocupar o mesmo espaço ao mesmo tempo', correta: false },
                        { texto: 'A passagem de sólido para líquido chama-se condensação', correta: false }
                    ],
                    explicacao: 'A sublimação é a transição direta sólido-gás. Densidade é específica (d=m/V). No estado sólido as partículas vibram em posições fixas com forma e volume definidos.'
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
                    enunciado: 'Ordene a evolução histórica dos Modelos Atômicos da humanidade em ordem cronológica:',
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
                    enunciado: 'Selecione todas as afirmações cientificamente VERDADEIRAS sobre a Tabela Periódica e átomos:',
                    dica: 'Lembre-se do significado do número atômico Z, dos períodos e da estabilidade dos gases nobres!',
                    opcoes: [
                        { texto: 'O número atômico (Z) representa a quantidade de prótons no núcleo', correta: true },
                        { texto: 'Os elementos são dispostos na tabela em ordem crescente de Z', correta: true },
                        { texto: 'Os Gases Nobres (Grupo 18) são conhecidos por sua alta estabilidade química', correta: true },
                        { texto: 'Isótopos são átomos com o mesmo número atômico Z e massas diferentes', correta: true },
                        { texto: 'Os períodos horizontais indicam o número de camadas eletrônicas', correta: true },
                        { texto: 'Os elétrons ficam localizados dentro do núcleo com os prótons', correta: false },
                        { texto: 'A Tabela Periódica é organizada em ordem alfabética de nomes', correta: false },
                        { texto: 'O número de massa A é a soma de elétrons com prótons', correta: false }
                    ],
                    explicacao: 'O número atômico Z define o elemento e dita a ordem da tabela. Isótopos compartilham o mesmo Z. Os elétrons ficam na eletrosfera e os gases nobres possuem octeto estável.'
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
                    enunciado: 'A ligação química presente no sal de cozinha (NaCl), formada pela transferência definitiva de elétrons, é do tipo:',
                    dica: 'Essa ligação ocorre entre o cátion de um metal (Na+) e o ânion de um ametal (Cl-) por atração eletrostática.',
                    template: 'A ligação química formada entre sódio e cloro no composto NaCl é a ligação {lacuna}',
                    opcoes: ['iônica', 'covalente', 'metálica', 'de hidrogênio', 'nuclear'],
                    respostaCorreta: 'iônica',
                    explicacao: 'O sódio (metal) doa um elétron para o cloro (ametal), formando os íons Na+ e Cl- unidos por forte atração eletrostática iônica.'
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
                    enunciado: 'Complete os produtos gerados na clássica reação inorgânica de neutralização total entre um ácido e uma base:',
                    dica: 'A união dos íons H+ e OH- produz água, enquanto os íons restantes formam o sal.',
                    template: 'A reação de neutralização entre Ácido + Base produz sempre {lacuna}',
                    opcoes: ['Sal + Água', 'Apenas Gás Hidrogênio', 'Dois novos Ácidos', 'Metal Puro + Fogo', 'Gás Carbônico puro'],
                    respostaCorreta: 'Sal + Água',
                    explicacao: 'A reação canônica de neutralização total entre um ácido e uma base de Arrhenius produz invariavelmente Sal e Água (Ácido + Base -> Sal + Água).'
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
                    enunciado: 'Selecione todas as afirmações corretas sobre a escala de pH e as Leis das Reações Químicas:',
                    dica: 'Lembre-se da faixa de pH ácido, neutro e básico e da Lei de Lavoisier!',
                    opcoes: [
                        { texto: 'Uma solução aquosa com pH 2 é considerada fortemente ácida', correta: true },
                        { texto: 'pH igual a 7 indica neutralidade química a 25 ºC', correta: true },
                        { texto: 'A Lei de Lavoisier afirma que a massa se conserva nas reações em sistema fechado', correta: true },
                        { texto: 'Soluções com pH maior que 7 são classificadas como básicas ou alcalinas', correta: true },
                        { texto: 'Liberação de gás e alteração de cor são evidências de reação química', correta: true },
                        { texto: 'Uma solução com pH 12 é fortemente ácida', correta: false },
                        { texto: 'Em sistema fechado a massa dos produtos é sempre o dobro dos reagentes', correta: false },
                        { texto: 'Água pura possui pH igual a 0', correta: false }
                    ],
                    explicacao: 'pH < 7 indica meio ácido; pH = 7 é neutro; pH > 7 é básico. Pela Lei de Lavoisier, em recipiente fechado a massa total de reagentes é igual à massa final dos produtos.'
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
                    enunciado: 'Calcule a concentração comum (C = m/V) de uma solução contendo 50 g de sal dissolvidos em 2 litros de água:',
                    dica: 'Aplique a fórmula C = massa / volume (divida 50 g por 2 L).',
                    template: 'A concentração comum da solução é igual a {lacuna} g/L',
                    opcoes: ['25', '100', '52', '0.04', '10'],
                    respostaCorreta: '25',
                    explicacao: 'C = massa / volume => C = 50 g / 2 L = 25 g/L.'
                }
            ]
        }
    }
};
