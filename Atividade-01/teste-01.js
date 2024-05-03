const prompt = require('prompt-sync')();

let saldoInicial = parseInt(prompt("Digite o saldo inicial:"));
let resultadoUltimoRound = prompt("Digite o resultado do round:");
let custoItem = parseInt(prompt("Digite o custo do item:"));

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    let novoSaldo = saldoInicial; // Inicia novoSaldo com o saldoInicial

    if (resultadoUltimoRound === "ganhou") {
        novoSaldo *= 1.15;  // Aumenta 15%
    } else if (resultadoUltimoRound === "bônus") {
        novoSaldo *= 1.20;  // Aumenta 20%
    } else if (resultadoUltimoRound === "perdeu") {
        novoSaldo *= 1.05;  // Aumenta 5%
    }

    novoSaldo = Math.round(novoSaldo); // Arredonda o novo saldo

    if (novoSaldo >= custoItem) {
        console.log("Comprar");
        novoSaldo -= custoItem;  // Subtrai o custo do item do saldo
    } else {
        console.log("Economizar");
    }
}

// Chama a função e passa os argumentos necessários
decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem);