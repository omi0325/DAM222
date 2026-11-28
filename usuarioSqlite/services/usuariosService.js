export function validarUsuario(nombre, edad) {

  if (nombre.trim() === '' || edad.trim() === '') {

    alert('Todos los campos son obligatorios');
    return false;

  }

  if (isNaN(Number(edad)) || Number(edad) <= 0 ||
      !Number.isInteger(Number(edad))) {

    alert('Ingresa una edad válida');
    return false;

  }

  return true;
}