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

const coracaoVazio = document.getElementById("CoracaoVazio");
let curtida = false;

coracaoVazio.addEventListener("click", () => {
    if (!curtida){
        curtida = !curtida
        coracaoVazio.innerHTML='<img src="img/CoracaoVazio.png" alt="Coração Vazio">';
    } else {
        curtida = !curtida
        coracaoVazio.innerHTML='<img src="img/Coracao.png" alt="Coração">';
    }
});




const login = document.getElementById("CoracaoVazio");
let submit = false;

submit.addEventListener("click", () => {
    if("text" == "admin" && "password" == "1234"){
        submit = true;
    } else {
        submit = false;
    }

});






// let usuario = prompt("Usuário: ");
// let senha = prompt("Digite sua senha: ")

// if ( usuario == "admin"){
//     console.log("Usuário correto!");
// } else {
//     console.log("Usuário incorreto ou não existe.")
// }

// if (senha == "1234"){
//     console.log("Senha correta!")
// } else {
//     console.log("Senha incorreta!")
// }