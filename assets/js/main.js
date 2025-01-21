document.addEventListener("DOMContentLoaded", function () {
  attachRouteHandlers(); // Pastikan event handler dipasang
  updateActiveLink(); // Perbarui class "active" setelah halaman dimuat

  function updateActiveLink() {
    let links = document.querySelectorAll("nav ul li a");
    let currentPath = window.location.pathname;

    links.forEach((link) => {
      let linkPath = link.getAttribute("href");
      if (currentPath === linkPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function attachRouteHandlers() {
    let links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        let path = link.getAttribute("href");
        history.pushState({}, "", path); // Ubah URL tanpa reload
        updateActiveLink(); // Perbarui class "active"
        handleLocation(); // Panggil handleLocation untuk memperbarui tampilan
      });
    });
  }

  // Tangani perubahan URL ketika pengguna menekan tombol back/forward di browser
  window.addEventListener("popstate", function () {
    handleLocation(); // Panggil handleLocation untuk memperbarui tampilan
  });

  // Jalankan saat halaman pertama kali dimuat
  window.onload = updateActiveLink;

  const checkbox = document.getElementById("checkbox");

  // Cek apakah sebelumnya dark mode diaktifkan
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true; // Pastikan toggle sesuai
  }

  // Toggle dark mode dan simpan ke localStorage
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Simpan status dark mode
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Simpan status light mode
    }
  });
});
