/// ATIVIDADE 13 ///

/*
Escrever um algoritmo que leia 5 valores para uma variável N e,
para cada um deles, calcule e mostre a tabuada de 1 até N.

Mostre a tabuada na forma: 
1 x N = N 
2 x N = 2N 
3 x N = 3N 

*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let N1 = parseInt(prompt("Digite o primeiro número:"));
let N2 = parseInt(prompt("Digite o segundo número:"));
let N3 = parseInt(prompt("Digite o terceiro número:"));
let N4 = parseInt(prompt("Digite o quarto número:"));
let N5 = parseInt(prompt("Digite o quinto número:"));

console.log(`Aqui está a tabuada do ${N1}:`);
for (let i = 1; i <= N1; i++) {
    let operação = N1 * i;
    console.log(`${i} x ${N1} = ${operação}`);
}

console.log(`Aqui está a tabuada do ${N2}:`);
for (let i = 1; i <= N2; i++) {
    let operação = N2 * i;
    console.log(`${i} x ${N2} = ${operação}`);
}

console.log(`Aqui está a tabuada do ${N3}:`);
for (let i = 1; i <= N3; i++) {
    let operação = N3 * i;
    console.log(`${i} x ${N3} = ${operação}`);
}

console.log(`Aqui está a tabuada do ${N4}:`);
for (let i = 1; i <= N4; i++) {
    let operação = N4 * i;
    console.log(`${i} x ${N4} = ${operação}`);
}

console.log(`Aqui está a tabuada do ${N5}:`);
for (let i = 1; i <= N5; i++) {
    let operação = N5 * i;
    console.log(`${i} x ${N5} = ${operação}`);
}