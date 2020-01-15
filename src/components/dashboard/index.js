import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderFooter from '../headerFooter'
import Transactions from './transactions'
import Chat from './chat'
import Profile from './profile'
import Balance from './balance'
import Support from './support'
import Modal from '../common/modal'
import './dashboard.css'
import  uuidv4  from 'uuid/v4'

import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/authActions'
import { addInsurance } from '../../actions/costActions'
import { client_id, api_key } from '../../config/constants'

class Dashboard extends Component {
  state = {
    headerText: this.props.match.params.id ? this.props.match.params.id : 'transactions',
    modalOpen: false,
    modalType: 'insurance',
    tipAmount: 0,
    parcelCost: this.props.traveler ? this.props.traveler.senderCost : null,
    completed: false,
    parcelWorth: 0,
    insuranceCost: 0,
    parcelItem: '',
    checked:false,
    insuranceSuccess: false,
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
      insuranceCost: parseInt((0.02 * parseInt(e.target.value)).toFixed(2))
    })
  }
  itemChangeHandler = e => [
    this.setState({
      ...this.state,
      parcelItem: e.target.value
    })
  ]
  payInsurance = async () => {
    const userData = {
      client_id,
      api_key,
      customer_name: `${this.props.auth.firstname} ${this.props.auth.lastname}`,
      firstname: this.props.auth.firstname,
      lastname: this.props.auth.lastname,
      items_ordered: this.state.parcelItem,
      subtotal: this.state.parcelWorth,
      currency: 'USD',
      coverage_amount: this.state.insuranceCost,
      order_number: uuidv4()
    }
    await this.props.addInsurance(userData)
    
  }
  handleCheckbox = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    })
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.cost.success != this.props.cost.success){
      this.setState({
        ...this.state,
        insuranceSuccess: true
      })
      setTimeout(this.toggleModal, 1000)
    }
  }
  render() {
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
            <div className="insurance">
              {this.state.insuranceSuccess ? <p style={{ color: 'green'}}>Insurance Policy successfully added</p>: <h2></h2>}
              <label>What is the worth of your parcel? Range between $0 - $2000</label>
              <input type="range" min="0" max="2000" defaultValue="1000" value={this.state.parcelWorth} onChange={this.insuranceChangeHandler} className="slider"/>
              <h3>parcel Worth: {this.state.parcelWorth}</h3>
              <br />
              <br />
              <label>Which items are you insuring?</label>
              <input type="text" value={this.state.parcelItem} onChange={this.itemChangeHandler} placeholder="e.g Coffee table" className="support_input" />
              <h2>You will be charged 2% (${this.state.insuranceCost})of the total cost for insurance</h2>
              <br />
              <label className="container">By clicking on Proceed, you agree to InsureShip <a href="https://www.insureship.com/privacy" target="_blank"> Privacy policy</a> and <a href="https://www.insureship.com/terms" target="_blank">terms</a>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox}/> 
                <span className="checkmark"></span>
              </label>
              <div className="button-group">
                <button className='btnQ medium' 
                    disabled={!this.state.checked} 
                    onClick={this.payInsurance}>
                      {this.props.loading ? (
                        <span
                        style={{ display: 'inline-block' }}
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      ></span>
                      ): (
                          <div>Okay, Proceed</div>
                      )}
                  </button>
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
  console.log(state)
  return {
    auth: state.auth.user,
    loading: state.auth.loading,
    traveler: state.travelers.travelerData,
    cost: state.cost
  }
}
export default connect(mapStateToProps, { logoutUser, addInsurance })(Dashboard)
