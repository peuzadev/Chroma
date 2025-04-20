const precos = [120, 130, 140, 145]; // P, M, G, GG

  function atualizaPreco() {
    const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
    const quantidade = parseInt(document.getElementById("Quantidade").value, 10);
    const valorElemento = document.getElementById("valor");

    if (!tamanhoSelecionado) {
      valorElemento.textContent = "Por favor, selecione um tamanho.";
      return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
      valorElemento.textContent = "Por favor, insira uma quantidade válida.";
      return;
    }

    const precoUnitario = precos[parseInt(tamanhoSelecionado.value)];
    const precoFinal = precoUnitario * quantidade;
    const cor = document.querySelector('input[name="cor"]:checked');
    const corReal = cor.value;

    if (quantidade == 1) {
      valorElemento.textContent = `Preço total da camisa ${corReal}: R$ ${precoFinal.toFixed(2)}`;
    }

    else if (quantidade > 1) {
      valorElemento.textContent = `Preço total das camisas: R$ ${precoFinal.toFixed(2)}`;
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