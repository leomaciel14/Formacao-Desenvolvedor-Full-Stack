/// ATIVIDADE 36 ///

/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva.
Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições.
Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas.
Escreva o número do apostador e o número de acertos.
Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
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

function gerarApostadores(apostadores, numerosCartela, min, max) {
    let apostas = [];
    for (let i = 0; i < apostadores; i++) {
        let cartela = gerarVetor(numerosCartela, min, max);
        apostas.push(cartela);
    }
    return apostas;
}

function compararApostas(gabarito, apostas) {
    let ganhadores = [];
    let numeroAposta = 0

    for (let i = 0; i < apostas.length; i++) {
        let contador = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (gabarito[j] === apostas[i][j]) {
                contador++;
            }
        }
        numeroAposta++
        console.log(`O apostador ${numeroAposta} teve ${contador} acertos.`)

        if (contador === gabarito.length) {
            ganhadores.push(i + 1);
        }
    }

    if (ganhadores.length > 0) {
        console.log(``);
        console.log(`Parabéns, você ganhou com a cartela ${ganhadores.join(', ')}!`);
    } else {
        console.log(``);
        console.log('Não houve ganhadores!');
    }
}

const gabaritoLoteria = gerarVetor(13, 1, 2);
const apostas = gerarApostadores(100, 13, 1, 2);

compararApostas(gabaritoLoteria, apostas)