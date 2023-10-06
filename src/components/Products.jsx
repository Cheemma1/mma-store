import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getproduct();
  }, []);
  console.log(product);
  return (
    <div className=" my-10 bg-slate-50 p-3 container m-auto">
      <h2 className="text-center text-2xl py-3 font-bold">Our Products</h2>
      <input
        type="text"
        placeholder="search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-64 outline-none rounded-md p-4 shadow-md bg-yellow-50 "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 w-full ">
        {product
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((items) => (
            <Link to={`/details/${items?.id}`} key={items?.id}>
              <div>
                <div className=" border border-black-100  p-2 flex items-center justify-center flex-col h-72">
                  <div className="flex items-center justify-center mx-auto w-52">
                    <img
                      src={items?.image}
                      alt="product-image"
                      className=" max-h-40 object-contain "
                    />
                  </div>
                </div>
                <h2 className="text-center font-bold pt-7">${items?.price}</h2>
                <p className="text-center pt-3">{items?.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
