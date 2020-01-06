import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderFooter from '../headerFooter'
import Transactions from './transactions'
import Profile from './profile'
import Balance from './balance'
import Support from './support'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/authActions'

class Dashboard extends Component {
  state = {
    headerText: 'My Transactions'
  }

  render() {
    const { headerText } = this.state

    const changeHeader = text => {
      this.setState({
        headerText: text
      })
    }

    console.log(this.props);

    return (
      <HeaderFooter>
        <div className='dashboard-header'>
          <h2>{headerText}</h2>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-menu'>
            <p
              onClick={() => changeHeader('My Transactions')}
              className={headerText === 'My Transactions' ? '' : 'lighter'}
            >
              My Transactions
            </p>

            <p
              onClick={() => changeHeader('Edit Profile')}
              className={headerText === 'Edit Profile' ? '' : 'lighter'}
            >
              Edit Profile
            </p>

            <p
              onClick={() => changeHeader('My Balance')}
              className={headerText === 'My Balance' ? '' : 'lighter'}
            >
              My Balance
            </p>

            <p
              onClick={() => changeHeader('Support')}
              className={headerText === 'Support' ? '' : 'lighter'}
            >
              Support
            </p>
            <p onClick={() => this.props.logoutUser()} className='gray'>
              Log Out
            </p>
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { logoutUser })(Dashboard)
