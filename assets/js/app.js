
const btnEnviar = document.getElementById('btn-enviar');

const validar = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');
  const form = document.getElementById('formulario')

  //Validación del nombre.
  if (nombre.value.trim().length < 2){
    alert("El nombre debe tener al menos 2 caracteres.")
    nombre.focus();
    return false;
  }
  if (!/^[a-zA-Z\s]+$/.test(nombre.value)) {
    alert("El nombre sólo debe contener letras y espacios.");
    nombre.focus();
    return false;
  }

  //Validación del correo electrónico.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Por favor, escribe un correo electrónico válido.");
    email.focus();
    return false;
  }

  //Validación del asunto.
  if (asunto.value.trim().length < 4){
    alert("El asunto debe tener al manos 4 caracteres.");
    asunto.focus();
    return false;
  }

  //Validación del mensaje.
  if (mensaje.value.trim().length < 10){
    alert("El mensaje debe tener al menos 10 caracteres.");
    mensaje.focus();
    return false;
  }

  alert("El formulario se envió exitosamente.")
  btnEnviar.disabled = true; //Previene envios múltiples.
  form.reset(); //Vacía el formulario después del envío.
  return true;
}

//Agrega evento al botón.
btnEnviar.addEventListener('click', validar);
