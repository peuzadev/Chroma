// ==========================================================
// CHROMA-DETAIL.JS - CÓDIGO FINAL E CONSOLIDADO
// SOLUÇÃO PARA 'precoTamanhoAtual is not defined' E UNIFICAÇÃO DE VARIÁVEIS
// ==========================================================

// --- 1. DECLARAÇÕES DE VARIÁVEIS E SELEÇÃO DE ELEMENTOS HTML (GLOBAL) ---
// Todas as variáveis 'const' e 'let' para elementos HTML
// e para o estado do produto/carrinho DEVEM ser declaradas aqui, no início do arquivo.

// Elementos da Navegação Geral
const botao = document.getElementById("navmobile");
const navbar = document.getElementById("navbar");
const searchInput = document.querySelector("#input-lupa input[type='text']"); // Correção para ID duplicado no HTML

// Elementos de Troca de Tema
const btnToggleTheme = document.getElementById("toggleTheme"); // Renomeado de 'btn' para evitar conflito
const iconTheme = document.getElementById("icon"); // Renomeado de 'icon'
const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>`;
const sunIcon = `<path d="M12 4.5a1 1 0 0 1 1 1v1.1a1 1 0 0 1-2 0v-1.1a1 1 0 0 1 1-1Zm6.36 1.64a1 1 0 0 1 1.41 1.41l-.78.78a1 1 0 0 1-1.41-1.41l.78-.78ZM19.5 11a1 1 0 1 1 0 2h-1.1a1 1 0 1 1 0-2h1.1ZM6.34 6.14a1 1 0 1 1 1.41 1.41l-.78.78A1 1 0 1 1 5.56 6.9l.78-.76ZM4.5 11a1 1 0 0 1 0 2H3.4a1 1 0 0 1 0-2h1.1Zm1.86 7.36a1 1 0 0 1-1.41-1.41l-.78-.78a1 1 0 0 1 1.41 1.41l-.78.78Zm5.64 1.14a1 1 0 0 1-1-1v-1.1a1 1 0 0 1 2 0v1.1a1 1 0 0 1-1 1Zm7.36-1.64a1 1 0 0 1-1.41 1.41l-.78-.78a1 1 0 0 1 1.41-1.41l.78.78ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>`;

// Elementos Específicos da Página de Detalhes do Produto (seus IDs)
const cor1 = document.getElementById("cor1");
const cor2 = document.getElementById("cor2");
const cor3 = document.getElementById("cor3");
const tamP = document.getElementById("tamP");
const tamM = document.getElementById("tamM");
const tamG = document.getElementById("tamG");
const tamGG = document.getElementById("tamGG");

const maisBtn = document.getElementById("mais"); // Renomeado de 'mais'
const menosBtn = document.getElementById("menos"); // Renomeado de 'menos'
const quantidadeInput = document.getElementById("qntd"); // Seu input de quantidade

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const imgPrincipal = document.getElementById("imgprincipal");

const precoCamisaElement = document.getElementById("precoCamisa"); // Onde o preço é exibido
const dadosProdutoAside = document.getElementById("dadosProduto"); // A aside com data-id, data-nome, data-preco
const addCarrinhoBtn = document.getElementById("addCarrinho"); // Seu botão "Adicionar ao Carrinho"

const opcoesCor = document.querySelectorAll("#coresDisponiveis .opcao-cor");
const opcoesTamanho = document.querySelectorAll("#tamDisponiveis .opcao-tamanho");


// --- VARIÁVEIS DE ESTADO UNIFICADAS PARA PREÇO E QUANTIDADE ---
// AGORA APENAS ESTAS DUAS SÃO USADAS E ATUALIZADAS
let precoTamanhoAtual; // Corresponde ao seu 'precoTamanho' antigo
let quantidadeSelecionada; // Corresponde ao seu 'quantidade' antigo


// Preços por tamanho (do seu script original - CRÍTICO!)
const precosTamanhos = {
    P: 110,   
    M: 120,   
    G: 130,   
    GG: 140   
};


// --- Elementos do Carrinho Flutuante (do meu código) ---
const CARRINHO_STORAGE_KEY = 'carrinhoChroma';
let carrinho = []; // Inicializado como vazio, será preenchido do localStorage no DOMContentLoaded

