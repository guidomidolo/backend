const socket = io();

socket.on("realTimeProducts", (data) => {
    let salida =  ``;

    data.forEach(item => {
        salida +=   `<div class="col-md-3">
                        <div class="card border-0 my-3">
                            <img src="${item.thumbnail}" class="img fluid" alt="${item.title}">
                            <div class="card-body text-left">
                            <p class="card-text">${item.title} <br/>ID #${item.id}</p>
                            <p class="card-text"><span class="text-success"><b>$${item.price}</b></span></p>
                            
                            </div>
                        </div>
                    </div>`
    });
    document.getElementById("producto").innerHTML = salida;
})

const agregarProducto = () => {
    const title = document.getElementById("title").value;
    const thumbnails = document.getElementById("thumbnails").value;
    const price = document.getElementById("price").value;
    const producto = {title:title, thumbnails:thumbnails, price:price};

    socket.emit("nuevoProducto", producto);
}

const botonAgregarProducto = document.getElementById("botonAgregarProducto");
botonAgregarProducto.onclick = agregarProducto;

const eliminarProducto = () => {
    const idProducto = document.getElementById("idProducto").value;

    socket.emit("eliminarProducto", idProducto);
}

const botonEliminarProducto = document.getElementById("botonEliminarProducto");
botonEliminarProducto.onclick = eliminarProducto;