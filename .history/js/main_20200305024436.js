window.addEventListener("DOMContentLoaded", function () {

const hamburger = document.querySelector(".container__hamburger");
const linesHamburger = document.querySelectorAll(".line")

hamburger.addEventListener("click", function() {
    linesHamburger.classList.toggle("clicked")
})


});
