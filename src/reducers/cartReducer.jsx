// src/reducers/cartReducer.js

const initialState = {
    cartCount: 0,
  };
  
  function cartReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { cartCount: state.cartCount + 1 };
      case "decrement":
        return { cartCount: Math.max(state.cartCount - 1, 0) };
      default:
        return state;
    }
  }
  
  export { initialState, cartReducer };
  