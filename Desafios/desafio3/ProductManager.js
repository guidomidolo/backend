const fs = require("fs");
let arrayLocation = "arrayProductos.txt";

class ProductManager {
    constructor(arrayProductos = []) {
        this.products = arrayProductos;
        this.path = arrayLocation;

        // Verificar si el archivo existe y contiene datos
        if (fs.existsSync(this.path)) {
            this.readProductsFromFile().then((data) => {
                this.products = JSON.parse(data);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            // Si el archivo no existe, crearlo con un arreglo vacío
            fs.writeFile(this.path, JSON.stringify(this.products), (error) => {
                if (error) {
                    console.log("No se pudo crear el archivo.");
                } else {
                    console.log("Archivo creado correctamente.");
                }
            });
        }
    }

    readProductsFromFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, "utf-8", (error, data) => {
                if (error) {
                    reject("No se pudo leer el archivo");
                } else {
                    resolve(data);
                }
            });
        });
    }

    getProducts() {
        return this.readProductsFromFile().then((data) => {
            return JSON.parse(data);
        }).catch((error) => {
            console.log(error);
            return [];
        });
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.getId()
        };

        this.products.push(producto);

        return new Promise((resolve, reject) => {
            fs.writeFile(this.path, JSON.stringify(this.products), (error) => {
                if (error) {
                    console.log("No se pudo escribir el archivo");
                    reject();
                } else {
                    console.log("Nuevo producto agregado");
                    resolve(producto);
                }
            });
        });
    }

    getId() {
        let max = 0;
        this.products.forEach((producto) => {
            max = producto.id > max ? producto.id : max;
        });
        return max + 1;
    }

    getProductById(id) {
        return this.readProductsFromFile().then((data) => {
            const arrayProductos = JSON.parse(data);
            const product = arrayProductos.find((product) => product.id === id);
            if (product) {
                return product;
            } else {
                throw new Error("Producto no encontrado");
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    deleteProduct(id) {
        return this.readProductsFromFile().then((data) => {
            const arrayProductos = JSON.parse(data);
            const pos = arrayProductos.findIndex((product) => product.id === id);
            if (pos !== -1) {
                arrayProductos.splice(pos, 1);
                return new Promise((resolve, reject) => {
                    fs.writeFile(this.path, JSON.stringify(arrayProductos), (error) => {
                        if (error) {
                            console.log("No se pudo escribir el archivo");
                            reject();
                        } else {
                            console.log("Producto eliminado");
                            resolve();
                        }
                    });
                });
            } else {
                throw new Error("Producto no encontrado");
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    updateProduct(id, field, value) {
        return this.readProductsFromFile().then((data) => {
            const arrayProductos = JSON.parse(data);
            const product = arrayProductos.find((product) => product.id === id);
            if (product) {
                product[field] = value;
                return new Promise((resolve, reject) => {
                    fs.writeFile(this.path, JSON.stringify(arrayProductos), (error) => {
                        if (error) {
                            console.log("No se pudo escribir el archivo");
                            reject();
                        } else {
                            console.log("Producto actualizado");
                            resolve(product);
                        }
                    });
                });
            } else {
                throw new Error("Producto no encontrado");
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }
}

module.exports = { ProductManager };

const newProd = new ProductManager();

///////PRUEBAS AÑADIR PRODUCTOS
newProd.addProduct("Coca cola", "Gaseosa sabor cola", 750, "Sin imagen", "CC123", 10)
    .then(() => newProd.addProduct("Pepsi", "Gaseosa sabor cola", 600, "Sin imagen", "P123", 20))
    .then(() => newProd.addProduct("Coca Cola Zero", "Gaseosa sabor cola baja en azúcar", 750, "Sin imagen", "CC123", 20))
    .then(() => newProd.addProduct("Sprite", "Gaseosa sabor lima limón", 700, "Sin imagen", "S412", 20))

//////PRUEBA ACTUALIZAR PRODUCTO
    newProd.updateProduct(2, "title", "Manaos Cola")
    
    .then(() => newProd.getProducts())
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.log(error);
    });