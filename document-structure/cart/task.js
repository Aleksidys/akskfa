const cartWrapper = document.querySelector('.cart')
window.addEventListener('click', function(event){
    //console.log(event.target.className)


if (event.target.className === 'product__quantity-control product__quantity-control_inc') {
  const counterWraper = event.target.closest('.product__quantity-controls')
  const counter = counterWraper.querySelector('.product__quantity-value')
  counter.innerText = ++counter.innerText;

}

if (event.target.className === 'product__quantity-control product__quantity-control_dec') {
    const counterWraper = event.target.closest('.product__quantity-controls')
    const counter = counterWraper.querySelector('.product__quantity-value')
    if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
    }
 }

 if(event.target.className === 'product__add'){
   const product = event.target.closest('.product');
   const productInfo = {
    id: product.dataset.id,
    imgSrc: product.querySelector('.product__image').getAttribute('src'),
    title: product.querySelector('.product__title').innerText,
    lastCounter: product.querySelector('.product__quantity-value').innerText,
   }

   const productInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
   console.log(productInCart);
   if(productInCart) {
    const counterElement = productInCart.querySelector('.cart__product-count')
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.lastCounter)
   } else {  


   const productItemHtml = `<div class="cart__product" data-id="${productInfo.id}">
   <img class="cart__product-image" src="${productInfo.imgSrc}">
   <div class="cart__product-count">${productInfo.lastCounter}</div>
</div>`;
   cartWrapper.insertAdjacentHTML('beforeend', productItemHtml)
   }

 }
})