const carrinhoFlutuante = document.getElementById("carrinho-flutuante");
const carrinhoLista = document.getElementById("carrinho-lista");
const carrinhoTotal = document.getElementById("carrinho-total");
const iconeCarrinho = document.getElementById("icone-carrinho");
const fecharCarrinhoBtn = document.getElementById("fechar-carrinho");
const finalizarCompraBtn = document.getElementById("finalizar-compra");


// --- 2. FUNÇÕES ---

// Funções da Navegação Geral (Seus)
function toggleNavbar() {
    if (navbar) {
        navbar.classList.toggle("open");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    if (iconTheme) {
        iconTheme.innerHTML = isDark ? moonIcon : sunIcon;
    }
}

// Funções Específicas da Página de Detalhes do Produto (Suas)
/**
 * Atualiza o preço total exibido na tela com base na quantidade e tamanho selecionados.
 */
function atualizarPrecoExibido() {
    if (precoCamisaElement && precoTamanhoAtual !== undefined && !isNaN(precoTamanhoAtual) && 
        quantidadeSelecionada !== undefined && !isNaN(quantidadeSelecionada)) {
        let precoTotal = precoTamanhoAtual * quantidadeSelecionada;
        precoCamisaElement.textContent = `R$ ${precoTotal.toFixed(2)}`;
    } else {
        // Este warning deve ajudar a depurar se a inicialização não está perfeita
        console.warn("Aviso: Não foi possível atualizar o preço exibido. Verifique se precoCamisaElement, precoTamanhoAtual ou quantidadeSelecionada estão definidos e são válidos.");
    }
}


// Funções do Carrinho de Compras (do meu código)
function salvarCarrinho() {
    localStorage.setItem(CARRINHO_STORAGE_KEY, JSON.stringify(carrinho));
}

function abrirCarrinho() {
    if (carrinhoFlutuante) {
        carrinhoFlutuante.classList.add("open");
        atualizarCarrinhoHTML();
    } else {
        console.error("Erro no carrinho: Elemento '#carrinho-flutuante' não encontrado. Verifique seu HTML.");
    }
}

function fecharCarrinho() {
    if (carrinhoFlutuante) {
        carrinhoFlutuante.classList.remove("open");
    }
}

function atualizarCarrinhoHTML() {
    if (!carrinhoLista || !carrinhoTotal) {
        console.error("Erro no carrinho: Elementos (lista ou total) não encontrados. Verifique IDs.");
        return;
    }

    carrinhoLista.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        const liVazio = document.createElement("li");
        liVazio.textContent = "Seu carrinho está vazio.";
        liVazio.style.textAlign = "center";
        liVazio.style.fontStyle = "italic";
        carrinhoLista.appendChild(liVazio);
    } else {
        carrinho.forEach(item => {
            const li = document.createElement("li");
            const detalhesItem = [
                item.nome,
                `(${item.quantidade}x)`,
                (item.cor && item.cor !== 'N/A') ? `(${item.cor})` : '',
                (item.tamanho && item.tamanho !== 'N/A') ? `(${item.tamanho})` : '',
                `- R$ ${(item.preco * item.quantidade).toFixed(2)}`
            ].filter(Boolean).join(' ');

            li.innerHTML = `
                <span>${detalhesItem}</span>
                <button class="remover-item" data-id="${item.id}" data-cor="${item.cor || 'N/A'}" data-tamanho="${item.tamanho || 'N/A'}">Remover</button>
            `;
            carrinhoLista.appendChild(li);
            total += (item.preco * item.quantidade);
        });
    }

    carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;

    document.querySelectorAll(".remover-item").forEach(button => {
        button.addEventListener("click", (event) => {
            const idRemover = parseInt(event.target.dataset.id);
            const corRemover = event.target.dataset.cor;
            const tamanhoRemover = event.target.dataset.tamanho;
            removerDoCarrinho(idRemover, corRemover, tamanhoRemover);
        });
    });
}

