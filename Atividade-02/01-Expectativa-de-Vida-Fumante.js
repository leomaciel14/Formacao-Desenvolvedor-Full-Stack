/// ATIVIDADE 01 ///

/*
Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();

let cigarrosPorDia = parseInt(prompt("Por favor, digite um número referente à quantidade de cigarros fumados por dia: "), 10);
let anosFumando = parseInt(prompt("Agora, digite um número referente a quantos anos você fumou: "), 10);

let diasFumando = anosFumando * 365;
let totalCigarros = diasFumando * cigarrosPorDia;
let diasDeVidaPerdidos = (((totalCigarros * 10) / 60) / 24).toFixed(2);

console.log(``);
console.log(`------------------------------`);
console.log(`Em ${diasFumando} dias fumando você tragou ${totalCigarros} cigarros e perdeu ${diasDeVidaPerdidos} dias de vida.`);
console.log(`------------------------------`);
console.log(``);
console.log(`------------ATENÇÃO------------`);
console.log("Fumar traz graves riscos à saúde, levando a doenças cardíacas, câncer, problemas respiratórios e redução da expectativa de vida.");
console.log("Se você ou alguém que conhece deseja parar de fumar, ajuda está disponível.");
console.log("Ligue 136 para acessar recursos e suporte.");
console.log(`------------------------------`);       