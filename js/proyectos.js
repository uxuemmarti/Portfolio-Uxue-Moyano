// Array de proyectos

const proyectos = [
  {
    id: 1,
    titulo: "Airstream",
    categoria: "interiores",
    imagen: "img/renderairst2.jpg",
    claseAltura: "altura-alta",
    url: "airstream.html",
  },
  {
    id: 2,
    titulo: "Bihur",
    categoria: "producto",
    imagen: "img/bihur1.jpg",
    claseAltura: "altura-corta",
    url: "bihur.html",
  },
  {
    id: 3,
    titulo: "DUO",
    categoria: "grafico",
    imagen: "img/duo3.jpg",
    claseAltura: "altura-media",
    url: "duo.html",
  },
  {
    id: 4,
    titulo: "Biomateriales",
    categoria: "producto",
    imagen: "img/biomat1.jpg",
    claseAltura: "altura-alta",
    url: "biomateriales.html",
  },
  {
    id: 5,
    titulo: "Torresblancas",
    categoria: "interiores",
    imagen: "img/mtorres2.webp",
    claseAltura: "altura-corta",
    url: "torresblancas.html",
  },
  {
    id: 6,
    titulo: "Garbancito",
    categoria: "grafico",
    imagen: "img/garbancito1.webp",
    claseAltura: "altura-media",
    url: "garbancito.html",
  },
];

// Selección de elementos del HTML
const contenedorGrid = document.querySelector(".grid-proyectos");
const botonesFiltro = document.querySelectorAll(".filtro-item");

// Función para renderizar las tarjetas
// Recibe un array de proyectos y los transforma en HTML
function renderizarProyectos(listaProyectos) {
  contenedorGrid.innerHTML = "";

  listaProyectos.forEach((proyecto) => {
    const etiquetaCapitalizada =
      proyecto.categoria.charAt(0).toUpperCase() + proyecto.categoria.slice(1);

    const tarjetaHTML = `
      <a href="${proyecto.url}" class="tarjeta-proyecto scroll text-decoration-none" data-category="${proyecto.categoria}">
        <div class="contenedor-tarjeta ${proyecto.claseAltura}">
          <div class="capa-imagen">
            <img src="${proyecto.imagen}" alt="Imagen de ${proyecto.titulo}" />
          </div>
          <div class="detalles-proyecto">
            <span class="categoria-etiqueta">${etiquetaCapitalizada}</span>
            <h3 class="titulo-tarjeta">${proyecto.titulo}</h3>
          </div>
        </div>
      </a>
    `;

    contenedorGrid.innerHTML += tarjetaHTML;
  });

  // =========================================================================
  // EL TRUCO: Volvemos a lanzar el evento de Scroll para que el JS de animaciones despierte
  // =========================================================================
  window.dispatchEvent(new Event("scroll"));
}

// Filtrado re-render
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Gestionar la clase activa en los botones
    botonesFiltro.forEach((b) => b.classList.remove("active"));
    e.currentTarget.classList.add("active");

    // Capturar la categoría que queremos filtrar
    const filtroSeleccionado = e.currentTarget.getAttribute("data-filter");

    if (filtroSeleccionado === "todos") {
      // Si pulsa todos, renderizamos el array completo original
      renderizarProyectos(proyectos);
    } else {
      // Si pulsa una categoría, filtramos el array y hacemos re-render con el nuevo conjunto
      const proyectosFiltrados = proyectos.filter(
        (proy) => proy.categoria === filtroSeleccionado,
      );
      renderizarProyectos(proyectosFiltrados);
    }
  });
});

// Render inicial
// Cuando la página carga por primera vez, pinta todos los proyectos automáticamente
renderizarProyectos(proyectos);
