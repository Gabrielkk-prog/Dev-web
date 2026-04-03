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

document.addEventListener("DOMContentLoaded", function() {
    // Máscara de telefone
    const telefoneInput = document.getElementById("telefone");
    if (telefoneInput) {
        telefoneInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                e.target.value = value;
            }
        });
    }

    const cadastroForm = document.getElementById("cadastro-form");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            console.log("Submit event triggered");
            event.preventDefault();
            console.log("Form submitted");
            
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
            cadastroForm.reset();
        });
    } else {
        console.log("Form not found");
    }
});