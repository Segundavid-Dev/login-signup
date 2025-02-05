"use strict";

const submitButton = document.querySelector(".create__account-btn");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password1");
const passwordConfirmInput = document.getElementById("password2");
const statusMessage = document.querySelectorAll(".status__message");
const error = document.querySelectorAll(".error");
const correct = document.querySelectorAll(".correct");

// function to handle message state
function showMessage(inputValue) {
  // show error message
  let statusMessage = inputValue
    .closest(".form__input--child")
    .querySelector(".status__message");

  let error = inputValue.closest(".form__input--child").querySelector(".error");

  let correct = inputValue
    .closest(".form__input--child")
    .querySelector(".correct");

  if (statusMessage) {
    statusMessage.classList.add("visible");
  }

  if (error) {
    error.classList.add("show");
    correct.classList.remove("show");
  }
}

function removeMessage(inputValue) {
  // remove error message
  let statusMessage = inputValue
    .closest(".form__input--child")
    .querySelector(".status__message");

  let correct = inputValue
    .closest(".form__input--child")
    .querySelector(".correct");

  let error = inputValue.closest(".form__input--child").querySelector(".error");

  if (statusMessage) {
    statusMessage.classList.remove("visible");
  }

  if (correct) {
    correct.classList.add("show");
    error.classList.remove("show");
  }
}

function emailValidation(inputValue) {
  // confirm valid email input
  let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return validEmail.test(inputValue);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // user firstname validation
  if (firstNameInput.value === "") {
    showMessage(firstNameInput);
  } else {
    removeMessage(firstNameInput);
  }

  // user lastname validation
  if (lastNameInput.value === "") {
    showMessage(lastNameInput);
  } else {
    removeMessage(lastNameInput);
  }

  // email validation
  if (emailValidation(emailInput.value)) {
    removeMessage(emailInput);
  } else {
    showMessage(emailInput);
  }

  // password validation
  if (passwordInput.value === "") {
    showMessage(passwordInput);
  } else {
    removeMessage(passwordInput);
  }

  // confirm password validation
  if (passwordConfirmInput.value === "") {
    showMessage(passwordConfirmInput);
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    showMessage(passwordConfirmInput);
  } else {
    removeMessage(passwordConfirmInput);
  }
});
