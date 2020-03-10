window.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".container__hamburger");
    const navItems = document.querySelector(".block__items");
    const body = document.body;

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("--clicked");
        navItems.classList.toggle("--visible");
    })
});
