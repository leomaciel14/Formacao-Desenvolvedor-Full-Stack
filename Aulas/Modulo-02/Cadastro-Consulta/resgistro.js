document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Mostra o modal de confirmação
    document.getElementById('confirmationModal').style.display = 'block';
});

// Fecha o modal quando o usuário clica no "x"
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

// Redireciona para a página de resultados quando o usuário clica em "OK"
document.getElementById('confirmButton').addEventListener('click', function() {
    const form = document.getElementById('book-form');
    const params = new URLSearchParams(new FormData(form)).toString();
    window.location.href = `submit.html?${params}`;
});

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('confirmationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}