//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

let compras = ["cafe","azucar","arroz","pasta","pollo"];
console.log(compras);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

compras.push("aceite de girasol");
console.log(compras);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compras.pop();
console.log(compras);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [
    { titulo: "Harry Potter", director:"David Yates" , fecha: new Date(2001, 11, 29)},
    { titulo: "300", director: " Zack Snyder", fecha:new Date(2007,03,09)},
    { titulo: "Alerta Roja", director:"Rawson Marshall Thurber", fecha: new Date(2021, 11, 04) }
    
]
console.log(listaPeliculas);

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const nuevaListaPeliculas= listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010,01,01));
console.log(nuevaListaPeliculas);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const newArrayDirectores = listaPeliculas.map(directores => {
    return directores.director;
})
console.log(newArrayDirectores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const newArrayTitulos = listaPeliculas.map(titulos => {
    return titulos.titulo;
})
console.log(newArrayTitulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const arrayConcat = newArrayDirectores.concat(newArrayTitulos);
console.log(arrayConcat);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const arrayPropagacion = [...newArrayDirectores, ...newArrayTitulos];
console.log(arrayPropagacion);