let totalGeral;
let totaGeral;


// Novas variáveis para armazenar as chaves e valores
let produtoTotal = "";
let nomeProdutoTotal = "";
let valorUnitarioTotal = "";
let quantidadeTotal = 0;
let precoTotal = 0;

limpar();
limparTotal();

// Função para adicionar um produto ao carrinho
function adicionarTotal() {
  // Recuperar os valores do produto
  produtoTotal = document.getElementById("produtoTotal").value;
  nomeProdutoTotal = produtoTotal.split("-")[0];
  valorUnitarioTotal = produtoTotal.split("R$")[1];
  quantidadeTotal = document.getElementById("quantidadeTotal").value;

  // Calcular o preço
  precoTotal = quantidadeTotal * valorUnitarioTotal;

  // Adicionar o produto ao carrinho
  let carrinhoTotal = document.getElementById("listaProdutosTotal");
  carrinhoTotal.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeTotal}x</span> ${nomeProdutoTotal} <span class="texto-azul">R$${precoTotal}</span>
  </section>`;

  // Atualizar o valor total
  totalGeral += precoTotal;
  let campoTotalDeCaixas = document.getElementById("valorTotal");
  campoTotalDeCaixas.textContent = `R$${totalGeral}`;
  document.getElementById("quantidadeTotal").value = 0;

  // Armazenar os dados no LocalStorage
  localStorage.setItem("produtoTotal", JSON.stringify(produtoTotal));
  localStorage.setItem("nomeProdutoTotal", JSON.stringify(nomeProdutoTotal));
  localStorage.setItem("valorUnitarioTotal",JSON.stringify(valorUnitarioTotal));
  localStorage.setItem("quantidadeTotal", JSON.stringify(quantidadeTotal));
  localStorage.setItem("precoTotal", JSON.stringify(precoTotal));
 
}

// Função para limpar o carrinho
function limparTotal() {
  totalGeral = 0;
  produtoTotal = "";
  nomeProdutoTotal = "";
  valorUnitarioTotal = "";
  quantidadeTotal = 0;
  precoTotal = 0;

  // Limpar o carrinho
  let carrinhoTotal = document.getElementById("listaProdutosTotal");
  carrinhoTotal.innerHTML = "";

  // Limpar o valor total
  let campoTotalDeCaixas = document.getElementById("valorTotal");
  campoTotalDeCaixas.textContent = "R$ 0";

  // Remover os dados do LocalStorage
  localStorage.removeItem("produtoTotal");
  localStorage.removeItem("nomeProdutoTotal");
  localStorage.removeItem("valorUnitarioTotal");
  localStorage.removeItem("quantidadeTotal");
  localStorage.removeItem("precoTotal");
}

// Funções para limpar o carrinho e o valor total
function limpar() {
  totaGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}

// Função para adicionar um produto ao carrinho
function adicionar() {
  // Recuperar os valores do produto
  produto = document.getElementById("produto").value;
  nomeProduto = produto.split("-")[0];
  valorUnitario = produto.split("R$")[1];
  quantidade = document.getElementById("quantidade").value;

  // Calcular o preço
  preco = quantidade * valorUnitario;

  // Adicionar o produto ao carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  // Atualizar o valor total
  totaGeral += preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$${totaGeral}`;
  document.getElementById("quantidade").value = 0;
}