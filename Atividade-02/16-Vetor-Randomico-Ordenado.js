/// ATIVIDADE 16 ///

/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let numeros = [];

for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

let original = numeros.slice();


function trocar(a, b) {
    let temp = numeros[a];
    numeros[a] = numeros[b];
    numeros[b] = temp;
}

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            trocar(j, j + 1);
        }
    }
}

console.log("Array original:", original);
console.log("Array ordenada em ordem crescente:", numeros);