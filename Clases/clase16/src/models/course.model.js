import mongoose from "mongoose";
const courseCollection = "courses";

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,  
    professor:String
})

export const courseModel = mongoose.model(courseCollection, courseSchema);