const dataEvento = new Date(2026, 7, 23, 19, 0, 0);

function atualizarContador() {
    const agora = new Date();
    const diferenca = dataEvento - agora;
    const dias = Math.max(0, Math.floor(diferenca / (1000 * 60 * 60 * 24)));
    const horas = Math.max(0, Math.floor((diferenca / (1000 * 60 * 60)) % 24));
    const minutos = Math.max(0, Math.floor((diferenca / (1000 * 60)) % 60));
    const segundos = Math.max(0, Math.floor((diferenca / 1000) % 60));

    document.getElementById("tempo").innerText = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

const cadastroForm = document.getElementById("cadastro-form");
if (cadastroForm) {
    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const message = document.getElementById("cadastro-message");
        message.innerText = "Cadastro realizado com sucesso! Obrigado por participar.";
        message.style.display = "block";
        message.scrollIntoView({ behavior: "smooth", block: "center" });
        cadastroForm.reset();
    });
}