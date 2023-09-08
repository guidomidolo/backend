import mongoose from "mongoose";
import { productModel } from "./models/product.models.js";

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        // if (this.validateCode(product.code)) {
        //     console.log("Error, ya existe un producto con ese código.");

        //     return false;
        // } else {
            const producto = {title:product.title, description:product.description, code:product.code, price:product.price, status:product.status, stock:product.stock, category:product.category, thumbnails:product.thumbnails};
            productModel.create(producto);

            return true;
        // }
    }

    updateProduct(id, product) {
        
        // this.products = this.getProducts();
        // let pos = this.products.findIndex(item => item.id === id);
        
        // if (pos > -1) {
        //     this.products[pos].title = product.title;
        //     this.products[pos].description = product.description;
        //     this.products[pos].code = product.code;
        //     this.products[pos].price = product.price;
        //     this.products[pos].status = product.status;
        //     this.products[pos].stock = product.stock;
        //     this.products[pos].category = product.category;
        //     this.products[pos].thumbnails = product.thumbnails;
        //     this.saveProducts();
            productModel.updateOne({_id:id}, {product})
            console.log("Producto actualizado.");

        //     return true;
        // } else {
        //     console.log("No se encontró el producto.");

        //     return false;
        // }
    }

    deleteProduct(pid) {
        return productModel.deleteOne({_id:pid});
        // this.products = this.getProducts();
        // let pos = this.products.findIndex(item => item.id === id);

        // if (pos > -1) {
        //     this.products.splice(pos, 1); (0,1)
        //     console.log("Producto #" + id + " eliminado.");

        //     return true;
        // } else {
        //     console.log("No se encontró el producto.");

        //     return false;
        // }
    }

    getProducts() {
        try {    
            return productModel.find().lean();
        } catch (error) {
            return [];
        }
    }

    getProductById(id) {
        return productModel.find({id:id}).lean();
    }

    validateCode(code) {
        return productModel.find({code:code}).lean();
    }

    generateId() {
        let max = 0;
        let products = this.getProducts();

        products.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max+1;
        //return this.products.length > 0 ? this.products[this.products.length-1].id+1 : 1;
    }

    saveProducts() {
        fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
}

//module.exports = {ProductManager};

export default ProductManager;