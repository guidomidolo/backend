import { Router } from "express";
import { uploader } from "../../utils.js";

const users = [
    {nombre: "Lionel Messi"},
    {nombre: "Emiliano Martinez"},
    {nombre: "Enzo Fernández"}
]

const usersRouter = Router();

///////MIDDLEWARE NIVEL ROUTER
usersRouter.use(function (res, req, next) {
    console.log("Nivel Router");
    next();
});

usersRouter.get("/", (req, res) => {
    res.send({users});
});

usersRouter.post("/", uploader.single("file"), (req, res) => {
    if (!req.file) {
        res.status(400).send({status:"error", message:"No sé cargó ninguna imagen."})
        return false;
    }

    let { nombre, apellido, edad } = req.body;
    users.push({nombre: nombre, apellido: apellido, edad: edad, image:req.file.filename});
    console.log("Usuario agregado correctamente.");

    res.send({status:"ok", message:"El usuario se agregó correctamente."});

});


export default usersRouter;