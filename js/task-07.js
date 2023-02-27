const valueInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

valueInput.addEventListener("input", () => {
  textOutput.style.fontSize = valueInput.value + "px";
});
