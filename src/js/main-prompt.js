$(window).ready(function(){

    // var initialPoint;
    // var finalPoint;
    // document.addEventListener('touchstart', function(elem) {
    //     initialPoint=elem.changedTouches[0];
    // }, false);
    // document.addEventListener('touchend', function(elem) {
    //     finalPoint=elem.changedTouches[0];
    //     var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    //     var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    //     console.log(xAbs,yAbs);
    //     if (xAbs < 1 && yAbs < 1) {
    //         console.log('tap');
    //     }
    // }, false);

    var prompt = $('.main-prompt');
    $('.updeted-plus-in').hover(function(){
        var cp = $(this).offset(),
            left = cp.left + 80,
            top = cp.top + 13;
            left_w = cp.left - 240,
            top_w = top - 0;
        if (left + prompt.width() > $(document).width()) {
            prompt.text($(this).data("prompt"));
            prompt.fadeIn().offset({top: top_w, left: left_w});
        } else {
            prompt.text($(this).data("prompt"));
            prompt.fadeIn().offset({top: top, left: left});
        }
        $('.updeted-dark-img').fadeIn(500);
    }, function(){
        $('.updeted-dark-img').fadeOut(500);
        prompt.fadeOut();
    });

        /*var touch = document.getElementById("wrapper-circle-plus-1")
    touch.addEventListener('touchstart', function(event) {
        if (event.targetTouches.length == 1) {
            var myclick=event.targetTouches[0];
            console.log('сработал тач');
        }
    }, false);
    touch.addEventListener('touchend', function(){
        console.log('сработал тач');
    });*/

    $('input[type="text"]').on('click', function(){
        $(this).focus();
    })

    $('.popup-label-checkbox').on('click', function(){
        //$(this).find('input')
        if ($(this).find('input').is(':checked')){
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
    })

/**клик на кнопку заказать бесплатный проект*/
    $('.updeted-btn-main').on('click', function(){
        console.log('click-tap');
    })
    $('.main-btn, .popup-i-btn-2, .updeted-btn-main').on('click', function(){
        $('.popup:not(#popup-i-love)').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-free-design').fadeIn(500);
        // document.body.style.overflowY = $('#popup-free-design').is(':hidden') ? "scroll" : "hidden";
    });

/**клик для записи в салон*/
    $('#record-salon').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-record-salon').fadeIn(500);
        //document.body.style.overflowY = $('#popup-record-salon').is(':hidden') ? "scroll" : "hidden";
    });
/** клик для вывозва дизайнера*/
    $('#visit-designer').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-visit-designer').fadeIn(500);
        //document.body.style.overflowY = $('#popup-visit-designer').is(':hidden') ? "scroll" : "hidden";
    });
/** клик понравилось решение*/
    var popup_plus = "";
    $('.js-btn-like-buy').on('click', function(){
        $('.overlay_popup_like_design').fadeIn(500);
        $('#popup-like-design').fadeIn(500);
        $(this).parents('.popup').first().fadeOut(500);
        popup_plus = $(this).parents('.popup').first();
        //document.body.style.overflowY = $('#popup-like-design').is(':hidden') ? "scroll" : "hidden";
    });
    $('.close-like-design, .overlay_popup_like_design').on('click', function(){
        $('.overlay_popup_like_design').fadeOut(500);
        $(this).parents('.popup').first().fadeOut(500);
        popup_plus.fadeIn(500);
    });
/*клик на плюсики*/
    $('.wrapper-circle-plus-1, #plus-1').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-1').fadeIn(500);
        console.log('jsdgjsdkfjklds');
        //document.body.style.overflowY = $('.wrapper-circle-plus-1').is(':hidden') ? "scroll" : "hidden";
    });
    $('.wrapper-circle-plus-2, #plus-2').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-2').fadeIn(500);
        //document.body.style.overflowY = $('.wrapper-circle-plus-2').is(':hidden') ? "scroll" : "hidden";
    });
    $('.wrapper-circle-plus-3, #plus-3').on('click', function(){
        //$('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-3').fadeIn(500);
        //document.body.style.overflowY = $('.wrapper-circle-plus-3').is(':hidden') ? "scroll" : "hidden";
    });
    $('.wrapper-circle-plus-4, #plus-4').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-4').fadeIn(500);
        //document.body.style.overflowY = $('wrapper-circle-plus-4').is(':hidden') ? "scroll" : "hidden";
    });
    $('.wrapper-circle-plus-5, #plus-5').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-5').fadeIn(500);
        //document.body.style.overflowY = $('.wrapper-circle-plus-5').is(':hidden') ? "scroll" : "hidden";
    });
    $('.circle-plus-1').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-1').fadeIn(500);
        //document.body.style.overflowY = $('#popup-plus-1').is(':hidden') ? "scroll" : "hidden";
    });
    $('.circle-plus-2').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-2').fadeIn(500);
        //document.body.style.overflowY = $('#popup-plus-2').is(':hidden') ? "scroll" : "hidden";
    });
    // $('.circle-plus-3').on('click', function(){
    //     $('.popup').fadeOut(500);
    //     $('.overlay_popup').fadeIn(500);
    //     $('#popup-plus-3').fadeIn(500);
    //     document.body.style.overflowY = $('#popup-plus-3').is(':hidden') ? "scroll" : "hidden";
    // });
    $('.circle-plus-4').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-4').fadeIn(500);
        //document.body.style.overflowY = $('#popup-plus-4').is(':hidden') ? "scroll" : "hidden";
    });
    $('.circle-plus-5').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-plus-5').fadeIn(500);
        //document.body.style.overflowY = $('#popup-plus-5').is(':hidden') ? "scroll" : "hidden";
    });

    /*offers*/
    $('.js-offer2').on('click', function(){
        $('.overlay_popup').fadeIn(500);
        $('#popup-offer-2').fadeIn(500);
        //document.body.style.overflowY = $('#popup-offer-2').is(':hidden') ? "scroll" : "hidden";
    });

/*/offers*/

$('.js-menu-toggle').on('click', function(){
    $(this).toggleClass('close');
    $('.main-header').toggleClass('menu-popup');
    $('.logo-1').toggleClass('dn');
    $('.logo-2').toggleClass('dn');
    $('.header-nav').toggleClass('mhn');
});


/** Принятая заявка */
    $('.js-btn-buy').on('click', function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-success').fadeIn(500);
        //document.body.style.overflowY = $('#popup-success').is(':hidden') ? "scroll" : "hidden";
    });
    $('.js-close-popups').on('click', function(){
        $('.overlay_popup, .overlay_popup_like_design').fadeOut();
        $('.popup').fadeOut(500);
        //document.body.style.overflowY = "scroll";
    });
/* Ззакрытие попапов*/
    $('.popup-close, .overlay_popup').on('click', function(){
        $('.overlay_popup, .overlay_popup_like_design').fadeOut(500);
        $(this).parents('.popup').first().fadeOut(500);
        //document.body.style.overflowY = "scroll";
    });
    $('.overlay_popup').on('click', function(){
        $('.popup:not(#popup-i-love)').fadeOut(500);
        //document.body.style.overflowY = "scroll";
    });
})
