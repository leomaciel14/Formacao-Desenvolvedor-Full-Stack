/// ATIVIDADE 27 ///

/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A.
Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores
da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.
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

function multiplicarMatrixPorA(Array, MultiplicadorA){
    const resultado = [];    
    for(let i = 0; i < Array.length; i++){
        resultado[i] = [];
        for (let j = 0; j < Array[i].length; j++){
            resultado[i][j] = Array[i][j] * MultiplicadorA;
        }
    }
    return resultado;
}

function matrizParaVetor(matrix){
    const vetor = []
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            vetor.push(matrix[i][j])
        }
    }
    return vetor;
}

const matrixA = generateRandomMatrix(6, 6);
const valorA = Math.floor((Math.random() * 10)+1)

let matrixMultiplicada = multiplicarMatrixPorA(matrixA,valorA)
let matrixVetor = matrizParaVetor(matrixMultiplicada)

console.log(matrixVetor)