import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from '../common/modal'
import * as actions from '../../actions/balanceActions'

const Balance = props => {

  const { balance: { user: { balance } } } = props

  useEffect(() => {
    props.setCurrentUser()
  }, [props.balance.user.balance])

  const [state, setState] = useState({
    amountMade: 0,
    balance: balance,
    modalOpen: false,
    amount: 0
  })

  console.log(props)
  // console.log(props.auth.user.balance)
  // // if (props.balance) {
  // console.log(props.balance.balance)
  // }

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
    const data = {
      amount: Number(state.amount)
    }

    props.updateBalance(data)

    setState({
      ...state,
      amount: 0
    })

    props.setCurrentUser()

    setState({
      ...state,
      modalOpen: false
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
          <input className="popupInput" type="number" name="amount" placeholder="Enter Amount" value={state.amount} onChange={onChangeHandler} />
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
  transaction: state.transaction,
  balance: state.balance
})

export default connect(mapStateToProps, actions)(Balance)
