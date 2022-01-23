$(document).ready(function () {
    $('.dealers__list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: "liner",
        infinite: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        waitForAnimate: false,
    });
}); 