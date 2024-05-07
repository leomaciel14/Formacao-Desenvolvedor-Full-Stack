/// ATIVIDADE 08 ///

/*
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos.
O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require('prompt-sync')();

let diasNaSemana = parseFloat(prompt("Quantos dias na semana você faz atividade física? "));
let horasNoDia = parseFloat(prompt("E por quantas horas no dia você se exercita? "));
let totalHorasMes = diasNaSemana * horasNoDia * 4;

let portoPorHora = 0

if (totalHorasMes <= 10) {
    pontosPorHora = 2;
} else if (totalHorasMes <= 20) {
    pontosPorHora = 5;
} else {
    pontosPorHora = 10;
}

let totalPontos = totalHorasMes * pontosPorHora;
let valorDinheiro = totalPontos * 0.05;

console.log(`Você treinou por ${totalHorasMes} horas neste mês.`);
console.log(`Seu saldo de pontos é ${totalPontos}, e você vai receber R$ ${valorDinheiro.toFixed(2)} como prêmio.`);