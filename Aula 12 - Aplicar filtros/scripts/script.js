const produtos = [
  { id: 1, nome: "Teclado gamer", categoria: "Periféricos", preco: 120.9 },
  { id: 2, nome: "Mouse sem fio", categoria: "Periféricos", preco: 90.9 },
  { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9 },
  { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.9 },
  { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.9 },
  { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9 },
  { id: 7, nome: "Teclado gamer", categoria: "Periféricos", preco: 120.9 },
  { id: 8, nome: "Mouse sem fio", categoria: "Periféricos", preco: 90.9 },
  { id: 9, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9 },
  { id: 10, nome: "Headset USB", categoria: "Áudio", preco: 149.9 },
  { id: 11, nome: "Notebook", categoria: "Computadores", preco: 3299.9 },
  { id: 12, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9 },
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