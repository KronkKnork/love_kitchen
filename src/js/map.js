$(window).ready(function(){
    $('.list-salon-dn').slideToggle();
    $('.fixed-list-salon div').on('click',function(){
        if ($('.fixed-list-salon div .list-salon-dn[style="display: block;"]').parent() !== $(this)) {
            $('.fixed-list-salon div .list-salon-dn[style="display: block;"]').slideToggle(500);
        }
        $(this).find('.list-salon-dn').slideToggle(500);
    })
        /** open popup get katalog*/
    $('.btn-list-salon').on('click', function(){
        $('.popup').removeClass('active-popup');
        $('.overlay_popup').fadeIn(500);            
        $('#popup-record-salon').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-record-salon').is(':hidden') ? "scroll" : "hidden";
    });


})