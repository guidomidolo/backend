import express from "express";
import productsRouter from "./routes/products.router.js";



const port = 8081;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products/", productsRouter)

app.listen(port, () => {
  console.log("Servidor conectado al puerto: " + port);
});