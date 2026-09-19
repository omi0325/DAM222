const fs = require('fs');
function pregunta(txt) {
  process.stdout.write(txt);
  return fs.readFileSync(0, 'utf-8').trim();
}

let productos = [
  { id: 1, nombre: "Sartén", precio: 350 },
  { id: 2, nombre: "Cuchillo Chef", precio: 250 }
];

while (true) {
  console.log("\n--- LISTA ---");
  for (let p of productos) {
    console.log(p.id + " - " + p.nombre + " | $" + p.precio);
  }

  let op = pregunta("\n1=Agregar 2=Editar 3=Borrar 4=Salir : ");

  if (op == "1") {
    let nom = pregunta("Nombre: ");
    let pre = pregunta("Precio: ");
    productos.push({ id: productos.length + 1, nombre: nom, precio: pre });
  }

  if (op == "2") {
    let id = pregunta("ID a editar: ");
    let nom = pregunta("Nuevo nombre: ");
    let pre = pregunta("Nuevo precio: ");
    for (let p of productos) {
      if (p.id == id) {
        p.nombre = nom;
        p.precio = pre;
      }
    }
  }

  if (op == "3") {
    let id = pregunta("ID a borrar: ");
    productos = productos.filter(p => p.id != id);
  }

  if (op == "4") break;
}