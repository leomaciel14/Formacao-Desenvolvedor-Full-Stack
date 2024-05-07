/// ATIVIDADE 20 ///

/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte:
existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto.
Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).
*/

const funcionarios = [
    { matricula: 101, nome: "Fulano", salarioBruto: 3000 },
    { matricula: 102, nome: "Ciclano", salarioBruto: 4000 },
    { matricula: 103, nome: "Beltrano", salarioBruto: 2500 },
];

function calcularDeducaoINSS(salarioBruto){
    const alicotaINSS = 0.12;
    return salarioBruto * alicotaINSS;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS){
    return salarioBruto - deducaoINSS;
}

function exibirContracheque(funcionarios){
    const deducaoINSS = calcularDeducaoINSS(funcionarios.salarioBruto);
    const salarioLiquido = calcularSalarioLiquido(funcionarios.salarioBruto, deducaoINSS);

    console.log("Matrícula:", funcionarios.matricula);
    console.log("Nome:", funcionarios.nome);
    console.log("Salário bruto:", funcionarios.salarioBruto);
    console.log("Dedução INSS:", deducaoINSS);
    console.log("Salário líquido:", salarioLiquido);
    console.log("----------------------------------------");
}

console.log("CONTRACHEQUES DOS FUNCIONÁRIOS");
console.log("----------------------------------------");
funcionarios.forEach(funcionario => exibirContracheque(funcionario));