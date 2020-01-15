import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTransaction } from '../../actions/transActions'
import { Link } from 'react-router-dom'

const Transactions = props => {
  const {
    transaction: { transaction }
  } = props

  return (
    <div className='transactions'>
      <div className='table-header'>
        <p>Status</p>
        <p>With</p>
        <p>Your role</p>
        <p>Last message</p>
        <p></p>
      </div>
      {transaction === undefined ? (
        <h3>Loading...</h3>
      ) : transaction.length === 0 ? (
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
          You do not any transactions yet
        </h2>
      ) : (
        <div className='table-row'>
          <p className='completed'>{transaction.status}</p>
          <p>{transaction.with}</p>
          <p>{transaction.sender}</p>
          <p>{transaction.createdAt.split('T')[0]}</p>
          <Link to='/chat'>
            {' '}
            <p className='open' style={{ cursor: 'pointer' }}>
              Open
            </p>{' '}
          </Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  }
}

export default connect(mapStateToProps, getTransaction)(Transactions)
