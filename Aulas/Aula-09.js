const pessoa = {
    nome: "Lucas",
    idade: 18,
    email:"lucas@teste.com",
    profissao: "Músico",
    empregada: true,
};

// Chamar uma caracteristica especifica do objeto
console.log(pessoa.nome)

// Alterar uma caracteristica de um objeto
pessoa.nome = "Jurema"

// Também pode chamar assim no console
console.log(pessoa['nome'])

// Apagar atributo do objeto
delete pessoa.empregada

console.log(pessoa)

// Criar uma função dentro do objeto e defenir um retorno com base nos atributos do objeto
pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou de ${this.profissao}.`
}

console.log(pessoa.falar())

// falar: [Function (anonymous)]
console.log(pessoa)


// Exercício: Criar um objeto que tem aqui em casa
const computador = {
    processador: "Intel i7 9700",
    memoria: "23.9",
    disco: "SSD",
    gpu: "RX 570",
    power: true,
    descricao: function() {
        return `Computador ${this.processador}, memoria RAM total de ${this.memoria}GB, disco do tipo ${this.disco} com placa de vídeo ${this.gpu} e está com o Power ${this.power}.`
    },
}

console.log(computador.descricao())

// Estrutura de repetição: for in, for off

// For in: Itera tudo que é numeravel dentro do objeto, inclusive as funções;
for (let chave in pessoa){
    console.log(chave + ": " + pessoa[chave])
}

// For off: Itera tudo de uma Array, não funciona com objeto;

let numeros = [10, 20, 100];

for (let numero of numeros){
    console.log(numero);
}


// Exercício: 
/* 
    Você tem uma lista de objetos que representam diferentes tipos
    de veículos e suas caracteristicas. Seu objetivo é primeiro usar o FOR IN para
    listar toads as propriedade e valore de cada veículo. Depois, utilizar a FOR OF
    para listar apenas os modelos dos veículos.
 */

const veiculos = [
    { modelo: "Uno", marca: "Fiat", ano: "1997", KmRodado: 100000, documentação: true },
    { modelo: "Golf", marca: "Volkswagen", ano: "2010", KmRodado: 50000, documentação: true }
];

for (let veiculo of veiculos) {
    console.log("Propriedades do Veículo:");
    for (let propriedade in veiculo) {
        console.log(`${propriedade}: ${veiculo[propriedade]}`);
    }
    console.log();
}

console.log("Modelos dos Veículos:");
for (let veiculo of veiculos) {
    console.log(veiculo.modelo);
}


// forEach: é um metodo de Array que retorna o valor e o indice interado sobre cada item.

let cores = ['Azul', 'Preto', 'Branco'];

cores.forEach((cor, indice) => {console.log(indice + ": " + cor);});


// Exercicio:

/*
    Construa um array de números e calcule a soma total dos números e também
    imprima cada número multiplicado por dois.
*/

const n1 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let soma = 0

n1.forEach((number) => {
    soma += number;
    console.log(`${number} x 2 = ${number * 2}`);
});

console.log(`A soma dos numeros é: ${soma}`);


// FACTORY

let criarPessoa = function(nome, idade, cidade) {
    return {
        nome: nome,
        idade: idade,
        cidade: cidade,
        saudacao: function() {
            return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
        }
    };
}

// Usando a função factory para criar objetos pessoa
const pessoa1 = criarPessoa('Alice', 30, 'São Paulo');
const pessoa2 = criarPessoa('Bob', 25, 'Rio de Janeiro');

// Acessando propriedades e métodos dos objetos pessoa
console.log(pessoa1.nome); // Alice
console.log(pessoa2.cidade); // Rio de Janeiro
console.log(pessoa1.saudacao()); // Olá, meu nome é Alice, tenho 30 anos e moro em São Paulo.
console.log(pessoa2.saudacao()); // Olá, meu nome é Bob, tenho 25 anos e moro em Rio de Janeiro.



const numeros = [10,30,50];
let soma = 0;

numeros.forEach((numeros) =>{ 
    console.log(numeros + " x 2 = " + (numeros*2))
    soma += numeros; 
})

console.log(`A soma de todos os números é: ${soma}`)