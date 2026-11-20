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
                        enunciado: `Com base nas lições de ${tituloAnterior1} e ${tituloAnterior2}, selecione as afirmações VERDADEIRAS:`,
                        dica: 'Identifique os conceitos fundamentais consolidados no módulo!',
                        opcoes: [
                            { texto: `Princípio essencial de ${tituloAnterior1}`, correta: true },
                            { texto: `Aplicação prática de ${tituloAnterior2}`, correta: true },
                            { texto: `Boas práticas consolidadas do módulo`, correta: true },
                            { texto: `Relação lógica e método validado`, correta: true },
                            { texto: `Conceito invertido ou falso`, correta: false },
                            { texto: `Afirmação contrária à teoria estudada`, correta: false },
                            { texto: `Procedimento descontinuado`, correta: false }
                        ],
                        explicacao: 'Excelente! Você identificou os conceitos consolidados no módulo.'
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
