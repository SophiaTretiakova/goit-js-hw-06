// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і
// змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");
spanEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener("input", () => {
  spanEl.style.fontSize = inputEl.value + "px";
});
