/*=====  TOGGLE MENU  ======*/
const navMenu = document.querySelector(".navbar__content");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenuBtn = document.getElementById("close-menu");

if (toggleMenu && closeMenuBtn) {
  toggleMenu.addEventListener("click", () => {
    navMenu.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  function closeMenu() {
    navMenu.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  closeMenuBtn.addEventListener("click", closeMenu);
}
