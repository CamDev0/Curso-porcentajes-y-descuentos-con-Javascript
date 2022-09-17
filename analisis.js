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
    return Math.floor(salarioFinal + aumento).toFixed(2);
    
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
/**De este for sale cada empresa convertida en un objeto, que va a tener como propiedad los años en los que los empleados trabajaron, y como valor un arreglo que guarda cada salario por año que ganó cada empleado cuando trabajó en esa empresa */

//Mediana por año de cada empresa.

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe.');
    } 
    else if(!empresas[nombre][year]) {
        console.warn('La empresa no dió salarios ese año.');
    }
    else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}

//Proyección de cada empresa

function proyeccionXEmpresa (name) {
    if (!empresas[name]) {
        console.warn('No existe esta empresa.');
    }
    else {
        //Creamos un arreglo a partir del objeto empresas, que contenga el name(año), y sus valores(arreglo de salarios ese año).
        const empresaYears = Object.keys(empresas[name]);
        
        //listaMedianaYears va a hacer un map a empresaYears, donde va a recibir los años donde se encuentran los arreglos de salarios y los va a mandar a la función medianaEmpresaYear para sacarles la mediana a cada año
        const listaMedianaYears = empresaYears.map(function(year){
            return medianaEmpresaYear(name, year);
            //[800, 900, 1000, 850] retorna un arreglo con las medianas de cada empresa, cada año.
        })
       
    
         //Misma lógica de proyeccionXPersona
        let incrementoPorcentaje = [];

        for (i = 1; i < listaMedianaYears.length; i++){
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento = crecimiento / salarioAnterior;  
            incrementoPorcentaje.push(porcentajeCrecimiento);
        }
        const medianaIncrementoPorcentaje = PlatziMath.calcularMediana(incrementoPorcentaje);

        const medianaFinal = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = medianaFinal * medianaIncrementoPorcentaje;
        return Math.floor(medianaFinal + aumento).toFixed(2);
    }

}



//Análisis General

function medianaGeneral() {
    //Creamos un array con todos los nombres
    const nombres = salarios.map(personas => personas.name);
    //Creamos otro array que guarde la mediana de salarios de cada nombre.
    const medianaXNombre = nombres.map(nombre => medianaXPersona(nombre));

    const mediana = PlatziMath.calcularMediana(medianaXNombre);

    return mediana;
};

function medianaGeneralTop10Personas(){
    const listaMedianas = salarios.map((iterador) => medianaXPersona(iterador.name));

    //Sabemos que .sort recibe dos parámetros para poder comparar, lo nuevo es .slice, que le dice al método sort, el rango de valores que va a retornar.
    const top10 = listaMedianas.sort((a,b) => b-a).slice(0,10);

    return PlatziMath.calcularMediana(top10);
}

function medianaGeneralTop10PorcentajePersonas(){
    const listaMedianas = salarios.map((iterador) => medianaXPersona(iterador.name));

    const top10Porcentaje = listaMedianas.sort((a,b) => b-a).slice(0,2);

    return PlatziMath.calcularMediana(top10Porcentaje);
}


//Funciones Agregadas Propias (reto 2 del curso.)
function promedioMayorMenorSalario(name) {
    if (!empresas[name]) {
        console.warn('No existe esta empresa.');
    }
    else {
        
        const empresaYears = Object.values(empresas[name]);
        const salarioMenor = empresaYears.map((element)=>{
            let min = Math.min(...element);
            return min;
        });
        
        const salarioMayor = empresaYears.map((element)=>{
            let max= Math.max(...element);
            return max;
        });
        
        let promedioSalarios = [];
        for (i = 0; i < salarioMayor.length; i++) {
            promedioSalarios[i] = (salarioMayor[i] + salarioMenor[i]) / 2; 
        }
        
        return promedioSalarios;
    }
}

function Top10PersonasMayorMediana(){
    //Sacamos de nuevo la medianaXPersona, solo que de otra manera.
    const listaMedianas = salarios.map((iterador) => medianaXPersona(iterador.name));

    //Sabemos que .sort recibe dos parámetros para poder comparar, lo nuevo es .slice, que le dice al método sort, el rango de valores que va a retornar.
    const top10 = listaMedianas.sort((a,b) => b-a).slice(0,10);

    return top10;
}

function Top10PorcentajePersonasMayorMediana(){
    //Sacamos de nuevo la medianaXPersona, solo que de otra manera.
    const listaMedianas = salarios.map((iterador) => medianaXPersona(iterador.name));
    
    //Sabemos que .sort recibe dos parámetros para poder comparar, lo nuevo es .slice, que le dice al método sort, el rango de valores que va a retornar.
    const top10 = listaMedianas.sort((a,b) => b-a).slice(0,2);
    
    return top10;
}

function Top30PorcentajePersonasMayorMediana(){
    //Sacamos de nuevo la medianaXPersona, solo que de otra manera.
    const listaMedianas = salarios.map((iterador) => medianaXPersona(iterador.name));
    
    //Sabemos que .sort recibe dos parámetros para poder comparar, lo nuevo es .slice, que le dice al método sort, el rango de valores que va a retornar.
    const top10 = listaMedianas.sort((a,b) => b-a).slice(0,6);
    
    return top10;
}

//Proximo a añadir: top personas con menor salario, salario promedio de todas las empresas, etc...