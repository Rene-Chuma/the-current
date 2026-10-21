const password = document.querySelector("#exampleInputPassword1");
const confirmPassword = document.querySelector("#exampleInputPassword2");
const form = document.getElementById("form");
const firstName = document.querySelector("#firstName");

console.log(firstName);
console.log(password);
console.log(confirmPassword);
console.log(form);
form.addEventListener("submit", passwordVerification);
function passwordVerification(e) {
  e.preventDefault();
  if (password.value.length >= 8 && password.value.length <= 20) {
    console.log(password.value);
  } else {
    document.querySelector(".form-text").classList.add("text-danger");
    setTimeout(() => {
      document.querySelector(".form-text").classList.remove("text-danger");
    }, 2000);
    return;
  }
  if (password.value !== confirmPassword.value) {
    console.log("Passwords do not match");
    const newDiv = document.createElement("div");
    newDiv.id = "notMatching";
    newDiv.className = "text-danger";
    const newDivText = document.createTextNode("Passwords Do not match");
    newDiv.appendChild(newDivText);
    const container = document.querySelector(" section .container");
    const form = document.querySelector(" section #form");
    container.insertBefore(newDiv, form);
    setTimeout(() => {
      newDiv.style.display = "none";
    }, 3000);
  } else {
    const result = confirm(
      `Welcome ${firstName.value}!, you are an official member of The current`,
    );
    if (result) {
      form.reset();
    }
  }
}
