/// ATIVIDADE 08 ///

/*
Escreva um algoritmo para ler 2 valores 
(considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let valorA = parseFloat(prompt("Digite o valor A:"));
let valorB = parseFloat(prompt("Digite o valor B:"));

if (valorA < valorB) {
    console.log(`Com os valores apresentados: ${valorA} vem primeiro, e em seguida ${valorB}.`);
} else if (valorB < valorA) {
    console.log(`Com os valores apresentados: ${valorB} vem primeiro, e em seguida ${valorA}.`);
} else {
    console.log("Os valores apresentados são iguais, portanto o valor não interfere na ordem.");
}