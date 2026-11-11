import { useState } from "react";

const leer = (clave, defecto) => {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? defecto;
  } catch {
    return defecto;
  }
};

/** Registro / login simulado con localStorage (igual que el sitio original). */
export default function useAuth() {
  const [usuario, setUsuario] = useState(() => leer("hotel_active_user", null));

  const guardarActivo = (u) => {
    localStorage.setItem("hotel_active_user", JSON.stringify(u));
    setUsuario(u);
  };

  const registrar = ({ nombre, email, password }) => {
    const users = leer("hotel_users", []);
    if (users.find((u) => u.email === email)) return false;
    const nuevo = { nombre, email, password };
    users.push(nuevo);
    localStorage.setItem("hotel_users", JSON.stringify(users));
    guardarActivo(nuevo);
    return true;
  };

  const ingresar = ({ email, password }) => {
    const user = leer("hotel_users", []).find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) return false;
    guardarActivo(user);
    return true;
  };

  const salir = () => {
    localStorage.removeItem("hotel_active_user");
    setUsuario(null);
  };

  return { usuario, registrar, ingresar, salir };
}
