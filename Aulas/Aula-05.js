// Exercício 1: Par ou ímpar

/*
const { parse } = require('path');

const prompt = require('prompt-sync')();

let numero = prompt('Digite um número: ');

if (numero%2 == 0)
    console.log("É par");
else
    console.log("É ímpar");
*/


// Exercício 2: Maior de dois números

/*
const prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Insira o primeiro número: "));
let n2 = parseInt(prompt("Insira o segundo número: "));

if (n1 > n2) {
    console.log("O primeiro número é maior.");
} else if (n2 > n1) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os números são iguais.");
}
*/

// Exercício 3: Triângulo

/*
const prompt = require('prompt-sync')();
let lado1 = parseInt(prompt("Insira o comprimeiro do primeiro lado: "));
let lado2 = parseInt(prompt("Insira o comprimeiro do segundo lado: "));
let lado3 = parseInt(prompt("Insira o comprimeiro do terceiro lado: "));

if(lado1 + lado2 > lado3 && lado1 +lado3 > lado2 && lado2 + lado3 > lado1){
    console.log("É possível formar um triângulo com essas medidas.")
    } else {
        console.log("Não é possível formar um triângulo.")
    }
*/


// Exercício 4: Calculadora
/*
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Insira o primeiro número: "));
let n2 = parseInt(prompt("Insira o segundo número: "));
let operador = prompt("Qual tipo de conta você quer fazer? (+, -, /, *): ");

let resultado;

if (operador === '+') {
    resultado = n1 + n2;
} else if (operador === '-') {
    resultado = n1 - n2;
} else if (operador === '*') {
    resultado = n1 * n2;
} else if (operador === '/') {
    if (n2 !== 0) {
        resultado = n1 / n2;
    } else {
        console.log("Erro: Divisão por zero.");
        resultado = undefined;
    }
} else {
    console.log("Operação Inválida");
}

if (resultado !== undefined) {
    console.log("Resultado: " + resultado);
}
*/


// Exercício 5: Swith Case
/*
const prompt = require('prompt-sync')();

let dia = parseInt(prompt("Insira um número do dia da semana:"));

let nomeDia;

switch(dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
    nomeDia = "Segunda";
        break;
    case 3:
        nomeDia = "Terça";
        break;
    case 4:
    nomeDia = "Quarta";
        break;
    case 5:
        nomeDia = "Quinta";
        break;
    case 6:
    nomeDia = "Sexta";
        break;
    case 7:
    nomeDia = "Sábado";
        break;
}

console.log("O dia é:", nomeDia);

*/



// Exercício 6: Calculadora Swith Case
/*
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Insira o primeiro número: "));
let n2 = parseInt(prompt("Insira o segundo número: "));
let operador = prompt("Qual tipo de conta você quer fazer? (+, -, /, *): ");
let resultado;

switch(operador) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        if (n2 !== 0) {
            resultado = n1 / n2;
        } else {
            console.log("Erro: Divisão por zero.");
            resultado = undefined; // Garantir que o resultado é marcado como undefined em caso de divisão por zero
        }
        break;
    default:
        console.log("Operação Inválida");
        resultado = undefined; // Caso o operador não seja reconhecido, resultado também é marcado como undefined
        break;
}

if (resultado !== undefined) {
    console.log("O resultado é:", resultado);
} else {
    console.log("Não foi possível calcular o resultado devido a uma operação inválida ou divisão por zero.");
}

let soma = 10;
for( i = 10; i >=1; i-- ){
    console.log(i)
}
*/



// Imprimir os múltipos de 5 menores que 100
/*
let i = 0;

while (i < 100) {
    console.log("O contador é:", i);
    i+=5;
}

console.log("Loop concluído!");
*/

// Pedir ao usuário para adivinhar um número entre 1 a 10

const numeroCorreto = Math.floor((Math.random() * 10))
console.log(numeroCorreto)
let tentativa