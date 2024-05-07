/// ATIVIDADE 22 ///

/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes,
coletando dados sobre o salário e número de filhos.

Faça uma função que leia esses dados para um  número não determinado de pessoas
e retorne a média de salário da população, a média do número de filhos,
o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

const habitantes = [
    { salario: 1500, filhos: 2 },
    { salario: 2000, filhos: 1 },
    { salario: 1000, filhos: 3 },
    { salario: 2500, filhos: 2 },
    { salario: 1200, filhos: 2 },
    { salario: 100, filhos: 0 },
    { salario: 1800, filhos: 2 },
    { salario: 300, filhos: 1 },
    { salario: 2200, filhos: 3 },
    { salario: 320, filhos: 0 }
];

let somaSalarios = 0;
let somaTotalFilhos = 0;
let maiorSalario = 0;
let salarios350 = 0;

function calcularSalario (salario, filhos){
    somaSalarios += salario;
    somaTotalFilhos += filhos;
    if (maiorSalario < salario){
        maiorSalario = salario;
    }
    if (salario < 350){
        salarios350++;
    }
}

let contagem = 0

for (let i = 0; i < habitantes.length; i++){
    calcularSalario(habitantes[i].salario, habitantes[i].filhos);
    contagem++
}

console.log(`Média de Salários: R$${(somaSalarios / habitantes.length).toFixed(2)}`);
console.log(`Média de Filhos: ${(somaTotalFilhos/contagem)} por funcionário`)
console.log(`Maior Salário: R$${(maiorSalario).toFixed(2)}`)
console.log(`Percentual de Salários até R$350: ${(salarios350 / habitantes.length * 100).toFixed(2)}%`);