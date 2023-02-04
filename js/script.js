let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
    menu.classList.add('fa-times');
    navbar.classList.add('nav-toggle');
};


var swiper = new Swiper(".gallery-slider", {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});




