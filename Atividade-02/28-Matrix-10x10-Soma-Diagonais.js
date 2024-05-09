/// ATIVIDADE 28 ///

/*
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(0, 10);
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

function somarDiagonalSuperiror(array) {
    const linhas = array.length;
    const colunas = array[0].length;

    let resultado = 0;
    for (let i = 0; i < linhas; i++) {
        for (let j = i + 1; j < colunas; j++) {
            resultado += array[i][j];
        }
    }
    return resultado;
}

function somarDiagonalInferior(array) {
    const linhas = array.length;
    const colunas = array[0].length;

    let resultado = 0;
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < i; j++) {
            resultado += array[i][j];
        }
    }
    return resultado;
}

const matrix = generateRandomMatrix(10, 10);
const somaSuperior = somarDiagonalSuperiror(matrix)
const somaInferior = somarDiagonalInferior(matrix)

console.log(`A soma dos elementos acima da diagonal principal é ${somaSuperior}.`)
console.log(`A soma dos elementos abaixo da diagonal principal é ${somaInferior}.`)