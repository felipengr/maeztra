$(document).ready(function(){
    bannerHome();
    slickShelf();
    modalHome();
    slickInfo();
    clickInfo();
});

function bannerHome(){
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        adaptiveHeight: true
    });

    $('.banner-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        adaptiveHeight: true
    });
};

function slickShelf() {
    $('.shelf-slick ul').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    });
}

function modalHome() {
    if (window.innerWidth > 1024) {
        $(window).on('load', function() {
            $('.modal-container').addClass('active');
        })
    
        $('.modal-container .close').on('click', function(){
            $('.modal-container').removeClass('active');
        })
    }

    if (window.innerWidth < 1024) {
        $(window).on('load', function() {
            $('.modal-container-mobile').addClass('active');
        })
    
        $('.modal-container-mobile .close').on('click', function(){
            $('.modal-container-mobile').removeClass('active');
        })
    }
}

function slickInfo() {
    if (window.innerWidth < 1024) {
        $('.info .line').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots: false,
            adaptiveHeight: true
        })

        $('.brands .images').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots: false,
            adaptiveHeight: true
        })
    }
}

function clickInfo () {
    $('.info-maeztra .op1').on('click', function(){
        $('.of1').toggleClass('active');
    });

    $('.info-maeztra .op2').on('click', function(){
        $('.of2').toggleClass('active');
    });

    $('.info-maeztra .op3').on('click', function(){
        $('.of3').toggleClass('active');
    });
}