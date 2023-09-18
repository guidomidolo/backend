import { productModel } from "./models/product.models.js";

class ProductManager {
    async addProduct(product) {
        try {
        if (await this.validateCode(product.code)) {
            console.log(`Error, ya existe un producto con el código + ${product.code}`);

            return false;
        } else {
            await productModel.create(product);
            console.log("Producto agregado correctamente.");
            return true;
        }
    } catch (error) {
        return false;
    }
    }

    async updateProduct(id, product) {
        try {
            await productModel.updateOne({_id:id}, product)
            console.log("Producto actualizado.");
            return true;

        } catch (error) {
            return false;
        }
    }

    async deleteProduct(id) {
        
        try {
            await productModel.deleteOne({_id:id});
            return true;
            
        } catch (error) {
            return false;
        }
    
    }

    async getProducts(limit) {
        return await limit ? productModel.find().limit(limit).lean() : productModel.find().lean();
    }

    async getProductById(id) {
        if (this.validateCode(id)){
            return await productModel.find({id:id}).lean() || null;
        } else {
            console.log("No encontrado");
            return null;
        }
    }


    async validateCode(code) {
        return await productModel.findOne({code:code}) || false;
    }
}


export default ProductManager;