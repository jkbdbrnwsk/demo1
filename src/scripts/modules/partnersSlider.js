import $ from "jquery";

const partnersSlider = () => {
  $(document).ready(function() {
    $(window).on("load resize orientationchange", function() {
      $(".partners").each(function() {
        var $carousel = $(this);
        if ($(window).width() > 992) {
          if ($carousel.hasClass("slick-initialized")) {
            $carousel.slick("unslick");
          }
        } else {
          if (!$carousel.hasClass("slick-initialized")) {
            $carousel.slick({
              slidesToShow: 5,
              rows: 0,
              infinite: true,
              autoplay: true,
              arrows: false,
              autoplaySpeed: 4000,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 376,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            });
          }
        }
      });
    });
  });
};

export default partnersSlider;
