const routes = {
  "/": "pages/home.html",
  "/about": "pages/about.html",
  "/education": "pages/education.html",
  "/experience": "pages/experience.html",
  "/projects": "pages/projects.html",
  "/skills": "pages/skills.html",
  404: "404.html",
};

// Fungsi untuk menangani navigasi halaman
const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["404"];

  const html = await fetch(route).then((response) => response.text());
  document.getElementById("main-content").innerHTML = html;

  highlightActiveLink(); // Perbarui link aktif
};

// Fungsi untuk mengubah URL tanpa reload
const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

// Fungsi untuk menyoroti link yang sedang aktif
const highlightActiveLink = () => {
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === window.location.pathname
    );
  });
};

// Jalankan saat halaman dimuat
window.onpopstate = handleLocation;
document.addEventListener("DOMContentLoaded", handleLocation);
