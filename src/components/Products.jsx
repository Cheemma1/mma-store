import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(()=>{
  const getproduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

    getproduct();
},[])
console.log(product)
  return(
  
  <div className=" my-10 bg-slate-50 p-3">
<h2 className="text-center text-2xl py-3 font-bold">Our Products</h2>
<input type="text"  placeholder="search product" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full outline-none rounded-md p-4 shadow-sm "/>
<div className="grid grid-cols-4 gap-8 p-4 w-full">
  { product.filter((item) => item.title.toLowerCase().includes (search.toLowerCase()))
  .map((items)=>(
<div key={items?.id} className="  bg-yellow-100 p-2 ">
  {/* <div className="w-full h-fit"> */}
      <img src={items?.image} alt="product-image"  className="w-full h-full object-contain"/>
  {/* </div> */}
  
    <h2 className="font-bold">{items?.title}</h2>
    <p>${items?.price}</p>
</div>
  ))}  
</div>
  </div>)


};

export default Products;
