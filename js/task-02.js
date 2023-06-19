const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const html = ingredients.reduce((accumulator, ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  return accumulator + listItem.outerHTML;
}, "");
//  ingredientsList.innerHTML = html;
ingredientsList.insertAdjacentHTML("beforeend", html);
