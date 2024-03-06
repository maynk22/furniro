import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export default CartContext;
