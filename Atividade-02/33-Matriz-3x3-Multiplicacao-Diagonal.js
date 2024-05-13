/// ATIVIDADE 33 ///

/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
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

function somaDiagonalPrincipal(array) {
    const linhas = array.length;

    let resultado = 0;
    for (let i = 0; i < linhas; i++) {
        resultado += array[i][i];
    }
    return resultado;
}

function mediaElementosForaDiagonal(array) {
    const linhas = array.length;
    const colunas = array[0].length;

    let resultado = 0;
    let contador = 0;
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (i !== j) {
                contador++;
                resultado += array[i][j];
            }
        }
    }
    resultado = resultado / contador;
    return resultado;
}

const matrixOriginal = generateRandomMatrix(3, 3, 1, 5);
const diagonalSomada = somaDiagonalPrincipal(matrixOriginal)
const mediaDiagonal = mediaElementosForaDiagonal(matrixOriginal)


console.log('Matriz Original:')
plotarMatrix(matrixOriginal)
console.log('')
console.log(`Os elementos da diagonal principal multiplicados pela média dos elementos segundários à diagonal é:`)
console.log((mediaDiagonal * diagonalSomada).toFixed(2))