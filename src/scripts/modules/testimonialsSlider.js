import $ from "jquery";

const testimonialsSlider = () => {
  $(document).ready(function() {
    $(".testimonials__items").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 0,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
};

export default testimonialsSlider;
