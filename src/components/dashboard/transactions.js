import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTransactions } from '../../actions/transactionActions'

const Transactions = props => {
  const [transaction, setTransaction] = useState([])

  const {
    auth: {
      user: { _id }
    },
    transactions
  } = props

  useEffect(id => {
    getTransactions(id)
  }, [])

  console.log(transactions)
  return (
    <div className='transactions'>
      <div className='table-header'>
        <p>Status</p>
        <p>With</p>
        <p>Your role</p>
        <p>Last message</p>
        <p></p>
      </div>
      <div className='table-row'>
        <p className='completed'>Completed</p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <p className='open'>Open</p>
      </div>
      <div className='table-row'>
        <p className='pending'>Pending</p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <p className='open'>Open</p>
      </div>
      <div className='table-row'>
        <p className='canceled'>Declined or Canceled</p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <p className='open'>Open</p>
      </div>
      <div className='table-row traveler'>
        <p className='completed'>Completed</p>
        <p>Sheldon Cooper</p>
        <p>Traveler</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <p className='open'>Open</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    transactions: state.transactions
  }
}

export default connect(mapStateToProps, { getTransactions })(Transactions)
