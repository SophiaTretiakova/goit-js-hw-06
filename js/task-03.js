const imagesList = document.querySelector(".gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
// for (image in images) {
//   const listItem = document.createElement("li");
//   const imgItem = document.createElement("img");
//   imgItem.setAttribute(images.url, value);
//   // imgItem.textContent = image;
//   listItem.appendChild(imgItem);
//   <li class="item">
//     <img src="" alt=""></img>
//   </li>;
// }
const html = images.reduce((accumulator, image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  const imgItem = document.createElement("img");
  imgItem.src = image.url;
  imgItem.alt = image.alt;
  listItem.appendChild(imgItem);
  // listItem.textContent = ingredient;
  return accumulator + listItem.outerHTML;
}, "");
imagesList.insertAdjacentHTML("beforeend", html);
