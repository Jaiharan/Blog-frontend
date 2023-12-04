import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between mb-12 p-6 m-0'>
        <Link to='/' className='Logo no-underline text-inherit font-bold text-3xl'>MyBlog</Link>
        <nav className='flex gap-4'>
          <Link to="/login" className='hover:font-bold transition-all'>Login</Link>
          <Link to="/register" className='hover:font-bold transition-all'>Register</Link>
        </nav>
    </header>
  )
}

export default Header