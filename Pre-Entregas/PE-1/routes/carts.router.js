import { Router } from "express";
import CartManager from "../CartManager.js";

const cartsRouter = Router();
const CM = new CartManager();

// cartsRouter.get("/", (req, res) => {
//     const products = PM.getProducts();
//     let {limit} = req.query;

//     res.send({products:limit ? products.slice(0, limit) : products});
// });


cartsRouter.post("/", (req, res) => {
    if (CM.newCart()) {
        res.send({status:"ok", message:"Carrito creado correctamente."});
    } else {
        res.status(500).send({status:"error", message:"Error! No se pudo crear el carrito!"});
    }
});

cartsRouter.get("/:cid", (req, res) => {
    let cid = Number(req.params.cid);
    const cart = CM.getCartById(cid);

    if (cart) {
        let products = cart.products;
        res.send({products}); 
    } else {
        res.status(400).send({status:"error", message:"No se encontró el carrito."})
    }

});

cartsRouter.post("/:cid/products/:pid", (req, res) => {
    let cid = Number(req.params.cid);
    let pid = Number(req.params.pid);
    const cart = CM.getCartById(cid);
    
    if (cart) {
        if (cart.addProductToCart(cid, pid)) {
            res.send({status:"ok", message:"El producto se añadió correctamente."})
        } else {
            res.status(400).send({status:"error", message:"No se pudo agregar el producto al carrito."})
        }
        let products = cart.products;
        res.send({products}); 
    } else {
        res.status(400).send({status:"error", message:"No se encontró el carrito."})
    }

});

cartsRouter.put("/:pid", (req, res) => {
    let pid = Number(req.params.pid);
    let {title, description, code, price, status, stock, category, thumbnails} = req.body;

    if (!title) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Title!"});
        return false;
    }

    if (!description) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Description!"});
        return false;
    }

    if (!code) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Code!"});
        return false;
    }

    if (!price) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Price!"});
        return false;
    }

    status = !status && true;

    if (!stock) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Stock!"});
        return false;
    }

    if (!category) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Category!"});
        return false;
    }

    if (!thumbnails) {
        res.status(400).send({status:"error", message:"Error! No se cargó el campo Thumbnails!"});
        return false;
    } else if ((!Array.isArray(thumbnails)) || (thumbnails.length == 0)) {
        res.status(400).send({status:"error", message:"Error! Debe ingresar al menos una imagen en el Array Thumbnails!"});
        return false;
    }

    if (PM.updateProduct(pid, {title, description, code, price, status, stock, category, thumbnails})) {
        res.send({status:"ok", message:"El Producto se actualizó correctamente!"});
    } else {
        res.status(500).send({status:"error", message:"Error! No se pudo actualizar el Producto!"});
    }
});



export default cartsRouter;