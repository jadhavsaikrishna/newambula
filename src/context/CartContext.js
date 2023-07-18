import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
