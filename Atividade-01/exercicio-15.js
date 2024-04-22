/// ATIVIDADE 15 ///

/*
Fazer um algoritmos para receber um número decimal e o
peso de cada número até que o usuário digite o número 0.

Fazer a média ponderada desses números e pesos respectivos.
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let numero;
let peso;
let somaProdutos = 0;
let somaPesos = 0;

while (true) {
    numero = parseFloat(prompt("Informe um número (Nº 0 ENCERRA):"));

    if (numero === 0) {
        break;
    }

    peso = parseFloat(prompt("Informe o peso associado ao valor informado em %:"));
    peso = peso / 100;
    somaProdutos += numero * peso;
    somaPesos += peso;
}

if (somaPesos === 0) {
    console.log(`Nenhum número foi inserido.`);
} else {
    let mediaPonderada = somaProdutos / somaPesos;
    console.log(`A média ponderada dos números inseridos é: ${mediaPonderada.toFixed(2)}`);
}