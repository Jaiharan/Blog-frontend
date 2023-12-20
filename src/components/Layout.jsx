import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='max-w-7xl minw'>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout