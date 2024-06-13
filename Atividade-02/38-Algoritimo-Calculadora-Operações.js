/// ATIVIDADE 38 ///

/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require('prompt-sync')();

function lerVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        let elemento = parseFloat(prompt(`Digite o elemento ${i + 1} do vetor:`));
        vetor.push(elemento);
    }
    return vetor;
}

function operarVetor(vetor, operacao) {
    switch (operacao) {
        case 1:
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log(`Soma dos elementos: ${soma}`);
            break;
        case 2:
            const produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log(`Produto dos elementos: ${produto}`);
            break;
        case 3:
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log(`Média dos elementos: ${media}`);
            break;
        case 4:
            const vetorOrdenado = [...vetor].sort((a, b) => a - b);
            console.log(`Vetor ordenado: ${vetorOrdenado}`);
            break;
        case 5:
            console.log(`Vetor: ${vetor}`);
            break;
        default:
            console.log(`Operação inválida.`);
    }
}

const tamanhoVetor = 5;
const vetor = lerVetor(tamanhoVetor);
const operacao = parseInt(prompt('Digite a operação (1- soma, 2- produto, 3- média, 4- ordenar, 5- mostrar):'));

operarVetor(vetor, operacao);
