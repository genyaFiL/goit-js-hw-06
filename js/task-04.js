let counterValue = 0;
const counter = document.querySelector("#value");

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const handleClickButtonDecrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
buttonDecrement.addEventListener("click", handleClickButtonDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const handleClickButtonIncrement = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
buttonIncrement.addEventListener("click", handleClickButtonIncrement);
