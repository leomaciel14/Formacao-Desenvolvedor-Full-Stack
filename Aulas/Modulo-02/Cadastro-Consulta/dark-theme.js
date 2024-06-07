// dark-theme.js

function toggleThemeButton() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        // Mudar para tema claro
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('toggleThemeButton').textContent = 'Alternar para Tema Escuro';

        // Trocar as variáveis do root para o tema claro
        document.documentElement.style.setProperty('--primary-color', '#086997');
        document.documentElement.style.setProperty('--secondary-color', '#0881b9');
        document.documentElement.style.setProperty('--success-color', '#28a745');
        document.documentElement.style.setProperty('--success-color-1', '#21cf49');
        document.documentElement.style.setProperty('--info-color', '#17a2b8');
        document.documentElement.style.setProperty('--warning-color', '#ffc107');
        document.documentElement.style.setProperty('--danger-color', '#dc3545');
        document.documentElement.style.setProperty('--light-color', 'rgb(214, 208, 235)');
        document.documentElement.style.setProperty('--dark-color', '#343a40');
        document.documentElement.style.setProperty('--white-color', '#f3f3f3');
        document.documentElement.style.setProperty('--white-color-1', '#e9e9e9');
        document.documentElement.style.setProperty('--white-color-2', '#f1f1f1');
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--gray-color', '#cbced1');
        document.documentElement.style.setProperty('--gradiente', 'linear-gradient(45deg, #086997, #0881b9)');
        document.documentElement.style.setProperty('--cor-texto-botao', '#ffffff');
    } else {
        // Mudar para tema escuro
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('toggleThemeButton').textContent = 'Alternar para Tema Claro';

        // Trocar as variáveis do root para o tema escuro
        document.documentElement.style.setProperty('--primary-color', '#1086bd');
        document.documentElement.style.setProperty('--secondary-color', '#0d5678');
        document.documentElement.style.setProperty('--success-color-1', '#21cf49');
        document.documentElement.style.setProperty('--success-color', '#38a338');
        document.documentElement.style.setProperty('--info-color', '#17a2b8');
        document.documentElement.style.setProperty('--warning-color', '#ffc107');
        document.documentElement.style.setProperty('--danger-color', '#dc3545');
        document.documentElement.style.setProperty('--light-color', 'rgb(214, 208, 235)');
        document.documentElement.style.setProperty('--dark-color', '#343a40');
        document.documentElement.style.setProperty('--white-color', '#222');
        document.documentElement.style.setProperty('--white-color-1', '#111');
        document.documentElement.style.setProperty('--white-color-2', '#333');
        document.documentElement.style.setProperty('--black-color', '#fff');
        document.documentElement.style.setProperty('--gray-color', '#cbced1');
        document.documentElement.style.setProperty('--gradiente', 'linear-gradient(45deg, #086997, #0881b9)');
        document.documentElement.style.setProperty('--cor-texto-botao', '#fff');
    }
}

// Verifica se já existe um tema definido
document.addEventListener('DOMContentLoaded', function () {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            document.getElementById('toggleThemeButton').textContent = 'Alternar para Tema Claro';
        }
    }
});

// Salva o tema escolhido no localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Adiciona um evento de clique para o botão de alternar tema
document.getElementById('toggleThemeButton').addEventListener('click', function () {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    saveThemePreference(theme);
    toggleThemeButton();
});