function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const itemGallery = document.querySelector("#boxes");

function createBoxes(amount) {
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="background-color : ${getRandomHexColor()}; display : inline-block;padding: ${
      20 + 10 * i
    }px ${20 + 10 * i}px 0 0;"></div>`;
  }
  itemGallery.insertAdjacentHTML("afterbegin", markup);
}

const createBtn = document.querySelector("button[data-create]");
const valueInput = document.querySelector("input");
let amount = 0;
valueInput.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
  console.log(amount);
  createBtn.addEventListener("click", createBoxes(amount));
});

function destroyBoxes() {
  itemGallery.innerHTML = "";
}
const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
