import React, { createContext, useState } from 'react';

export const CartProduct = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartProduct.Provider value={{ cart, setCart}}>
      {children}
    </CartProduct.Provider>
  );
};