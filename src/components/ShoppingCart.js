import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ShoppingCart() {
  const { items, removeItem } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="100" height="100" />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <a href="https://www.winsightgrocerybusiness.com/survey-reveals-top-new-products-2017" target="_blank" rel="noopener noreferrer">
        Go to Cart
      </a>
    </div>
  );
}

export default ShoppingCart;
