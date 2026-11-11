# Hotel Supano (React)

Migración del sitio estático (`/html`) a React con Vite y React Router.

## Rutas

| Ruta            | Página original     |
| --------------- | ------------------- |
| `/`             | `index.html`        |
| `/actividades`  | `atracciones.html`  |
| `/restaurantes` | `restaurantes.html` |
| `/nosotros`     | `nosotros.html`     |
| `/reservas`     | `html1.html`        |

## Ejecutar

```bash
cd react
npm install
npm run dev
```

`npm run build` genera la carpeta `dist/`.

## Notas

- Cada página conserva su hoja de estilos original (`src/styles`), que se
  carga solo mientras la página está activa.
- Las imágenes están en `public/img` (se renombraron las que tenían espacios o
  caracteres raros: `sendero.jpg`, `cascada.jpg`, `mirador.jpg`, `fogon.jpg`,
  `fachada.jpg`).
- Login / registro de reservas: simulado con `localStorage`, igual que antes.
