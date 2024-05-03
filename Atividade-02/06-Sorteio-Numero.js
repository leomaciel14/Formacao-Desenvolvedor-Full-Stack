/// ATIVIDADE 06 ///

/*
Crie um jogo onde o computador vai sortear um número entre 1 e 5.
O jogador vai tentar descobrir qual foi o valor sorteado.
*/

const prompt = require('prompt-sync')();

console.log('--------------------------------\nVamos jogar um jogo!\n--------------------------------\n');
console.log('A máquina vai sortear um número entre 1 e 5.\nVocê precisa acertar chutando um palpite...\n');

let entradaUsuario = parseInt(prompt("Qual o seu palpite? "));
let entradaMaquina = Math.floor(Math.random() * 5) + 1

function comparacaoJogo() {
    let reiniciar = true;

    do {
        if (entradaUsuario === entradaMaquina) {
            console.log('VOCÊ ACERTOU!');
            console.log('')
            reiniciar = false;
        } else {
            console.log('ERROUU, TENTE NOVAMENTE.');
            console.log('');
            entradaUsuario = parseInt(prompt("Sua jogada: "));
            console.log('')
        }
    } while (reiniciar);
}

console.log('')
comparacaoJogo();