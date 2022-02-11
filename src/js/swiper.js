import Swiper, { Navigation, Pagination } from "swiper";
import $ from "jquery";
let Years = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];

var swiper = new Swiper(".swiper", {
  modules: [Pagination, Navigation],
  direction: "horizontal",
  slidesPerView: 1,
  addSlidesAfter: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    hideOnClick: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + Years[index] + "</span>"
        // console.log("Info:" + className + " " + Years[index])
      );
    },
  },
});
