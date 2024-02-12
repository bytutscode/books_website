document.addEventListener("DOMContentLoaded", function () {
    let swiper1, swiper2;

    const screenWidth = window.innerWidth;
    const slidesToShow = screenWidth < 1024 ? 3 : 6;

    swiper1 = new Swiper('.books-container', {
        slidesPerView: slidesToShow,
        spaceBetween: 30,
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
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
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
    menu.style.right = menu.style.right === '0px' ? '-80vw' : '0px';
    console.log(menu.style.right)
    document.querySelector('.menu-toggle').classList.toggle('open');
}


function checkImagesLoaded() {
    const images = document.querySelectorAll('img');
    let allLoaded = true;
    images.forEach(function (img) {
        if (!img.complete) {
            allLoaded = false;
        }
    });
    return allLoaded;
}

function showBody() {
    if (checkImagesLoaded()) {
        document.querySelector('.spinner-container').style.display = "none";

    } else {
        setTimeout(showBody, 100);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    showBody();
});