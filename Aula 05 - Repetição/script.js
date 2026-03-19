/! ----- Estrutura de repetição ------!/

// Permite executar um bloco de código várias vezes 
// Com base em uma condição 

//* tipos:
/*
FOR 
WHILE 
DO WHILE 
FOREACH 
*/

// FOR -> Usamos quando sabemos quantas vezes o código vai se repetir.


//? FOR 
/* 
let i = 1 -> criamos uma variavel e chamamos ela de "i"
essa variavel vai servir como estado inicial da estrutura de repetição
conforme for repetindo, ela vai aumentando o valor 

i <= 5 -> condição: essa condição vai definir o limite de repetições.
significa = "enquanto o valor de `i` for menor que ou igual a 5..."

i++ -> iterador: nesse caso, quando usamos o ++, quer dizer que 
estamos acrecentando +1 dentro do 1 

i++ é a mesma coisa que i = i +1 
*/


for (let i = 1; i <= 5; i++) {
    console.log("oi!!")
}


//? WHILE 

// WHILE -> executa o bloco de código enquanto uma condição for verdadeira.

let contador = 1;

while (contador <= 3) {
    console.log("Repetindo....");
    console.log(contador);
    contador++ // contador = contador + 1
}

/*
contador é menor ou igual a 3? verdadeiro 
imprime e faz o contador = contador + 1
contador = 1 + 1 -> contador agora vale 2

contador finaliza quando o contador = 3 
finaliza 
*/

//? DO WHILE 

/* 
DO WHILE -> executa pelo menos uma vez antes da condição
executa, depois pergunta 
*/

let numero = 5;

do {
    console.log("Executou pelo menos uma vez");
}
while (numero < 3);

// ----------------------------------------------------------------------------------// 

while (numero < 3) {
    console.log("Executou aqui");
    numero++;
}


// a diferença entre os dois é que um executa antes de perguntar e o outro pergunta primeiro.


//? FOREACH 

/*
Usado para quando temos uma lista de elementos e queremos percorrer os elementos dessa lista
lista (array)
*/

let nomes = ["Maria Eduarda", "Kauê", "Guilherme"];

// forEach - para cada

nomes.forEach(nome => {
    console.log("Nome: ", nome);
})

// pega a lista de nomes e para cada nome, imprime ele


//* exemplos

//* Exemplo 1: Sistema de intervalo definido pelo usuário
let inicio = Number(prompt(`Digite o número inicial:`));
let fim = Number(prompt(`Digite o número final:`));

for (let i = inicio; i <= fim; i++) {
  console.log(i);
}

/---------------------------------------------------/

//* Exemplo 2: While com condição para sair do sistema
let valor = "";

while (valor != "sair") {
  valor = String(
    prompt(`Digite um valor (ou "sair" para encerrar):`),
  ).toLowerCase();
  if (valor != "sair") {
    console.log(`Você digitou: ${valor}`);
  } else {
    console.log(`Encerrando o sistema...`);
  }
}

/---------------------------------------------------/

//* Exemplo 3: Contador com regra
let limite = Number(prompt(`Mostrar número maiores que...`));

for (let i = 0; i <= 10; i++) {
  if (i > limite) {
    console.log(i);
  }
}

/---------------------------------------------------/

//* Exemplo 4: Precorrer um array usando FOR

let cor = ["Vermelhor", "Azul", "Verde",  "Amarelo", "Roxo"]; 

for (let i = 0; i < cor.length; i++) {
    console.log(`Posição da cor ${i} - ${cor[i]}`);
}

/----------------------------------------------------/

//* Exemplo 5: Condição dentro do foreach
let Numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numero.forEach((num) => {
  if(num % 2 == 0) {
    console.log(`Número par: ${num}`);
  } else {
    console.log(`Número ímpar: ${num}`);
  }
});
