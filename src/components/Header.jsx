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
  const openNewTab = () => {
    // Specify the URL you want to open in the new tab
    const url = 'https://www.buymeacoffee.com/jaiharan007';

    // Open a new tab or window with the specified URL
    window.open(url, '_blank');
  };

  const username = userInfo?.username;
  return (
    <header className='flex justify-between mb-6 p-6 pl-3 pr-3 m-0 gap-2'>
        <Link to='/' className='Logo no-underline text-inherit font-bold text-3xl text-gray-800 neon transition-all'>InaMinute</Link>
        <nav className='flex gap-4 sm:text-xs'>
          {username && (
            <>
              <a onClick={openNewTab} className='hover:font-bold neon transition-all flex items-center'>Donate☕</a>
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