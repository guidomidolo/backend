// const listaPrueba = (prop1) => {
//     if (prop1.length > 0) {
//         prop1.map(item => {
//             console.log(item);
//         })
//     } 
//     else {
//         console.log("No se encontraron productos en la lista.")
//     }
// }


// listaPrueba([1,2,3,4,5]);



class Contador {
    constructor (nombreContador, contador){
        this.count = 0;
        this.nombre = nombreContador;
    } 
    static globalCounter = 0;

    getResponsable() {
        console.log(this.nombre);
    }
    getCuentaIndividual() {
        console.log(this.count);
    }
    getCuentaGlobal() {
        console.log(Contador.globalCounter);
    }
    contar(){
        this.count ++
        Contador.globalCounter ++
    }
    }

const contador1 = new Contador("Count1");
const contador2 = new Contador("Count2)")


contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();
contador2.contar();

contador1.getResponsable();
contador1.getCuentaIndividual();
contador1.getCuentaGlobal();

                        

