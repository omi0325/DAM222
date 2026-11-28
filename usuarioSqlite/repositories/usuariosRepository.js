
import { conectarBD } from '../database/database';

// Registrar usuario
export async function agregarUsuario(nombre, edad) {

  const db = await conectarBD();

  await db.runAsync(
    'INSERT INTO usuarios (nombre, edad) VALUES (?, ?)',
    nombre, edad
  );
}
// Consultar usuarios
export async function consultarUsuarios() {

  const db = await conectarBD();

  const usuarios = await db.getAllAsync(
    'SELECT * FROM usuarios'
  );

  return usuarios;

}

// Actualizar usuario
export async function actualizarUsuario(id, nombre, edad) {

  const db = await conectarBD();

  await db.runAsync(
    'UPDATE usuarios SET nombre = ?, edad = ? WHERE id = ?',
    nombre, edad, id
  );

}

// Eliminar usuario
export async function eliminarUsuario(id) {

  const db = await conectarBD();

  await db.runAsync(
    'DELETE FROM usuarios WHERE id = ?',
    id
  );

}
