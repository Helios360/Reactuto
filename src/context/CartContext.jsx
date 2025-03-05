import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (title) => {
    setCart((currentCart) => [...currentCart, title]);
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
