const mobileButton = document.querySelector(".mobile-button");
const navMenu = document.querySelector(".header-nav");

navMenu.addEventListener("click", mobileMenu);

function mobileMenu(){
    mobileButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}