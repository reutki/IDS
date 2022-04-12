const scrollButton = document.getElementsByClassName("back-to-top");
const rootElement = document.documentElement;
function scrollToTop() {
  document.documentElement.scrollTop = 0;
  scrollButton.addEventListener("click", scrollToTop);
}
function scrollFunction() {
  console.log(document.body.scrollTop);
  console.log(document.documentElement.scrollTop);
  console.log(scrollButton);
  if (
    document.body.scrollTop >= 20 ||
    document.documentElement.scrollTop >= 20
  ) {
    scrollButton.style.display = "grid";
  } else {
    scrollButton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};
