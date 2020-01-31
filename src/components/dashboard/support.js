import React, { useState, useEffect } from 'react'
import Modal from '../common/modal'
import { connect } from 'react-redux'
import { submitTicket, fetchTickets } from '../../actions/supportActions'
import './support.css'
import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'

import Notification from './notification'

const Support = props => {
  const [state, setState] = useState({
    modalOpen: false,
    subject: '',
    message: ''
  })

  useEffect(() => {
    props.fetchTickets()
  }, [])

  const onButtonClick = () => {
    setState({
      modalOpen: true
    })
  }
  const submitHandler = e => {
    e.preventDefault()

    const supportData = {
      subject: state.subject,
      message: state.message
    }

    props.submitTicket(supportData)

    setState({
      modalOpen: false
    })
  }
  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const onModalClose = () => {
    setState({
      modalOpen: false
    })
  }

  const {
    tickets: { tickets }
  } = props

  console.log(tickets)

  return (
    <HeaderFooter redirect={props.location}>
      <div className='dashboard-header'>
        <h2>
          Support
          </h2>
      </div>
      <div>
        <DashboardHeader />
        {/* <Notification message="Sender wants you to deliver a parcel" /> */}
        <div className='support'>
          <div className='support-header'>
            <h2>My Support Tickets</h2>
            <button className='btnSmall' onClick={onButtonClick}>
              Open a new ticket
        </button>
          </div>
          <div className='table-header'>
            <p>Status</p>
            <p>Subject</p>
            <p>Ticket ID</p>
            <p>Created At</p>
            <p></p>
          </div>

          {tickets === undefined ? (
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
              {' '}
              Loading ...{' '}
            </h3>
          ) : tickets.length === 0 ? (
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
              You do not any Tickets yet
        </h3>
          ) : (
                tickets.map((ticket, index) => (
                  <div className='table-row'>
                    <p>{ticket.status}</p>
                    <p>{ticket.subject}</p>
                    <p>{ticket.ticketId}</p>
                    <p>{ticket.createdAt.split('T')[0]}</p>
                    <p className='open'>See details</p>
                  </div>
                ))
              )}
          <Modal show={state.modalOpen} onClose={onModalClose}>
            <h2>Open a new support ticket</h2>
            <div className='support-form__group'>
              <form onSubmit={submitHandler}>
                <input
                  type='text'
                  className='support_input'
                  name='subject'
                  placeholder='Subject'
                  onChange={onChangeHandler}
                  required=''
                />
                <textarea
                  className='support_textarea'
                  name='message'
                  onChange={onChangeHandler}
                  placeholder='How can we help you on this lovely day ?'
                ></textarea>
                <button
                  className='btnQ medium'
                  type='submit'
                  style={{ fontSize: '1rem' }}
                >
                  Submit
            </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </HeaderFooter>
  )
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  }
}

export default connect(mapStateToProps, { fetchTickets, submitTicket })(Support)
