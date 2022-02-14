import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
let Years = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];

var swiper = new Swiper(".journey-slider", {
  modules: [Pagination, Navigation, EffectFade],
  wrapperClass: "journey-container",
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,

  pagination: {
    el: ".journey-pagination",
    clickable: true,
    bulletClass: "journey-bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return `<button type="button" class="${className}">${Years[index]}</button>`;
    },
  },
});
