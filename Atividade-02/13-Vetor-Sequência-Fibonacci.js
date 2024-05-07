/// ATIVIDADE 13 ///

/*
Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente)
um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
*/

let n1 = 1
let n2 = 0
let n3 = 1

let sequencia = []

for (let i = 0; i < 15; i++){
    sequencia.push(n3)
    n3 = n1 + n2
    n2 = n1
    n1 = n3
}

console.log(sequencia)