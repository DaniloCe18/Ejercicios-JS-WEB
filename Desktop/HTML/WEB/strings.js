//a
var textoOriginal = "rey de copas";
var textoMayuscula = textoOriginal.toUpperCase();
console.log("2a. En mayusculas: "+ textoMayuscula);

//b
var textoB = "Independiente";
var resultadoB = textoB.substring(0, 5);
console.log("2b. Primeros 5 caracteres: " + resultadoB);

//c
var textoC = "Libertadores";
var resultadoC = textoC.substring(textoC.length -3);
console.log("2c. Ultimos 3 caracteres: " +  resultadoC);

//d
var textoD = "aLgOrItMoS";
var resultadoD = textoD.substring(0, 1).toUpperCase() + textoD.substring(1).toLowerCase();
console.log("2d. Formato Capitalizado: " + resultadoD);

//e
var textoE = "Buenas tardes";
var resultadoE = textoE.indexOf(" ");
console.log("2e. El primer espacio está en el índice: " + resultadoE);

// f
var textoF = "bOOTCAMP jAVASCRIPT";

var espacioIndice = textoF.indexOf(" ");

var palabraUno = textoF.substring(0, espacioIndice);
var palabraDos = textoF.substring(espacioIndice + 1);

var p1Formateada = palabraUno.substring(0, 1).toUpperCase() + palabraUno.substring(1).toLowerCase();
var p2Formateada = palabraDos.substring(0, 1).toUpperCase() + palabraDos.substring(1).toLowerCase();

var resultadoF = p1Formateada + " " + p2Formateada;
console.log("2f. Dos palabras corregidas: " + resultadoF);