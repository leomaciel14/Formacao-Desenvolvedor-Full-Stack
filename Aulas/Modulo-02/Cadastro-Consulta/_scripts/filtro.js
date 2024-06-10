document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.getElementById('results');
    const searchTituloInput = document.getElementById('search-titulo');
    const filterAnoInput = document.getElementById('filter-ano');
    const filterAutorInput = document.getElementById('filter-autor');
    const filterEditoraInput = document.getElementById('filter-editora');
    const filterButton = document.getElementById('filter-button');
    const maxColumns = 6;

    filterButton.addEventListener('click', filterBooks);
    const listContainer = document.getElementById('listOfAllBooks');
    let books = JSON.parse(localStorage.getItem('books')) || [];

    // Função para filtrar os livros
    function filterBooks() {
        const searchTitulo = searchTituloInput.value.trim().toLowerCase();
        const filterAno = filterAnoInput.value.trim();
        const filterAutor = filterAutorInput.value.trim().toLowerCase();
        const filterEditora = filterEditoraInput.value.trim().toLowerCase();

        // Filtra os livros com base nos critérios
        let filteredBooks = books.filter(book => {
            const matchTitulo = searchTitulo === '' || book.titulo.toLowerCase().includes(searchTitulo);
            const matchAno = filterAno === '' || book.ano.toString() === filterAno;
            const matchAutor = filterAutor === '' || book.autor.toLowerCase().includes(filterAutor);
            const matchEditora = filterEditora === '' || book.editora.toLowerCase().includes(filterEditora);

            return matchTitulo && matchAno && matchAutor && matchEditora;
        });

        // Atualiza a lista de resultados na página
        displayResults(filteredBooks);
    }

    // Função para exibir os resultados na página
    function displayResults(books) {
        resultsContainer.innerHTML = '';

        if (books.length === 0) {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'Nenhum livro encontrado com os filtros selecionados.';
            resultsContainer.appendChild(noResultsMessage);
        } else {
            books.forEach((book, index) => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('bookCard');

                const bookTitle = document.createElement('p');
                bookTitle.id = 'bookTitle';
                bookTitle.textContent = book.titulo;
                bookCard.appendChild(bookTitle);

                const bookAuthor = document.createElement('p');
                const strongAuthor = document.createElement('strong');
                strongAuthor.textContent = `Autor: `;
                bookAuthor.appendChild(strongAuthor);
                bookAuthor.appendChild(document.createTextNode(book.autor));
                bookCard.appendChild(bookAuthor);

                const bookImg = document.createElement('img');
                bookImg.src = `${book.imagem}`;
                bookCard.appendChild(bookImg);

                const bookEditora = document.createElement('p');
                const strongEditora = document.createElement('strong');
                strongEditora.textContent = `Editora: `;
                bookEditora.appendChild(strongEditora);
                bookEditora.appendChild(document.createTextNode(book.editora));
                bookCard.appendChild(bookEditora);

                const bookPages = document.createElement('p');
                const strongPages = document.createElement('strong');
                strongPages.textContent = `Páginas: `;
                bookPages.appendChild(strongPages);
                bookPages.appendChild(document.createTextNode(book.paginas));
                bookCard.appendChild(bookPages);

                const btnRemove = document.createElement('button');
                btnRemove.id = 'btnRemove';
                btnRemove.textContent = 'Remover';
                btnRemove.addEventListener('click', () => {
                    showModalConfirm(() => {
                        books.splice(index, 1);
                        localStorage.setItem('books', JSON.stringify(books));
                        displayResults(books);
                    });
                });
                bookCard.appendChild(btnRemove);

                const btnEdit = document.createElement('button');
                btnEdit.id = 'btnEdit';
                btnEdit.textContent = 'Editar';
                btnEdit.addEventListener('click', () => {
                    localStorage.setItem('editBookIndex', index);
                    window.location.href = 'edit-book.html';
                });
                bookCard.appendChild(btnEdit);

                resultsContainer.appendChild(bookCard);
            });
        }
        updateGrid();
    }

    // Função para exibir o modal de confirmação
    function showModalConfirm(callback) {
        const modal = document.getElementById("confirmationModal");
        modal.style.display = "block";

        const confirmButton = document.getElementById("confirmButton");
        const cancelButton = document.getElementById("cancelButton");
        const closeButton = document.querySelector(".close");

        confirmButton.addEventListener("click", function () {
            modal.style.display = "none";
            callback();
        });

        cancelButton.addEventListener("click", function () {
            modal.style.display = "none";
        });

        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Adiciona um manipulador para fechar o modal ao clicar fora dele
        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }

    // Função para atualizar o grid de resultados
    function updateGrid() {
        const numColumns = Math.min(maxColumns, resultsContainer.children.length);
        resultsContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
    }

    // Carrega os livros ao carregar a página
    filterBooks();
});
