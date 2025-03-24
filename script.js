let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itens-carrinho");
  itensCarrinho.innerHTML = "";
  
  carrinho.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(itemElement);
  });
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio! Adicione produtos.");
    return;
  }
  alert("Compra finalizada com sucesso!");
}

function pagarPix() {
  alert("Pagamento via PIX realizado com sucesso!");
}

function pagarMercadoPago() {
  alert("Redirecionando para o Mercado Pago...");
}
