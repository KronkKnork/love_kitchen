$(window).ready(function(){ 
/**play/pause видеоплеер */
    document.querySelector('#play-video-1').onclick = play;
    document.querySelector('#play-video-2').onclick = play2;
    document.querySelector('.popup-about-production-close').onclick = pause;
    var video_1 = document.querySelector('#video-1');
    var video_2 = document.querySelector('#video-2');
    function play() {
        $('#play-video-1').fadeOut(500);
        video_1.play();
        $('#video-1').attr('controls', 'controls' );
    }
    function play2() {
        $('#play-video-2').fadeOut(500);
        video_2.play();
        $('#video-2').attr('controls', 'controls' );
    }
    function pause() {
        $('#play-video-1').fadeIn(500);
        $('#play-video-2').fadeIn(500);
        video_1.pause();
        video_2.pause();
        $('#video-1').removeAttr('controls');
        $('#video-2').removeAttr('controls');
    }

/**клик узнать о производстве*/
    $('.btn-about-production').on('click', function(){
        $('.popup').fadeOut(500);
        $('#popup-about-production').fadeIn(500);
        document.body.style.overflowY = $('#popup-about-production').is(':hidden') ? "scroll" : "hidden";
    });

/** Замена картинки на более маенькую */
    if ($(window).width() < 681){
        $('#poopup-about-product-img').attr('src','src/img/image41_680.jpg')
    }
})