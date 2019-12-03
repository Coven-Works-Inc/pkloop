import React, { Component, Fragment } from 'react'
import './header_footer.css'
import { Switch, Route, Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'
import { Link as Linker } from 'react-scroll'


class Header extends Component {
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
            <Link to="/">
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='menu-links'>
            <ul>
              <li>
                <Linker activeClass="active" to="works" spy={true} smooth={true} offset={-114} duration={500}>How it works</Linker>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Linker to="faqs" spy={true} smooth={true} offset={-114} duration={500}>FAQs</Linker>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/parcel">Send parcel</Link>
              </li>
              <li>
                <Link to="/trips">List your trip</Link>
              </li>
              <li>
                <Link to='/login'>Log in</Link>
              </li>
              <li>
                <Link to='/register'>Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="menu-bars" onClick={this.showMenu}>
            {menu && <i className="fas fa-times"></i>}
            {!menu && <i className="fas fa-bars"></i>}
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
