import React from 'react'
import './header_footer.css'

import Icon from '../../assets/Footer Icon.png'

function Footer () {
  return (
    <div>
      <div className='footer'>
        <img src={Icon} alt='' />
        <div className='footer_links'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Trust and Safety</p>
          <p>Contact us</p>
        </div>
        <div className='footer_icons'>
          <i className='fab fa-facebook-f ' />
          <i className='fab fa-twitter ' />
          <i className='fab fa-instagram ' />
        </div>
      </div>
      <hr style={{ width: '82%', textAlign: 'center' }} />
      <div className='copyright'>
        <p> &copy; {new Date().getFullYear()} PKLoop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
