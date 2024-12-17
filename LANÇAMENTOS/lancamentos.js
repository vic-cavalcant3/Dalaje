let currentIndex = 0;
const imagens = [
    "img/foto1.0.png",
    "img/foto2.0.png",
    "img/foto3.0.png",
    "img/foto4.0.png",
    "img/foto5.0.png",
    "img/foto6.0.png",
    "img/foto7.0.png"
];

const anterior = document.querySelector('.anterior img');
const atual = document.querySelector('.atual img');
const proxima = document.querySelector('.proxima img');
const imagemContainer = document.querySelector('.imagem-container');


// Atualiza o carrossel com as imagens do índice atual
function updateCarrossel() {
    anterior.src = imagens[(currentIndex - 1 + imagens.length) % imagens.length];
    atual.src = imagens[currentIndex];
    proxima.src = imagens[(currentIndex + 1) % imagens.length];
}

// Avança para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % imagens.length;
    updateCarrossel();
}

// Volta para a imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
    updateCarrossel();
}

// Inicializa o carrossel
updateCarrossel();

// Adicionando os eventos para as setas de navegação
document.querySelector('.seta-direita').addEventListener('click', nextImage);
document.querySelector('.seta-esquerda').addEventListener('click', prevImage);
