/// ATIVIDADE 42 ///

/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let dados = {
    nome: "Leonardo",
    idade: 30,
    cidade: "Porto Algre",
    interesses: ["Música", "Luta", "Tecnologia"],
    endereco: {
        rua: "Rua dos Limoeiros",
        numero: 123,
        cep: "01234-567"
    },
    notas: [8, 9, 7, 10],
    habilidades: ["Programação", "Design", "Guitarra"],
    ativo: true
};

function filtrarArrays(obj) {
    let novoObjeto = {};

    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            novoObjeto[chave] = obj[chave];
        }
    }
    return novoObjeto;
}

let apenasArrays = filtrarArrays(dados);
console.log(apenasArrays);
