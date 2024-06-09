class Registro {
    constructor(titulo, autor, editora, ano, genero, paginas, imagem) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
        this.genero = genero;
        this.paginas = paginas;
        this.imagem = imagem;
    }

    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === null || this[key] === '') {
                alert('Preencha todos os campos');
                return false;
            }
        }
        return true;
    }
}

class Database {
    createBook(book) {
        // Pega o array de livros do localStorage ou inicializa um array vazio
        let books = JSON.parse(localStorage.getItem('books')) || [];
        
        // Adiciona o novo livro ao array
        books.push(book);
        
        // Armazena o array atualizado no localStorage
        localStorage.setItem('books', JSON.stringify(books));
    }

    getId() {
        let id = localStorage.getItem('id');
        if (id === null) {
            id = 0;
        } else {
            id = parseInt(id) + 1;
        }
        localStorage.setItem('id', id); // Atualiza o ID no localStorage
        return id;
    }
}

function displayBookDetails(book) {
    document.getElementById('titulo').textContent = book.titulo;
    document.getElementById('autor').textContent = book.autor;
    document.getElementById('editora').textContent = book.editora;
    document.getElementById('ano').textContent = book.ano;
    document.getElementById('genero').textContent = book.genero;
    document.getElementById('paginas').textContent = book.paginas;
    const imagem = document.getElementById('imagem');
    imagem.src = book.imagem;
}
function registerBook() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const editora = document.getElementById('editora').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;
    const paginas = document.getElementById('paginas').value;
    const imagemInput = document.getElementById('imagem').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const imagem = e.target.result;
        const book = new Registro(titulo, autor, editora, ano, genero, paginas, imagem);

        if (book.validateData()) {
            const database = new Database();
            database.createBook(book);
            displayBookDetails(book);

            showModal(); // Chama a função para mostrar o modal em vez do alerta
        }
    };
    reader.readAsDataURL(imagemInput);
}

// Função para exibir o modal
function showModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const confirmButton = document.getElementById("confirmButton");
    const closeButton = document.querySelector(".close");
    const modal = document.getElementById("confirmationModal");

    confirmButton.addEventListener("click", function() {
        modal.style.display = "none";
        window.location.href = 'submit.html';
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Adiciona um manipulador para fechar o modal ao clicar fora dele
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
