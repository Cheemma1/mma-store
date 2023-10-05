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
    <div className=" my-10 bg-slate-50 p-3">
      <h2 className="text-center text-2xl py-3 font-bold">Our Product</h2>
      <input
        type="text"
        placeholder="search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none rounded-md p-4 shadow-sm "
      />
      <div className="grid grid-cols-4 gap-8 p-4 w-full">
        {product
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((items) => (
            <Link to={`/details/${items?.id}`} key={items?.id}>
              <div className="   ">
                <div className="w-1/2 h-full">
                  <img
                    src={items?.image}
                    alt="product-image"
                    className="w-1/2  h-1/2 object-contain"
                  />
                </div>

                <h2 className="font-bold">{items?.title}</h2>
                <p>${items?.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
