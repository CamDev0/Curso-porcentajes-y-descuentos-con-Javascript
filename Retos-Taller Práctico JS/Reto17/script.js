
const outputHTML = document.querySelector('.outputEjercicio');


//EJERCICIO

//Valores de rentabilidad de la empresa en 4 años.
periodos = [20,15,33,25];

//Los pasamos a valores porcentuales.
const valorDecimal = periodos.map(function(list){
    return (list + 100) / 100 
});

console.log (valorDecimal);

//Multilicamos todos los valores.
const multiplicarValores = valorDecimal.reduce(function(element, mult = 1){
    return mult * element;
});

console.log(multiplicarValores);

//Sacamos la raiz N de este valor, donde N es el nro de periodos.
function calcularRaiz(valorMultiplicado) {
    let n = valorMultiplicado;
    let raiz = periodos.length;

    //Con esto nos saca cualquier raiz con máximo 2 decimales.
    return (Math.pow(n, 1/raiz).toFixed(2));

}

//Agregamos el valor que retorna la función a una variable.
const valor = (calcularRaiz(multiplicarValores));

//Imprimimos en consola el valor.
const valorPorcentaje = valor * 100 - 100;
console.log('La rentabilidad de esta empresa en ' + periodos.length + ' años sería de: ' + valor + ', que en porcentaje sería: ' + valorPorcentaje + '%');

//Imprimimos en el index.html el valor (Opcional)
outputHTML.innerText = 'La rentabilidad de esta empresa en ' + periodos.length + ' años sería de: ' + valor + ', que en porcentaje sería: ' + valorPorcentaje + '%' ;

