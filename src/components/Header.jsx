import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './UserContext';

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext)

  useEffect(()=>{
    fetch('http://localhost:3000/profile',{
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
      })
    })
  },[]);

  function logout(){
    fetch('http://localhost:3000/logout',{
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <header className='flex justify-between mb-6 p-6 pl-3 pr-3 m-0'>
        <Link to='/' className='Logo no-underline text-inherit font-bold text-3xl text-gray-800 neon transition-all'>MyBlog</Link>
        <nav className='flex gap-4'>
          {username && (
            <>
              <Link to="/create" className='hover:font-bold neon transition-all flex items-center'>Create new post</Link>
              <a onClick={logout} className=' cursor-pointer hover:font-bold neon transition-all flex items-center'>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login" className='hover:font-bold neon transition-all flex items-center'>Login</Link>
              <Link to="/register" className='hover:font-bold neon transition-all flex items-center'>Register</Link>
            </>
          )}
          
        </nav>
    </header>
  )
}

export default Header