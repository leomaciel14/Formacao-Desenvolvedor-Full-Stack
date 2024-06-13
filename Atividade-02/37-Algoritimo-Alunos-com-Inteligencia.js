/// ATIVIDADE 37 ///

/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário
*/

function randomBetween(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function gerarVetor(quantidade, min, max) {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    let vetor = [];
    for (let i = 0; i < quantidade; i++) {
        const randomNumber = randomBetween(min, max);
        vetor.push(letras[randomNumber - 1]);
    }
    return vetor;
}

function gerarAlunos(alunos, alternativas, min, max) {
    let respostasAlunos = [];
    for (let i = 0; i < alunos; i++) {
        const inteligencia = randomBetween(0, 10);
        let cartela = gerarVetor(alternativas, min, max);
        respostasAlunos.push({ inteligencia, respostas: cartela });
    }
    return respostasAlunos;
}

function compararRespostasAlunos(gabarito, respostasAlunos) {
    let alunosPassados = [];
    let alunosReprovados = [];
    let idAluno = 0;

    for (let aluno of respostasAlunos) {
        let contador = 0;
        for (let j = 0; j < gabarito.length; j++) {
            const respostaCorreta = gabarito[j];
            const inteligencia = aluno.inteligencia;
            let tentativa = 0;
            let acertou = false;

            while (tentativa < Math.floor(inteligencia / 4) && !acertou) {
                const index = Math.floor(Math.random() * aluno.respostas.length);
                if (aluno.respostas[index] === respostaCorreta) {
                    acertou = true;
                    break;
                }
                tentativa++;
            }

            if (!acertou) {
                const chute = randomBetween(1, 5);
                const letras = ['A', 'B', 'C', 'D', 'E'];
                acertou = letras[chute - 1] === respostaCorreta;
            }

            if (acertou) {
                contador++;
            }
        }

        idAluno++;

        if (contador >= 12) {
            console.log(`Aluno ${idAluno} (Inteligência: ${aluno.inteligencia}) teve ${contador} acertos. APROVADO!`);
            alunosPassados.push(idAluno);
        } else {
            console.log(`Aluno ${idAluno} (Inteligência: ${aluno.inteligencia}) teve ${contador} acertos. REPROVADO!`);
            alunosReprovados.push(idAluno);
        }
    }
    if (alunosPassados.length === 0) {
        console.log('');
        console.log('NENHUM ALUNO PASSOU!');
    } else {
        console.log('');
        console.log(`ID DOS ALUNOS APROVADOS: ${alunosPassados.join(', ')}.`);
        console.log('PARABÉNS!');
    }
}

const gabaritoProva = gerarVetor(20, 1, 5);
const respostasAlunos = gerarAlunos(50, 20, 1, 5);

compararRespostasAlunos(gabaritoProva, respostasAlunos);