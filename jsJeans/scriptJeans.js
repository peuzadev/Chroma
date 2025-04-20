//calculo de preço da calça
const precosCalca = {
  tamanho40: 160,
  tamanho42: 165,
  tamanho44: 170,
  tamanho46: 175
};


function atualizaPrecoCalca() {
  const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
  const quantidade = parseInt(document.getElementById("quantidadeCalça").value, 10);
  const valorElemento = document.getElementById("valorCalca");

  if (!tamanhoSelecionado) {
    valorElemento.textContent = "Por favor, selecione um tamanho.";
    return;
  }

  if (Number.isNaN(quantidade) || quantidade <= 0) {
    valorElemento.textContent = "Por favor, insira uma quantidade válida.";
    return;
  }
  const cor = document.querySelector('input[name="cor"]:checked');
  const corReal = cor.value;
  const precoUnitario = precosCalca[tamanhoSelecionado.value];
  const precoFinal = precoUnitario * quantidade;

  if (quantidade == 1) {
    valorElemento.textContent = `Preço total da calça ${corReal}: R$ ${precoFinal.toFixed(2)}`;

  }

   else if (quantidade > 1) {
    valorElemento.textContent = `Preço total das calças: R$ ${precoFinal.toFixed(2)}`;
   }
}
//troca tema botão
const botao = document.getElementById("troca-tema")
const solIcon = document.getElementById("sol-icon")
const luaIcon = document.getElementById("lua-icon")
function temas() {
    const darkMode = document.body.classList.toggle('dark')
    solIcon.style.display = darkMode ? "none" : "block";
    luaIcon.style.display = darkMode ? "block" : "none"
}