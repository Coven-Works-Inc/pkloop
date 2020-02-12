import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTransaction, getNotif } from '../../actions/transActions'
import { getTrip } from '../../actions/tripActions'
import { respondToRequest } from '../../actions/travelerActions'
import { withRouter } from 'react-router-dom'
import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'
import Notification from './notification'
import Modal from '../common/modal'


// import Notification from './notification'

const Transactions = props => {
  // const [transStatus, changeTransStatus] = useState('pending')
  const [modal, setModal] = useState(false)
  const [sender, setSender] = useState({})
  const [success, setSuccess] = useState(false)
  const [action, setAction] = useState('')
  useEffect(() => {
    props.getNotif()
  },[])
  useEffect(() => {
      if(props.transaction.res.status){
        setSuccess(true)
        setTimeout(() => {
          setModal(false)
        }, 3000)
      }
      console.log(props.transaction.res)
  }, [props.transaction.res])
  const showTrip = (notif) => {
    props.getTrip(notif.tripId)
    setModal(true)
    console.log(notif)
    setSender(notif)
  }
  const closeModal = () =>{
    setModal(false)
  }
  const acceptRequest = () => {
    const data = {
      senderId: sender.sender,
      tripId: sender.tripId,
      action: 'accept',
      amount: sender.amount,
      notifId: sender._id
    }
    setAction('accept')
    props.respondToRequest(data)
  }
  const declineRequest = () => {
    const data = {
      senderId: sender.sender,
      tripId: sender.tripId,
      action: 'decline',
      amount: sender.amount,
      notifId: sender._id
    }
    setAction('decline')
    props.respondToRequest(data)

  }
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
        {props.notifs && props.notifs.map(notif => (
          <div> <Notification message={notif.notify} showTripDetails={() => showTrip(notif)}/> </div>
        ))}
        <div className='transactions'>
          <h2 style={{ textAlign: "center"}}>Traveler transaction</h2>
          <div className='table-header'>
            <p>Date</p>
            <p>Status</p>
            <p>Sender</p>
            <p>Traveler</p>
            <p>Amount Due($)</p>
            <p>Amount Paid($)</p>
            <p></p>
          </div>
          {transaction === undefined ? (
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</h3>
          ) : transaction.length === 0 ? (
            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
              You do not have any transactions yet
          </h2>
          ) : (
                <div>
                  {transaction.map((trans, index) => (
                  trans.sender === props.username && (
                    <div key={index} className={trans.status === 'Pending' ? 'table-row pending-row' : 'table-row'}>
                    <p>{trans.date.split('T')[0]}</p>
                    <p className='completed'>{trans.status}</p>
                    <p>{trans.sender}</p>
                    <p>{trans.traveler}</p>
                    <p>{Number(trans.amountDue).toFixed(2)}</p>
                    <p>0</p>
                  </div>
                  )
                ))}
                </div>  
              )}
        </div>
        <div className='transactions'>
          <h3 style={{ textAlign: "center"}}>Sender transaction</h3>
          <div className='table-header'>
            <p>Date</p>
            <p>Status</p>
            <p>Sender</p>
            <p>Traveler</p>
            <p>Amount Due($)</p>
            <p>Amount Paid($)</p>
            <p></p>
          </div>
          {transaction === undefined ? (
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</h3>
          ) : transaction.length === 0 ? (
            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
              You do not have any transactions yet
          </h2>
          ) : (
                <div>
                  {transaction.map((trans, index) => (
                  trans.traveler === props.username && (
                    <div key={index} className={trans.status === 'Pending' ? 'table-row pending-row' : 'table-row'}>
                    <p>{trans.date.split('T')[0]}</p>
                    <p className='completed'>{trans.status}</p>
                    <p>{trans.sender}</p>
                    <p>{trans.traveler}</p>
                    <p>{Number(trans.amountDue).toFixed(2)}</p>
                    <p>0</p>
                  </div>
                  )
                ))}
                </div>  
              )}
        </div>
      </div>
      <Modal show={modal} onClose={closeModal}>
          {success && <div style={{ color: 'green'}}>{action === 'accept' ? `Transaction successful` : null}</div>}
          {success && <div style={{ color: 'green'}}>{action === 'decline' ? `Transaction declined` : null}</div>}
          Sender<h5>{sender.username ? sender.username : sender.sender}</h5>
          From<h5>{props.trip.locationCountry} , {props.trip.locationCity}</h5>
          To<h5>{props.trip.destinationCountry} , {props.trip.destinationCity}</h5>
          Arrival Date<h5>{props.trip.arrivalDate && props.trip.arrivalDate.split('T')[0]}</h5>
          Parcel Size<h5>{props.trip.parcelSize}</h5>
          Parcel weight<h5>{sender.parcelWeight}</h5>
          Means of Transportation<h5>{props.trip.transport}</h5>
          Tip<h5>{sender.tip}</h5>
          <br />
          <div className="button-group">
            <button className='btnQ' onClick={acceptRequest}>Accept</button>
            <button className='btnQ inverse-btnQ' onClick={declineRequest}>Decline</button>
          </div>
      </Modal>
    </HeaderFooter>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    username: state.auth.user.username,
    transaction: state.transaction,
    trip: state.trips.trip.data,
    notifs: state.transaction.notif,
  }
}

export default connect(mapStateToProps, { getTransaction, getTrip, respondToRequest, getNotif })(withRouter(Transactions))
