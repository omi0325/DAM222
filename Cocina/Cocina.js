const cliente = require("./caja");

function verCatalogo() {
    return cliente.consultarProductos();
}
function buscarProductosBaratos() {
    const productos = cliente.catalogo.filter(producto => producto.precio <= 30);

    console.log("\n--- Productos baratos ---");

    if (productos.length === 0) {
        console.log("No hay productos baratos");
    } else {
        for (const producto of productos) {
            console.log(`${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
        }
    }

    return productos;
}

function buscarProductosCaros() {
    const productos = cliente.catalogo.filter(producto => producto.precio > 30);

    console.log("\n--- Productos caros ---");

    if (productos.length === 0) {
        console.log("No hay productos caros");
    } else {
        for (const producto of productos) {
            console.log(`${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
        }
    }

    return productos;
}

function buscarBebida() {
    const producto = cliente.catalogo.find(producto => producto.categoria === "bebida");

    console.log("\n--- Bebida ---");

    if (!producto) {
        console.log("No se encontro ninguna bebida");
    } else {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
    }

    return producto;
}

function buscarPostre() {
    const producto = cliente.catalogo.find(producto => producto.categoria === "postre");

    console.log("\n--- Postre ---");

    if (!producto) {
        console.log("No se encontro ningun postre");
    } else {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
    }

    return producto;
}

function agregarProducto(nombre, precio, categoria) {
    return cliente.agregarProducto(nombre, precio, categoria);
}

function editarProducto(idProducto, nombre, precio, categoria) {
    return cliente.editarProducto(idProducto, nombre, precio, categoria);
}

function eliminarProducto(idProducto) {
    return cliente.eliminarProducto(idProducto);
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
        console.log(`#${pedido.id} | ${pedido.cliente} | ${nombres}`);
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

module.exports = {
    verCatalogo,
    agregarProducto,
    editarProducto,
    eliminarProducto,
    verPedidosPendientes,
    marcarPedidoListo,
    buscarProductosBaratos,
    buscarProductosCaros,
    buscarBebida,
    buscarPostre
};