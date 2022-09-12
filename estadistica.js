//Método reduce.

let array = [100,200,300,400,500];
let arrayArrow = [200,600,600,100,900];
//let cont = 0;

function calcularPromedio(list){
/*   for (i = 0; i < list.length; i++){
    cont = cont + list[i];
  }
 */
  
  //valorAcum, hace el papel del cont que se usó en el for, y nuevoValor hace algo parecido a i, recorrer los valores e ir sumandose con el acumulador.
  function sumarTodosElementos(valorAcumulado, nuevoValor){
    return valorAcumulado + nuevoValor;
  }

  //list.reduce() le envía los argumentos que necesita la función, sin necesidad de ponerla en paréntisis.
  const sumaTotal = list.reduce(sumarTodosElementos);

  return sumaTotal;
}

const result = calcularPromedio(array);
console.log('El promedio de los datos ingresados es: ' + result / array.length); 


//Arrow functions, sintaxis mas corta.

const calcularPromedioArrowFunctions = (list) => {

    //Cuando la funcion es corta, no hay necesidad de poner corchetes ni return, como en este caso.

    //        nameFunction       function parameters     instrucciones.
    const sumarElementosArrow = (valorAcum, newValor) => valorAcum + newValor;

    const sumaTotal2 = list.reduce(sumarElementosArrow);
    return sumaTotal2;
}
    
    const resultArrow = calcularPromedioArrowFunctions(arrayArrow);
    console.log('El promedio de los datos ingresados es: ' + resultArrow / arrayArrow.length); 
    


/********************************************************** */

    //Ejemplo arrow functions implementado con metodos JS

//Suma todos los datos del array, en este caso a, toma el valor de acumulador, empieza en 0. b es parecido a i en el for, hace el recorrido tomando todos los valores del array y se va sumando con a.
const sumaNum = array.reduce((a,b) => a + b);
console.log("La suma de los valores del array es: " + sumaNum);


/************************************************************* */

//Funcion Para saber si la suma de unos valores es par o impar

const arrayNum = [10,20,30,60,50,60,10,40];

const isNumPar = arrayNum.reduce((acumulador, valor) => acumulador + valor);

if (isNumPar % 2 == 0){
    console.log('El número es par, ' + isNumPar);
} else{
    console.log ('El número es impar, ' + isNumPar);
}

//Funcion para saber si el tamañp de un array es  par o impar.

function isPar(arrayNum){
    //Si la función si es par, retorna el 0 del residuo, por lo tanto retorna un false, por eso le negamos la condicion, para que pueda retornar true.
    return !(arrayNum.length % 2);
}

function isImpar(arrayNum){
    //Aca es todo lo contrario, si es impar, el residuo nunca sería 0, entonces lo dejamos normal para que pueda retornar un true.
    return arrayNum.length % 2;
}


//Function Calcular Mediana.

function calcularMediana(listDesordenada) {
    const arrayNum = ordenarLista(listDesordenada);
    //La variable guarda true si es par or false si es impar.
    const listaesPar = isPar(arrayNum);

    if(listaesPar)
    {
        const indiceListaPar = Math.floor(arrayNum.length/2);
        let num1 = arrayNum[indiceListaPar - 1];
        let num2 = arrayNum[indiceListaPar];
        console.log('La mediana de esta lista es: ' + (num1 + num2) / 2);
    

    }else {
        const indiceListImpar = Math.floor(arrayNum.length / 2);
        console.log ("La mediana de esta lista es: " + arrayNum[indiceListImpar]);   
    }
    return arrayNum;
}


//Método sort para ordenar arrays


function ordenarLista (listDesordenada){

    //Si la queremos ordenar de mayor a menor, solo hace falta poner que retorne el negativo primero y luego el positivo
    
    function ordenarListaSort(valorAcumulado, nuevoValor){
/*         if (valorAcumulado > nuevoValor){
            //Si le enviamos 1 o cualquier entero positivo al método sort, va a interpretar que el nuevo valor es menor que el que ya teníamos acumulado, por lo tanto hace el flip.
            return 1;
        } else if (valorAcumulado == nuevoValor) {
            //Si le devolvemos 0, deja todo igual.
            return 0;
        } else {
            //Si le enviamos -1 o cualquier negativo, va a interpretar que el nuevo valor es mayor que el que teníamos acumulado, por lo tanto hace el flip al contrario que cuando retorna un 1 < positivos.
            return -1;
        }
         */

        //Este return equivale a todo el if-else

        return valorAcumulado - nuevoValor; //Menor-Mayor
        /*
        return 5 - 10 -> -5 flip 
        return 5 - 5 -> 0 igual
        return 10 - 5 -> 5 flip
        Mayor- Menor -> return nuevoValor - valorAcumulado
        */
    }
    //A estos métodos: sort, reduce, filter, etc, se les envía una función como parámetro para funcionar.
    const lista = listDesordenada.sort(ordenarListaSort);
    //Muy parecido al funcionamiento de reduce, solo que esta intercambia en vez de acumular y sumar los valores.

    return lista;
}