import { FcLike } from "react-icons/fc"; 
import React from 'react'
import Products from '../../components/product/Products'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='h-16 bg-yellow-400 w-[1300px]'>
        <div className='flex justify-end p-4 mr-20'>
        <Link to="/like"><h1 className='text-2xl font-bold flex'>Likes <FcLike /></h1></Link>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home