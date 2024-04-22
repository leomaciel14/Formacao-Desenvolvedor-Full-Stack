/// ATIVIDADE 02 ///

/*
Escreva um algoritmo para ler o número de eleitores de
um município, o número de votos brancos, nulos e válidos.

Calcular e escrever o percentual que cada um representa em
relação ao total de eleitores. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let nTotal = parseInt(prompt("Digite a quantidade total de eleitores: "));
let nBranco = parseInt(prompt("Digite a quantidade total de votos brancos: "));
let nNulo = parseInt(prompt("Digite a quantidade total de votos nulos: "));
let nValido = parseInt(prompt("Digite a quantidade total de votos válidos: "));

if (nBranco + nNulo + nValido > nTotal) {
    console.log("A soma dos votos brancos, nulos e válidos não pode exceder o total de eleitores.");
} else {
    let percentualBranco = (nBranco / nTotal * 100).toFixed(2);
    let percentualNulo = (nNulo / nTotal * 100).toFixed(2);
    let percentualValido = (nValido / nTotal * 100).toFixed(2);

    console.log(`O percentual de votos brancos é ${percentualBranco}%, de votos nulos é ${percentualNulo}%, e de votos válidos é ${percentualValido}%.`);
}