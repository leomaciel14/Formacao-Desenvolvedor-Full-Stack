/// ATIVIDADE 48 ///

/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combinarInventarios(inventarioA, inventarioB) {
    var inventarioCombinado = {};

    for (var item in inventarioA) {
        if (inventarioA.hasOwnProperty(item)) {
            inventarioCombinado[item] = inventarioA[item];
        }
    }

    for (var item in inventarioB) {
        if (inventarioB.hasOwnProperty(item)) {
            if (inventarioCombinado.hasOwnProperty(item)) {
                inventarioCombinado[item] += inventarioB[item];
            } else {
                inventarioCombinado[item] = inventarioB[item];
            }
        }
    }

    return inventarioCombinado;
}

var inventarioLojaA = {
    maçã: 10,
    banana: 5,
    laranja: 8
};

var inventarioLojaB = {
    banana: 7,
    uva: 4,
    laranja: 3
};

var inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);