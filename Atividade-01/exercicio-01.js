/// ATIVIDADE 01 ///

/*
Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let celsius = prompt("Digite a temperatura em graus Celsius: ");
celsius = parseFloat(celsius);

if (!isNaN(celsius)) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log("A temperatura convertida em graus Fahrenheit é: " + fahrenheit.toFixed(2) + "°F");
} else {
    console.log("Por favor, digite um número válido para a temperatura.");
}
