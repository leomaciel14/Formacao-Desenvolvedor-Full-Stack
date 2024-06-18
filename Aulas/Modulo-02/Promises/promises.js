let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {}

        if (false) {
            resposta = {
                codigo: 404,
                erro: "Objeto não encontrado"
            }
            reject(resposta)
        }

        resposta = {
            1: { id: 1, nome: 'Leo' },
            2: { id: 2, nome: 'Ju' }
        }

        resolve(resposta)

    }, 4000);
}).then(() => {
    setTimeout(() => {
        let resposta = {}

        if (false) {
            resposta = {
                codigo: 1000,
                erro: "Fodeu"
            }
            reject(resposta)
        }

        resposta = {
            1: { id: 1, nome: '1' },
            2: { id: 2, nome: '2' }
        }

        resolve(resposta)

    }, 4000);
});

console.log(promessa)