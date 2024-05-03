const prompt = require('prompt-sync')();

function calcularNivelRankeada(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Solicitar as informações do usuário
const vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Calcular o nível
const resultado = calcularNivelRankeada(vitorias, derrotas);

// Exibir o resultado
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
