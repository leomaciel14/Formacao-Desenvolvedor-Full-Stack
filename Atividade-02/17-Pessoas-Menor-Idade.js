/// ATIVIDADE 17 ///

/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o ${i+1}º nome: `);
    nomes.push(nome);
    let idade = prompt(`Digite a idade referente a ${nome}: `);
    idades.push(idade);
}

let nomesMenores = [];
let idadesMenores = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        nomesMenores.push(nomes[i]);
        idadesMenores.push(idades[i]);
    }
}

for (let i = 0; i < nomesMenores.length; i++) {
    console.log(`${nomesMenores[i]} é de menor e tem ${idadesMenores[i]} anos de idade.`);
}