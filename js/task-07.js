const valueInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

textOutput.style.fontSize = "56px";
valueInput.addEventListener("input", () => {
  textOutput.style.fontSize = valueInput.value + "px";
});
