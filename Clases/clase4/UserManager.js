const fs = require("fs");

class ManagerUsuarios {
    constructor() {
        this.archivo = "Usuarios.json";
        this.usuarios = [];
        fs.writeFileSync(this.archivo, JSON.stringify(this.usuarios))
    }
    
    async crearUsuario(user) {
            const newUser = {
                nombre: user.nombre,
                apellido: user.apellido,
                edad: user.edad,
                curso: user.curso
            }
            let arrayUsuarios = JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));
            arrayUsuarios.push(newUser);
            await fs.promises.writeFile(this.archivo, JSON.stringify(arrayUsuarios));
    };
    
    // async consultarUsuarios(){
    //     return JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));

    // }
};

const MU = new ManagerUsuarios();
const user1 = {nombre:"Guido", apellido:"Midolo", edad:31, curso:"BackEnd Node.JS"};
const user2 = {nombre:"Guido", apellido:"Midolooo", edad:31, curso:"BackEnd Node.JS"};
const user3 = {nombre:"Guido", apellido:"Midolozzz", edad:31, curso:"BackEnd Node.JS"};
MU.crearUsuario(user1);
MU.crearUsuario(user2);
MU.crearUsuario(user3);

// MU.consultarUsuarios()
// .then((data) => {
//     console.log(data);
// })      
// .catch((error) => {
//     console.log(error);
// })