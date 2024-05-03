/// ATIVIDADE 04 ///

/*
Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

let retaA = parseFloat(prompt("Insira um valor referente ao segmento da reta A: "));
let retaB = parseFloat(prompt("Insira um valor referente ao segmento da reta B: "));
let retaC = parseFloat(prompt("Insira um valor referente ao segmento da reta C: "));

if (retaA < retaB + retaC && retaB < retaA + retaC && retaC < retaA + retaB) {
    console.log(`PARABÉNS! Você tem um triângulo.`);
} else {
    console.log(`As retas fornecidas não formam um triângulo.`);
}