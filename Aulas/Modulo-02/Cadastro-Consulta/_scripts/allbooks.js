document.addEventListener('DOMContentLoaded', function () {
    const listContainer = document.getElementById('listOfAllBooks');
    const books = JSON.parse(localStorage.getItem('books')) || [];

    const observer = new ResizeObserver(() => {
        let quantidadeLivros = books.length;
        const maxColumns = 4;
        let columns = '';

        if (quantidadeLivros <= maxColumns) {
            columns = `repeat(${quantidadeLivros}, 1fr)`;
        } else {
            columns = `repeat(${maxColumns}, 1fr)`;
        }

        listContainer.style.gridTemplateColumns = columns;
    });

    observer.observe(listContainer);

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
                    showModalConfirm(() => {
                        books.splice(index, 1);
                        localStorage.setItem('books', JSON.stringify(books));
                        updateBookList(books);
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
                
                listContainer.appendChild(bookCard);
            });
        }
    }

    // Função para exibir o modal de confirmação
    function showModalConfirm(callback) {
        const modal = document.getElementById("confirmationModal");
        modal.style.display = "block";

        const confirmButton = document.getElementById("confirmButton");
        const cancelButton = document.getElementById("cancelButton");
        const closeButton = document.querySelector(".close");

        confirmButton.addEventListener("click", function() {
            modal.style.display = "none";
            callback();
        });

        cancelButton.addEventListener("click", function() {
            modal.style.display = "none";
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
    }

    updateBookList(books);

});