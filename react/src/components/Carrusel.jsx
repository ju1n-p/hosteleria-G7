import { useState } from "react";

export default function Carrusel({ slides }) {
  const [indice, setIndice] = useState(0);
  const total = slides.length;

  // Ciclo continuo (loop)
  const ir = (destino) => {
    if (destino < 0) setIndice(total - 1);
    else if (destino >= total) setIndice(0);
    else setIndice(destino);
  };

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel-arrow prev"
        aria-label="Diapositiva anterior"
        onClick={() => ir(indice - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="carousel-arrow next"
        aria-label="Diapositiva siguiente"
        onClick={() => ir(indice + 1)}
      >
        ›
      </button>

      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {slides.map((resenias, i) => (
            <div className="carousel-slide" key={i}>
              {resenias.map((r) => (
                <article className="review-card" key={r.autor}>
                  <div className="review-header">
                    <img
                      src={`https://placehold.co/100x100/222222/ffffff?text=${r.iniciales}`}
                      alt={`Foto de ${r.autor}`}
                    />
                    <div className="review-author">
                      <h4>{r.autor}</h4>
                      <span className="rating">{r.puntaje} ★</span>
                    </div>
                  </div>
                  <p className="review-body">{r.texto}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`dot${i === indice ? " active" : ""}`}
            aria-label={`Ir a diapositiva ${i + 1}`}
            onClick={() => ir(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
