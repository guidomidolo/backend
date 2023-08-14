import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"
import viewsRouter from "./routes/views.routes.js";
import {Server} from "socket.io";

const port = 8080;
const app = express(); 
const httpServer = app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
});

const socketServer = new Server(httpServer);

// DEFINIR PLANTILLAS EN SERVIDOR HTTP

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", viewsRouter)

// DEFINIR MENSAJES EN SERVIDOR SOCKET

const arrayMensajes = []; //Array de mensaje

const generarId = () => { return arrayMensajes.length + 1}; //Funcion que genera socket.id

socketServer.on("connection", (socket) => {
    console.log("Nueva conexión.");

    // socket.on("message", (data) => {
    //     console.log(data);
    // })

    // socket.emit("socket_individual", "Hola a todos desde el servidorRRRR.")
    // socket.broadcast.emit("socket_individual2", "Hola desde el servidor, no lo ve la conexión actual.")
    // socket.emit("socket_individual3", "Hola desde el servidorSSS.")

    socket.on("mensaje", (data) => {
        arrayMensajes.push({socketid:generarId(), mensaje:data});
        socket.broadcast.emit("mensajes", arrayMensajes);
        console.log(arrayMensajes);
    })
})

