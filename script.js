function sairDoJogo() {
  const confirmar = confirm("Deseja sair do jogo?");

  if (confirmar) {
    alert("Obrigado por jogar!");
    window.close();

    // Caso o navegador não permita fechar a aba:
    document.body.innerHTML = `
      <main class="tela-menu">
        <section class="menu-box">
          <h1>Até logo!</h1>
          <p class="subtitulo">Você saiu do jogo.</p>
          <a class="voltar" href="index.html">Voltar ao menu</a>
        </section>
      </main>
    `;
  }
}
