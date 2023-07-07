products = [];

class ProductManager {
    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock; 
    }
addProduct() {
    products.forEach(element => {
        element.includes(code) && products.push();

    })

}

getProducts() {
console.log(productos); 
}
}

let product1 = new ProductManager("Producto prueba", "Desc prueba", 10000, "Sin imagen", 123123, 20)
product1.addProduct();

getProducts();