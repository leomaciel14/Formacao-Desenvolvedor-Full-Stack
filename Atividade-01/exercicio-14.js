/// ATIVIDADE 14 ///

/*
Fazer um algoritmo para receber números decimais até que
o usuário digite 0 e fazer a média aritmética desses números. 
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let numero;
let soma = 0;
let quantidadeNumeros = 0;

while (true) {
    numero = parseFloat(prompt("Informe um número (Nº 0 ENCERRA):"));

    if (numero === 0) {
        break;
    }

    soma += numero;
    quantidadeNumeros++;
}

if (quantidadeNumeros === 0) {
    console.log(`Nenhum número foi inserido.`);
} else {
    let media = soma / quantidadeNumeros;
    console.log(`A média dos números inseridos é: ${media.toFixed(2)}`);
}