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
                    enunciado: 'Selecione todas as afirmações corretas sobre saudações e soletrar em língua inglesa:',
                    dica: 'Lembre-se da diferença entre Good evening (ao chegar) e Good night (ao se despedir)!',
                    opcoes: [
                        { texto: 'Good evening é a saudação correta ao chegar a um local à noite', correta: true },
                        { texto: 'Good night é usado exclusivamente para despedidas ou ao ir dormir', correta: true },
                        { texto: 'A pergunta "How do you spell your name?" pede para soletrar o nome', correta: true },
                        { texto: 'Nice to meet you significa "Prazer em conhecer você"', correta: true },
                        { texto: 'A letra "A" em inglês pronuncia-se com som similar a /ei/', correta: true },
                        { texto: 'Good night deve ser dito para cumprimentar o recepcionista ao entrar', correta: false },
                        { texto: 'A letra "E" em inglês pronuncia-se exatamente como a letra "A"', correta: false },
                        { texto: 'What\'s up é uma saudação extremamente formal para embaixadores', correta: false }
                    ],
                    explicacao: 'Good evening saúda na chegada noturna, enquanto Good night despede na saída. A pronúncia de A é /ei/ e soletrar usa o verbo to spell.'
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
                    enunciado: 'Complete a pergunta em inglês aplicando a regra da inversão do Verbo To Be com o sujeito "you":',
                    dica: 'Com o pronome you, a forma correta do verbo To Be é are (Are you...?).',
                    template: '{lacuna} you ready for the English challenge?',
                    opcoes: ['Are', 'Is', 'Am', 'Do', 'Have'],
                    respostaCorreta: 'Are',
                    explicacao: 'Na forma interrogativa do verbo To Be, a conjugação do sujeito "you" (are) inverte-se para o início da sentença: "Are you ready...?"'
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
                    enunciado: 'Ordene as palavras para formar a frase correta em inglês respeitando a posição pré-nominal dos adjetivos:',
                    dica: 'Em inglês o adjetivo (blue) deve vir antes do substantivo (car).',
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
                    enunciado: 'Complete a frase no Simple Present aplicando a regra correta do verbo para a terceira pessoa (she):',
                    dica: 'Com he, she ou it no Simple Present afirmativo, o verbo recebe a terminação -s.',
                    template: 'She {lacuna} English at the university every morning.',
                    opcoes: ['studies', 'study', 'studying', 'is study', 'studied'],
                    respostaCorreta: 'studies',
                    explicacao: 'Para sujeitos da 3ª pessoa do singular (she) no presente afirmativo, o verbo "study" substitui o "y" por "ies", resultando em "studies".'
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
                    enunciado: 'Complete a pergunta em inglês para descobrir ONDE uma pessoa reside:',
                    dica: 'A Question Word que questiona localização física é Where (Onde).',
                    template: '{lacuna} do you live?',
                    opcoes: ['Where', 'What', 'Who', 'When', 'Why'],
                    respostaCorreta: 'Where',
                    explicacao: '"Where" é a Question Word interrogativa empregada para perguntar sobre lugares e localizações (Where do you live? = Onde você mora?).'
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
                    enunciado: 'Selecione todas as afirmações corretas sobre vocabulário, adjetivos e gramática do inglês básico:',
                    dica: 'Lembre-se do falso cognato library e da ordem dos adjetivos!',
                    opcoes: [
                        { texto: 'Em inglês, "Library" significa biblioteca pública', correta: true },
                        { texto: 'Com he/she no presente o verbo recebe terminação em -s', correta: true },
                        { texto: '"Next to" expressa proximidade imediata (ao lado de)', correta: true },
                        { texto: 'Adjetivos em inglês não têm forma plural nem gênero', correta: true },
                        { texto: '"Where" é a Question Word usada para perguntar sobre lugares', correta: true },
                        { texto: '"Library" significa livraria onde se compram livros', correta: false },
                        { texto: 'She have brown eyes é gramaticalmente correto', correta: false },
                        { texto: 'Good night é a saudação formal para cumprimentar na entrada', correta: false }
                    ],
                    explicacao: 'Library é biblioteca (falso cognato). O adjetivo é invariável. Com he/she usa-se "has" e verbos com terminação em -s no presente simples.'
                }
            ]
        }
    }
};
