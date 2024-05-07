/// ATIVIDADE 07 ///

/*
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços.
O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00.
Além disso, o cliente paga por Km percorrido.

Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos.
No final, mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

let tipoCarro = prompt("Olá, passageiro! Escolha o tipo de carro que você quer alugar (popular ou luxo): ");
let diasAlugado = parseFloat(prompt("Por quantos dias você pretende ficar com o carro alugado? "));
let kmPercorrido = parseFloat(prompt("Qual a distância total (em Km) você deseja percorrer? "));
let valorTipoCarro = 0
let valorKmTipoCarro = 0


if (tipoCarro === 'popular') {
    valorTipoCarro = 90;
    if (kmPercorrido <= 100) {
        valorKmTipoCarro = 0.20;
    } else {
        valorKmTipoCarro = 0.10;
    }
} else if (tipoCarro === 'luxo') {
    valorTipoCarro = 150;
    if (kmPercorrido <= 200) {
        valorKmTipoCarro = 0.30;
    } else {
        valorKmTipoCarro = 0.25;
    }
} else {
    console.log("Tipo de carro inválido. Por favor, escolha 'popular' ou 'luxo'.");
    return;
}

let valorTotal = (valorTipoCarro * diasAlugado) + (valorKmTipoCarro * kmPercorrido);
console.log(`O valor total de aluguel do carro é R$ ${valorTotal.toFixed(2)}`);