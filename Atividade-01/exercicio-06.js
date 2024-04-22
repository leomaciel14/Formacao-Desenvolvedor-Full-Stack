/// ATIVIDADE 06 ///

/*
Ler três valores para os lados de um triângulo: A, B e C.
Verificar se os lados fornecidos formam realmente um triângulo.
Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt("Digite o lado A do triangulo:"));
let ladoB = parseFloat(prompt("Digite o lado B do triangulo:"));
let ladoC = parseFloat(prompt("Digite o lado C do triangulo:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA) {
        console.log(`PARABÉNS! Você tem um triângulo isósceles.`);
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        console.log(`PARABÉNS! Você tem um triângulo escaleno.`);
    } else if (ladoA == ladoB && ladoB == ladoC) {
        console.log(`PARABÉNS! Você tem um triângulo equilátero.`);
    }
} else {
    console.log(`Os lados fornecidos não formam um triângulo.`);
}