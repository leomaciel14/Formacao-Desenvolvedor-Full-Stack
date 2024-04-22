/// ATIVIDADE 11 ///

/*
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros.
Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido
é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um
valor NULO ou NEGATIVO. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let numeroValido = true;

while (numeroValido) {
    let numero = parseInt(prompt("Digite o seu número:"));

    if (isNaN(numero) || numero <= 0) {
        console.log("Você digitou um número inválido. O programa foi encerrado.");
        numeroValido = false;
    } else {
        if (numero % 2 === 0) {
            console.log("O número é par.");
        } else {
            console.log("O número é ímpar.");
        }
    }
}