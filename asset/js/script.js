const dataEvento = new Date(2026, 7, 23, 19, 0, 0);
const Ambos = document.getElementById('marcarTodos');
const campoTexto = document.getElementById('opiniao');
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

function cadastrar() {
    console.log("Cadastrar function called");
    
    // Validação simples
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const area = document.getElementById("area").value;
    
    if (!nome || !email || !area) {
        alert("Por favor, preencha todos os campos obrigatórios: Nome, Email e Área de atuação.");
        return;
    }
    
    const message = document.getElementById("cadastro-message");
    message.innerText = "Cadastro realizado com sucesso! Obrigado por participar.";
    message.style.display = "block";
    message.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("cadastro-form").reset();
}


        
            // CHECKBOX "OUTROS"
     document.addEventListener("DOMContentLoaded", function () {

    let outrosCheck = document.getElementById("outrosCheck");
    let outrosTexto = document.getElementById("outrosTexto");

    outrosCheck.addEventListener("change", function () {

        if (this.checked) {
            outrosTexto.disabled = false;
            outrosTexto.required = true;
        } else {
            outrosTexto.disabled = true;
            outrosTexto.required = false;
            outrosTexto.value = "";
        }
        });
    }
);