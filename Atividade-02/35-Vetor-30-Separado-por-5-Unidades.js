/// ATIVIDADE 35 ///

/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares.
O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores.
Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function gerarVetor(quantidade, min, max) {
    let vetor = [];
    for (let i = 0; i < quantidade; i++) {
        const randomNumber = randomBetween(min, max);
        vetor.push(randomNumber);
    }
    return vetor;
}

function separarParesImpares(array) {
    const unidades = array.length;
    let vetoresPares = []
    let vetoresImpares = []
    for (let i = 0; i < unidades; i++) {
        if (array[i] % 2 == 0) {
            vetoresPares.push(array[i])
        } else {
            vetoresImpares.push(array[i])
        }
    }
    return { vetoresPares, vetoresImpares };
}

function imprimirSeparado(array, tamanhoPartes) {
    const partes = [];
    let novaParte = [];

    for (let i = 0; i < array.length; i++) {
        novaParte.push(array[i]);
        if (novaParte.length === tamanhoPartes){
            partes.push(novaParte);
            novaParte = [];
        }
    }

    if (novaParte.length > 0) {
        partes.push(novaParte);
    }
    
    return partes;
}

const vetorNumeros = gerarVetor(30, 1, 5);
const vetorSeparados = separarParesImpares(vetorNumeros)

const vPares = vetorSeparados.vetoresPares;
const vImpares = vetorSeparados.vetoresImpares;

const aPares = imprimirSeparado(vPares,5);
const aImpares = imprimirSeparado(vImpares,5);

console.log("Vetores Pares:");
for (let i = 0; i < aPares.length; i++) {
    console.log(aPares[i]);
}

console.log("");

console.log("Vetores Ímpares:");
for (let i = 0; i < aImpares.length; i++) {
    console.log(aImpares[i]);
}