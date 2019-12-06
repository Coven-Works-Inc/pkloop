import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'

class Dashboard extends Component {
  render () {
    return (
      <HeaderFooter>
        <div className='dashboard-header'>
          <h2>My Transaction</h2>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-menu'>
            <p>My Transactions</p>
            <p className='lighter'>Edit Profile</p>
            <p className='lighter'>My Balance</p>
            <p className='lighter'>Support</p>
            <p className='gray'>Log Out</p>
          </div>
          <div className='transactions-content'>Welcome, {'Username'}</div>
        </div>
      </HeaderFooter>
    )
  }
}

export default Dashboard
