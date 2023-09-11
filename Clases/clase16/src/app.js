// import { userModel } from "./models/user.models.js";
import { courseModel } from "./models/course.model.js";
import { studentModel } from "./models/student.model.js";
import mongoose from "mongoose";

const enviroment = async () => {
    mongoose.connect("mongodb+srv://Cluster80526:Canob1903@clusterguidocoder.hfqxzr1.mongodb.net/test?retryWrites=true&w=majority");
    // let response = await userModel.find().explain('executionStats');
    // let response = await userModel.find({nombre:"Vitto"}).explain('executionStats');

    // await userModel.create({nombre: "Anto", apellido:"Raggio", email:"anto@gmail.com", genero:"femenino"});
    
    // console.log(response);
    
    //// Creamos el documento para estudiantes
    // await studentModel.create({name:"Guido", lastname:"Midolo", email:"gui@do.com", gender:"male", })
    // console.log("Usuario creado.");


    //// Creamos el documento para estudiantes
    // await courseModel.create({title:"React JS", description:"ReactJS en Coderhouse", professor:"Maxi R  osanda"})
    // console.log("Curso creado.");

    //// Creamos más estudiantes
    // await studentModel.create({name:"Vitto", lastname:"Midolo Raggio", email:"vi@tto.com", gender:"male"})
    // await studentModel.create({name:"Anto", lastname:"Raggio", email:"anto@raggio.com", gender:"female"})
    // console.log("Usuario creado.");


    // Actualizar el doc de un Student con el ID de un Course
    // let student = await studentModel.findOne({_id:"64fe9e8eec250fba9be7b1ec"});
    // student.courses.push({course:"64fe919197905790986299d0q"});
    // await studentModel.updateOne({_id:"64fe9e8eec250fba9be7b1ec"}, student);
    // console.log("Usuario actualizado.");

    // Consultar student actualizado con populate
    let student = await studentModel.findOne({_id:"64fe9e8eec250fba9be7b1ec"}).populate("courses.course");
    console.log(JSON.stringify(student, null, "\t"));
}

enviroment();