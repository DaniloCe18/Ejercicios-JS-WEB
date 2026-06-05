// a
console.log("\n--- 6. FUNCIONES ---");

function suma(num1, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Error: Uno de los parámetros no es un número.");
        return NaN;
    }


    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert("Error: Los números deben ser enteros. Se devolverá el resultado redondeado.");
        return Math.round(num1 + num2);
    }

    var resultado = num1 + num2;
    return resultado;
}

var resultadoCorrecto = suma(7, 11);
console.log("6a. Resultado correcto (7 + 11): " + resultadoCorrecto);

var resultadoErrorTipo = suma(5, "hola");
console.log("6b. Resultado con error de tipo: " + resultadoErrorTipo);


var resultadoDecimal = suma(4.3, 2.8); 
console.log("6d. Resultado con decimales redondeado: " + resultadoDecimal);

// c
function validate_integer(numero) {
    if (Number.isInteger(numero)) {
        return true;
    } else {
        return false;
    }
}

console.log("6c. ¿10 es entero?: " + validate_integer(10));   
console.log("6c. ¿5.5 es entero?: " + validate_integer(5.5)); 

// e. Creamos la función encargada únicamente de validar y redondear
function validarYRedondear(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        alert("Error (Función separada): Hay decimales. Se devolverá el valor redondeado.");
        return Math.round(n1 + n2);
    }
    return null; // Si son enteros, no hace nada
}

function sumaModular(num1, num2) {
    // Primero mantenemos el chequeo de tipo de dato
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Error: Uno de los parámetros no es un número.");
        return NaN;
    }

    // Llamamos a la función separada del punto e
    var controlDecimales = validarYRedondear(num1, num2);
    if (controlDecimales !== null) {
        return controlDecimales; // Si la validación devolvió un redondeo, cortamos acá
    }

    return num1 + num2;
}

var pruebaFinal = sumaModular(10.6, 4.1); // 10.6 + 4.1 = 14.7 -> Redondea a 15
console.log("6e. Resultado usando funciones separadas: " + pruebaFinal);