
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

//Calcular porcentaje de descuento con cupones. Metodos de JS, mas efectivo.
const name_cupon_Methods = document.querySelector('#nameCuponMethods'); 
const price_cupon_Methods = document.querySelector('#priceCuponMethods');
const cuponRedimir_Methods = document.querySelector('#cuponMethods');
const btnCupon_Methods = document.querySelector('#calculatorCuponMethods');
const pCuponResult_Methods = document.querySelector('.resultCuponMethods');
const pCuponResultName_Methods = document.querySelector('.resultNameCuponMethods');


//2. Añadimos un evento al boton, para que cuando le den click, ejecute la función calcular
btn.addEventListener('click', priceDiscountCalculator);
btnCupon.addEventListener('click', priceDiscountCalculatorCupon);
btnCupon_Methods.addEventListener('click', priceDiscountCalculatorCuponMethods);


function priceDiscountCalculator() {
//3. Llamamos los valores ingresados por el usuario.
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    
    if (!price || !discount){
        pResult.innerText = 'Por favor, rellena todos los campos del formulario.';
        return;
    }

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
    const cupon = ['CAMDEV10', 'CUPON20', 'DEV30', 'DEV40','DEV50', 'DEV60', 'ULTRA70','DEV80', 'MEGAULTRA90'];
    const nameCupon = (name_cupon.value);
    const priceCupon = Number(price_cupon.value);
    const discountCupon = [10, 20, 30,40,50,60, 70, 80, 90];

    
    if (!nameCupon || !priceCupon){
        pCuponResult.innerText = 'Por favor, rellena todos los campos del formulario.';
        return;
    }

    for (i = 0; i < cupon.length; i++ )
    {    
        if (cuponRedimir.value == (cupon[i])){
            const endPriceCupon = (priceCupon * (100 - discountCupon[i])) / 100;
            pCuponResultName.innerText =  "¡¡¡¡" + nameCupon + "!!!!";
            pCuponResult.innerText = '¡Felicidades!, ha obtenido un cupón del ' + discountCupon[i]+ '%, precio redimido: $ ' + endPriceCupon;
            break;
        }
        else{
            
            pCuponResult.innerText = 'Lo sentimos, este cupon no está disponible o ya expiró'
        }    
    }        

       
}

const cuponObj = {
    'CAMILO30' : 30,
    'MAMA90' : 90,
    'DDEV80' : 80,
    'DCTO40'  : 40,
    'HELLO10' : 10,
    'VAMOS60' :60,
    'TICKET50' : 50,
    'F20'  : 20

}
function priceDiscountCalculatorCuponMethods(){
    const priceCuponMethods = Number(price_cupon_Methods.value);
    const cuponMethods = cuponRedimir_Methods.value;
    const nameCuponMethods = name_cupon_Methods.value;
    let endPriceMethods = 0;
    let discountMethods;
 
    if (!priceCuponMethods || !cuponMethods){
        pCuponResult_Methods.innerText = 'Por favor, rellena todos los campos del formulario.';
        return;
    }

    //Manera eficiente, podemos ingresar los cupones que queramos.

    if (cuponObj[cuponMethods]){
        discountMethods = cuponObj[cuponMethods];
    }
    else {
        pCuponResult_Methods.innerText = 'El cupon no existe o ya expiró.'
        return;
    }

    endPriceMethods = priceCuponMethods * (100 - discountMethods) / 100;
    pCuponResultName_Methods.innerText = '¡¡¡¡ ' + nameCuponMethods + ' !!!!'
    pCuponResult_Methods.innerText = '¡Felicidades!, haz obtenido un cupón del ' + discountMethods + '% . Precio Redimido: ' + endPriceMethods; 
}