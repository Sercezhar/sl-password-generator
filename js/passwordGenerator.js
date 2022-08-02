const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const randomPassword = document.querySelector(".random-password");
const notification = document.querySelector(".notification");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

randomPassword.value = generatePassword();

function generatePassword() {
  const result = (randomPassword.value =
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2));

  return result;
}

function copyPassword() {
  navigator.clipboard.writeText(randomPassword.value);

  notification.classList.add("show-notification");
  window.setTimeout(() => {
    notification.classList.remove("show-notification");
  }, 2000);
}
