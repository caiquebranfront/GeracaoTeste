function calcularFinanciamento() {
  // Obter valores do formulário
  const valorTotal = parseFloat(document.getElementById("valor-total").value);
  const valorMensal = parseFloat(document.getElementById("valor-mensal").value);
  const taxaMensal = parseFloat(document.getElementById("taxa-mensal").value);

  // Validar valores
  if (isNaN(valorTotal) || isNaN(valorMensal) || isNaN(taxaMensal)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Inicializar variáveis
  let meses = 0;
  let saldoDevedor = valorTotal;
  let totalPago = 0;

  // Calcular valores mensais
  while (saldoDevedor > 0) {
    // Calcular juros mensais
    const jurosMensais = saldoDevedor * (taxaMensal / 100);
    // Calcular valor a ser pago este mês
    let valorMensalComJuros = valorMensal + jurosMensais;
    if (valorMensalComJuros > saldoDevedor) {
      valorMensalComJuros = saldoDevedor;
    }
    // Atualizar valores
    saldoDevedor -= valorMensalComJuros;
    totalPago += valorMensalComJuros;
    meses++;
  }

  // Exibir resultados
  document.getElementById("meses").textContent = meses;
  document.getElementById("total").textContent = totalPago.toFixed(2);
  document.getElementById("resultado").style.display = "block";
}