/// ATIVIDADE 18 ///

/*
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require('prompt-sync')();

const registro = {
    nome:'',
    cargo:'',
    salario:0
}

registro.nome = prompt(`Digite o seu nome: `);
registro.cargo = prompt(`Digite o seu cargo: `);
registro.salario = prompt(`Digite o seu salário: `);

console.log(registro)

