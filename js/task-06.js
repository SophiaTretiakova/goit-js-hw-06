// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", borderCol);
function borderCol() {
  const inputValEl = Number(inputEl.dataset.length);
  const inputValue = inputEl.value.length;
  const bool = inputValue === inputValEl;

  inputEl.classList.toggle("valid", bool);
  inputEl.classList.toggle("invalid", !bool);
}
