/// ATIVIDADE 50 ///

/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.
*/
const prompt = require('prompt-sync')();

var hoteis = [
    { id: 1, nome: 'Hotel Gaúcho', cidade: 'Porto Alegre', quartosTotais: 20, quartosDisponiveis: 20, avaliacoes: [] },
    { id: 2, nome: 'Hotel Pampas', cidade: 'Pelotas', quartosTotais: 15, quartosDisponiveis: 15, avaliacoes: [] },
    { id: 3, nome: 'Hotel Serrano', cidade: 'Gramado', quartosTotais: 25, quartosDisponiveis: 25, avaliacoes: [] }
];
var reservas = [];
var idReserva = 1;

function adicionarHotel() {
    var nome = prompt('Digite o nome do hotel: ');
    var cidade = prompt('Digite a cidade do hotel: ');
    var quartosTotais = parseInt(prompt('Digite o número de quartos totais: '), 10);

    hoteis.push({
        id: hoteis.length + 1,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais,
        avaliacoes: []
    });
    console.log('Hotel adicionado com sucesso!');
}

function buscarHoteisPorCidade() {
    var cidade = prompt('Digite a cidade: ');
    var hoteisNaCidade = hoteis.filter(function (hotel) {
        return hotel.cidade.toLowerCase() === cidade.toLowerCase();
    });

    if (hoteisNaCidade.length === 0) {
        console.log('Nenhum hotel encontrado na cidade especificada.');
    } else {
        console.log('Hotéis encontrados:');
        hoteisNaCidade.forEach(function (hotel) {
            console.log(hotel);
        });
    }
}

function fazerReserva() {
    var idHotel = parseInt(prompt('Digite o ID do hotel: '), 10);
    var nomeCliente = prompt('Digite o nome do cliente: ');

    var hotel = hoteis.find(function (h) {
        return h.id === idHotel;
    });

    if (!hotel) {
        console.log('Hotel não encontrado.');
        return;
    }

    if (hotel.quartosDisponiveis > 0) {
        reservas.push({
            idReserva: idReserva++,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        });
        hotel.quartosDisponiveis--;
        console.log('Reserva feita com sucesso!');
    } else {
        console.log('Não há quartos disponíveis neste hotel.');
    }
}

function cancelarReserva() {
    var idReserva = parseInt(prompt('Digite o ID da reserva: '), 10);

    var reservaIndex = reservas.findIndex(function (r) {
        return r.idReserva === idReserva;
    });

    if (reservaIndex === -1) {
        console.log('Reserva não encontrada.');
        return;
    }

    var reserva = reservas[reservaIndex];
    var hotel = hoteis.find(function (h) {
        return h.id === reserva.idHotel;
    });

    if (hotel) {
        hotel.quartosDisponiveis++;
    }

    reservas.splice(reservaIndex, 1);
    console.log('Reserva cancelada com sucesso!');
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log('Nenhuma reserva encontrada.');
        return;
    }

    console.log('Reservas:');
    reservas.forEach(function (reserva) {
        var hotel = hoteis.find(function (h) {
            return h.id === reserva.idHotel;
        });

        if (hotel) {
            console.log('Reserva ID: ' + reserva.idReserva + ', Hotel: ' + hotel.nome + ', Cidade: ' + hotel.cidade + ', Cliente: ' + reserva.nomeCliente);
        }
    });
}

function checkIn() {
    var idReserva = parseInt(prompt('Digite o ID da reserva para check-in: '), 10);

    var reserva = reservas.find(function (r) {
        return r.idReserva === idReserva;
    });

    if (!reserva) {
        console.log('Reserva não encontrada.');
        return;
    }

    console.log('Check-in realizado com sucesso para a reserva ID: ' + idReserva);
}

function checkOut() {
    var idReserva = parseInt(prompt('Digite o ID da reserva para check-out: '), 10);

    var reservaIndex = reservas.findIndex(function (r) {
        return r.idReserva === idReserva;
    });

    if (reservaIndex === -1) {
        console.log('Reserva não encontrada.');
        return;
    }

    var reserva = reservas[reservaIndex];
    var hotel = hoteis.find(function (h) {
        return h.id === reserva.idHotel;
    });

    if (hotel) {
        hotel.quartosDisponiveis++;
    }

    reservas.splice(reservaIndex, 1);

    var avaliacao = prompt('Por favor, avalie sua estadia no hotel (1 a 5): ');
    hotel.avaliacoes.push(parseInt(avaliacao, 10));

    console.log('Check-out realizado com sucesso e avaliação registrada para a reserva ID: ' + idReserva);
}

function relatorioOcupacao() {
    var idHotel = parseInt(prompt('Digite o ID do hotel para relatório de ocupação: '), 10);

    var hotel = hoteis.find(function (h) {
        return h.id === idHotel;
    });

    if (!hotel) {
        console.log('Hotel não encontrado.');
        return;
    }

    var ocupacao = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
    console.log('Relatório de ocupação para ' + hotel.nome + ':');
    console.log('Ocupação: ' + ocupacao.toFixed(2) + '%');
}

function mediaAvaliacao() {
    var idHotel = parseInt(prompt('Digite o ID do hotel para verificar a média de avaliação: '), 10);

    var hotel = hoteis.find(function (h) {
        return h.id === idHotel;
    });

    if (!hotel) {
        console.log('Hotel não encontrado.');
        return;
    }

    if (hotel.avaliacoes.length === 0) {
        console.log('Ainda não há avaliações para este hotel.');
        return;
    }

    var media = hotel.avaliacoes.reduce(function (acc, val) { return acc + val; }, 0) / hotel.avaliacoes.length;
    console.log('Média de avaliação para ' + hotel.nome + ': ' + media.toFixed(2));
}

function menu() {
    console.log('-----------------------------------------------------------');
    console.log('BEM-VINDO AO SISTEMA DE RESERVAS DE HOTÉIS!');
    console.log('Escolha uma das opções abaixo:');
    console.log('1. Adicionar hotel');
    console.log('2. Buscar hotéis por cidade');
    console.log('3. Fazer reserva');
    console.log('4. Cancelar reserva');
    console.log('5. Listar reservas');
    console.log('6. Check-in');
    console.log('7. Check-out');
    console.log('8. Relatório de ocupação');
    console.log('9. Média de avaliação');
    console.log('10. Sair');
    console.log('-----------------------------------------------------------');
}

function main() {
    while (true) {
        menu();
        var opcao = prompt('Digite sua escolha: ');

        switch (opcao) {
            case '1':
                adicionarHotel();
                break;
            case '2':
                buscarHoteisPorCidade();
                break;
            case '3':
                fazerReserva();
                break;
            case '4':
                cancelarReserva();
                break;
            case '5':
                listarReservas();
                break;
            case '6':
                checkIn();
                break;
            case '7':
                checkOut();
                break;
            case '8':
                relatorioOcupacao();
                break;
            case '9':
                mediaAvaliacao();
                break;
            case '10':
                console.log('Saindo do sistema...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

main();