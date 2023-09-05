import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero';
import Nav from './Nav';

const ProductDetails = () => {

const {id} = useParams();
const [items, setItems] = useState({})
useEffect(()=>{

const getDetails = async ()=>{

try {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)  
  setItems(response.data)
} catch (error) {
  console.log("error", error)  
}
}

getDetails();
}, [id])
console.log(items)
  return (
    <div className='container m-auto font-poppins'>

    <Nav/>
    <div className='flex items-center  justify-between gap-20 pt-14'>
<img src={items?.image} alt="product-image" className='w-64' />
<div className=''>
<h2 className='font-bold py-6'>{items?.title}</h2>
<p className='pr-56'>{items?.description}</p>
<div className='flex gap-4 pt-3'>
     <button className='bg-black text-white px-3'>+</button> 
     <p>0</p>  
     <button className='bg-black text-white px-3'>-</button>   
    </div>
    <button className='bg-black text-white mt-6  py-2 px-3'>Add to cart</button>
</div>

 </div>
    
    
    </div>
  )
}

export default ProductDetails