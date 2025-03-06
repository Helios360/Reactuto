import { createContext, useReducer, useContext } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartCount: state.cartCount, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);