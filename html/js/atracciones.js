//encontrar los números
const contadores = document.querySelectorAll(".stat-value[data-target]");

//a función que anima un número
function animarContador(elemento) {
	const destino = Number.parseFloat(elemento.dataset.target);
	const decimales = Number.parseInt(elemento.dataset.decimals || "0", 10);
	const sufijo = elemento.dataset.suffix || "";
	const duracion = 1500;
	const inicio = performance.now();

	function paso(ahora) {
		const progreso = Math.min((ahora - inicio) / duracion, 1);
		const valor = destino * progreso;

		elemento.textContent =
			valor.toLocaleString("es-AR", {
				minimumFractionDigits: decimales,
				maximumFractionDigits: decimales,
			}) + sufijo;

		if (progreso < 1) {
			requestAnimationFrame(paso);
		}
	}

	requestAnimationFrame(paso);
}

//el vigilante (cuándo arranca)
const observador = new IntersectionObserver(
	(entradas, observer) => {
		entradas.forEach((entrada) => {
			if (entrada.isIntersecting) {
				animarContador(entrada.target);
				observer.unobserve(entrada.target);
			}
		});
	},
	{ threshold: 0.5 },
);


contadores.forEach((contador) => observador.observe(contador));

//preparar el filtro

const botones = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll("main article");

//qué pasa al hacer clic
botones.forEach((boton) => {
	boton.addEventListener("click", () => {
		const categoria = boton.dataset.filtro;

		botones.forEach((otroBoton) => {
			const activo = otroBoton === boton;
			otroBoton.classList.toggle("activo", activo);
			otroBoton.setAttribute("aria-pressed", String(activo));
		});

		tarjetas.forEach((tarjeta) => {
			tarjeta.hidden =
				categoria !== "todas" && tarjeta.dataset.categoria !== categoria;
		});
	});
});
