/// ATIVIDADE 11 ///

/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética),
mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')();

let a1 = parseFloat(prompt("Informe o primeiro termo da PA: "));
let r = parseFloat(prompt("Informe a razão da PA: "));
let n2 = 0;
let soma = 0;

for (let i = 0; i < 10; i++){
    console.log(`Termo ${(i+1)}: ${a1}`)
    n2 = a1 + r
    soma += a1
    a1 = n2
}

console.log(``)
console.log(`A soma total da PA é ${soma}.`)