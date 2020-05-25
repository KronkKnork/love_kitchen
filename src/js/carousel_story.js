$(window).ready(function(){ 

    $('#stories').slick({
        //centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        variableWidth: true,
        useCSS: true,
        draggable: false,
        //adaptiveHeight: true,
        //appendDots: $('') //для перемещения стрелки
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    $('.slick-current').next().addClass('it-next-slick');
    $('.slick-current').next().next().addClass('it-next-next-slick');
    $('.slick-slide').not('.it-next-slick, .it-next-next-slick, .slick-current').addClass('slick-slide-dn');

    $('.slick-prev').hide()
    $('.slick-next').on('click', function(){
        // $('.slick-slide').removeAttr('tabindex');
        // $('.slick-slide').attr('aria-hidden', 'true');
        document.querySelectorAll('.slick-track .slick-slide').forEach(n => n.classList.remove('it-next-slick'));
        document.querySelectorAll('.slick-track .slick-slide').forEach(n => n.classList.remove('it-next-next-slick'));
        $('.slick-current').removeClass('it-next-slick'); //убирает класс чтобы фотка была болшьшая
        
        $('.slick-current').next().addClass('it-next-slick'); //добавляет класс для следующей фотки, чтобы была по меньше
        $('.slick-current').next().removeClass('it-next-next-slick'); //убирает класс чтобы чуть чуть увеличить

        $('.slick-current').next().next().addClass('it-next-next-slick'); //добавляет класс для следующей за следующей фоткой, чтобы была еще меньше
        $('.slick-current').prev().removeClass('it-next-slick'); //увеличить фото до нужного размера

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
        }*/
        
    })

})