import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const products = useSelector((state) => state.cart.product);
  return (
    <div className="container m-auto font-poppins">
      <p className="text-center py-5 font-bold">Your cart is Empty!</p>
      <div>
        {products.map((item, id) => (
          <div key={id}>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <h3>{item.desc}</h3>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 pt-3">
                <button className="bg-black text-white px-3">+</button>
                <p>0</p>
                <button className="bg-black text-white px-3">-</button>
              </div>
              <button>remove</button>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
