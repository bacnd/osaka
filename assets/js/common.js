(function($){
    $(document).ready(function(){
        $('.list-slider-main').slick({
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            speed: 300,
            easing: 'swing',
            slidesToShow: 1,
            // initialSlide: 1,
            centerMode: true,
            // variableWidth: true,
            centerPadding: '0px',
            prevArrow: '<div class="arrow-slider"><span class="slick_prev" href="#"><img src="./assets/images/arrow-left.png" alt="arrow left"></span></div>',
            nextArrow: '<div class="arrow-slider"><span class="slick_next" href="#"><img src="./assets/images/arrow-right.png" alt="arrow right"></span></div>',
            responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    variableWidth: false,
                    adaptiveHeight: true,
                    centerMode: false,
                    centerPadding: '0px',
                    prevArrow: '<div class="arrow-slider"><span class="slick_prev" href="#"><img src="./assets/images/arrow-left-sp.png" alt="arrow left"></span></div>',
                    nextArrow: '<div class="arrow-slider"><span class="slick_next" href="#"><img src="./assets/images/arrow-right-sp.png" alt="arrow right"></span></div>',
                  }
                }
            ]
        });

        $('.scroll-top').click(function() {
            $('html, body').animate({scrollTop: 0}, 1000);
        });

        $("a[href^='#']").click(function(e) {
            e.preventDefault();
            var position = $($(this).attr("href")).offset().top;

            $("body, html").animate({
                scrollTop: position
            }, 1000);
        });
        $('.btn-menusp, .over-body').click(function(){
            $(this).closest('body').toggleClass('nav-open');
            $('.btn-menusp').toggleClass('active');
            $('.hd-right').animate({width: "toggle"});
        });

        if ($('body').hasClass('home') || $('body').hasClass('page-templete-menu')) {
            var logo = $('body.home, body.page-templete-menu').find('.logo img').attr('src').replace('logo-gray.png', 'logo.png');
            $('body.home, body.page-templete-menu').find('.logo img:eq(0)').attr('src', logo);

            var tel = $('body.home, body.page-templete-menu').find('.hd-phone img').attr('src').replace('hd-tel-gray.jpg', 'hd-tel.jpg');
            $('body.home, body.page-templete-menu').find('.hd-phone img:eq(0)').attr('src', tel);
        }

        $('select').on('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
    });
})(jQuery);
