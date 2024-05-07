/// ATIVIDADE 15 ///

/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/

const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número inteiro: `));
    numeros.push(numero);
}

let pares = [];
let indices = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
        indices.push(i);
    }
}

console.log("Números pares digitados:", pares);
console.log("Posições dos números pares dentro do Vetor:", indices);