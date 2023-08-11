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
    const response = productExists ? productExists : { error: `No se encontró el producto con el id ${pid} en nuestra base de datos` };
    res.status(productExists ? 200 : 400).send(response);
  } catch (error) {
    console.log(error);
  }
});

productsRouter.post("/", async (req, res) => {
  try {
    let { title, description, code, price, status, stock, category, thumbnails } = req.body;
    if (!title) {
      es.status(400).send({ error: "El campo Title es obligatorio." });
      return false;
    }
    if (!description) {
      res.status(400).send({ error: "El campo Description es obligatorio." });
      return false;
    }
    if (!code) {
      res.status(400).send({ error: "El campo Code es obligatorio." });
      return false;
    }
    if (!price) {
      res.status(400).send({ error: "El campo Price es obligatorio." });
      return false;
    }

    status = !status && true;

    if (!stock) {
      res.status(400).send({ error: "El campo Stock es obligatorio." });
      return false;
    }
    if (!category) {
      res.status(400).send({ error: "El campo Category es obligatorio." });
      return false;
    }

    if (!thumbnails) {
      res.status(400).send({ error: "El campo Thumbnails es obligatorio." });
      return false;
    }
    else if ((!Array.isArray(thumbnails)) || (thumbnails.length === 0)) {
      res.status(400).send({ error: "Error, debe ingresar al menos una imagen en el Array Thumbnails." });
      return false;
    }


    await PM.addProduct(title, description, code, price, status, stock, category, thumbnails)
      ? res.send({ status: "ok", message: "Producto añadido correctamente." })
      : res.status(500)({ status: "error", message: "Error, no se pudo añadir el producto." });

  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Ha ocurrido un error en el servidor." });
  }
});

productsRouter.put("/:pid", async (req, res) => {
  try {
    const pid = Number(req.params.pid);
    const { field, value } = req.body;
    // if (!title) {
    //   res.status(400).send({ error: "El campo Title es obligatorio." });
    //   return false;
    // }
    // if (!description) {
    //   res.status(400).send({ error: "El campo Description es obligatorio." });
    //   return false;
    // }
    // if (!code) {
    //   res.status(400).send({ error: "El campo Code es obligatorio." });
    //   return false;
    // }
    // if (!price) {
    //   res.status(400).send({ error: "El campo Price es obligatorio." });
    //   return false;
    // }

    // status = !status && true;

    // if (!stock) {
    //   res.status(400).send({ error: "El campo Stock es obligatorio." });
    //   return false;
    // }
    // if (!category) {
    //   res.status(400).send({ error: "El campo Category es obligatorio." });
    //   return false;
    // }

    // if (!thumbnails) {
    //   res.status(400).send({ error: "El campo Thumbnails es obligatorio." });
    //   return false;
    // }
    // else if ((!Array.isArray(thumbnails)) || (thumbnails.length === 0)) {
    //   res.status(400).send({ error: "Error, debe ingresar al menos una imagen en el Array Thumbnails." });
    //   return false;
    // }

    await PM.updateProduct(pid, field, value)
      ? res.send({ status: "ok", message: "Producto actualizado correctamente." })
      : res.status(500)({ status: "error", message: "Error, no se pudo actualizar el producto." });

  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Ha ocurrido un error en el servidor." });
  }
});


productsRouter.delete("/:pid", async (req, res) => {
  try {
    const pid = req.params.pid; // Usa req.params.pid para obtener el parámetro de la URL
    const resultadoEliminacion = await PM.deleteProduct(pid);

    if (resultadoEliminacion) {
      res.send({ status: "ok", message: "Producto eliminado correctamente." });
    } else {
      res.status(500).send({ status: "error", message: "Error, no se pudo eliminar el producto." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Ha ocurrido un error en el servidor." });
  }
});


export default productsRouter;


