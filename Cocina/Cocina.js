let productos = [
  { id: 1, nombre: "Sartén", precio: 350 },
  { id: 2, nombre: "Cuchillo Chef", precio: 250 }
];

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(txt) {
  return new Promise(res => rl.question(txt, res));
}

async function iniciar() {
  while (true) {
    console.log("\n--- LISTA ---");
    productos.forEach(p => console.log(`${p.id} - ${p.nombre} | $${p.precio}`));

    console.log("\n1=Agregar 2=Editar 3=Eliminar 4=Salir");
    let op = await preguntar("Elige: ");

    if (op == "1") {
      let nom = await preguntar("Nombre: ");
      let pre = await preguntar("Precio: ");
      productos.push({ id: productos.length + 1, nombre: nom, precio: Number(pre) });
    }

    if (op == "2") {
      let id = await preguntar("ID a editar: ");
      let nom = await preguntar("Nuevo nombre: ");
      let pre = await preguntar("Nuevo precio: ");
      for (let p of productos) {
        if (p.id == id) {
          p.nombre = nom;
          p.precio = Number(pre);
        }
      }
    }

    if (op == "3") {
      let id = await preguntar("ID a eliminar: ");
      productos = productos.filter(p => p.id != id);
    }

    if (op == "4") {
      break;
    }
  }
  rl.close();
}

iniciar();