/// ATIVIDADE 41 ///

/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade.
Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/

let pessoa = {
    nome: 'Juliana',
    idade: 25,
}

console.log(`Nome da pessoa é: ${pessoa.nome}`)
console.log(`Idade da pessoa é: ${pessoa.idade} anos`)

pessoa.email = 'juliana@gmail.com'

console.log(`E-mail da pessoa é: ${pessoa.email}`)