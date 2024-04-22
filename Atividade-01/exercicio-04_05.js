/// ATIVIDADE 04 ///

/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno
no semestre, calcular e escrever a média semestral e a seguinte mensagem:
‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado
(considere 6.0 a nota mínima para aprovação).
*/

/// ATIVIDADE 05 ///

/*
Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO!
Estude mais’ caso a média calculada seja menor que 6,0.
*/

///////// INICIO DA ATIVIDADE ////////

const prompt = require('prompt-sync')();

let notaA = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let notaB = parseFloat(prompt("Digite a nota da segunda avaliação:"));

let mediaSemestre = (notaA + notaB) / 2;

if (mediaSemestre >= 6.0) {
    console.log(`PARABÉNS! Você foi aprovado. Sua média foi ${mediaSemestre}.`);
} else {
    let notaFaltante = (6.0 - mediaSemestre);
    console.log(`Você foi REPROVADO! Estude mais... Sua média foi ${mediaSemestre} e faltaram ${notaFaltante} pontos para passar.`);
}