import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTransaction } from '../../actions/transActions'
import { Link } from 'react-router-dom'

const Transactions = props => {
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
        <p className='completed'></p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <Link to='/chat'> <p className='open' style={{cursor: 'pointer'}}>Open</p> </Link>
      </div>
      <div className='table-row'>
        <p className='pending'>Pending</p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <Link to='/chat'> <p className='open' style={{cursor: 'pointer'}}>Open</p> </Link>
      </div>
      <div className='table-row'>
        <p className='canceled'>Declined</p>
        <p>Sheldon Cooper</p>
        <p>Sender</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <Link to='/chat'> <p className='open' style={{cursor: 'pointer'}}>Open</p> </Link>
      </div>
      <div className='table-row traveler'>
        <p className='completed'>Completed</p>
        <p>Sheldon Cooper</p>
        <p>Traveler</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <Link to='/chat'> <p className='open' style={{cursor: 'pointer'}}>Open</p> </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  }
}

export default connect(mapStateToProps, getTransaction)(Transactions)
