import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import Transactions from './transactions'
import Profile from './profile'
import Balance from './balance'
import Support from './support'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  state = {
    headerText: 'My Transactions'
  }

  render() {
    const { headerText } = this.state;

    const changeHeader = text => {
      this.setState({
        headerText: text
      })
    }

    return (
      <HeaderFooter>
        <div className='dashboard-header'>
          <h2>{headerText}</h2>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-menu'>
            <p
              onClick={() => changeHeader('My Transactions')}
              className={headerText === 'My Transactions' ? '' : 'lighter'}>My Transactions</p>

            <p
              onClick={() => changeHeader('Edit Profile')}
              className={headerText === 'Edit Profile' ? '' : 'lighter'}>Edit Profile</p>

            <p
              onClick={() => changeHeader('My Balance')}
              className={headerText === 'My Balance' ? '' : 'lighter'}>My Balance</p>

            <p
              onClick={() => changeHeader('Support')}
              className={headerText === 'Support' ? '' : 'lighter'}>Support</p>
            <Link to="/login" style={{ textDecoration: 'none' }}><p  className='gray'>Log Out</p></Link>
          </div>
          {headerText === 'My Transactions' && <Transactions />}
          {headerText === 'Edit Profile' && <Profile />}
          {headerText === 'My Balance' && <Balance />}
          {headerText === 'Support' && <Support />}
        </div>
      </HeaderFooter>
    )
  }
}

export default Dashboard
