const produtos = [
  { id: 1, nome: "Teclado gamer", categoria: "Periféricos", preco: 120.9 , imagem: "imagens/Teclado gamer.png" },
  { id: 2, nome: "Mouse sem fio", categoria: "Periféricos", preco: 90.9 , imagem: "imagens/Mouse sem fio.png" },
  { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9, imagem: "imagens/Monitor 24 polegadas.png" },
  { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.9, imagem: "imagens/Headset USB.png"},
  { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.9, imagem: "imagens/Notebook.png" },
  { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9, imagem: "imagens/Webcam HD.png" },
  { id: 7, nome: "Teclado gamer", categoria: "Periféricos", preco: 120.9 , imagem: "imagens/Teclado gamer.png" },
  { id: 8, nome: "Mouse sem fio", categoria: "Periféricos", preco: 90.9 , imagem: "imagens/Mouse sem fio.png" },
  { id: 9, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9, imagem: "imagens/Monitor 24 polegadas.png" },
  { id: 10, nome: "Headset USB", categoria: "Áudio", preco: 149.9, imagem: "imagens/Headset USB.png" },
  { id: 11, nome: "Notebook", categoria: "Computadores", preco: 3299.9 , imagem: "imagens/Notebook.png" },
  { id: 12, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9 , imagem: "imagens/Webcam HD.png" },
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {
  let textoBusca = campoBusca.value.toLowerCase();

  let produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(textoBusca)
  );

  switch (ordenacao.value) {
    case "nome-az":
      produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nome-za":
      produtosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case "preco-menor":
      produtosFiltrados.sort((a, b) => a.preco - b.preco);
      break;
    case "preco-maior":
      produtosFiltrados.sort((a, b) => b.preco - a.preco);
      break;
  }

  listaProdutos.innerHTML = "";

  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML = "<p class='mensagem'>Nenhum produto encontrado</p>";
    return;
  }

  for (let i = 0; i < produtosFiltrados.length; i++) {
    let produto = produtosFiltrados[i];
    listaProdutos.innerHTML += `
      <div class="card">
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>`;
  }
}

campoBusca.addEventListener("input", mostrarProdutos);
ordenacao.addEventListener("change", mostrarProdutos);

// Eventos
campoBusca.addEventListener("input", () => {
  mostrarProdutos();
})

ordenacao.addEventListener("change", () => {
  mostrarProdutos();
})

mostrarProdutos();