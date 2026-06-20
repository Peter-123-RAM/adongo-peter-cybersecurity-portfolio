document.addEventListener("DOMContentLoaded", function () {
console.log("Adongo Peter Oduor Portfolio Loaded");

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.transform = "scale(1.01)";
        section.style.transition = "0.3s";
    });

    section.addEventListener("mouseleave", () => {
        section.style.transform = "scale(1)";
    });
});

});
