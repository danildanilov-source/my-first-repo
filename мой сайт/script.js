console.log("Скрипт работает.");

// ===== ДАТА В ПОДВАЛЕ =====
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// ===== ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Убираем класс active у всех ссылок
        navLinks.forEach(function(l) {
            l.classList.remove("active");
        });
        // Добавляем класс active у нажатой ссылки
        link.classList.add("active");
    });
});