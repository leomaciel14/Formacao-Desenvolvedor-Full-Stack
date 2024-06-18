document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.gallery-item');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 20; // Largura do slide + gap
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let slideIndex = 1; // Começa do segundo item

    // Inicializa o carrossel
    function initializeCarousel() {
        for (let i = 0; i < slides.length; i++) {
            const cloneSlide = slides[i].cloneNode(true);
            gallery.appendChild(cloneSlide);
        }
    }

    // Função para mostrar os slides
    function showSlides() {
        const translateValue = slideIndex * -slideWidth;
        gallery.style.transform = `translateX(${translateValue}px)`;
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
                slideIndex = totalSlides;
                showSlides();
            }, 50);
        } else {
            showSlides();
        }
    });

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex > totalSlides) {
            slideIndex = 0;
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

    // Mostra o primeiro slide ao carregar a página
    initializeCarousel();
    showSlides();
});
