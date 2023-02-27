function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.body.classList.add("body-color");
const bodyColor = document.querySelector(".body-color");
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", (event) => {
  const hexColor = getRandomHexColor();
  text.textContent = hexColor;
  bodyColor.style.backgroundColor = hexColor;
});
