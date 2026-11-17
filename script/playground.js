/* =====================================================
   Galea Code (Engine do Playground: Python & Web)
   - Sistema de arquivos e pastas com suporte a HTML, CSS, JS e PY
   - Seções recolhíveis (Explorador vs Exemplos) com alternância pelos ícones laterais
   - Símbolos oficiais vetoriais nítidos e pixel-aligned
   - Abas dinâmicas estilo VS Code
   ===================================================== */

(() => {
    'use strict';

    // =====================================================
    // SÍMBOLOS OFICIAIS VETORIAIS (Nítidos e Pixel-Aligned)
    // =====================================================
    const ICONES = {
        html: `<svg class="icone-oficial" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.1 2L5.6 19.3L12 21.1L18.4 19.3L19.9 2H4.1Z" fill="#E44D26"/><path d="M12 3.5V19.6L17.1 18.2L18.3 3.5H12Z" fill="#F16529"/><path d="M7 6H17L16.6 9.5H10.5L10.8 12.5H16.3L15.8 16.3L12 17.4L8.2 16.3L8 14H10.2L10.3 14.9L12 15.4L13.7 14.9L13.9 13.5H7.7L7 6Z" fill="#FFFFFF"/></svg>`,
        css: `<svg class="icone-oficial" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.1 2L5.6 19.3L12 21.1L18.4 19.3L19.9 2H4.1Z" fill="#2062AF"/><path d="M12 3.5V19.6L17.1 18.2L18.3 3.5H12Z" fill="#3C9CD7"/><path d="M17 6H7L7.3 9.5H14L13.7 12.5H7.6L7.9 14.5H13.5L13.2 16.3L12 16.7L10.8 16.3L10.7 15.5H8.5L8.7 17.4L12 18.3L15.3 17.4L15.8 11.5H9.3L9.1 8H16.8L17 6Z" fill="#FFFFFF"/></svg>`,
        js: `<svg class="icone-oficial" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path d="M8 18C6.6 18 5.5 17 5.5 15.6H7.3C7.3 16.2 7.6 16.5 8.1 16.5C8.6 16.5 8.9 16.2 8.9 15.5V9.5H10.7V15.5C10.7 17.1 9.6 18 8 18ZM14.8 18C12.9 18 11.7 16.9 11.7 15.2H13.5C13.5 16 14 16.5 14.8 16.5C15.5 16.5 16 16.1 16 15.5C16 14.9 15.6 14.6 14.6 14.2L14 13.9C12.5 13.3 11.9 12.5 11.9 11.2C11.9 9.6 13.1 8.5 14.7 8.5C16.2 8.5 17.4 9.3 17.5 11H15.7C15.6 10.3 15.2 10 14.6 10C14 10 13.6 10.4 13.6 10.9C13.6 11.4 14 11.7 14.9 12.1L15.5 12.4C17.1 13 17.8 13.8 17.8 15.2C17.8 16.9 16.5 18 14.8 18Z" fill="#000000"/></svg>`,
        py: `<svg class="icone-oficial" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2L7.1 6.5H12V7.2H5C5 7.2 2 6.8 2 12C2 17.2 4.6 16.9 4.6 16.9H6.5V14.3C6.5 14.3 6.4 11.1 9.6 11.1H14.6V8.6C14.6 8.6 14.9 2 11.9 2ZM9.1 3.6C9.8 3.6 10.3 4.1 10.3 4.8C10.3 5.4 9.8 6 9.1 6C8.5 6 7.9 5.4 7.9 4.8C7.9 4.1 8.5 3.6 9.1 3.6Z" fill="#387EB8"/><path d="M12.1 22C17.2 22 16.9 19.8 16.9 19.8L16.9 17.5H12V16.8H19C19 16.8 22 17.2 22 12C22 6.8 19.4 7.1 19.4 7.1H17.5V9.7C17.5 9.7 17.6 12.9 14.4 12.9H9.4V15.4C9.4 15.4 9.1 22 12.1 22ZM14.9 20.4C14.2 20.4 13.7 19.9 13.7 19.2C13.7 18.6 14.2 18 14.9 18C15.5 18 16.1 18.6 16.1 19.2C16.1 19.9 15.5 20.4 14.9 20.4Z" fill="#FFE052"/></svg>`,
        arquivo: `<span class="material-symbols-outlined" style="font-size: 16px; color: #94a3b8;">description</span>`
    };

    function obterIcone(nomeArquivo) {
        if (nomeArquivo.endsWith('.html')) return ICONES.html;
        if (nomeArquivo.endsWith('.css')) return ICONES.css;
        if (nomeArquivo.endsWith('.js')) return ICONES.js;
        if (nomeArquivo.endsWith('.py')) return ICONES.py;
        return ICONES.arquivo;
    }

    // =====================================================
    // SNIPPETS (EXEMPLOS DAS AULAS)
    // =====================================================
    const SNIPPETS_PYTHON = {
        ola: {
            nome: '1. Olá Mundo & F-Strings',
            codigo: `# Aula 1: Olá Mundo e F-Strings\nnome = "Dev Galea"\nxp = 100\n\nprint("Olá, Mundo!")\nprint(f"Bem-vindo {nome}! Você ganhou {xp} XP.")\n`
        },
        operacoes: {
            nome: '3. Números e Operações',
            codigo: `# Aula 3: Números e Operações\na = 10\nb = 3\n\nprint(f"Soma: {a + b}")\nprint(f"Divisão inteira: {a // b}")\nprint(f"Resto (módulo): {a % b}")\nprint(f"Potência: {a ** b}")\n`
        },
        strings: {
            nome: '4. Strings & Fatiamento',
            codigo: `# Aula 4: Strings e Fatiamento\nlinguagem = "PYTHON"\n\nprint(f"Primeira letra: {linguagem[0]}")\nprint(f"Última letra: {linguagem[-1]}")\nprint(f"Fatiamento [0:2]: {linguagem[0:2]}")\nprint(f"Tamanho: {len(linguagem)}")\n`
        },
        logica: {
            nome: '7. Operadores Lógicos',
            codigo: `# Aula 7: Operadores Lógicos\nnivel = 5\ntem_chave = True\n\nif nivel >= 5 and tem_chave:\n    print("✓ Acesso ao castelo liberado!")\nelse:\n    print("✗ Acesso negado!")\n`
        },
        listas: {
            nome: '10. Listas & Append',
            codigo: `# Aula 10: Listas e Métodos\nfrutas = ["maçã", "banana", "uva"]\nfrutas.append("laranja")\n\nprint("Lista de frutas:", frutas)\nprint("Total de itens:", len(frutas))\n\nfor f in frutas:\n    print(f"• Fruta: {f}")\n`
        },
        dicts: {
            nome: '12. Dicionários',
            codigo: `# Aula 12: Dicionários (Chave -> Valor)\naluno = {\n    "nome": "Guilherme",\n    "curso": "Python 2026",\n    "xp": 350\n}\n\nprint(f"Aluno: {aluno['nome']}")\nprint(f"XP Atual: {aluno['xp']}")\n`
        },
        funcoes: {
            nome: '15. Funções & Return',
            codigo: `# Aula 15: Parâmetros e Return\ndef calcular_bonus(vendas, taxa=0.1):\n    return vendas * taxa\n\npremio = calcular_bonus(5000)\nprint(f"Bônus calculado: R$ {premio:.2f}")\n`
        },
        comprehension: {
            nome: '20. List Comprehension',
            codigo: `# Aula 20: List Comprehension\nnumeros = [1, 2, 3, 4, 5, 6]\n\n# Dobro apenas dos pares em 1 linha!\ndobro_pares = [n * 2 for n in numeros if n % 2 == 0]\nprint("Resultado:", dobro_pares)\n`
        },
        adivinhacao: {
            nome: '29. Jogo de Adivinhação',
            codigo: `# Aula 29: Jogo de Adivinhação\nsecreto = 7\nchutes = [3, 9, 7]\n\nprint("=== TESTE DO JOGO DE ADIVINHAÇÃO ===")\nfor chute in chutes:\n    print(f"Tentando palpite: {chute}")\n    if chute == secreto:\n        print("🎉 PARABÉNS! Você acertou o número secreto!")\n        break\n    elif chute < secreto:\n        print("  -> Dica: O número secreto é MAIOR...")\n    else:\n        print("  -> Dica: O número secreto é MENOR...")\n`
        }
    };

    const SNIPPETS_WEB = {
        html_basico: {
            nome: '1. Primeira Página HTML',
            codigo: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; text-align: center; }
    h1 { color: #38bdf8; }
    .card { background: #1e293b; padding: 20px; border-radius: 12px; margin: 20px auto; max-width: 400px; border: 1px solid #334155; }
    button { background: #38bdf8; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; color: #0b0217; }
    button:hover { background: #0ea5e9; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Olá da Web! 🌐</h1>
    <p>Minha primeira página interativa no Galea Code.</p>
    <button onclick="clicar()">Clique aqui!</button>
    <p id="msg" style="color: #4ade80; font-weight: bold; margin-top: 15px;"></p>
  </div>

  <script>
    let cliques = 0;
    function clicar() {
      cliques++;
      document.getElementById('msg').innerText = 'Você clicou ' + cliques + ' vez(es)! 🎉';
    }
  </script>
</body>
</html>`
        },
        botoes_css: {
            nome: '2. Flexbox & Efeitos CSS',
            codigo: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #111; color: #fff; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 90vh; }
    .galeria { display: flex; gap: 15px; }
    .caixa { width: 90px; height: 90px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: transform 0.2s, filter 0.2s; cursor: pointer; }
    .caixa:hover { transform: scale(1.1) translateY(-5px); filter: brightness(1.2); }
    .c1 { background: #ef476f; }
    .c2 { background: #ffd166; color: #000; }
    .c3 { background: #06d6a0; color: #000; }
    .c4 { background: #118ab2; }
  </style>
</head>
<body>
  <h2>Passe o mouse nas caixas!</h2>
  <div class="galeria">
    <div class="caixa c1">HTML</div>
    <div class="caixa c2">CSS</div>
    <div class="caixa c3">JS</div>
    <div class="caixa c4">DOM</div>
  </div>
</body>
</html>`
        },
        contador_js: {
            nome: '3. Interatividade com DOM',
            codigo: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #1e1b4b; color: white; font-family: sans-serif; text-align: center; padding-top: 40px; }
    #num { font-size: 60px; font-weight: 900; color: #a855f7; margin: 20px 0; }
    .btn { padding: 10px 24px; font-size: 18px; font-weight: bold; margin: 0 5px; border-radius: 8px; border: none; cursor: pointer; }
    .mais { background: #22c55e; color: white; }
    .menos { background: #ef4444; color: white; }
  </style>
</head>
<body>
  <h2>Contador Gamificado Galea</h2>
  <div id="num">0</div>
  <button class="btn menos" onclick="alterar(-1)">- 1</button>
  <button class="btn mais" onclick="alterar(+1)">+ 1</button>

  <script>
    let valor = 0;
    function alterar(delta) {
      valor += delta;
      document.getElementById('num').innerText = valor;
    }
  </script>
</body>
</html>`
        }
    };

    // =====================================================
    // SISTEMA DE ARQUIVOS E PASTAS EM MEMÓRIA
    // =====================================================
    const projetos = {
        web: {
            pastas: [
                { nome: 'css', aberta: true },
                { nome: 'js', aberta: true }
            ],
            arquivos: {
                'index.html': { nome: 'index.html', pasta: '', conteudo: SNIPPETS_WEB.html_basico.codigo },
                'style.css': { nome: 'style.css', pasta: 'css', conteudo: `/* Estilos de style.css */\nh1 {\n  letter-spacing: 1px;\n}\n` },
                'script.js': { nome: 'script.js', pasta: 'js', conteudo: `// Scripts de script.js\nconsole.log("Galea Code: script.js carregado!");\n` }
            },
            arquivoAtivo: 'index.html',
            abasAbertas: ['index.html', 'style.css', 'script.js']
        },
        python: {
            pastas: [],
            arquivos: {
                'main.py': { nome: 'main.py', pasta: '', conteudo: SNIPPETS_PYTHON.ola.codigo }
            },
            arquivoAtivo: 'main.py',
            abasAbertas: ['main.py']
        }
    };

    // Identificar modo inicial pela URL (?modo=web ou ?modo=python)
    const paramModo = new URLSearchParams(location.search).get('modo');
    let modoAtual = (paramModo === 'web') ? 'web' : 'python';

    // Elementos DOM
    const editor = document.getElementById('editor-textarea');
    const linhas = document.getElementById('editor-linhas');
    const output = document.getElementById('terminal-output');
    const webFrame = document.getElementById('web-preview-frame');
    const status = document.getElementById('terminal-status');
    const terminalTitulo = document.getElementById('terminal-titulo-tab');
    const labelArquivo = document.getElementById('label-arquivo');
    const btnExecutar = document.getElementById('btn-executar');
    const btnLimpar = document.getElementById('btn-limpar');
    const btnLimparTerm = document.getElementById('btn-limpar-term');
    const btnVoltar = document.getElementById('btn-tab-voltar');

    const modoPythonBtn = document.getElementById('modo-python');
    const modoWebBtn = document.getElementById('modo-web');

    const btnTabFiles = document.getElementById('btn-tab-files');
    const btnTabSnippets = document.getElementById('btn-tab-snippets');
    const secaoExplorador = document.getElementById('secao-explorador');
    const secaoExemplos = document.getElementById('secao-exemplos');
    const toggleExplorador = document.getElementById('toggle-explorador');
    const toggleExemplos = document.getElementById('toggle-exemplos');
    const chevronExplorador = document.getElementById('chevron-explorador');
    const chevronExemplos = document.getElementById('chevron-exemplos');
    const corpoExplorador = document.getElementById('corpo-explorador');
    const corpoExemplos = document.getElementById('corpo-exemplos');

    const btnNovoArquivo = document.getElementById('btn-novo-arquivo');
    const btnNovaPasta = document.getElementById('btn-nova-pasta');
    const formCriarItem = document.getElementById('form-criar-item');
    const arvorePastasArquivos = document.getElementById('arvore-pastas-arquivos');
    const containerSnippets = document.getElementById('container-snippets');
    const tabsBar = document.getElementById('vscode-tabs-bar');

    // =====================================================
    // CONTROLE DE NAVEGAÇÃO LATERAL (Pastas vs Exemplos)
    // =====================================================
    function mostrarSecaoLateral(secao) {
        if (secao === 'exemplos') {
            btnTabSnippets.classList.add('ativo');
            btnTabFiles.classList.remove('ativo');
            secaoExplorador.style.display = 'none';
            secaoExemplos.style.display = 'block';
        } else {
            btnTabFiles.classList.add('ativo');
            btnTabSnippets.classList.remove('ativo');
            secaoExplorador.style.display = 'block';
            secaoExemplos.style.display = 'none';
        }
    }

    btnTabFiles.addEventListener('click', () => mostrarSecaoLateral('pastas'));
    btnTabSnippets.addEventListener('click', () => mostrarSecaoLateral('exemplos'));

    // =====================================================
    // SEÇÕES RECOLHÍVEIS (EXPLORADOR e EXEMPLOS)
    // =====================================================
    toggleExplorador.addEventListener('click', () => {
        const fechado = corpoExplorador.classList.toggle('fechado');
        toggleExplorador.classList.toggle('recolhido', fechado);
        toggleExplorador.setAttribute('aria-expanded', String(!fechado));
    });

    toggleExemplos.addEventListener('click', () => {
        const fechado = corpoExemplos.classList.toggle('fechado');
        toggleExemplos.classList.toggle('recolhido', fechado);
        toggleExemplos.setAttribute('aria-expanded', String(!fechado));
    });

    // =====================================================
    // RENDERIZAR ÁRVORE DE PASTAS E ARQUIVOS
    // =====================================================
    function renderizarArvore() {
        const proj = projetos[modoAtual];
        arvorePastasArquivos.replaceChildren();

        // 1. Arquivos na raiz
        const arquivosRaiz = Object.keys(proj.arquivos).filter(nome => !proj.arquivos[nome].pasta);
        arquivosRaiz.forEach(nome => {
            arvorePastasArquivos.appendChild(criarElementoArquivo(nome));
        });

        // 2. Pastas e seus arquivos
        proj.pastas.forEach(pasta => {
            const blocoPasta = document.createElement('div');
            blocoPasta.className = 'pasta-bloco';

            const cabecalho = document.createElement('div');
            cabecalho.className = `pasta-cabecalho ${pasta.aberta ? '' : 'recolhida'}`;

            const info = document.createElement('div');
            info.className = 'pasta-info';
            info.innerHTML = `
                <span class="material-symbols-outlined pasta-chevron">expand_more</span>
                <span class="material-symbols-outlined pasta-icone">${pasta.aberta ? 'folder_open' : 'folder'}</span>
                <span>${pasta.nome}</span>
            `;

            const btnDel = document.createElement('button');
            btnDel.type = 'button';
            btnDel.className = 'btn-deletar-item';
            btnDel.title = 'Excluir pasta';
            btnDel.innerHTML = `<span class="material-symbols-outlined" style="font-size: 14px;">delete</span>`;
            btnDel.addEventListener('click', (e) => {
                e.stopPropagation();
                excluirPasta(pasta.nome);
            });

            cabecalho.appendChild(info);
            cabecalho.appendChild(btnDel);

            const filhos = document.createElement('div');
            filhos.className = `pasta-filhos ${pasta.aberta ? '' : 'fechada'}`;

            const arquivosNaPasta = Object.keys(proj.arquivos).filter(nome => proj.arquivos[nome].pasta === pasta.nome);
            if (arquivosNaPasta.length === 0) {
                const vazio = document.createElement('div');
                vazio.style.fontSize = '0.72rem';
                vazio.style.color = 'rgba(255,255,255,0.3)';
                vazio.style.padding = '3px 6px';
                vazio.textContent = '(pasta vazia)';
                filhos.appendChild(vazio);
            } else {
                arquivosNaPasta.forEach(nome => {
                    filhos.appendChild(criarElementoArquivo(nome));
                });
            }

            cabecalho.addEventListener('click', () => {
                pasta.aberta = !pasta.aberta;
                renderizarArvore();
            });

            blocoPasta.appendChild(cabecalho);
            blocoPasta.appendChild(filhos);
            arvorePastasArquivos.appendChild(blocoPasta);
        });
    }

    function criarElementoArquivo(nome) {
        const proj = projetos[modoAtual];
        const item = document.createElement('div');
        const ativo = (nome === proj.arquivoAtivo);
        item.className = `arquivo-item ${ativo ? 'ativo' : ''}`;

        const info = document.createElement('div');
        info.className = 'arquivo-info';
        info.innerHTML = `${obterIcone(nome)}<span>${nome}</span>`;

        item.appendChild(info);

        // Não permite excluir index.html ou main.py principais
        if (nome !== 'index.html' && nome !== 'main.py') {
            const btnDel = document.createElement('button');
            btnDel.type = 'button';
            btnDel.className = 'btn-deletar-item';
            btnDel.title = 'Excluir arquivo';
            btnDel.innerHTML = `<span class="material-symbols-outlined" style="font-size: 14px;">delete</span>`;
            btnDel.addEventListener('click', (e) => {
                e.stopPropagation();
                excluirArquivo(nome);
            });
            item.appendChild(btnDel);
        }

        item.addEventListener('click', () => {
            abrirArquivo(nome);
        });

        return item;
    }

    // =====================================================
    // GERENCIAMENTO DE ARQUIVOS E ABAS
    // =====================================================
    function abrirArquivo(nome) {
        const proj = projetos[modoAtual];
        if (!proj.arquivos[nome]) return;

        // Salva arquivo anterior
        if (proj.arquivoAtivo && proj.arquivos[proj.arquivoAtivo]) {
            proj.arquivos[proj.arquivoAtivo].conteudo = editor.value;
        }

        proj.arquivoAtivo = nome;
        if (!proj.abasAbertas.includes(nome)) {
            proj.abasAbertas.push(nome);
        }

        editor.value = proj.arquivos[nome].conteudo;
        labelArquivo.textContent = nome;

        atualizarLinhas();
        renderizarAbas();
        renderizarArvore();
        editor.focus();

        if (modoAtual === 'web') {
            executarWeb();
        }
    }

    function fecharAba(nome) {
        const proj = projetos[modoAtual];
        if (proj.abasAbertas.length <= 1) return; // Mantém pelo menos uma

        proj.abasAbertas = proj.abasAbertas.filter(n => n !== nome);
        if (proj.arquivoAtivo === nome) {
            const proximo = proj.abasAbertas[proj.abasAbertas.length - 1];
            abrirArquivo(proximo);
        } else {
            renderizarAbas();
        }
    }

    function renderizarAbas() {
        const proj = projetos[modoAtual];
        tabsBar.replaceChildren();

        proj.abasAbertas.forEach(nome => {
            const aba = document.createElement('div');
            const ativa = (nome === proj.arquivoAtivo);
            aba.className = `tab-item ${ativa ? 'ativo' : ''}`;

            const info = document.createElement('span');
            info.style.display = 'inline-flex';
            info.style.alignItems = 'center';
            info.style.gap = '6px';
            info.innerHTML = `${obterIcone(nome)}<span>${nome}</span>`;

            aba.appendChild(info);

            // Botão fechar aba
            if (proj.abasAbertas.length > 1) {
                const btnFechar = document.createElement('span');
                btnFechar.className = 'tab-fechar material-symbols-outlined';
                btnFechar.textContent = 'close';
                btnFechar.title = 'Fechar aba';
                btnFechar.addEventListener('click', (e) => {
                    e.stopPropagation();
                    fecharAba(nome);
                });
                aba.appendChild(btnFechar);
            }

            aba.addEventListener('click', () => {
                abrirArquivo(nome);
            });

            tabsBar.appendChild(aba);
        });
    }

    // =====================================================
    // CRIAÇÃO E EXCLUSÃO DE ARQUIVOS E PASTAS
    // =====================================================
    btnNovoArquivo.addEventListener('click', () => {
        abrirFormCriacao('arquivo');
    });

    btnNovaPasta.addEventListener('click', () => {
        abrirFormCriacao('pasta');
    });

    function abrirFormCriacao(tipo) {
        formCriarItem.style.display = 'block';
        const proj = projetos[modoAtual];

        if (tipo === 'arquivo') {
            const atalhosHtml = (modoAtual === 'web') ? `
                <div class="atalhos-extensao">
                    <span style="font-size: 0.68rem; color: rgba(255,255,255,0.4);">Adicionar:</span>
                    <button type="button" class="btn-chip-ext" data-ext=".html">.html</button>
                    <button type="button" class="btn-chip-ext" data-ext=".css">.css</button>
                    <button type="button" class="btn-chip-ext" data-ext=".js">.js</button>
                </div>
            ` : `
                <div class="atalhos-extensao">
                    <button type="button" class="btn-chip-ext" data-ext=".py">.py</button>
                </div>
            `;

            formCriarItem.innerHTML = `
                <div class="form-criar-linha">
                    <span class="material-symbols-outlined" style="font-size: 16px; color: #38bdf8;">note_add</span>
                    <input type="text" id="input-nome-novo" class="input-criar-item" placeholder="nome-do-arquivo..." autocomplete="off">
                    <button type="button" class="btn-confirmar-criar" id="btn-salvar-novo" title="Confirmar"><span class="material-symbols-outlined">check</span></button>
                    <button type="button" class="btn-cancelar-criar" id="btn-cancelar-novo" title="Cancelar"><span class="material-symbols-outlined">close</span></button>
                </div>
                ${atalhosHtml}
            `;
        } else {
            formCriarItem.innerHTML = `
                <div class="form-criar-linha">
                    <span class="material-symbols-outlined" style="font-size: 16px; color: #f7b801;">create_new_folder</span>
                    <input type="text" id="input-nome-novo" class="input-criar-item" placeholder="nome-da-pasta..." autocomplete="off">
                    <button type="button" class="btn-confirmar-criar" id="btn-salvar-novo" title="Confirmar"><span class="material-symbols-outlined">check</span></button>
                    <button type="button" class="btn-cancelar-criar" id="btn-cancelar-novo" title="Cancelar"><span class="material-symbols-outlined">close</span></button>
                </div>
            `;
        }

        const input = document.getElementById('input-nome-novo');
        const btnSalvar = document.getElementById('btn-salvar-novo');
        const btnCancelar = document.getElementById('btn-cancelar-novo');

        input.focus();

        formCriarItem.querySelectorAll('.btn-chip-ext').forEach(chip => {
            chip.addEventListener('click', () => {
                const ext = chip.dataset.ext;
                if (!input.value.includes('.')) {
                    input.value = (input.value.trim() || 'novo') + ext;
                }
                input.focus();
            });
        });

        const salvar = () => {
            let valor = input.value.trim();
            if (!valor) return;

            if (tipo === 'arquivo') {
                // Adiciona extensão padrão se omitida
                if (!valor.includes('.')) {
                    valor += (modoAtual === 'web') ? '.html' : '.py';
                }

                if (proj.arquivos[valor]) {
                    alert('Já existe um arquivo com esse nome!');
                    return;
                }

                let templatePadrao = '';
                if (valor.endsWith('.html')) templatePadrao = `<!DOCTYPE html>\n<html>\n<head>\n  <title>${valor}</title>\n</head>\n<body>\n  <h1>${valor}</h1>\n</body>\n</html>\n`;
                else if (valor.endsWith('.css')) templatePadrao = `/* Estilos de ${valor} */\n`;
                else if (valor.endsWith('.js')) templatePadrao = `// Scripts de ${valor}\n`;
                else if (valor.endsWith('.py')) templatePadrao = `# Arquivo ${valor}\n`;

                proj.arquivos[valor] = {
                    nome: valor,
                    pasta: '',
                    conteudo: templatePadrao
                };

                fecharFormCriacao();
                abrirArquivo(valor);
            } else {
                if (proj.pastas.some(p => p.nome === valor)) {
                    alert('Já existe uma pasta com esse nome!');
                    return;
                }
                proj.pastas.push({ nome: valor, aberta: true });
                fecharFormCriacao();
                renderizarArvore();
            }
        };

        btnSalvar.addEventListener('click', salvar);
        btnCancelar.addEventListener('click', fecharFormCriacao);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') salvar();
            if (e.key === 'Escape') fecharFormCriacao();
        });
    }

    function fecharFormCriacao() {
        formCriarItem.style.display = 'none';
        formCriarItem.replaceChildren();
    }

    function excluirArquivo(nome) {
        const proj = projetos[modoAtual];
        if (nome === 'index.html' || nome === 'main.py') return;
        if (!confirm(`Deseja realmente excluir o arquivo "${nome}"?`)) return;

        delete proj.arquivos[nome];
        proj.abasAbertas = proj.abasAbertas.filter(n => n !== nome);

        if (proj.arquivoAtivo === nome) {
            const proximo = proj.abasAbertas[0] || (modoAtual === 'web' ? 'index.html' : 'main.py');
            abrirArquivo(proximo);
        } else {
            renderizarAbas();
            renderizarArvore();
        }

        if (modoAtual === 'web') executarWeb();
    }

    function excluirPasta(nomePasta) {
        const proj = projetos[modoAtual];
        if (!confirm(`Deseja realmente excluir a pasta "${nomePasta}" e todos os seus arquivos?`)) return;

        proj.pastas = proj.pastas.filter(p => p.nome !== nomePasta);

        // Remove arquivos que estavam nessa pasta
        Object.keys(proj.arquivos).forEach(nome => {
            if (proj.arquivos[nome].pasta === nomePasta) {
                delete proj.arquivos[nome];
                proj.abasAbertas = proj.abasAbertas.filter(n => n !== nome);
            }
        });

        if (!proj.arquivos[proj.arquivoAtivo]) {
            const proximo = proj.abasAbertas[0] || (modoAtual === 'web' ? 'index.html' : 'main.py');
            abrirArquivo(proximo);
        } else {
            renderizarAbas();
            renderizarArvore();
        }

        if (modoAtual === 'web') executarWeb();
    }

    // =====================================================
    // TROCA DE MODO (Python vs Web)
    // =====================================================
    function trocarModo(novoModo) {
        // Salva estado do arquivo atual antes de alternar
        const projAnterior = projetos[modoAtual];
        if (projAnterior.arquivoAtivo && projAnterior.arquivos[projAnterior.arquivoAtivo]) {
            projAnterior.arquivos[projAnterior.arquivoAtivo].conteudo = editor.value;
        }

        modoAtual = novoModo;
        const proj = projetos[modoAtual];

        if (modoAtual === 'web') {
            modoWebBtn.classList.add('ativo');
            modoPythonBtn.classList.remove('ativo');
            terminalTitulo.textContent = 'PREVIEW (Navegador Ao Vivo)';
            output.style.display = 'none';
            webFrame.style.display = 'block';

            carregarListaSnippets(SNIPPETS_WEB);
            abrirArquivo(proj.arquivoAtivo || 'index.html');
            executarWeb();
        } else {
            modoPythonBtn.classList.add('ativo');
            modoWebBtn.classList.remove('ativo');
            terminalTitulo.textContent = 'TERMINAL (Python 3 Sandboxed)';
            output.style.display = 'block';
            webFrame.style.display = 'none';

            carregarListaSnippets(SNIPPETS_PYTHON);
            abrirArquivo(proj.arquivoAtivo || 'main.py');
            imprimirNoTerminal("Galea Code [Modo Python Ativo]\nPronto para executar!\n", 'term-boas-vindas');
        }
    }

    function carregarListaSnippets(mapa) {
        containerSnippets.replaceChildren();
        Object.keys(mapa).forEach(chave => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'snippet-btn';
            btn.textContent = mapa[chave].nome;
            btn.addEventListener('click', () => {
                editor.value = mapa[chave].codigo;
                const proj = projetos[modoAtual];
                if (proj.arquivos[proj.arquivoAtivo]) {
                    proj.arquivos[proj.arquivoAtivo].conteudo = editor.value;
                }
                atualizarLinhas();
                if (modoAtual === 'web') {
                    executarWeb();
                } else {
                    imprimirNoTerminal(`[Galea Code] Exemplo carregado: ${mapa[chave].nome}\n`, 'term-boas-vindas');
                }
            });
            containerSnippets.appendChild(btn);
        });
    }

    modoPythonBtn.addEventListener('click', () => trocarModo('python'));
    modoWebBtn.addEventListener('click', () => trocarModo('web'));

    if (btnVoltar) {
        btnVoltar.addEventListener('click', () => {
            window.history.back();
        });
    }

    // =====================================================
    // EDITOR: LINHAS, INDENTAÇÃO E ATALHOS
    // =====================================================
    function atualizarLinhas() {
        const total = editor.value.split('\n').length;
        let html = '';
        for (let i = 1; i <= total; i++) {
            html += `<span>${i}</span>`;
        }
        linhas.innerHTML = html;
    }

    editor.addEventListener('input', () => {
        atualizarLinhas();
        const proj = projetos[modoAtual];
        if (proj.arquivos[proj.arquivoAtivo]) {
            proj.arquivos[proj.arquivoAtivo].conteudo = editor.value;
        }
    });

    editor.addEventListener('scroll', () => {
        linhas.scrollTop = editor.scrollTop;
    });

    editor.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            atualizarLinhas();
            const proj = projetos[modoAtual];
            if (proj.arquivos[proj.arquivoAtivo]) {
                proj.arquivos[proj.arquivoAtivo].conteudo = editor.value;
            }
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            executarCodigo();
        }
    });

    function imprimirNoTerminal(texto, classe = '') {
        const span = document.createElement('span');
        if (classe) span.className = classe;
        span.textContent = texto;
        output.appendChild(span);
        output.scrollTop = output.scrollHeight;
    }

    btnLimpar.addEventListener('click', () => {
        editor.value = '';
        const proj = projetos[modoAtual];
        if (proj.arquivos[proj.arquivoAtivo]) {
            proj.arquivos[proj.arquivoAtivo].conteudo = '';
        }
        atualizarLinhas();
        editor.focus();
    });

    btnLimparTerm.addEventListener('click', () => {
        if (modoAtual === 'python') {
            output.replaceChildren();
        } else {
            webFrame.srcdoc = '';
        }
    });

    // =====================================================
    // EXECUÇÃO INTELIGENTE (MULTI-ARQUIVO WEB & PYTHON)
    // =====================================================
    function executarCodigo() {
        if (modoAtual === 'web') {
            executarWeb();
        } else {
            executarPython();
        }
    }

    btnExecutar.addEventListener('click', executarCodigo);

    function executarWeb() {
        const proj = projetos.web;
        let htmlPrincipal = proj.arquivos['index.html'] ? proj.arquivos['index.html'].conteudo : editor.value;

        // Se o arquivo ativo for outro HTML (ex: sobre.html), usa ele como base
        if (proj.arquivoAtivo.endsWith('.html') && proj.arquivos[proj.arquivoAtivo]) {
            htmlPrincipal = proj.arquivos[proj.arquivoAtivo].conteudo;
        }

        // Concatena todos os arquivos CSS criados no projeto
        let cssConcatenado = '';
        Object.keys(proj.arquivos).forEach(nome => {
            if (nome.endsWith('.css') && proj.arquivos[nome].conteudo.trim()) {
                cssConcatenado += `\n/* [${nome}] */\n${proj.arquivos[nome].conteudo}\n`;
            }
        });

        // Concatena todos os arquivos JS criados no projeto
        let jsConcatenado = '';
        Object.keys(proj.arquivos).forEach(nome => {
            if (nome.endsWith('.js') && proj.arquivos[nome].conteudo.trim()) {
                jsConcatenado += `\n// [${nome}]\n${proj.arquivos[nome].conteudo}\n`;
            }
        });

        let codigoFinal = htmlPrincipal;

        // Injeta CSS
        if (cssConcatenado) {
            const tagStyle = `<style>${cssConcatenado}</style>`;
            if (codigoFinal.includes('</head>')) {
                codigoFinal = codigoFinal.replace('</head>', `${tagStyle}\n</head>`);
            } else {
                codigoFinal = `${tagStyle}\n${codigoFinal}`;
            }
        }

        // Injeta JS
        if (jsConcatenado) {
            const tagScript = `<script>${jsConcatenado}<\/script>`;
            if (codigoFinal.includes('</body>')) {
                codigoFinal = codigoFinal.replace('</body>', `${tagScript}\n</body>`);
            } else {
                codigoFinal += `\n${tagScript}`;
            }
        }

        webFrame.srcdoc = codigoFinal;
        status.textContent = 'Renderizado';
        status.style.color = '#4ade80';
    }

    function executarPython() {
        const proj = projetos.python;
        const codigo = editor.value.trim();
        if (!codigo) {
            imprimirNoTerminal(">>> (Código vazio. Digite algo para executar!)\n", "term-boas-vindas");
            return;
        }

        status.textContent = "Executando...";
        status.style.color = "#FFD166";
        imprimirNoTerminal(`\n>>> Executando ${proj.arquivoAtivo}...\n`, "term-boas-vindas");

        const tInicio = performance.now();

        try {
            const linhasCodigo = codigo.split(/\r?\n/);
            let jsCorpo = `
                const __saidas = [];
                function print(...args) {
                    __saidas.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
                }
                function len(v) { return v ? (v.length ?? Object.keys(v).length) : 0; }
                function range(s, e, st = 1) {
                    if (e === undefined) { e = s; s = 0; }
                    const a = [];
                    for (let i = s; i < e; i += st) a.push(i);
                    return a;
                }
            `;

            let jsTraduzido = '';
            for (let i = 0; i < linhasCodigo.length; i++) {
                let l = linhasCodigo[i];
                if (/^\s*#/.test(l)) {
                    jsTraduzido += '// ' + l.replace('#', '') + '\n';
                    continue;
                }
                l = l.replace(/f"([^"]*)"/g, (m, p1) => '`' + p1.replace(/{([^}]+)}/g, '${$1}') + '`');
                l = l.replace(/f'([^']*)'/g, (m, p1) => '`' + p1.replace(/{([^}]+)}/g, '${$1}') + '`');
                l = l.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false').replace(/\bNone\b/g, 'null');
                l = l.replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
                l = l.replace(/(\w+)\s*\/\/\s*(\w+)/g, 'Math.floor($1 / $2)');
                l = l.replace(/^\s*def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:/g, 'function $1($2) {');
                l = l.replace(/^\s*elif\s+([^:]+):/g, '} else if ($1) {');
                l = l.replace(/^\s*if\s+([^:]+):/g, 'if ($1) {');
                l = l.replace(/^\s*else\s*:/g, '} else {');
                l = l.replace(/^\s*for\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):/g, 'for (let $1 of $2) {');
                l = l.replace(/^\s*while\s+([^:]+):/g, 'while ($1) {');
                l = l.replace(/\.append\(/g, '.push(');
                jsTraduzido += l + '\n';
            }

            const func = new Function(jsCorpo + '\n' + jsTraduzido + '\nreturn __saidas;');
            const out = func();
            const tempo = (performance.now() - tInicio).toFixed(1);

            if (Array.isArray(out) && out.length > 0) {
                out.forEach(l => imprimirNoTerminal(l + '\n', 'term-saida'));
            }

            imprimirNoTerminal(`✓ Execução concluída em ${tempo}ms\n`, 'term-sucesso');
            status.textContent = "Pronto";
            status.style.color = "#4ade80";
        } catch (err) {
            imprimirNoTerminal(`Traceback (most recent call last):\n  Erro: ${err.message}\n`, 'term-erro');
            status.textContent = "Erro";
            status.style.color = "#f87171";
        }
    }

    // Inicialização
    trocarModo(modoAtual);
    mostrarSecaoLateral('pastas');
})();
