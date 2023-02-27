function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  text.textContent = hexColor;
  bodyColor.style.backgroundColor = hexColor;
});
