/// ATIVIDADE 49 ///

/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function agruparTransacoesPorCategoria(transacoes) {
    return transacoes.reduce(function (acc, transacao) {
        if (!acc[transacao.categoria]) {
            acc[transacao.categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        acc[transacao.categoria].transacoes.push(transacao);
        acc[transacao.categoria].subtotal += transacao.valor;
        return acc;
    }, {});
}

var transacoes = [
    { id: 1, valor: 100, data: '2024-06-01', categoria: 'alimentação' },
    { id: 2, valor: 50, data: '2024-06-02', categoria: 'transporte' },
    { id: 3, valor: 200, data: '2024-06-03', categoria: 'alimentação' },
    { id: 4, valor: 150, data: '2024-06-04', categoria: 'entretenimento' },
    { id: 5, valor: 80, data: '2024-06-05', categoria: 'transporte' }
];

var transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
console.log(JSON.stringify(transacoesAgrupadas, null, 2));