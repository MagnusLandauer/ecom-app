import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='nav-links-container'>
          <Link to="/home" className='nav-link'>HOME</Link>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation