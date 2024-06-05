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