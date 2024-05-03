/// ATIVIDADE 03 ///

/*
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

let distanciaPassageiro = parseFloat(prompt("Olá, passageiro! Qual a distância (em Km) você deseja percorrer? "));
let valorPassagem = 0

if (isNaN(distanciaPassageiro) || distanciaPassageiro <= 0 || !Number.isFinite(distanciaPassageiro)) {
    console.log('Vai ficar por aqui mesmo, amigo? Insira uma distância maior que 0.')
} else if (isNaN(distanciaPassageiro)){
    console.log('Bugou ai? Insira um valor numérico maior que 0.')
} else {
    if (distanciaPassageiro <= 200){
        valorPassagem = distanciaPassageiro * 0.5;
        console.log(`O valor da sua passagem fica R$${valorPassagem.toFixed(2)}, aproveite sua viagem!`);
    } else {
        valorPassagem = distanciaPassageiro * 0.45;
        console.log(`Sua viagem é longa, portando vou te dar um desconto.`);
        console.log(`O valor da sua passagem fica R$${valorPassagem.toFixed(2)}, aproveite sua viagem!`);
    }
}