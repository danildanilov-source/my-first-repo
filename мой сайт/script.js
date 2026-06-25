console.log("Скрипт работает.");

// ===== ДАННЫЕ ПРОЕКТОВ =====
const projects = [
    {
        id: 1,
        title: "Ночь в студии",
        category: "live",
        description: "Живые выступления в формате 'one take' с минимальной обработкой."
    },
    {
        id: 2,
        title: "Open Mic",
        category: "live",
        description: "Ежемесячное мероприятие, где каждый может выступить со своим материалом."
    },
    {
        id: 3,
        title: "Радио Wave",
        category: "radio",
        description: "Онлайн-радио с подборками от независимых диджеев, музыка 24/7 без рекламы."
    },
    {
        id: 4,
        title: "Студийная запись",
        category: "studio",
        description: "Профессиональная запись и сведение треков в студии с опытными звукорежиссёрами."
    },
    {
        id: 5,
        title: "Концерт в парке",
        category: "live",
        description: "Летний open-air фестиваль с участием 10 независимых исполнителей."
    },
    {
        id: 6,
        title: "Подкаст Wave",
        category: "radio",
        description: "Еженедельные интервью с музыкантами, продюсерами и организаторами."
    }
];

// ===== ФУНКЦИЯ СОЗДАНИЯ КАРТОЧКИ =====
function createCard(project) {
    const categoryLabels = {
        live: "🎤 Концерты",
        studio: "🎧 Студия",
        radio: "📻 Радио"
    };
    const categoryText = categoryLabels[project.category] || project.category;

    return `
        <article class="project-card" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="category-badge">${categoryText}</span>
        </article>
    `;
}

// ===== ФУНКЦИЯ ОТРИСОВКИ =====
function renderProjects(list) {
    const container = document.getElementById("projects-grid");
    container.innerHTML = list.map(createCard).join("");
}

// ===== ПЕРВОНАЧАЛЬНАЯ ОТРИСОВКА =====
renderProjects(projects);

// ===== ФИЛЬТРЫ =====
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        filterButtons.forEach(function(b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        const filtered = filter === "all"
            ? projects
            : projects.filter(function(p) {
                return p.category === filter;
            });

        renderProjects(filtered);
        // Сбрасываем поиск при фильтрации
        document.getElementById("search-input").value = "";
    });
});

// ===== ПОИСК =====
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.trim().toLowerCase();

    // Снимаем активный фильтр
    filterButtons.forEach(function(b) {
        b.classList.remove("active");
    });
    document.querySelector('.filters button[data-filter="all"]').classList.add("active");

    const filtered = projects.filter(function(p) {
        return p.title.toLowerCase().includes(query);
    });

    renderProjects(filtered);
});

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

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

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