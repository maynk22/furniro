import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

function CartDropdown() {
  const { cartItems, setCartItems, removeProduct } = useContext(CartContext);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(updatedCart);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setCartItems]);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-dropdown">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.picture} alt={item.name} />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <div className="cartManageProduct">
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span className="price">x ${item.cost}</span>
                <button
                  onClick={() => {
                    removeProduct(item.id);
                  }}
                >
                  <span>x</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cartDropdownFooter">
        <div className="cartDropdownTotalQuantity">
          <p>{totalQuantity} product(s) in cart</p>
        </div>
        <div className="cartDropdownTotalPrice">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/cart">
          <div className="cartDropdownGoToCart">Go to Cart</div>
        </Link>
      </div>
    </div>
  );
}

export default CartDropdown;