function adicionarAoCarrinho(produto) {
    const itemExistenteIndex = carrinho.findIndex(
        item => item.id === produto.id && item.cor === produto.cor && item.tamanho === produto.tamanho
    );

    if (itemExistenteIndex !== -1) {
        carrinho[itemExistenteIndex].quantidade += produto.quantidade;
        console.log(`Carrinho: Quantidade de "${produto.nome}" (Cor: ${produto.cor}, Tamanho: ${produto.tamanho}) atualizada para ${carrinho[itemExistenteIndex].quantidade}.`);
    } else {
        carrinho.push(produto);
        console.log(`Carrinho: "${produto.nome}" (ID: ${produto.id}, Cor: ${produto.cor}, Tamanho: ${produto.tamanho}, Qntd: ${produto.quantidade}) adicionado.`);
    }

    salvarCarrinho();
    atualizarCarrinhoHTML();
    abrirCarrinho();
}

function removerDoCarrinho(id, cor, tamanho) {
    const index = carrinho.findIndex(
        item => item.id === id && item.cor === cor && item.tamanho === tamanho
    );

    if (index > -1) {
        const itemRemovido = carrinho[index];
        carrinho.splice(index, 1);
        salvarCarrinho();
        atualizarCarrinhoHTML();
        console.log(`Carrinho: "${itemRemovido.nome}" (ID: ${id}, Cor: ${cor}, Tamanho: ${tamanho}) removido.`);
    } else {
        console.log(`Carrinho: Item com ID ${id}, Cor ${cor}, Tamanho ${tamanho} não encontrado.`);
    }
}


// --- 3. EVENT LISTENERS ---

// Event Listeners da Navegação Geral
if (botao) {
    botao.addEventListener("click", toggleNavbar);
}

if (btnToggleTheme) {
    btnToggleTheme.addEventListener("click", toggleTheme);
}


// Event Listeners Específicos da Página de Detalhes do Produto

// Lógica de seleção de cores (Sua lógica)
if (cor1) { // Verifica se o elemento existe
    cor1.addEventListener("click", () => {
        cor1.classList.toggle("corAtiva");
        cor2.classList.remove("corAtiva");
        cor3.classList.remove("corAtiva");
    });
}
if (cor2) {
    cor2.addEventListener("click", () => {
        cor1.classList.remove("corAtiva");
        cor2.classList.toggle("corAtiva");
        cor3.classList.remove("corAtiva");
    });
}
if (cor3) {
    cor3.addEventListener("click", () => {
        cor1.classList.remove("corAtiva");
        cor2.classList.remove("corAtiva");
        cor3.classList.toggle("corAtiva");
    });
}

// Lógica de seleção de tamanhos (Sua lógica, unificada para usar 'precoTamanhoAtual')
if (tamP) {
    tamP.addEventListener("click", () => {
        tamP.classList.toggle("tamAtivo");
        tamM.classList.remove("tamAtivo");
        tamG.classList.remove("tamAtivo");
        tamGG.classList.remove("tamAtivo");
        precoTamanhoAtual = precosTamanhos.P; // ATUALIZA precoTamanhoAtual
        atualizarPrecoExibido();
    });
}
if (tamM) {
    tamM.addEventListener("click", () => {
        tamP.classList.remove("tamAtivo");
        tamM.classList.toggle("tamAtivo");
        tamG.classList.remove("tamAtivo");
        tamGG.classList.remove("tamAtivo");
        precoTamanhoAtual = precosTamanhos.M; // ATUALIZA precoTamanhoAtual
        atualizarPrecoExibido();
    });
}
if (tamG) {
    tamG.addEventListener("click", () => {
        tamP.classList.remove("tamAtivo");
        tamM.classList.remove("tamAtivo");
        tamG.classList.toggle("tamAtivo");
        tamGG.classList.remove("tamAtivo");
        precoTamanhoAtual = precosTamanhos.G; // ATUALIZA precoTamanhoAtual
        atualizarPrecoExibido();
    });
}
if (tamGG) {
    tamGG.addEventListener("click", () => {
        tamP.classList.remove("tamAtivo");
        tamM.classList.remove("tamAtivo");
        tamG.classList.remove("tamAtivo");
        tamGG.classList.toggle("tamAtivo");
        precoTamanhoAtual = precosTamanhos.GG; // ATUALIZA precoTamanhoAtual
        atualizarPrecoExibido();
    });
}

