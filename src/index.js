// ITERATION 1 

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const sub = price.innerHTML * quantity.value

  subtotal.innerHTML = sub

  return sub
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let sum = 0;

  const products = document.querySelectorAll('.product')
  for(let i = 0; i <products.length; i++){
    const singleSubTotal = updateSubtotal(products[i])
    sum += singleSubTotal;
  }


  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('h2 span')
  total.innerHTML = sum;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let removeTarget = target.parentNode.parentNode.parentNode;
  removeTarget.removeChild(target.parentNode.parentNode);

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProduct = document.querySelector('.create-product input[type=text]');
  let newPrice = document.querySelector('.create-product input[type=number]');


  let newer = document.createElement("tr")
  newer.setAttribute('class', 'product')
  newer.innerHTML = `<tr class="product">
    <td class="name">
    <span>${newProduct.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>
    </tr>`;

cartElement.appendChild(newer); 

let newRemoveButton = newer.querySelector('.btn-remove');
newRemoveButton.addEventListener('click', removeProduct);

newProduct.value = "";
newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(element => {
  element.addEventListener('click', removeProduct);
  })

  const createButton = document.getElementById('create');
    if(createButton) {
      createButton.addEventListener('click', createProduct)
    }
});
