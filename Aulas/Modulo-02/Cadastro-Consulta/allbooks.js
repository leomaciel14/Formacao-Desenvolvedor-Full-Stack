document.addEventListener('DOMContentLoaded', function () {
    const listContainer = document.getElementById('listOfAllBooks');

    const observer = new ResizeObserver(() => {
        let quantidadeLivros = books.length;
        const maxColumns = 6;
        let columns = '';
    
        if (quantidadeLivros <= maxColumns) {
            columns = `repeat(${quantidadeLivros}, 1fr)`;
        } else {
            columns = `repeat(${maxColumns}, 1fr)`;
        }
    
        listContainer.style.gridTemplateColumns = columns;
    });    

    // Observa mudanças no tamanho do container
    observer.observe(listContainer);

    // Função para atualizar a exibição dos livros
    function updateBookList(books) {
        listContainer.innerHTML = '';

        if (books.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Nenhum livro cadastrado';
            emptyMessage.id = 'emptyBookList';
            listContainer.appendChild(emptyMessage);
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
                    const confirmRemove = confirm('Você realmente quer remover este livro?');
                    if (confirmRemove) {
                        books.splice(index, 1);
                        localStorage.setItem('books', JSON.stringify(books));
                        updateBookList(books);
                        location.reload();
                    }
                });
                bookCard.appendChild(btnRemove);

                listContainer.appendChild(bookCard);
            });
        }
    }

    // Carrega os livros do localStorage
    const books = JSON.parse(localStorage.getItem('books')) || [];
    updateBookList(books);
});
