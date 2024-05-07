/// ATIVIDADE 23 ///

/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

let notacao = 7;
let matriz = new Array

for (let i = 0; i < notacao; i++) {
    let linha = Array(notacao).fill(0);
    matriz.push(linha);
}

let contador = 0

for (let j = 0; j < notacao; j++) {
    let linha = Array(notacao).fill(0);
    matriz.push(linha);
}


for (let i = 0; i < notacao; i++) {
    console.log(matriz[i].join(','));
}