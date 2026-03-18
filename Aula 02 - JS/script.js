// Variaveis
/*
const 
let 
var
*/

// const -> Quando um valor não pode mudar (+ seguro)
const idade = 19; // caixinha idade recebe  valor 30


// let -> Quando um valor pode mudar (+ utilizado)
let nome = "Giuliano"; 


// var -> Forma antiga de declarar vairaveis (evitar utilizar)
var cidade= "São Caetano do Sul";


// Imprimir os valores 

console.log(idade); // imprimir o valor 30
console.log(nome); // imprimir o valor "Giuliano"
console.log(cidade); // imprimir o valor "São Caetano do Sul"

//* INTERPOLAÇÃO
console.log(`Meu nome é ${nome}`);
console.log("Minha idade é " + idade + " anos.");


/!-------------------- TIPOS PRMITIVOS ---------------------!/


//* 1. String -> texto
let mensagem = "Olá, mundo!"; 
console.log(mensagem); 

//* 2. Number (numero -> armazena numeros inteiros ou decimais)
let quantidade = 10; // numero inteiro
let temperatura = 25.5; // numero decimal

//* 3. Boolean -> true/false (verdadeiro ou falso)
let estaCHovendo = true;
let temSol = false; 
console.log(typeof temSol); 

//* 4. Undefined -> valor não definido
let pedido; // a variavel endereco foi declarada, mas não recebeu um valor
console.log(typeof pedido); 

//* 5. Null - valor nulo, ou seja, uma variável que foi declarada e recebeu o valor nulo
let valorNulo = null;
console.log(valorNulo);
console.log(typeof valorNulo); // Imprime 'object'
// ↳ null é considerado um tipo de objeto em JavaScript

/---------------------------------------------------/

//? ========== CONVERSÃO DE TIPOS ================= ?//
//* Conversão implícita
console.log("5" + 3);
console.log("5" - 3);

//* Conversão explícita
// String para número
let numero = "42"; // Variável do tipo string
console.log(numero);
console.log(typeof numero); // Imprime 'string'

let numeroConvertido = Number(numero); // Convertendo a string para número
console.log(numeroConvertido);
console.log(typeof numeroConvertido); // Imprime 'number'

// Número para string
let num = 100;  // Variável do tipo number
console.log(num);
console.log(typeof num); // Imprime 'number'

let texto = String(num); // Convertendo o number para string
console.log(texto);
console.log(typeof texto); // Imprime 'string'

// Boolean para number
let trueConvertido = Number(true); // Convertendo o boolean para number
console.log(trueConvertido);
console.log(typeof trueConvertido); // Imprime 'number'

let falseConvertido = Number(false); // Convertendo o boolean para number
console.log(falseConvertido);
console.log(typeof falseConvertido); // Imprime 'number'

//? ========== OPERADORES RELACIONAIS ============= ?//
//* Servem para comparar valores e retornar um resultado booleano (true ou false)

/*
  ?  Operador   Descrição
  *  ==         Igual a (com conversão de tipo)
  *  ===        Estritamente igual a (sem conversão de tipo)
  *  !=         Diferente de (com conversão de tipo)
  *  !==        Estritamente diferente de (sem conversão de tipo)
  *  >          Maior que
  *  <          Menor que
  *  >=         Maior ou igual a
  *  <=         Menor ou igual a
  */

  // Exemplos 
  console.log(10 > 5); // true (verdadeiro)
  console.log(10 < 5); // false (falso)
  
  // Diferença entre == e ===
  console.log (5 == "5");  // ignora  tipo (true)
  console.log (5 === "5"); // verifica o tipo (false)

  // Operadores de matemática 
  // São usados para fazer cálculos - como soma, multiplicação, etc.
  /* 
   *  + soma 
   *  - subtração 
   *  * multiplicação 
   *  / divisão
   *  % resto da divisão
   *  ** exponenciação
  */

  //exemplos:
  let a = 10;
  let b = 5;

  console.log(a + b); // soma -> 15
  console.log(a - b); // subtração -> 5
  console.log(a * b); // multiplicação -> 50
  console.log(a / b); // divisão -> 2
  console.log(a % b); // resto da divisão -> 0
  console.log(a ** b); // exponenciação -> 100000

  