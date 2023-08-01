const express = require("express");
const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let users = [];

app.get("/api/users/", (req, res) => {
    res.send({users});
})

app.get("/api/user/", (req, res) => {
    
    let {email} = req.query;

    if (!email) {
        res.status(500).send({status:"error", message:"Error. Email no encontrado."})
        return false;
    }
    
    let user = users.find(item => item.email === email);
    if (!user) {
        res.status(200).send({status:"error", message:"Error. No se encontró un usuario con ese Email."})
    }
    
    users.push({nombre:user.nombre, email:user.email});

    res.send({user});
})

///////PUT////////
app.put("/api/user/", (req, res) => {
    
    let user = req.body;

    if (!user.nombre){
        res.status(500).send({status:"error", message:"Error. Complete el campo nombre."})
        return false;
    }
    if (!user.email){
        res.status(500).send({status:"error", message:"Error. Complete el campo email."})
        return false;
    }

    
    let userArray = users.find(item => item.email === user.email)
    
    if (!userArray){
        res.status(500).send({status:"error", message:"Error. No se encontró ningún usuario con ese email.."})
        return false;
    }

    userArray.nombre = user.nombre;

    res.send({status:"success", message:"Se actualizó correctamente el usuario."})
})

///////POST////////
app.post("/api/user/", (req, res) => {
    let user = req.body;

    if (!user.nombre){
        res.status(500).send({status:"error", message:"Error. Complete el campo nombre."})
        return false;
    }
    if (!user.email){
        res.status(500).send({status:"error", message:"Error. Complete el campo email."})
        return false;
    }

    users.push({nombre:user.nombre, email:user.email});

    res.status(200).send({status:"success", message:"Se agregó correctamente el usuario."})
})

///////DELETE////////
app.delete("/api/user/", (req, res) => {
    let {email} = req.query;
    // let email = req.params.email;

    if (!email){
        res.status(500).send({status:"error", message:"Error. Complete el campo email."})
        return false;
    }

    let userArray = users.find(item => item.email === email);
    
    if (!userArray){
        res.status(500).send({status:"error", message:"Error. No se encontró ningún usuario con ese email."})
        return false;
    }

    users = users.filter(item => item.email !== email);

    res.send({status:"ok", message:"Se eliminó correctamente el usuario."})

})

app.listen(port, () => {
    console.log("Servidor conectado al puerto: " + port);
  });