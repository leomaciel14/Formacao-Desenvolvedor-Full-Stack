/// ATIVIDADE 45 ///

/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

let frutas = [
    "maçã",
    "laranja",
    "banana",
    "maçã",
    "uva",
    "pera",
    "laranja",
    "maçã",
    "morango",
    "banana"
];

function contar(vetor) {
    let objeto = {};

    for (let i = 0; i < vetor.length; i++) {
        let chave = vetor[i];
        if (objeto[chave]) {
            objeto[chave] += 1;
        } else {
            objeto[chave] = 1;
        }
    }

    return objeto;
}

let listaFrutas = contar(frutas);
console.log(listaFrutas);