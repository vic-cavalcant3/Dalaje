/*================= CARROSEL INICIAL =================*/
let indiceAtual = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.slid'); // Seleciona todos os slides
const totalSlides = slides.length; // Número total de slides
const intervalo = 4000; // 5 segundos


function mostrarSlide(indice) {
    const carrosselSlides = document.getElementById('carrossel');
    carrosselSlides.style.transform = `translateX(-${indice * 450}%)`;}

function autoAvancar() {
    console.log('victtttt')
    indiceAtual = (indiceAtual + 1) % totalSlides;
    mostrarSlide(indiceAtual);}

setInterval(autoAvancar, intervalo);

//================CARROSSEL 1 ================

var radios = document.querySelectorAll('.manual-btn');
var contador = 1;

document.getElementById('esfera1').checked = true; //verdadeiro

setInterval(() => {
    proximaImg()
}, 6000);

function proximaImg(){
    contador++;

    if(contador > 2){
        contador = 1;}
  
    document.getElementById('esfera' + contador).checked = true;}

function vai() {
    let vai1 = document.getElementById('vai1')
    let vai2 = document.getElementById('vai2')
 
 
    vai1.style.backgroundColor = 'black'
    vai2.style.backgroundColor = 'transparent'}

function vai2() {
    let vai1 = document.getElementById('vai1')
    let vai2 = document.getElementById('vai2')

    vai2.style.backgroundColor = 'black'
    vai1.style.backgroundColor = 'transparent'}


//================CARROSSEL 2 ================

var bolinhas = document.querySelectorAll('.btn-manual');
var cont = 1;

document.getElementById('bolinha1').checked = true;

setInterval(() => {
    proximoslide()
}, 6000);

function proximoslide(){
    cont++;

    if(cont > 2){
        cont = 1;}
    
    document.getElementById('bolinha' + contador).checked = true;}

//================FUNCTION IR PRA OUTRA PAGINA ================
function IrPraOutraPagina(){
    window.location.href =" /Produtos/Produtos.html "
}


