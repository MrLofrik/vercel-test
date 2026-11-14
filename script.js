
const testButton = document.getElementById("testButton");
const themeButton = document.getElementById("themeButton");
const result = document.getElementById("result");

testButton.addEventListener("click", () => {
    result.textContent = "Отлично! JavaScript работает корректно.";
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeButton.textContent = isLight
        ? "Тёмная тема"
        : "Сменить тему";

    result.textContent = isLight
        ? "Включена светлая тема."
        : "Включена тёмная тема.";
});

document.getElementById("year").textContent =
    "© " + new Date().getFullYear();
