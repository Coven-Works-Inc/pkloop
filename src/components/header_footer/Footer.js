import React from 'react'
import './header_footer.css'

import Icon from '../../assets/Footer Icon.png'

function Footer () {
  return (
    <div className='footerdiv'>
      <div className='footer'>
        <img src={Icon} alt='' />
        <ul className='links'>
          <li>
            <a>Terms of Service</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Trust and Safety</a>
          </li>
          <li>
            <a>Contact us</a>
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
