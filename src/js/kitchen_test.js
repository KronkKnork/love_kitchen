$(window).ready(function(){
    var clickHandler = ("ontouchstart" in window ? "touchend" : "click");
    
    $('.js-test-btn').on(clickHandler, function(){
        $('#popup-test').fadeIn(500);
        //document.body.style.overflowY = $('#popup-test').is(':hidden') ? "scroll" : "hidden";
    });

})
