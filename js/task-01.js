// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
//текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// Отримуємо список категорій
const categoriesList = document.querySelector('ul#categories');

// Отримуємо елементи li.item
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(` Number of categories: ${categoryItems.length}`);

// Обробляємо кожен елемент li.item
categoryItems.forEach((item) => {
  // Отримуємо заголовок категорії
  const categoryTitle = item.querySelector('h2').textContent;

  // Отримуємо всі елементи li у даній категорії
  const categoryElements = item.querySelectorAll('li');

  // Виводимо заголовок і кількість елементів категорії
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elementsв: ${categoryElements.length}`);
});




// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5