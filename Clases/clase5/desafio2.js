const fs = require("fs");
const crypto = require("crypto")

class UserManager {
    constructor() {
        this.usuarios = [];
        this.archivo = "Usuarios.json";
    }
    
    crearUsuario(objeto) {
        const user = {nombre: objeto.nombre, apellido: objeto.apellido, usuario: objeto.usuario, passwd: this.encriptarPasswd(objeto.passwd)};
        (!fs.existsSync(this.archivo)) && fs.writeFileSync(this.archivo, JSON.stringify(this.usuarios));

        this.usuarios = JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
        this.usuarios.push(user);

        fs.writeFileSync(this.archivo, JSON.stringify(this.usuarios));

        
    }
    validarUsuario(usuario, passwd) {
        this.usuarios = JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
        let usuarioLogueado = this.usuarios.some(user => user.usuario === usuario & user.passwd === this.encriptarPasswd(passwd));
        
        if (usuarioLogueado) {
            console.log("Usuario logueado"); 
        } else {
            let usuarioLogueado = this.usuarios.some(user => user.usuario === usuario);
            console.log(!usuarioLogueado ? "Usuario incorrecto." : "Contraseña incorrecta.");
        };


    }
    encriptarPasswd(passwd){
        let passwdEncriptada = crypto.createHash("sha256", passwd).update(passwd).digest("hex");
        return passwdEncriptada;
    }
}

const UM = new UserManager();
// UM.crearUsuario({nombre:"Pepe", apellido:"Grillo", usuario:"pepitogrillo", passwd:"0303456"});
UM.validarUsuario("pepitogrillo", "03032456")
    