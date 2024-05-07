/// ATIVIDADE 21 ///

/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require('prompt-sync')();

let alt = prompt('Informe a sua altura em cm: ')/100
let sexo = prompt('Informe o seu sexo (M/F): ').toLocaleLowerCase()

function IMC (alt,sexo){
    let pesoIdeal = 0
    if (sexo === 'm'){
        pesoIdeal = 72.7 * alt - 58;
    } else {
        pesoIdeal = 62.1 * alt - 44.7;
    }
    console.log(`Seu peso ideal é ${(pesoIdeal).toFixed(2)} Kg.`)
}

IMC(alt,sexo);