
const openModalBtn = document.querySelector('.forgot-password');
const modal = document.getElementById('forgot-password-modal');
const closeBtn = document.querySelector('.close-btn');


openModalBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'flex';
});


closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});


window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const correctEmail = "manuela@costa";
    const correctPassword = "12345";

    
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("senha").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Validação do login
    if (emailInput === correctEmail && passwordInput === correctPassword) {
        errorMessage.style.display = "none"; 
        MudarPagina(); 
    } else {
        if (emailInput !== correctEmail && passwordInput !== correctPassword) {
            errorMessage.textContent = "E-mail e senha incorretos.";
        } else if (emailInput !== correctEmail) {
            errorMessage.textContent = "E-mail incorreto.";
        } else if (passwordInput !== correctPassword) {
            errorMessage.textContent = "Senha incorreta.";
        }
        errorMessage.style.display = "block"; 
    }
});

function MudarPagina() {
    window.location.href = "/TELA INCIAL/TelaInicial.html";
}

