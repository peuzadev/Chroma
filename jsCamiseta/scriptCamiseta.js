const precos = {
    P: 30,
    M: 35,
    G: 40,
    GG: 45
  };

const input = document.getElementById("quantidadeCamiseta");
const numero = input.value;
function atualizaPreco() {
  const quantidade = parseInt(input.value);
  const selecionado = document.querySelector('input[name="tamanho"]:checked');
  if (selecionado) {
    const tamanhoCamiseta = selecionado.value;
    const preco = precos[tamanhoCamiseta];
    const precoFinal = preco * quantidade;
    document.getElementById("txt").textContent = `O preço Final foi: ${preçoFinal}`;
  }
  }

  // botao troca tema
const botao = document.getElementById("troca-tema")
const solIcon = document.getElementById("sol-icon")
const luaIcon = document.getElementById("lua-icon")
function temas() {
    const darkMode = document.body.classList.toggle('dark')
    solIcon.style.display = darkMode ? "none" : "block";
    luaIcon.style.display = darkMode ? "block" : "none"
}