import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between  font-poppins py-5 ">
      <h2 className="font-bold text-lg">Mma-store</h2>
      <div className="relative bg-purple-200  rounded-sm p-2">
        <Link to={"cart"}>
          <ShoppingCart size={24} className="" />
          <p className="absolute -top-1 right-3">0</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
