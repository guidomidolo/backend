const numAleatorio = () => {
    return Math.round(Math.random() * 19) + 1;
}

console.log(numAleatorio());

const arrayNumeros = [];

for(let i = 0; i<10000; i++) {
    numero = numAleatorio();
    arrayNumeros.push(numero);
}

const objeto = [];

for (let i = 1; i <= 20; i++ ) {
    const total = arrayNumeros.filter(item => i === item)
    // objeto[i] = total.length;
    console.log("El número " + i + " apareció " + total.length + " veces.");
}