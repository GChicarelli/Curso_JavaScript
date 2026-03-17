/!--------- Atividades -----------!/


//! Atividade 1

let nome = "Giuliano";
let idade = 19;
let profissao = "Desenvolvedor";
let cidade = "São Bernardo do Campo";

console.log(`Meu nome é ${nome}, tenho ${idade} anos, sou ${profissao} e moro em ${cidade}`);


//! Atividade 2

let produto = "Carro";
let preco = 1000000;
let quantidade = 10;

console.log (`Comprei um ${produto}, existem ${quantidade} unidades no mundo, por R$${preco} cada.`);

//! Atividade 3

let valor1 = 10;
let valor2 = 20;

console.log (valor1 + valor2);
console.log (valor1 - valor2);
console.log (valor1 * valor2);
console.log (valor1 / valor2);

//! Atividade 4

let valor = 10;
let doce = "chocolate";
let derreteu = true;
let roubaram = null;
let quemRoubou;

console.log(typeof valor);
console.log(typeof doce);
console.log(typeof derreteu);
console.log(typeof roubaram);
console.log(typeof quemRoubou);

//! Atividade 5

let numero = "100";
// console.log(typeof (Number(numero)))

let numeroConvertido = Number(numero);
console.log(typeof numeroConvertido);
numeroConvertido = String(numero);
console.log(typeof numeroConvertido);


//! Desafio

let usuario = "Thomas";
let anos = 13;
let altura = 1.70;
let peso = 60;
let municipio = "São Bernardo do Campo";
let oficio = "Estudante";

console.log(`Cadastro do usuario
    Nome: ${usuario}
    Idade: ${anos}
    Altura: ${altura.toFixed(2)}m
    Peso: ${peso}kg
    Cidade: ${municipio}
    Profissão: ${oficio}`);
