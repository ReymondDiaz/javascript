//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 170;
console.log(alturaCm + " cm.");

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMts = 1.70;
console.log(alturaMts + " mts.");

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 98.390;
console.log(pesoKg + " kg.");

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMt =Math.ceil(alturaMts);
console.log(alturaMt  + " Mts.");

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoK =Math.floor(pesoKg);
console.log(pesoK + " kg.");

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValorIguales =  Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(maxValorIguales);
