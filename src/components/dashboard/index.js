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
import uuidv4 from 'uuid/v4'

import { logoutUser } from '../../actions/authActions'
import { addInsurance } from '../../actions/costActions'
import { addReceiver } from '../../actions/tripActions'
import { client_id, api_key } from '../../config/constants'

class Dashboard extends Component {
  state = {
    headerText: this.props.match.params.id ? this.props.match.params.id : 'transactions',
    modalOpen: false,
    modalType: 'insurance',
    tipAmount: 0,
    senderCost: this.props.traveler ? this.props.traveler.senderCost : null,
    parcelCost: this.props.traveler ? this.props.traveler.senderCost : null,
    completed: false,
    parcelWorth: 0,
    insuranceCost: 0,
    tipAdded: false,
    insuranceAdded: false,
    parcelItem: '',
    checked: false,
    insuranceSuccess: false,
    showModal: false,
    fullname: '',
    address: '',
    phone: ''
  }
  closeModal = () => {
    this.setState({
      showModal: false,
      completed: false
    })
  }
  markAsComplete = () => {
    this.setState({
      ...this.state,
      completed: true,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  gotoBalance = () => {
    this.props.history.replace('/dashboard/balance')
  }

  addReceiverDetails = () => {
    console.log(this.props.traveler)
    const receiverDetails = {
      id: this.props.traveler._id,
      fullname: this.state.fullname,
      address: this.state.address,
      phone: this.state.phone
    }
    this.props.addReceiver(receiverDetails)
  }

  handleModal = (type) => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen,
      modalType: type
    })
  }
  addTip = () => {
    this.setState({
      modalOpen: false,
      parcelCost: Number(this.props.traveler.senderCost) + Number(this.state.tipAmount) + Number(this.state.insuranceCost)
    })
  }
  toggleModal = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen,
      tipAmount: 0,
      insuranceCost: 0,
      parcelCost: this.props.traveler.senderCost,
    })
  }

  onChangeHandler = (e) => {
    if (Number(e.target.value) >= 0) {
      this.setState({
        ...this.state,
        tipAmount: Number(e.target.value),
        tipAdded: true,
        parcelCost: Number(this.props.traveler.senderCost) + Number(this.state.tipAmount) + Number(this.state.insuranceCost)
      })
    }

  }
  insuranceChangeHandler = e => {
    this.setState({
      ...this.state,
      parcelWorth: Number(e.target.value),
      insuranceCost: Number(0.02 * Number(e.target.value)).toFixed(2),
    })
  }
  itemChangeHandler = e => (
    this.setState({
      ...this.state,
      parcelItem: e.target.value
    })
  )
  payInsurance = () => {
    // const userData = {
    //   client_id,
    //   api_key,
    //   customer_name: `${this.props.auth.firstname} ${this.props.auth.lastname}`,
    //   firstname: this.props.auth.firstname,
    //   lastname: this.props.auth.lastname,
    //   items_ordered: this.state.parcelItem,
    //   subtotal: this.state.parcelWorth,
    //   currency: 'USD',
    //   coverage_amount: this.state.insuranceCost,
    //   order_number: uuidv4()
    // }
    // await this.props.addInsurance(userData)
    this.setState({
      modalOpen: false,
      parcelCost: Number(this.props.traveler.senderCost) + Number(this.state.insuranceCost) + Number(this.state.tipAmount)
    })
  }
  handleCheckbox = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    })
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.cost.success != this.props.cost.success) {
      this.setState({
        ...this.state,
        insuranceSuccess: true,
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
      <HeaderFooter redirect={this.props.location}>
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
          {headerText === 'chat' && <Chat cost={this.state.parcelCost}
            completed={this.state.completed}
            markTrans={this.markAsComplete}
            modal={this.handleModal}
            showModal={this.state.showModal}
            tipAdded={this.state.tipAdded}
            close={this.closeModal}
            gotoBalance={this.gotoBalance}
            insuranceSuccess={this.state.insuranceSuccess}
            tipAmount={this.state.tipAmount}
            insuranceCost={this.state.insuranceCost}
            parcelCost={this.state.parcelCost}
            senderCost={this.state.senderCost}
          />}
          {headerText === 'profile' && <Profile />}
          {headerText === 'balance' && <Balance />}
          {headerText === 'support' && <Support />}
        </div>

        <Modal show={this.state.modalOpen} onClose={this.toggleModal}>
          {
            modalType === 'insurance' &&
            <div className="insurance">
              {this.state.insuranceSuccess ? <p style={{ color: 'green' }}>Insurance Policy successfully added</p> : <h2></h2>}
              <label>What is the worth of your parcel? Range between $0 - $1500</label>
              <input type="range" min="0" max="1500" value={this.state.parcelWorth} onChange={this.insuranceChangeHandler} className="slider" />
              <h3>parcel Worth: {this.state.parcelWorth}</h3>
              <br />
              <br />
              <label>Which items are you insuring?</label>
              <input type="text" value={this.state.parcelItem} onChange={this.itemChangeHandler} placeholder="e.g Coffee table" className="support_input" />
              <h2>You will be charged 2% (${this.state.insuranceCost})of the total cost for insurance</h2>
              <br />
              <label className="container">By clicking on Proceed, you agree to InsureShip <a href="https://www.insureship.com/privacy" target="_blank"> Privacy policy</a> and <a href="https://www.insureship.com/terms" target="_blank">terms</a>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />
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
                  ) : (
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
              <p>Cost to send parcel: {Number(this.state.parcelCost).toFixed(2)}</p>
              <br />
              <div className="button-group">
                <button className='btnQ medium' onClick={this.addTip}>Tip Traveler</button>
                <button className='btnQ inverse-btnQ medium' onClick={this.toggleModal}>No, Not Interested</button>
              </div>
            </div>
          }
          {
            modalType === 'receiver' &&
            <div>
              <label>Fullname</label>
              <input type="text" className="support_input" name="fullname" onChange={this.handleChange}></input>
              <br />
              <label>Address</label>
              <input type="text" className="support_input" name="address" onChange={this.handleChange}></input>
              <br />
              <label>Phone number</label>
              <input type="text" className="support_input" name="phone" onChange={this.handleChange}></input>
              <br />
              <button className="btnQ medium" onClick={this.addReceiverDetails}>Add details</button>
            </div>
          }
        </Modal>
      </HeaderFooter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.user,
    loading: state.auth.loading,
    traveler: state.travelers.travelerData,
    cost: state.cost
  }
}
export default connect(mapStateToProps, { logoutUser, addInsurance, addReceiver })(Dashboard)
