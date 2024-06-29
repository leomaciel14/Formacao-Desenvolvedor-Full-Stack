document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let totalSlides = slides.length;
    let slideIndex = 1; // Começa do segundo item
    let slideWidth = slides[0].offsetWidth + 20; // Largura do slide + gap

    // Inicializa o carrossel
    function initializeCarousel() {
        for (let i = 0; i < totalSlides; i++) {
            const cloneSlide = slides[i].cloneNode(true);
            gallery.appendChild(cloneSlide);
        }
        totalSlides *= 2; // Dobra o número total de slides após clonar
    }

    // Função para mostrar os slides
    function showSlides() {
        const translateValue = slideIndex * -slideWidth;
        gallery.style.transform = `translateX(${translateValue}px)`;
    }

    // Atualiza a largura do slide e reposiciona os slides
    function updateSlideWidth() {
        slideWidth = slides[0].offsetWidth + 20;
        showSlides();
    }

    // Event listeners para os botões de navegação
    prevBtn.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
            gallery.style.transition = 'none';
            gallery.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            setTimeout(() => {
                gallery.style.transition = 'transform 0.5s ease';
                slideIndex = totalSlides / 2 - 1;
                showSlides();
            }, 50);
        } else {
            showSlides();
        }
    });

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = totalSlides / 2;
            gallery.style.transition = 'none';
            gallery.style.transform = `translateX(0px)`;
            setTimeout(() => {
                gallery.style.transition = 'transform 0.5s ease';
                slideIndex = 1;
                showSlides();
            }, 50);
        } else {
            showSlides();
        }
    });

    // Atualiza a largura do slide quando a janela é redimensionada
    window.addEventListener('resize', updateSlideWidth);

    // Mostra o primeiro slide ao carregar a página
    initializeCarousel();
    showSlides();
});
