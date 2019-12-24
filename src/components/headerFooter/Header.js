import React, { Component, Fragment } from 'react'
import './header_footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'
import { Link as Linker } from 'react-scroll'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Header extends Component {
  state = {
    menu: false
  }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  showMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render () {
    const { menu } = this.state
    const { isAuthenticated, user } = this.props.auth
    const authLinks = (
      <Fragment>
        <div id='navbar'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='menu-links'>
            <ul>
              {/* <li>
                <Linker
                  activeClass='active'
                  to='works'
                  spy
                  smooth
                  offset={-114}
                  duration={500}
                >
                  How it works
                </Linker>
              </li> */}
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/howitworks'>How It Works</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/parcel'>Find Travellers</Link>
              </li>
              <li>
                <Link to='/trips'>List your trip</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <a
                  href=''
                  onClick={this.onLogoutClick.bind(this)}
                  className='nav-link'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className='menu-bars' onClick={this.showMenu}>
            {menu && <i className='fas fa-times' />}
            {!menu && <i className='fas fa-bars' />}
          </div>
        </div>
        {menu && (
          <div className='mobile-menu'>
            <ul>
              <li>
                <Link to='#works'>How it works</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/faq'>FAQs</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/travelers'>Find Travellers</Link>
              </li>
              <li>
                <Link to='/trips'>List your trip</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <a
                  href=''
                  onClick={this.onLogoutClick.bind(this)}
                  className='nav-link'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <div id='navbar'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='menu-links'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/howitworks'>How It Works</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/parcel'>Find Travellers</Link>
              </li>
              <li>
                <Link to='/trips'>List your trip</Link>
              </li>
              <li>
                <Link to='/login'>Log in</Link>
              </li>
              <li>
                <Link to='/register'>Sign up</Link>
              </li>
            </ul>
          </div>
          <div className='menu-bars' onClick={this.showMenu}>
            {menu && <i className='fas fa-times' />}
            {!menu && <i className='fas fa-bars' />}
          </div>
        </div>
        {menu && (
          <div className='mobile-menu'>
            <ul>
              <li>
                <Link to='#works'>How it works</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/faq'>FAQs</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/send'>Find Travellers</Link>
              </li>
              <li>
                <Link to='/trips'>List your trip</Link>
              </li>
              <li>
                <Link to='/login'>Log in</Link>
              </li>
              <li>
                <Link to='/signup'>Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </Fragment>
    )

    return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Header)
