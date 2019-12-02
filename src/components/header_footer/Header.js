import React from 'react'
import './header_footer.css'
import { Link } from 'react-router-dom'
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
            <Link to='#works'>How it works</Link>
          </li>
          <li>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li>
            <Link to='/faqs'>FAQs</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/send'>Send parcel</Link>
          </li>
          <li>
            <Link to='/trip'>List your trip</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>
            <Link to='/signup'>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
