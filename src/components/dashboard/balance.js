import React from 'react'
import { connect } from 'react-redux'

const Balance = props => {
  console.log(props.auth.user.balance)

  const {
    auth: {
      user: { balance, amountMade }
    }
  } = props

  return (
    <div className='balance-section'>
      <div className='amount'>
        <p>Amount made so far</p>
        <h2>${amountMade}</h2>
      </div>
      <div className='balance'>
        <div className='left-side'>
          <p>My PKLoop Balance</p>
          <h2>${balance}</h2>
        </div>
        <div className='right-side'>
          <button>Withdraw</button>
          <button>Fund Balance</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Balance)
