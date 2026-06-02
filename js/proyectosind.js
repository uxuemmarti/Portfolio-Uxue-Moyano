//Función para mostrar las imágenes en grande:

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos el modal y la imagen de dentro
  const lightboxModal = new bootstrap.Modal(
    document.getElementById("lightboxModal"),
  );
  const imagenLightbox = document.getElementById("imagenLightbox");

  // Escuchamos el clic en cualquier imagen que esté dentro del carrusel
  document.querySelectorAll(".img-carrusel").forEach((imagen) => {
    // Le indicamos al cursor que se transforme en una lupa al pasar por encima
    imagen.style.cursor = "zoom-in";

    imagen.addEventListener("click", function () {
      // Pasamos la ruta de la imagen clicada al modal
      imagenLightbox.src = this.src;
      // Mostramos el modal
      lightboxModal.show();
    });
  });
});
