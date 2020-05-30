$(window).ready(function(){
    var clickHandler = ("ontouchstart" in window ? "touchend" : "click");

    $('.list-salon-dn').slideToggle();
    $('.fixed-list-salon div').on(clickHandler,function(){
        if ($('.fixed-list-salon div .list-salon-dn[style="display: block;"]').parent() !== $(this)) {
            $('.fixed-list-salon div .list-salon-dn[style="display: block;"]').slideToggle(500);
        }
        $(this).find('.list-salon-dn').slideToggle(500);
    })
    $('.btn-list-salon').on(clickHandler,function(){
        console.log('sfsdfsdf');
    })
        /** open popup get katalog*/
    $('.btn-list-salon').on(clickHandler, function(){
        $('.popup').fadeOut(500);
        $('.overlay_popup').fadeIn(500);            
        $('#popup-record-salon').fadeIn(500);
        document.body.style.overflowY = $('#popup-record-salon').is(':hidden') ? "scroll" : "hidden";
    });


})