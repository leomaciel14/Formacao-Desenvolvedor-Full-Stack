document.addEventListener('DOMContentLoaded', function () {
    const livrosRegistrados = JSON.parse(localStorage.getItem('books'));

    if (livrosRegistrados && livrosRegistrados.length > 0) {
        const livroRegistrado = livrosRegistrados[livrosRegistrados.length - 1];
        const livroIndex = livrosRegistrados.length - 1;

        document.getElementById('titulo').textContent = livroRegistrado.titulo;
        document.getElementById('autor').textContent = livroRegistrado.autor;
        document.getElementById('editora').textContent = livroRegistrado.editora;
        document.getElementById('ano').textContent = livroRegistrado.ano;
        document.getElementById('genero').textContent = livroRegistrado.genero;
        const imagem = document.createElement('img');
        imagem.src = livroRegistrado.imagem;
        imagem.alt = livroRegistrado.titulo;
        document.getElementById('imagem').appendChild(imagem);

        document.getElementById('editButton').addEventListener('click', function () {
            localStorage.setItem('editBookIndex', livroIndex);
        });
    }
});