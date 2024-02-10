document.addEventListener("DOMContentLoaded", function () {
    let swiper1, swiper2;

    const screenWidth = window.innerWidth;
    const slidesToShow = screenWidth < 1024 ? 3 : 6;

    swiper1 = new Swiper('.books-container', {
        slidesPerView: slidesToShow, // Mostrar 6 slides por vez
        spaceBetween: 30, // Espaço entre os slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function () {
                updatePagination(swiper1);
            },
            slideChange: function () {
                updatePagination(swiper1);
            }
        }
    });

    const sentencesCarousel = document.getElementById('sentences-carousel');
    if (sentencesCarousel) {
        swiper2 = new Swiper('#sentences-carousel', {
            slidesPerView: 1, // Mostrar apenas 1 slide por vez
            spaceBetween: 30, // Espaço entre os slides
            loop: true, // Ativar o loop do slider
            autoplay: {
                delay: 5000, // Tempo de intervalo entre os slides em milissegundos (5 segundos neste caso)
                disableOnInteraction: false, // Continuar o autoplay mesmo se o usuário interagir com o slider
            }
        });
    }

    function updatePagination(swiper) {
        const pagination = document.querySelector('.swiper-pagination');
        if (!pagination || !swiper || !swiper.slides) return;

        const bullets = Array.from(pagination.children);
        bullets.forEach((bullet, index) => {
            bullet.classList.remove('swiper-pagination-bullet-active');
            if (index === swiper.realIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
            }
        });
    }
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    document.querySelector('.menu-toggle').classList.toggle('open');
}
