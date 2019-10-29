import $ from "jquery";

const navigation = () => {
  $(document).ready(function() {
    $(".toggle-nav").on("click", function() {
      $(".nav-container").slideToggle();
      $("body").toggleClass("mobile-nav");
    });

    $(window).on("resize", function() {
      if ($(window).width() >= 991) {
        $(".nav-container").show();
        $("body").removeClass("mobile-nav");
      } else {
        $(".nav-container").hide();
        $("body").removeClass("mobile-nav");
      }
    });

    $(".nav li a").on("click", function() {
      if ($(window).width() < 991) {
        $(".nav-container").slideToggle();
        $("body").removeClass("mobile-nav");
      }
    });
  });
};

export default navigation;
