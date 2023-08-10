import { Router } from "express";
import ProductManager from "../ProductManager.js";

const productsRouter = Router();

const productManager = new ProductManager();

productsRouter.get("/", async (req, res) => {
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
  
  productsRouter.get("/:pid", async (req, res) => {
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
  
  productsRouter.delete("/:pid", async (req, res) => {
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

  productsRouter.post("/:pid", async (req, res) => {
    try {
      let {title, description, code, price, stock, category} = req.body;
      const products = await productManager.getProducts();
      const productExists = products.find((prod) => prod.id === Number(pid));
      const response = productExists ? productExists: {error: `No se encontró el producto con el id ${pid} en nuestra base de datos`};
      res.status(productExists ? 200 : 400).send(response);
    } catch (error) {
      console.log(error);
    }
  });

export default productsRouter;