
//Implementando Html desde JS. (En este caso)

//1. creamos variables para agregarle las clases o id del html.

//Calcular descuento normal.
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calculator')
const pResult = document.querySelector('.result')

//Calcular porcentaje de descuento con cupones.
const name_cupon = document.querySelector('#nameCupon'); 
const price_cupon = document.querySelector('#priceCupon');
const cuponRedimir = document.querySelector('#cupon');
const btnCupon = document.querySelector('#calculatorCupon');
const pCuponResult = document.querySelector('.resultCupon');
const pCuponResultName = document.querySelector('.resultNameCupon');


//2. Añadimos un evento al boton, para que cuando le den click, ejecute la función calcular
btn.addEventListener('click', priceDiscountCalculator);
btnCupon.addEventListener('click', priceDiscountCalculatorCupon);


function priceDiscountCalculator() {
//3. Llamamos los valores ingresados por el usuario.
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (discount > 100){
        pResult.innerText = 'El descuento no puede ser mas del 100%'
    }
    else if(price <= 0 || discount < 0) {
        pResult.innerText = 'Debe rellenar los campos con valores mayores o iguales a 0'
    }
    else{
        const endPrice = (price * (100 - discount)) / 100;
        //inerText es para agregar un string, al parrafo en este caso.
        pResult.innerText = 'El nuevo precio con descuento es $ ' + endPrice;
    }
}


function priceDiscountCalculatorCupon() {
    const cupon = 'CAMDEV0';
    const nameCupon = (name_cupon.value);
    const priceCupon = Number(price_cupon.value);
    const discountCupon = 50;

    if (cuponRedimir.value != cupon){
        pCuponResult.innerText = 'Lo sentimos, este cupon no está disponible o ya expiró'
    }
    else{
        const endPriceCupon = (priceCupon * (100 - discountCupon)) / 100;
        pCuponResultName.innerText =  "¡¡¡¡" + nameCupon + "!!!!";
        pCuponResult.innerText = '¡Felicidades!, ha obtenido un cupón del 50%, precio redimido: $ ' + endPriceCupon;
    }
}