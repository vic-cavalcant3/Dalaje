function apagarProduto() {
    // Remove o produto da tela
    const box1 = document.querySelector('.box1-tudo');
    box1.style.display = 'none';

    // Zera o subtotal
    const subtotal = document.querySelector('.total .sub:last-child');
    subtotal.textContent = 'R$ 0,00';

    // Exibe alerta
    alert("Sua sacola está vazia");

    // Redireciona para outra página após 2 segundos
    setTimeout(() => {
        window.location.href = "/COMPRAS/compras17.html"; // Altere para a página desejada
    }, 2000);
}


function Finish() {
    // Exibe a caixa de alerta personalizada
    document.getElementById("container-alert").style.display = "flex";

    // Após 2 segundos, redireciona para outra página
    setTimeout(() => {
        window.location.href = "/TELA INCIAL/TelaInicial.html";
    }, 10000);
}

function closeAlert() {
    // Função para fechar a caixa de alerta
    document.getElementById("container-alert").style.display = "none";
    window.location.href = "/TELA INCIAL/TelaInicial.html";
}

//CEPPPPPPPPPPPPPP
function CalcularFrete(){
    document.getElementById('frete').value = "";
    alert('Frete calculado com sucesso')
}