/// ATIVIDADE 02 ///

/*
Escreva um programa que pergunte a velocidade de um carro.
Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado.
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

let velocidadeCarro = parseFloat(prompt("A que velocidade (em Km/h) você está conduzindo seu veículo? "));

if (isNaN(velocidadeCarro)) {
    console.log("Por favor, digite um número válido para a velocidade.");
} else {
    let valorMulta = 0;
    if (velocidadeCarro > 80) {
        valorMulta = ((velocidadeCarro - 80) * 5).toFixed(2);
        console.log(`Você está conduzindo acima do limite de velocidade permitida! *BARULHO DE SIRENE*`);
        console.log(`Vamos te multar em R$${valorMulta}. Seja responsável e dirija dentro da velocidade permitida.`);
    } else if (velocidadeCarro === 80) {
        console.log(`Você está conduzindo na velocidade limite permitida. Dirija com cuidado.`);
    } else {
        console.log(`Você está conduzindo abaixo do limite de velocidade permitida. Continue assim!`);
    }
}
