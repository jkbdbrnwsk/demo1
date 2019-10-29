import $ from "jquery";
import jQueryBridget from "jquery-bridget";
import Isotope from "isotope-layout";
import Slick from "slick-carousel";
import MagnificPopup from "magnific-popup";
import validate from "jquery-validation";

jQueryBridget("isotope", Isotope, $);

import heroSlider from "./modules/heroSlider";
import partnersSlider from "./modules/partnersSlider";
import teamSlider from "./modules/teamSlider";
import testimonialsSlider from "./modules/testimonialsSlider";
import galleryGrid from "./modules/galleryGrid";
import navHighlightCurrentSection from "./modules/navHighlightCurrentSection";
import navigation from "./modules/navigation";
import formValidation from "./modules/formValidation";
import galleryPopup from "./modules/galleryPopup";

heroSlider();
partnersSlider();
teamSlider();
testimonialsSlider();
galleryGrid();
navHighlightCurrentSection();
navigation();
formValidation();
galleryPopup();
