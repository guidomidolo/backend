import { Router } from "express";
import ProductManager from "../ProductManager.js";

const productsRouter = Router();

const PM = new ProductManager();

productsRouter.get("/", async (req, res) => {
    try {
      const limit = Number(req.query.limit);
      const products = await PM.getProducts();
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
      const products = await PM.getProducts();
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
      const products = await PM.getProducts();
      const productExists = products.find((prod) => prod.id === Number(pid));
      const response = productExists ? productExists: {error: `No se encontró el producto con el id ${pid} en nuestra base de datos`};
      res.status(productExists ? 200 : 400).send(response);
    } catch (error) {
      console.log(error);
    }
  });

  productsRouter.post("/", async (req, res) => {
    try {
      let {title, description, code, price, stock, category} = req.body;
      console.log(title);
      console.log(description);
      console.log(code);
      const newProduct = {title: title, description: description, code: code, price: price, stock:stock, category: "Productos", id: PM.getId()}
      const products = await PM.getProducts();
      products.push(newProduct);
      // console.log(products);
      res.send({status:"ok", message:"Producto añadido correctamente."})
      // const productExists = products.find((prod) => prod.id === Number(pid));
      // const response = productExists ? productExists: {error: `Error. El producto ID ${pid} ya existe en nuestra base de datos`};
      // res.status(productExists ? 200 : 400).send(response);
    } catch (error) {
      console.log(error);
    }
  });

export default productsRouter;