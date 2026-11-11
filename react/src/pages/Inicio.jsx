import { Link } from "react-router-dom";
import usePagina from "../hooks/usePagina.js";
import NavLinks from "../components/NavLinks.jsx";
import Carrusel from "../components/Carrusel.jsx";
import css from "../styles/inicio.css?inline";

const SLIDES = [
  [
    {
      autor: "María López",
      iniciales: "ML",
      puntaje: "9/10",
      texto:
        "Increíble experiencia, el lugar es hermoso y muy limpio. Volveremos sin duda. El servicio al cliente fue de primera clase en todo momento.",
    },
    {
      autor: "Carlos Rodríguez",
      iniciales: "CR",
      puntaje: "8/10",
      texto:
        "Muy buena ubicación y atención. El desayuno podría mejorar un poco en variedad, pero el resto del hotel superó nuestras expectativas.",
    },
  ],
  [
    {
      autor: "Sofía Gómez",
      iniciales: "SG",
      puntaje: "10/10",
      texto:
        "Un paraíso terrenal. La paz del entorno y la calidez del personal son inigualables. Totalmente recomendado para desconectarse.",
    },
    {
      autor: "Lucas Benítez",
      iniciales: "LB",
      puntaje: "9.5/10",
      texto:
        "Las habitaciones son súper amplias, cómodas y limpias. Excelente relación precio-calidad en todos los servicios brindados.",
    },
  ],
  [
    {
      autor: "Ana Martínez",
      iniciales: "AM",
      puntaje: "9/10",
      texto:
        "Las vistas a las montañas son espectaculares desde el balcón. Un lugar ideal para ir en familia o en pareja durante el fin de semana.",
    },
    {
      autor: "Diego Peralta",
      iniciales: "DP",
      puntaje: "10/10",
      texto:
        "Instalaciones de primer nivel y excursiones guiadas imperdibles. La gastronomía local en el restaurante del hotel es exquisita.",
    },
  ],
];

const VALORES = [
  {
    titulo: "Naturaleza",
    texto:
      "Flora autóctona, vistas a las sierras y espacios al aire libre a pasos de tu habitación.",
  },
  {
    titulo: "Comodidad",
    texto:
      "Aire acondicionado, Wi-Fi, desayuno, piscina y spa para una estadía relajada.",
  },
  {
    titulo: "Experiencias",
    texto:
      "Excursiones guiadas, cabalgatas y observación de estrellas para recordar.",
  },
];

export default function Inicio() {
  usePagina("Hotel Supano", css);

  const enviar = (e) => {
    // El formulario original apuntaba a "#" (sin backend): se limpia al enviar.
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <header className="site-header">
        <div className="logo-container">
          <img
            src="https://placehold.co/180x60/ff8525/ffffff?text=Hotel+Supano"
            alt="Logo de Hotel Supano"
            className="logo"
          />
        </div>

        <nav className="main-nav" aria-label="Navegación principal">
          <NavLinks />
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Vení a conocer el hotel más
              <br />
              salvaje de la Argentina
            </h1>
            <p>
              Disfrutá de las mejores vistas y experiencias
              <br />
              en la mejor naturaleza de la provincia.
            </p>
          </div>

          <div className="hero-image-wrapper">
            <img src="/img/hotel.jpg" alt="Instalaciones del Hotel Supano" />
          </div>
        </section>

        <section className="about" id="nosotros">
          <div className="about-intro">
            <div className="about-text">
              <h2 className="section-title">Sobre nosotros</h2>
              <p>
                Hotel Supano nació para que descansar y vivir la naturaleza
                vayan de la mano. Estamos en Tigre Muerto, en pleno corazón de
                las sierras, rodeados de paisajes que invitan a desconectarse
                del ritmo de todos los días.
              </p>
              <p>
                Nos importa que cada huésped se sienta como en casa:
                habitaciones cómodas, atención cercana y servicios incluidos
                para que solo tengas que preocuparte por disfrutar. Y si querés
                salir a explorar, te ofrecemos senderos, excursiones a
                cascadas, noches de fogón y atardeceres serranos.
              </p>
              <Link className="about-link" to="/actividades">
                Conocé las actividades →
              </Link>
            </div>

            <div className="about-image">
              <img src="/img/fachada.jpg" alt="Fachada del Hotel Supano" />
            </div>
          </div>

          <div className="about-values">
            {VALORES.map((v) => (
              <article className="value-card" key={v.titulo}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="main-content">
          <div className="carousel-container">
            <h2 className="section-title">Lo que dicen nuestros huéspedes</h2>
            <Carrusel slides={SLIDES} />
          </div>

          <div className="contact-card" id="reservar">
            <h2>Contáctanos</h2>
            <p>Envíanos un mensaje y te responderemos a la brevedad.</p>

            <form onSubmit={enviar}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="+54 9 ..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                ></textarea>
              </div>

              <button type="submit">Enviar mensaje</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>HOTEL SUPANO &copy; Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
