import { Router } from "express";
import { userModel } from "../models/user.models.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({status:"ok", payload:users})
    }
    catch (error) {
        console.log("Error, no se pudo conectar a la DB." + error);
    }
});
userRouter.post("/", async (req, res) => {
    try {
        let {nombre, apellido, email} = req.body;
        if(!nombre || !apellido || !email) {
            return res.status(400).send({status:"error", message:"Faltan completar campos."});
        }
        
        let resultado = await userModel.create({
            nombre,
            apellido,
            email
        });

        res.send({status:"created", payload:resultado})
    }
    catch (error) {
        console.log("Error, no se pudo conectar a la DB." + error);
    }
});

userRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params; 
        let {nombre, apellido, email} = req.body;
        if(!nombre || !apellido || !email) {
            return res.status(400).send({status:"error", message:"Faltan completar campos."});
        }
        
        let resultado = await userModel.updateOne({_id:id}, {nombre, apellido, email});

        res.send({status:"updated", payload:resultado})
    }
    catch (error) {
        console.log("Error, no se pudo conectar a la DB." + error);
    }
});

userRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params; 
        if(!id) {
            return res.status(400).send({status:"error", message:"Ingrese un ID."});
        }
        
        let resultado = await userModel.deleteOne({_id:id});

        res.send({status:"deleted", payload:resultado})
    }
    catch (error) {
        console.log("Error, no se pudo conectar a la DB." + error);
    }
});

export default userRouter;