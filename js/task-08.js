const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailData = event.currentTarget.elements.email;
  const passwordData = event.currentTarget.elements.password;

  if (emailData.value && passwordData.value) {
    const dataForm = {
      [emailData.name]: emailData.value,
      [passwordData.name]: passwordData.value,
    };

    console.log(dataForm);

    event.currentTarget.reset();
  } else {
    return alert("All fields must be completed!");
  }
});
