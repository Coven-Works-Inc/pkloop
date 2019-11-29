import React from 'react'
import './header_footer.css'
// import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'

function Header () {
  return (
    <div>
      <nav id='navbar'>
        <div className='container'>
          <img src={Logo} alt='Logo' />
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
      </nav>
    </div>
  )
}

export default Header
