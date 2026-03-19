//! Nivel facil

//* 1. Verificar a maioridade de idade 

let idade = prompt("Digite sua idade: ");

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}



//* 2. Verificar se o numero é positivo ou negativo

let numero = prompt("Digite um numero:");

if (numero < 0) {
    console.log("Numero negativo.");
} else {
    console.log("Numero positivo.")
}


//* 3. Aprovação em uma prova

let nota = prompt("Digite sua nota: ")

if (nota <= 10) {
    console.log("Você foi aprovado");
} else if (nota = 6) {
    cosnnole.log("Você está de recuperação.")
} else if (nota >= 0) {
    console.log("Você reprovou!");
} else {
    console.log("Valor invalido, reinicie a pagina e insira novamente o numero.")
}



//* 4. Verificar se um numero é positivo ou negatico

let Numero = prompt("Digite um numero");

if (Numero >= 0) {
    console.log("Seu numero é positivo!");
} else {
    console.log("Seu numero é negativo");
}


//* 5. Classificação por idade 

let Idade = prompt("Isira sua idade:");

if (Idade >= 0 && Idade <= 12) {
    console.log("Criança");
} else if (Idade >= 13 && Idade <= 18) {
    console.log("Adolescente");
} else if (Idade >= 18) {
    console.log("Adulto");
} else {
    console.log("Você ainda não nasceu!")
}

//! Nivel intermediario 

//* 1. Cauculadora simples 

let valor1 = prompt("Digite um numero:")
let operacao = prompt("Digite a operação ( + , - , * ou / ");
let valor2 = prompt("Digite o segundo numero:")

switch (operacao) {
    case "+":
        console.log(valor1 + valor2);
        break;
    case "-":
        console.log(valor1 - valor2);
        break;
    case "*":
        console.log(valor1 * valor2);
        break;
    case "/":
        console.log(valor1 / valor2);
        break;
    default:
        console.log("Comando invalido, reinicie a pagina e siga as instruções novamente!");
}

//* 2. Número impar ou par

let numero1 = prompt("Digite um numero: ");

if (numero1 % 2 === 0) {
    console.log("O numero é par.");
} else {
    console.log("O numero é impar.");
}

//* 3. Desconto em compra 

let compra = prompt("Digite o valor da compra:")
resultado = compra * 0.10;
desconto = compra - resultado;


if (compra >= 0 && compra <= 99) {
    console.log("Você não tem desconto.");
} else if (compra >= 100) {
    console.log(`Você teve um desconto de ${resultado}%, sua compra ficara R$${desconto} `);
} else {
    console.log("Valor não é valido!")
}



//* 4. Sistema de login simples 

let usuario = prompt("Usuário: ");
let senha = prompt("Digite sua senha: ")

if ( usuario == "admin"){
    console.log("Usuário correto!");
} else {
    console.log("Usuário incorreto ou não existe.")
}

if (senha == "1234"){
    console.log("Senha correta!")
} else {
    console.log("Senha incorreta!")
}




