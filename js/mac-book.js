

// device button function
function manageMemory(deviceSize,deviceCost){
    const value = document.getElementById(deviceSize);
    const getValue = value.value
    const extraCost = document.getElementById(deviceCost);
    extraCost.innerText = getValue;
}

// modify arithmetic function

//total price function
function addTotalPrice(value){
    const totalPrice = document.getElementById('total-price');
    const totalMoney = document.getElementById('total-money');
    const extraValue = document.getElementById(value)
    const totalValue = parseInt(totalPrice.innerText) + parseInt(extraValue.value);
    totalPrice.innerText = totalValue;
    totalMoney.innerText = totalValue;
    
}
//total price function
function subTotalPrice(value){
    const totalPrice = document.getElementById('total-price');
    const totalMoney = document.getElementById('total-money');
    const extraValue = document.getElementById(value)
    const totalValue = parseInt(totalPrice.innerText) - parseInt(extraValue.innerText);
    totalPrice.innerText = totalValue;
    totalMoney.innerText = totalValue;
}

//promo code 
function promoCode(){
    const  totalMoneyText = document.getElementById('total-money');
    const promoCode = document.getElementById('promo-code');
    if(promoCode.value == 'stevekaku'){
        totalMoneyText.innerText = (parseInt(totalMoneyText.innerText)*80)/100;
        promoCode.value = '';
    }
}

/// disabled function two parameter
function getDisabledTwo(firstStore,secondStore){
    document.getElementById(firstStore).disabled = true;
    document.getElementById(secondStore).disabled = false;
}
/// disabled function three parameter
function getDisabledThree(firstStore,secondStore,thirdStore){
    document.getElementById(firstStore).disabled = true;
    document.getElementById(secondStore).disabled = false;
    document.getElementById(thirdStore).disabled = false;
}

// memory button
document.getElementById('memory-8gb').addEventListener('click',function(){
    getDisabledTwo('memory-8gb','memory-16gb');
    subTotalPrice('extra-memory-cost');
    manageMemory('memory-8gb','extra-memory-cost');
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    getDisabledTwo('memory-16gb','memory-8gb');
    addTotalPrice('memory-16gb');
    manageMemory('memory-16gb','extra-memory-cost'); 
});

//storage button
document.getElementById('storage-25gb').addEventListener('click',function(){
    getDisabledThree('storage-25gb','storage-512gb','storage-1tb');
    subTotalPrice('extra-storage-cost');
    manageMemory('storage-25gb','extra-storage-cost');

});
document.getElementById('storage-512gb').addEventListener('click',function(){
    getDisabledThree('storage-512gb','storage-25gb','storage-1tb');
    addTotalPrice('storage-512gb');
    subTotalPrice('extra-storage-cost');
    manageMemory('storage-512gb','extra-storage-cost');
});
document.getElementById('storage-1tb').addEventListener('click',function(){
    getDisabledThree('storage-1tb','storage-512gb','storage-25gb');
    addTotalPrice('storage-1tb');
    subTotalPrice('extra-storage-cost');
    manageMemory('storage-1tb','extra-storage-cost');
});

//delivery charge button
document.getElementById('delivery-cost-0').addEventListener('click',function(){
    getDisabledTwo('delivery-cost-0','delivery-cost-20');
    subTotalPrice('extra-delivery-charge');
    manageMemory('delivery-cost-0','extra-delivery-charge');
});
document.getElementById('delivery-cost-20').addEventListener('click',function(){
    getDisabledTwo('delivery-cost-20','delivery-cost-0');
    addTotalPrice('delivery-cost-20')
    manageMemory('delivery-cost-20','extra-delivery-charge');
});

/// promo code button
document.getElementById('apply-code').addEventListener('click',function(){
   promoCode();
});
