const navToggle = document.querySelector(
  '[aria-controls="primary-navigation"]'
);
const primaryNav = document.querySelector("#primary-navigation");

navToggle.addEventListener("click", function toggleMenu() {
  const isOpened = navToggle.getAttribute("aria-expanded");

  if (isOpened === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});
