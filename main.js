import "./assets/scss/all.scss";

const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const loginContent = document.getElementById("loginContent");
const registerContent = document.getElementById("registerContent");
const modalTitle = document.querySelector(".modal-title");

showRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginContent.classList.add("d-none");
  registerContent.classList.remove("d-none");
  if (modalTitle) modalTitle.textContent = "快速註冊";
});

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerContent.classList.add("d-none");
  loginContent.classList.remove("d-none");
  if (modalTitle) modalTitle.textContent = "登入";
});
