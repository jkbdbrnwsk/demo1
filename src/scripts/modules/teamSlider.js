import $ from "jquery";

const teamSlider = () => {
  $(document).ready(function() {
    $(".team__members").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 0,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
};

export default teamSlider;
