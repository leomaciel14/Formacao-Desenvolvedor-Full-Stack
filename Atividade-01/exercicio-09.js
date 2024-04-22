/// ATIVIDADE 09 ///

/*
Escreva um algoritmo que leia o código de origem de um produto
e imprima a região do mesmo, conforme a tabela abaixo: 

1 = Sul
2 = Norte
3 = Leste
4 = Oeste
5 ou 6 = Nordeste
7,8 ou 9 = Sudeste
10 até 20 = Centro-Oeste
25 até 50 = Nordeste
Fora do intervalo = Produto importado
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código do produto:"));

switch (true) {
    case (codigo === 1):
        console.log(`O produto tem origem no Sul.`);
        break;
    case (codigo === 2):
        console.log(`O produto tem origem no Norte.`);
        break;
    case (codigo === 3):
        console.log(`O produto tem origem no Leste.`);
        break;
    case (codigo === 4):
        console.log(`O produto tem origem no Oeste.`);
        break;
    case (codigo === 5 || codigo === 6 || (codigo >= 25 && codigo <= 50)):
        console.log(`O produto tem origem no Nordeste.`);
        break;
    case (codigo >= 7 && codigo <= 9):
        console.log(`O produto tem origem no Sudeste.`);
        break;
    case (codigo >= 10 && codigo <= 20):
        console.log(`O produto tem origem no Centro-Oeste.`);
        break;
    default:
        console.log(`O produto é importado.`);
}