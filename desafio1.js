class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }


    addProduct(title, description, price, thumbnail, code, stock) {
        // Verifico si el código ya existe en el array de productos
        const checkearProducto = this.products.some((product) => product.code === code);
    
        if (!checkearProducto) {
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
        }
      }
    
      getId() {
        let max = 0;
    
        this.products.forEach((producto) => {
          max = producto.id > max ? producto.id : max;
        });
    
        return max + 1;
      }

      getProductById(id) {
        const product = this.products.find((product) => product.id === id);
    
        if (product) {
          return product;
        } else {
          console.log("Not found");
        }
      }
    }

const newProd = new ProductManager();
newProd.addProduct("Coca cola", "Gaseosa sabor cola", 750, "Sin imagen", "CC123", 10)
newProd.addProduct("Pepsi", "Gaseosa sabor cola", 600, "Sin imagen", "P123", 20)
newProd.addProduct("Coca Cola Zero", "Gaseosa sabor cola baja en azúcar", 750, "Sin imagen", "CC123", 20)
newProd.addProduct("Sprite", "Gaseosa sabor lima limón", 700, "Sin imagen", "S412", 20)


console.log(newProd.getProducts());
console.log(newProd.getProductById(2));