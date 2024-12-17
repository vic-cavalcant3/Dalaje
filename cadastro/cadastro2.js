
const form = document.getElementById('register-form');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 


    form.reset();


    MudarPagina();
});


function MudarPagina() {
    window.location.href = "/TELA INCIAL/TelaInicial.html";
}
