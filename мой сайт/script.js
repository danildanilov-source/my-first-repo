console.log("Скрипт работает.");

// ===== ДАТА В ПОДВАЛЕ =====
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// ===== ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(l) {
            l.classList.remove("active");
        });
        link.classList.add("active");
    });
});

// ===== БУРГЕР-МЕНЮ (открытие/закрытие) =====
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", function() {
    nav.classList.toggle("open");
});