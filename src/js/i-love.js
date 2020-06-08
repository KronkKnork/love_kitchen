$(window).ready(function(){

    $('.i-love-a .a-1').on('click',function(){
        $('.i-love-a .main-text-a').removeClass('i-love-cards-a-actived');
        $(this).addClass('i-love-cards-a-actived');
        $('.wrapper-animation-i-love .wrapper-cards').hide(500);
        $('#compact-i-love').delay(500).show(500);
    })
    $('.i-love-a .a-2').on('click',function(){
        $('.i-love-a .main-text-a').removeClass('i-love-cards-a-actived');
        $(this).addClass('i-love-cards-a-actived');
        $('.wrapper-animation-i-love .wrapper-cards').hide(500);
        $('#functions').delay(500).show(500);
        //$('#functions-up, #functions-down').delay(500).show(500);
       /* $('.wrapper-animation-i-love .wrapper-cards .row').animate({
            opacity: 0, // прозрачность элемента
            height: "150px", // высота элемента
            marginBottom: "500px",
        }, 250, "linear", function(){});
        $('.wrapper-animation-i-love .wrapper-cards').hide(500);
        $('.wrapper-animation-i-love .wrapper-cards, .wrapper-animation-i-love .row').show(500)*/
        //$('.wrapper-animation-i-love .wrapper-cards .row:first-child').addClass('i-love-position-absolute');
        // $('.wrapper-cards').hide(500);
        // $('#functions').show(500);
        // $('#functions .row div div').show(500);
        //$('.wrapper-cards .row:last-child').slideUp(1000);
        // $('#functions').show();
        // $('#functions-up').show();
    })
    $('.i-love-a .a-3').on('click',function(){
        $('.i-love-a .main-text-a').removeClass('i-love-cards-a-actived');
        $(this).addClass('i-love-cards-a-actived');
        $('.wrapper-animation-i-love .wrapper-cards').hide(500);
        $('#space').delay(500).show(500);
    })
    $('.i-love-a .a-4').on('click',function(){
        $('.i-love-a .main-text-a').removeClass('i-love-cards-a-actived');
        $(this).addClass('i-love-cards-a-actived');
        $('.wrapper-animation-i-love .wrapper-cards').hide(500);
        $('#style-design').delay(500).show(500);
    })

    /** open popup get katalog*/
    $('.js-get-katalog').on('click', function(){
        $('.popup').removeClass('active-popup');
        $('.overlay_popup').fadeIn(500);
        $('#popup-get-katalog-kitchen').addClass('active-popup');
       // document.body.style.overflowY = $('#popup-get-katalog-kitchen').is(':hidden') ? "scroll" : "hidden";
    });

    /**open popup i love */
    $('.js-open-popup-i-love').on('click', function(){
        $('.popup:not(#popup-i-love)').removeClass('active-popup');
        $('#popup-i-love').addClass('active-popup');
        //document.body.style.overflowY = $('.popup-i-love').is(':hidden') ? "scroll" : "hidden";
    });

    /**gallery swipe photo */
    $('#i-love-gallery').attr('src', $('.actived-img').find('img').attr('src'));
    $('.wrapper-popup-i-img-mimi').on('click', function(){
        $('.wrapper-popup-i-img-mimi').removeClass('actived-img');
        $(this).addClass('actived-img');
        var src = $(this).find('img').attr('src');
        $('#i-love-gallery').attr('src', src);
    })
    $('.wrapper-popup-i-img-mimi').hover(function(){
        $(this).addClass('actived-img-hover');
    }, function(){
        $(this).removeClass('actived-img-hover');
    })
    /** open popup kitchen i love */
    $('.popup-i-btn-1').on('click', function(){
        $('.popup:not(#popup-i-love)').removeClass('active-popup');
        $('.overlay_popup').fadeIn(500);
        $('#popup-it-kitchen').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-it-kitchen').is(':hidden') ? "scroll" : "hidden";
    });
    /** open popup free-steps*/
    $('.btn-text-free-steps').on('click', function(){
        $('.popup:not(#popup-i-love)').removeClass('active-popup');
        $('.overlay_popup').fadeIn(500);
        $('#popup-free-steps').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-free-steps').is(':hidden') ? "scroll" : "hidden";
    });
})