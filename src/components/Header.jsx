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
    <header className='flex justify-between mb-12 p-6 m-0'>
        <Link to='/' className='Logo no-underline text-inherit font-bold text-3xl'>MyBlog</Link>
        <nav className='flex gap-4'>
          {username && (
            <>
              <Link to="/create" className='hover:font-bold transition-all'>Create new post</Link>
              <a onClick={logout} className=' cursor-pointer hover:font-bold transition-all'>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login" className='hover:font-bold transition-all'>Login</Link>
              <Link to="/register" className='hover:font-bold transition-all'>Register</Link>
            </>
          )}
          
        </nav>
    </header>
  )
}

export default Header