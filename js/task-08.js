const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value &&
    event.currentTarget.elements.password.value
  ) {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(name, ":", value);
    });
    event.currentTarget.reset();
  } else {
    return alert("All fields must be completed!");
  }
});
