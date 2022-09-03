//Forma 1 para convertir un string a numero 
let val1S = '10';
let val1 = parseInt(val1S);
console.log(val1S, val1);

//Forma 2 para convertir un string a un numero 
let val2S = '7.9';
let val2 = parseFloat(val2S);
console.log(val2S, val2);

//Forma 3 para convertir un string a numero 
let val3S = '6.4';
let val3 =Number(val3S);
console.log(val3S, val3);

console.log('Hola mundo');

let nombre = prompt('¿Cuál es tu nombre?');

console.log(nombre);

console.log('Hola ' + nombre + ' buen dia!');

let num1 = prompt('Escribe tu primer numero');
num1 = parseInt(num1);

let num2 = prompt('Escribe el segundo numero');
num2 = parseInt(num2);

let suma = num1 + num2;

console.log('El resultado es:', suma);

