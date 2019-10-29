import $ from "jquery";

const galleryGrid = () => {
  $(document).ready(function() {
    var $grid = $(".gallery-grid").isotope({
      itemSelector: ".gallery-grid__item",
      percentPosition: true,
      masonry: {
        gutter: 10
      }
    });
    var filterFns = {};
    $(".gallery__filters").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    $(".gallery__buttons").each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function() {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  });
};

export default galleryGrid;
