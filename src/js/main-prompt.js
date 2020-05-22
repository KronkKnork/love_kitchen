$(document).ready(function(){


    var prompt = $('.main-prompt');
    $('.wrapper-circle-plus').mouseenter(function(){
        var cp = $(this).offset(),
            left = cp.left + 80,
            top = cp.top + 13;
            left_w = cp.left - 150,
            top_w = top - 60;
        if (left + prompt.width() > $(document).width()) {
            prompt.text($(this).data("prompt"));
            prompt.show().offset({top: top_w, left: left_w});
        } else {
            prompt.text($(this).data("prompt"));
            prompt.show().offset({top: top, left: left});
        }
    }).mouseout(function(){
        prompt.hide();
    });

    
    $('.main-btn').on('click', function(){
        console.log($('#popup-free-design'));
        $('#popup-free-design').show("slow");
    });

    $('.popup-close').on('click', function(){
        $(this).parents('.popup').first().hide("slow");
    });

})
