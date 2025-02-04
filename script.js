"use strict";

const submitButton = document.querySelector(".create__account-btn");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password1");
const passwordConfirmInput = document.getElementById("password2");
const statusMessage = document.querySelector(".status__message");

// function to handle message state
function showMessage() {
  // show error message
  statusMessage.classList.add("visible");
}

function removeMessage() {
  statusMessage.classList.remove("visible");
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  //   alert("Input values submitted");
  if (firstNameInput.value === "") {
    showMessage();
  } else {
    removeMessage();
  }
});
