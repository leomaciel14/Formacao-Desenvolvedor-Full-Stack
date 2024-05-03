// Exercitando Arrays e funções

/*
let elementos = [1, 2, 3, 4];

function somaElementos(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma;
}

console.log("A soma dos elementos é: ", somaElementos(elementos));
*/

// Exercício 2: Encontrar o maior número de um Array

/*
function encontrarMaiorNumero(vetor) {
    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

let numeros = [10, 5, 20, 8, 15];
let maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maiorNumero);
*/

// Exercício 3: Reverter uma Array

/*
function inverterArray(array) {
    let invertida = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertida.push(array[i]);
    }
    return invertida;
}

let array = [1, 2, 3, 4, 5];
let arrayInvertida = inverterArray(array);
console.log("Array original:", array);
console.log("Array invertida:", arrayInvertida);
*/


// Exercício 4: Somar valores de uma Matriz
/*
function somarMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let resultado = somarMatriz(matriz);
console.log("A soma de todos os elementos da matriz é:", resultado);
*/


// Exercício: Encontrar o maior número em uma matriz 
function maiorNumeroMatriz(matriz){
    let maior = matriz[0][0]
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior){
                maior = matriz[i][j]
            }
        }
    }
    return maior
}

console.log("O maior número da minha matriz é: ", maiorNumeroMatriz([[1, 2], [3, 4]]));


// Metodo replace
let nome = 'Dick Vigarista'
console.log(nome);
console.log(nome.replace('Dick Vigarista', 'Pica Pau'));

let nomeAlterado = nome.replace('Dick Vigarista', 'Pica Pau')
console.log(nomeAlterado)

// Metodo substr
console.log(nome.substr('7', '5')) //imprime os 5 proximos dados, a partir da posição 7

// Metodo Upper case e Lower case
console.log(nome.toLocaleUpperCase())
console.log(nome.toLocaleLowerCase())
console.log('-' + nome.trim() + '-') // retira os espaços em branco do inicio e do final da string '-'

// Exercício: Data de hoje
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1;
let ano = dataAtual.getFullYear();

switch (mes){
    case 1:
        mes = "Janeiro";
        break;
    case 2:
        mes = "Fevereiro";
        break;
    case 3:
        mes = "Março";
        break;
    case 4:
        mes = "Abril";
        break;
}
console.log(`Hoje é dia ${dia} de ${mes} no ano ${ano}.`);

// Metodo toString

let data = new Date()
console.log(data.toString());
data.setDate(data.getDate() + 720);
console.log(data.toString());

// Tarefa: Encontre a quantidade de milissegundo entre duas datas

let data1 = new Date(2023, 4, 20);
let data2 = new Date(2023, 3, 20);

let milesegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());
console.log(`${milesegundosEntreDatas}`);