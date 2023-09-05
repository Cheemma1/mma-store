import { ShoppingCart } from 'phosphor-react'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between  font-poppins py-5 '>
<h2 className='font-bold text-lg'>Mma-store</h2>
<ShoppingCart size={34}/>
    </nav>
  )
}

export default Nav