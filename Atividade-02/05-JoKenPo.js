/// ATIVIDADE 05 ///

/*
Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require('prompt-sync')();

console.log('--------------------------------\nVamos jogar Pedra-Papel-Tesoura!\n--------------------------------\n');
console.log('Para jogar, digite o número referente à sua jogada:\n1 = Pedra || 2 = Papel || 3 = Tesoura\n');

let entradaUsuario = parseInt(prompt(""));
let entradaMaquina = Math.floor(Math.random() * 3) + 1

let jogadas = ['Pedra', 'Papel', 'Tesoura'];
let jogadaUsuario = jogadas[entradaUsuario - 1];
let jogadaMaquina = jogadas[entradaMaquina - 1];

console.log('')
console.log('--------------------------------------------');
console.log(`Você jogou ${jogadaUsuario} e a máquina jogou ${jogadaMaquina}.`);
console.log('--------------------------------------------');
console.log('')

function comparacaoJogo(entradaUsuario, entradaMaquina) {
    if (entradaUsuario === entradaMaquina) {
        return 1;
    } else if (
        (entradaUsuario === 1 && entradaMaquina === 3) ||
        (entradaUsuario === 2 && entradaMaquina === 1) ||
        (entradaUsuario === 3 && entradaMaquina === 2)
    ) {
        return 3;
    } else {
        return 2;
    }
}

switch (comparacaoJogo(entradaUsuario, entradaMaquina)) {
    case 1:
        console.log('EMPATE!');
        break;
    case 2:
        console.log('VOCÊ PERDEU!');
        break;
    case 3:
        console.log('VOCÊ GANHOU!');
        break;
}

console.log('')
comparacaoJogo();