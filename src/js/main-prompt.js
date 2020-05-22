$(document).ready(function(){


    var prompt = $('.main-prompt');
    $('.wrapper-circle-plus').mouseenter(function(){
        var cp = $(this).offset(),
            left = cp.left + 80,
            top = cp.top + 13;
            left_w = cp.left - 150,
            top_w = top - 60;
        if (left + prompt.width() > $(document).width()) {
            prompt.show().offset({top: top_w, left: left_w});
        } else {
            prompt.show().offset({top: top, left: left});
        }
    }).mouseout(function(){
        prompt.hide();
    });


})

/*$(document).ready(function(){
    $(".circle-plus").hover(function() {
        $(this).stop().animate({ backgroundColor: "#FDB73B"}, 400);
    },function() {
        $(this).stop().animate({ backgroundColor: "#ffffff" }, 400);
    });
});


$(document).ready(function(){
    console.log("sdjflsjk");
    $('.circle-plus').on('mouseover', function(){
        $(this).css('background', '#FDB73B')
        console.log($(this));
    })
});*/



// console.log("kfsdalkfgkldsafd");
// $('.circle-plus').hover(function(){ // задаем функцию при наведении курсора на элемент	
// 	 $( '.circle-plus' ).css( 'background', '#FDB73B' ) // задаем цвет заднего фона
// 	  	   .text("Курсор на элементе"); // задаем текстовое содержимое
// 	}, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
// 	$( "div" ).css( "background", "red" ) // задаем цвет заднего фона
// 	  	      .text("Курсор вышел из элемента"); // задаем текстовое содержимое
// });

