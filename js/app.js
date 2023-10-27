// let totalGeral;
// let totaGeral;
// limpar();
// limparTotal();

// function adicionarTotal() {
//     //recuperar valores nome do produto, quantidade de valor
//     let produtoTotal = document.getElementById('produtoTotal').value;
//     let nomeProdutoTotal = produtoTotal.split('-')[0];
//     let valorUnitarioTotal = produtoTotal.split('R$')[1];
//     let quantidadeTotal = document.getElementById('quantidadeTotal').value;
//     //calcular o preço, o nosso subtotal
//     let precoTotal = quantidadeTotal * valorUnitarioTotal;
//     let carrinhoTotal = document.getElementById('listaProdutosTotal');
//     //adicionar no carrinho
//     carrinhoTotal.innerHTML = carrinhoTotal.innerHTML + `<section class="carrinho__produtos__produto">
//     <span class="texto-azul">${quantidadeTotal}x</span> ${nomeProdutoTotal} <span class="texto-azul">R$${precoTotal}</span>
//   </section>`
//     //atualizar o valor total
//     totalGeral = totalGeral + precoTotal;
//     let campoTotalDeCaixas = document.getElementById('valorTotal');
//     campoTotalDeCaixas.textContent = `R$${totalGeral}`;
//     document.getElementById('quantidadeTotal').value = 0;
// }

// function limparTotal() {
//   totalGeral = 0;
//   document.getElementById('listaProdutosTotal').innerHTML = '';
//   document.getElementById('valorTotal').textContent = 'R$ 0';
// }



// function limpar() {
//     totaGeral = 0;
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').textContent = 'R$ 0';
// }

// function adicionar() {
//   //recuperar valores nome do produto, quantidade de valor
//   let produto = document.getElementById('produto').value;
//   let nomeProduto = produto.split('-')[0];
//   let valorUnitario = produto.split('R$')[1];
//   let quantidade = document.getElementById('quantidade').value;
//   //calcular o preço, o nosso subtotal
//   let preco = quantidade * valorUnitario;
//   let carrinho = document.getElementById('lista-produtos');
//   //adicionar no carrinho
//   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
//   <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
// </section>`
//   //atualizar o valor total
//   totaGeral = totaGeral + preco;
//   let campoTotal = document.getElementById('valor-total');
//   campoTotal.textContent = `R$${totaGeral}`;
//   document.getElementById('quantidade').value = 0;
// }



let totalGeral = parseFloat(localStorage.getItem('totalGeral')) || 0;
let totalGeralTotal = parseFloat(localStorage.getItem('totalGeralTotal')) || 0;

limpar();
limparTotal();

function adicionarTotal() {
  let produtoTotal = document.getElementById('produtoTotal').value;
  let nomeProdutoTotal = produtoTotal.split('-')[0];
  let valorUnitarioTotal = parseFloat(produtoTotal.split('R$')[1]);
  let quantidadeTotal = parseInt(document.getElementById('quantidadeTotal').value);

  let precoTotal = quantidadeTotal * valorUnitarioTotal;
  let carrinhoTotal = document.getElementById('listaProdutosTotal');

  carrinhoTotal.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeTotal}x</span> ${nomeProdutoTotal} <span class="texto-azul">R$${precoTotal.toFixed(2)}</span>
  </section>`;

  totalGeralTotal += precoTotal;
  let campoTotalDeCaixas = document.getElementById('valorTotal');
  campoTotalDeCaixas.textContent = `R$${totalGeralTotal.toFixed(2)}`;
  document.getElementById('quantidadeTotal').value = 0;

  // Atualiza o localStorage
  localStorage.setItem('totalGeralTotal', totalGeralTotal);
}

function limparTotal() {
  totalGeralTotal = 0;
  document.getElementById('listaProdutosTotal').innerHTML = '';
  document.getElementById('valorTotal').textContent = 'R$ 0.00';

  // Atualiza o localStorage
  localStorage.setItem('totalGeralTotal', totalGeralTotal);
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0.00';

  // Atualiza o localStorage
  localStorage.setItem('totalGeral', totalGeral);
}

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]);
  let quantidade = parseInt(document.getElementById('quantidade').value);

  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById('lista-produtos');

  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
  </section>`;

  totalGeral += preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;
  document.getElementById('quantidade').value = 0;

  // Atualiza o localStorage
  localStorage.setItem('totalGeral', totalGeral);
}