// Botões de Aumentar/Diminuir Quantidade (Sua lógica, unificada para usar 'quantidadeSelecionada')
if (menosBtn && quantidadeInput && maisBtn) {
    menosBtn.addEventListener("click", () => {
        let currentVal = parseInt(quantidadeInput.value);
        if (currentVal > parseInt(quantidadeInput.min || 1)) { // Garante min é 1 se não definido
            quantidadeInput.value = currentVal - 1;
            quantidadeSelecionada = parseInt(quantidadeInput.value); // ATUALIZA quantidadeSelecionada
            atualizarPrecoExibido();
        }
    });

    maisBtn.addEventListener("click", () => {
        let currentVal = parseInt(quantidadeInput.value);
        quantidadeInput.value = currentVal + 1;
        quantidadeSelecionada = parseInt(quantidadeInput.value); // ATUALIZA quantidadeSelecionada
        atualizarPrecoExibido();
    });

    // Campo de input de Quantidade (Sua lógica, unificada para usar 'quantidadeSelecionada')
    quantidadeInput.addEventListener('input', function() {
        let val = parseInt(this.value);
        if (isNaN(val) || val < 1) {
            this.value = 1;
        }
        quantidadeSelecionada = parseInt(this.value); // ATUALIZA quantidadeSelecionada
        atualizarPrecoExibido();
    });
}

// Troca de Imagem (Sua lógica)
if (img1 && img2 && img3 && imgPrincipal) {
    img1.addEventListener("click", () => { imgPrincipal.src = img1.src; });
    img2.addEventListener("click", () => { imgPrincipal.src = img2.src; });
    img3.addEventListener("click", () => { imgPrincipal.src = img3.src; });
}

// Event Listener para o botão "Adicionar ao Carrinho" (do meu código)
if (addCarrinhoBtn && dadosProdutoAside && quantidadeInput) {
    addCarrinhoBtn.addEventListener("click", () => {
        let produtoId;
        let produtoNome;
        let produtoPreco;
        let quantidade;
        let cor;
        let tamanho;

        try {
            if (dadosProdutoAside && dadosProdutoAside.dataset && dadosProdutoAside.dataset.id) {
                produtoId = parseInt(dadosProdutoAside.dataset.id);
                if (isNaN(produtoId)) throw new Error("ID do produto inválido.");
            } else {
                throw new Error("Elemento '#dadosProduto' ou seu 'data-id' não encontrado.");
            }

            if (dadosProdutoAside && dadosProdutoAside.dataset && dadosProdutoAside.dataset.nome) {
                produtoNome = dadosProdutoAside.dataset.nome.trim();
                if (!produtoNome) throw new Error("Nome do produto vazio.");
            } else {
                throw new Error("Elemento '#dadosProduto' ou seu 'data-nome' não encontrado.");
            }

            // --- CRÍTICO: VERIFICA SE O PREÇO ATUAL ESTÁ DEFINIDO ---
            if (precoTamanhoAtual === undefined || isNaN(precoTamanhoAtual) || precoTamanhoAtual < 0) {
                 throw new Error("Preço do produto inválido ou não definido ('precoTamanhoAtual'). Verifique a lógica de inicialização/atualização do preço.");
            }
            produtoPreco = precoTamanhoAtual;

            if (quantidadeInput && quantidadeInput.value) {
                quantidade = parseInt(quantidadeInput.value);
                if (isNaN(quantidade) || quantidade < 1) throw new Error("Quantidade inválida.");
            } else {
                throw new Error("Elemento '#qntd' ou seu valor não encontrado.");
            }

            const corSelecionadaElement = document.querySelector("#coresDisponiveis .opcao-cor.active");
            cor = corSelecionadaElement ? corSelecionadaElement.dataset.cor || "N/A" : "N/A";

            const tamanhoSelecionadoElement = document.querySelector("#tamDisponiveis .opcao-tamanho.active");
            tamanho = tamanhoSelecionadoElement ? tamanhoSelecionadoElement.dataset.tamanho || "N/A" : "N/A";

        } catch (error) {
            console.error("Carrinho: Erro ao coletar dados do produto para adição:", error.message, error);
            alert(`Não foi possível adicionar o produto ao carrinho: ${error.message}`);
            return;
        }

        const itemParaAdicionar = {
            id: produtoId,
            nome: produtoNome,
            preco: produtoPreco,
            quantidade: quantidade,
            cor: cor,
            tamanho: tamanho
        };
        adicionarAoCarrinho(itemParaAdicionar);
    });
} else {
    console.warn("Carrinho: Aviso: Elementos HTML para o botão 'Adicionar ao Carrinho' ou dados do produto não foram encontrados no DOM. O botão pode não funcionar.");
}


