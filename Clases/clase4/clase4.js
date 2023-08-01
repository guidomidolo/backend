////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FN ASYNC CON SETTIMEOUT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const funcionAsincrona = (funcion) => {
//     setTimeout(() => {
//         funcion();
//     }, 2000);
// }

// const miFuncion = () => {
//     console.log("Cargando...");
// }

// console.log("Inicia la carga.");
// funcionAsincrona(miFuncion);
// console.log("Finaliza la carga.");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// FN ASYNC CON SETINTERVAL
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const contador = () => {
//     let cuenta = 0;
//     const intervalo = setInterval(() => {
//         cuenta += 1
//         console.log("La cuenta está en " + cuenta)
//         if (cuenta == 5){
//             clearInterval(intervalo);
//         }
//     }, 2000)
// }

// contador();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Manejo de archivos con FS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { log } = require("console");
const fs = require("fs");   

////// Síncrona

// let nombreArchivo = "archivoSincrono.txt";

// if (fs.existsSync(nombreArchivo)){
//     console.log("El archivo existe.");
//     let contenido = fs.readFileSync(nombreArchivo, "utf-8")
//     console.log(contenido);
// } else {
//     console.log("El archivo no existe.");
//     console.log("Creando archivo...");
//     fs.writeFileSync(nombreArchivo, "Hola hola hola, chanchito con cola");
        
// }

/////// Para subir objetos o arrays a un archivo, hay que hacerles JSON.stringify al subir y JSON.parse al leerlo

// fs.writeFileSync(nombreArchivo, JSON.stringify([{id:1, nombre:"Perro"}, {id:2, nombre:"Gato"}]));

// if (fs.existsSync(nombreArchivo)){
//     console.log("El archivo existe.");
//     let contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8"));
//     console.log(contenido);
// } else {
//     console.log("El archivo no existe.");
// }
/////// Para subir objetos o arrays a un archivo, hay que hacerles JSON.stringify al subir y JSON.parse al leerlo

// fs.appendFileSync(nombreArchivo, JSON.stringify([{id:1, nombre:"Perro"}, {id:2, nombre:"Gato"}]));



// fs.writeFileSync(nombreArchivo, JSON.stringify([{id:1, nombre:"Perro"}, {id:2, nombre:"Gato"}]));
// if (fs.existsSync(nombreArchivo)){
//     let contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8"));
//     let nuevoObjeto = {id:3, nombre:"Perro"};
//     contenido.push(nuevoObjeto)
//     fs.writeFileSync(nombreArchivo, JSON.stringify(contenido))
//     console.log(contenido);
// } else {
//     console.log("El archivo no existe.");
// }

////ELIMINAR ARCHIVOS
// fs.unlinkSync(nombreArchivo)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// EJEMPLO DE MANEJO DE ARCHIVOS CON CALLBACK
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nombreArchivo = "archivoConCallback.txt"

// //Escribo mi archivo
// fs.writeFile(nombreArchivo, "Hola amigos!\n", (error) => {
//     error && console.log("No se pudo crear el archivo.");
// });

// // //Leo mi archivo
// // fs.readFile(nombreArchivo, "utf-8", (error, contenido) => {
// //     error && console.log("No se pudo leer el archivo.");
// //     console.log(contenido);
 
// // });

// //Actualizo mi archivo
// fs.appendFile(nombreArchivo, "¿Cómo están?", (error) => {
//     error && console.log("No se pudo actualizar el archivo.");
// })

// //Leo el archivo actualizado
// fs.readFile(nombreArchivo, "utf-8", (error, contenido) => {
//     error && console.log("No se pudo leer el archivo.");
//     console.log(contenido);
// });

// //Elimino el archivo
// fs.unlink(nombreArchivo,(error) => {
//     error && console.log("No se pudo eliminar el archivo.");
// }); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DESAFIO FECHA Y HORA #1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fecha = new Date();
// const fechaActual = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}`
// fs.writeFile("fechaActual.txt", fechaActual, (error) => {
//     // error && console.log("No se puede obtener la fecha.");
//     fs.readFile("fechaActual.txt", "utf-8", (error, contenido) => {
//         console.log(contenido);
//         error && console.log("No se puede cargar la fecha.");
// })
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// EJEMPLO DE MANEJO DE ARCHIVOS CON PROMESAS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nombreArchivo = "archivoConPromesas.txt"
// const funcionAsincrona = async () => {

//     // Creo archivo
//     await fs.promises.writeFile(nombreArchivo, "Creación de archivo.\n");
    
//     // Leo archivo
//     // let contenido = await fs.promises.readFile(nombreArchivo, "utf-8")
//     // console.log(contenido);
    
//     //Actualizo archivo
//     await fs.promises.appendFile(nombreArchivo, "Actualizando archivo.")
//     let contenido = await fs.promises.readFile(nombreArchivo, "utf-8");
//     console.log(contenido);

//     //Elominar archivo
//     await fs.promises.unlink(nombreArchivo);
// }
// funcionAsincrona();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// DESAFIO #2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let desafio2 = async () => {
    let archivo = "info.json";
    let package = await fs.promises.readFile("package.json", "utf-8");
    console.log(package);
}

desafio2();