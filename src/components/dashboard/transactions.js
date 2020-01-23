import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTransaction } from '../../actions/transActions'
import { Link, withRouter } from 'react-router-dom'

const Transactions = props => {
  const {
    transaction: { transaction }
  } = props

  const handleClick = (trans) => {
    props.history.push({
      pathname: '/dashboard/senderchat',
    })
    console.log(trans)
  }
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
        <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</h3>
      ) : transaction.length === 0 ? (
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
          You do not any transactions yet
        </h2>
      ) : (
        transaction.map((trans, index) => (
          <div className='table-row'>
            <p className='completed'>{trans.status}</p>
            <p>{trans.with}</p>
            <p>{trans.role}</p>
            <p>{trans.date}</p>
              {' '}
              <p className='open' style={{ cursor: 'pointer' }} onClick={() => handleClick(trans)}>
                Open
              </p>{' '}
          </div>
        ))
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  }
}

export default connect(mapStateToProps, getTransaction)(withRouter(Transactions))
