import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
