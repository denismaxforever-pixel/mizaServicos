
    // WhatsApp com feedback
function enviarWhatsApp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var mensagem = document.getElementById("mensagem").value;

  var numero = "5596991329948";
  var texto = `Olá, meu nome é ${nome}. Telefone: ${telefone}. Mensagem: ${mensagem}`;
  var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");

  // Feedback visual
  const feedback = document.getElementById("feedback");
  feedback.innerText = "✅ Mensagem enviada! Você será redirecionado para o WhatsApp.";
  feedback.style.display = "block";
}

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // salva preferência
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "escuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

// ao carregar a página, aplica preferência
window.onload = function() {
  if (localStorage.getItem("modo") === "escuro") {
    document.body.classList.add("dark-mode");
    document.getElementById("switchDark").checked = true;
  }
};
