/*- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/




let factorial=10 ;
for(let i = 1; i<10; i++){
    factorial = factorial * i 

}
console.log(factorial);

let factorial2= 10;
let i = factorial2 - 1;
while(i > 1){
    factorial2 *= i;
    i--;
}
console.log(factorial2);

let factorial3 = 10;
let j = factorial3 - 1;
while (factorial3){
    factorial3 *= j;
    j--;
    if ( j<= 1) break;
}
console.log(factorial3);
