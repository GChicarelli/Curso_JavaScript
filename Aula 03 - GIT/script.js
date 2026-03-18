let nome = prompt("Digite seu nome:");
let lanche = prompt("Deseja X-Tudo ou um X-Bacon?");
let quantidade = prompt("Quantos deseja?");

if(lanche == "X-Tudo") preco = 25.00;
else preco = 30.00;

let total = preco * quantidade;

console.log(`====Flor do amazonas====
    Nome de: ${nome}
    Preço unitario: ${preco}
    Quantidade: ${quantidade}
    Total da compra: ${total.toFixed(2)}
    Pedido realizado com sucesso!
    Obrigado pela prefêrencia ❤️`);
    


