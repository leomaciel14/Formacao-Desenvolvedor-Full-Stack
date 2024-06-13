/// ATIVIDADE 46 ///

/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor
*/

function summarizeSales(salesArray) {
    const salesSummary = salesArray.reduce((acc, sale) => {
        if (acc[sale.vendedor]) {
            acc[sale.vendedor] += sale.valor;
        } else {
            acc[sale.vendedor] = sale.valor;
        }
        return acc;
    }, {});

    const salesArraySummary = Object.keys(salesSummary).map(vendedor => ({
        vendedor: vendedor,
        total: salesSummary[vendedor]
    }));

    salesArraySummary.sort((a, b) => b.total - a.total);

    return salesArraySummary.map(item =>
        `${item.vendedor} vendeu ${item.total} reais`
    );
}

const vendas = [
    { vendedor: 'Ana', valor: 150 },
    { vendedor: 'Bruno', valor: 300 },
    { vendedor: 'Carlos', valor: 250 },
    { vendedor: 'Daniela', valor: 100 },
    { vendedor: 'Eduardo', valor: 400 },
    { vendedor: 'Fernanda', valor: 200 },
    { vendedor: 'Gabriel', valor: 500 },
    { vendedor: 'Helena', valor: 300 },
    { vendedor: 'Isabela', valor: 150 },
    { vendedor: 'João', valor: 250 },
    { vendedor: 'Laura', valor: 200 },
    { vendedor: 'Marcos', valor: 350 },
    { vendedor: 'Natália', valor: 300 },
    { vendedor: 'Otávio', valor: 100 },
    { vendedor: 'Patrícia', valor: 450 },
    { vendedor: 'Renato', valor: 200 },
    { vendedor: 'Silvia', valor: 350 },
    { vendedor: 'Tiago', valor: 400 },
    { vendedor: 'Vitória', valor: 500 },
    { vendedor: 'Wagner', valor: 150 },
    { vendedor: 'Xavier', valor: 100 },
    { vendedor: 'Yara', valor: 200 },
    { vendedor: 'Zeca', valor: 250 },
    { vendedor: 'Ana', valor: 350 },
    { vendedor: 'Bruno', valor: 100 },
    { vendedor: 'Carlos', valor: 200 },
    { vendedor: 'Daniela', valor: 300 },
    { vendedor: 'Eduardo', valor: 100 },
    { vendedor: 'Fernanda', valor: 250 },
    { vendedor: 'Gabriel', valor: 300 }
];

const totalVendasPorVendedor = summarizeSales(vendas);
totalVendasPorVendedor.forEach(mensagem => console.log(mensagem));