

function updateSubtotal(product) {
  

  let price = product.querySelector('.price span').innerHTML;
  let quantity= product.querySelector('.quantity input').value;
  let subTotal= product.querySelector('.subtotal span');

 
  let subtTotalAmount=price*quantity;
  subTotal.innerHTML = subtTotalAmount;

  return subtTotalAmount;

}

function calculateAll() {

  let products = document.getElementsByClassName('product');
  let totalPrice=0;
  let totalPriceElement= document.querySelector('#total-value span')
  
  Array.from(products).forEach(product => {
    totalPrice+=updateSubtotal(product);    
  });

  totalPriceElement.innerHTML=totalPrice;
}



function removeProduct(event) {

  const target = event.currentTarget;
  let productToRemove= target.closest('.product');
  productToRemove.remove();

  calculateAll();
  
}



function createProduct(e) {
  let button =e.target;
  //closest does not seem to work as it is sibling
  //so we get the whole new product card
  let newProduct= e.target.closest('.create-product');

  //get the different input nodes
  let newProductName= newProduct.querySelector('input[type=text]').value;
  let newProductPrice= newProduct.querySelector('input[type=number]').value;

  //do not accept product without name or zero price (it makes us go bankrupt...)
  if (newProductName===""||parseInt(newProductPrice)===0) { return}
  
  let newProductToInsert= document.createElement('tr')
  newProductToInsert.classList.add("product");
  //This is an ugly solution, but I did not want ot build it up step by step with createlemente
  //plus I did not want to use templates as I did not want to modify the HTML
  //+ I could not clone one of the products because it does not work if your cart is empty whern you load the window
  newProductToInsert.innerHTML=`
  <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

  //get the table of products
  let productTable= document.querySelector('#cart tbody');
  
  //attach new product to table

  productTable.appendChild(newProductToInsert);

  //wipe the new products field:
  newProduct.querySelector('input[type=text]').value='';
  newProduct.querySelector('input[type=number]').value=0;

  //Refresh Remove Buttons
  updateRemoveButtons();

}

function updateRemoveButtons(){
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  Array.from(removeButtons).forEach((button)=>{
    button.onclick=removeProduct;
  })
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  updateRemoveButtons();

  let createButton = document.getElementById("create");
  createButton.onclick=createProduct;

  //... your code goes here
});
