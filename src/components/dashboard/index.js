import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderFooter from '../headerFooter'
import Transactions from './transactions'
import Chat from './chat'
import Profile from './profile'
import Balance from './balance'
import Support from './support'
import Modal from '../common/modal'

import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/authActions'

class Dashboard extends Component {
  state = {
    headerText: this.props.match.params.id ? this.props.match.params.id : 'transactions',
    modalOpen: false
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    console.log(this.props)
    const { headerText } = this.state

    const changeHeader = text => {
      this.setState({
        headerText: text
      })
      this.props.history.replace(`/dashboard/${text}`)
    }

    if (this.props.location.component) {
      console.log(this.props.location.component)
    }

    console.log(this.props);

    return (
      <HeaderFooter>
        <div className='dashboard-header'>
          <h2>
            {headerText === 'transactions' && 'My Transactions'}
            {headerText === 'chat' && 'Chat'}
            {headerText === 'profile' && 'Edit Profile'}
            {headerText === 'balance' && 'My Balance'}
            {headerText === 'support' && 'Support'}
          </h2>
        </div>
        <div className='dashboard-body'>
          <div className='dashboard-menu'>
            <p
              onClick={() => changeHeader('transactions')}
              className={headerText === 'transactions' ? '' : 'lighter'}
            >
              My Transactions
            </p>

            <p
              onClick={() => changeHeader('chat')}
              className={headerText === 'chat' ? '' : 'lighter'}
            >
              Chat
            </p>

            <p
              onClick={() => changeHeader('profile')}
              className={headerText === 'profile' ? '' : 'lighter'}
            >
              Edit Profile
            </p>

            <p
              onClick={() => changeHeader('balance')}
              className={headerText === 'balance' ? '' : 'lighter'}
            >
              My Balance
            </p>

            <p
              onClick={() => changeHeader('support')}
              className={headerText === 'support' ? '' : 'lighter'}
            >
              Support
            </p>
            <p onClick={() => this.props.logoutUser()} className='gray'>
              Log Out
            </p>
          </div>
          {headerText === 'transactions' && <Transactions />}
          {headerText === 'chat' && <Chat toggle={this.toggleModal} />}
          {headerText === 'profile' && <Profile />}
          {headerText === 'balance' && <Balance />}
          {headerText === 'support' && <Support />}
        </div>

        <Modal show={this.state.modalOpen} onClose={this.toggleModal}>
          <div>
            <h2>Please login to connect with a traveller</h2>
            <br />
            <div className="button-group">
              <button className='btnQ medium'>Yes, Go To Login</button>
              <button className='btnQ inverse-btnQ medium'>No, Stay on This Page</button>
            </div>
          </div>
        </Modal>
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
