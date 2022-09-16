//Análisis personal
                        
function encontrarPersona(personaABuscar) {
                    //persona = Parámetro que recorre el arreglo
    return salarios.find(persona => persona.name == personaABuscar);
}

function medianaXPersona (namePerson) {
    //.trabajos al final, es para que nos traiga el arreglo de objetos llamado así que contiene el salario, el año y la empresa.
    const trabajos = encontrarPersona(namePerson).trabajos;
    const salarioTrabajos = trabajos.map(function(element) {
        return element.salario;
    });

    //Ya teniendo el array de salarios, se puede mandar a nuestro "Diccionario de funciones" para calcular la mediana.
    const medianaSalarios = PlatziMath.calcularMediana(salarioTrabajos);

    return medianaSalarios;

}

//Proyeccion Salarial personal

function proyeccionXPersona (namePerson) {
    const trabajos = encontrarPersona(namePerson).trabajos;
    let incrementoPorcentaje = [];

    //Lo iniciamos en 2 posición para poder comparar y restar.
    for (i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;

        //Crecimiento, en efectivo
        const crecimiento = salarioActual - salarioAnterior;
        //pasamos el crecimiento a porcentaje
        const porcentajeCrecimiento = crecimiento / salarioAnterior;  
        //Ingresamos al array cada porcentaje
        incrementoPorcentaje.push(porcentajeCrecimiento);
    }

    const medianaIncrementoPorcentaje = PlatziMath.calcularMediana(incrementoPorcentaje);

    //Traemos al último salario del arreglo de objetos.
    const salarioFinal = trabajos[trabajos.length - 1].salario;
    //Calculamos el aumento efectivo
    const aumento = salarioFinal * medianaIncrementoPorcentaje;
    //Retornamos el salario Final mas el aumento
    return Math.floor(salarioFinal + aumento);
    
}

//Análisis Empresarial

/**
 * EJ: Modelo al que se quiere llegar
 * Empresas {
 * Freelance {
 * 2018: [salario, salario, salario...],
 * 2019: [salario, salario, salario...],
 * 2020: [salario, salario, salario...],
    ... con todas las empresas registradas};
*/

const empresas = {};
 
// person va a iterar en todo el arreglo llamado salarios.
//A su vez trabajo va a iterar por cada persona del arreglo salarios, los trabajos en la que esta estuvo.

for (person of salarios) {
    for (trabajo of person.trabajos){
//Sino existe el nombre de la empresa en nuestro objeto empresas, entonces creamos un objeto con el nombre de la misma
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
//Sino existe el año en el que se trabajó en nuestro objeto empresas, entonces creamos un arreglo con nombre del año.
        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

//Y por último pusheamos todos los salarios de cada año.
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);

    }
}
console.log({empresas});
/**De este for sale cada empresa convertida en un objeto, que va a tener como propiedad los años en los que los empleados trabajaron, y como valor un arreglo que guarda cada salario por año que ganó cada empleado cuando trabajó en esa empresa */