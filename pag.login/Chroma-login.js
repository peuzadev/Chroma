document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");

    // Expressão regular para validar o formato do email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Verificar se o email tem o formato válido
    if (!regexEmail.test(email)) {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, insira um email válido.";
        return; // Impede a execução da validação de senha se o email estiver errado
    }

    // Verifica se o usuário e a senha são válidos
    if (email === "admin@gmail" && senha === "1234") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login bem-sucedido!";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
});