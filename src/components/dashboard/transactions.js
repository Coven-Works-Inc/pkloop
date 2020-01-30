import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTransaction } from '../../actions/transActions'
import { getTrip } from '../../actions/tripActions'
import { withRouter } from 'react-router-dom'
import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'

// import Notification from './notification'

const Transactions = props => {
  // const [transStatus, changeTransStatus] = useState('pending')
  const {
    transaction: { transaction }
  } = props

  useEffect(() => {
    props.getTransaction()
  }, [])
  const handleClick = async (trans) => {
    if (trans.role === 'Sender') {
      props.getTrip(trans.tripId)
      props.history.push({
        pathname: '/dashboard/travelerchat',
        redirect: '/login',
        trans
      })
    } else {
      props.getTrip(trans.tripId)
      props.history.push({
        pathname: '/dashboard/senderchat',
        redirect: '/login'
      })
    }
  }
  return (
    <HeaderFooter redirect={props.location}>
      <div className='dashboard-header'>
        <h2>
          My Transactions
          </h2>
      </div>
      <div>
        <DashboardHeader />
        {/* <Notification message="Sender wants you to deliver a parcel" /> */}
        <div className='transactions'>
          <div className='table-header'>
            <p>Status</p>
            <p>Sender</p>
            <p>Traveler</p>
            <p>Amount Due</p>
            <p>Amount Paid</p>
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
                  <div key={index} className={trans.status === 'Pending' ? 'table-row pending-row' : 'table-row'}>
                    <p className='completed'>{trans.status}</p>
                    <p>{trans.with}</p>
                    <p>{trans.role}</p>
                    <p>{trans.date.split('T')[0]}</p>
                    {' '}
                    <p className='open' style={{ cursor: 'pointer' }} onClick={() => handleClick(trans)}>
                      {trans.status === 'Pending' ? 'View Details' : 'Open'}
                    </p>{' '}
                  </div>
                ))
              )}
        </div>
      </div>
    </HeaderFooter>
  )
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction,
    trip: state.trips.trip.data
  }
}

export default connect(mapStateToProps, { getTransaction, getTrip })(withRouter(Transactions))
