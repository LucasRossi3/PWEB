const imagem = document.getElementById("imagem");
const estado = document.getElementById("estado");

onload = () => {
    imagem.src = "img/janelafechada.png";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janelaaberta.png";
    estado.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janelafechada.png";
    estado.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janelaquebra.png";
    estado.innerHTML = "Janela Quebrada";
});