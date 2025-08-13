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

// 關閉mod轉換頁面換頁面

const serviceLink = document.getElementById("serviceLink");
const hamModal = document.getElementById("hamModal");

serviceLink.addEventListener("click", function (e) {
  // e.preventDefault(); // 阻止預設跳轉
  // const bsModal = bootstrap.Modal.getInstance(hamModal);
  // bsModal.hide(); // 關閉 modal

  // 等 modal 完全關閉後再跳轉
  hamModal.addEventListener(
    "hidden.bs.modal",
    function () {
      window.location.href = serviceLink.href;
    },
    { once: true }
  ); // 只監聽一次
});
