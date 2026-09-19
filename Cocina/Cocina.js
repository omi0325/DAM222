const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(txt) {
    return new Promise(function(resolve) {
        entrada.question(txt, function(respuesta) {
            resolve(respuesta);
        });
    });
}

let productos = [
    { id: 1, nombre: "cafe", precio: 25 },
    { id: 2, nombre: "pastel", precio: 35 }
];

async function iniciar() {

    while (true) {

        console.log("\n--- LISTA ---");

        for (let p of productos) {
            console.log(p.id + " - " + p.nombre + " | $" + p.precio);
        }

        let op = await pregunta("\n1=Agregar 2=Editar 3=Borrar 4=Salir : ");

        if (op == "1") {

            let nom = await pregunta("Nombre: ");
            let pre = await pregunta("Precio: ");

            productos.push({
                id: productos.length + 1,
                nombre: nom,
                precio: pre
            });
        }

        if (op == "2") {

            let id = await pregunta("ID a editar: ");
            let nom = await pregunta("Nuevo nombre: ");
            let pre = await pregunta("Nuevo precio: ");

            for (let p of productos) {

                if (p.id == id) {
                    p.nombre = nom;
                    p.precio = pre;
                }
            }
        }

        if (op == "3") {

            let id = await pregunta("ID a borrar: ");

            productos = productos.filter(p => p.id != id);
        }

        if (op == "4") {
            break;
        }
    }

    entrada.close();
}

iniciar();