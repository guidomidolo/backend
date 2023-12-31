const express = require("express");
const port = 8080;
const app = express();
const { ProductManager } = require("./ProductManager");

const productManager = new ProductManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  try {
    const limit = Number(req.query.limit);
    const products = await productManager.getProducts();
    if (limit) {
      let arrayProducts = [...products];
      const limitedProducts = arrayProducts.slice(0, limit);
      return res.send(limitedProducts);
    } else {
      res.send(products);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/:pid", async (req, res) => {
  try {
    const pid = req.params.pid;
    const products = await productManager.getProducts();
    const productExists = products.find((prod) => prod.id === Number(pid));
    const response = productExists ? productExists: {error: `No se encontró el producto con el id ${pid} en nuestra base de datos`};
    res.status(productExists ? 200 : 400).send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Servidor conectado al puerto: " + port);
});