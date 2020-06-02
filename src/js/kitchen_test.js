$(window).ready(function(){
  
    $('.js-test-btn').on('click', function(){
        $('#popup-test').fadeIn(500);
        //document.body.style.overflowY = $('#popup-test').is(':hidden') ? "scroll" : "hidden";
    });

})
