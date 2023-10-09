import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/clientSlice";

const ProductDetails = () => {
  // Remove the `product` prop
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id, // Use the 'id' from the URL
        img: items?.image,
        price: items?.price,
        desc: items?.description,
        quantity: 1,
      })
    );
  };

  const [items, setItems] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setItems(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getDetails();
  }, [id]);

  console.log(items);

  return (
    <div className="container m-auto font-poppins  px-5 md:px-0">
      <Nav />
      <div className="flex  flex-col md:flex-row items-center justify-center  md:justify-between gap-20 pt-14">
        <img src={items?.image} alt="product-image" className="w-64" />
        <div className="">
          <h2 className="font-bold py-6">{items?.title}</h2>
          <p className=" p-0 md:last:pr-56">{items?.description}</p>
          <p>{items?.price}</p>
          <button
            className="bg-black text-white mt-6  py-2 px-3"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
