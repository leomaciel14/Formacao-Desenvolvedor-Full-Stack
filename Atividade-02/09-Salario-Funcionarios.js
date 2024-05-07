/// ATIVIDADE 09 ///

/*
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
No final, mostre o total de salário pago aos homens e o total pago às mulheres.
O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

const prompt = require('prompt-sync')();

console.log('-----------------------------------------------------------');
console.log('BEM-VINDO A CALCULADORA DE SALÁRIO!');
console.log('Vamos começar adicionando o seu salário ao nosso banco de dados.');
console.log('-----------------------------------------------------------');
console.log('');

let salarioM = 0;
let salarioF = 0;
let contadorM = 0;
let contadorF = 0;

function validarNumeroInput(mensagem) {
    let input = '';
    do {
        input = prompt(mensagem);
        if (isNaN(input)) {
            console.log('Por favor, insira apenas números.');
        }
    } while (isNaN(input));
    return parseFloat(input);
}

function validarSexoInput(mensagem) {
    let input = '';
    do {
        input = prompt(mensagem).toUpperCase();
        if (input !== 'M' && input !== 'F') {
            console.log('Por favor, insira apenas M ou F para o sexo.');
        }
    } while (input !== 'M' && input !== 'F');
    return input;
}

function separarSalario() {
    let sexo = validarSexoInput("Qual o seu sexo? (M/F) ");
    let salarioAtual = validarNumeroInput("Qual o valor (R$) do seu salário (apenas números)? ");

    if (sexo === 'M') {
        salarioM += salarioAtual;
        contadorM++;
    } else if (sexo === 'F') {
        salarioF += salarioAtual;
        contadorF++;
    }
}

function exibirResultado() {
    console.log('-----------------------------------------------------------');
    console.log('-----------------------------------------------------------');
    console.log('');
    console.log('RESULTADO:');
    console.log(`Foram pagos aos homens ${contadorM} salários totalizando R$ ${(salarioM.toFixed(2))}`);
    console.log('');
    console.log(`Para as mulheres foram pagos ${contadorF} salários totalizando R$ ${(salarioF).toFixed(2)}`);
    console.log('');
    console.log('-----------------------------------------------------------');
}

do {
    separarSalario();
    let operacao = prompt(`Deseja adicionar mais salários ou exibir o resultado (adicionar/resultado)? `).toLocaleLowerCase();
    if (operacao === 'resultado') {
        exibirResultado();
        console.log('-----------------------------------------------------------');
        console.log('');
        console.log('PROGRAMA ENCERRADO!');
        console.log('Obrigado por utilizar, volte sempre!');
        console.log('');
        console.log('-----------------------------------------------------------');
        break;
    } else if (operacao !== 'adicionar') {
        console.log('Por favor, insira uma opção válida!')
    }
} while (true);