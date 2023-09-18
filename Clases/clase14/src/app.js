import express from "express";
import userRouter from "./routes/users.routes.js";
import mongoose from "mongoose";

const port = 8080;
const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor conectado al puerto ${port}`);
});

mongoose.connect("mongodb+srv://Cluster80526:Canob1903@clusterguidocoder.hfqxzr1.mongodb.net/?retryWrites=true&w=majority");

app.use("/api/users", userRouter);