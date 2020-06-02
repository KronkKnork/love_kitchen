$(window).ready(function(){   

   /** open popup get katalog exprert */
    $('.wrapper-btn-expert').on('click', function(){
        $('.popup:not(#popup-i-love)').fadeOut(500);
        $('.overlay_popup').fadeIn(500);
        $('#popup-get-designer-advice').fadeIn(500);
        //document.body.style.overflowY = $('#popup-get-designer-advice').is(':hidden') ? "scroll" : "hidden";
    });
    /** open popup expert */
    $('.js-open-popup-experts').on('click', function(){
        $('.popup:not(#popup-i-love)').fadeOut(500);
        $('#popup-experts').fadeIn(500);
        //document.body.style.overflowY = $('#popup-experts').is(':hidden') ? "scroll" : "hidden";
    });
})