const precos = {
    tamanho40: 105,
    tamanho42: 115,
    tamanho44: 125,
    tamanho46: 135
  };



const input = document.getElementById("quantidadeCalça");
const numero = input.value;
function atualizaPreco() {
  const quantidade = parseInt(input.value);
  const selecionado = document.querySelector('input[name="tamanho"]:checked');
  if (selecionado) {
    const tamanhoCalça = selecionado.value;
    const preco = precos[tamanhoCalça];
    const precoFinal = preco * quantidade;
    document.getElementById("txt").textContent = `O preço Final foi: ${preçoFinal}`;
  }
}



const botao = document.getElementById("troca-tema")
const solIcon = document.getElementById("sol-icon")
const luaIcon = document.getElementById("lua-icon")
function temas() {
    const darkMode = document.body.classList.toggle('dark')
    solIcon.style.display = darkMode ? "none" : "block";
    luaIcon.style.display = darkMode ? "block" : "none"
}