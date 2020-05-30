$(window).ready(function(){ 
    var clickHandler = ("ontouchstart" in window ? "touchend" : "click");

    $('#stories div:last-child').fadeTo(0, 0);
    $('#stories div:nth-last-child(2)').fadeTo(0, 0);

    $('#stories div').each(function(i,elem){
        $(elem).append($('<div class="text-mobile-story">'+ $('.text-for-slaider div').eq(i).text() +'</div>'));
    })

    $('.header-menu .menu-item').on(clickHandler, function(event) {
        // отменяем стандартное действие
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */
        $('html, body').animate({scrollTop: dn}, 2000);
    }); 
})