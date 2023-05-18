//- Un nuevo Set con los nombres de tu familia
const nombresFamilia = new Set(["Mirella", "Sandra", "Greyvan","Zara","Abraham","Reymond"]);

console.log(nombresFamilia);


//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

nombresFamilia.add("Reymond");

console.log(nombresFamilia);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombresFamilia.add("Javascript");

console.log(nombresFamilia);
