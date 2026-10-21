
const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");
const ano = document.getElementById("ano");

// Atualiza automaticamente o ano no rodapé
ano.textContent = new Date().getFullYear();

// Abre e fecha o menu em telas pequenas
botaoMenu.addEventListener("click", function () {
  const menuAberto = menu.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", menuAberto);
  botaoMenu.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu" : "Abrir menu"
  );

  botaoMenu.textContent = menuAberto ? "✕" : "☰";
});

// Fecha o menu depois que um link é selecionado
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    botaoMenu.textContent = "☰";
  });
});
