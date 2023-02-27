const valueInput = document.querySelector("#validation-input");

valueInput.addEventListener("blur", () => {
  valueInput.value.length == valueInput.getAttribute("data-length")
    ? valueInput.classList.add("valid")
    : valueInput.classList.add("invalid");
});

valueInput.addEventListener("focus", () => {
  valueInput.classList.remove("valid", "invalid");
});
