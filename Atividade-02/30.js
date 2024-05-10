/// ATIVIDADE 30 ///

/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5)
que contenham, respectivamente, as somas das linhas e das colunas de M.
Escrever a matriz e os vetores criados.
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

function somarLinhas(Array){
    let vetorLinha = [];
    for (let i = 0; i < Array.length; i++){
        let somaLinha = 0
        for (let j = 0; j < Array.length; j++){
            somaLinha += Array[i][j];
        }
        vetorLinha.push(somaLinha);
    }
    return vetorLinha;
}

function somarColunas(Array){
    let vetorColunas = [];
    for (let i = 0; i < Array[0].length; i++){
        let somaColuna = 0
        for (let j = 0; j < Array.length; j++){
            somaColuna += Array[j][i];
        }
        vetorColunas.push(somaColuna);
    }
    return vetorColunas;
}

const matrix = generateRandomMatrix(5,5);

console.log(matrix)
console.log(`Vetor SL é ${somarLinhas(matrix)}`)
console.log(`Vetor SC é ${somarColunas(matrix)}`)