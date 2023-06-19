// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  spanEl.textContent = currentColor;
  document.body.style.background = currentColor;
});
