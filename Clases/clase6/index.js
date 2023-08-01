const express = require("express");
const puerto = 8080;
const app = express ();

app.get("/saludo", (req, res) => {
    res.send("holaaaaa")   
})

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto " + puerto);
})