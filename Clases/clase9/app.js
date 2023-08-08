import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import router from "./src/routes/views.routes.js";

const port = 8082;

const app = express(); 

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use("/", router)

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
});

