import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const port = 8082;

const app = express(); 

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    const users = [
        {nombre: "Guido", apellido: "Midolo", edad: 31, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 1},
        {nombre: "Vitto", apellido: "Midolo", edad: 1, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 2},
        {nombre: "Antonella", apellido: "Raggio", edad: 26, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 3}
    ];

    const numeroRandom = Math.round(Math.random() * 3); 
    
    // const user = users.find(item => item.id === numeroRandom);
    
    // res.render("index", user)
    res.render("index", users[numeroRandom]);
})


app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
});

