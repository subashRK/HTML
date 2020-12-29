const form = document.querySelector("form");
const password = document.querySelector("#password").value;
const passwordConfirmation = document.querySelector("#password-confirmation")
  .vlaue;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password !== passwordConfirmation) {
    alert("Two passwords did not match");
  }
});
