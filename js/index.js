// ITERATION 1

function updateSubtotal(product) {
  

  let price = product.querySelector('.price span').innerHTML;
  let quantity= product.querySelector('.quantity input').value;
  let subTotal= product.querySelector('.subtotal span');

  console.log(quantity);
  let subtTotalAmount=price*quantity;
  subTotal.innerHTML = subtTotalAmount;

  return subtTotalAmount;


  //... your code goes here
}

function calculateAll() {

  let products = document.getElementsByClassName('product');
  let totalPrice=0;
  let totalPriceElement= document.querySelector('#total-value span')
  console.log(products);
  Array.from(products).forEach(product => {
    totalPrice+=updateSubtotal(product);    
  });

  totalPriceElement.innerHTML=totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let productToRemove= target.closest('.product');
  productToRemove.remove();

  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
console.log(removeButtons);
  Array.from(removeButtons).forEach((button)=>{
    button.onclick=removeProduct;
  })

  //... your code goes here
});
