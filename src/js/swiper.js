import Swiper, { Navigation, Pagination } from "swiper";

let Menu = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];
const swiper = new Swiper(".swiper", {
  speed: 400,
  direction: "horizontal",
  //   loop: true,
  pagination: {
    el: ".years-axis",
    clickable: true,
  },
  initialSlide: 0,
  centeredSlides: true,
  effect: "fade",
});
const mySwiper = document.querySelector(".swiper").swiper;
let index = document.querySelector(".data-swiper-slide-index");

//TODO: create pagination function for the slider.
