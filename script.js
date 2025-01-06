let cartCount = 0;

function addToCart(button) {
  // Increment the cart count
  cartCount++;

  // Update the cart notification
  const cartNotification = document.getElementById('cart-notification');
  cartNotification.textContent = cartCount;
  cartNotification.style.display = 'inline'; // Show the notification
}

