let carrito=[]
let temporalizadorCarrito;

function mostrarCarrito(){
    let carritoheader=document.getElementById("carrito-header");
    carritoheader.style.display=(carritoheader.style.display === 'block') ? 'none' : 'block';
    actualizarCarrito();
}

function agregarCarrito(nombre, precio){
    const producto={ nombre, precio};
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoTabla=document.getElementById("carrito-tabla");
    const carritoLista=document.getElementById("carrito-lista-header");

    carritoTabla.innerHTML="";
    carritoLista.inertHTML="";

    carrito.forEach((producto, index) => {
        const fila=carritoTabla.insertRow();
        const celdaNombre= fila.insertCell(0);
        const celdaPrecio= fila.insertCell(1);
        const celdaEliminar= fila.insertCell(2);

        celdaNombre.textContent= producto.nombre;
        celdaPrecio.textContent='$${producto.precio.toFixed(2)}';

        const btnEliminar= document.createElement("button");
        btnEliminar.textContent="Eliminar";
        btnEliminar.addEventListener("click", () => eliminarDelCarrito(index));
        celdaEliminar.appenChild(btnEliminar);
    });

    carrito.forEach(producto => {
        const listItem= document.createElement("li");
        listItem.textContent='$producto.nombre} - $${producto.precio.toFixed(2)}';
        carritoLista.appendChild(listItem);
    });
}

function eliminarDelCarrito(index){
    carrito.splice(index, 1);
    actualizarCarrito();
}