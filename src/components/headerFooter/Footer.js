import React from 'react'
import './header_footer.css'
import { Link } from 'react-router-dom'

import Icon from '../../assets/Footer Icon.png'

function Footer () {
  return (
    <div className='footerdiv'>
      <div className='footers'>
        <img src={Icon} alt='' />
        <ul className='links'>
          <li>
            <Link to='/terms' style={{ textDecoration: 'none', color: '#000' }}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to='/privacy' style={{ textDecoration: 'none', color: '#000'}}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='/trust' style={{ textDecoration: 'none', color: '#000' }}>
              Trust and Safety
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none', color: '#000' }}>
              Contact us
            </Link>
          </li>
        </ul>
        <div className='footer_icons'>
          <a
            href='http://fb.me/myPKLoop'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <i className='fab fa-facebook-f ' style={{ color: '#000'}}/>
          </a>
          <a
            href='https://www.twitter.com/mypkloop/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter '  style={{ color: '#000'}}/>
          </a>

          <a
            href='https://www.instagram.com/mypkloop/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram '  style={{ color: '#000'}}/>
          </a>
        </div>
      </div>
      <br />
      <hr />
      <div className='copyright'>
        <p> &copy; {new Date().getFullYear()} PKLoop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
