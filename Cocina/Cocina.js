const cliente = require("./cliente");

function verCatalogo() {
    return cliente.consultarProductos();
}

function agregarProducto(nombre, precio) {
    return cliente.agregarProducto(nombre, precio);
}

function editarProducto(idProducto, nombre, precio) {
    return cliente.editarProducto(idProducto, nombre, precio);
}

function eliminarProducto(idProducto) {
    return cliente.eliminarProducto(idProducto);
}

function buscarBaratos(limite) {
    return cliente.catalogo.filter(producto => producto.precio <= limite);
}

function buscarCaros(limite) {
    return cliente.catalogo.filter(producto => producto.precio >= limite);
}

function buscarPorEtiqueta(etiqueta) {
    return cliente.catalogo.filter(producto => producto.categoria === etiqueta);
}

function buscarBebidas() {
    return buscarPorEtiqueta("bebida");
}

function buscarPostres() {
    return buscarPorEtiqueta("postre");
}

function buscarProductoPorNombre(nombre) {
    return cliente.catalogo.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

function ordenarPorPrecio(ascendente = true) {
    const copia = [...cliente.catalogo];
    return copia.sort((a, b) => ascendente ? a.precio - b.precio : b.precio - a.precio);
}

function verPedidosPendientes() {
    const pendientes = cliente.pedidosCliente.filter(pedido => pedido.estado === "pendiente");

    console.log("\n--- Pedidos pendientes de preparar ---");
    if (pendientes.length === 0) {
        console.log("No hay pedidos pendientes");
        return pendientes;
    }

    for (const pedido of pendientes) {
        const nombres = pedido.productos.map(producto => producto.nombre).join(", ");
        console.log(`#${pedido.id} | ${pedido.folio} | ${pedido.cliente} | ${nombres}`);
    }
    return pendientes;
}

function marcarPedidoListo(idPedido) {
    const pedido = cliente.pedidosCliente.find(pedido => pedido.id === idPedido);

    if (!pedido) {
        console.log(`Pedido #${idPedido} no existe`);
        return null;
    }

    if (pedido.estado === "listo") {
        console.log(`Pedido #${idPedido} ya estaba marcado como listo`);
        return pedido;
    }

    pedido.estado = "listo";
    console.log(`Pedido #${idPedido} marcado como listo`);
    return pedido;
}

let agua = 1000;
let azucar = 100;
let cafe = 300;

function prepararCafe() {
    return new Promise((resolve, reject) => {

        console.log("\nPreparando café...");

        if (agua < 200) {
            reject("Falta agua para preparar el café");
            return;
        }

        if (cafe < 20) {
            reject("Falta café para preparar el café");
            return;
        }

        if (azucar < 10) {
            reject("Falta azúcar para preparar el café");
            return;
        }

        agua -= 200;
        cafe -= 20;
        azucar -= 10;

        setTimeout(() => {
            console.log("Agregando agua...");

            setTimeout(() => {
                console.log("Agregando azúcar...");

                setTimeout(() => {
                    console.log("Agregando café...");

                    setTimeout(() => {

                        const error = Math.random();

                        if (error < 0.10) {
                            reject("Error en la cafetera");

                        } else if (error < 0.20) {
                            reject("El café se quemó");

                        } else if (error < 0.25) {
                            reject("Error general en cocina");

                        } else {
                            console.log("Café preparado correctamente");
                            console.log(`Agua restante: ${agua} ml`);
                            console.log(`Azúcar restante: ${azucar} g`);
                            console.log(`Café restante: ${cafe} g`);

                            resolve("cafe listo");
                        }

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    });
}

module.exports = { 
    verCatalogo, 
    agregarProducto, 
    editarProducto, 
    eliminarProducto, 
    buscarBaratos, 
    buscarCaros, 
    buscarPorEtiqueta, 
    buscarBebidas, 
    buscarPostres, 
    buscarProductoPorNombre, 
    ordenarPorPrecio, 
    verPedidosPendientes, 
    marcarPedidoListo,
    prepararCafe
};