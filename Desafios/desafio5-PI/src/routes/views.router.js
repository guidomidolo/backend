import express from "express";
import ProductManager from "../dao/ProductManager.js"

const router = express.Router();
const PM = new ProductManager(); 

router.get("/", async (req, res) => {
    const productos = await PM.getProducts();
    console.log(productos);
    res.render ("home", {productos});
});

router.get("/realtimeproducts", (req, res) => {
    res.render ("realTimeProducts");
});

export default router;