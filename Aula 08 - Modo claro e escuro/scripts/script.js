const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let modoEscuroAtivo = false;

botao.addEventListener("click", () => {
    if (!modoEscuroAtivo) {
        modoEscuroAtivo = !modoEscuroAtivo;
        corpoPagina.style.backgroundColor = "hsl(0, 0%, 10%)";
        caixa.style.backgroundColor = "hsl(0, 0%, 20%)";
        titulo.style.color = "hsl(0, 0%, 100%)";
        texto.style.color = "hsl(0, 0%, 100%)";
        botao.style.color = "hsl(0, 0%, 100%)";

        botao.innerText="Modo para claro"
    }
    else {
        modoEscuroAtivo = !modoEscuroAtivo;
        corpoPagina.style.backgroundColor = "hsl(0, 0%, 90%)";
        caixa.style.backgroundColor = "hsl(0, 0%, 100%)";
        titulo.style.color = "hsl(0, 0%, 5%)";
        texto.style.color = "hsl(0, 0%, 5%)";
        botao.style.color = "hsl(0, 0%, 5%)";

        botao.innerText="Mude para escuro"
    }
});