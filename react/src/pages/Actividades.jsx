import { Fragment, useState } from "react";
import usePagina from "../hooks/usePagina.js";
import NavLinks from "../components/NavLinks.jsx";
import Contador from "../components/Contador.jsx";
import css from "../styles/actividades.css?inline";

const FILTROS = [
  { id: "todas", texto: "Todas" },
  { id: "caminatas", texto: "Caminatas" },
  { id: "noche", texto: "Noche" },
  { id: "relax", texto: "Relax" },
];

const ACTIVIDADES = [
  {
    categoria: "caminatas",
    img: "/img/sendero.jpg",
    alt: "Sendero natural",
    titulo: "Sendero Natural",
    texto:
      "Circuito de 30-60 min por el terreno del hotel. Flora autóctona, fauna regional y formaciones naturales con carteles explicativos.",
    dato: "Duración:",
    valor: "30-60 min",
  },
  {
    categoria: "noche",
    img: "/img/fogon.jpg",
    alt: "Noche de fogón",
    titulo: "Noche de Fogón",
    texto:
      "Experiencia nocturna alrededor de un fogón bajo las estrellas. Música acústica, leyendas cordobesas y malvaviscos asados.",
    dato: "Horario:",
    valor: "Nocturno",
  },
  {
    categoria: "relax",
    img: "/img/mirador.jpg",
    alt: "Atardecer en las sierras",
    titulo: "Mirador del Atardecer",
    texto:
      "Rincón elevado con reposeras y vista panorámica para contemplar el atardecer serrano.",
    dato: "Tipo:",
    valor: "Panorámico",
  },
  {
    categoria: "caminatas",
    img: "/img/cascada.jpg",
    alt: "Excursión a cascadas",
    titulo: "Excursión a Cascadas",
    texto:
      "Salida de medio día hacia cascadas y arroyos cristalinos. Caminata guiada, tiempo libre y picnic regional.",
    dato: "Modalidad:",
    valor: "Guiada",
  },
];

const EXTRAS = [
  "Trekking Serrano",
  "Paseos en bicicleta",
  "Cabalgatas por las sierras",
  "Picnic Serrano",
  "Observación de estrellas",
  "Safari Fotográfico",
];

export default function Actividades() {
  usePagina("Actividades - Tigre Muerto", css);
  const [filtro, setFiltro] = useState("todas");

  return (
    <>
      <header>
        <nav className="header-nav" aria-label="Navegación principal">
          <NavLinks />
        </nav>
        <h1>Descubrí todo lo que TIGRE MUERTO tiene para ofrecer</h1>

        <p>Viví experiencias únicas en el corazón de las sierras</p>
      </header>

      <hr />

      <section className="stats-section" aria-label="Datos de nuestras actividades">
        <div className="stats-grid">
          <div className="stat-item">
            <Contador destino={7} />
            <span className="stat-label">Excursiones y actividades</span>
          </div>

          <div className="stat-item">
            <Contador destino={3182} />
            <span className="stat-label">Viajeros ya lo disfrutaron</span>
          </div>

          <div className="stat-item">
            <Contador destino={619} />
            <span className="stat-label">Opiniones reales</span>
          </div>

          <div className="stat-item">
            <Contador destino={8} decimales={1} sufijo=" / 10" />
            <span className="stat-label">Así nos puntúan</span>
          </div>
        </div>
      </section>

      <br />

      <main>
        <h2>Actividades y experiencias</h2>

        <div className="filtros" role="group" aria-label="Filtrar actividades">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              className={`filtro${filtro === f.id ? " activo" : ""}`}
              type="button"
              aria-pressed={filtro === f.id}
              onClick={() => setFiltro(f.id)}
            >
              {f.texto}
            </button>
          ))}
        </div>

        {ACTIVIDADES.map((a, i) => (
          <Fragment key={a.titulo}>
            <article hidden={filtro !== "todas" && a.categoria !== filtro}>
              <img src={a.img} alt={a.alt} width="300" />

              <h3>{a.titulo}</h3>

              <p>{a.texto}</p>

              <p>
                <strong>{a.dato}</strong> {a.valor}
              </p>
            </article>
            {i < ACTIVIDADES.length - 1 && <hr />}
          </Fragment>
        ))}
      </main>

      <hr />

      <section>
        <h2>También podés disfrutar</h2>

        <ul>
          {EXTRAS.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <hr />

      <footer>
        <p>Hotel Tigre Muerto - Córdoba</p>

        <p>Naturaleza, aventura y momentos inolvidables.</p>
      </footer>
    </>
  );
}
