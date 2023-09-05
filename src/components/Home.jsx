import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Products from './Products'


const Home = () => {
  return (
    <div className=' font-poppins container m-auto'>
    <Nav/>  
    <Hero/> 
    <Products/> 
    </div>
  )
}

export default Home