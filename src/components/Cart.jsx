import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/clientSlice";
import Nav from "./Nav";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();

  const handleIncrease = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const remove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const empty = () => {
    dispatch(emptyCart()); // Use the emptyCart action to clear the cart
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container m-auto font-poppins pt-12 px-4 md:px-0">
      <Nav />
      {cartItems.length === 0 ? (
        <p className="text-center py-20 font-bold">Your cart is Empty!</p>
      ) : (
        <div>
          <h4 className="text-center py-6"> Your Cart Items</h4>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 py-4"
            >
              {/* Render cart item details */}
              <img src={item.img} alt="product-image" className="w-12" />
              <div>
                <p className="font-bold">${item.price}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 pt-3">
                    <button
                      className="bg-black text-white px-3"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="bg-black text-white px-3"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => remove(item.id)}>remove</button>
            </div>
          ))}
          <div>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={() => empty()}>Empty Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
