import * as SQLite from 'expo-sqlite';

let db = null;

export async function conectarBD() {

  if (db === null) {

    db = await SQLite.openDatabaseAsync('usuarios.db');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        edad INTEGER NOT NULL
      );
    `);

  }

  return db;
}