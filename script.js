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
  // Redirecionando o usuário para a interface de pagamento PIX (supondo que você tenha uma API backend para gerar o QR code)
  // Aqui, podemos simular o redirecionamento para um aplicativo de PIX.
  window.location.href = "https://www.bcb.gov.br/estabilidadefinanceira/pix";  // Exemplo de link do Banco Central para explicações sobre PIX, mas no real você geraria um link de pagamento.
}

function pagarMercadoPago() {
  // Aqui você irá gerar um pagamento real via Mercado Pago, ou você pode redirecionar para a interface do Mercado Pago.
  window.location.href = "https://www.mercadopago.com.br/"; // Este é o link do Mercado Pago. Na integração real, você geraria um link de pagamento específico.
}
