/// ATIVIDADE 44 ///

/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

let dados = {
    nome: "Leonardo",
    idade: 30,
    cidade: "Porto Algre",
    estado: "Rio Grande do Sul",
    ativo: true
};

function contarStrings(obj) {
    let contagem = 0
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            contagem++;
        }
    }
    return contagem;
}

let quantidadeStrings = contarStrings(dados);
console.log(`Existem ${quantidadeStrings} strings no objeto.`);