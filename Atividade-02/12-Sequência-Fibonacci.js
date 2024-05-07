/// ATIVIDADE 12 ///

/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let n1 = 1
let n2 = 0
let n3 = 1

for (let i = 0; i < 10; i++){
    console.log(n3)
    n3 = n1 + n2
    n2 = n1
    n1 = n3
}