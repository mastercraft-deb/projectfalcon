// Essa é uma forma de atualização Dinamica dos Botões do curso, conforme o progresso do usuario

(()=> {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
     // Ele procura o botão principal da ação da capa
     const botao = document.querySelector('.capa-botoes .botao-comecar');
     if (!botao) return;
    
    // Ele descobre qual curso está sendo visitado pelo link href da trilha.html
    const linkTrilha = botao.getAttribute('href') || '';
    const match = linkTrilha.match(/[?&]curso=([^&]+)/);
    if (!match) return;
    const cursoId = match[1];

    // Ele lê o progresso que esta registrado no GaleaCursos
    let progresso = 0;
    if (window.GaleaCursos && typeof window.GaleaCursos.progressoDe === 'function') {
        const val = GaleaCursos.progressoDe(cursoId);
        progresso = val !== null ? Number(val) : 0;
    }

    // Aplicação da mudança da cor do botão
    if (progresso >= 100) {
        // Concluido Agora recomeçar
        botao.classList.add('botao-recomecar');
        botao.classList.remove('botao-continuar');
        botao.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Recomeçar`;
    } else if (progresso > 0) {
        // Estado de continuar entre 1% e 99% do curso
        botao.classList.add('botao-continuar');
        botao.classList.remove('botao-recomecar');
        botao.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Continuar`;
    }
});
     
})();