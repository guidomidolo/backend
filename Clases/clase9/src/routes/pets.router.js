import { Router } from "express";

const pets = [
    {nombre: "Pastor Alemán"},
    {nombre: "Bulldog Francés"},
    {nombre: "Boyero de Verna"}
]

const petsRouter = Router();

petsRouter.get("/", (req, res) => {
    res.send({pets});
});

petsRouter.post("/", (req, res) => {
    let nombre = req.body.nombre;
    pets.push({nombre});
    console.log("Mascota agregada correctamente.");
    
    res.send({status:"ok", message:"Una mascota se agregó correctamente."});

});

export default petsRouter;