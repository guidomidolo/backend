import mongoose from "mongoose";
const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    gender:String,
    courses:{
        type:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"courses"
                }
            }
        ]
    }
});

export const studentModel = mongoose.model(studentCollection, studentSchema);