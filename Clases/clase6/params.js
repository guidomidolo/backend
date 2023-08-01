const express = require("express");
const puerto = 8080;
const app = express ();

app.get("/saludo/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    res.send("Hola " + req.params.nombre)   
})

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto " + puerto);
})