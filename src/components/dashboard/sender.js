import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderFooter from '../headerFooter'
import io from 'socket.io-client'
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

  let socket
const SenderChat = props => {
    const [messages, setMessages] = useState([])
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {

      if(props.trip){
        console.log(props.trip)
        setName(props.trip.username)
        setRoom(props.trip._id)
  
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
    }, [props.trip.username, props.trip._id])

    useEffect(() => {
      socket.on('message', ({user, text}, callback) => {
        setMessages([...messages, text])
        console.log(messages)
    })
    })

    const handleAccept = () => {
      setDisabled(false)
    }
    return (
        <HeaderFooter>
          {console.log(name, room)}
            <div className="chat">
            <div className='chat-details'>
                {props.trip && (
                    <div>
                        <h3>
                    <span className='gray'>From</span>{props.trip.locationCity}, {props.trip.locationCountry}
                    <br />
                    <span className='gray'>To</span>  {props.trip.destinationCity}, {props.trip.destinationCountry}
                </h3>
                <h5>
                    <span>
                        <span className='gray'>Sender</span>  {props.trip.username}
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Arrival date</span>  {props.trip.arrivalDate}
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Means of transportation</span>  {props.trip.transport}
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
                )}
                <div>
                    <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                    className='reusable-button' onClick={handleAccept}>{disabled ? `ACCEPT TRANSACTION` : `TRANSACTION ACCEPTED`}</button>
                    <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }} 
                    className='reusable-button' disabled={disabled}>VIEW RECEIVER'S DETAIL</button>
                    <button style={{ color: 'white', backgroundColor: "#abcc71", border: "#abcc71", outline: 'none' }}
                    className='reusable-button' disabled={disabled}>MARK AS COMPLETED</button>
                    <button style={{ color: 'red', backgroundColor: "white", border: "white", outline: 'none' }}
                    className='reusable-button'>DECLINE TRANSACTION</button>
                </div>
            </div>
            <ThemeProvider>
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
        </ThemeProvider>
        </div>
        </HeaderFooter>
    )
}
const mapStateToProps = (state) => {
    return {
        trip: state.trips.trip.data
    }
}
export default connect(mapStateToProps, null)(SenderChat)