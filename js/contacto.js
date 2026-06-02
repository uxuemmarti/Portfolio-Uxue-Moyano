// Función para inicializar el formulario
function inicializarFormularioContacto() {
  const formulario = document.querySelector("#formContacto");
  if (!formulario) return;

  // Detectamos el envío del formulario y lo detenemos para validarlo con JS

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Creamos una variable para controlar errores (si es false, todo está bien y se envía el formulario)

    let hayErrores = false;

    // Seleccionamos los campos del formulario para poder leer sus valores
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");
    const mensajeEnviado = document.querySelector("#mensajeEnviado");

    // Limpiamos todos los campos del formulario tras enviarlo
    nombre.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    mensaje.classList.remove("is-invalid");
    mensajeEnviado.classList.add("d-none");

    // Validación de nombre completo
    if (nombre.value.trim() === "") {
      nombre.classList.add("is-invalid");
      hayErrores = true;
    }

    // Validación de email (con @ obligatorio)
    if (email.value.trim() === "" || !email.value.includes("@")) {
      email.classList.add("is-invalid");
      hayErrores = true;
    }

    // Validación de mensaje
    if (mensaje.value.trim() === "") {
      mensaje.classList.add("is-invalid");
      hayErrores = true;
    }

    // Resultado final
    if (!hayErrores) {
      mensajeEnviado.classList.remove("d-none");

      nombre.value = "";
      email.value = "";
      mensaje.value = "";

      console.log("Mensaje de portfolio enviado con éxito.");
    }
  });
}

// Llamamos a la función
inicializarFormularioContacto();
