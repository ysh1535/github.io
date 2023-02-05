// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.addEventListener('click', () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('nav-toggle');
// });

// window.onscroll = () => {
//     menu.classList.add('fa-times');
//     navbar.classList.add('nav-toggle');
// };

$(document).ready(function(){

    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    
    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });
    
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    }

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-bars').addClass('fa-times');
        $('.nav').addClass('nav-toggle');
    });

    $(window).scroll(function(){
        if($(window).scrollTop() < 20){
            $('header').css('box-shadow','none');
        }else{
            $('header').css('box-shadow','0 .2rem .5rem #333');
        }
    });

});



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

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});


