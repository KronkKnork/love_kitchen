$(window).ready(function(){ 

    $('#stories div:last-child').fadeTo(0, 0);
    $('#stories div:nth-last-child(2)').fadeTo(0, 0);

    //console.log($('#zuck-modal-content').find('wrap'));
    $('#zuck-modal-content .wrap span').on('click', function(){
        var number = $(this).attr('data-index');
        //console.log(number);
    })
    /*$('#stories div:not([style="opscity: 0;"])').hover(function(){
        $(this).fadeTo(250, 0.5);
    }, function(){
        $(this).fadeTo(250, 1);
    })*/

    /*$('.next').on('click', function (){
        console.log($('.slick-current'));
        $('.slick-current').prev().fadeTo(0, 0);
        $('.slick-current').prev().prev().fadeTo(0, 0);
        // if ($('#stories div:last-child').hasClass('slick-current')) {
        //     console.log('sdokf;dskg;');
        // }
        //console.log($('#stories div:last-child'));
        // $('#stories div:last-child').fadeTo(0, 0);
        // $('#stories div:nth-last-child(2)').fadeTo(0, 0);
    })*/

    /*$('.slick-current').next().addClass('it-next-slick');
    $('.slick-current').next().next().addClass('it-next-next-slick');
    $('.story').not('.it-next-slick, .it-next-next-slick, .slick-current').addClass('story-dn');

    $('.next').on('click', function(){
        // $('.slick-slide').removeAttr('tabindex');
        // $('.slick-slide').attr('aria-hidden', 'true');
        document.querySelectorAll('.slick-track .story').forEach(n => n.classList.remove('it-next-slick'));
        document.querySelectorAll('.slick-track .story').forEach(n => n.classList.remove('it-next-next-slick'));
        $('.slick-current').removeClass('it-next-slick'); 
        
        $('.slick-current').next().addClass('it-next-slick');
        $('.slick-current').next().removeClass('it-next-next-slick');

        $('.slick-current').next().next().addClass('it-next-next-slick');
        $('.slick-current').prev().removeClass('it-next-slick'); 

        //$('.it-next-slick, .it-next-next-slick, .slick-current').removeClass('slick-slide-dn');
        //setTimeout(function(){
            //$('.slick-slide').not('.it-next-slick, .it-next-next-slick, .slick-current').addClass('slick-slide-dn')
        //});
        
        /*var kol_vo = $('.slick-slide:last').attr('data-slick-index') - ();
        console.log(kol_vo);*/

        /*if ( $('.slick-current').next().length == 0 ) {
            // $('.slick-current').removeClass('slick-current slick-active');
            // $('[data-slick-index="0"]').addClass('slick-current slick-active');
            // $('[data-slick-index="0"]').attr('aria-hidden', 'true');
            // console.log($('[data-slick-index="0"]'));
            $('#stories').slick('slickGoTo',1);
            document.querySelectorAll('.slick-track .slick-slide').forEach(n => n.classList.remove('it-next-slick'));
            document.querySelectorAll('.slick-track .slick-slide').forEach(n => n.classList.remove('it-next-next-slick'));
            $('.slick-current').removeClass('it-next-slick'); //убирает класс чтобы фотка была болшьшая
            
            $('.slick-current').next().addClass('it-next-slick'); //добавляет класс для следующей фотки, чтобы была по меньше
            $('.slick-current').next().removeClass('it-next-next-slick'); //убирает класс чтобы чуть чуть увеличить

            $('.slick-current').next().next().addClass('it-next-next-slick'); //добавляет класс для следующей за следующей фоткой, чтобы была еще меньше
            $('.slick-current').prev().removeClass('it-next-slick'); //увеличить фото до нужного размера
        }
        
    })*/

})