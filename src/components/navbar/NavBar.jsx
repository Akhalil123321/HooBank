import React from 'react'
import Logo from '../../images/logo.svg'
import './navBar.css'
const NavBar = () => {
  return (
    <div className='nav-cont'>
      <img src={Logo} alt="" className='nav-logo'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </div>
  )
}

export default NavBar