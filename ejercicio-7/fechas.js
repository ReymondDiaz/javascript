//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const fechaActual = new Date();
console.log(fechaActual);


//- La fecha de tu nacimiento
const fechaNacimiento = new Date(1994, 9, 27);
console.log(fechaNacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparar = (fechaActual > fechaNacimiento);
console.log(comparar);

//- Una variable que contenga el día de tu nacimiento
const diaDeNacimiento = fechaNacimiento.getDate();
console.log(diaDeNacimiento);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesDeNacimiento = fechaNacimiento.getMonth();
console.log(mesDeNacimiento + 1);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const AnyoDeNacimiento = fechaNacimiento.getFullYear();
console.log(AnyoDeNacimiento);