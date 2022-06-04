(function($){
  jQuery('.menu-toggle i').on('click', function(){
    jQuery('ul.main-menu').toggleClass('active-menu');
  });

  jQuery('.offer-slider').slick({
    slidesToShow: 3,
    nextArrow: '<button class="offer-btn offer-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="offer-btn offer-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });


  jQuery('.artist-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    nextArrow: '<button class="artist-btn artist-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="artist-btn artist-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true
        }
      }
    ]

  })

  
})(jQuery);

