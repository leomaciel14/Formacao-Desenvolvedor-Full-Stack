/// ATIVIDADE 14 ///

/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

function inverterArray(array) {
    let invertida = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertida.push(array[i]);
    }
    return invertida;
}

let nomes = ['Juliana', 'Leonardo', 'Rafael', 'Jucelino', 'Juvenal', 'Clementina', 'Maria'];
let arrayInvertida = inverterArray(nomes);
console.log("Array original:", nomes);
console.log("Array invertida:", arrayInvertida);