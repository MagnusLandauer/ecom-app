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
          <Link to="/" className='nav-link'>HOME</Link>
          {/* <Link to="/shop" className='nav-link'>SHOP</Link> */}
          <Link to="/auth" className='nav-link'>SIGN IN</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation