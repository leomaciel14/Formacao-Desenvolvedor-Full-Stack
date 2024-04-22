/// ATIVIDADE 07 ///

/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze.
Escreva um algoritmo que leia o número de maçãs compradas,
calcule e escreva o valor total da compra. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let nMaças = parseInt(prompt("Quantas maças vocês quer comprar?"));
let valorMaçasUnidade = 0.30;

if (nMaças >= 12) {
    valorMaçasUnidade = 0.25;
}

let valorTotalCompra = nMaças * valorMaçasUnidade;
console.log(`O valor total da sua compra é R$ ${valorTotalCompra.toFixed(2)}`);