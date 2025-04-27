document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault(); 
  
    // Obter os valores dos campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");
  
    // usa a constante e o modulo if e else para validar ps requisitos do cadastro
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      mensagem.style.color = "red";
      mensagem.textContent = "Por favor, insira um email válido.";
      return; // Interrompe a execução do código, pois a validação falhou
    }
  
    // Validar senha
    if (password.length < 6) {
      mensagem.style.color = "red";
      mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
      return; // Interrompe a execução do código, pois a validação falhou
    }
  
    // Se todas as validações passarem
    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";
  });
  