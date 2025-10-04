 const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    const button = acc[i];
    const panel = button.nextElementSibling;

    if (!panel) {
      continue;
    }

    button.addEventListener("click", function () {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // Usa o ResizeObserver para ajustar a altura do painel quando o conteúdo mudar
    const panelContent = panel.querySelector('.panel-content');
    if (panelContent) {
      const resizeObserver = new ResizeObserver(() => {
        // Apenas atualiza a altura se o painel estiver aberto
        if (panel.style.maxHeight) {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
      resizeObserver.observe(panelContent);
    }
  }
