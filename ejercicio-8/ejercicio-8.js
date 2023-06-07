//Crea un archivo JS que contenga las siguientes líneas

// Una función sin parámetros que devuelva siempre "true"

function devuelveTrue() {
    return true
}
console.log(devuelveTrue());

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
promesa();
// Una función generadora de índices pares automáticos
function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
};
const gen = idsPares();
console.log(gen.next());