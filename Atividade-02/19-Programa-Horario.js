/// ATIVIDADE 19 ///

/*
Escrever um programa para ler 5 horários.
Validar cada horário fornecendo através de repetição.Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

let compilado = [];
let horas = [];
let minutos = [];
let segundos = [];

function checkHoras(x) {
    let horasTemp = -1;
    while (horasTemp === -1) {
        horasTemp = parseInt(prompt(`Digite as horas do ${x + 1}º horário: `));
        if (horasTemp > 23 || horasTemp < 0 || isNaN(horasTemp)) {
            console.log('Erro: Informe uma hora que esteja entre 00 e 23 horas.');
            horasTemp = -1;
        } else {
            horas.push(horasTemp);
        }
    }
}

function checkMinutos(x) {
    let minutosTemp = -1;
    while (minutosTemp === -1) {
        minutosTemp = parseInt(prompt(`Digite os minutos do ${x + 1}º horário: `));
        if (minutosTemp > 59 || minutosTemp < 0 || isNaN(minutosTemp)) {
            console.log('Erro: Informe minutos que estejam entre 00 e 59.');
            minutosTemp = -1;
        } else {
            minutos.push(minutosTemp);
        }
    }
}

function checkSegundos(x) {
    let segundosTemp = -1;
    while (segundosTemp === -1) {
        segundosTemp = parseInt(prompt(`Digite os segundos do ${x + 1}º horário: `));
        if (segundosTemp > 59 || segundosTemp < 0 || isNaN(segundosTemp)) {
            console.log('Erro: Informe segundos que estejam entre 00 e 59.');
            segundosTemp = -1;
        } else {
            segundos.push(segundosTemp);
        }
    }
}

for (let i = 0; i < 5; i++) {
    checkHoras(i);
    checkMinutos(i);
    checkSegundos(i);
    console.log('');
    compilado.push([horas[i], minutos[i], segundos[i]]);
}

console.log('-----------------------------');

function zeroEsquerda(number) {
    return number.toString().padStart(2, '0');
}

for (let j = 0; j < compilado.length; j++) {
    console.log(`Horário ${j + 1}: ${zeroEsquerda(compilado[j][0])}:${zeroEsquerda(compilado[j][1])}:${zeroEsquerda(compilado[j][2])}`);
    console.log('');
}