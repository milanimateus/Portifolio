document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlTag = document.documentElement;

  // Recupera o tema salvo ou usa a preferência do sistema operacional
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

  // Aplica o tema inicial
  applyTheme(initialTheme);

  // Alterna o tema no clique
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });
});
