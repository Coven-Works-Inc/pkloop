import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getStripeId } from '../../actions/authActions'
import { payoutFund } from '../../actions/balanceActions'
import Modal from '../common/modal'
import * as actions from '../../actions/balanceActions'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'
import Connect from '../../assets/connect.png'

const Balance = props => {
  const url =
    'https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_G5xbYGir14T6X3N1BNHW6K0a3LMsrayQ&scope=read_write'
  const [state, setState] = useState({
    amountMade: 0,
    modalOpen: false,
    amount: 29.99,
    openConnect: false,
    openWithdraw: false,
    withdrawalAmount: 50,
    paymentSuccess: false,
    insufficientBalance: false
  })

  const [balance, setBalance] = useState(0)
  const [amountMade, setAmountMade] = useState(0)

  useEffect(() => {
    getUserData()
  }, [])
  useEffect(() => {
    if (props.paymentSuccess) {
      setState({
        ...state,
        paymentSuccess: true
      })
      getUserData()
    }
    setTimeout(() => {
      closeSuccessModal()
    }, 3000)
  }, [props.paymentSuccess])
  const closeSuccessModal = () => {
    setState({
      ...state,
      paymentSuccess: false,
      openConnect: false,
      openWithdraw: false
    })
  }
  const getUserData = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/fetchUser`)
      .then(response => {
        console.log(response.data)
        setBalance(response.data.data.balance)
        setAmountMade(response.data.data.amountMade)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const closeAllModals = () => {
    setState({
      ...state,
      openConnect: false,
      openWithdraw: false,
      insufficientBalance: false
    })
  }
  const fundWallet = () => {
    const data = { amount: Number(state.amount) }

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/users/updateMyBalance`, data)
      .then(response => {
        toggleModal()
        getUserData()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onToken = token => {
    toggleModal()
    const amountToPay = Number(state.amount) * 100

    const data = {
      description: `Payment of $${state.amount} made by ${token.email} on ${token.created}`,
      source: token.id,
      currency: 'USD',
      amount: amountToPay
    }

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/payments`, data)
      .then(response => {
        console.log(response)
        fundWallet()
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

  const withdrawFund = () => {
    if (props.stripeUserId) {
      if (Number(balance) > 50) {
        setState({
          ...state,
          openWithdraw: true
        })
      } else {
        setState({
          ...state,
          insufficientBalance: true
        })
      }
    } else {
      setState({
        ...state,
        openConnect: true
      })
    }
  }

  const onChangeHandler = e => {
    e.preventDefault()
    if (e.target.value >= 0) {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  }
  const handleInputChange = e => {
    const amount = Number(e.target.value)
    if (amount <= Number(balance) && amount >= 50) {
      setState({
        ...state,
        withdrawalAmount: Number(e.target.value)
      })
    }
  }
  const submitHandler = e => {
    e.preventDefault()
    const data = {
      amount: state.withdrawalAmount,
      destination: props.stripeUserId
    }
    props.payoutFund(data)
    getUserData()
  }
  return (
    <HeaderFooter redirect={props.location}>
      <div className='dashboard-header'>
        <h2>Balance</h2>
      </div>
      <div>
        <DashboardHeader />
        {/* <Notification message="Sender wants you to deliver a parcel" /> */}
        <div className='balance-section'>
          <div className='amount'>
            <p>Amount made(all time)</p>
            <h2>${amountMade}</h2>
          </div>
          <div className='balance'>
            <div className='left-side'>
              <p>My PKLoop Balance</p>
              <h2>${Number(balance).toFixed(2)}</h2>
            </div>
            <div className='right-side'>
              <button onClick={withdrawFund}>Withdraw</button>
              <button onClick={toggleModal}>Fund Balance</button>
            </div>
          </div>

          <Modal show={state.modalOpen} onClose={toggleModal}>
            <div>
              <h2>How much do you want to fund your wallet with?</h2>
              <br />
              <input
                className='popupInput'
                type='number'
                name='amount'
                placeholder='Enter Amount'
                value={state.amount}
                onChange={onChangeHandler}
              />
              <br />
              {Number(state.amount) + Number(balance) >= 29.99 ? (
                <div className='button-group'>
                  <StripeCheckout
                    image={require('../../assets/payment-logo.png')}
                    stripeKey='pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa'
                    description='Connect with a traveler'
                    name='Make payment to continue'
                    locale='auto'
                    amount={Number(state.amount) * 100}
                    token={onToken}
                    panelLabel='Pay'
                  />
                </div>
              ) : (
                <div style={{ color: 'red' }}>
                  {' '}
                  {`A Minimum of $${29.99 -
                    Number(balance)} is required to fund wallet`}
                </div>
              )}
            </div>
          </Modal>
          <Modal show={state.openConnect} onClose={closeAllModals}>
            <a href={url}>
              <img src={Connect} />{' '}
            </a>
          </Modal>
          <Modal show={state.openWithdraw} onClose={closeAllModals}>
                {props.payoutError && <h6 style={{ color: 'red'}}>{props.payoutError.message}</h6>}
                <h6>Enter an amount to withdraw</h6>
                <form onSubmit={submitHandler}>
                    <input type="number" className="support_input" value={state.withdrawalAmount} onChange={handleInputChange}></input>
                    <button type="submit" className="btnQ">{props.isLoading ? (<span
                        style={{ display: 'inline-block' }}
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      ></span>)
                    : (
                      <span>Withdraw</span>
                    )}
                    </button>
                </form>
          </Modal>
          {props.paymentSuccess && (
            <Modal show={state.paymentSuccess} onClose={closeSuccessModal}>
              <h5>Congrats, your payout was successful</h5>
            </Modal>
          )}
          <Modal show={state.insufficientBalance} onClose={closeAllModals}>
            <h5>Minimum withdrawal amount is $50</h5>
          </Modal>
        </div>
      </div>
    </HeaderFooter>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    stripeUserId: state.auth.user.stripeUserId,
    transaction: state.transaction,
    balance: state.balance.balance,
    paymentSuccess: state.balance.paymentSuccess,
    update: state.balance.user,
    isLoading: state.balance.isLoading,
    payoutError: state.balance.payoutError
  }
}

export default connect(mapStateToProps, { actions, getStripeId, payoutFund })(
  Balance
)
