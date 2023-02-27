const valueInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

valueInput.addEventListener("input", (event) => {
  event.currentTarget.value == ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = event.currentTarget.value);
});
