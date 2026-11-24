/* =====================================================
   Galea Educação - Orquestrador Central de Conteúdos Pedagógicos
   Agrega os bancos de conteúdos das 6 disciplinas:
   - Python (script/conteudo/python.js)
   - Matemática (script/conteudo/matematica.js)
   - Programação Web (script/conteudo/web.js)
   - Física (script/conteudo/fisica.js)
   - Química (script/conteudo/quimica.js)
   - Inglês (script/conteudo/ingles.js)

   Cadência:
   - Lição 1: Texto aprofundado, fundamentado em fontes oficiais e didática TDAH.
   - Lição 2: Vídeo explicativo + Tela de Resumo completa e checklist.
   - Lição 3: Resumo gamificado em tela cheia com desafios práticos de fixação.
   ===================================================== */

window.GaleaConteudos = (() => {
    'use strict';

    function gerarFallback(cursoId, numeroAula, aulaTitulo, listaAulas) {
        const resto = numeroAula % 3;

        if (resto === 1) {
            return {
                tipo: 'texto',
                conteudo: [
                    `**Objetivo da Aula:** Compreender os fundamentos essenciais e a base científica de *${aulaTitulo}*.`,
                    `### 1. Visão Geral e Contexto Real`,
                    `Nesta lição do curso, analisamos as bases conceituais de **${aulaTitulo}** estruturadas de forma clara, acessível e progressiva.`,
                    `### 2. Fundamentação Teórica`,
                    `O domínio deste tópico é crucial para conectar as teorias fundamentais às aplicações práticas do mundo profissional e acadêmico.`,
                    `> **Dica de Fixação Galea (TDAH):** Leia cada seção com calma, anote as palavras-chave e visualize mentalmente a aplicação real do conceito!`
                ].join('\n\n')
            };
        }

        if (resto === 2) {
            return {
                tipo: 'video-resumo',
                video: { titulo: `Videoaula da Lição: ${aulaTitulo}` },
                conteudo: [
                    `## 📺 Guia da Videoaula: ${aulaTitulo}`,
                    `Assista ao vídeo explicativo acima. A seguir, consulte a síntese essencial dos pontos abordados:`,
                    `### 📌 Tela de Resumo & Consulta Rápida:`,
                    `- Síntese prática dos princípios essenciais de **${aulaTitulo}**.`,
                    `- Principais boas práticas e erros clássicos a serem evitados.`,
                    `- Preparação e checklist mental para o desafio gamificado da lição seguinte.`,
                    `> Conclua este resumo para liberar a gamificação na próxima aula!`
                ].join('\n\n')
            };
        }

        const tituloAnterior1 = (Array.isArray(listaAulas) && listaAulas[numeroAula - 3]) ? listaAulas[numeroAula - 3] : 'Fundamentos';
        const tituloAnterior2 = (Array.isArray(listaAulas) && listaAulas[numeroAula - 2]) ? listaAulas[numeroAula - 2] : aulaTitulo;

        return {
            tipo: 'gamificada',
            gamificacao: {
                etapas: [
                    {
                        tipo: 'grid-chips',
                        enunciado: `[Fase 1/5] Selecione todas as afirmações VERDADEIRAS sobre ${tituloAnterior1}:`,
                        dica: 'Analise os conceitos fundamentais aprendidos na lição teórica inicial!',
                        opcoes: [
                            { texto: `Princípio essencial validado de ${tituloAnterior1}`, correta: true },
                            { texto: `Aplicação prática dos métodos de ${tituloAnterior1}`, correta: true },
                            { texto: `Regra conceitual e diretriz consolidada`, correta: true },
                            { texto: `Conceito invertido ou errôneo`, correta: false },
                            { texto: `Afirmação contrária à teoria estudada`, correta: false },
                            { texto: `Procedimento descontinuado ou falso`, correta: false }
                        ],
                        explicacao: `Excelente! Você dominou a base conceitual de ${tituloAnterior1}.`
                    },
                    {
                        tipo: 'lacunas',
                        enunciado: `[Fase 2/5] Complete a lacuna fundamental sobre a aplicação de ${tituloAnterior2}:`,
                        dica: 'Escolha o termo técnico correto estudado no módulo.',
                        template: `No estudo de ${tituloAnterior2}, o procedimento padrão exige {lacuna} para validação.`,
                        opcoes: ['precisao', 'descuido', 'improviso', 'descarte'],
                        respostaCorreta: 'precisao',
                        explicacao: `Perfeito! A precisão técnica é essencial no domínio de ${tituloAnterior2}.`
                    },
                    {
                        tipo: 'caca-bug',
                        enunciado: `[Fase 3/5] Identifique a linha que contém uma inconsistência sobre ${tituloAnterior1}:`,
                        dica: 'Procure a linha com afirmação contraditória.',
                        linhasCodigo: [
                            `1. Definição clara dos objetivos de ${tituloAnterior1}`,
                            `2. Execução das etapas metodológicas validadas`,
                            `3. Erro: descartar as regras fundamentais sem verificação`,
                            `4. Obtenção dos resultados esperados no módulo`
                        ],
                        linhaBug: 2,
                        explicacao: 'A linha 3 apresenta uma falha conceitual: a verificação metódica é indispensável.'
                    },
                    {
                        tipo: 'ordene',
                        enunciado: `[Fase 4/5] Ordene a sequência lógica do fluxo de trabalho de ${tituloAnterior2}:`,
                        dica: 'Do planejamento inicial até a consolidação final.',
                        itens: [
                            `Compreender a base teórica de ${tituloAnterior1}`,
                            `Estruturar os dados de ${tituloAnterior2}`,
                            `Executar o procedimento e analisar os resultados`,
                            `Consolidar o aprendizado e avançar na trilha`
                        ],
                        ordemCorreta: [
                            `Compreender a base teórica de ${tituloAnterior1}`,
                            `Estruturar os dados de ${tituloAnterior2}`,
                            `Executar o procedimento e analisar os resultados`,
                            `Consolidar o aprendizado e avançar na trilha`
                        ],
                        explicacao: 'Sequência correta: Fundamentação -> Estruturação -> Execução -> Consolidação.'
                    },
                    {
                        tipo: 'grid-chips',
                        enunciado: `[Fase 5/5 - Desafio Mestre] Selecione as melhores práticas integradas deste módulo:`,
                        dica: 'Una o que você aprendeu em ambas as aulas para concluir a gamificação!',
                        opcoes: [
                            { texto: `Integração consistente entre teoria e prática`, correta: true },
                            { texto: `Validação cuidadosa em cada etapa do processo`, correta: true },
                            { texto: `Aplicação dos padrões recomendados no curso`, correta: true },
                            { texto: `Ignorar boas práticas para acelerar o processo`, correta: false },
                            { texto: `Trabalhar sem método nem planejamento`, correta: false }
                        ],
                        explicacao: 'Sensacional! Você concluiu com sucesso todas as 5 fases da gamificação deste módulo!'
                    }
                ]
            }
        };
    }

    return {
        obter(cursoId, numeroAula, aulaTitulo, listaAulas) {
            const bancos = window.GaleaBancosConteudo || {};
            const bancoCurso = bancos[cursoId];

            if (bancoCurso && bancoCurso[numeroAula]) {
                return bancoCurso[numeroAula];
            }

            return gerarFallback(cursoId, numeroAula, aulaTitulo, listaAulas);
        }
    };
})();
