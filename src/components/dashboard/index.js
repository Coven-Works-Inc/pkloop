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
    modalOpen: false,
    modalType: 'insurance',
    tipAmount: 0,
    parcelCost: this.props.traveler ? this.props.traveler.senderCost.toFixed(2) : null,
    completed: false,
    parcelWorth: 0,
    insuranceCost: 0
  }

  markAsComplete = () => {
    this.setState({
      ...this.state,
      completed: true
    })
  }

  handleModal = (type) => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen,
      modalType: type
    })
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      tipAmount: e.target.value,
      parcelCost: e.target.value ? (this.props.traveler.senderCost + Number(e.target.value)).toFixed(2) : this.props.traveler.senderCost
    })
  }
  insuranceChangeHandler = e => {
    this.setState({
      ...this.state,
      parcelWorth: parseInt(e.target.value),
      insuranceCost: 0.02 * parseInt(e.target.value)
    })
  }
  payInsurance = () => {
    
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
    const { modalType } = this.state

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
          {headerText === 'chat' && <Chat cost={this.state.parcelCost} completed={this.state.completed} markTrans={this.markAsComplete} modal={this.handleModal} />}
          {headerText === 'profile' && <Profile />}
          {headerText === 'balance' && <Balance />}
          {headerText === 'support' && <Support />}
        </div>

        <Modal show={this.state.modalOpen} onClose={this.toggleModal}>
          {
            modalType === 'insurance' &&
            <div>
              <h2>How much is the total cost of your parcel</h2>
              <input type="range" min="0" max="2000" value={this.state.parcelWorth} onChange={this.insuranceChangeHandler}/>
              <h2>{this.state.parcelWorth}</h2>
              <h2>You will be charged 2% (${this.state.insuranceCost})of the total cost for insurance</h2>
              <br />
              <div className="button-group">
                <button className='btnQ medium' onClick={this.payInsurance}>Okay, Proceed</button>
                <button className='btnQ inverse-btnQ medium' onClick={this.toggleModal}>No, Not Interested</button>
              </div>
            </div>
          }
          {
            modalType === 'tip' &&
            <div className="tip-modal">
              <h2>Please enter an amount to tip the traveler</h2>
              <br />
              <input type="number" placeholder="Enter Amount" value={this.state.tipAmount} onChange={this.onChangeHandler} />
              <br />
              <p>Cost to send parcel: {this.state.parcelCost}</p>
              <br />
              <div className="button-group">
                <button className='btnQ medium'>Tip Traveler</button>
                <button className='btnQ inverse-btnQ medium' onClick={this.toggleModal}>No, Not Interested</button>
              </div>
            </div>
          }
        </Modal>
      </HeaderFooter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    traveler: state.travelers.travelerData
  }
}
export default connect(mapStateToProps, { logoutUser })(Dashboard)
