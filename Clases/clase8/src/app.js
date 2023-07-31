import express from "express";
import petsRouter from "./routes/pets.router.js";
import usersRouter from "./routes/users.router.js";

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
});

