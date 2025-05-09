const cart = {};

    function addToCart(productName, price) {
      if (cart[productName]) {
        cart[productName].quantity += 1;
      } else {
        cart[productName] = { price, quantity: 1 };
      }
      renderCart();
    }

    function renderCart() {
      const cartItemsDiv = document.getElementById('cart-items');
      cartItemsDiv.innerHTML = '';
      let total = 0;

      for (const [name, item] of Object.entries(cart)) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${name} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
        cartItemsDiv.appendChild(div);
      }

    document.getElementById('total').textContent = total.toFixed(2);
    }

