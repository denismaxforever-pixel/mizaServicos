
// WhatsApp com feedback
function enviarWhatsApp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var mensagem = document.getElementById("mensagem").value;

  var numero = "5596991329948";
  var texto = `Olá, meu nome é ${nome}. Telefone: ${telefone}. Mensagem: ${mensagem}`;
  var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");

  const feedback = document.getElementById("feedback");
  feedback.innerText = "✅ Mensagem enviada! Você será redirecionado para o WhatsApp.";
  feedback.style.display = "block";
}

const switchDark = document.getElementById("switchDark");

function aplicarPreferencia() {
  if (localStorage.getItem("modo") === "escuro") {
    document.body.classList.add("dark-mode");
    switchDark.checked = true;
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "escuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

function ativarLinkMenu() {
  document.querySelectorAll('.logo-menu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelectorAll('.logo-menu a').forEach(function(item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

window.onload = function() {
  aplicarPreferencia();
  ativarLinkMenu();
};

switchDark.addEventListener("change", toggleDarkMode);
