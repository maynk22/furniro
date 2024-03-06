import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const addProduct = (product) => {
    // Check if the product with same attributes already exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color.length === product.color.length &&
        item.color.every((v, i) => v === product.color[i])
    );

    let updatedCart;

    if (existingProductIndex > -1) {
      // Product with same attributes exists
      const existingProduct = cartItems[existingProductIndex];
      updatedCart = [...cartItems];
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity,
      };
    } else {
      // Product with same attributes doesn't exist
      updatedCart = [...cartItems, product];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
