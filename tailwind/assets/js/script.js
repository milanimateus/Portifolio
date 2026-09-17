document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlTag = document.documentElement;

  // 1. Gestão de Tema Claro / Escuro via classe "dark"
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  function applyTheme(theme) {
    if (theme === "dark") {
      htmlTag.classList.add("dark");
      themeIcon.classList.remove("bi-moon-stars-fill");
      themeIcon.classList.add("bi-sun-fill");
    } else {
      htmlTag.classList.remove("dark");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-stars-fill");
    }
    localStorage.setItem("theme", theme);
  }

  applyTheme(initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const isDark = htmlTag.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
  });

  // 2. Menu Mobile (Abrir, Fechar e Colapso automático ao clicar)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".nav-link-mobile");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
