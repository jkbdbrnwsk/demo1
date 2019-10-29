import $ from "jquery";

const galleryPopup = () => {
  $(document).ready(function() {
    $(".gallery-grid a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      }
    });
  });
};

export default galleryPopup;