// Event Listeners para o Painel do Carrinho (do meu código)
if (iconeCarrinho) {
    iconeCarrinho.addEventListener("click", (event) => {
        event.preventDefault();
        abrirCarrinho();
    });
} else {
    console.warn("Carrinho: Aviso: Elemento '#icone-carrinho' não encontrado no HTML. O ícone do carrinho pode não funcionar.");
}

if (fecharCarrinhoBtn) {
    fecharCarrinhoBtn.addEventListener("click", fecharCarrinho);
} else {
    console.warn("Carrinho: Aviso: Elemento '#fechar-carrinho' não encontrado.");
}

if (finalizarCompraBtn) {
    finalizarCompraBtn.addEventListener("click", () => {
        if (carrinho.length > 0) {
            alert("Sua compra foi finalizada! Total: " + carrinhoTotal.textContent);
            carrinho = [];
            salvarCarrinho();
            atualizarCarrinhoHTML();
            fecharCarrinho();
        } else {
            alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra!");
        }
    });
} else {
    console.warn("Carrinho: Aviso: Elemento '#finalizar-compra' não encontrado.");
}


// --- 4. INICIALIZAÇÃO DA PÁGINA (Executa quando o DOM está pronto) ---
document.addEventListener("DOMContentLoaded", () => {
    // Carrega o carrinho do localStorage
    carrinho = JSON.parse(localStorage.getItem(CARRINHO_STORAGE_KEY)) || [];

    // --- CRÍTICO: INICIALIZAÇÃO DAS VARIÁVEIS DE PREÇO E QUANTIDADE AO CARREGAR A PÁGINA ---
    if (dadosProdutoAside) {
        let precoBaseFromData = parseFloat(dadosProdutoAside.dataset.preco);
        precoTamanhoAtual = isNaN(precoBaseFromData) ? 0 : precoBaseFromData; 
    } else {
        console.warn("Aviso: Elemento '#dadosProduto' não encontrado no carregamento. Preço inicial pode estar incorreto.");
        precoTamanhoAtual = 0; // Fallback
    }

    if (quantidadeInput) {
        let qtyFromInput = parseInt(quantidadeInput.value);
        quantidadeSelecionada = (isNaN(qtyFromInput) || qtyFromInput < 1) ? 1 : qtyFromInput;
        quantidadeInput.value = quantidadeSelecionada;
    } else {
        console.warn("Aviso: Elemento '#qntd' não encontrado no carregamento. Quantidade inicial pode estar incorreta.");
        quantidadeSelecionada = 1; // Fallback
    }

    // Define a opção de tamanho 'M' como ativa por padrão e atualiza o preço,
    // se nenhuma opção de tamanho estiver ativa (para garantir um preço inicial).
    const tamMDefault = document.getElementById('tamM');
    if (tamMDefault && !document.querySelector("#tamDisponiveis .opcao-tamanho.active")) {
        tamMDefault.classList.add('active');
        if (precosTamanhos && precosTamanhos.M !== undefined) { 
            precoTamanhoAtual = precosTamanhos.M;
        } else {
            console.warn("Aviso: 'precosTamanhos.M' não definido. Preço inicial do produto pode estar incorreto.");
        }
    }
    
    atualizarPrecoExibido(); // Chama para exibir o preço inicial correto na UI
    atualizarCarrinhoHTML(); // Carrega o carrinho do localStorage e atualiza sua exibição
});