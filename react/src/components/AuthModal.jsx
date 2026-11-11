import { useState } from "react";

export default function AuthModal({ abierto, onCerrar, onLogin, onRegistro }) {
  const [tab, setTab] = useState("login");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [registro, setRegistro] = useState({ nombre: "", email: "", password: "" });

  const enviarRegistro = (e) => {
    e.preventDefault();
    const datos = {
      nombre: registro.nombre.trim(),
      email: registro.email.trim().toLowerCase(),
      password: registro.password,
    };
    if (onRegistro(datos)) setRegistro({ nombre: "", email: "", password: "" });
  };

  const enviarLogin = (e) => {
    e.preventDefault();
    const datos = {
      email: login.email.trim().toLowerCase(),
      password: login.password,
    };
    if (onLogin(datos)) setLogin({ email: "", password: "" });
  };

  return (
    <div
      id="auth-modal"
      className={`modal-overlay${abierto ? " activo" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onCerrar();
      }}
    >
      <div className="modal-contenido">
        <button className="modal-close" type="button" onClick={onCerrar}>
          &times;
        </button>
        <div className="modal-tabs">
          <button
            type="button"
            className={`tab-btn${tab === "login" ? " activa" : ""}`}
            onClick={() => setTab("login")}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            className={`tab-btn${tab === "register" ? " activa" : ""}`}
            onClick={() => setTab("register")}
          >
            Registrarse
          </button>
        </div>

        <form
          className="form-auth"
          style={{ display: tab === "login" ? "flex" : "none" }}
          onSubmit={enviarLogin}
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button type="submit" className="btn-submit">
            Ingresar y Reservar
          </button>
        </form>

        <form
          className="form-auth"
          style={{ display: tab === "register" ? "flex" : "none" }}
          onSubmit={enviarRegistro}
        >
          <input
            type="text"
            placeholder="Nombre completo"
            required
            value={registro.nombre}
            onChange={(e) => setRegistro({ ...registro, nombre: e.target.value })}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={registro.email}
            onChange={(e) => setRegistro({ ...registro, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={registro.password}
            onChange={(e) => setRegistro({ ...registro, password: e.target.value })}
          />
          <button type="submit" className="btn-submit">
            Registrarme y Reservar
          </button>
        </form>
      </div>
    </div>
  );
}
