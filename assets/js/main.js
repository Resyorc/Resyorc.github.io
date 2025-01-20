document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
      highLightActiveLink();
    });

  function highLightActiveLink() {
    let links = document.querySelectorAll("nav ul li a");
    let currentPath = window.location.pathname.split("/").pop();
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
});
