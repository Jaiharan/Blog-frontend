import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col'>
      <div className='text-5xl font-bold'>
        <div className=' text-center pb-3'>Page</div>
        <div className='pb-10'>NotFound</div>
      </div>
      <Link to={'/'}>
        <button className=" bg-gray-900 w-56 hover:bg-gray-700">Back to Homepage</button>
      </Link>
    </div>
      
    </>
    
  )
}

export default NotFound