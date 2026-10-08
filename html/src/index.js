document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsNav = document.getElementById("carouselDots");
  const dots = Array.from(dotsNav.children);

  let currentIndex = 0;
  const totalSlides = slides.length;

  /**
   * Actualiza la posición de la pista y el estado visual de los puntos.
   * @param {number} targetIndex - Índice al que se desea desplazar.
   */
  const updateCarousel = (targetIndex) => {
    // Manejo del ciclo continuo (loop)
    if (targetIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (targetIndex >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = targetIndex;
    }

    // Desplazamiento mediante CSS Transform
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar punto activo
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  // Event listeners para los botones de dirección
  prevBtn.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
  });

  // Event listener delegado para la barra de puntos
  dotsNav.addEventListener("click", (event) => {
    const targetDot = event.target.closest(".dot");
    if (!targetDot) return;

    const targetIndex = parseInt(targetDot.dataset.index, 10);
    updateCarousel(targetIndex);
  });
});
