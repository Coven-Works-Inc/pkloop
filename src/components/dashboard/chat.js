import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { joinChatRoom } from '../../actions/chatActions'
import io from 'socket.io-client'

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
  const [replies, setReplies] = useState([])
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  useEffect(() => {

    setName(props.traveler._id)
    setRoom('New room')

    socket = io('https://aqueous-ravine-50016.herokuapp.com/')
    // socket = io('http://localhost:8000')
    socket.emit('join', { name, room }, () => {
        console.log(name, room)
    })

    return() => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [props.traveler._id, name])
  useEffect(() => {
    socket.on('message', ({user, text}, callback) => {
      setMessages([...messages, text])
      console.log(messages)
  })
  },)
  const sendMessage = (e) => {
    e.preventDefault()
    if(message){
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  const [state, setState] = useState({
    headerText: 'Sender details',
    tipAmount: props.tipAmount,
    modalOpen: props.completed,
  })
  if (props.traveler) {
  }
  const toggleModal = () => {
    props.close()
  }
  const onTipChange = e => {
    setState({
      tipAmount: e.target.value
    })
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

  const changeHeader = text => {
    setState({
      headerText: text
    })
  }
  const handleParcelPayment = () => {
    //TODO: CHECK IF ENOUGH MONEY IS IN BALANCE
    //REDIRECT TO FUND WALLET PAGE IF NOT
    //SUBTRACT FROM WALLET IF ENOUGH
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
                <button onClick={() => props.markTrans()}
                  style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
            className='reusable-button'>{`CONTINUE TO PAYMENT($${Number(props.parcelCost).toFixed(2)}) + PLATFORM CHARGES($${Number(0.05 * props.parcelCost).toFixed(2)})`}</button>
                <button
                  style={{
                    color: 'red',
                    backgroundColor: 'white',
                    border: 'white',
                    outline: 'none'
                  }}
                  className='reusable-button'
                >
                  CANCEL TRANSACTION
                </button>
              </div>
            )}
            {props.completed && (
              <Modal show={props.completed} onClose={toggleModal}>
                  <p>{`Are you sure you want to pay, cancellation attracts a 5% $(${Number(0.05 * props.cost).toFixed(2)}) charge`}</p>
                  <button className='btnQ medium' style={{marginRight: '10px'}} onClick={handleParcelPayment}>{`pay $${props.cost} + $${Number(0.05 * props.cost).toFixed(2)}`}</button>
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
  return {
    traveler: state.travelers.travelerData,
  }
}
export default connect(mapStateToProps, { joinChatRoom })(Chat)
