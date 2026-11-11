import { useEffect, useRef, useState } from "react";

const formatear = (valor, decimales, sufijo) =>
  valor.toLocaleString("es-AR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }) + sufijo;

/** Número que se anima de 0 al destino al entrar en pantalla. */
export default function Contador({ destino, decimales = 0, sufijo = "" }) {
  const ref = useRef(null);
  const [texto, setTexto] = useState(formatear(destino, decimales, sufijo));

  useEffect(() => {
    const elemento = ref.current;
    let frame;

    const animar = () => {
      const duracion = 1500;
      const inicio = performance.now();
      const paso = (ahora) => {
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        setTexto(formatear(destino * progreso, decimales, sufijo));
        if (progreso < 1) frame = requestAnimationFrame(paso);
      };
      frame = requestAnimationFrame(paso);
    };

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            animar();
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    observador.observe(elemento);

    return () => {
      observador.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [destino, decimales, sufijo]);

  return (
    <span className="stat-value" ref={ref}>
      {texto}
    </span>
  );
}
