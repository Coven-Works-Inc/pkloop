import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { joinChatRoom } from '../../actions/chatActions'
import io from 'socket.io-client'
import axios from 'axios'
import { BASE_URL } from '../../config/constants'
import { reduceBalance, updateBalance } from '../../actions/balanceActions'
import { markTravelerComplete } from '../../actions/transActions'
import { addTravelerEarning } from '../../actions/travelerActions'

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

let socket
const Chat = props => {
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

  useEffect(() => {
    console.log(props.traveler)
    if(props.traveler){
      setName(props.traveler.username)
      setRoom(props.traveler._id)

      socket = io('https://aqueous-ravine-50016.herokuapp.com/')
      // socket = io('http://localhost:8000')
      socket.emit('join', { name, room }, () => {
          console.log(name, room)
      })

      return() => {
        socket.emit('disconnect')
        socket.off()
      }

    }
  }, [props.traveler._id, name])
  useEffect(() => {
    socket.on('message', ({user, text}, callback) => {
      setMessages([...messages, text])
      console.log(messages)
  })
  },)

  useEffect(() => {
    getUserData()
  }, [])

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
    if(message){
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  const cancelTransaction = () => {
    if(paymentSuccess){
      props.updateBalance({amount: props.parcelCost})
      setUpdateSuccess(false)
      setCancelled(true)
      setPaymentSuccess(false)
      setTimeout(closeModal, 3000)
    }
  }
  const markAsComplete = () => {
    console.log(props)
    const data = {
      id: props.traveler._id,
      earning: Number(props.tipAmount) + Number(props.senderCost),
    }
    props.markTravelerComplete(data)
    props.addTravelerEarning(data)
  }
  const [state, setState] = useState({
    headerText: 'Sender details',
    tipAmount: props.tipAmount,
    modalOpen: props.completed,
  })
  const toggleModal = () => {
    props.close()
  }
  const onTipChange = e => {
    setState({
      tipAmount: e.target.value
    })
  }
  const openCancelModal = () => {
    if(paymentSuccess){
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
    if(props.status === 200){
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
    if(!paymentSuccess){
      props.markTrans()
    }
  }
  const handleParcelPayment = () => {
    //TODO: CHECK IF ENOUGH MONEY IS IN BALANCE
    //REDIRECT TO FUND WALLET PAGE IF NOT
    //SUBTRACT FROM WALLET IF ENOUGH
    const parcelCost = props.parcelCost + (0.05 * props.parcelCost)
    if(balance >= parcelCost){
        props.reduceBalance({ amount: parcelCost })
    } else {
      setErrorModal(true)
    }
  }
  return (
    <div className='chat'>
      <div className='chat-details'>
        {props.traveler && (
          <div>
            <h3>
              <span className='gray'>From</span> {props.traveler.locationCity},{' '}
              {props.traveler.locationCountry}
              <br />
              <span className='gray'>To</span> {props.traveler.destinationCity},{' '}
              {props.traveler.destinationCountry}
            </h3>
            <h5>
              {props.traveler.user && (
                <span>
                  <span className='gray'>Traveller</span>{' '}
                  {props.traveler.user._id})
                </span>
              )}
              <br />
              <span className='gray'>Arrival date</span>{' '}
              {props.traveler.arrivalDate.split('T')[0]}
              <br />
              <span className='gray'>Means of transportation</span>{' '}
              {props.traveler.transport}
              <br />
              <span className='gray'>Size of parcel</span>{' '}
              {props.traveler.parcelSize.charAt(0).toUpperCase()}
              {props.traveler.parcelSize.slice(1)}
              <br />
              <span className='gray'>Weight of parcel</span>{' '}
              {props.traveler.parcelWeight}
            </h5>
            {!props.completed && (
              <div>
                <button onClick={() => props.modal('receiver')}
                  style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                  className='reusable-button'>ENTER RECEIVER'S DETAILS</button>
                <button onClick={() => props.modal('tip')}
                  style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                  className='reusable-button'>{props.tipAdded ? `TIP ADDED ($${props.tipAmount}) `: 'ADD TIP(OPTIONAL)'}</button>
                <button onClick={() => props.modal('insurance')}
                  style={{ color: 'white', backgroundColor: "#abcc71", border: "#abcc71", outline: 'none' }}
                  className='reusable-button'>{props.insuranceCost ? `INSURANCE ADDED ($${props.insuranceCost})`: 'ADD INSURANCE(OPTIONAL)'}</button>
                <button onClick={markTrans}
                  style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
                  className='reusable-button'>{!paymentSuccess ? `CONTINUE TO PAYMENT($${Number(props.parcelCost).toFixed(2)}) + PLATFORM CHARGES($${Number(0.05 * props.parcelCost).toFixed(2)})`: `PAYMENT SUCCESSFUL`}</button>
                <button onClick={openMarkCompletModal}
                  style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
                  className='reusable-button'>MARK AS COMPLETED</button>
                <button
                  style={{
                    color: 'red',
                    backgroundColor: 'white',
                    border: 'white',
                    outline: 'none'
                  }}
                  className='reusable-button'
                  onClick={openCancelModal}
                >
                  {cancelled ? `TRANSACTION CANCELLED` : `CANCEL TRANSACTION`}
                </button>
              </div>
            )}
            {props.completed && (
              <Modal show={props.completed} onClose={toggleModal}>
                  <p>{`Are you sure you want to pay, cancellation attracts a 5% $(${Number(0.05 * props.cost).toFixed(2)}) charge`}</p>
                  <button className='btnQ medium' style={{marginRight: '10px'}} onClick={handleParcelPayment}>{`pay $${Number(props.cost).toFixed(2)} + $${Number(0.05 * props.cost).toFixed(2)}`}</button>
                  <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Not Interested</button>
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
                  <button onClick={gotoBalance} className="btnQ">View wallet balance</button>   
              </Modal>
            )
            }
            {errorModal && (
              <Modal show={errorModal} onClose={closeModal}>
                <div>You do not have enough fund in your wallet</div>
                <Link to='/dashboard/balance'><button onClick={gotoBalance} className="btnQ">Fund wallet balance</button></Link>
              </Modal>
            )}
            {cancelModal && (
              <Modal show={cancelModal} onClose={closeModal}>
                {console.log(props)}
                {props.updateSuccess === true && (<h3 style={{color: 'green'}}>Transaction successfully cancelled</h3>)}
                <div>Are you sure you want to cancel ?. You will stiill be charged 5% platform fee </div>
                <button className='btnQ' onClick={cancelTransaction}>Cancel transaction</button>
              </Modal>
            )}
            {markCompleteModal && (
              <Modal show={markCompleteModal} onClose={closeModal}>
                <div>Are you sure the parcel is delivered?. This is irreversible </div>
                <button className='btnQ' onClick={markAsComplete}>Yes, continue</button>
                <button className='btnQ' onClick={closeModal}>No</button>
              </Modal>
            )}

          </div>
        )}
        {!props.traveler && (
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
      {props.traveler && (
        <div
          className='chat-board'
          style={props.traveler ? {} : { alignSelf: 'center' }}
        >
          <ThemeProvider theme={theme}>
          <div style={{ width: '100%', background: 'white' }}>

            <Row reverse>
              <MessageList>
                {messages.map(message => (
                   <Message isOwn radiusType='single'  showMetaOnClick style={{ backgroundColor: '#00bdbe', borderRadius: '1em', padding: '5px 10px', height: 'max-content' }}>
                     <MessageText>{message}</MessageText>
                   </Message>

                ))}

              </MessageList>
            </Row>>
            <TextComposer onClick={sendMessage} onChange={(event) => setMessage(event.target.value)} >
              <Row align="center">
                <IconButton fit>
                  <AddIcon />
                </IconButton>
                <TextInput fill/>
                <SendButton fit/>
              </Row>

              <Row verticalAlign="center" justify="right">
                <IconButton fit>
                  <EmojiIcon />
                </IconButton>
              </Row>
            </TextComposer>
          </div>
        </ThemeProvider>
          
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    traveler: state.travelers.travelerData,
    status: state.balance.status,
    updateSuccess: state.balance.updateSuccess
  }
}
export default connect(mapStateToProps, { joinChatRoom, 
                                        reduceBalance, 
                                        updateBalance, 
                                        markTravelerComplete,
                                        addTravelerEarning 
                                      })(Chat)
