let cart_btn = document.getElementsByClassName('order');
let counter = 0;
let cart_items = document.getElementById('cart-items');
let rupee_sign = document.getElementById('rupee-sign'); 
let paymentHeader = document.getElementById('total-payment');
console.log(paymentHeader);
let total = 0

const updateCart = (e) => {
    let currentCart = e.target;
    itemContainer = currentCart.parentElement;
    let itemName = itemContainer.getElementsByClassName('title')[0].innerText;
    let itemPrice = itemContainer.getElementsByClassName('price')[0].innerText;
    counter++;
    addNewTable(itemName,itemPrice);
    
    let prices = cart_items.getElementsByClassName('item-price');
    for(var i=0; i<prices.length; i++){
        total = total + parseInt(prices[i].innerText);
    }
    document.getElementById('total-price').innerHTML = total

}

function addNewTable(itemName,itemPrice){
   let div = document.createElement('div');
   div.classList.add('cart-row');

   let insideDivContent = ` <div id="index_no">${counter}</div>
   <div id="item">${itemName}</div>
   <div id="item-price" class='item-price'> <i class="fas fa-rupee-sign"></i> ${itemPrice}</div>`;
   
   div.innerHTML = insideDivContent;
    cart_items.appendChild(div);
}

for(var i=0;i<cart_btn.length;i++){
    cart_btn[i].addEventListener('click',updateCart);
}

document.getElementById('index-checkout').addEventListener('click', () => {
    window.location.href = '/payment.html';
    paymentHeader.innerText = total
})