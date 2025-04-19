//calculo de valor da calça
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
// botao troca tema
const botao = document.getElementById("troca-tema")
const solIcon = document.getElementById("sol-icon")
const luaIcon = document.getElementById("lua-icon")
function temas() {
    const darkMode = document.body.classList.toggle('dark')
    solIcon.style.display = darkMode ? "none" : "block";
    luaIcon.style.display = darkMode ? "block" : "none"
}

// aviso para o cliente depois dele colocar o seu email
const botaoEnvio = document.getElementById("envio-email")
function alertEmail() {
        window.alert("Você receberá notificações diariamente sobre nossa marca, INCLUINDO PROMOÇÕES E DESCONTOS!");
}