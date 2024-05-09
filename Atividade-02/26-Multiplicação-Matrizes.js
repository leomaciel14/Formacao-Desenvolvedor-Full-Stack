/// ATIVIDADE 26 ///

/*
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5],
calcular a matriz produto P[1..3,1..5].
*/

function multiplyMatrix(matrixA, matrixB){
    const linhasA = matrixA.length;
    const colunasA = matrixA[0].length;
    const linhasB = matrixB.length;
    const colunasB = matrixB[0].length;
    const resultado = [];

    for(let i = 0; i < linhasA; i++){
        resultado[i] = [];
        for (let j = 0; j < colunasB; j++){
            let soma = 0;
            for (let k = 0; k < colunasA; k++){
                soma += matrixA[i][k] * matrixB[k][j]
            }
            resultado[i][j] = soma;
        }
    }
    
    return resultado;
}

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(0, 10);
            row.push(randomNumber.toFixed(2));
        }
        matrix.push(row);
    }
    return matrix;
}

const matrixA = generateRandomMatrix(1, 2);
const matrixB = generateRandomMatrix(1, 2);

const matrizResultado = multiplyMatrix(matrixA, matrixB);

function plotarMatrix(Array){
    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i].join(' , '));
    }
}

plotarMatrix(matrizResultado)

