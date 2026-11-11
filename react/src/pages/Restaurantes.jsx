import { Link } from "react-router-dom";
import usePagina from "../hooks/usePagina.js";
import NavLinks from "../components/NavLinks.jsx";
import css from "../styles/secciones.css?inline";

const SERVICIOS = [
  {
    img: "/img/restaurante.jpg",
    alt: "Salón del restaurante con mesas preparadas",
    titulo: "Restaurante",
    texto:
      "Un espacio para compartir comidas y descubrir sabores regionales en un entorno natural.",
  },
  {
    img: "/img/restaurante-snack.jpg",
    alt: "Interior de un espacio de cafetería y comidas",
    titulo: "Cafetería y comidas",
    texto:
      "Un ambiente cómodo para hacer una pausa y disfrutar algo rico durante el día.",
  },
  {
    img: "/img/desayuno.jpg",
    alt: "Variedad de frutas y opciones para el desayuno",
    titulo: "Desayuno",
    texto:
      "Empezá el día con el servicio de desayuno incluido en la propuesta del hotel.",
  },
  {
    img: "/img/barra.jpg",
    alt: "Barra del bar con bebidas y asientos",
    titulo: "Bares y bebidas",
    texto:
      "Consultanos por las opciones disponibles durante tu visita y encontrá un momento para relajarte.",
  },
  {
    img: "/img/cocteles.webp",
    alt: "Dos cócteles servidos en copas con rodajas de naranja",
    titulo: "Cócteles",
    texto: "Disfrutá de una bebida y un momento tranquilo en el bar del hotel.",
  },
  {
    img: "/img/servicio-habitacion.jpg",
    alt: "Desayuno servido en una habitación del hotel",
    titulo: "Servicio a la habitación",
    texto:
      "Disfrutá de tu desayuno con la comodidad de recibirlo en la habitación.",
  },
];

export default function Restaurantes() {
  usePagina("Restaurantes y bares - Hotel Supano", css);

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
          <p className="eyebrow">Sabores para disfrutar</p>
          <h1>Restaurantes y bares</h1>
          <p>
            Disfrutá de una experiencia gastronómica durante tu estadía, con
            desayuno, restaurante y servicio a la habitación.
          </p>
        </section>

        <section className="servicios-grid" aria-label="Servicios gastronómicos">
          {SERVICIOS.map((s) => (
            <article className="servicio-card" key={s.titulo}>
              <img className="servicio-imagen" src={s.img} alt={s.alt} />
              <h2>{s.titulo}</h2>
              <p>{s.texto}</p>
            </article>
          ))}
        </section>

        <p className="consulta">
          Para consultar menú, horarios y disponibilidad,{" "}
          <Link to="/nosotros">contactanos</Link>.
        </p>
      </main>

      <footer>
        <p>Hotel Supano · Naturaleza, descanso y buenos momentos.</p>
      </footer>
    </>
  );
}
