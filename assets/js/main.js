const menuButton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.querySelectorAll("#menu a").forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
