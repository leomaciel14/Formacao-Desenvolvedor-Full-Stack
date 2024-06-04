
function filterBooks() {
    const results = document.getElementById('results');
    results.innerHTML = '';

    const books = [
        { titulo: 'Livro A', ano: 2020, autor: 'Autor A', editora: 'Editora A' },
        { titulo: 'Livro B', ano: 2019, autor: 'Autor B', editora: 'Editora B' },
    ];

    const searchTitulo = document.getElementById('search-titulo').value.toLowerCase();
    const filterAno = document.getElementById('filter-ano').value;
    const filterAutor = document.getElementById('filter-autor').value.toLowerCase();
    const filterEditora = document.getElementById('filter-editora').value.toLowerCase();

    const filteredBooks = books.filter(book => {
        return (searchTitulo === '' || book.titulo.toLowerCase().includes(searchTitulo)) &&
            (filterAno === '' || book.ano == filterAno) &&
            (filterAutor === '' || book.autor.toLowerCase().includes(filterAutor)) &&
            (filterEditora === '' || book.editora.toLowerCase().includes(filterEditora));
    });

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.textContent = `Título: ${book.titulo}, Ano: ${book.ano}, Autor: ${book.autor}, Editora: ${book.editora}`;
        results.appendChild(bookItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Substitua este exemplo com a lógica para buscar dados reais
    const params = new URLSearchParams(window.location.search);
    document.getElementById('titulo').textContent = params.get('titulo');
    document.getElementById('autor').textContent = params.get('autor');
    document.getElementById('editora').textContent = params.get('editora');
    document.getElementById('ano').textContent = params.get('ano');
    document.getElementById('genero').textContent = params.get('genero');
    document.getElementById('estado').textContent = params.get('estado');
});


class Registro {
    constructor(titulo, autor, editora, ano, genero, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
        this.genero = genero;
        this.estado = estado;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === null || this[i] === '') {
                alert('Preencha todos os campos');
                return false;
            }
        }
        return true;
    }
}

function registerBook() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const editora = document.getElementById('editora').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;
    const estado = document.getElementById('estado').value;

    const book = new Registro(titulo, autor, editora, ano, genero, estado);

    if (book.validateData()) {
        Database.createBook(book);
    }

    const database = new Database();
    database.save(book);

    alert('Livro cadastrado com sucesso');
    window.location.href = 'submit.html';
}

class Database {
    createBook(book) {
        localStorage.setItem(id, JSON.stringfy(book))
    }
}