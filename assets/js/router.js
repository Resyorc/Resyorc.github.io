const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "../pages/404.html",
  "/": "../index.html",
  "/about": "../pages/about.html",
  "/education": "../pages/education.html",
  "/experience": "../pages/experience.html",
  "/projects": "../pages/projects.html",
  "/skills": "../pages/skills.html",
};

const handleLocation = async () => {
  let path = window.location.pathname;
  path = path === "/" ? path : path.replace(/\/$/, ""); // Ensure no trailing slash
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
