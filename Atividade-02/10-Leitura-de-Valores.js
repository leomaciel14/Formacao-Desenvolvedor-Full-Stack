/// ATIVIDADE 10 ///

/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números.
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();
let entradaUsuario = 0
let somatorioValores = 0
let menorValor = 100000000000000000n
let contadorEntradas = 0
let mediaValores = 0
let valoresPares = 0

function coletarValores (){
    entradaUsuario = 0;
    while (entradaUsuario === 0){
        entradaUsuario = parseFloat(prompt(`Informe o número a ser adicionado: `));
        if (isNaN(entradaUsuario) || entradaUsuario <= 0 || !Number.isFinite(entradaUsuario)){
            console.log('Insira um valor maior que 0.');
            entradaUsuario = 0;
        }
    }
    return entradaUsuario;
}

function calcularValores() {    
    // A) SOMATÓRIO
    somatorioValores += entradaUsuario;

    // B) MENOR VALOR
    if (entradaUsuario < menorValor){
        menorValor = entradaUsuario;
    }

    // C) MÉDIA
    if (entradaUsuario > 0){
        contadorEntradas++;
    }
    mediaValores = somatorioValores / contadorEntradas;

    // D) VALORES PARES
    if (entradaUsuario % 2 === 0){
        valoresPares++;
    }
}

function exibirResultado() {
    console.log('-----------------------------------------------------------');
    console.log('');
    console.log('RESULTADO:');
    console.log(`O somatório entre todos os valores é ${somatorioValores}.`);
    console.log('');
    console.log(`O menor valor entre todos os valores é ${menorValor}.`);
    console.log('');
    console.log(`A média entre todos os valores é ${(mediaValores).toFixed(2)}.`);
    console.log('');
    console.log(`E entre os números temos ${valoresPares} valores pares.`);
    console.log('');
    console.log('-----------------------------------------------------------');
}

let reiniciar = true;

do {
    if (reiniciar = true){
        let a = coletarValores();
        calcularValores(a);        
    }
    let operacao = prompt(`Deseja adicionar mais números (S/N)? `).toLocaleLowerCase();
    if (operacao === 'n') {
        exibirResultado();
        reiniciar = false;
        break;
    } else if (operacao === 's') {
        reiniciar = true;
    } else {
        console.log('Por favor, insira uma opção válida!')
    }
} while (reiniciar = true);