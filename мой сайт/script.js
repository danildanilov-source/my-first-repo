console.log("Скрипт работает.");

// ===== ДАТА В ПОДВАЛЕ =====
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// ===== ПОДСВЕТКА МЕНЮ =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(l) {
            l.classList.remove("active");
        });
        link.classList.add("active");
    });
});

// ===== БУРГЕР-МЕНЮ =====
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", function() {
    nav.classList.toggle("open");
});

// ===== КНОПКА "ПОКАЗАТЬ БОЛЬШЕ" =====
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

// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
const themeToggle = document.getElementById("theme-toggle");

// Проверяем сохранённую тему при загрузке
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// ===== ВАЛИДАЦИЯ ФОРМЫ =====
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Введите корректный email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (isValid) {
        alert("Форма заполнена верно! (отправка на сервер не настроена)");
        form.reset();
    }
});