function atualizarContador() {
  const agora = new Date();
  const diferenca = dataEvento - agora;

  if (diferenca <= 0) {
    document.getElementById("tempo").innerText = "Evento iniciado!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("tempo").innerText =
    `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}