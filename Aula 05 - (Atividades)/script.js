/---------- Atividades -----------/

//* Execicio 1 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//* Exercicio 22

let tabuada = prompt("Digite qual tabuada deseja: ");

for (let i = 1; i <= 10; i++) {
    console.log(i * tabuada);
}

//* Exercicio 3 

let naturais = Number(prompt("Digite um numero N (Números positivos e inteiros)"))

// let contador = 1;
let soma = 0;

while (contador <= naturais) {
    console.log("Repetindo...");
    console.log(contador);
    soma = soma + contador;
    contador++

}
console.log(`O resultado é igual a: ${soma}`);

/---------- Intermediarios ---------------/

//* Exercicio 1

let contador = 1;

while (contador <= 50) {
    if (contador % 2 == 0) {
        console.log("Repetindo...");
        console.log(`${contador}`)
    }
    contador++
}