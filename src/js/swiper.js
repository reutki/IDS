import Swiper, { Navigation, Pagination } from "swiper";
let index = [0];

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  initialSlide: 0,
  pagination: {
    el: ".swiper-pagination",
  },
});
