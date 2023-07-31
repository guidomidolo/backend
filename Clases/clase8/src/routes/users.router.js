import { Router } from "express";

const users = [
    {nombre: "Lionel Messi"},
    {nombre: "Emiliano Martinez"},
    {nombre: "Enzo Fernández"}
]

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    res.send({users});
});

usersRouter.post("/", (req, res) => {
    // let nombre = req.body.nombre;
    let { nombre, apellido, edad } = req.body;
    
    users.push({nombre: nombre, apellido: apellido, edad: edad});
    console.log("Usuario agregado correctamente.");

    res.send({status:"ok", message:"El usuario se agregó correctamente."});

});


export default usersRouter;