/// ATIVIDADE 24 ///

/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha,
em cada posição, a quantidade de elementos negativos da linha correspondente de M.
*/

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const randomNumber = randomBetween(-10, 10);
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix;
}

const randomMatrix = generateRandomMatrix(6, 8);

console.log("Matriz Aleatória:");

for (let i = 0; i < randomMatrix.length; i++) {
    console.log(randomMatrix[i].join(' , '));
}

const C = new Array(randomMatrix.length).fill(0);

for (let i = 0; i < randomMatrix.length; i++) {
    for (let j = 0; j < randomMatrix[i].length; j++) {
        if (randomMatrix[i][j] < 0) {
            C[i]++;
        }
    }
}

// Exibindo o vetor C
console.log("");
console.log("Vetor C:", C);