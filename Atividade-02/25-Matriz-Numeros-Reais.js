/// ATIVIDADE 25 ///

/*
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais
e mostre a soma de cada coluna separadamente.
*/

function randomBetween(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(-1000, 1000);
            row.push(randomNumber.toFixed(2));
        }
        matrix.push(row);
    }
    return matrix;
}

const randomMatrix = generateRandomMatrix(15, 20);

for (let col = 0; col < randomMatrix[0].length; col++) {
    let somaColuna = 0

    for (let lin = 0; lin < randomMatrix.length; lin++) {
        const elemento = randomMatrix[lin][col];
        somaColuna += parseFloat(elemento);
    }
    console.log(`Soma da coluna ${col + 1} é ${(somaColuna).toFixed(2)}`)
}