//MUDAR AS IMAGENS---------------------------------------------
const imagemPrincipal = document.getElementById("imagem-principal");

const imagensMenores = document.querySelectorAll(".fotos .foto");

imagensMenores.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        imagemPrincipal.src = imagem.src;
    });
});

//ADICIONAR AO CARRINHO
function AdicionarCarrinho(){
    window.location.href = "/CARRINHO/Carrinho2.html"
}