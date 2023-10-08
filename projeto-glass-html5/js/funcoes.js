function mudaFoto(foto) {
  document.getElementById("icone").src = foto;
}

function calcTotal() {
  var qtd = parseInt(document.getElementById('cQtd').value);
  var total = qtd * 1500;
  document.getElementById('cPre').value = "R$ " + total.toFixed(2);
}