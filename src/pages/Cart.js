import React, { useContext, useEffect, useState } from "react";
import "../styles/Cart.css";
import CartContext from "../components/CartContext";
import WarrantyBanner from "../components/WarrantyBanner";
import { Link } from "react-router-dom";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    setItemsInCart(cartItems);
  }, [cartItems]);
  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );
  return (
    <div>
      <div className="cartBanner">
        <h2>Cart</h2>
        <p>
          <span>Home {">"} </span>
          Cart
        </p>
      </div>
      <div className="cartSection">
        <div className="cartContainer">
          {/* Map over cart items and display them */}
          {itemsInCart.map((item) => (
            // Display each cart item
            <div className="cartItem" key={item.id}>
              {" "}
              <img src={item.picture} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.cost}</p>
              <p>{item.quantity}</p>
              <p>{item.cost * item.quantity}</p>
            </div>
          ))}
        </div>
        {/* Checkout Section */}
        <div className="checkoutSection">
          <h2>Cart Totals</h2>
          {/* Display the total price */}
          <div className="totalPrice">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>
                <span>{totalPrice.toFixed(2)}$</span>
              </p>
            </div>
            <div className="total">
              <p>Total </p>
              <p>
                <span>{totalPrice.toFixed(2)}$</span>
              </p>
            </div>
          </div>
          {totalPrice > 1 ? (
            <div className="checkoutBtn">
              <button className="checkoutButton">Check Out</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <WarrantyBanner />
    </div>
  );
}

export default Cart;
