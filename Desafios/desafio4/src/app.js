import express from "express";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import {Server} from "socket.io";
import __dirname from "./utils.js"
import ProductManager from "./ProductManager.js"

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

const app = express();
const puerto = 8080;
const httpServer = app.listen(puerto, () => {
    console.log("Servidor activo en el puerto: " + puerto);
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
app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartsRouter);

socketServer.on("connection", (socket) => {
    console.log("Nueva conexión.");
    
    const PM = new ProductManager(); 
    const productos = PM.getProducts();
    socket.emit("realTimeProducts", productos)
})