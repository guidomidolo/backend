objetos = [
    {
        manzanas: 3, 
        peras: 2, 
        carne: 1,
        jugos: 10,
        dulces:2
    
    },
    {
        manzanas: 3, 
        sandias: 2, 
        huevos: 1,
        jugos: 10,
        panes:2

    }
]

// const resultado = [];

// objetos.forEach(elemento => {
//     Object.keys(elemento).forEach(claves => {
//         !resultado.includes(claves) && resultado.push(claves)
//     })
// });

let resultado = 0;

objetos.forEach(elemento => {
    Object.values(elemento).forEach(claves => {
        resultado += claves;
    })
});

console.log (resultado) 


class TicketManager {
    constructor() {
        this.eventos = [];
    }
    
    static precioBaseDeGanancia = 100;

    getEventos(){
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha){
        let fecha = new Date;
        let participantes = [];
        const evento = {nombre:nombre, lugar:lugar, precio:precio*0.15,capacidad:50, fecha:fechaj}
        this.eventos.push(evento)
    }
} 