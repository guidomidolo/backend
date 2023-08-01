const express = require("express");
puerto = 8080;
app = express();

app.get("/", (req, resp) => {
    
})

app.get("/bienvenida", (req, resp) => {
    let contenido = "HOLA";
    resp.send(contenido);
})

app.get("/", (req, resp) => {
    
})

app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
})