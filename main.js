// Arreglos
let numeros = [1, 2, 3, 4, 5];
let frutas = ['manzana', 'banana', 'pera', 'uva'];
let ciudades = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
let objetos = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }];
let mixto = [1, 'hola', true, null];

// Mostrando los arreglos originales
console.log("Arreglos originales:");
console.log(numeros);
console.log(frutas);
console.log(ciudades);
console.log(objetos);
console.log(mixto);

console.log("\nAplicando métodos:");

numeros.push(6);
console.log("numeros después de push:", numeros);

frutas.shift();
console.log("frutas después de shift:", frutas);

for (let i = 0; i < ciudades.length; i++) {
  console.log("Ciudad:", ciudades[i]);
}

for (let i = 0; i < objetos.length; i++) {
  console.log("Nombre:", objetos[i].nombre, ", Edad:", objetos[i].edad);
}

let nuevoArreglo = mixto.slice(0, 3);
console.log("nuevoArreglo:", nuevoArreglo);