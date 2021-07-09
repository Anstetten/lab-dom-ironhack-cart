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
  console.log(products);
  Array.from(products).forEach(product => {
    updateSubtotal(product);    
  });


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
