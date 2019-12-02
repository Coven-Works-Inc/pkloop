import React, { Component, Fragment } from 'react'
import './header_footer.css'
import { Switch, Link, Route } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'

class Header extends Component {
  // let menu = true;
  // const showMenu = () => {
  //   menu = !menu
  // }
  state = {
    menu: false
  }

  showMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <Fragment>
        <div id='navbar'>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='menu-links'>
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
          <div className="menu-bars" onClick={this.showMenu}>
            {menu && <i class="fas fa-times"></i>}
            {!menu && <i class="fas fa-bars"></i>}
          </div>
        </div>
        {menu && <div className='mobile-menu'>
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
        </div>}
      </Fragment>
    )
  }
}

export default Header
