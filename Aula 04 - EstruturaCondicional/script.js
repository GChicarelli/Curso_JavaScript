

//? ========== CONDICIONAIS ======================= ?//
//* if      -> Se
//* else    -> Senão
//* else if -> Senão se
//* switch  -> Escolha

let nome = prompt("Digite seu nome:");
console.log(`Olá, ${nome}!`);

/---------------------------------------------------/
// Exemplo 1: Verificar a temperatura

let temperatura = Number(prompt("Digite a temperatura atual:"));

if (temperatura < 20) {
    console.log("Está frio.");
} else {
    console.log("Está calor!");
}

// 2. Verificar nivel da bateria
let bateria = Number(prompt("Digite o nivel da bateria em (%):"))

if (bateria <= 20) {
    alert("📢 Bateria fraca!");
} else {
    alert("Bateria com boa carga.");
}

// 3. Sistema de acesso

let tipoUsuario = prompt("Digite o tipo de usuário (admin, cliente):");

if (tipoUsuario == "amin") {
    console.log("Acesso total ao sistema.");
} else if (tipoUsuario == "cliente") {
    console.log("Acesso limitado.");
} else {
    console.log("Tipo invalido!");
}

//4. Classificar qualidade de conxão de internet 
let velocidade = Number(prompt("Digite a velocidade da internet:"));

if (velocidade >= 100) {
    console.log("Internet rápida!");
} else if (velocidade >= 50) {
    console.log("Internet é média.");
} else {
    console.log("Internet lenta!");
}

//* Operadoress lógicos 
/*
AND -> && -> OPERADOR E
OR -> || -> OPERADOR OU
NOT -> ! -> NÃO (NEGAÇÃO)
*/

let operadorAnd = (5 > 3) && (2 < 4)
// 5 é maior que 3?
// 2 é menor que 4?
console.log(operadorAnd);

let opradorOu = (5 < 3) || (2 > 4);
console.log(operadorOu);

let opradorNao = !(5 > 3);
console.log(!operadorNao);


//5. Analizar volume itens
let quantidade = 50;
if (quantidade === 0) {
    console.log("Nenhum item selecionado");
} else if (quantidade < 5) {
    consoole.log("Poucos itens");
} else if (quantidade >= 5 && quantidade < 10) {
    console.log("Quantidade média itens");
} else {
    console.log("Muitos itens");
}


//* CONDICIONAL ANINHADA
//  Uma condicional dentro da outra 

const nota = 8;
if (nota >= 7) {
    if (nota === 10) {
        console.log("Aprovado com premiação");
    } else {
        console.log("Aprovado");
    }
} else {
    console.log("Reprovado");
}


//7. Adaptação de tela de dispositivo 
let dispositivo = prompt("Você está usando: celular, tablet ou computador?");

if (dispositivo == "celular" || dispositivo == "tablet") {
    console.log("Modo mobile foi ativado.");
} else if (dispositivo == "computador") {
    console.log("Modo desktop foi ativado")
} else {
    console.log("Dispositivo desconectado");
}


//8. SWITCH / CASE 
// Mudar tema do dispositivo 

let tema = prompt("Digite um tema: claro, escuro ou azul.");

switch (tema) {
    case "claro":
        console.log("Tema claro ativado.");
        brack;
    case "escuro":
        console.log("tema escuro ativado.");
        brack;
    case "Azul":
        console.log("Tema azul ativado.");
        brack;
    default:
        console.log("Tema invalido.");

}