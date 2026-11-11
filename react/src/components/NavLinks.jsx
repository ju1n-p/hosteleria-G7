import { Link, useLocation } from "react-router-dom";

const ENLACES = [
  { to: "/", texto: "Inicio" },
  { to: "/actividades", texto: "Actividades" },
  { to: "/restaurantes", texto: "Restaurantes y bares" },
  { to: "/nosotros", texto: "Contacto / Nosotros" },
  { to: "/reservas", texto: "Reservas", cta: true },
];

/**
 * Enlaces de navegación compartidos. Cada hoja de estilos usa nombres de
 * clase distintos, por eso se parametrizan.
 */
export default function NavLinks({
  claseLink = "nav-link",
  claseActivo = "active",
  claseCta = "nav-cta",
  children,
}) {
  const { pathname } = useLocation();

  return (
    <>
      {ENLACES.map(({ to, texto, cta }) => {
        const activo = pathname === to;
        const clases = [claseLink, activo ? claseActivo : "", cta ? claseCta : ""]
          .filter(Boolean)
          .join(" ");
        return (
          <Link
            key={to}
            to={to}
            className={clases}
            aria-current={activo ? "page" : undefined}
          >
            {texto}
          </Link>
        );
      })}
      {children}
    </>
  );
}
