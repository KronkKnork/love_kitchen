$(window).ready(function(){
  
    $('.js-test-btn').on('click', function(){
        $('#popup-test').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-test').is(':hidden') ? "scroll" : "hidden";
    });

})
