//? ========== MANIPULAÇÃO DE DOM ================= ?//
//* DOM - Document Object Model

//? ========== PRINCIPAIS MÉTODOS ================= ?//
/*
  ?  Método             Descrição
  *  getElementById     Selecionar um elemento pelo seu id
  *  querySelector      Selecionar o 1º elemento que corresponde a um seletor CSS
  *  querySelectorAll   Selecionar TODOS os elementos que correspondem a um seletor CSS
  */

//? getElementById
const titulo = document.getElementById("titulo");

//? querySelector
// Chamando por id (#)
const tituloId = document.querySelector("#titulo");
console.log(tituloId);

// Chamando por class (.)
const tituloClasse = document.querySelector(".paragrafo");
console.log(tituloClasse);

// Chamando por tag (tag)
const tituloTag = document.querySelector("h2");
console.log(tituloTag);

//? querySelectorAll
const elementos = document.querySelectorAll(".texto");
console.log(elementos);

// Percorrendo a lista
elementos.forEach((elemento) => {
    console.log(elemento.innerText);
});

//* Alterando elementos
// innerText - Troca o texto dentro da tag
const itens = document.querySelectorAll(".texto");
itens.forEach((item) => {
    item.innerText = "Alterado";
});

// innerHTML - Troca a tag
itens.forEach((item) => {
    item.innerHTML = "<h2>Item</h2>";
});

// style.color - Troca a cor do elemento
itens.forEach((item) => {
    item.style.color = "#006effff";
});

//? ========== EVENTOS COM JS ===================== ?//
// addEventListener
const botao = document.getElementById("btn");
botao.addEventListener("click", () => {
    alert("Você clicou!");
});

// input
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("input", () => {
    resultado.innerText = campo.value;
});

// keyup
campo.addEventListener("keyup", () => {
    resultado.innerText = campo.value;
    console.log("Tecla pressionada.");
});

// mouseover
const elemento = document.getElementById("troca-cor");
elemento.addEventListener("mouseover", () => {
    elemento.style.color = "";
    elemento.style.backgroundColor = "#ff6e00";
});

// mouseout
elemento.addEventListener("mouseout", () => {
    elemento.style.color = "#ff6e00";
    elemento.style.backgroundColor = "#331600";
});

// mousemove
document.addEventListener("mousemove", (evento) => {
    console.log("Posição X: ", evento.clientX, "Posição Y: ", evento.clientY);
});

// submit
const form = document.getElementById("form");
form.addEventListener("submit", (evento) => {
    // Impede o comportamento padrão
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    console.log("Nome: " + nome);
});


const novoElemento = document.createElement("p");
novoElemento.innerText = "Este é um novo elemento.";

const form = document.getElementById("form");
documentform.appendChild(novoElemento);


const botao = document.getElementById("form");
form.appendChild(novoElemento);

const botaoForm = document.createElement("button");
botaoform.innerText = "Excluir elemeno"
form.appendChild(botaoForm)

botaoForm.addEventListener("click", () => {
    novoElemento.remove();


const input = document.getElementById("input");
const botao = docuento.getElementById("add")
const lista = document.getElementById("lista")

botao.addEventListener("click", () => {
    const valor = input.value; 
    const li = document.createElement("li");
    li.innerText = valor;

    lista.appendChild(li);

    input.value = "";
})