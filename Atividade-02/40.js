/// ATIVIDADE 40 ///

/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto.
A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas.
Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial.
(Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
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

function gerarApostadores(apostadores, numerosCartela, min, max) {
    let apostas = [];
    for (let i = 0; i < apostadores; i++) {
        let cartela = gerarVetor(numerosCartela, min, max);
        apostas.push(cartela);
    }
    return apostas;
}

function ordenarNumeros(array) {
    return array.slice().sort((a, b) => a - b);
}

function arraysSaoIguais(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

function compararApostas(gabarito, apostas) {
    let gabaritoOrdenado = ordenarNumeros(gabarito);
    let ganhadores = [];

    for (let i = 0; i < apostas.length; i++) {
        let apostaOrdenada = ordenarNumeros(apostas[i]);

        if (arraysSaoIguais(gabaritoOrdenado, apostaOrdenada)) {
            ganhadores.push(i + 1);
        }
    }

    if (ganhadores.length > 0) {
        console.log(``);
        console.log(`Parabéns, você ganhou com a(s) cartela(s) ${ganhadores.join(', ')}!`);
    } else {
        console.log(``);
        console.log('Não houve ganhadores!');
    }
}

const gabaritoLoteria = gerarVetor(5, 1, 60);
const apostas = gerarApostadores(50, 5, 1, 60);

compararApostas(gabaritoLoteria, apostas);