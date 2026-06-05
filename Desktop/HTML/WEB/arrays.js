//a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("3a. Mes en posición 5: " + meses[5]);   
console.log("3a. Mes en posición 11: " + meses[11]); 

//b
meses.sort();
console.log("3b. Array ordenado alfabéticamente: ", meses);

//c
meses.unshift("InicioAño"); 
meses.push("FinAño");       
console.log("3c. Array con elementos agregados: ", meses);

//d
meses.shift(); 
meses.pop();   
console.log("3d. Array después de quitar los elementos de las puntas: ", meses);

//e
meses.reverse();
console.log("3e. Array invertido: ", meses);

// f
var mesesUnidos = meses.join(" - ");
console.log("3f. String con meses unidos: " + mesesUnidos);

// g
var mesesOriginal = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var copiaMeses = mesesOriginal.slice(4, 11);
console.log("3g. Copia desde Mayo hasta Noviembre: ", copiaMeses);