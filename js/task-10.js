function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const itemGallery = document.querySelector("#boxes");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  let markup = "";

  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="background-color : ${getRandomHexColor()}; display : inline-block; padding: ${
      20 + 10 * i
    }px ${20 + 10 * i}px 0 0;"></div>`;
  }
  itemGallery.insertAdjacentHTML("afterbegin", markup);
}

valueInput.addEventListener("blur", (event) => {
  createBtn.addEventListener("click", createBoxes(event.currentTarget.value));
});

function destroyBoxes() {
  itemGallery.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
