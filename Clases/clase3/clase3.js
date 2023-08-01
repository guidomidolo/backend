// const suma = (num1, num2) => { return num1 + num2 }
// const resta = (num1, num2) => { return num1 - num2 }
// const multi = (num1, num2) => { return num1 * num2 }
// const div = (num1, num2) => { return num1 / num2 }

// const operacion = (valor1, valor2, callback) => {
//     let resultado = callback(valor1, valor2)
//     console.log("El resultado es " + resultado)
// }

// operacion(10, 20, multi)
// operacion(10, 50, multi)
// operacion(123, 10, div)
// operacion(10, 10, multi)


//// PROMISE
// const dividir = (dividendo, divisor) => {
//     return new Promise((resolve,reject) => {
//         if (divisor === 0) {
//             reject("No se puede dividir por 0)")
//             } else {
//                 resolve(dividendo/divisor);
//             }
//     })
// }

// const resultado = dividir(123940,2)
// resultado.then(valor => {
//     console.log(valor);
// })
// .catch(error => {
//     console.log(error)urn
// })


// const pruebaPromesa = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve(12)
//     }, 1000)
// }).then(valor => {
//     console.log(valor)
//     return valor * 2;
// }).then(valor=> {
//     console.log(valor);
//     return valor * 4;
// }).then(valor=> {
//     console.log(valor);
// })


const suma = (sumando1, sumando2) => {
    return new Promise ((resolve, reject) => {
        (sumando1 === 0 || sumando2 === 0) && reject("Operación innecesaria");
        let resultado = sumando1 + sumando2
        resultado < 0 ? reject("La calculadora solo debe devolver valores positivos") : resolve(resultado);
        })
};

const resta = (minuendo, sustraendo) => {
    return new Promise ((resolve, reject) => {
        (minuendo === 0 || sustraendo === 0) && reject("Operación inválida");
        let resultado = minuendo - sustraendo;
        resultado < 0 ? reject("La calculadora solo debe devolver valores positivos") : resolve(minuendo-sustraendo);
    })
};
const multi = (valor1, valor2) => {
    return new Promise ((resolve, reject) => {
        (valor1 < 0 || valor2 < 0) ? reject("La calculadora solo debe devolver valores positivos") : resolve(valor1*valor2)
    })
};

const dividir = (dividendo, divisor) => {
    return new Promise((resolve,reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por 0)")
            } else {
                resolve(dividendo/divisor);
            }
    })
}

const calculos = async () => {
    try {
        // let resultado = await suma(10,12330);
        // console.log("El resultado es: " + resultado)
        // let resultado2 = await resta(10,12330);
        // console.log("El resultado es: " + resultado2)
        let resultado3 = await multi(10,12330);
        console.log("El resultado es: " + resultado3)
        // let resultado4 = await dividir(12330,5);
        // console.log("El resultado es: " + resultado4)
    }
    catch(error) {
        console.log(error)
    }
}

calculos();
