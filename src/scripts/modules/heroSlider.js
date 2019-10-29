import $ from "jquery";

const heroSlider = () => {
  $(document).ready(function() {
    $(".hero__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 0,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: false,
      fade: true,
      prevArrow: $(".hero__arrow-prev"),
      nextArrow: $(".hero__arrow-next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 8000
          }
        }
      ]
    });
  });
};

export default heroSlider;
