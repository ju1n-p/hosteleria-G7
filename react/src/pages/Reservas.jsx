import { useState } from "react";
import usePagina from "../hooks/usePagina.js";
import useAuth from "../hooks/useAuth.js";
import NavLinks from "../components/NavLinks.jsx";
import AuthModal from "../components/AuthModal.jsx";
import css from "../styles/reservas.css?inline";

const WA = "https://wa.me/5493515056770?text=";
const URL_RESERVA = `${WA}Hola!%20Quiero%20hacer%20una%20reserva%20en%20el%20Hotel%20Supano.`;
const URL_CONSULTA = `${WA}Hola!%20Quiero%20consultar%20por%20una%20reserva%20en%20el%20Hotel%20Supano.`;

const PRECIOS = [
  { personas: 2, precio: "$80.000" },
  { personas: 3, precio: "$90.000" },
  { personas: 4, precio: "$105.000" },
  { personas: 5, precio: "$115.000" },
  { personas: 6, precio: "$130.000" },
];

export default function Reservas() {
  usePagina("Hotel Supano", css);
  const { usuario, registrar, ingresar, salir } = useAuth();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [urlPendiente, setUrlPendiente] = useState(null);

  const abrirModal = (url = null) => {
    setUrlPendiente(url);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setUrlPendiente(null);
  };

  const terminarAuth = () => {
    cerrarModal();
    if (urlPendiente) window.open(urlPendiente, "_blank");
  };

  const onRegistro = (datos) => {
    if (!registrar(datos)) {
      alert("Este correo ya está registrado. Por favor inicia sesión.");
      return false;
    }
    terminarAuth();
    return true;
  };

  const onLogin = (datos) => {
    if (!ingresar(datos)) {
      alert("Correo o contraseña incorrectos.");
      return false;
    }
    terminarAuth();
    return true;
  };

  const reservar = (url) => (e) => {
    e.preventDefault();
    if (usuario) window.open(url, "_blank");
    else abrirModal(url);
  };

  return (
    <>
      <header className="header-principal">
        <div className="contenedor header-contenido">
          <div className="brand">HOTEL SUPANO</div>
          <nav className="nav-superior" aria-label="Navegación principal">
            <NavLinks claseLink="btn-nav" claseActivo="activo" claseCta="">
              <div id="user-status">
                {usuario ? (
                  <>
                    <span className="user-welcome">
                      👋 Hola, <strong>{usuario.nombre}</strong>
                    </span>
                    <button className="btn-nav" type="button" onClick={salir}>
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <button
                    className="btn-nav"
                    type="button"
                    onClick={() => abrirModal()}
                  >
                    Iniciar Sesión / Registro
                  </button>
                )}
              </div>
            </NavLinks>
          </nav>
        </div>
      </header>

      <div className="contenedor layout-pagina">
        <main className="contenido-principal">
          <section className="banner-titulo">
            <h1>HOTEL SUPANO</h1>
            <p className="subtitulo">Comodidad y calidad en Tigre Muerto</p>
          </section>

          <section className="grid-reservas">
            <article className="tarjeta promo-card">
              <span className="badge">PROMO 2x1 DÍAS</span>
              <h2>Habitación para 2</h2>
              <p className="descripcion-promo">
                Aprovechá el finde largo con tu pareja. Pagá solo 2 días, tienen
                3 incluidos con todos nuestros servicios.
              </p>
              <div className="precio-box">
                <span className="label-precio">Precio por día:</span>
                <span className="monto">$ 60.000</span>
              </div>
              <a
                className="boton-reservar"
                href={URL_RESERVA}
                target="_blank"
                rel="noopener"
                onClick={reservar(URL_RESERVA)}
              >
                RESERVAR
              </a>
            </article>

            <div className="foto-hotel">
              <img src="/img/hotel.jpg" alt="Hotel Supano" />
            </div>

            <article className="tarjeta tarjeta-precios">
              <h2>Precios por día</h2>
              <ul className="lista-precios">
                {PRECIOS.map((p) => (
                  <li key={p.personas}>
                    <strong>{p.personas} Personas:</strong> {p.precio} por día{" "}
                    <span>(Con servicios incluidos)</span>
                  </li>
                ))}
              </ul>
              <a
                className="boton-reservar"
                href={URL_CONSULTA}
                target="_blank"
                rel="noopener"
                onClick={reservar(URL_CONSULTA)}
              >
                RESERVAR
              </a>
            </article>

            <article className="tarjeta servicios">
              <h2>SERVICIOS INCLUIDOS</h2>
              <p>
                El hotel ofrece una amplia variedad de servicios para garantizar
                una estadía cómoda y agradable.
              </p>
              <div className="bloques-servicios">
                <p>
                  Cuenta con limpieza de habitaciones, cambio de toallas y ropa
                  de cama, aire acondicionado, calefacción, Wi-Fi gratuito,
                  televisión, recepción y atención al huésped.
                </p>
                <p>
                  También dispone de desayuno, restaurante, servicio a la
                  habitación, estacionamiento, lavandería y guardaequipaje.
                </p>
                <p>
                  Para el entretenimiento y descanso, ofrece piscina, gimnasio,
                  spa y áreas recreativas.
                </p>
              </div>
            </article>
          </section>
        </main>

        <aside className="lateral">
          <div className="tarjeta-contacto">
            <h2>HOTEL SUPANO</h2>
            <p className="bajada-reserva">HACÉ TU RESERVA</p>

            <div className="info-contacto">
              <h3>Consultas:</h3>
              <p className="telefono">+54 9 351 505-6770</p>
              <p className="redes">/ @supano.cba</p>
            </div>

            <a
              className="boton-reservar btn-sidebar"
              href={URL_CONSULTA}
              target="_blank"
              rel="noopener"
              onClick={reservar(URL_CONSULTA)}
            >
              RESERVAR POR WHATSAPP
            </a>
          </div>
        </aside>
      </div>

      <AuthModal
        abierto={modalAbierto}
        onCerrar={cerrarModal}
        onLogin={onLogin}
        onRegistro={onRegistro}
      />
    </>
  );
}
