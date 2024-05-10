/// ATIVIDADE 31 ///

/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
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

function plotarMatrix(Array){
    if (!Array || Array.length === 0) {
        console.log("Impossível plotar a matriz: Array inválido.");
        return;
    }

    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i].join(' , '));
    }
}

function compararMatrizes(Array, vetor){
    let vetorX = [];
    for (let i = 0; i < Array.length; i++){
        for (let j = 0; j < Array[i].length; j++){
            if (vetor !== Array[i][j]){
                vetorX.push(Array[i][j])
            }
        }
    }

    const tamanhoVetor = Math.ceil(Math.sqrt(vetorX.length));
    const matriX = [];

    for (let i = 0; i < vetorX.length; i += tamanhoVetor){
        matriX.push(vetorX.slice(i,i+tamanhoVetor));
    }
    
    return matriX
}

const matrixV = generateRandomMatrix(30,30,0,2);
const A = randomBetween(0,2);
const matriX = compararMatrizes(matrixV, A)

plotarMatrix(matrixV)
console.log('')
console.log(A)
console.log('')
plotarMatrix(matriX)