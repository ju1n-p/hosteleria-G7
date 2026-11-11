import { useLayoutEffect } from "react";

/**
 * Cada página original tenía su propia hoja de estilos (con reglas globales
 * como body/html/*). Para conservar el aspecto exacto, la hoja se inserta
 * al montar la página y se quita al desmontarla.
 */
export default function usePagina(titulo, css) {
  useLayoutEffect(() => {
    const anterior = document.title;
    document.title = titulo;

    const style = document.createElement("style");
    style.dataset.pagina = titulo;
    style.textContent = css;
    document.head.appendChild(style);

    return () => {
      style.remove();
      document.title = anterior;
    };
  }, [titulo, css]);
}
