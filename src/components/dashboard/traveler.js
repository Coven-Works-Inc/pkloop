import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { joinChatRoom } from '../../actions/chatActions'
import io from 'socket.io-client'
import axios from 'axios'
import HeaderFooter from '../headerFooter'
import { BASE_URL } from '../../config/constants'
import { reduceBalance, updateBalance } from '../../actions/balanceActions'
import { addTravelerEarning } from '../../actions/travelerActions'
import { completeTrip } from '../../actions/tripActions'
import { updateTrans } from '../../actions/transActions'
import 'react-chat-widget/lib/styles.css';
import {
  ThemeProvider,
  TextComposer,
  Row,
  IconButton,
  AddIcon,
  TextInput,
  EmojiIcon,
  SendButton,
  Message,
  MessageList,
  MessageText,
} from '@livechat/ui-kit'
import './chat.css'
import Modal from '../common/modal'
import DashboardHeader from './header'

let socket
const TravelerChat = props => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [modal, setModal] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(props.updateSuccess)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [cancelModal, setCancelModal] = useState(false)
  const [balance, setBalance] = useState(0)
  const [errorModal, setErrorModal] = useState(false)
  const [markCompleteModal, setMarkCompleteModal] = useState(false)

  const [state, setState] = useState({
    totalCost: 0,
    modalType: 'insurance',
    headerText: 'Sender details',
    tipAmount: props.tipAmount,
    modalOpen: props.completed,
  })

  const { parcelCost, travelerData } = props.location
  // addToTotalCost(parcelCost)

  console.log(props)
  // useEffect(() => {
  //     setName(travelerData.username)
  //     setRoom(travelerData._id)

  //     socket = io('https://aqueous-ravine-50016.herokuapp.com/')
  //     socket.emit('join', ({ name, room }), () => {
  //         console.log(name, room)
  //     })

  //     // return() => {
  //     //   socket.emit('disconnect')
  //     //   socket.off()
  //     // }

  // }, [travelerData._id, travelerData.username])
  // useEffect(() => {
  //   socket.on('message', ({user, text}, callback) => {
  //     setMessages([...messages, text])
  //     console.log(messages)
  // })
  // },)

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    setState({
      ...state,
      totalCost: parcelCost
    })
  }, [])

  const addReceiverDetails = () => {
    console.log(props.traveler)
    const receiverDetails = {
      id: props.traveler._id,
      fullname: state.fullname,
      address: state.address,
      phone: state.phone
    }
    props.addReceiver(receiverDetails)
  }
  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen
    })
  }
  const insuranceChangeHandler = e => {
    setState({
      ...state,
      parcelWorth: Number(e.target.value),
      insuranceCost: Number(0.02 * Number(e.target.value)).toFixed(2),
    })
  }
  const itemChangeHandler = e => (
    setState({
      ...state,
      parcelItem: e.target.value
    })
  )
  const payInsurance = () => {
    // const userData = {
    //   client_id,
    //   api_key,
    //   customer_name: `${props.auth.firstname} ${props.auth.lastname}`,
    //   firstname: props.auth.firstname,
    //   lastname: props.auth.lastname,
    //   items_ordered: state.parcelItem,
    //   subtotal: state.parcelWorth,
    //   currency: 'USD',
    //   coverage_amount: state.insuranceCost,
    //   order_number: uuidv4()
    // }
    // await props.addInsurance(userData)
    setState({
      modalOpen: false,
      totalCost: state.totalCost
    })
  }
  const handleCheckbox = () => {
    setState({
      ...state,
      checked: !state.checked
    })
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  const getUserData = () => {
    axios.get(`${BASE_URL}/users/fetchUser`)
      .then(response => {

        setBalance(response.data.data.balance)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  const cancelTransaction = () => {
    if (paymentSuccess) {
      props.updateBalance({ amount: props.parcelCost })
      setUpdateSuccess(false)
      setCancelled(true)
      setPaymentSuccess(false)
      setTimeout(closeModal, 3000)
    }
  }
  const markAsComplete = () => {
    console.log(props)
    const data = {
      id: travelerData._id,
      earning: Number(props.tipAmount) + Number(props.senderCost),
    }
    props.addTravelerEarning(data)
    props.completeTrip(travelerData._id)
  }

  // const toggleModal = () => {
  //   props.close()
  // }
  // const onTipChange = e => {
  //   setState({
  //     tipAmount: e.target.value
  //   })
  // }
  const openCancelModal = () => {
    if (paymentSuccess) {
      setCancelModal(true)
    }
  }
  const gotoBalance = () => {
    closeModal()
    props.gotoBalance()
    toggleModal()
  }
  const openMarkCompletModal = () => {
    setMarkCompleteModal(true)
  }
  const theme = {
    vars: {
      'primary-color': '#427fe1',
      'secondary-color': '#fbfbfb',
      'tertiary-color': '#fff',
      'avatar-border-color': 'blue'
    },
    AgentBar: {
      Avatar: {
        size: '42px'
      },
      css: {
        backgroundColor: 'var(--secondary-color)',
        borderColor: 'var(--avatar-border-color)'
      }
    },
    Message: {
      css: {
        fontWeight: 'bold',
        backgroundColor: '#e4e9f2'
      },
      radiusType: 'first'
    }
  }
  useEffect(() => {
    if (props.status === 200) {
      setModal(true)
      toggleModal()
      setPaymentSuccess(true)
    }
  }, [props.status])
  const closeModal = () => {
    setModal(false)
    setErrorModal(false)
    setCancelModal(false)
    setMarkCompleteModal(false)
    toggleModal()
  }
  const changeHeader = text => {
    setState({
      headerText: text
    })
  }
  const markTrans = () => {
    if (!paymentSuccess) {
      props.markTrans()
    }
  }
  const handleParcelPayment = () => {
    //TODO: CHECK IF ENOUGH MONEY IS IN BALANCE
    //REDIRECT TO FUND WALLET PAGE IF NOT
    //SUBTRACT FROM WALLET IF ENOUGH
    const data = {
      id: travelerData._id,
      tipAmount: props.tipAmount,
      tipAdded: props.tipAdded ? true : false,
      insuranceAmount: Number(props.insuranceCost),
      insuranceAdded: props.insuranceCost ? true : false,
      totalCost: props.parcelCost,
      parcelCost: props.senderCost
    }
    const parcelCost = props.parcelCost + (0.05 * props.parcelCost)
    if (balance >= parcelCost) {
      props.reduceBalance({ amount: parcelCost })
      console.log(data)
      props.updateTrans(data)
    } else {
      setErrorModal(true)
    }
  }
  return (
    <HeaderFooter redirect={props.location}>
      <div>
        <DashboardHeader />
        <div className='chat'>
          <div className='chat-details'>
            {travelerData && (
              <div>
                <h3>
                  <span className='gray'>From</span> {travelerData.locationCity},{' '}
                  {travelerData.locationCountry}
                  <br />
                  <span className='gray'>To</span> {travelerData.destinationCity},{' '}
                  {travelerData.destinationCountry}
                </h3>
                <h5>
                  {travelerData.user && (
                    <span>
                      <span className='gray'>Traveller</span>{' '}
                      {travelerData.username}
                    </span>
                  )}
                  <br />
                  <span className='gray'>Arrival date</span>{' '}
                  {travelerData.arrivalDate && travelerData.arrivalDate.split('T')[0]}
                  <br />
                  <span className='gray'>Means of transportation</span>{' '}
                  {travelerData.transport}
                  <br />
                  <span className='gray'>Size of parcel</span>{' '}
                  {travelerData.parcelSize && travelerData.parcelSize.charAt(0).toUpperCase()}
                  {travelerData.parcelSize && travelerData.parcelSize.slice(1)}
                  <br />
                  <span className='gray'>Weight of parcel</span>{' '}
                  {travelerData.parcelWeight}
                  <br />
                  <br />
                  <span className='gray'>Total Cost</span>{' '}
                  {state.totalCost}
                </h5>
                {!props.completed && (
                  <div>
                    <button onClick={() => setState({ ...state, modalType: 'receiver', modalOpen: true })}
                      style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                      className='reusable-button'>ENTER RECEIVER'S DETAILS</button>
                    {/* <button onClick={() => updateModalType('tip')}
                      style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                      className='reusable-button'>{travelerData.tipAdded ? `TIP ADDED ($${travelerData.tipAmount}) ` : 'ADD TIP(OPTIONAL)'}</button> */}
                    <button onClick={() => setState({ ...state, modalType: 'insurance', modalOpen: true })}
                      style={{ color: 'white', backgroundColor: "#abcc71", border: "#abcc71", outline: 'none' }}
                      className='reusable-button'>{travelerData.insuranceCost ? `INSURANCE ADDED ($${travelerData.insuranceCost})` : 'ADD INSURANCE(OPTIONAL)'}</button>
                    <button onClick={markTrans}
                      style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
                      className='reusable-button'>{!paymentSuccess ? `CONTINUE TO PAYMENT($${state.totalCost.toFixed(2)}) + PLATFORM CHARGES($${Number(0.05 * state.totalCost).toFixed(2)})` : `PAYMENT SUCCESSFUL`}</button>
                    {/* <button onClick={openMarkCompletModal}
                      style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
                      className='reusable-button'>MARK AS COMPLETED</button> */}
                    <button
                      style={{
                        color: 'red',
                        backgroundColor: 'white',
                        border: 'white',
                        outline: 'none'
                      }}
                      className='reusable-button'
                      onClick={() => openCancelModal}
                    >
                      {cancelled ? `TRANSACTION CANCELLED` : `CANCEL TRANSACTION`}
                    </button>
                  </div>
                )}
                {props.completed && (
                  <Modal show={props.completed} onClose={toggleModal}>
                    <p>{`Are you sure you want to pay, cancellation attracts a 5% $(${Number(0.05 * props.cost).toFixed(2)}) charge`}</p>
                    <button className='btnQ medium' style={{ marginRight: '10px' }} onClick={() => handleParcelPayment}>{`pay $${Number(props.cost).toFixed(2)} + $${Number(0.05 * props.cost).toFixed(2)}`}</button>
                    <button className='btnQ inverse-btnQ medium' onClick={() => toggleModal}>No, Not Interested</button>
                  </Modal>
                  //   <StripeCheckout
                  //     amount={props.cost * 100}
                  //     image={require('../../assets/payment-logo.png')}
                  //     stripeKey="pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa"
                  //     description="Connect with a traveler"
                  //     name="Make payment to continue"
                  //     locale="auto"
                  //     label="Pay With Card to Continue"
                  //     // panelLabel={'Pay $' + props.cost}
                  //     token={() => props.history.push('/dashboard/transactions')}
                  //   />
                )}
                {modal && (
                  <Modal show={modal} onClose={closeModal}>
                    <div>You've successfully paid for this transaction</div>
                    <button onClick={() => gotoBalance} className="btnQ">View wallet balance</button>
                  </Modal>
                )
                }
                {errorModal && (
                  <Modal show={errorModal} onClose={closeModal}>
                    <div>You do not have enough fund in your wallet</div>
                    <Link to='/dashboard/balance'><button onClick={() => gotoBalance} className="btnQ">Fund wallet balance</button></Link>
                  </Modal>
                )}
                {cancelModal && (
                  <Modal show={cancelModal} onClose={closeModal}>
                    {console.log(props)}
                    {props.updateSuccess === true && (<h3 style={{ color: 'green' }}>Transaction successfully cancelled</h3>)}
                    <div>Are you sure you want to cancel ?. You will stiill be charged 5% platform fee </div>
                    <button className='btnQ' onClick={() => cancelTransaction}>Cancel transaction</button>
                  </Modal>
                )}
                {markCompleteModal && (
                  <Modal show={markCompleteModal} onClose={closeModal}>
                    <div>Are you sure the parcel is delivered?. This is irreversible </div>
                    <button className='btnQ' onClick={() => markAsComplete}>Yes, continue</button>
                    <button className='btnQ' onClick={() => closeModal}>No</button>
                  </Modal>
                )}

              </div>
            )}
            {!travelerData && (
              <p>
                Please connect with a traveler on{' '}
                <Link
                  to='/parcel'
                  style={{
                    color: '#00bdbe',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Send Parcel
            </Link>{' '}
                page
          </p>
            )}
          </div>
          {travelerData && (
            <div className='chat-board' style={travelerData ? {} : { alignSelf: 'center' }}>
              <div className="receiver-modal">
                <h2>Leave a message for the Traveler</h2>
                <label>Subject</label>
                <input type="text" className="support_input" name="fullname" onChange={handleChange}></input>
                <br />
                <label>Text</label>
                <textarea className="support_input" name="address" onChange={handleChange}></textarea>
                <br />
                <button className="btnQ medium">Send message</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal show={state.modalOpen} onClose={toggleModal}>
        {
          state.modalType === 'insurance' &&
          <div className="insurance">
            {state.insuranceSuccess ? <p style={{ color: 'green' }}>Insurance Policy successfully added</p> : <h2></h2>}
            <label>What is the worth of your parcel? Range between $0 - $1500</label>
            <input type="range" min="0" max="1500" value={state.parcelWorth} onChange={insuranceChangeHandler} className="slider" />
            <h3>parcel Worth: {state.parcelWorth}</h3>
            <br />
            <br />
            <label>Which items are you insuring?</label>
            <input type="text" value={state.parcelItem} onChange={itemChangeHandler} placeholder="e.g Coffee table" className="support_input" />
            <h2>You will be charged 2% (${state.insuranceCost})of the total cost for insurance</h2>
            <br />
            <label className="container">By clicking on Proceed, you agree to InsureShip <a href="https://www.insureship.com/privacy" target="_blank"> Privacy policy</a> and <a href="https://www.insureship.com/terms" target="_blank">terms</a>
              <input type="checkbox" checked={state.checked} onChange={handleCheckbox} />
              <span className="checkmark"></span>
            </label>
            <div className="button-group">
              <button className='btnQ medium'
                disabled={!state.checked}
                onClick={payInsurance}>
                {props.loading ? (
                  <span
                    style={{ display: 'inline-block' }}
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                ) : (
                    <div>Okay, Proceed</div>
                  )}
              </button>
              <button className='btnQ inverse-btnQ medium' onClick={() => toggleModal}>No, Not Interested</button>
            </div>
          </div>
        }
        {
          state.modalType === 'receiver' &&
          <div className="receiver-modal">
            <h2>Please enter the details of the parcel receiver</h2>
            <label>Fullname</label>
            <input type="text" className="support_input" name="fullname" onChange={handleChange}></input>
            <br />
            <label>Address</label>
            <input type="text" className="support_input" name="address" onChange={handleChange}></input>
            <br />
            <label>Phone number</label>
            <input type="text" className="support_input" name="phone" onChange={handleChange}></input>
            <br />
            <button className="btnQ medium" onClick={() => addReceiverDetails}>Add details</button>
          </div>
        }
      </Modal>
    </HeaderFooter>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    traveler: state.trips.trip.data,
    status: state.balance.status,
    updateSuccess: state.balance.updateSuccess
  }
}
export default connect(mapStateToProps, {
  joinChatRoom,
  reduceBalance,
  updateBalance,
  addTravelerEarning,
  completeTrip,
  updateTrans
})(TravelerChat)
