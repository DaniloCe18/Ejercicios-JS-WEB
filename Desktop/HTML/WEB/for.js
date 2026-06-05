// a
var palabras = ["manzana", "banana", "frutilla", "naranja", "limon"];

for (var i = 0; i < palabras.length; i++) {
    alert("Palabra actual: " + palabras[i]);
}


// b
for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert("Palabra modificada: " + palabraModificada);
}


// c
var sentence = "";

for (var i = 0; i < palabras.length; i++) {
    // Sumamos la palabra y un espacio para que no queden todas pegadas
    sentence = sentence + palabras[i] + " "; 
}
alert("Oración completa: " + sentence);


// d
var arrayVacio = [];

for (var i = 0; i < 10; i++) {
    arrayVacio.push(i); 
}
console.log("5d. Array final completado:", arrayVacio);