/// ATIVIDADE 39 ///

/*
Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

function generateRandomArray(size) {
    const array = [];

    for (let i = 0; i < size; i++) {
        const randomValue = Math.random();

        if (randomValue < 0.33) {
            array.push(Math.floor(Math.random() * -100));
        } else if (randomValue < 0.66) {
            array.push(0);
        } else {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
    }
    return array;
}

function sortArray(array) {
    let arrayB = array.filter(function (element) {
        return element >= 1;
    });

    return arrayB;
}

const randomArray = generateRandomArray(100);
console.log('Array Original:');
console.log(randomArray);
const arrayB = sortArray(randomArray);
console.log('');
console.log('Array Compatado:');
console.log(arrayB);

