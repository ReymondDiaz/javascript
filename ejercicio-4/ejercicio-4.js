/*Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

let nombre = "Reymond";
console.log(nombre);

let apellido = "Diaz";
console.log(apellido);

let estudiante = nombre + " " +  apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);

let primerLetra = nombre.slice(0,1);
console.log(primerLetra);

let ultimaLetra = apellido.slice(apellido.length -1, apellido.length);
console.log(ultimaLetra);

let eliminarEspacios = estudiante.replace(/ /g, "");
console.log(eliminarEspacios);

let verificarNombre = estudiante.includes(nombre)
console.log(verificarNombre);

