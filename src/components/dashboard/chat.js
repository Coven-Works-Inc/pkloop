import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Import megged
// import StripeCheckout from '../payment'
import StripeCheckout from 'react-stripe-checkout'
// import HeaderFooter from '../headerFooter'
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
//   FixedWrapper
// } from '@livechat/ui-kit'
import './chat.css'
import Button from '../common/button'

const Chat = props => {
  const [state, setState] = useState({
    headerText: 'Sender details'
  })

  console.log(props)
  if (props.traveler) {
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
                <button
                  style={{
                    color: 'white',
                    backgroundColor: '#0071bc',
                    border: '#0071bc',
                    outline: 'none'
                  }}
                  className='reusable-button'
                >
                  ENTER RECEIVER'S DETAILS
                </button>
                <button
                  onClick={() => props.modal('tip')}
                  style={{
                    color: 'white',
                    backgroundColor: '#0071bc',
                    border: '#0071bc',
                    outline: 'none'
                  }}
                  className='reusable-button'
                >
                  ADD A TIP(OPTIONAL)
                </button>
                <button
                  onClick={() => props.modal('insurance')}
                  style={{
                    color: 'white',
                    backgroundColor: '#abcc71',
                    border: '#abcc71',
                    outline: 'none'
                  }}
                  className='reusable-button'
                >
                  ADD INSURANCE(OPTIONAL)
                </button>
                <button
                  onClick={() => props.markTrans()}
                  style={{
                    color: 'white',
                    backgroundColor: '#00bdbe',
                    border: '#00bdbe',
                    outline: 'none'
                  }}
                  className='reusable-button'
                >
                  CONTINUE TO PAYMENT
                </button>
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
              <StripeCheckout
                amount={props.cost * 100}
                image={require('../../assets/payment-logo.png')}
                stripeKey='pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa'
                description='Connect with a traveler'
                name='Make payment to continue'
                locale='auto'
                label='Pay With Card to Continue'
                panelLabel={'Pay $' + props.cost}
                token={() => props.history.push('/dashboard/transactions')}
              />
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
          <p>Chat goes here</p>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    traveler: state.travelers.travelerData
  }
}
export default connect(mapStateToProps)(Chat)
