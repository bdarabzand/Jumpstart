let myElement = document.getElementById = ("n001"). click =>{
    prompt(<img src="resources/images/bina.jpg" width="179" height="228" alt="">, 'This is me!!');
};

$(document).ready(function(){
    $('.carousel').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    var lastScrollTop = 0;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop - lastScrollTop > 50){
            var navHeight = $('.navbar').css('height');
            $('.navbar').animate({top: '-' + navHeight}, 150);
            lastScrollTop = scrollTop;
        } else if (lastScrollTop - scrollTop > 50) {
            $('.navbar').animate({top: '0px'}, 150);
            lastScrollTop = scrollTop;
        }
    });
});
