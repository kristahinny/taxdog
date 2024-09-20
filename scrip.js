document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode adicionar a lógica para enviar os dados (ex: via AJAX)
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    
    alert("Mensagem enviada! Obrigado pelo contato, " + name + "!");
    
    // Limpa o formulário
    this.reset();
});
