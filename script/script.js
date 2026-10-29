function alterarLink(novoUrl) {
	document.getElementById('teste001').src = novoUrl;
	

}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#slider");
  if (!slider) return;   // a home não tem esse carrossel (o de "Meus cursos" fica em mycourses.js)
  const container = slider.parentElement; // não depende mais do nome da classe
  const cursos = document.querySelectorAll(".curso");
  const totalSlides = cursos.length;
  const setaEsquerda = document.querySelector("#setaEsquerda");
  const setaDireita = document.querySelector("#setaDireita");

  let slideAtual = 0;

  function larguraCard() {
    return cursos[0].getBoundingClientRect().width;
  }

  function cardsVisiveis() {
    const largura = larguraCard();
    if (!largura) return 1; // evita divisão por zero se algo ainda não renderizou
    return Math.max(Math.floor(container.getBoundingClientRect().width / largura), 1);
  }

  function indiceMaximo() {
    return Math.max(totalSlides - cardsVisiveis(), 0);
  }

  function mostrarSlide() {
    const deslocamento = slideAtual * larguraCard();
    slider.style.transform = `translateX(-${deslocamento}px)`;
  }

  function avancar() {
    const max = indiceMaximo();
    slideAtual = slideAtual >= max ? 0 : slideAtual + 1;
    mostrarSlide();
  }

  function voltar() {
    const max = indiceMaximo();
    slideAtual = slideAtual <= 0 ? max : slideAtual - 1;
    mostrarSlide();
  }

  setaDireita.addEventListener("click", avancar);
  setaEsquerda.addEventListener("click", voltar);

  window.addEventListener("resize", () => {
    slideAtual = Math.min(slideAtual, indiceMaximo());
    mostrarSlide();
  });

  // garante posição correta assim que todas as imagens carregarem
  // (largura do .curso já é fixa via CSS, mas isso cobre qualquer reflow)
  window.addEventListener("load", mostrarSlide);
});