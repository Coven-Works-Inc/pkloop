import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from '../common/modal'
import * as actions from '../../actions/balanceActions'
import axios from 'axios'
import { BASE_URL } from '../../config/constants'
import StripeCheckout from 'react-stripe-checkout'

const Balance = props => {

  // const { balance: { user: { balance } } } = props

  const [state, setState] = useState({
    amountMade: 0,
    modalOpen: false,
    amount: 0
  })

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    axios.get(`${BASE_URL}/users/fetchUser`)
      .then(response => {
        console.log(response.data)
        setBalance(response.data.data.balance)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fundWallet = () => {
    const data = { amount: Number(state.amount) }

    axios.put(`${BASE_URL}/users/updateMyBalance`, data)
      .then(response => {
        toggleModal();
        getUserData();
      })
      .catch(error => {
        console.log(error)
      });
  }

  const onToken = (token) => {
    toggleModal();
    const amountToPay = Number(state.amount) * 100;

    const data = {
      description: `Payment of $${state.amount} made by ${token.email} on ${token.created}`,
      source: token.id,
      currency: 'USD',
      amount: amountToPay
    }

    axios.post(`${BASE_URL}/payments`, data)
      .then(response => {
        console.log(response)
        fundWallet();
      })
      .catch(error => {
        console.log(error)
      })
  }

  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen
    })
  }

  const onChangeHandler = e => {
    e.preventDefault()

    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='balance-section'>
      <div className='amount'>
        <p>Amount made so far</p>
        <h2>${state.amountMade}</h2>
      </div>
      <div className='balance'>
        <div className='left-side'>
          <p>My PKLoop Balance</p>
          <h2>${balance}</h2>
        </div>
        <div className='right-side'>
          <button>Withdraw</button>
          <button onClick={toggleModal}>Fund Balance</button>
        </div>
      </div>

      <Modal show={state.modalOpen} onClose={toggleModal}>
        <div>
          <h2>How much do you want to fund your wallet with?</h2>
          <br />
          <input className="popupInput" type="number" name="amount" placeholder="Enter Amount" value={state.amount} onChange={onChangeHandler} />
          <br />
          <div className="button-group">
            <StripeCheckout
              image={require('../../assets/payment-logo.png')}
              stripeKey="pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa"
              description="Connect with a traveler"
              name="Make payment to continue"
              locale="auto"
              amount={Number(state.amount) * 100}
              token={onToken}
              panelLabel="Pay"
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    transaction: state.transaction,
    balance: state.balance.balance,
    update: state.balance.user
  }
}

export default connect(mapStateToProps, actions)(Balance)
