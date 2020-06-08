$(window).ready(function(){   

   /** open popup get katalog exprert */
    $('.wrapper-btn-expert').on('click', function(){
        $('.popup:not(#popup-i-love)').removeClass('active-popup');
        $('.overlay_popup').fadeIn(500);
        $('#popup-get-designer-advice').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-get-designer-advice').is(':hidden') ? "scroll" : "hidden";
    });
    /** open popup expert */
    $('.js-open-popup-experts').on('click', function(){
        $('.popup:not(#popup-i-love)').removeClass('active-popup');
        $('#popup-experts').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-experts').is(':hidden') ? "scroll" : "hidden";
    });
})