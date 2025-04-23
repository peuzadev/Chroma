const precos = {
    P: 30,
    M: 35,
    G: 40,
    GG: 45
  };

  const inputQuantidade = document.getElementById("Quantidade");
  const elementoResultado = document.getElementById("valor-total");
  const radiosTamanho = document.querySelectorAll('input[name="tamanho"]');
  
  function atualizaPreco() {
    const quantidade = parseInt(inputQuantidade.value);
    const selecionado = document.querySelector('input[name="tamanho"]:checked');
  
    if (selecionado) {
      const tamanhoCamiseta = selecionado.value;
      const preco = precos[tamanhoCamiseta];
  
      if (preco !== undefined) {
        const precoFinal = preco * quantidade;
        elementoResultado.textContent = ` R$ ${precoFinal.toFixed(2)}`;
      } else {
        elementoResultado.textContent = "Preço não encontrado para o tamanho selecionado.";
      }
    } else {
      elementoResultado.textContent = "Selecione um tamanho.";
    }
  }
  radiosTamanho.forEach(radio => {
    radio.addEventListener("change", atualizaPreco);
  });
  inputQuantidade.addEventListener("input", atualizaPreco);
  atualizaPreco();

  // botao troca tema
const botao = document.getElementById("troca-tema")
const solIcon = document.getElementById("sol-icon")
const luaIcon = document.getElementById("lua-icon")
function temas() {
    const darkMode = document.body.classList.toggle('dark')
    solIcon.style.display = darkMode ? "none" : "block";
    luaIcon.style.display = darkMode ? "block" : "none"
}