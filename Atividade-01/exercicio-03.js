/// ATIVIDADE 03 ///

/*
Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro; 
● Triplique o valor do segundo inteiro; 
● Modifique o valor do terceiro inteiro para 12% do valor original; 
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro inteiro:"));
let num2 = parseInt(prompt("Digite o segundo inteiro:"));
let num3 = parseInt(prompt("Digite o terceiro inteiro:"));
let num4 = parseInt(prompt("Digite o quarto inteiro:"));

num4 = num1 + num2 + num3;
num1 += 25;
num2 *= 3;
num3 = num3 * 0.12;

console.log("O primeiro inteiro modificado é: " + num1);
console.log("O segundo inteiro modificado é: " + num2);
console.log("O terceiro inteiro modificado é: " + num3.toFixed(2));
console.log("O quarto inteiro agora armazena a soma dos valores originais dos primeiros três inteiros: " + num4);