
const aleatorio = Math.round(Math.random() * 100);
const aleatorio2 = Math.round(Math.random() * 100);

console.group('Triangulo')
    function calcularTriangulo(lado1,lado2,base,altura){
        return {
            perimetro: lado1+lado2+base,
            area: (base*altura) / 2
        };
    }
    console.log(calcularTriangulo(aleatorio,aleatorio2,aleatorio,aleatorio2));

console.groupEnd('Triangulo')


console.group('Cuadrado')

    function calcularCuadrado(lado){
        return {
            perimetro: lado*4,
            area: lado*lado
        };
    }
    console.log(calcularCuadrado(aleatorio));
    
console.groupEnd('Cuadrado')


console.group('Circulo');

    function calcularCirculo(r){
        const diametro = r * 2
        return{
            diametro: diametro,
            //toFixed pone la cantidad de decimales que quieras
            circunferencia: diametro * Math.PI.toFixed(3),
            area: Math.pow(r,2) * Math.PI.toFixed(3)
        }
    }
    console.log(calcularCirculo(aleatorio));

console.groupEnd('Circulo');

console.log(aleatorio)
console.log(aleatorio2)


//Altura triángulo isósceles.

function alturaTrianguloIsoseles(lados, baseT){

    if (lados == baseT){
        console.log('El triángulo Isósceles tiene los lados iguales, pero la base no.');
    }
    else{
        return {
            lado: lados,
            base: baseT,
            altura: Math.sqrt(Math.pow(lados,2) - (Math.pow(baseT,2) / 4))
        }
    }
}

console.log(alturaTrianguloIsoseles(aleatorio, aleatorio2));




//Altura triangulo escaleno. (Todos los lados distintos)

//No verificado 
function alturaTrianguloEscaleno(lado1, lado2, baseI){

    const semiPerimetro = (lado1+lado2+baseI) / 2;
    const l1 = semiPerimetro * (semiPerimetro - lado1)
    const l2 = semiPerimetro * (semiPerimetro - lado2)
    const bI = semiPerimetro * (semiPerimetro - baseI)
    const formula = baseI/2 * (l1 * l2 * bI);

    if (lado1 == lado2 || lado1 == baseI || lado2 == baseI){
        console.log('Todos los lados deben ser diferentes');
    }
    else{
    
        return{
        lado1: lado1,
        lado2: lado2,
        baseI: baseI,
        alturaEscaleno: Math.sqrt(formula).toFixed(2)
        }
    }
}
console.log(alturaTrianguloEscaleno(5,12,15));


console.group('Porcentajes')

    function calcularPorcentajes(price, dcto) {
        const priceF = price * (100 - dcto) / 100
        return{
            price: price,
            dcto: dcto,
            priceFinal: priceF
        }
    }
    console.log(calcularPorcentajes(100,15))

console.groupEnd('Porcentajes')

//Juntar JS con HTML
const dctoContainer = document.createElement('div');
dctoContainer.classList.add('dcto-container');

function mostrarDcto(precio){    
    
    const precioN = document.createElement('p');
    precioN.setAttribute('string', precio)

    dctoContainer.appendChild(precioN)
}

