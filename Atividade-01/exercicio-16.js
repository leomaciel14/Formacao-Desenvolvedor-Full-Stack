/// ATIVIDADE 16 ///

/*
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

///////// INICIO DA ATIVIDADE ////////

let contador = 0;
let i = 101;

while (contador <= 50) {
    let primo = true;

    let j = 2;
    while (j < i) {
        if(i % j === 0) {
            primo = false;
            break;
        }
        j++
    }

    if (primo) {
        console.log(i);
        contador++;
    }

    i++;
}