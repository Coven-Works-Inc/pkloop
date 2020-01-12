import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from '../common/modal'

const Balance = props => {

  const {
    auth: {
      user: { balance }
      // user: { balance, amountMade }
    }
  } = props

  const [state, setState] = useState({
    amountMade: 0,
    balance: balance,
    modalOpen: false,
    amount: 0
  })

  console.log(props)
  console.log(props.auth.user.balance)

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

  const fundWallet = () => {
    setState({
      ...state,
      balance: state.balance + Number(state.amount),
      modalOpen: false,
      amount: 0
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
          <h2>${state.balance}</h2>
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
          <input type="number" name="amount" placeholder="Enter Amount" value={state.amount} onChange={onChangeHandler} />
          <br />
          {state.amount}
          <br />
          <div className="button-group">
            <button className='btnQ medium' onClick={fundWallet}>Okay, Proceed</button>
            <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Balance)
