const fs = require("fs");
let arrayLocation = "arrayProductos.txt"

class ProductManager {
    constructor(arrayProductos = []) {
        this.products = arrayProductos;
        this.path = arrayLocation;
        fs.writeFile(arrayLocation, JSON.stringify(arrayProductos), (error => {
            error ? console.log("No se pudo crear el archivo.") : console.log("Archivo creado correctamente.");
        }))
    }
    
    
    getProducts() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, "utf-8", (error, data) => {
                if (error) {
                    reject("No se pudo leer el archivo");
                } else {
                    resolve(JSON.parse(data));
                }
            });
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
            fs.writeFile(arrayLocation, JSON.stringify(this.products), (error) => {
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
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, "utf-8", (error, data) => {
                if (error) {
                    reject("No se pudo leer el archivo");
                } else {
                    try {
                        const arrayProductos = JSON.parse(data);
                        const product = arrayProductos.find((product) => product.id === id);
                        if (product) {
                            resolve(product);
                        } else {
                            reject("Not found");
                        }
                    } catch (error) {
                        reject("Error al analizar el contenido del archivo");
                    }
                }
            });
        });
    }

    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, "utf-8", (error, data) => {
                if (error) {
                    reject("No se pudo leer el archivo");
                } else {
                    try {
                        const arrayProductos = JSON.parse(data);
                        const pos = arrayProductos.findIndex((product) => product.id === id);
                        if (pos !== -1) {
                            arrayProductos.splice(pos, 1);
                            fs.writeFile(arrayLocation, JSON.stringify(arrayProductos), (error) => {
                                if (error) {
                                    console.log("No se pudo escribir el archivo");
                                    reject();
                                } else {
                                    console.log("Producto eliminado");
                                    resolve();
                                }
                            });
                        } else {
                            reject("Producto no encontrado");
                        }
                    } catch (error) {
                        reject("Error al analizar el contenido del archivo");
                    }
                }
            });
        });
    }
    updateProduct(id, field, value) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, "utf-8", (error, data) => {
                if (error) {
                    reject("No se pudo leer el archivo");
                } else {
                    try {
                        const arrayProductos = JSON.parse(data);
                        const product = arrayProductos.find((product) => product.id === id);
                        if (product) {
                            product[field] = value;
                            fs.writeFile(arrayLocation, JSON.stringify(arrayProductos), (error) => {
                                if (error) {
                                    console.log("No se pudo escribir el archivo");
                                    reject();
                                } else {
                                    console.log("Producto actualizado");
                                    resolve(product);
                                }
                            });
                        } else {
                            reject("Producto no encontrado");
                        }
                    } catch (error) {
                        reject("Error al analizar el contenido del archivo");
                    }
                }
            });
        });
    }
}

const newProd = new ProductManager();
// newProd.addProduct("Coca cola", "Gaseosa sabor cola", 750, "Sin imagen", "CC123", 10)
newProd.addProduct("Pepsi", "Gaseosa sabor cola", 600, "Sin imagen", "P123", 20)
newProd.addProduct("Coca Cola Zero", "Gaseosa sabor cola baja en azúcar", 750, "Sin imagen", "CC123", 20)
newProd.addProduct("Sprite", "Gaseosa sabor lima limón", 700, "Sin imagen", "S412", 20)
// newProd.getProducts()
//     .then((product) => {
//         console.log(product);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// newProd.getProductById(2)
//   .then((product) => {
//     console.log(product);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// newProd.deleteProduct()
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// newProd.deleteProduct(1)
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
newProd.updateProduct(3, this.title, "Naranpol")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });