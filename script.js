document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(e => e.remove());

    // Name validation
    if (name.length < 3) {
        displayError("name", "O nome deve ter pelo menos 3 caracteres.");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!emailPattern.test(email)) {
        displayError("email", "Por favor, insira um email válido.");
        isValid = false;
    }

    // Phone validation (11 digits, Brazilian format)
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        displayError("phone", "O telefone deve ter 11 dígitos (DDD + 9 dígitos).");
        isValid = false;
    }

    // Address validation
    if (address.length < 5) {
        displayError("address", "O endereço deve ter pelo menos 5 caracteres.");
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        displayError("password", "A senha deve ter pelo menos 6 caracteres.");
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        displayError("confirmPassword", "As senhas não coincidem.");
        isValid = false;
    }

    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        document.getElementById("customerForm").reset();
    }
});

function displayError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

// Toolbar functions
document.getElementById("saveBtn").addEventListener("click", function() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        password: document.getElementById("password").value
    };
    // In a real application, you would send this data to a server or save to local storage
    console.log("Dados salvos:", formData);
    alert("Dados salvos com sucesso! (Simulado)");
});

document.getElementById("openBtn").addEventListener("click", function() {
    // In a real application, you would load data from a server or local storage
    alert("Função 'Abrir' não implementada neste exemplo. (Simulado)");
});

document.getElementById("exitBtn").addEventListener("click", function() {
    if (confirm("Tem certeza que deseja sair? As alterações não salvas serão perdidas.")) {
        window.close(); // Tenta fechar a janela/aba do navegador
        // Fallback para ambientes onde window.close() não funciona (ex: algumas abas)
        alert("Você saiu do formulário. (Simulado)");
        document.getElementById("customerForm").reset();
    }
});


