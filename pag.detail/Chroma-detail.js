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

//troca tema
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

// CALCULADORA DE PREÇO
const precosTamanhos = {
    P: 110,   
    M: 120,   
    G: 130,   
    GG: 140   
};

let precoTamanho = 120;  
let quantidade = 1;

document.getElementById('tamP').addEventListener('click', function() {
    precoTamanho = precosTamanhos.P;
    atualizarPreco();
});

document.getElementById('tamM').addEventListener('click', function() {
    precoTamanho = precosTamanhos.M;
    atualizarPreco();
});

document.getElementById('tamG').addEventListener('click', function() {
    precoTamanho = precosTamanhos.G;
    atualizarPreco();
});

document.getElementById('tamGG').addEventListener('click', function() {
    precoTamanho = precosTamanhos.GG;
    atualizarPreco();
});

document.getElementById('mais').addEventListener('click', function() {
    quantidade++;
    document.getElementById('qntd').value = quantidade;
    atualizarPreco();
});

document.getElementById('menos').addEventListener('click', function() {
    if (quantidade > 1) {
        quantidade--;
        document.getElementById('qntd').value = quantidade;
        atualizarPreco();
    }
});

document.getElementById('qntd').addEventListener('input', function() {
    quantidade = parseInt(document.getElementById('qntd').value);
    atualizarPreco();
});

function atualizarPreco() {
    let precoTotal = precoTamanho * quantidade;

    document.getElementById('precoCamisa').textContent = `R$ ${precoTotal.toFixed(2)}`;
}

atualizarPreco();



