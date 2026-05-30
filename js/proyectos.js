// Array de proyectos

const proyectos = [
  {
    id: 1,
    titulo: "Proyecto 1",
    categoria: "interiores",
    imagen: "img/proyecto1.jpg",
    claseAltura: "altura-alta",
  },
  {
    id: 2,
    titulo: "Proyecto 2",
    categoria: "producto",
    imagen: "img/proyecto2.jpg",
    claseAltura: "altura-corta",
  },
  {
    id: 3,
    titulo: "Proyecto 3",
    categoria: "grafico",
    imagen: "img/proyecto3.jpg",
    claseAltura: "altura-media",
  },
  {
    id: 4,
    titulo: "Proyecto 4",
    categoria: "producto",
    imagen: "img/proyecto4.jpg",
    claseAltura: "altura-alta",
  },
  {
    id: 5,
    titulo: "Proyecto 5",
    categoria: "interiores",
    imagen: "img/proyecto5.jpg",
    claseAltura: "altura-corta",
  },
  {
    id: 6,
    titulo: "Proyecto 6",
    categoria: "grafico",
    imagen: "img/proyecto6.jpg",
    claseAltura: "altura-media",
  },
];

// Selección de elementos del HTML
const contenedorGrid = document.querySelector(".grid-proyectos");
const botonesFiltro = document.querySelectorAll(".filtro-item");

// Función para renderizar las tarjetas
// Recibe un array de proyectos y los transforma en HTML
function renderizarProyectos(listaProyectos) {
  // Limpiamos el contenedor por si había tarjetas antes
  contenedorGrid.innerHTML = "";

  // Recorremos el array y acumulamos el HTML
  listaProyectos.forEach((proyecto) => {
    // Primera letra en mayúscula
    const etiquetaCapitalizada =
      proyecto.categoria.charAt(0).toUpperCase() + proyecto.categoria.slice(1);

    const tarjetaHTML = `
      <div class="tarjeta-proyecto" data-category="${proyecto.categoria}">
        <div class="contenedor-tarjeta ${proyecto.claseAltura}">
          <div class="capa-imagen">
            <img src="${proyecto.imagen}" alt="Imagen de ${proyecto.titulo}" />
          </div>
          <div class="detalles-proyecto">
            <span class="categoria-etiqueta">${etiquetaCapitalizada}</span>
            <h3 class="titulo-tarjeta">${proyecto.titulo}</h3>
          </div>
        </div>
      </div>
    `;

    // Lo inyectamos en el grid
    contenedorGrid.innerHTML += tarjetaHTML;
  });
}

// Filtrado re-render
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Gestionar la clase activa en los botones
    botonesFiltro.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    // Capturar la categoría que queremos filtrar
    const filtroSeleccionado = e.target.getAttribute("data-filter");

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
