// Animaciones

// 1. Al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const esPaginaDetalle = document.querySelector(".seccion-detalle-proyecto");

  if (!esPaginaDetalle) {
    // Buscamos todos los elementos con la clase .scroll
    const elementosScroll = document.querySelectorAll(".scroll");

    if (elementosScroll.length > 0) {
      const observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("elemento-visible");
            } else {
              entrada.target.classList.remove("elemento-visible");
            }
          });
        },
        {
          threshold: 0.15,
        },
      );

      elementosScroll.forEach((elemento) => {
        elemento.classList.add("elemento-oculto");
        observador.observe(elemento);
      });
    }
  }

  //2. Aparición

  // Seleccionamos los elementos que queremos que aparezcan nada más entrar
  const elementosInmediatos = document.querySelectorAll(".aparicion");

  // Les añadimos la clase oculta base para que no peguen un parpadeo
  elementosInmediatos.forEach((el) => el.classList.add("elemento-oculto"));

  // Esperamos un microsegundo tras la carga para que la transición CSS sea visible y suave
  setTimeout(() => {
    elementosInmediatos.forEach((el) => el.classList.add("elemento-visible"));
  }, 100);

  // 3. Saltitos
  const botonDescubrir = document.querySelector(".tu-clase-boton-descubrir"); // <-- Cambia esto por la clase real de tu botón descubrir

  if (botonDescubrir) {
    botonDescubrir.classList.add("animacion-saltito");
  }
});
