const toggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");

if (toggle && navigation) {
  toggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation?.classList.remove("open");
  });
});
