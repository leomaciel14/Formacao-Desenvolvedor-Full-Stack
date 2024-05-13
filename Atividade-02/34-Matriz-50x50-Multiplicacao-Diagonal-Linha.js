/// ATIVIDADE 34 ///

/*
Faça um algoritmo que leia uma matriz 50 x 50 de números reais.
A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha.
Mostre a matriz após as multiplicações.
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

function multiplicaCadaElementoPeloPrincipal(array) {
    const linhas = array.length;
    const colunas = array[0].length;
    let matrizMultiplicada = [];

    // Pegar cada elemento principal
    for (let i = 0; i < linhas; i++) {
        let linhaMultiplicada = []
        const elementoPrincipal = array[i][i];

        // Pega todos os elementos da linha
        for (let j = 0; j < colunas; j++) {
            linhaMultiplicada.push(array[i][j] * elementoPrincipal);
        }
        matrizMultiplicada.push(linhaMultiplicada)
    }
    return matrizMultiplicada;
}

const matrixOriginal = generateRandomMatrix(50, 50, 1, 5);
const matrizMultiplicada = multiplicaCadaElementoPeloPrincipal(matrixOriginal)


console.log('Matriz Original:')
plotarMatrix(matrixOriginal)
console.log('')
console.log(`A matriz multiplicada por cada elemento da linha principal é:`)
plotarMatrix(matrizMultiplicada)