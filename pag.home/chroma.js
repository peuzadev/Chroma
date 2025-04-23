const botao = document.getElementById("navmobile");
const navbar = document.getElementById("navbar");
const search = document.getElementById("input-lupa");

botao.addEventListener("click", () => {
    navbar.classList.toggle("open");
});