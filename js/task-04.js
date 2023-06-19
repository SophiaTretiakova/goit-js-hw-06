const btnDecEl = document.querySelector("[data-action='decrement']");
const btnIncEl = document.querySelector("[data-action='increment']");
const spanValue = document.querySelector("#value");
("#value");
let counterValue = 0;
btnDecEl.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});
btnIncEl.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
function updateCounter() {
  spanValue.textContent = counterValue;
}
