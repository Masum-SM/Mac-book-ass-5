function totalCost(){
    // find cost field 
    let bestPrice = document.getElementById('best-price').innerText;
    let memoryCost = document.getElementById('memory-cost').innerText;
    let storageCost = document.getElementById('storage-cost').innerText;
    let deliveryCost = document.getElementById('delivery-cost').innerText;

    // find and set total-pricce and Total
    let totalPrice = document.getElementById('total-price');
    // summation of all costs and setting on total price and total feild 
    totalPrice.innerText=parseFloat(bestPrice)+parseFloat(memoryCost)    +parseFloat(storageCost)+parseFloat(deliveryCost);
    document.getElementById('final-cost').innerText=totalPrice.innerText;

    const pomoCode = document.getElementById('pomo-code');
    pomoCode.removeAttribute('disabled')

}

// getting Memory Cost
function getMemoryCost(cost){
    let memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText =cost;
    totalCost()
}

// getting Storage Cost
function getStorageCost(cost){
    document.getElementById('storage-cost').innerText = cost;
    totalCost()
}

// getting Delivery Cost
function getDeliveryCost(charge){
    document.getElementById('delivery-cost').innerText = charge;
    totalCost()
}

// getting  Memory Button
document.getElementById('8GB-memory').addEventListener('click',function(){
    getMemoryCost(0);
})
document.getElementById('16GB-memory').addEventListener('click',function(){
    getMemoryCost(180);
})

// getting Storage Button
document.getElementById('256GB-SSD').addEventListener('click',function(){
  
    getStorageCost(0)
    
})
document.getElementById('512GB-SSD').addEventListener('click',function(){
    
    getStorageCost(100)
})
document.getElementById('1TB-SSD').addEventListener('click',function(){
    
    getStorageCost(180)
})

// getting  Delivey Button
document.getElementById('free-delivery').addEventListener('click',function(){
 
    getDeliveryCost(0)
})
document.getElementById('charge-delivery').addEventListener('click',function(){
   
    getDeliveryCost(20)
})

// pomo code input field , apply button and giving discount on total.
document.getElementById('pomo-button').addEventListener('click',function(){

    const finalCostfield = document.getElementById('final-cost');

    const finalCost = parseFloat(finalCostfield.innerText);

    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeField = pomoCode.value
    const lessAmount = (finalCost*20)/100;
    const total = finalCost - lessAmount;
    // condition for working pomo code and set discount on tatal.
    if(pomoCodeField == 'stevekaku'){
    
        finalCostfield.innerText = total;
       

        pomoCode.setAttribute('disabled',true)
    }
    pomoCode.value = '';
})

