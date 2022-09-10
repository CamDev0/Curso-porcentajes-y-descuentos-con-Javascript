
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

//Calcular porcentaje de descuento con cupones. Objetos de JS.
const name_cupon_Methods = document.querySelector('#nameCuponMethods'); 
const price_cupon_Methods = document.querySelector('#priceCuponMethods');
const cuponRedimir_Methods = document.querySelector('#cuponMethods');
const btnCupon_Methods = document.querySelector('#calculatorCuponMethods');
const pCuponResult_Methods = document.querySelector('.resultCuponMethods');
const pCuponResultName_Methods = document.querySelector('.resultNameCuponMethods');

//Calcular porcentaje de dcto con cupones. Metodos Filter. 

const nameCuponFilter = document.querySelector('#name_Cupon_Filter'); 
const priceCuponFilter = document.querySelector('#price_Cupon_Filter');
const cuponRedimirFilter = document.querySelector('#cuponFilter');
const btnCuponFilter = document.querySelector('#calculatorCuponFilter');
const pCuponResultFilter = document.querySelector('.resultCuponFilter');
const pCuponResultNameFilter = document.querySelector('.resultNameCuponFilter');


//Calcular porcentaje de dcto con cupones. Metodos Find. 

const nameCuponFind = document.querySelector('#name_Cupon_Find'); 
const priceCuponFind = document.querySelector('#price_Cupon_Find');
const cuponRedimirFind = document.querySelector('#cuponFind');
const btnCuponFind = document.querySelector('#calculatorCuponFind');
const pCuponResultFind = document.querySelector('.resultCuponFind');
const pCuponResultNameFind = document.querySelector('.resultNameCuponFind');


//2. Añadimos un evento al boton, para que cuando le den click, ejecute la función calcular
btn.addEventListener('click', priceDiscountCalculator);
btnCupon.addEventListener('click', priceDiscountCalculatorCupon);
btnCupon_Methods.addEventListener('click', priceDiscountCalculatorCuponMethods);
btnCuponFilter.addEventListener('click', priceDiscountMethodsFilter);
btnCuponFind.addEventListener('click', priceDiscountMethodsFind);


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


//Objeto con los datos de los cupones.
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

    //Preguntamos si cuponObj, es igual a el cupon ingresado por el usuario.
    if (cuponObj[cuponMethods]){

        //Si es así, guardamos el valor en una variable para luego sacar el dcto.
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



//Array de objetos.
const couponList = [];

couponList.push({
    name: 'CAMDCTO',
    discount: 40,
});

couponList.push({
    name: 'CAM50',
    discount: 50,
});

couponList.push({
    name: 'CAMDEV',
    discount: 30,
});

couponList.push({
    name: 'CAMDEV0',
    discount: 20,
});


//Filter: Retorna un array.

function priceDiscountMethodsFilter() {
    const nameFilter = nameCuponFilter.value;
    const priceFilter = Number(priceCuponFilter.value);
    const nameFilterCoupon = cuponRedimirFilter.value;
    let discountFilter;
    let endPriceFilter;

    if (!priceFilter || !nameFilterCoupon){
        pCuponResultFilter.innerText = 'Por favor, rellene todos los campos del formulario.'
        return;
    }

    //searchCoupon representa al couponList que declaramos arriba, si name es igual al cupon ingresado, retorna el arreglo con el name y el discount.
    function isCouponInArray(searchCoupon){
    
        return searchCoupon.name == nameFilterCoupon;
    }

    //El método filter nos envía un arreglo. si tiene algun dato encontró el valor, sinó retorna un arreglo vacío.
    const couponInArray = couponList.filter(isCouponInArray);

    //Por lo tanto preguntamos si couponInArray es mayor a 0 para la validación.
    if (couponInArray.length > 0 ){
        //Si el filter retornó algo en el arreglo, le aplicamos a la variable el valor de descuento.
        discountFilter = couponInArray[0].discount;
    }
    else {
        //Si lo retornó vacío, entonces: 
        pCuponResultFilter.innerText = 'Lo sentimos, este cupón no existé o ya expiró.'
        return;
    }

 

    endPriceFilter = priceFilter * (100 - discountFilter) / 100;
    pCuponResultNameFilter.innerText = '¡¡¡¡ ' + nameFilter + ' !!!!'
    pCuponResultFilter.innerText = '¡Felicidades!, Has ganado un cupón del: ' +discountFilter+ '% .Precio redimido: ' + endPriceFilter;

}



//Find: Retorna un objeto.

function priceDiscountMethodsFind() {
    const nameFind = nameCuponFind.value;
    const priceFind = Number(priceCuponFind.value);
    const nameFindCoupon = cuponRedimirFind.value;
    let discountFind;
    let endPriceFind;

    if (!priceFind || !nameFindCoupon){
        pCuponResultFind.innerText = 'Por favor, rellene todos los campos del formulario.'
        return;
    }

    //searchCoupon representa al couponList que declaramos arriba, si name es igual al cupon ingresado, retorna el objeto con el name y el discount.
    function isCouponInArray(searchCoupon){
    
        return searchCoupon.name == nameFindCoupon;
    }

    //El método find nos envía un objeto. si tiene algun dato encontró el valor, sinó retorna un objeto vacío.
    const couponInArray = couponList.find(isCouponInArray);

    //Por lo tanto preguntamos si couponInArray es mayor a 0 para la validación.
    if (couponInArray){
        //Si el find retornó algo en el objeto, le aplicamos a la variable el valor de descuento.
        discountFind = couponInArray.discount;
    }
    else {
        //Si lo retornó vacío, entonces: 
        pCuponResultFind.innerText = 'Lo sentimos, este cupón no existé o ya expiró.'
        return;
    }

 

    endPriceFind = priceFind * (100 - discountFind) / 100;
    pCuponResultNameFind.innerText = '¡¡¡¡ ' + nameFind + ' !!!!'
    pCuponResultFind.innerText = '¡Felicidades!, Has ganado un cupón del: ' +discountFind+ '% .Precio redimido: ' + endPriceFind;
   

}