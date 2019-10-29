import $ from "jquery";

const navHighlightCurrentSection = () => {
  $(document).ready(function() {
    $(window).scroll(function() {
      var position = window.pageYOffset;
      $(".section").each(function() {
        var target = $(this).offset().top;
        var offset = 80; // Navbar's height
        var id = $(this).attr("id");
        var navLinks = $("#navigation li a");
        if (position + offset >= target) {
          navLinks.removeClass("active");
          $('#navigation li a[href="#' + id + '"]').addClass("active");
        }
      });

      if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
        $("#navigation li a")
          .last()
          .addClass("active");
      }
    });
  });
};

export default navHighlightCurrentSection;
