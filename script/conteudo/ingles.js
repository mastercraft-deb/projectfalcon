/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Inglês
   Fontes: CEFR (Common European Framework of Reference for Languages A1/A2),
           Cambridge & Oxford English Grammar, Fonética Prática.
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.ingles = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar as saudações formais e informais em língua inglesa, formas de quebrar o gelo e apresentações pessoais autênticas.`,
            `### 1. O Inglês como Língua Global`,
            `O inglês é a língua franca da ciência, da programação de computadores, da aviação internacional e dos negócios. Começar com saudações naturais abre portas para se comunicar com pessoas de qualquer canto do mundo.`,
            `### 2. Saudações Formais vs Informais`,
            `- **Informais (para amigos, colegas de trabalho e internet):**`,
            `  • \`Hello!\` / \`Hi!\` (Olá! / Oi!).`,
            `  • \`Hey, how's it going?\` (E aí, como vão as coisas?).`,
            `  • \`What's up?\` (E aí? / Qual é a boa?).`,
            `- **Formais (para entrevistas, clientes e ambientes acadêmicos):**`,
            `  • \`Good morning!\` (Bom dia - até meio-dia).`,
            `  • \`Good afternoon!\` (Boa tarde - do meio-dia até o anoitecer).`,
            `  • \`Good evening!\` (Boa noite - ao chegar em um local ou iniciar uma conversa).`,
            `  • \`Good night!\` (Boa noite - usado **exclusivamente na despedida** ou ao ir dormir).`,
            `### 3. Apresentações Pessoais`,
            `- \`"My name is Alex. Nice to meet you!"\` (Meu nome é Alex. Prazer em conhecer você!).`,
            `- Resposta natural: \`"Nice to meet you too!"\` (Prazer em conhecer você também!).`,
            `> **Dica de Fixação Galea (TDAH):** Cuidado com a pegadinha clássica: ao chegar num restaurante à noite, diga **Good evening**! Se disser *Good night*, o garçom vai achar que você está indo embora dormir!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'O Alfabeto em Inglês (The Alphabet) e Como Soletrar Nomes' },
        conteudo: [
            `## 📺 Guia da Videoaula: Pronúncia Fonética das Letras em Inglês`,
            `Assista ao vídeo praticando o som de cada letra do alfabeto. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **As 5 Vogais (Onde quase todo brasileiro se confunde):**`,
            `  • **A** soa como \`/eɪ/\` (como em *play*).`,
            `  • **E** soa como \`/iː/\` (como em *see*).`,
            `  • **I** soa como \`/aɪ/\` (como em *my*).`,
            `  • **O** soa como \`/oʊ/\` (como em *go*).`,
            `  • **U** soa como \`/juː/\` (como em *music*).`,
            `- **Letras com Sons Parecidos que Exigem Atenção:**`,
            `  • **G** soa como \`/dʒiː/\` (*dji*).`,
            `  • **J** soa como \`/dʒeɪ/\` (*djei*).`,
            `  • **H** soa como \`/eɪtʃ/\` (*eitch*).`,
            `- **Como Pedir para Soletrar:** \`"How do you spell your name?"\` (Como se soletra seu nome?). Resposta: \`"It's G-A-L-E-A"\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 3!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Greetings & Spelling: Selecione todas as afirmações corretas sobre saudações e soletrar em inglês:',
                    dica: 'Lembre-se da diferença entre Good evening (ao chegar) e Good night (ao se despedir)!',
                    opcoes: [
                        { texto: 'Good evening é a saudação correta ao chegar a um local à noite', correta: true },
                        { texto: 'Good night é usado exclusivamente para despedidas ou ao ir dormir', correta: true },
                        { texto: 'A pergunta "How do you spell your name?" pede para soletrar o nome', correta: true },
                        { texto: 'Nice to meet you significa "Prazer em conhecer você"', correta: true },
                        { texto: 'A letra "A" em inglês pronuncia-se com som similar a /ei/', correta: true },
                        { texto: 'Good night deve ser dito para cumprimentar o recepcionista ao entrar', correta: false },
                        { texto: 'What\'s up é uma saudação formal para autoridades', correta: false }
                    ],
                    explicacao: 'Good evening saúda na chegada noturna, enquanto Good night despede na saída. A pronúncia de A é /ei/ e soletrar usa o verbo to spell.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Saudações Formais: Complete com a saudação adequada usada do nascer do sol até o meio-dia (12:00):',
                    dica: 'Morning é a palavra inglesa para "manhã".',
                    template: 'Good {lacuna}! Welcome to our company meeting.',
                    opcoes: ['morning', 'afternoon', 'evening', 'night'],
                    respostaCorreta: 'morning',
                    explicacao: '"Good morning" é a saudação formal canônica utilizada durante todo o período matutino até as 12:00.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Saudação Noturna: Localize a linha onde o falante cometeu o erro clássico de despedir-se ao entrar no restaurante:',
                    dica: 'Ao entrar em qualquer local à noite, diz-se Good evening! Good night significa "tchau / vou dormir"!',
                    linhasCodigo: [
                        '1. Context: A customer walks into an Italian restaurant at 8:00 PM',
                        '2. Customer addresses the host at the reception desk:',
                        '3. "Hello, good night! A table for two by the window, please."',
                        '4. The host is confused because "Good night" is only used to say goodbye!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o cliente disse "good night" ao chegar. O cumprimento de entrada à noite em inglês é invariavelmente "Good evening".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Quebrando o Gelo: Ordene um diálogo autêntico e natural de apresentação pessoal em inglês:',
                    dica: 'Apresente-se com o nome, cumprimente de volta e pergunte como se soletra.',
                    itens: [
                        '"Hello! My name is Sarah."',
                        '"Hi Sarah! I\'m David. Nice to meet you."',
                        '"Nice to meet you too, David!"',
                        '"How do you spell your last name, Sarah?"'
                    ],
                    ordemCorreta: [
                        '"Hello! My name is Sarah."',
                        '"Hi Sarah! I\'m David. Nice to meet you."',
                        '"Nice to meet you too, David!"',
                        '"How do you spell your last name, Sarah?"'
                    ],
                    explicacao: 'Apresentações formais e informais em inglês seguem a sequência: nome, retribuição com nice to meet you e confirmação de grafia.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a pergunta usada para pedir que alguém soletre seu nome ou e-mail:',
                    dica: 'O verbo em inglês para "soletrar letra por letra" é to spell.',
                    template: 'Could you please {lacuna} your email address for me?',
                    opcoes: ['spell', 'speak', 'write', 'read'],
                    respostaCorreta: 'spell',
                    explicacao: 'O verbo "to spell" significa soletrar (How do you spell...? = Como se soletra...?).'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar o verbo mais importante da língua inglesa: o **Verb To Be** no Presente (formas afirmativas e contrações naturais).`,
            `### 1. O que Significa o Verb To Be`,
            `Em português temos dois verbos distintos: "Ser" (característica permanente) e "Estar" (estado transitório). Em inglês, o verbo **To Be** unifica ambos os sentidos dependendo do contexto da frase!`,
            `### 2. A Conjugação no Presente (Simple Present)`,
            `- **I am** (Eu sou / Eu estou) → Contração: \`I'm\`.`,
            `- **You are** (Você é / Você está) → Contração: \`You're\`.`,
            `- **He is** (Ele é / Ele está) → Contração: \`He's\`.`,
            `- **She is** (Ela é / Ela está) → Contração: \`She's\`.`,
            `- **It is** (Ele/Ela para coisas, animais ou clima) → Contração: \`It's\`.`,
            `- **We are** (Nós somos / Nós estamos) → Contração: \`We're\`.`,
            `- **They are** (Eles/Elas são / estão) → Contração: \`They're\`.`,
            `### 3. Exemplos Reais`,
            `- \`"I'm a software developer."\` (Eu sou desenvolvedor de software).`,
            `- \`"She's very happy today."\` (Ela está muito feliz hoje).`,
            `- \`"It's cold outside."\` (Está frio lá fora).`,
            `> **Dica de Fixação Galea (TDAH):** Falantes nativos de inglês quase nunca dizem *I am* ou *She is* pausadamente; use sempre as contrações (\`I'm\`, \`She's\`, \`They're\`) para soar fluido e natural!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Verb To Be: Formas Negativas (not / isn\'t / aren\'t) e Perguntas com Inversão' },
        conteudo: [
            `## 📺 Guia da Videoaula: Negando e Perguntando com o Verbo To Be`,
            `Assista ao vídeo demonstrando a regra da inversão gramatical em perguntas. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Forma Negativa (Basta acrescentar not após o verbo):**`,
            `  • \`I am not\` (Contração: \`I'm not\`).`,
            `  • \`He / She / It is not\` (Contração: \`isn't\`). Ex.: \`He isn't tired\` (Ele não está cansado).`,
            `  • \`You / We / They are not\` (Contração: \`aren't\`). Ex.: \`They aren't here\` (Eles não estão aqui).`,
            `- **Forma Interrogativa (A Regra da Inversão):**`,
            `  • Em inglês, você não muda apenas o tom da voz; o verbo To Be **pula para antes do sujeito**!`,
            `  • Afirmativa: \`You are Brazilian.\` (Você é brasileiro).`,
            `  • Pergunta: \`Are you Brazilian?\` (Você é brasileiro?).`,
            `  • Afirmativa: \`She is your teacher.\` → Pergunta: \`Is she your teacher?\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Inversão no To Be: Complete a pergunta aplicando a regra de inversão do Verbo To Be com o sujeito "you":',
                    dica: 'Com o pronome you, a forma do verbo To Be no presente é are (Are you...?).',
                    template: '{lacuna} you ready for the English challenge?',
                    opcoes: ['Are', 'Is', 'Am', 'Do'],
                    respostaCorreta: 'Are',
                    explicacao: 'Na forma interrogativa do verbo To Be, a conjugação do sujeito "you" (are) inverte-se para o início da sentença: "Are you ready...?"'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Conjugação e Contrações: Selecione todas as formas afirmativas e negativas corretas do Verb To Be:',
                    dica: 'Atenção às concordâncias sujeito-verbo: I am, He/She/It is, We/You/They are!',
                    opcoes: [
                        { texto: 'She\'s (She is)', correta: true },
                        { texto: 'They aren\'t (They are not)', correta: true },
                        { texto: 'He isn\'t (He is not)', correta: true },
                        { texto: 'We\'re (We are)', correta: true },
                        { texto: 'I\'m not (I am not)', correta: true },
                        { texto: 'He aren\'t (concordância errada)', correta: false },
                        { texto: 'They is (concordância errada)', correta: false },
                        { texto: 'I aren\'t (não existe)', correta: false }
                    ],
                    explicacao: 'O verbo To Be possui três formas no presente: am (com I), is (com he/she/it) e are (com you/we/they).'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Falta de Inversão: Localize a linha onde esqueceram de aplicar a inversão interrogativa obrigatória do To Be:',
                    dica: 'Em inglês não basta colocar um ponto de interrogação no final; o verbo deve vir antes do sujeito!',
                    linhasCodigo: [
                        '1. Statement: "She is a skilled software engineer."',
                        '2. Negative: "She isn\'t a junior developer."',
                        '3. Question attempt: "She is your team leader at Google?"',
                        '4. Correction: In English, the verb must invert: "Is she your team leader at Google?"'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram "She is...?" sem inversão. Em inglês padrão, perguntas com To Be invertem obrigatoriamente: "Is she your team leader...?"'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Transformação Gramatical: Ordene o processo de transformar uma afirmação com To Be em pergunta e resposta curta:',
                    dica: 'Comece com a frase afirmativa, inverta o verbo para a pergunta e finalize com a resposta afirmativa.',
                    itens: [
                        'Afirmação inicial: They are from Canada.',
                        'Aplicação da inversão do To Be: O verbo "Are" salta para o início da frase',
                        'Pergunta formulada com entonação: Are they from Canada?',
                        'Resposta curta canônica (short answer): Yes, they are.'
                    ],
                    ordemCorreta: [
                        'Afirmação inicial: They are from Canada.',
                        'Aplicação da inversão do To Be: O verbo "Are" salta para o início da frase',
                        'Pergunta formulada com entonação: Are they from Canada?',
                        'Resposta curta canônica (short answer): Yes, they are.'
                    ],
                    explicacao: 'A estrutura de perguntas com To Be exige a inversão Sujeito + Verbo para Verbo + Sujeito, seguida de short answers.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete com a forma negativa contraída para a terceira pessoa do singular (he/she/it):',
                    dica: 'A contração de is not é...',
                    template: 'Mark {lacuna} at the office today. He is working from home.',
                    opcoes: ['isn\'t', 'aren\'t', 'am not', 'not is'],
                    respostaCorreta: 'isn\'t',
                    explicacao: 'A contração canônica de "is not" é "isn\'t", usada exclusivamente com a 3ª pessoa do singular.'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender os Adjetivos Possessivos (\`my, your, his, her, its, our, their\`) para indicar posse e parentesco.`,
            `### 1. Indicando Posse sem Confusão`,
            `Os adjetivos possessivos acompanham um substantivo para indicar a quem aquilo pertence. Eles concordam sempre com o **possuidor** (quem tem a coisa), nunca com o objeto possuído!`,
            `### 2. A Tabela dos Possessivos`,
            `- **My:** Meu / Minha (\`my computer\`).`,
            `- **Your:** Seu / Sua / Teu (\`your phone\`).`,
            `- **His:** Dele (possuidor masculino humano: \`his car\`).`,
            `- **Her:** Dela (possuidor feminino humano: \`her book\`).`,
            `- **Its:** Dele / Dela (para animais, objetos ou empresas: \`The company changed its logo\`). *Atenção: sem apóstrofo!*`,
            `- **Our:** Nosso / Nossa (\`our project\`).`,
            `- **Their:** Deles / Delas (\`their house\`).`,
            `### 3. A Diferença Crucial: its vs it's`,
            `- \`it's\` (com apóstrofo) = contração de **it is** (ex.: \`It's raining\`).`,
            `- \`its\` (sem apóstrofo) = **possessivo** dele/dela (ex.: \`The cat licked its paw\`).`,
            `> **Dica de Fixação Galea (TDAH):** Pense em **his** como dele (homem) e **her** como dela (mulher). Eles nunca mudam para o plural: "my books", nunca "mys books"!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'Colors & Common Objects: A Posição do Adjetivo no Inglês' },
        conteudo: [
            `## 📺 Guia da Videoaula: O Adjetivo Sempre Vem Antes!`,
            `Assista ao vídeo demonstrando como descrever objetos do cotidiano. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **A Regra de Ouro dos Adjetivos em Inglês:** Diferente do português ("carro vermelho"), em inglês o adjetivo antecede obrigatoriamente o substantivo:`,
            `  • \`A red car\` (Um carro vermelho).`,
            `  • \`A blue notebook\` (Um caderno azul).`,
            `  • \`A black pen\` (Uma caneta preta).`,
            `- **Adjetivos são Invariáveis:** Eles **não têm plural nem gênero**! Diga \`red apples\` (maçãs vermelhas), NUNCA "reds apples"!`,
            `> Conclua este resumo para liberar a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Posição do Adjetivo: Ordene as palavras respeitando a posição pré-nominal dos adjetivos em inglês:',
                    dica: 'Em inglês o adjetivo qualificador (blue) deve vir antes do substantivo (car).',
                    itens: [
                        'She',
                        'drives',
                        'a blue',
                        'car'
                    ],
                    ordemCorreta: [
                        'She',
                        'drives',
                        'a blue',
                        'car'
                    ],
                    explicacao: 'Na sintaxe inglesa canônica, o adjetivo qualificador ("blue") precede obrigatoriamente o substantivo nucleador ("car"): "She drives a blue car".'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Possessive Adjectives: Selecione todos os pronomes/adjetivos possessivos gramaticalmente corretos:',
                    dica: 'Atenção aos possessivos que concordam com o possuidor (his, her, its sem apóstrofo)!',
                    opcoes: [
                        { texto: 'my (meu/minha)', correta: true },
                        { texto: 'your (seu/sua)', correta: true },
                        { texto: 'his (dele - homem)', correta: true },
                        { texto: 'her (dela - mulher)', correta: true },
                        { texto: 'its (dele/dela - animais/coisas, sem apóstrofo)', correta: true },
                        { texto: 'their (deles/delas)', correta: true },
                        { texto: 'its\' (forma inexistente)', correta: false },
                        { texto: 'hers car (não existe com substantivo)', correta: false }
                    ],
                    explicacao: 'Adjetivos possessivos antecedem substantivos sem flexão de plural ou gênero: my, your, his, her, its, our, their.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Plural de Adjetivos: Localize a linha onde colocaram erroneamente um adjetivo no plural:',
                    dica: 'Em inglês, adjetivos NUNCA vão para o plural (diz-se "red apples", NUNCA "reds apples")!',
                    linhasCodigo: [
                        '1. Yesterday I visited an art gallery downtown',
                        '2. I saw many interesting paintings on the walls',
                        '3. The artist was using two blues brushes for the sky',
                        '4. In English, adjectives are invariant and never take -s!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram "two blues brushes". Adjetivos em inglês são invariáveis e não admitem plural: o correto é "two blue brushes".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Concordância com o Possuidor: Ordene a frase onde o adjetivo possessivo concorda com o sujeito masculino:',
                    dica: 'O possessivo "his" concorda com o possuidor masculino John.',
                    itens: [
                        'John loves music,',
                        'so he plays',
                        'his acoustic guitar',
                        'every evening.'
                    ],
                    ordemCorreta: [
                        'John loves music,',
                        'so he plays',
                        'his acoustic guitar',
                        'every evening.'
                    ],
                    explicacao: 'Em inglês, o pronome possessivo concorda com quem possui (John → his), e não com a palavra violão.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a frase com o possessivo que se refere a uma mulher (ela):',
                    dica: 'O adjetivo possessivo para "dela" em inglês é her.',
                    template: 'Emma is very dedicated. {lacuna} presentation at the tech conference was brilliant.',
                    opcoes: ['Her', 'His', 'Its', 'She'],
                    respostaCorreta: 'Her',
                    explicacao: '"Her" é o adjetivo possessivo feminino singular (dela): "Her presentation" = A apresentação dela.'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a leitura das horas em inglês, o uso de \`o'clock\`, \`past\`, \`to\`, \`half\` e \`quarter\`.`,
            `### 1. Perguntando as Horas`,
            `A forma padrão universal é: \`"What time is it?"\` ou mais formalmente: \`"Could you tell me the time, please?"\`.`,
            `### 2. As Duas Maneiras de Dizer as Horas`,
            `- **1. O Método Digital (Simples e Direto):** Lê os números em sequência:`,
            `  • \`2:15\` → *"It's two fifteen"*.`,
            `  • \`8:45\` → *"It's eight forty-five"*.`,
            `- **2. O Método Tradicional (Muito Usado no Cotidiano):**`,
            `  • Horas exatas: Use **o'clock** (\`7:00\` → *"It's seven o'clock"*).`,
            `  • 15 minutos: Use **a quarter** (\`7:15\` → *"It's a quarter past seven"*).`,
            `  • 30 minutos: Use **half past** (\`7:30\` → *"It's half past seven"*).`,
            `  • Minutos restantes para a próxima hora: Use **to** (\`7:45\` → *"It's a quarter to eight"* - 15 minutos para as 8).`,
            `> **Dica de Fixação Galea (TDAH):** Pense no relógio dividido ao meio: até 30 minutos você usa **past** (passou da hora); depois dos 30 você usa **to** (falta para a próxima)!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'Simple Present: Verbos de Rotina e a Regra do -s para he/she/it' },
        conteudo: [
            `## 📺 Guia da Videoaula: Rotina Diária e a Regra da Terceira Pessoa`,
            `Assista ao vídeo demonstrando verbos como wake up, study e work. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O Presente Simples (Simple Present):** Usado para expressar hábitos, fatos científicos e rotinas diárias.`,
            `- **Conjugação com I, You, We, They:** O verbo fica na sua forma base limpa:`,
            `  • \`I study English every day.\``,
            `  • \`They work in a tech company.\``,
            `- **A REGRA CRÍTICA DO HE / SHE / IT:** Na 3ª pessoa do singular afirmativa, o verbo recebe um **-s** (ou **-es** / **-ies**):`,
            `  • \`He works\` (Ele trabalha).`,
            `  • \`She watches TV\` (Ela assiste TV - verbos terminados em ch, sh, ss, x recebem -es).`,
            `  • \`He studies\` (terminados em consoante + y trocam por -ies).`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Simple Present na 3ª Pessoa: Complete a frase aplicando a flexão correta do verbo para he/she/it:',
                    dica: 'Verbos terminados em consoante + y trocam o y por -ies com he, she e it.',
                    template: 'She {lacuna} English at the university every morning.',
                    opcoes: ['studies', 'study', 'studying', 'studied'],
                    respostaCorreta: 'studies',
                    explicacao: 'Para a 3ª pessoa do singular (she) no presente afirmativo, "study" vira "studies" (troca consoante+y por -ies).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Regra do -s no Simple Present: Selecione todas as formas verbais afirmativas corretas com he/she/it:',
                    dica: 'Lembre-se: verbos com ch/sh/ss/x/o recebem -es (watches, goes); consoante+y recebe -ies (studies).',
                    opcoes: [
                        { texto: 'He works (trabalha)', correta: true },
                        { texto: 'She watches TV (assiste)', correta: true },
                        { texto: 'He goes to school (vai)', correta: true },
                        { texto: 'She studies (estuda)', correta: true },
                        { texto: 'He plays guitar (vogal+y só recebe -s)', correta: true },
                        { texto: 'He work (falta o -s na 3ª pessoa)', correta: false },
                        { texto: 'She watchs (falta a letra e)', correta: false }
                    ],
                    explicacao: 'A 3ª pessoa do singular no Simple Present afirmativo exige -s, -es ou -ies dependendo da terminação fonética do verbo.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da 3ª Pessoa do Singular: Localize a linha onde esqueceram a desinência do Simple Present:',
                    dica: 'Com o sujeito he, o verbo principal na afirmativa NÃO pode ficar na forma infinitiva sem -s!',
                    linhasCodigo: [
                        '1. Every morning, Lucas wakes up at 6:30 AM',
                        '2. He drinks a cup of black coffee and eats toast',
                        '3. Then he work at a software startup from his home office',
                        '4. In the evening, he relaxes and reads books'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram "he work". Como o sujeito é "he" (3ª pessoa), o verbo deve receber -s obrigatoriamente: "he works".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Telling the Time: Ordene as palavras para expressar o horário 7:45 no método tradicional britânico:',
                    dica: '15 minutos para as 8 é expresso como "a quarter to eight".',
                    itens: [
                        'It\'s',
                        'a quarter',
                        'to',
                        'eight.'
                    ],
                    ordemCorreta: [
                        'It\'s',
                        'a quarter',
                        'to',
                        'eight.'
                    ],
                    explicacao: 'Em inglês, 15 minutos para a próxima hora diz-se "a quarter to [próxima hora]" (It\'s a quarter to eight = São quinze para as oito).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Para indicar horários exatos em ponto (como 8:00 em ponto), usamos a expressão:',
                    dica: 'Contração histórica de "of the clock".',
                    template: 'The morning team meeting starts promptly at nine {lacuna}.',
                    opcoes: ['o\'clock', 'hours', 'sharp-time', 'clock'],
                    respostaCorreta: 'o\'clock',
                    explicacao: 'A expressão "o\'clock" é empregada exclusivamente para horas exatas cheias (nine o\'clock = 9 horas em ponto).'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar as Question Words (WH-Words: \`What, Where, Who, When, Why, How\`) para extrair informações específicas.`,
            `### 1. As Palavras de Interrogação Fundamentais`,
            `Enquanto perguntas de "Sim/Não" pedem apenas confirmação, as WH-Words solicitam informações abertas e fundamentais:`,
            `- **What:** O que / Qual (\`"What is your dream?"\` - Qual é o seu sonho?).`,
            `- **Where:** Onde / Aonde (\`"Where do you live?"\` - Onde você mora?).`,
            `- **Who:** Quem (\`"Who is that developer?"\` - Quem é aquele desenvolvedor?).`,
            `- **When:** Quando (\`"When is the exam?"\` - Quando é a prova?).`,
            `- **Why:** Por que (\`"Why are you studying English?"\` - Por que você estuda inglês?).`,
            `  • Resposta com **Because:** \`"Because I want to work remotely."\`.`,
            `- **How:** Como (\`"How do you do that?"\` - Como você faz isso?).`,
            `### 2. A Estrutura com o Auxiliar Do / Does`,
            `Em perguntas no presente com verbos de ação, usamos: \`[WH-Word] + [do / does] + [sujeito] + [verbo base]\`: \`"Where do you work?"\`.`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: pergunta com **Why** (pergunta separada) responde com **Because** (resposta explicativa)!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'Membros da Família (Family Members) e o Genitivo Saxão (\'s)' },
        conteudo: [
            `## 📺 Guia da Videoaula: Família e o Caso Possessivo (\'s)`,
            `Assista ao vídeo explicativo sobre laços de parentesco e a estrutura do apóstrofo s. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Vocabulário de Família:**`,
            `  • \`Parents\` = Pais (pai e mãe juntos). *Cuidado: parentes em geral se diz "relatives"!*`,
            `  • \`Father\` (Pai), \`Mother\` (Mãe), \`Brother\` (Irmão), \`Sister\` (Irmã).`,
            `  • \`Son\` (Filho), \`Daughter\` (Filha), \`Cousin\` (Primo/Prima).`,
            `- **O Genitivo Saxão (\'s):** Indica que algo pertence a alguém colocando \`[Possuidor] + 's + [Objeto]\`:`,
            `  • \`"John's father"\` = O pai do John.`,
            `  • \`"My sister's car"\` = O carro da minha irmã.`,
            `> Conclua este resumo para liberar a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Question Words (Lugar): Complete a pergunta em inglês para descobrir ONDE uma pessoa reside:',
                    dica: 'A Question Word que questiona localização geográfica é Where (Onde).',
                    template: '{lacuna} do you live?',
                    opcoes: ['Where', 'What', 'Who', 'When'],
                    respostaCorreta: 'Where',
                    explicacao: '"Where" é a Question Word empregada para inquirir sobre lugares e posições (Where do you live? = Onde você mora?).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - As Question Words (WH-Words): Selecione todas as associações palavra-pergunta e sentido CORRETAS:',
                    dica: 'Lembre-se: What (o quê), Where (onde), When (quando), Who (quem), Why (por quê) e How (como)!',
                    opcoes: [
                        { texto: 'What: o que / qual', correta: true },
                        { texto: 'Where: onde / aonde', correta: true },
                        { texto: 'Who: quem (para pessoas)', correta: true },
                        { texto: 'When: quando (tempo/data)', correta: true },
                        { texto: 'Why: por que (motivo/razão)', correta: true },
                        { texto: 'How: como (modo/maneira)', correta: true },
                        { texto: 'Where significa "quem"', correta: false },
                        { texto: 'Who significa "quando"', correta: false }
                    ],
                    explicacao: 'As WH-words estruturam a busca por informações abertas e fundamentais na conversação em língua inglesa.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Genitivo Saxão: Localize a linha que utilizou pontuação inadequada para indicar posse de parentesco:',
                    dica: 'O caso genitivo saxão usa o apóstrofo seguido de s (\'s) após o possuidor!',
                    linhasCodigo: [
                        '1. Let me introduce my family members to you',
                        '2. This is my brother\'s new apartment in New York',
                        '3. And this is my fathers\'s old vintage car from 1980',
                        '4. In English, singular nouns take \'s: "my father\'s car"'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram "fathers\'s" com apóstrofo duplo incorreto. Para o singular "father", a grafia correta é simplesmente "my father\'s car".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Estrutura de Pergunta com Auxiliar: Ordene a sintaxe canônica da pergunta: [WH-Word] + [Auxiliar] + [Sujeito] + [Verbo]:',
                    dica: 'Coloque What no início, o auxiliar do, o sujeito you e finalize com o verbo e complemento.',
                    itens: [
                        'What',
                        'do you usually',
                        'do on Sunday',
                        'afternoons?'
                    ],
                    ordemCorreta: [
                        'What',
                        'do you usually',
                        'do on Sunday',
                        'afternoons?'
                    ],
                    explicacao: 'Perguntas com verbos de ação no Simple Present exigem o auxiliar "do" antecedendo o sujeito da oração.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a pergunta que indaga pelo MOTIVO da escolha (respondida com "Because"):',
                    dica: 'Pergunta com Why, resposta explicativa com Because.',
                    template: '{lacuna} are you studying computer science? - Because I love creating software.',
                    opcoes: ['Why', 'Where', 'When', 'Who'],
                    respostaCorreta: 'Why',
                    explicacao: '"Why" questiona a razão/motivo, formando o par clássico com "Because" nas respostas explicativas.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18 - Encerramento de Inglês) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Localizar estabelecimentos na cidade (Places in Town) e dominar as preposições de lugar essenciais (\`in, on, next to, across from\`).`,
            `### 1. Lugares na Cidade`,
            `- \`Bank\` (Banco), \`Supermarket\` (Supermercado), \`Bakery\` (Padaria), \`Hospital\` (Hospital), \`Library\` (Biblioteca pública), \`Bookstore\` (Livraria comercial).`,
            `### 2. Preposições de Posição`,
            `- **Next to:** Ao lado de (\`"The pharmacy is next to the bank"\`).`,
            `- **Across from / Opposite:** Do outro lado da rua / Em frente (\`"The school is across from the park"\`).`,
            `- **Between... and...:** Entre dois locais (\`"The café is between the bookstore and the library"\`).`,
            `- **On the corner of:** Na esquina de (\`"It's on the corner of Main Street"\`).`,
            `> **Dica de Fixação Galea (TDAH):** Pense no falso amigo clássico: **Library** é onde você lê livros emprestados de graça (biblioteca); onde você compra livros é uma **Bookstore**!`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Describing People: Características Físicas, Personalidade e Diálogo Prático' },
        conteudo: [
            `## 📺 Guia da Videoaula: Como Descrever Pessoas com Fluência`,
            `Assista ao vídeo integrando adjetivos de aparência e comportamento. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Aparência Física (com Verb To Be):**`,
            `  • \`"He is tall / short."\` (Ele é alto / baixo).`,
            `  • \`"She is young / middle-aged."\` (Ela é jovem / meia-idade).`,
            `- **Cabelos e Olhos (com o verbo Have / Has):**`,
            `  • \`"She has long dark hair."\` (Ela tem cabelo longo escuro).`,
            `  • \`"He has brown eyes."\` (Ele tem olhos castanhos).`,
            `- **Traços de Personalidade:** \`friendly\` (amigável), \`smart\` (inteligente), \`polite\` (educado), \`hardworking\` (dedicado/trabalhador).`,
            `> Conclua este resumo para desbloquear o Grande Desafio Final de Inglês!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Vocabulário & Falsos Cognatos: Selecione todas as afirmações corretas sobre o inglês básico:',
                    dica: 'Lembre-se do falso cognato library e da invariabilidade dos adjetivos!',
                    opcoes: [
                        { texto: 'Em inglês, "Library" significa biblioteca pública', correta: true },
                        { texto: 'Com he/she no presente o verbo recebe terminação em -s', correta: true },
                        { texto: '"Next to" expressa proximidade imediata (ao lado de)', correta: true },
                        { texto: 'Adjetivos em inglês não têm forma plural nem gênero', correta: true },
                        { texto: '"Where" é a Question Word usada para perguntar sobre lugares', correta: true },
                        { texto: '"Library" significa livraria comercial onde se compram livros', correta: false },
                        { texto: 'She have brown eyes é gramaticalmente correto', correta: false }
                    ],
                    explicacao: 'Library é biblioteca pública gratuita; livraria é bookstore. Adjetivos não variam em gênero nem número.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Preposições de Lugar: Complete a frase indicando que a padaria fica exatamente AO LADO da livraria:',
                    dica: 'A preposição composta para "ao lado de" é next to.',
                    template: 'The bakery is located {lacuna} to the central bookstore.',
                    opcoes: ['next', 'between', 'opposite', 'under'],
                    respostaCorreta: 'next',
                    explicacao: '"Next to" expressa contiguidade espacial imediata (lado a lado).'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Falso Cognato Library: Localize a linha que cometeu a clássica confusão entre biblioteca e livraria:',
                    dica: 'Library é biblioteca pública; comprar livros é em uma bookstore!',
                    linhasCodigo: [
                        '1. Yesterday morning I walked through downtown looking for books',
                        '2. I entered the public library to read articles for free',
                        '3. Then I went to the library to buy a new bestseller with my credit card',
                        '4. Correction: To buy books, you must go to a bookstore or bookshop!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram "went to the library to buy". Livros são comprados em uma bookstore (livraria); em uma library os livros são emprestados gratuitamente.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Descrevendo uma Pessoa: Ordene a descrição física e de personalidade autêntica em inglês:',
                    dica: 'Inicie com a altura e personalidade, depois os cabelos e os olhos.',
                    itens: [
                        'My best friend is tall, polite and hardworking.',
                        'She has long wavy brown hair,',
                        'expressive green eyes,',
                        'and a truly warm, friendly smile.'
                    ],
                    ordemCorreta: [
                        'My best friend is tall, polite and hardworking.',
                        'She has long wavy brown hair,',
                        'expressive green eyes,',
                        'and a truly warm, friendly smile.'
                    ],
                    explicacao: 'A descrição de pessoas combina o verbo To Be para traços gerais (is tall) e o verbo have/has para traços corporais (has brown hair).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Inglês: Complete a conjugação do verbo "ter" com o pronome he na descrição física:',
                    dica: 'A 3ª pessoa do singular de have é has.',
                    template: 'Lucas {lacuna} short dark hair and wears glasses for reading.',
                    opcoes: ['has', 'have', 'is having', 'haves'],
                    respostaCorreta: 'has',
                    explicacao: 'Parabéns! Com he/she/it, o verbo "have" flexiona-se irregularmente como "has". You have successfully completed the English course!'
                }
            ]
        }
    }
};
