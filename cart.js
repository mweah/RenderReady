const userCartContainer = document.getElementById('userCartContainer');
const totalPriceElement = document.getElementById('totalPrice');
const checkoutButton = document.getElementById('checkoutButton');
let cart = []; 


function addToCart(productName, productPrice, imageUrl) {
  cart.push({ name: productName, price: productPrice, image: imageUrl });
  updateCartDisplay();
}

addToCart('Ghoul Zombie Fully Animated', 100, '/assets/gameassets/animatedzombie.jpg');
addToCart('1800+ Office Assets', 450000, '/assets/gameassets/fulloffice.jpg');
addToCart('Son Goku - Ready to Fight', 0, '/assets/fictional/songoku.jpg'); 

//hilangin .model-container berdasarkan button index
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

function updateCartDisplay() {
  userCartContainer.innerHTML = ''; 

  let totalPrice = 0;
  cart.forEach((item, index) => {
    const userCartDiv = document.createElement('div');
    userCartDiv.classList.add('user-cart');
    userCartDiv.innerHTML = `
      <div class="model-container">
        <img src="${item.image}" alt="${item.name}">
        <div class="desc-n-button">
          <div class="desc">
            <p>${item.name}</p>
            <p class="price">${formatPrice(item.price)}</p>
          </div>
          <div class="delete-btn">
            <button onclick="removeFromCart(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
    userCartContainer.appendChild(userCartDiv);

    totalPrice += parseFloat(item.price);
  });

  totalPriceElement.textContent = formatPrice(totalPrice);
}


// script utk checkout
checkoutButton.addEventListener('click', () => {
  cart = []; 
  updateCartDisplay();

  const messageDiv = document.createElement('div');
  messageDiv.textContent = 'Checkout Successful!';
  messageDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: orange;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `;

  const overlayDiv = document.createElement('div');
  overlayDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 9999; 
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `;

  document.body.appendChild(overlayDiv);
  document.body.appendChild(messageDiv);

  messageDiv.style.opacity = 1;
  overlayDiv.style.opacity = 1;

  setTimeout(() => {
    messageDiv.style.opacity = 0;
    overlayDiv.style.opacity = 0;

    setTimeout(() => {
      document.body.removeChild(messageDiv);
      document.body.removeChild(overlayDiv);
    }, 200);
  }, 1000);
});