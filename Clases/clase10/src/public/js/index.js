console.log("Hola, estamos usando Websocketsss!");

const socket = io();

//socket.emit("message", "Hola, acabo de ingresar al sitio.")

// socket.on("socket_individual", (data) => {
//     console.log(data);
// })
// socket.on("socket_individual2", (data) => {
//     console.log(data);
// })
// socket.on("socket_individual3", (data) => {
//     console.log(data);
// })

const enviarMensaje = () => {
    let mensaje = document.getElementById("mensaje").value;
    socket.emit("mensaje", mensaje);

};

socket.on("mensajes", (data) => {   
    let salida =  `<ul class="list-group>`;
    data.forEach(item => {
        salida += `<li class="">${item.socketid} - ${item.mensaje}</li>`
    })
    salida += `</ul>`;
    document.getElementById("mensajes").innerHTML = salida;
    console.log(data);
});