/// ATIVIDADE 32 ///

/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos
de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha.
Escrever a matriz lida e a modificada
*/

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateRandomMatrix(rows, cols, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(min, max);
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix;
}

function plotarMatrix(Array) {
    if (!Array || Array.length === 0) {
        console.log("Impossível plotar a matriz: Array inválido.");
        return;
    }

    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i].join(' , '));
    }
}

function dividirMatrizModulo(Array) {
    let matrizDividida = [];

    for (let i = 0; i < Array.length; i++) {
        let maiorNumero = Array[i][0];

        for (let j = 1; j < Array[i].length; j++) {
            if (Math.abs(Array[i][j]) > Math.abs(maiorNumero)) {
                maiorNumero = Array[i][j];
            }
        }

        let linhaDividida = [];

        for (let j = 0; j < Array[i].length; j++) {
            linhaDividida.push(Array[i][j] / maiorNumero);
        }
        matrizDividida.push(linhaDividida);
    }
    return matrizDividida;
}

const matrixOriginal = generateRandomMatrix(12, 13, 1, 5);
const matrixDividida = dividirMatrizModulo(matrixOriginal)


console.log('Matriz Original:')
plotarMatrix(matrixOriginal)
console.log('')
console.log('Matriz Dividida pelo maior Modulo da Linha:')
plotarMatrix(matrixDividida)