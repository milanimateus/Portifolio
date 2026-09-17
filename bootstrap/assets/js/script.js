document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlTag = document.documentElement;

  // 1. Gestão de Tema Claro / Escuro
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  function applyTheme(theme) {
    htmlTag.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      themeIcon.classList.remove("bi-moon-stars-fill");
      themeIcon.classList.add("bi-sun-fill");
    } else {
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-stars-fill");
    }
  }

  applyTheme(initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-bs-theme");
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // 2. Fechamento automático do menu colapsável mobile ao clicar em um link
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navCollapseElement = document.getElementById("navMenu");

  if (navCollapseElement) {
    const bsCollapse = new bootstrap.Collapse(navCollapseElement, {
      toggle: false,
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navCollapseElement.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }
});
