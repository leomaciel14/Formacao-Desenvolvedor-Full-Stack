/// ATIVIDADE 43 ///

/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos
*/

function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    for (let chave in obj1) {
        novoObjeto[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        novoObjeto[chave] = obj2[chave];
    }

    return novoObjeto;
}

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    c: 4,
    d: 5,
    e: 6
}

let objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado);