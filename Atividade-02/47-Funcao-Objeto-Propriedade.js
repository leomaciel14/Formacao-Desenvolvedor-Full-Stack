/// ATIVIDADE 47 ///

/*
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function transformObject(inputObj, transformFunc) {
    var result = {};
    for (var key in inputObj) {
        if (inputObj.hasOwnProperty(key)) {
            result[key] = transformFunc(inputObj[key]);
        }
    }
    return result;
}

var obj = {
    a: 1,
    b: 2,
    c: 3
};

function transformFunc(x) {
    return x * 2;
}

var newObj = transformObject(obj, transformFunc);
console.log(newObj);