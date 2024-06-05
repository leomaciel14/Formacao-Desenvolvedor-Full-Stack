/* let allBooks = []
const emptyBookList = document.querySelector("#emptyBookList")
const fields = document.querySelectorAll("input")
const modal = document.querySelector("#myModal")
const modalTitle = document.querySelector("#modalTitle")
const synopsis = document.querySelector("#synopsis")
const txtSynopsis = document.querySelector("#txtSynopsis")
const btnRegister = document.querySelector("#btnRegister")
const btnSearch = document.querySelector("#btnSearch")

function findBook() {
    return allBooks.findIndex((elem) => elem.bookName === (event.target.parentNode.className))
}

function showError(bookName) {
    const contentModel = document.querySelector("#contentModel")
    modalTitle.innerHTML = `Livro "${bookName}" não encontrado!`
    txtSynopsis.innerHTML = ""
    contentModel.style.width = "50%"
    modal.style.display = "block"
}

function closeModal(event) {
    modal.style.display = "none"
}

function closeModalWindow(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function clearFields() {
    fields.forEach(function (elem) {
        elem.value = ""
    })
    synopsis.value = ""
}

function createCard(bookCard, bookName, bookAuthor, bookPublisher, numberOfPages, bookCover) {
    bookCard.className = bookName
    bookCard.innerHTML = `
    <p id="bookTitle">${bookName}</p>
    <img src="${bookCover}"/>
    Autor: ${bookAuthor}
    <br>Editora: ${bookPublisher}
    <br>Págs: ${numberOfPages}
    <button id="btnSinopsys">Sinopse</button>
    <button id="btnRemove">Remover</button>
    `
}

function appendElements(divSelect, bookCard) {
    const btnCloseModal = document.querySelector("#btnCloseModal")
    divSelect.append(bookCard)
    divSelect.addEventListener("click", showSynopsis)
    btnCloseModal.addEventListener("click", closeModal)
    window.addEventListener("click", closeModalWindow)
}

function removeCard(parentDiv) {
    return function remove(event) {
        if (event.target.id === "btnRemove") {
            parentDiv.removeChild(event.target.parentNode)
            if (allBooks.splice(findBook(), 1)) {
                alert(`Livro "${event.target.parentNode.className}" removido com sucesso!`)
            }
        }
    }
}

function registerBook() {
    const listOfAllBooks = document.querySelector("#listOfAllBooks")
    const bookName = document.querySelector("#bookName").value
    const bookAuthor = document.querySelector("#bookAuthor").value
    const bookPublisher = document.querySelector("#bookPublisher").value
    const numberOfPages = Number(document.querySelector("#numberOfPages").value)
    const bookCover = document.querySelector("#bookCover").value

    event.preventDefault()

    allBooks.push(
        {
            bookName,
            bookAuthor,
            bookPublisher,
            numberOfPages,
            bookCover,
            synopsis: synopsis.value
        })

    emptyBookList.remove()
    const bookCard = document.createElement("div")

    createCard(bookCard, bookName, bookAuthor, bookPublisher, numberOfPages, bookCover)
    appendElements(listOfAllBooks, bookCard)

    const remove = removeCard(listOfAllBooks)
    listOfAllBooks.addEventListener("click", remove)

    clearFields()
}

function searchBook() {
    const bookNameSearch = document.querySelector("#bookNameSearch").value
    const listOfBooksSearch = document.querySelector("#listOfBooksSearch")
    const foundBooks = document.querySelector("#foundBooks")
    const bookCard = document.createElement("div")

    foundBooks.innerHTML = ""
    listOfBooksSearch.append(foundBooks)

    const findBook = allBooks.filter(elem => elem.bookName === bookNameSearch)

    if (findBook.length !== 0) {
        findBook.forEach(elem => {
            createCard(bookCard, elem.bookName, elem.bookAuthor, elem.bookPublisher, elem.numberOfPages, elem.bookCover)
            appendElements(foundBooks, bookCard)
        })
    } else {
        showError(bookNameSearch)
    }

    const remove = removeCard(foundBooks)
    listOfBooksSearch.addEventListener("click", remove)

    clearFields()
}

btnRegister.addEventListener("click", registerBook)
btnSearch.addEventListener("click", searchBook)

*/

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