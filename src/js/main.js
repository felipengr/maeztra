$(document).ready(function(){
    bannerHome();
    slickShelf();
    modalHome();
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
                breakpoint: 1366,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
        ]
    });
}

function modalHome() {
    $(window).on('load', function() {
        $('.modal-container').addClass('active');
    })

    $('.modal-container .close').on('click', function(){
        $('.modal-container').removeClass('active');
    })
}