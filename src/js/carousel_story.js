$(window).ready(function(){ 

    $('#stories div:last-child').fadeTo(0, 0);
    $('#stories div:nth-last-child(2)').fadeTo(0, 0);

    $('#stories div').each(function(i,elem){
        $(elem).append($('<div class="text-mobile-story">'+ $('.text-for-slaider div').eq(i).text() +'</div>'));
    })

    //$('.slick-current').css({'left':'100px'})
   /* var left = $('.story').css('left').replace('px','');
    var minusLeft = left - 40;
    $('div .story').each(function(index, element){
        var storyLeft = $(this).css('left').replace('px','');
        console.log(storyLeft);
        storyLeft = storyLeft - minusLeft;
        //console.log(storyLeft);
        console.log($(this).css({'left':storyLeft}));
    })*/
    /*$('.header-menu .menu-item').on('click', function(event) {
        // отменяем стандартное действие
        $('.menu-popup').fadeOut(500);
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */
        /*$('html, body').animate({scrollTop: dn}, 2000);
    }); */
    $('.header-menu .menu-item').on('click', function(){
        /**Добавить код на исчезновение попап-меню при клике на якоря*/
    })
})