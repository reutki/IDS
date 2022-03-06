let scrollToTopBtn = document.getElementsByClassName("back-to-top");
let rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
  });
  scrollToTopBtn.addEventListener("click", scrollToTop);
}
