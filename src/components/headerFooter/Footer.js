import React from 'react'
import './header_footer.css'
import { Link } from 'react-router-dom'

import Icon from '../../assets/Footer Icon.png'

function Footer() {
  return (
    <div className='footerdiv'>
      <div className='footer'>
        <img src={Icon} alt='' />
        <ul className='links'>
          <li>
            <Link to='/terms' style={{ textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to='/privacy' style={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='/trust' style={{ textDecoration: 'none' }}>
              Trust and Safety
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              Contact us
            </Link>
          </li>
        </ul>
        <div className='footer_icons'>
          <i className='fab fa-facebook-f ' />
          <i className='fab fa-twitter ' />
          <i className='fab fa-instagram ' />
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <p> &copy; {new Date().getFullYear()} PKLoop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
