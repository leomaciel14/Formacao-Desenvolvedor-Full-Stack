const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

/*
    For in para iterar sobre as propriedade dentro das nortas,
    calcule a média e imprima a turma. Caso a média esteja acima de 3.0
    indique que a tuma está acima da média de apovação.
*/

let somaNotas = 0
let numeroDeAlunos = 0

for (let aluno in professor.notas){
    somaNotas += professor.notas[aluno]
    numeroDeAlunos++
}

let media = somaNotas / numeroDeAlunos

console.log(`A média das notas é: ${media.toFixed(2)}`);
console.log(media >= 3 ? `A turma do ${professor.nome} está acima da média de aprovação` : `A turma do ${professor.nome} está abaixo da média de aprovação`);


/*
    - For of para iterar sobre o array biblioteca;
    - Para cada livro, verifique se foi pupicado antes de 2000;
    - Imprimir o titulo e ano dos livros que atendem essa condição;
*/

const biblioteca = [
    { titulo: 'O Iluminado', autor: 'Stephen King', ano: 1977},
    { titulo: 'Drácula', autor: 'Bram Stoker', ano: 1897},
    { titulo: 'Frankenstein', autor: 'Mary Shelley', ano: 1818},
    { titulo: 'O Exorcista', autor: 'William Peter Blatty', ano: 1971},
    { titulo: 'Psicose', autor: 'Robert Bloch', ano: 1959},
    { titulo: 'Coraline', autor: 'Neil Gaiman', ano: 2002}
];

for (let livros of biblioteca){
    if(livros.ano < 2000){
        console.log(`O livro "${livros.titulo}", foi escrito por ${livros.autor} no ano ${livros.ano}.`)
    }
}


/*
    Com forEach para itear sobre o array, crie um objeto para armzenar a contagem de filmes por gênero:
    - Para cada filme no array, verifique se o gênero já existe no objeto contagem;
    - Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1;
    - Após loop, imprima cada gênero e o n~umero de filmes correspondente
*/

const filmes = [
    { titulo: 'O Iluminado', genero: 'Terror' },
    { titulo: 'Harry Potter e a Pedra Filosofal', genero: 'Fantasia' },
    { titulo: 'Interestelar', genero: 'Ficção Científica' },
    { titulo: 'Titanic', genero: 'Romance' },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', genero: 'Fantasia' },
    { titulo: 'Matrix', genero: 'Ação' },
    { titulo: 'O Exorcista', genero: 'Terror' },
    { titulo: 'Pantera Negra', genero: 'Ação' },
    { titulo: 'Psicose', genero: 'Terror' },
    { titulo: 'Clube da Luta', genero: 'Drama' }
];

const contagemPorGenero = {};

filmes.forEach(filme => {
    if (contagemPorGenero[filme.genero]) {
        contagemPorGenero[filme.genero]++;
    } else {
        contagemPorGenero[filme.genero] = 1;
    }
});

for (let genero in contagemPorGenero) {
    console.log(`${genero}: ${contagemPorGenero[genero]}`);
}


//// PESQUISA BINÁRIA ////

function pesquisaBinaria(array, elemento) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === elemento) {
            return meio;
        } else if (array[meio] < elemento) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 50, 60];
const elemento = 60;
const indice = pesquisaBinaria(array, elemento);

if (indice !== -1) {
    console.log(`O elemento ${elemento} foi encontrado no índice ${indice}.`);
} else {
    console.log(`O elemento ${elemento} não foi encontrado.`);
}


/*
    spread = espalhar
    rest = juntar
*/

// Teste 1 spread
let titulo1 = "Joãozinho 123"
console.log(... titulo1)

// Teste 1 spread em array seprando cada caractere
let titulo2 = "Joãozinho 123"
console.log([... titulo2])

// Teste 2 spread
let listTimes1 = ["Grêmio", "Football Porto Alegrense"]
let listTimes2 = ["São José", "Pelotas"]
let listasTimesCompletos = ["Flamengo", "São Paulo", ...listTimes1, ...listTimes2];
console.log(listasTimesCompletos);


// Teste 3 spread
let pessoa = {nome: 'Pedro', idade: 15}
let dadosCompletos = {endereço: 'Rua teste', ...pessoa}
console.log(dadosCompletos)

// Teste 4 spread juntando
function soma ( ... param) {
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(3,8,5,7))


// Teste 5
function multiplicacao(m, ...p){
    console.log(m)
    console.log(p)

    let r1 = 0

    p.forEach(elemento => r1 += m * elemento)

    return r1
}

console.log(multiplicacao(5,7,12,3,50))