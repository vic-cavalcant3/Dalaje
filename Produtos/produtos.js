let products = {
    data: [
      { id: "3",
         productName: "Bermuda Jeans Cinza", category: "SHORTS", price: "12", image: "imgs/bermuda.png", buttonText: "Ver detalhes" },
      { id: "42",
         productName: "Camiseta Cons Preto", category: "Camisetas", price: "30", image: "imgs/camisa tempo.png", buttonText: "Ver detalhes" },
      { id: "33",
         productName: "Camiseta Real Madri", category: "Camisetas", price: "30", image: "imgs/camisa real madrid 1.png", buttonText: "Ver detalhes" },
      { id: "23", 
        productName: "Polo Tommy Hilfiger", category: "Camisetas", price: "15", image: "imgs/camisa polo tommy 1.png", buttonText: "Ver detalhes" },
      { id: "5",
         productName: "Camisa Palmeiras 2009 Goleiro", category: "Camisetas", price: "15", image: "imgs/camisa marcos 1.png", buttonText: "Ver detalhes" },
      { id: "6", 
        productName: "Polo Lacoste Verde", category: "Camisetas", price: "10", image: "imgs/camisa lacoste 1.png", buttonText: "Ver detalhes" },
      { id: "7",
         productName: "Camisa Vasco", category: "Camisetas", price: "10", image: "imgs/camisa vasco.png", buttonText: "Ver detalhes" },
      { id: "8",
         productName: "Camiseta Banda Kiss", category: "Camisetas", price: "10", image: "imgs/camiseta kiss 2.png", buttonText: "Ver detalhes" },
      { id: "9",
         productName: "Camiseta Preta 'Good Times'", category: "Camisetas", price: "10", image: "imgs/camisa good times 2.png", buttonText: "Ver detalhes" },
      { id: "1",
         productName: "Camiseta Brasil", category: "Camisetas", price: "25", image: "imgs/camisa brasil yaya 2.png", buttonText: "Ver detalhes" },
      { id: "11",
         productName: "Calça moletom Adidas", category: "Calças", price: "25", image: "imgs/moletomadidas.png", buttonText: "Ver detalhes" },
      { id: "12", productName: "Calça Moletom Nike", category: "Calças", price: "25", image: "imgs/calca nike 2.png", buttonText: "Ver detalhes" },
      { id: "13", productName: "Calça jeans cargo", category: "Calças", price: "18", image: "imgs/calca thay 3.png", buttonText: "Ver detalhes" },
      { id: "14", productName: "Calça Reta", category: "Calças", price: "18", image: "imgs/calca jeans divos 2.png", buttonText: "Ver detalhes" },
      { id: "15", productName: "Calça Reta", category: "Calças", price: "10", image: "imgs/calça jeans vic 2.png", buttonText: "Ver detalhes" },
      { id: "2", productName: "Calça Jeans DroppedWear", category: "calças", price: "20", image: "imgs/calça divos 2.png", buttonText: "Ver detalhes" },
      { id: "17", productName: "Moletom Nike Azul", category: "Moletom", price: "18", image: "imgs/moletomNike.png", buttonText: "Ver detalhes" },
      { id: "18", productName: "Cropped Top faixa", category: "Camisetas", price: "8", image: "imgs/top faixa 1.png", buttonText: "Ver detalhes" },
      { id: "101", productName: "Calça Jeans Skinny", category: "Calças", price: "18", image: "imgs/calca feminista 6.png", buttonText: "Ver detalhes" },
      { id: "20", productName: "Mini Saia Cinza", category: "SHORTS", price: "15", image: "imgs/saia thay 1.png", buttonText: "Ver detalhes" },
      { id: "21", productName: "Mini Saia Personalizada", category: "SHORTS", price: "15", image: "imgs/saia divos.png", buttonText: "Ver detalhes" },
      { id: "22", productName: "Camiseta azul Brasil", category: "Camisetas", price: "20", image: "imgs/camisa brasil azul 2.png", buttonText: "Ver detalhes" },
      { id: "4", productName: "Moletom London", category: "Moletom", price: "20", image: "imgs/blusa london 1.png", buttonText: "Ver detalhes" },
      { id: "24", productName: "Moletom Adidas preto", category: "Moletom", price: "20", image: "imgs/blusa adidas 1.png", buttonText: "Ver detalhes" },
      { id: "25", productName: "Moletom Branco", category: "Moletom", price: "20", image: "imgs/blusa branca 1.png", buttonText: "Ver detalhes" },
      { id: "26", productName: "Camiseta Adidas azul Palmeiras", category: "Camisetas", price: "15", image: "imgs/camisa sansung 1.png", buttonText: "Ver detalhes" },
      { id: "27", productName: "Camiseta Palmeiras Dourado", category: "Camisetas", price: "20", image: "imgs/camisa dourada 2.png", buttonText: "Ver detalhes" },
      { id: "28", productName: "Camiseta Palmeiras Pirelli", category: "Camisetas", price: "20", image: "imgs/camisa palmeiras verde 2.png", buttonText: "Ver detalhes" }
    ]
  };
  
  
  // Função para criar os cartões de produto
  function createProductCards() {
    // Percorrer os dados de produtos e criar os cartões
    products.data.forEach(product => {
      let card = document.createElement("div");
      card.classList.add("card", product.category);
  
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      let image = document.createElement("img");
      image.setAttribute("src", product.image);
      image.setAttribute("alt", product.productName); // Para acessibilidade
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
  
      let container = document.createElement("div");
      container.classList.add("container");
  
      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = product.productName.toUpperCase();
      container.appendChild(name);
  
      let price = document.createElement("h6");
      price.innerText = "R$ " + product.price + ",00";
      container.appendChild(price);
  
      let button = document.createElement("button");
      button.classList.add("ver");
      button.innerText = product.buttonText;
  
      button.addEventListener("click", function () {
        window.location.href = `../COMPRAS/compras${product.id}.html?productID=${product.id}`;

        // window.location.href = "compras${product.id}.html?productID=${product.id}";
      // window.location.href = "/COMPRAS/compras1.html"

      });
  
      container.appendChild(button);
      card.appendChild(container);
      document.getElementById("products").appendChild(card);
    });
  }
  function filterProduct(value) {
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value === "todos") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  // Função de busca
  function search() {
    let searchTerm = document.getElementById("pesquisa").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      let productName = card.querySelector(".product-name").innerText.toLowerCase();
      if (productName.includes(searchTerm)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  }
  
  // Evento para chamar a função de busca ao digitar
  document.getElementById("pesquisa").addEventListener("input", search);
  
  // Carregar os cartões de produtos ao carregar a página
  document.addEventListener("DOMContentLoaded", createProductCards);
  
  
  if (product.productName === "Calça Moletom Nike") {
    image.classList.add("alterar1");
  }