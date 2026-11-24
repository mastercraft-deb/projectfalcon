/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Programação Web
   Fontes: MDN Web Docs (Mozilla), W3C Standards, ECMAScript (TC39).
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.web = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a arquitetura da World Wide Web, o modelo cliente-servidor, protocolos HTTP/HTTPS, DNS e o papel do navegador.`,
            `### 1. A Invenção da Web e o Modelo Cliente-Servidor`,
            `Em 1989, o cientista britânico Tim Berners-Lee inventou a World Wide Web no CERN para permitir o compartilhamento global de documentos acadêmicos via hipertexto. A web opera sob o modelo **Cliente-Servidor**:`,
            `- **Cliente:** O navegador web (Chrome, Firefox, Safari) instalado no seu dispositivo, que solicita recursos.`,
            `- **Servidor:** Computadores potentes em datacenters que armazenam arquivos e respondem às requisições.`,
            `### 2. O Papel do DNS e do Protocolo HTTP/HTTPS`,
            `- **DNS (Domain Name System):** É o catálogo telefônico da internet. Ele traduz nomes amigáveis como \`galea.com.br\` para o endereço IP numérico real da máquina servidora (ex.: \`192.0.2.1\`).`,
            `- **HTTP / HTTPS:** O protocolo de transferência de hipertexto. O **S** no final indica *Secure* (criptografia TLS/SSL), garantindo que senhas e dados transmitidos não possam ser interceptados por criminosos.`,
            `### 3. A Tríade Essencial do Front-end`,
            `1. **HTML (Estrutura):** Os tijolos e o esqueleto semântico da página.`,
            `2. **CSS (Estilo):** A pintura, tipografia, cores e layout visual.`,
            `3. **JavaScript (Comportamento):** O cérebro dinâmico que reage às ações do usuário.`,
            `> **Dica de Fixação Galea (TDAH):** Pense em um edifício: o HTML é a fundação de vigas e paredes, o CSS é o acabamento e a decoração, e o JavaScript é a fiação elétrica e os elevadores automáticos!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'Primeira Página em HTML5, Tags Estruturais e Metadados' },
        conteudo: [
            `## 📺 Guia da Videoaula: A Anatomia de um Documento HTML5`,
            `Assista ao vídeo passo a passo sobre a estrutura básica de um arquivo HTML. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **\`<!DOCTYPE html>\':** Avisa ao navegador para renderizar a página sob o padrão moderno do HTML5 (*standards mode*).`,
            `- **Tag Raiz \`<html lang="pt-br">\':** Envolve todo o documento e indica o idioma aos motores de busca e leitores de tela de acessibilidade.`,
            `- **A Cabeça \`<head>\':** Contém metadados invisíveis para o visitante:`,
            `  • \`<meta charset="UTF-8">\`: Garante que acentos (\`ç\`, \`á\`, \`ã\`) não virem símbolos estranhos.`,
            `  • \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: Essencial para celulares e responsividade.`,
            `  • \`<title>\`: O texto exibido na aba do navegador.`,
            `- **O Corpo \`<body>\':** Tudo o que realmente aparece na tela visível do usuário.`,
            `> Conclua este resumo para liberar a gamificação na Lição 3!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Esqueleto HTML5: Ordene a hierarquia esquelética obrigatória de um documento HTML5 padrão:',
                    dica: 'Comece pelo DOCTYPE, abra a tag html, declare o head com metadados e feche com o body.',
                    itens: [
                        '<!DOCTYPE html>',
                        '<html lang="pt-br">',
                        '<head><meta charset="UTF-8"><title>Meu Site</title></head>',
                        '<body><h1>Olá, Mundo!</h1></body></html>'
                    ],
                    ordemCorreta: [
                        '<!DOCTYPE html>',
                        '<html lang="pt-br">',
                        '<head><meta charset="UTF-8"><title>Meu Site</title></head>',
                        '<body><h1>Olá, Mundo!</h1></body></html>'
                    ],
                    explicacao: 'A estrutura canônica do HTML5 sempre inicia com <!DOCTYPE html>, seguida pela raiz <html>, cabeçalho de metadados <head> e corpo visível <body>.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Hierarquia de Cabeçalho: Complete com a tag do título principal de nível mais alto e importante de uma página web:',
                    dica: 'Essa tag representa o título de maior relevância semântica e SEO (nível 1).',
                    template: '<{lacuna}>Bem-vindo ao Portal de Cursos</{lacuna}>',
                    opcoes: ['h1', 'head', 'header', 'title'],
                    respostaCorreta: 'h1',
                    explicacao: 'A tag <h1> é o cabeçalho hierárquico primário de um documento HTML, devendo resumir o tema central da página.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Fechamento de Tags: Identifique a linha que misturou tags incompatíveis de abertura e fechamento:',
                    dica: 'Toda tag que abre deve ser encerrada pela mesma tag correspondente (ex: <h1>...</h1>)!',
                    linhasCodigo: [
                        '1. <!DOCTYPE html>',
                        '2. <html lang="pt-br">',
                        '3. <body><h1>Título da Notícia</p></body>',
                        '4. </html>'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o título foi aberto com <h1> e fechado erroneamente com </p>. Em HTML válido, deve ser <h1>...</h1>.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 4/5 - Elementos Estruturais: Selecione todas as tags de texto e listagem que REALMENTE existem no padrão HTML:',
                    dica: 'Cuidado com tags falsas como <paragraph> ou <bold> que não existem no padrão!',
                    opcoes: [
                        { texto: '<p> (parágrafo de texto)', correta: true },
                        { texto: '<ul> (lista não ordenada)', correta: true },
                        { texto: '<li> (item de lista)', correta: true },
                        { texto: '<strong> (ênfase forte)', correta: true },
                        { texto: '<em> (ênfase itálica)', correta: true },
                        { texto: '<paragraph>', correta: false },
                        { texto: '<bold>', correta: false },
                        { texto: '<itemlist>', correta: false }
                    ],
                    explicacao: 'Tags oficiais do HTML para texto e listas são <p>, <ul>, <ol>, <li>, <strong> e <em>.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o atributo que define a codificação universal de caracteres para evitar erros de acentuação:',
                    dica: 'O atributo charset especifica a tabela de caracteres UTF-8 no <head>.',
                    template: '<meta {lacuna}="UTF-8">',
                    opcoes: ['charset', 'encoding', 'type', 'format'],
                    respostaCorreta: 'charset',
                    explicacao: '<meta charset="UTF-8"> garante a exibição correta de acentos gráficos, cedilhas e símbolos especiais da língua portuguesa.'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a criação de hiperlinks com a tag \`<a>\`, incorporação de imagens com \`<img>\` e boas práticas de acessibilidade web.`,
            `### 1. Hiperlinks: A Alma da Web`,
            `A web se chama "rede" exatamente pelos links interligados. A tag de âncora \`<a>\` utiliza o atributo fundamental \`href\` (*Hypertext Reference*):`,
            `- **Link Externo:** \`<a href="https://galea.com.br" target="_blank" rel="noopener noreferrer">Acessar</a>\`. O \`target="_blank"\` abre em nova aba, e o \`rel\` previne brechas de segurança.`,
            `- **Caminhos Relativos:** \`<a href="contato.html">\` aponta para uma página na mesma pasta.`,
            `### 2. Imagens e o Atributo Crítico alt`,
            `A tag \`<img src="foto.webp" alt="Descrição da imagem">\` é uma tag vazia (*void element*, não precisa de fechamento):`,
            `- O atributo **\`alt\` (Texto Alternativo)** é de preenchimento obrigatório pelo W3C. Ele é lido por deficientes visuais através de leitores de tela e exibido caso a imagem falhe ao carregar.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na tag \`<a>\` como uma porta de teletransporte e no atributo \`alt\` como a audiodescrição para quem não enxerga a imagem!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Tabelas Semânticas em HTML: thead, tbody, tr, th e td' },
        conteudo: [
            `## 📺 Guia da Videoaula: Estruturando Dados Tabulares`,
            `Assista ao vídeo explicativo sobre tabelas. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **\`<table>\':** O contêiner de dados tabulares.`,
            `- **\`<thead>\':** Cabeçalho da tabela com títulos de colunas.`,
            `- **\`<tbody>\':** O corpo principal com as linhas de dados.`,
            `- **\`<tr>\':** *Table Row* (cada linha horizontal da tabela).`,
            `- **\`<th>\':** *Table Header* (célula de cabeçalho, com texto em negrito e centralizado por padrão).`,
            `- **\`<td>\':** *Table Data* (célula de dado comum).`,
            `- **Boas Práticas:** Tabelas servem exclusivamente para dados tabulares (planilhas, relatórios), NUNCA para montar o layout da página!`,
            `> Conclua este resumo para liberar a gamificação na Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Acessibilidade Web: Complete a tag de imagem com o atributo textual obrigatório pelo W3C:',
                    dica: 'Esse atributo descreve em texto a imagem para leitores de tela e tecnologias assistivas.',
                    template: '<img src="avatar.png" {lacuna}="Foto de perfil do usuário">',
                    opcoes: ['alt', 'title', 'desc', 'caption'],
                    respostaCorreta: 'alt',
                    explicacao: 'O atributo alt (Alternative Text) é obrigatório nas diretrizes WCAG de acessibilidade na web.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Anatomia de Tabelas: Selecione todas as tags oficiais para estruturar tabelas de dados em HTML:',
                    dica: 'Lembre-se de cabeçalho (thead), linhas (tr) e células (th e td).',
                    opcoes: [
                        { texto: '<table>', correta: true },
                        { texto: '<thead>', correta: true },
                        { texto: '<tbody>', correta: true },
                        { texto: '<tr> (Table Row)', correta: true },
                        { texto: '<th> (Table Header)', correta: true },
                        { texto: '<td> (Table Data)', correta: true },
                        { texto: '<tablerow>', correta: false },
                        { texto: '<cell>', correta: false }
                    ],
                    explicacao: 'A estrutura semântica de tabelas utiliza <table>, <thead>, <tbody>, <tr>, <th> e <td>.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Hiperlinks: Localize a linha onde foi usado um atributo inexistente para o endereço do link:',
                    dica: 'A tag de âncora <a> exige o atributo href (Hypertext Reference), nunca "link" ou "url"!',
                    linhasCodigo: [
                        '1. <!-- Link de navegação externa -->',
                        '2. <a link="https://galea.com.br" target="_blank">',
                        '3.     Acessar Plataforma Galea',
                        '4. </a>'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, foi usado "link=" em vez de "href=". O atributo oficial para definir o destino do link é href.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Hierarquia de Tabela: Ordene a estrutura formal de uma tabela com cabeçalho e dados:',
                    dica: 'Abra table, insira thead com tr e th, depois tbody com tr e td, e feche table.',
                    itens: [
                        '<table>',
                        '  <thead><tr><th>Curso</th><th>Alunos</th></tr></thead>',
                        '  <tbody><tr><td>Web Design</td><td>120</td></tr></tbody>',
                        '</table>'
                    ],
                    ordemCorreta: [
                        '<table>',
                        '  <thead><tr><th>Curso</th><th>Alunos</th></tr></thead>',
                        '  <tbody><tr><td>Web Design</td><td>120</td></tr></tbody>',
                        '</table>'
                    ],
                    explicacao: 'Tabelas acessíveis separam cabeçalho <thead> e corpo <tbody> de forma explícita.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o atributo para abrir um hiperlink em uma NOVA aba do navegador com segurança:',
                    dica: 'O valor _blank direciona o carregamento para uma nova janela ou aba.',
                    template: '<a href="https://galea.com.br" {lacuna}="_blank" rel="noopener noreferrer">Galea</a>',
                    opcoes: ['target', 'window', 'open', 'tab'],
                    respostaCorreta: 'target',
                    explicacao: 'O atributo target="_blank" instrui o navegador a abrir a página em uma nova aba.'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender o valor do HTML Semântico para mecanismos de busca (SEO) e tecnologias assistivas de acessibilidade.`,
            `### 1. O Fim da "Div-Sopa"`,
            `Nos primórdios da web, quase tudo era montado com tags genéricas \`<div>\` e \`<span>\`. Isso deixava robôs de busca (como o Google) e leitores de tela cegos quanto ao significado real de cada seção da página. O HTML5 introduziu elementos com significado semântico expresso.`,
            `### 2. As Principais Tags Semânticas`,
            `- **\`<header>\':** Cabeçalho da página ou de uma seção (geralmente contém logotipo e navegação).`,
            `- **\`<nav>\':** Conjunto de links principais de navegação do site.`,
            `- **\`<main>\':** O conteúdo principal exclusivo da página (deve existir apenas um por documento).`,
            `- **\`<article>\':** Conteúdo autônomo e independente que faz sentido por si só (ex.: post de blog, notícia).`,
            `- **\`<section>\':** Agrupamento temático de conteúdo genérico.`,
            `- **\`<aside>\':** Conteúdo tangencial ou barra lateral (menu lateral, publicidade, links relacionados).`,
            `- **\`<footer>\':** Rodapé da página (direitos autorais, links institucionais e contato).`,
            `> **Dica de Fixação Galea (TDAH):** Pense no HTML semântico como as placas de um aeroporto: elas dizem exatamente onde fica o embarque, a saída e os banheiros sem que ninguém fique perdido!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'Introdução ao CSS: Sintaxe, Cascata, Especificidade e Herança' },
        conteudo: [
            `## 📺 Guia da Videoaula: Como o CSS Estiliza a Web`,
            `Assista ao vídeo demonstrando as três formas de aplicar CSS e como a cascata funciona. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **A Regra CSS:** É formada por um **Seletor** e um bloco de declarações contendo pares \`propriedade: valor;\`.`,
            `- **As Três Formas de Inclusão:**`,
            `  1. *Inline:* No atributo da tag (\`style="..."\`) - evite ao máximo.`,
            `  2. *Interno:* Na tag \`<style>\` dentro do \`<head>\`.`,
            `  3. *Externo (Padrão Ouro):* Arquivo \`.css\` separado vinculado via \`<link rel="stylesheet" href="estilo.css">\`.`,
            `- **O Princípio da Cascata:** Regras mais específicas ou declaradas mais abaixo na folha de estilo sobrescrevem declarações anteriores conflitantes.`,
            `> Conclua este resumo para liberar a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - HTML Semântico: Selecione todas as tags que pertencem ao padrão moderno de HTML Semântico:',
                    dica: 'Evite elementos genéricos e sem significado intrínseco como div e span!',
                    opcoes: [
                        { texto: '<header>', correta: true },
                        { texto: '<nav>', correta: true },
                        { texto: '<main>', correta: true },
                        { texto: '<article>', correta: true },
                        { texto: '<footer>', correta: true },
                        { texto: '<section>', correta: true },
                        { texto: '<div>', correta: false },
                        { texto: '<span>', correta: false }
                    ],
                    explicacao: 'Tags como <header>, <nav>, <main>, <article>, <section> e <footer> fornecem significado explícito à estrutura, facilitando acessibilidade e SEO.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Inclusão de Estilos Externos: Complete a tag link para importar uma folha de estilos CSS externa:',
                    dica: 'O atributo rel deve especificar a relação com o arquivo (stylesheet).',
                    template: '<head>\n    <link rel="{lacuna}" href="estilo.css">\n</head>',
                    opcoes: ['stylesheet', 'style', 'css', 'script'],
                    respostaCorreta: 'stylesheet',
                    explicacao: 'A vinculação canônica de arquivos CSS no head utiliza <link rel="stylesheet" href="...">.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug Semântico: Localize a linha que viola as diretrizes do W3C sobre o elemento principal:',
                    dica: 'O padrão W3C estabelece que um documento HTML só pode conter rigorosamente UM elemento <main> visível!',
                    linhasCodigo: [
                        '1. <body>',
                        '2.   <main id="secao-1">Primeiro conteúdo exclusivo</main>',
                        '3.   <main id="secao-2">Segundo conteúdo concorrente</main>',
                        '4. </body>'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, foi declarado um segundo <main>. Uma página web deve conter exclusivamente um único elemento <main>.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Macroestrutura Semântica: Ordene as seções fundamentais de uma página web padrão de cima para baixo:',
                    dica: 'Comece pelo cabeçalho no topo, passe pela barra de navegação, conteúdo principal e finalize no rodapé.',
                    itens: [
                        '<header> (Logotipo e identificação visual do site)',
                        '<nav> (Links principais de navegação do menu)',
                        '<main> (Artigos e conteúdo central exclusivo da página)',
                        '<footer> (Rodapé com direitos autorais e contatos institucionais)'
                    ],
                    ordemCorreta: [
                        '<header> (Logotipo e identificação visual do site)',
                        '<nav> (Links principais de navegação do menu)',
                        '<main> (Artigos e conteúdo central exclusivo da página)',
                        '<footer> (Rodapé com direitos autorais e contatos institucionais)'
                    ],
                    explicacao: 'Essa hierarquia linear permite que leitores de tela naveguem com clareza impecável pela página.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a tag semântica ideal para encapsular uma barra lateral com links relacionados ou anúncios:',
                    dica: 'A tag aside define conteúdo tangencial ou periférico à seção principal.',
                    template: '<{lacuna}>\n    <h3>Notícias Relacionadas</h3>\n</{lacuna}>',
                    opcoes: ['aside', 'sidebar', 'section', 'nav'],
                    respostaCorreta: 'aside',
                    explicacao: 'O elemento semântico <aside> é reservado para barras laterais, callouts e conteúdos tangenciais.'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a tipografia na web com unidades relativas (\`rem\`, \`em\`), famílias tipográficas e boas práticas de legibilidade.`,
            `### 1. Tipografia Digital e Experiência do Usuário`,
            `Mais de 90% das informações na web são consumidas em formato de texto. Escolher boas fontes e espaçamentos adequados reduz a fadiga ocular e aumenta a taxa de retenção.`,
            `### 2. Unidades de Medida: O Fim do Pixel Fixo`,
            `- **Pixels (\`px\'):** Unidade absoluta e rígida. Se o usuário aumentar o tamanho da fonte padrão do sistema por acessibilidade, elementos travados em \`px\` não se adaptam.`,
            `- **\`rem\` (Root EM):** Unidade relativa baseada no tamanho da fonte da raiz do documento (\`<html>\`, padrão 16px). Se \`1rem = 16px\`, então \`1.5rem = 24px\`. Garante acessibilidade impecável.`,
            `### 3. Propriedades Vitais`,
            `- \`font-family\`: Pilha de fontes de fallback (\`'Inter', sans-serif\`).`,
            `- \`line-height\`: Altura de linha (ideal entre \`1.5\` e \`1.6\` para leitura agradável).`,
            `- \`font-weight\`: Peso da fonte (ex.: 400 regular, 700 bold).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na unidade \`rem\` como uma orquestra: quando o maestro (o elemento raiz) ajusta o tom, todos os instrumentos tocam afinados juntos!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'O Modelo de Caixa do CSS (Box Model) e box-sizing: border-box' },
        conteudo: [
            `## 📺 Guia da Videoaula: Desvendando o Box Model`,
            `Assista à demonstração interativa de como os navegadores calculam larguras e alturas. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **As 4 Camadas de Toda Caixa na Web:**`,
            `  1. **Content (Conteúdo):** Onde o texto ou imagem de fato reside.`,
            `  2. **Padding (Preenchimento interno):** Espaço livre entre o conteúdo e a borda.`,
            `  3. **Border (Borda):** A moldura visual da caixa.`,
            `  4. **Margin (Margem externa):** Espaço em branco que afasta este elemento dos vizinhos.`,
            `- **A Solução Definitiva:** Por padrão histórico (\`content-box\`), adicionar padding aumenta a largura final do elemento. Usar o reset profissional \`box-sizing: border-box;\` faz com que o padding e a borda fiquem contidos dentro da largura definida!`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Box Model: Ordene as 4 camadas do Modelo de Caixa do CSS do núcleo para a periferia:',
                    dica: 'Comece pelo conteúdo do texto e termine com o afastamento em relação aos vizinhos.',
                    itens: [
                        'Content (Conteúdo central)',
                        'Padding (Espaçamento interno)',
                        'Border (Borda visual)',
                        'Margin (Margem externa)'
                    ],
                    ordemCorreta: [
                        'Content (Conteúdo central)',
                        'Padding (Espaçamento interno)',
                        'Border (Borda visual)',
                        'Margin (Margem externa)'
                    ],
                    explicacao: 'A anatomia universal do Box Model: Conteúdo → Padding → Border → Margin (de dentro para fora).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Tipografia Responsiva: Complete com a unidade CSS que respeita o tamanho de fonte configurado pelo usuário no sistema operacional:',
                    dica: 'Essa unidade é relativa ao tamanho de fonte do elemento raiz <html>.',
                    template: 'h1 {\n    font-size: 2{lacuna}; /* relativo ao elemento raiz */\n}',
                    opcoes: ['rem', 'px', 'pt', 'em'],
                    respostaCorreta: 'rem',
                    explicacao: 'A unidade rem (Root EM) é relativa ao <html>. Se o usuário aumentar a fonte do sistema, o layout se adapta automaticamente.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Box Model: Localize a linha onde o desenvolvedor confundiu padding com margin:',
                    dica: 'Padding é espaço INTERNO (entre conteúdo e borda); margin é espaço EXTERNO (entre elementos vizinhos)!',
                    linhasCodigo: [
                        '1. /* Objetivo: afastar o cartão de seus vizinhos laterais */',
                        '2. .cartao {',
                        '3.     padding: 32px; /* espaço externo entre cartões */',
                        '4.     border: 1px solid #ccc;',
                        '5. }'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o comentário diz "espaço externo", mas foi usado padding (interno). Para afastar elementos vizinhos, usa-se margin.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 4/5 - Propriedades de Tipografia: Selecione todas as propriedades CSS para controle de texto que REALMENTE existem:',
                    dica: 'Atenção a nomes inventados como text-weight ou font-color que não existem no CSS!',
                    opcoes: [
                        { texto: 'font-size', correta: true },
                        { texto: 'font-weight', correta: true },
                        { texto: 'font-family', correta: true },
                        { texto: 'line-height', correta: true },
                        { texto: 'letter-spacing', correta: true },
                        { texto: 'text-weight (não existe)', correta: false },
                        { texto: 'font-color (não existe)', correta: false },
                        { texto: 'text-size (não existe)', correta: false }
                    ],
                    explicacao: 'Cor de texto em CSS é color (não font-color). Espessura da fonte é font-weight (não text-weight).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a propriedade que torna o Box Model mais intuitivo, incluindo padding e borda na largura total:',
                    dica: 'Essa regra faz com que padding e border fiquem DENTRO da largura declarada, não expandindo o elemento.',
                    template: '*, *::before, *::after {\n    box-sizing: {lacuna};\n}',
                    opcoes: ['border-box', 'content-box', 'padding-box', 'size-box'],
                    respostaCorreta: 'border-box',
                    explicacao: 'O reset box-sizing: border-box é o padrão profissional que torna a largura declarada o tamanho final real do elemento.'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar o layout flexível unidimensional com CSS Flexbox (\`display: flex\`) e seus eixos de alinhamento.`,
            `### 1. A Revolução do Flexbox`,
            `Antes do Flexbox, alinhar elementos horizontalmente ou centralizar algo verticalmente exigia truques complexos com \`float\` ou tabelas. O Flexbox foi desenhado para distribuir espaço e alinhar itens em uma única dimensão (linha ou coluna).`,
            `### 2. Os Dois Eixos Fundamentais`,
            `- **Eixo Principal (Main Axis):** Controlado por \`flex-direction: row\` (padrão horizontal) ou \`column\` (vertical).`,
            `- **Eixo Transversal (Cross Axis):** O eixo perpendicular ao principal.`,
            `### 3. Propriedades de Alinhamento Essenciais`,
            `- \`justify-content\`: Alinha itens ao longo do **Eixo Principal** (\`center\`, \`space-between\`, \`flex-start\`, \`flex-end\`).`,
            `- \`align-items\`: Alinha itens ao longo do **Eixo Transversal** (\`center\`, \`stretch\`, \`flex-start\`).`,
            `- \`gap\`: Espaçamento moderno e limpo entre os filhos sem precisar de margens manuais.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no Flexbox como uma fileira de cadeiras: você decide se as cadeiras vão em linha ou coluna, e com o \`justify-content\` decide se elas ficam no centro ou espalhadas pela sala!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'CSS Grid Layout: Alinhamento Bidimensional Avançado' },
        conteudo: [
            `## 📺 Guia da Videoaula: Dominando Linhas e Colunas com Grid`,
            `Assista ao vídeo comparativo entre Flexbox (1D) e Grid (2D). A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Propósito do Grid:** Desenvolvido para gerenciar **duas dimensões simultâneas** (linhas e colunas) com precisão matemática.`,
            `- **\`display: grid;\':** Ativa o contêiner de grade.`,
            `- **A Unidade Fracionária (\`fr\'):** Representa uma fração do espaço disponível na grade.`,
            `- **Função Poderosa:** \`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\` cria automaticamente uma grade responsiva que quebra em colunas sem precisar de nenhuma media query!`,
            `- **\`gap\':** Espaço uniforme entre linhas e colunas.`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Alinhamento Flexbox: Complete a declaração CSS para centralizar os itens de um contêiner Flexbox perfeitamente no Eixo Principal:',
                    dica: 'Essa propriedade controla a distribuição de espaço no eixo principal.',
                    template: '.container {\n    display: flex;\n    {lacuna}: center;\n}',
                    opcoes: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
                    respostaCorreta: 'justify-content',
                    explicacao: 'A propriedade justify-content alinha e distribui os itens filhos ao longo do Eixo Principal no Flexbox.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Propriedades Flexbox & Grid: Selecione todas as propriedades CSS oficiais de layout moderno:',
                    dica: 'Atenção a nomes inexistentes como flex-align ou grid-columns-count!',
                    opcoes: [
                        { texto: 'display: flex', correta: true },
                        { texto: 'justify-content', correta: true },
                        { texto: 'align-items', correta: true },
                        { texto: 'flex-direction', correta: true },
                        { texto: 'grid-template-columns', correta: true },
                        { texto: 'gap', correta: true },
                        { texto: 'flex-align (não existe)', correta: false },
                        { texto: 'grid-columns-count (não existe)', correta: false }
                    ],
                    explicacao: 'O alinhamento transversal no Flexbox é feito com align-items e colunas no Grid com grid-template-columns.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Sintaxe Flexbox: Localize a linha que utilizou um valor inválido na declaração display:',
                    dica: 'O valor oficial da especificação CSS para ativar caixas flexíveis é "flex", nunca "flexbox"!',
                    linhasCodigo: [
                        '1. .barra-navegacao {',
                        '2.     display: flexbox;',
                        '3.     justify-content: space-between;',
                        '4.     gap: 1rem;',
                        '5. }'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, foi escrito display: flexbox. O valor correto e padronizado pelo W3C é display: flex.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Centralização Perfeita: Ordene a regra CSS canônica para centralizar um elemento horizontal e verticalmente com Flexbox:',
                    dica: 'Ative display: flex, centralize no eixo principal e depois no eixo transversal.',
                    itens: [
                        '.caixa-centralizada {',
                        '    display: flex;',
                        '    justify-content: center;',
                        '    align-items: center; }'
                    ],
                    ordemCorreta: [
                        '.caixa-centralizada {',
                        '    display: flex;',
                        '    justify-content: center;',
                        '    align-items: center; }'
                    ],
                    explicacao: 'A combinação display: flex + justify-content: center + align-items: center é a fórmula padrão para centralização bidimensional no CSS.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a propriedade moderna que define o espaçamento uniforme entre filhos sem margens manuais:',
                    dica: 'Essa propriedade funciona tanto em Flexbox quanto em CSS Grid.',
                    template: '.grade {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    {lacuna}: 24px;\n}',
                    opcoes: ['gap', 'space', 'margin-between', 'gutter'],
                    respostaCorreta: 'gap',
                    explicacao: 'A propriedade gap substitui margens complexas, criando espaçamento uniforme e automático entre os itens da grade ou linha flexível.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender o design responsivo, a filosofia Mobile-First e o uso de Media Queries (\`@media\`).`,
            `### 1. A Variedade de Dispositivos na Web Moderna`,
            `Hoje, mais de 60% do tráfego web global ocorre em smartphones e tablets. Um site construído apenas para telas grandes de monitor fica ilegível e quebrado em telas móveis. O design responsivo permite que a mesma página HTML se adapte com fluidez a qualquer resolução.`,
            `### 2. A Filosofia Mobile-First`,
            `A abordagem recomendada por Google e W3C é projetar primeiro a experiência para celulares (estilo base sem media queries) e, progressivamente, utilizar media queries com \`min-width\` para enriquecer o layout em telas maiores:`,
            `\`\`\`css\n/* Estilo base para celular */\n.grade { display: flex; flex-direction: column; }\n\n/* Telas a partir de tablets (768px ou mais) */\n@media (min-width: 768px) {\n    .grade { flex-direction: row; }\n}\n\`\`\``,
            `### 3. A Meta Tag Viewport Obrigatória`,
            `Sem a tag \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` no cabeçalho do HTML, navegadores mobile simulam uma tela gigante de desktop de 980px, encolhendo os textos até ficarem ilegíveis.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no design responsivo como a água descrita por Bruce Lee: ela se molda ao copo, à garrafa e ao bule sem perder sua essência!`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Transições Suaves, Transformações e Animações com @keyframes' },
        conteudo: [
            `## 📺 Guia da Videoaula: Dando Vida e Movimento com CSS`,
            `Assista ao vídeo demonstrando microinterações e aceleração por hardware. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **\`transition\':** Interpola suavemente a mudança de uma propriedade entre dois estados (ex.: ao passar o mouse com \`:hover\`): \`transition: transform 0.2s ease;\`.`,
            `- **\`transform\':** Modifica o elemento no espaço sem disparar recálculo pesado de layout: \`scale(1.05)\`, \`translateY(-4px)\`, \`rotate(45deg)\`.`,
            `- **\`@keyframes\':** Define uma animação complexa de múltiplos passos definindo porcentagens de tempo (\`0%\`, \`50%\`, \`100%\` ou \`from/to\`).`,
            `- **Acessibilidade:** Respeite a preferência de quem tem vertigem usando \`@media (prefers-reduced-motion: reduce)\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 18!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Design Responsivo: Selecione todas as afirmações corretas sobre Design Responsivo e CSS moderno:',
                    dica: 'Lembre-se do papel da meta tag viewport, da abordagem mobile-first e das media queries!',
                    opcoes: [
                        { texto: 'A meta tag viewport é indispensável para telas mobile', correta: true },
                        { texto: '@media (min-width: 768px) atinge telas de 768px ou maiores', correta: true },
                        { texto: 'A filosofia Mobile-First projeta primeiro para telas menores', correta: true },
                        { texto: 'transform e opacity são propriedades de alta performance aceleradas pela GPU', correta: true },
                        { texto: 'Flexbox e Grid facilitam layouts responsivos sem floats', correta: true },
                        { texto: 'Design responsivo exige criar 5 arquivos HTML diferentes', correta: false },
                        { texto: 'Media queries só podem ser escritas em JavaScript', correta: false }
                    ],
                    explicacao: 'O design responsivo utiliza um único HTML adaptado via CSS com Media Queries e meta viewport para garantir excelente experiência em qualquer dispositivo.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Regra de Media Query: Complete com a diretiva CSS para aplicar estilos condicionais a partir de certa largura de tela:',
                    dica: 'Essa diretiva inicia com @ e especifica a condição de mídia desejada.',
                    template: '@{lacuna} (min-width: 768px) {\n    .menu { flex-direction: row; }\n}',
                    opcoes: ['media', 'screen', 'responsive', 'query'],
                    respostaCorreta: 'media',
                    explicacao: 'A regra @media permite aplicar blocos de estilo CSS específicos para diferentes resoluções e tipos de dispositivo.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Viewport: Localize a linha onde o nome da meta tag de responsividade foi escrito incorretamente:',
                    dica: 'O atributo name da meta tag de tela móvel deve ser rigorosamente "viewport"!',
                    linhasCodigo: [
                        '1. <head>',
                        '2.   <meta charset="UTF-8">',
                        '3.   <meta name="screen" content="width=device-width, initial-scale=1.0">',
                        '4.   <title>Página Mobile</title>',
                        '5. </head>'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, foi escrito name="screen". O nome canônico obrigatório para navegadores móveis é name="viewport".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Animação CSS: Ordene a declaração de uma animação suave com @keyframes e sua aplicação na classe:',
                    dica: 'Defina a regra @keyframes com 0% e 100%, depois aplique a propriedade animation no elemento.',
                    itens: [
                        '@keyframes pulsar {',
                        '    0% { transform: scale(1); }',
                        '    100% { transform: scale(1.1); } }',
                        '.botao-destaque { animation: pulsar 1s infinite alternate; }'
                    ],
                    ordemCorreta: [
                        '@keyframes pulsar {',
                        '    0% { transform: scale(1); }',
                        '    100% { transform: scale(1.1); } }',
                        '.botao-destaque { animation: pulsar 1s infinite alternate; }'
                    ],
                    explicacao: 'Primeiro registram-se os quadros-chave (@keyframes) e em seguida aplica-se a propriedade animation vinculando o nome.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a propriedade para transição suave de estado ao passar o cursor (:hover):',
                    dica: 'Essa propriedade interpola propriedades animáveis ao longo do tempo.',
                    template: '.cartao {\n    {lacuna}: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.cartao:hover {\n    transform: translateY(-4px);\n}',
                    opcoes: ['transition', 'animation', 'transform', 'duration'],
                    respostaCorreta: 'transition',
                    explicacao: 'A propriedade transition suaviza a transição entre o estado normal e o pseudo-estado :hover com alta performance visual.'
                }
            ]
        }
    },

    // --- BLOCO 7 (Aulas 19 a 21) ---
    19: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a evolução do JavaScript (ECMAScript), a máquina V8 e a interação com a página web via console.`,
            `### 1. A Linguagem da Web`,
            `Criado em 1995 por Brendan Eich em apenas 10 dias na Netscape, o JavaScript nasceu para trazer interatividade a páginas estáticas. Hoje, padronizado pela ECMA International (ECMAScript), o JavaScript é uma das linguagens mais populares e versáteis do planeta, rodando em navegadores e servidores (Node.js).`,
            `### 2. Onde o JavaScript Executa`,
            `Diferente do Python que roda no terminal por padrão, o JavaScript roda nativamente dentro da *engine* do navegador (como a V8 do Chrome ou SpiderMonkey do Firefox).`,
            `### 3. A Ferramenta de Depuração: DevTools`,
            `Pressionar F12 no navegador abre as Ferramentas do Desenvolvedor:`,
            `- A aba **Console** permite executar comandos em tempo real.`,
            `- A instrução \`console.log("Olá, mundo!")\` imprime dados no painel para inspecionar o fluxo de execução.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`console.log()\` como o diário de bordo do capitão: ele anota tudo o que está acontecendo por trás das cortinas sem que os passageiros vejam!`
        ].join('\n\n')
    },

    20: {
        tipo: 'video-resumo',
        video: { titulo: 'Variáveis em JavaScript: var vs let vs const e Tipagem Dinâmica' },
        conteudo: [
            `## 📺 Guia da Videoaula: Declaração Moderna de Variáveis`,
            `Assista ao vídeo comparando as palavras-chave de declaração. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **\`const\':** O padrão recomendado. Cria identificadores que não podem ser reatribuídos (\`const pi = 3.1415;\`). Garante previsibilidade e evita bugs acidentais.`,
            `- **\`let\':** Usado quando a variável precisa ter seu valor alterado no decorrer do programa (ex.: contadores de laços \`for\`). Possui escopo de bloco.`,
            `- **\`var\':** Declaração antiga e problemática que sofre de içamento (*hoisting*) descontrolado. Deve ser evitada no JavaScript moderno!`,
            `- **Tipos Primitivos:** \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`. O operador \`typeof dado\` revela o tipo em tempo real.`,
            `> Conclua este resumo para liberar a gamificação na Lição 21!`
        ].join('\n\n')
    },

    21: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Constantes no ES6+: Complete a declaração moderna para variáveis cujo identificador NUNCA deve ser reatribuído:',
                    dica: 'Essa instrução previne reatribuições acidentais de valores e possui escopo de bloco.',
                    template: '{lacuna} API_URL = "https://api.galea.com.br/v1";',
                    opcoes: ['const', 'let', 'var', 'val'],
                    respostaCorreta: 'const',
                    explicacao: 'A palavra-chave const declara identificadores imutáveis por reatribuição no JavaScript moderno (ES6+).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Tipos Primitivos do JavaScript: Selecione todos os tipos que são PRIMITIVOS na especificação ECMAScript:',
                    dica: 'Atenção: estruturas como Array ou Function são objetos na verdade!',
                    opcoes: [
                        { texto: 'string', correta: true },
                        { texto: 'number', correta: true },
                        { texto: 'boolean', correta: true },
                        { texto: 'null', correta: true },
                        { texto: 'undefined', correta: true },
                        { texto: 'symbol', correta: true },
                        { texto: 'bigint', correta: true },
                        { texto: 'float (em JS é number)', correta: false },
                        { texto: 'char (não existe em JS)', correta: false }
                    ],
                    explicacao: 'JavaScript possui 7 tipos primitivos: string, number, boolean, null, undefined, symbol e bigint.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Reatribuição: Localize a linha que causará um erro fatal do tipo TypeError ao ser executada:',
                    dica: 'Variáveis declaradas com const não podem receber novo valor através do operador de atribuição (=)!',
                    linhasCodigo: [
                        '1. const versaoSoftware = "1.0.0";',
                        '2. console.log("Versão inicial:", versaoSoftware);',
                        '3. versaoSoftware = "1.1.0";',
                        '4. console.log("Versão atualizada:", versaoSoftware);'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, tentar reatribuir "versaoSoftware" declarada com const lança TypeError: Assignment to constant variable.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Ciclo de Variável Dinâmica: Ordene o fluxo correto de declaração de variável mutável com let, alteração e log:',
                    dica: 'Declare com let para permitir alteração, incremente o valor e exiba a saída com console.log.',
                    itens: [
                        'let totalPontos = 0;',
                        'totalPontos += 50;',
                        'const mensagem = "Pontuação final:";',
                        'console.log(mensagem, totalPontos);'
                    ],
                    ordemCorreta: [
                        'let totalPontos = 0;',
                        'totalPontos += 50;',
                        'const mensagem = "Pontuação final:";',
                        'console.log(mensagem, totalPontos);'
                    ],
                    explicacao: 'O let permite mutação de valor de forma segura e com escopo de bloco léxico delimitado.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete com o operador nativo que inspeciona e retorna em texto o tipo de dado de uma variável:',
                    dica: 'Esse operador unário precede a variável a ser verificada (ex: ... 42 retorna "number").',
                    template: 'const preco = 99.9;\nconsole.log({lacuna} preco); // imprime "number"',
                    opcoes: ['typeof', 'instanceof', 'type', 'isType'],
                    respostaCorreta: 'typeof',
                    explicacao: 'O operador typeof avalia o tipo primitivo da expressão em tempo de execução no JavaScript.'
                }
            ]
        }
    },

    // --- BLOCO 8 (Aulas 22 a 24) ---
    22: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a igualdade estrita (\`===\`), blocos condicionais \`if/else\` e laços de repetição em JavaScript.`,
            `### 1. O Perigo da Coerção Implícita: Use Sempre ===`,
            `Em JavaScript, existem dois operadores de igualdade:`,
            `- **Igualdade Frouxa (\`==\`):** Tenta converter os tipos nos bastidores antes de comparar. Isso causa bizarrices como \`"0" == 0\` resultando em \`true\`!`,
            `- **Igualdade Estrita (\`===\`):** Compara tanto o **valor** quanto o **tipo de dado** sem conversões mágicas. \`"0" === 0\` resulta em \`false\`. O padrão profissional é usar sempre \`===\` e \`!==\`.`,
            `### 2. Estrutura Condicional`,
            `\`\`\`javascript\nconst idade = 20;\nif (idade >= 18) {\n    console.log("Maior de idade");\n} else {\n    console.log("Menor de idade");\n}\n\`\`\``,
            `### 3. Laço for Tradicional`,
            `\`for (let i = 0; i < 5; i++) { ... }\`: Inicializa o índice, avalia o limite e incrementa a cada passo.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`===\` como um segurança rigoroso que pede identidade e passaporte juntos; já o \`==\` aceita qualquer um que se pareça superficialmente!`
        ].join('\n\n')
    },

    23: {
        tipo: 'video-resumo',
        video: { titulo: 'Funções em JavaScript: Declarações, Arrow Functions e Retorno' },
        conteudo: [
            `## 📺 Guia da Videoaula: Funções Tradicionais vs Arrow Functions`,
            `Assista ao vídeo explicativo sobre sintaxe concisa de funções modernas. A seguir, consulte a síntese:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Função Tradicional:** \`function somar(a, b) { return a + b; }\`.`,
            `- **Arrow Function (ES6):** Sintaxe moderna e concisa: \`const somar = (a, b) => a + b;\`. Quando o corpo tem apenas uma expressão, as chaves e o \`return\` ficam implícitos!`,
            `- **Parâmetros Padrão:** \`const saudar = (nome = "Visitante") => \`Olá, \${nome}!\`;\`.`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 24!`
        ].join('\n\n')
    },

    24: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 1/5 - Caça-Bug de Coerção: Localize a linha que utiliza o operador de igualdade frouxa desaconselhado no JavaScript moderno:',
                    dica: 'A recomendação de segurança e boas práticas é sempre utilizar o operador de igualdade estrita com três iguais (===).',
                    linhasCodigo: [
                        '1. const entrada = "10";',
                        '2. const esperado = 10;',
                        '3. if (entrada == esperado) {',
                        '4.     console.log("Valores coincidem");',
                        '5. }'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, foi usado o operador de igualdade frouxa "==". O correto em código robusto é usar o operador de igualdade estrita "===".'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Sintaxes de Arrow Function: Selecione todas as arrow functions perfeitamente VÁLIDAS no ES6:',
                    dica: 'Com um único parâmetro os parênteses são opcionais; com retorno direto em uma expressão, chaves e return são dispensados.',
                    opcoes: [
                        { texto: 'x => x * 2', correta: true },
                        { texto: '(a, b) => a + b', correta: true },
                        { texto: '() => console.log("Olá")', correta: true },
                        { texto: '(nome) => ({ nome: nome })', correta: true },
                        { texto: 'x -> x * 2 (sintaxe inválida)', correta: false },
                        { texto: 'function => x * 2', correta: false }
                    ],
                    explicacao: 'Arrow functions usam a seta "=>". Se retornarem um objeto literal diretamente, este deve ser envolvido em parênteses ({...}).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 3/5 - Sintaxe de Arrow Function: Complete com o símbolo característico que define uma função de seta no JavaScript moderno:',
                    dica: 'É formado pelo sinal de igual seguido do sinal de maior.',
                    template: 'const calcularDobro = (numero) {lacuna} numero * 2;',
                    opcoes: ['=>', '->', '~>', '==>'],
                    respostaCorreta: '=>',
                    explicacao: 'A seta fat arrow (=>) é a assinatura canônica das arrow functions do ECMAScript 2015+.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Condicional Encadeada: Ordene a estrutura formal de um bloco if / else if / else para classificação por faixa de notas:',
                    dica: 'Comece testando a nota máxima (if), depois a intermediária (else if) e finalize com o caso padrão (else).',
                    itens: [
                        'if (nota >= 9) {',
                        '    console.log("Desempenho Excelente");',
                        '} else if (nota >= 6) {',
                        '    console.log("Aprovado"); } else { console.log("Necessita Recuperação"); }'
                    ],
                    ordemCorreta: [
                        'if (nota >= 9) {',
                        '    console.log("Desempenho Excelente");',
                        '} else if (nota >= 6) {',
                        '    console.log("Aprovado"); } else { console.log("Necessita Recuperação"); }'
                    ],
                    explicacao: 'A avaliação lógica em cascata segue de cima para baixo até o primeiro bloco cuja expressão seja verdadeira.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete com o operador de DESIGUALDADE ESTRITA que valida se o valor ou o tipo são diferentes sem coerção:',
                    dica: 'Esse operador utiliza uma exclamação seguida de dois sinais de igual.',
                    template: 'if (perfilAcesso {lacuna} "administrador") {\n    bloquearPainel();\n}',
                    opcoes: ['!==', '!=', '<>', 'not=='],
                    respostaCorreta: '!==',
                    explicacao: 'O operador !== (Strict Inequality) garante que tanto tipo quanto valor sejam avaliados sem conversões automáticas indesejadas.'
                }
            ]
        }
    },

    // --- BLOCO 9 (Aulas 25 a 27) ---
    25: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a manipulação do DOM (*Document Object Model*) e como escutar eventos de cliques e teclas com \`addEventListener\`.`,
            `### 1. O que é o DOM`,
            `O DOM é a representação em árvore de nós que o navegador monta na memória a partir do arquivo HTML. O JavaScript utiliza o objeto global \`document\` como uma ponte para alterar textos, classes de estilo e elementos em tempo real.`,
            `### 2. Selecionando Elementos`,
            `- \`document.querySelector("#meu-botao")\`: Busca pelo seletor CSS do ID.`,
            `- \`document.querySelectorAll(".item")\`: Retorna todos os elementos que possuem a classe.`,
            `### 3. Escutando Eventos com addEventListener`,
            `\`\`\`javascript\nconst botao = document.querySelector("#botao-acao");\nbotao.addEventListener("click", (evento) => {\n    console.log("O botão foi clicado!");\n});\n\`\`\``,
            `- O método \`addEventListener\` escuta eventos do mouse (\`click\`), teclado (\`keydown\`), formulários (\`submit\`) e alterações de campo (\`input\`).`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`addEventListener\` como uma campainha: o evento é o dedo do visitante apertando a campainha, e o callback é o som que toca dentro de casa avisando que alguém chegou!`
        ].join('\n\n')
    },

    26: {
        tipo: 'video-resumo',
        video: { titulo: 'Arrays e Métodos Funcionais Modernos: map, filter e forEach' },
        conteudo: [
            `## 📺 Guia da Videoaula: Transformação e Filtragem de Dados`,
            `Assista ao vídeo prático aplicando métodos modernos de array. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **\`map()\':** Percorre o array e retorna um novo array com todos os elementos transformados (ex.: dobrar valores).`,
            `- **\`filter()\':** Avalia cada elemento sob uma condição lógica e retorna apenas os itens que passaram no teste.`,
            `- **\`forEach()\':** Executa uma função para cada elemento sem retornar um novo array (ideal para efeitos colaterais como imprimir na tela).`,
            `- **Imutabilidade:** Tanto \`map()\` quanto \`filter()\` não alteram o array original, retornando uma cópia fresca.`,
            `> Conclua este resumo para encarar o desafio da Lição 27!`
        ].join('\n\n')
    },

    27: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Filtragem de Dados: Complete o código com o método de array funcional ideal para filtrar números maiores que 10:',
                    dica: 'Esse método cria um novo array contendo apenas os elementos que retornam true no predicado lógico.',
                    template: 'const numeros = [5, 12, 8, 130, 44];\nconst maiores = numeros.{lacuna}(n => n > 10);',
                    opcoes: ['filter', 'map', 'forEach', 'find'],
                    respostaCorreta: 'filter',
                    explicacao: 'O método .filter() filtra os elementos de uma coleção com base em um predicado lógico, retornando um novo array imutável.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Métodos Imutáveis de Array: Selecione os métodos funcionais que geram novos valores SEM alterar o array original:',
                    dica: 'Métodos como push, pop ou splice modificam o array no lugar (mutação).',
                    opcoes: [
                        { texto: 'map()', correta: true },
                        { texto: 'filter()', correta: true },
                        { texto: 'reduce()', correta: true },
                        { texto: 'slice()', correta: true },
                        { texto: 'push() (altera o original)', correta: false },
                        { texto: 'splice() (altera o original)', correta: false },
                        { texto: 'pop() (altera o original)', correta: false }
                    ],
                    explicacao: 'A programação funcional privilegia métodos imutáveis (map, filter, reduce, slice) que preservam a integridade dos dados originais.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Event Listener: Localize a linha onde a função de callback foi invocada acidentalmente de imediato:',
                    dica: 'Ao registrar um ouvinte de eventos, passamos a referência da função (sem parênteses), e não o resultado da sua execução!',
                    linhasCodigo: [
                        '1. const botao = document.querySelector("#btn-confirmar");',
                        '2. function salvarDados() { console.log("Dados salvos!"); }',
                        '3. botao.addEventListener("click", salvarDados());',
                        '4. // A função executou na hora da carga, e não no clique!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram salvarDados() com parênteses. Deve-se passar apenas salvarDados (a referência da função).'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Fluxo de Eventos no DOM: Ordene a sequência correta de seleção de nó e registro de evento no navegador:',
                    dica: 'Capture o elemento via querySelector, anexe o addEventListener com o tipo de evento e defina o callback.',
                    itens: [
                        'const botao = document.querySelector("#btn-salvar");',
                        'botao.addEventListener("click", (evento) => {',
                        '    evento.preventDefault();',
                        '    console.log("Ação executada com sucesso!"); });'
                    ],
                    ordemCorreta: [
                        'const botao = document.querySelector("#btn-salvar");',
                        'botao.addEventListener("click", (evento) => {',
                        '    evento.preventDefault();',
                        '    console.log("Ação executada com sucesso!"); });'
                    ],
                    explicacao: 'O fluxo padrão do DOM envolve consulta do seletor, ligação do listener e tratamento do evento no callback.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Web: Complete o método que projeta e mapeia cada elemento gerando um novo array do mesmo tamanho:',
                    dica: 'Esse método transforma todos os itens aplicando a função a cada um.',
                    template: 'const precos = [10, 20, 30];\nconst comTaxa = precos.{lacuna}(p => p * 1.1);',
                    opcoes: ['map', 'filter', 'forEach', 'every'],
                    respostaCorreta: 'map',
                    explicacao: 'Parabéns! O método .map() transforma coleções 1-para-1. Você dominou a trilha completa de Programação Web!'
                }
            ]
        }
    },

    // --- BLOCO 10 (Aula 28 - Projeto Final de Web) ---
    28: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Integrar HTML5 Semântico, CSS3 Flexbox/Grid responsivo e JavaScript moderno em um portfólio profissional de destaque.`,
            `### 1. A Síntese de Todo o Conhecimento`,
            `Parabéns por chegar à aula de conclusão da trilha de Programação Web! Você aprendeu as três engrenagens que movem a internet: estrutura (HTML), design (CSS) e inteligência interativa (JavaScript).`,
            `### 2. Checklist de Qualidade do Projeto Final`,
            `- **Acessibilidade:** Todas as imagens possuem \`alt\` descritivo e as cores atendem ao contraste mínimo WCAG AA.`,
            `- **Semântica:** Uso de \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\` e \`<footer>\` em vez de divs aninhadas.`,
            `- **Responsividade:** Layout testado em celulares (360px), tablets (768px) e monitores amplos (1200px+).`,
            `- **Código Limpo:** Nomenclatura descritiva, separação de arquivos e ausência de erros no console DevTools.`,
            `> **Dica de Fixação Galea (TDAH):** O melhor programador não é quem decora cada comando de cabeça, mas quem sabe consultar a documentação oficial (MDN) e tem paciência para testar passo a passo!`
        ].join('\n\n')
    }
};
