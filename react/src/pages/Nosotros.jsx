import { Link } from "react-router-dom";
import usePagina from "../hooks/usePagina.js";
import NavLinks from "../components/NavLinks.jsx";
import css from "../styles/secciones.css?inline";

export default function Nosotros() {
  usePagina("Contacto y nosotros - Hotel Supano", css);

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">
          HOTEL SUPANO
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <NavLinks />
        </nav>
      </header>

      <main className="contenedor">
        <section className="intro">
          <p className="eyebrow">Estamos para ayudarte</p>
          <h1>Contacto y acerca de nosotros</h1>
          <p>
            Somos Hotel Supano, en Tigre Muerto, Córdoba. Queremos que disfrutes
            de la naturaleza, el descanso y las experiencias de las sierras.
          </p>
        </section>

        <section className="contacto-grid">
          <article className="contacto-card">
            <h2>Cómo llegar</h2>
            <p>Encontranos en Tigre Muerto, Córdoba.</p>
            <div className="mapa-ubicacion">
              <iframe
                src="https://www.google.com/maps?q=-32.25,-64.683342&z=15&output=embed"
                title="Mapa de ubicación de Tigre Muerto, Córdoba"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <a
              className="boton-contacto"
              href="https://maps.app.goo.gl/Z2NtXusydcYikhZ66"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir ubicación en Google Maps
            </a>
          </article>
          <article className="contacto-card">
            <h2>También podés encontrarnos</h2>
            <p>
              <strong>Teléfono:</strong> +54 9 351 505-6770
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/supano.cba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @supano.cba
              </a>
            </p>
            <p>
              <strong>Ubicación:</strong> Tigre Muerto, Córdoba
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>Hotel Supano · Naturaleza, descanso y buenos momentos.</p>
      </footer>
    </>
  );
}
