// grab everything we need
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');


// create functions we'll need
function calculateCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  console.log(cost);
  total.innerText = "$" + cost.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

// on first run
calculateCost();

// add event listeners
priceInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
