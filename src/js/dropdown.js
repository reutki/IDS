var dropdownBtn = document.querySelector(".dropdown");

if (dropdownBtn) {
  document.querySelector(".dropdown-btn").addEventListener("click", toggle);

  function toggle() {
    document.querySelector(".dropdown-description").classList.toggle("reveal");
  }
  document
    .querySelector(".dropdown-btn")
    .addEventListener("click", toggleAnimation);

  function toggleAnimation() {
    document.querySelector(".up").classList.toggle("rotate");
  }
}
