import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const users = [ 
        {nombre: "Guido", apellido: "Midolo", edad: 31, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 1, role:"admin", estilo: "estilo-black.css"},
        {nombre: "Vitto", apellido: "Midolo", edad: 1, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 2, role: "user", estilo: "estilo-white.css"},
        {nombre: "Antonella", apellido: "Raggio", edad: 26, correo: "gui.midolo@hotmail.com", telefono: 3413976136, id: 3, role:"admin", estilo: "estilo-black.css"}
    ];

    // const user = users.find(item => item.id === numeroRandom);
    // res.render("index", user)
    let frutas = [
        {id: 1, nombre:"Banana", precio: 50},
        {id: 2, nombre:"Manzana", precio: 30},
        {id: 3, nombre:"Pera", precio: 40},
        {id: 4, nombre:"Frutilla", precio: 25},
        {id:5, nombre:"Kiwi", precio: 45}
    ]

    const numeroRandom = Math.round(Math.random() * 2); 
    let user = users[numeroRandom];

    let userApp = {user:user, isAdmin:user.role === "admin", frutas}
    
    

    res.render("index", userApp);

});

router.get("/register", (req, res) => {
    res.render("register", {estilo:"estilo-white.css"});
})

router.post("/", (req, res) => {
    let {nombre, correo, clave } = req.body;
})

export default router;
