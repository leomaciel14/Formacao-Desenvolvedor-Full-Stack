/// ATIVIDADE 29 ///

/*
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.

*/

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(1, 3);
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix;
}

function plotarMatrix(Array){
    if (!Array || Array.length === 0) {
        console.log("Impossível plotar a matriz: Array inválido.");
        return;
    }

    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i].join(' , '));
    }
}

function somarLinha(Array,linha){
    let somaLinha = 0
    for(let i = 0; i < Array.length; i++){
        somaLinha += Array[linha-1][i];
    }
    return somaLinha;
}

function somarColuna(Array,coluna){
    let somaColuna = 0
    for(let i = 0; i < Array[coluna].length; i++){
        somaColuna += Array[i][coluna-1];
    }
    return somaColuna;
}

function somarDiagonalPrincipal(array) {
    const linhas = array.length;
    const colunas = array[0].length;

    let resultado = 0;
    for (let i = 0; i < linhas; i++) {
        resultado += array[i][i];
    }
    return resultado;
}

function somarTodosElementos(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            resultado += array[i][j]
        }
    }
    return resultado;
}

const matrix = generateRandomMatrix(5,5);

console.log(matrix)
console.log(`A soma dos elementos na linha 4 é ${somarLinha(matrix, 4)}.`)
console.log(`A soma dos elementos na coluna 2 é ${somarColuna(matrix, 2)}.`)
console.log(`A soma dos elementos da diagonal principal é ${somarDiagonalPrincipal(matrix)}.`)
console.log(`A soma de todos os elementos da matriz é ${somarTodosElementos(matrix)}.`)