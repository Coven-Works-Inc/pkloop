import React from 'react'
import './header_footer.css'
import { Link } from 'react-router-dom'

import Icon from '../../assets/Footer Icon.png'

function Footer () {
  return (
    <div className='footerdiv'>
      <div className='footer'>
        <img src={Icon} alt='' />
        <ul className='links'>
          <li>
            <Link to='' style={{ textDecoration: 'none' }}>
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
            <Link to='/' style={{ textDecoration: 'none' }}>
              Contact us
            </Link>
          </li>
        </ul>
        <div className='footer_icons'>
          <a
            href='https://www.facebook.com/pkloop.peer'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <i className='fab fa-facebook-f ' />
          </a>
          <a
            href='https://www.twitter.com/mypkloop/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter ' />
          </a>

          <a
            href='https://www.instagram.com/mypkloop/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram ' />
          </a>
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
