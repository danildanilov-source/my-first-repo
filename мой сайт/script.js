console.log("Скрипт работает.");

const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(l) {
            l.classList.remove("active");
        });
        link.classList.add("active");
    });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", function() {
    nav.classList.toggle("open");
});

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", function() {
    extraInfo.classList.toggle("expanded");

    if (extraInfo.classList.contains("expanded")) {
        toggleBtn.textContent = "Скрыть";
    } else {
        toggleBtn.textContent = "Показать больше";
    }
});