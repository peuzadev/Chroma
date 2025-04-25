const botao = document.getElementById("navmobile");
const navbar = document.getElementById("navbar");
const search = document.getElementById("input-lupa");

botao.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

const btn = document.getElementById("toggleTheme");
    const icon = document.getElementById("icon");

    const moonIcon = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>`;
    const sunIcon = `
      <path d="M12 4.5a1 1 0 0 1 1 1v1.1a1 1 0 0 1-2 0v-1.1a1 1 0 0 1 1-1Zm6.36 1.64a1 1 0 0 1 1.41 1.41l-.78.78a1 1 0 0 1-1.41-1.41l.78-.78ZM19.5 11a1 1 0 1 1 0 2h-1.1a1 1 0 1 1 0-2h1.1ZM6.34 6.14a1 1 0 1 1 1.41 1.41l-.78.78A1 1 0 1 1 5.56 6.9l.78-.76ZM4.5 11a1 1 0 0 1 0 2H3.4a1 1 0 0 1 0-2h1.1Zm1.86 7.36a1 1 0 0 1-1.41-1.41l.78-.78a1 1 0 0 1 1.41 1.41l-.78.78Zm5.64 1.14a1 1 0 0 1-1-1v-1.1a1 1 0 0 1 2 0v1.1a1 1 0 0 1-1 1Zm7.36-1.64a1 1 0 0 1-1.41 1.41l-.78-.78a1 1 0 0 1 1.41-1.41l.78.78ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>`;

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      icon.innerHTML = isDark ? moonIcon : sunIcon;
    });