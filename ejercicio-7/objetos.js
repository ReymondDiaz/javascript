//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = { 
    nombre: "Reymond",
    apellido: "Diaz",
    edad: 28,
    altura: 1.70,
    isDeveloper:true }
    console.log(datosPersonales)
//- Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;
console.log(edad);
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaDatosPersonales= [
    { ...datosPersonales},
    { nombre: "Jose", apellido: "Pirela", edad: 30, altura: 1.68, isDeveloper:false },
    { nombre: "Katherine", apellido: "Jimenez", edad: 27, altura: 1.70, isDeveloper:false }]
    
    console.log(listaDatosPersonales)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = listaDatosPersonales.sort((a,b) => b.edad - a.edad)
    console.log(listaOrdenada)