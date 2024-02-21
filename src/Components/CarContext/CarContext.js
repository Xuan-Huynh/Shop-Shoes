import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Tính toán lại giá trị của cartCount khi cart thay đổi
    const currentURL = window.location.href;
    const lastSegment = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    if(cart.id === lastSegment){
      const newCarrtCount = cart?.length;
      setCartCount(newCarrtCount);
    }},[cart]);

  

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider }; 


