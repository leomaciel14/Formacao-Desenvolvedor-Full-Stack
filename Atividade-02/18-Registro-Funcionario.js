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

console.log('----Registro----')
console.log(registro)
console.log('')

registro.nome = prompt(`Digite o seu nome: `);
registro.cargo = prompt(`Digite o seu cargo: `);
registro.salario = prompt(`Digite o seu salário: `);

console.log('')
console.log('----Registro Atualizado----')
console.log(registro)

