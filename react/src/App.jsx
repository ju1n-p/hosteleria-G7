import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Actividades from "./pages/Actividades.jsx";
import Restaurantes from "./pages/Restaurantes.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Reservas from "./pages/Reservas.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="*" element={<Inicio />} />
    </Routes>
  );
}
