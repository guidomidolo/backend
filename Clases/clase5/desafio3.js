moment = require("moment");

const fechaActual = moment();

// console.log(fechaActual);

const fechaNacimiento = moment("1996-09-13");

if (fechaNacimiento.isValid()) {
    console.log("La fecha es válida.");
    const years = fechaActual.diff(fechaNacimiento, "years");
    const months = fechaActual.diff(fechaNacimiento, "months");
    const days = fechaActual.diff(fechaNacimiento, "days");
    const hours = fechaActual.diff(fechaNacimiento, "hours");
    const minutes = fechaActual.diff(fechaNacimiento, "minutes");
    const seconds = fechaActual.diff(fechaNacimiento, "seconds");
    console.log(`Desde que naciste han pasado: ${years} años.`);
    console.log(`Desde que naciste han pasado: ${months} meses.`);
    console.log(`Desde que naciste han pasado: ${days} días.`);
    console.log(`Desde que naciste han pasado: ${hours} horas.`);
    console.log(`Desde que naciste han pasado: ${minutes} minutos.`);
    console.log(`Desde que naciste han pasado: ${seconds} segundos.`);

} else {
    console.log("Fecha incorrecta.")};

// console.log(fechaNacimiento);