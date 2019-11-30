import React from 'react'
import './header_footer.css'
// import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'

function Header () {
  return (
    <div id='navbar'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='links'>
        <ul>
          <li>
            <a>How it works</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Send parcel</a>
          </li>
          <li>
            <a>List your trip</a>
          </li>
          <li>
            <a>Log in</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
