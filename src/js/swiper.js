import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
// Swiper.use([Pagination, Navigation]); varianta veche

let Years = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];
var swiper = new Swiper(".swiper", {
  modules: [Pagination, Navigation, EffectFade],
  effect: "fade",
  speed: 500,
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "Bullet",
    bulletActiveClass: "BulletActive",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + Years[index] + "</span>";
    },
  },
});
