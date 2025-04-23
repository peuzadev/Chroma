const botao = document.getElementById("navmobile")
const navbar = document.getElementById("navbar")
const search = document.getElementById("input-lupa")

botao.addEventListener("click", () => {
    navbar.classList.toggle("open")
})

const cor1 = document.getElementById("cor1")
const cor2 = document.getElementById("cor2")
const cor3 = document.getElementById("cor3")

cor1.addEventListener("click", () => {
    cor1.classList.toggle("corAtiva")
    cor2.classList.remove("corAtiva")
    cor3.classList.remove("corAtiva")
})

cor2.addEventListener("click", () => {
    cor1.classList.remove("corAtiva")
    cor2.classList.toggle("corAtiva")
    cor3.classList.remove("corAtiva")
})

cor3.addEventListener("click", () => {
    cor1.classList.remove("corAtiva")
    cor2.classList.remove("corAtiva")
    cor3.classList.toggle("corAtiva")
})

const tamP = document.getElementById("tamP")
const tamM = document.getElementById("tamM")
const tamG = document.getElementById("tamG")
const tamGG = document.getElementById("tamGG")

tamP.addEventListener("click", () => {
    tamP.classList.toggle("tamAtivo")
    tamM.classList.remove("tamAtivo")
    tamG.classList.remove("tamAtivo")
    tamGG.classList.remove("tamAtivo")
})

tamM.addEventListener("click", () => {
    tamP.classList.remove("tamAtivo")
    tamM.classList.toggle("tamAtivo")
    tamG.classList.remove("tamAtivo")
    tamGG.classList.remove("tamAtivo")
})

tamG.addEventListener("click", () => {
    tamP.classList.remove("tamAtivo")
    tamM.classList.remove("tamAtivo")
    tamG.classList.toggle("tamAtivo")
    tamGG.classList.remove("tamAtivo")
})

tamGG.addEventListener("click", () => {
    tamP.classList.remove("tamAtivo")
    tamM.classList.remove("tamAtivo")
    tamG.classList.remove("tamAtivo")
    tamGG.classList.toggle("tamAtivo")
})

var qntd = document.getElementById("qntd").value
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")

mais.addEventListener("click", () => {
    qntd++
    document.getElementById("qntd").value = qntd
})

menos.addEventListener("click", () => {
    if (qntd > 1) {
        qntd--;
        document.getElementById("qntd").value = qntd;
    }
})

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

var imgPrincipal = document.getElementById("imgprincipal"); 

img1.addEventListener("click", () => {
    imgPrincipal.src = img1.src;
})

img2.addEventListener("click", () => {
    imgPrincipal.src = img2.src;
})

img3.addEventListener("click", () => {
    imgPrincipal.src = img3.src;
})






