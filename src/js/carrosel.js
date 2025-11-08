const imagens = document.querySelectorAll(".individual")
const btnVoltar = document.getElementById("btn-voltar")
const btnAvancar = document.getElementById("btn-avancar")

let imagemAtual = 0

btnAvancar.addEventListener ("click", (event) => {
    event.preventDefault();

    if (imagemAtual === imagens.length - 1  ) {
        return;
    }
    imagemAtual++;

    esconderImagemAtual();

    mostrarImagem();

    esconderOuMostrarSetas ()
} )

btnVoltar.addEventListener ("click", (event) => {
    event.preventDefault();

    if (imagemAtual === 0  ) {
        return;
    }
    imagemAtual--;
    
    esconderImagemAtual();

    mostrarImagem();

    esconderOuMostrarSetas ()
} )

function esconderImagemAtual () {
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarImagem () {
    imagens[imagemAtual].classList.add("mostrar")
}

btnAvancar.classList.remove("opacidade")

function esconderOuMostrarSetas () {
  if (imagens[imagemAtual] === imagens[0]) {
    btnVoltar.classList.add("opacidade")
  } else {
    btnVoltar.classList.remove("opacidade")
  }

  if (imagens[imagemAtual] === imagens[imagens.length - 1]) {
    btnAvancar.classList.add("opacidade")
  } else {
    btnAvancar.classList.remove("opacidade")
  }

}