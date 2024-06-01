document.addEventListener("DOMContentLoaded", function () {
    const inputResultado = document.getElementById("resultado");

    // Função para formatar o número com separador de milhares
    function formatarNumero(numero) {
        // Remove todos os caracteres não numéricos
        let numeroLimpo = numero.replace(/[^\d]/g, "");
        // Formata com separador de milhares
        return numeroLimpo.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Função para atualizar o valor formatado no input
    function atualizarValorFormatado() {
        let valorDigitado = inputResultado.value; // Captura o valor digitado
        let numeroFormatado = formatarNumero(valorDigitado); // Formata o número

        // Exibe o número formatado no campo de entrada
        inputResultado.value = numeroFormatado;
    }

    // Função para inserir valores no campo de entrada
    function inserir(valor) {
        if (inputResultado.value.length < 14) { // Limite máximo de caracteres
            inputResultado.value += valor;
            atualizarValorFormatado(); // Formata o valor inserido
        }
    }

    // Função para calcular o resultado da expressão
    function calcularResultado() {
        let expressao = inputResultado.value.replace(/,/g, ''); // Remove todas as vírgulas
        if (expressao) {
            try {
                inputResultado.value = eval(expressao);
                atualizarValorFormatado(); // Formata o resultado após calcular
            } catch (error) {
                console.error("Erro ao calcular:", error);
            }
        }
    }

    // Evento para todos os botões da calculadora
    document.querySelectorAll('.botao').forEach(botao => {
        botao.addEventListener('click', function () {
            let valor = botao.value; // Valor do botão clicado

            // Verifica o tipo de botão (número, operador ou comando especial)
            if (!isNaN(valor) || valor === '.' || valor === ',') { // Número ou ponto decimal
                inserir(valor);
            } else if (valor === '=') { // Botão de igual
                calcularResultado();
            } else if (valor === 'C' || valor === 'R') { // Botões de limpar tela
                inputResultado.value = '';
                atualizarValorFormatado(); // Limpa e formata a tela
            } else if (valor === 'del') { // Botão de deletar último caractere
                let expressao = inputResultado.value;
                inputResultado.value = expressao.substring(0, expressao.length - 1);
                atualizarValorFormatado(); // Formata após deletar
            } else { // Outros operadores
                inserir(valor);
            }
        });
    });

    // Função para piscar o cursor
    const cursor = document.getElementById("cursor");
    setInterval(function () {
        cursor.style.visibility = (cursor.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500);
});
