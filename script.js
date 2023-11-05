var MenuItems = document.getElementById("MenuItems");

// menu
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Array to store the selected products
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price) {
  // Create an object for the product
  const product = {
    name: productName,
    price: price
  };
  
  // Add the product to the cart
  cartItems.push(product);
  
  // Display the product in the cart
  displayCart();
}

// Function to display the products in the cart
function displayCart() {
  // Get the cart element
  const cart = document.getElementById('cart');
  
  // Clear the existing content
  cart.innerHTML = '';
  
  // Loop through the cart items and display each product
  for (let i = 0; i < cartItems.length; i++) {
    const product = cartItems[i];
    
    // Create a new product element
    const productElement = document.createElement('div');
    productElement.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
    
    // Add the product element to the cart
    cart.appendChild(productElement);
  }
}

// Function to simulate the checkout process
function checkout() {
  // Clear the cart
  cartItems = [];
  
  // Display an alert or perform any other action you want
  alert('Thank you for your purchase!');
  
  // Refresh the cart display
  //displayCart();
}

