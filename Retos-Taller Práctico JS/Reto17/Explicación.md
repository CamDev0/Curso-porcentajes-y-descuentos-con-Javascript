 -- Primero, declaramos el arreglo, que en este caso son 4 posiciones, pero, con este método puede ser de mas posiciones.

////////

periodos = [20,15,33,25];

////////

 -- Luego, convertimos cada valor de ese arreglo a decimal, recorriendolo con un map, pero a su vez que este represente su rentabilidad con respecto a la empresa, de esta manera. Ej: 20 + 100 = 120 /100 = 1.2 -> El valor que necesitamos para calcular mas fácil y preciso.

/////////

const valorDecimal = periodos.map(function(list){
    return (list + 100) / 100 
});

//////////


--Ya teniendo esos valores en decimales, lo siguiente que debemos hacer es multiplicarlos todos, algo que podemos lograr con el método reduce, le mandamos como parámetro la lista con los valores decimales, y el "contador multiplicador" que nos va a multiplicar todos los valores.

//////////

const multiplicarValores = valorDecimal.reduce(function(element, mult = 1){
    return mult * element;
});
//////////


-- ya teniendo listo ese valor final que necesitabamos, procedemos al último paso que es sacar la raiz.

--Creamos una función donde le vamos a mandar como parámetro el valor que hemos multiplicado en el paso anterior, luego con la siguiente lógica del math.pow nos permitirá sacar la raiz N de ese valor.

///////////

//Sacamos la raiz N de este valor, donde N es el Nro de periodos, en este caso, tenemos un arreglo de 4 posiciones, entonces N = 4.

function calcularRaiz(valorMultiplicado) {
    let num = valorMultiplicado;
    let raiz = periodos.length;

//Con esto nos saca cualquier raiz con máximo 2 decimales.
    return (Math.pow(num, 1/raiz).toFixed(2));

}
///////////


--Ya teniendo la raiz N de ese valor, tenemos todo listo, simplemente, guardamos el valor en una variable para mas comodidad.
////////
const valor = (calcularRaiz(multiplicarValores));
///////

-- Y imprimimos en consola el valor.

/////////

const valorPorcentaje = valor * 100 - 100;
console.log('La rentabilidad de esta empresa en ' + periodos.length + ' años sería de: ' + valor + ', que en porcentaje sería: ' + valorPorcentaje + '%');

////////


OUTPUT, (En este caso)

////////
La rentabilidad de esta empresa en 4 años sería de: 1.23, que en porcentaje sería: 23 %
/////////