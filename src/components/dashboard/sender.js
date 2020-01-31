import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderFooter from '../headerFooter'

// import io from 'socket.io-client'

// import {
//   ThemeProvider,
//   TextComposer,
//   Row,
//   IconButton,
//   AddIcon,
//   TextInput,
//   EmojiIcon,
//   SendButton,
//   Message,
//   MessageList,
//   MessageText,
// } from '@livechat/ui-kit'
import Modal from '../common/modal'
import { markSenderComplete } from '../../actions/transActions'
import { handleTransactionRequest } from '../../actions/transActions'
import DashboardHeader from './header'

// let socket
const SenderChat = props => {
  // const [messages, setMessages] = useState([])
  // const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [receiverModal, setReceiverModal] = useState(false)
  const [disabled, setDisabled] = useState(true)
  // const [headerText, changeHeader] = useState('')
  const [markCompleteModal, setMarkCompleteModal] = useState(false)
  const handleChange = (e) => {
    setName(e.target.value)
  }
  // useEffect(() => {

  //   if(props.trip){
  //     console.log(props.trip)
  //     setName(props.trip.username)
  //     setRoom(props.trip._id)

  //     socket = io('https://aqueous-ravine-50016.herokuapp.com/')
  //     // socket = io('http://localhost:8000')
  //     socket.emit('join', { name, room }, () => {
  //         console.log(name, room)
  //     })

  //     return() => {
  //       socket.emit('disconnect')
  //       socket.off()
  //     }

  //   }
  // }, [props.trip.username, props.trip._id])

  // useEffect(() => {
  //   socket.on('message', ({user, text}, callback) => {
  //     setMessages([...messages, text])
  //     console.log(messages)
  // })
  // })

  const openMarkCompletModal = () => {
    setMarkCompleteModal(true)
  }

  console.log(props)

  const markAsComplete = () => {
    console.log(props)
    const data = {
      id: props.trip._id,
      earning: props.trip.earning
    }
    props.markSenderComplete(data)
  }

  const handleAccept = (id, action) => {
    const data = {
      senderId: id,
      action: action
    }
    console.log(data)
    props.handleTransactionRequest(data)
    setDisabled(false)
  }
  const handleReceiver = () => {
    setReceiverModal(true)
  }
  const closeModal = () => {
    setReceiverModal(false)
    setMarkCompleteModal(false)
  }
  return (
    <HeaderFooter redirect={props.location}>
      <div className='dashboard-header'>
        <h2>
          Sender
          </h2>
      </div>
      <DashboardHeader />
      <div className="chat">
        <div className='chat-details'>
          {props.trip ? (
            <div>
              <h3>
                <span className='gray'>From </span>{props.trip.locationCity}, {props.trip.locationCountry}
                <br />
                <span className='gray'>To </span>  {props.trip.destinationCity}, {props.trip.destinationCountry}
              </h3>
              <h5>
                <span>
                  <span className='gray'>Sender</span>  {props.trip.username}
                </span>
                <br />
                <span>
                  <span className='gray'>Arrival date</span>  {props.trip.arrivalDate && props.trip.arrivalDate.split('T')[0]}
                </span>
                <br />
                <span>
                  <span className='gray'>Means of transportation</span>  {
                    props.trip.transport &&
                    props.trip.transport.charAt(0).toUpperCase() + props.trip.transport.slice(1)}
                </span>
                <br />
                <span>
                  <span className='gray'>Size of parcel</span>  {props.trip.parcelSize}
                </span>
                <br />
                <span>
                  <span className='gray'>Weight of parcel</span>  {props.trip.parcelWeight}
                </span>
                <br />
              </h5>

            </div>
          ) : <div> No receiver's details yet</div>}
          <div>
            <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
              className='reusable-button' onClick={() => handleAccept(props.trip._id, 'accept')}>{disabled ? `ACCEPT TRANSACTION` : `TRANSACTION ACCEPTED`}</button>
            <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
              className='reusable-button' disabled={disabled} onClick={handleReceiver}>VIEW RECEIVER'S DETAIL</button>
            <button style={{ color: 'white', backgroundColor: "#abcc71", border: "#abcc71", outline: 'none' }}
              className='reusable-button' disabled={disabled} onClick={openMarkCompletModal}>MARK AS COMPLETED</button>
            <button style={{ color: 'red', backgroundColor: "white", border: "white", outline: 'none' }}
              className='reusable-button'>DECLINE TRANSACTION</button>
          </div>
        </div>
        {/* <ThemeProvider>
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
            <TextComposer>
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
        </ThemeProvider> */}
        <div className="receiver-modal">
          <h2>Leave a message for the traveler</h2>
          <label>Subject</label>
          <input type="text" className="support_input" name="fullname" onChange={handleChange}></input>
          <br />
          <label>Text</label>
          <textarea className="support_input" name="address" onChange={handleChange}></textarea>
          <br />
          <button className="btnQ medium">Send message</button>
        </div>
      </div>
      {receiverModal && (
        <Modal show={receiverModal} onClose={closeModal}>
          {props.trip.receiver ? (
            <div>
              <h4>Receiver's name</h4> {props.trip.receiver.fullname}
              <h4>Receiver's Address</h4>{props.trip.receiver.address}
              <h4>Receiver's Number</h4>{props.trip.receiver.phone}
            </div>
          ) :
            <div>The traveler is yet to add the receiver's details</div>}
        </Modal>
      )}
      {markCompleteModal && (
        <Modal show={markCompleteModal} onClose={closeModal}>
          <div>Are you sure the parcel is delivered?. This is irreversible </div>
          <button className='btnQ' onClick={markAsComplete}>Yes, continue</button>
          <button className='btnQ' onClick={closeModal}>No</button>
        </Modal>
      )}
    </HeaderFooter>
  )
}
const mapStateToProps = (state) => {
  return {
    trip: state.trips.trip.data
  }
}
export default connect(mapStateToProps, { markSenderComplete, handleTransactionRequest })(SenderChat)