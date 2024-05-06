function calculaTotal() {
  var total = null;
  const valorConta = document.getElementById("valorConta");
  const numeroPessoas = document.getElementById("numeroPessoas");
  const checkboxSim = document.getElementById("sim");

  if (checkboxSim.checked) {
    const porcentagem = getElementById("porcentagem");
    total = (valorConta * porcentagem) / 100 / numeroPessoas;
    alert(total);
  } else {
    total = valorConta / numeroPessoas;
    document.getElementById("total").setAttribute("data-valor", total);
  }
}
