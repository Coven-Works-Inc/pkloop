import React, { useState } from 'react'
import Modal from '../common/modal'
import { connect } from 'react-redux'
import { submitTicket } from '../../actions/supportActions'
import './support.css'

const Support = props => {
  const [state, setState] = useState({
    modalOpen: false,
    subject: '',
    bodyText: ''
  })
  const onButtonClick = () => {
    setState({
      modalOpen: true
    })
  }
  const submitHandler = e => {
    e.preventDefault()

    const supportData = {
      subject: state.subject,
      message: state.bodyText
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
  return (
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
        <p>Last updated</p>
        <p></p>
      </div>
      <div className='table-row'>
        <p>Open</p>
        <p>Payment Confirmation</p>
        <p>#HPKL-240-16901</p>
        <p>Oct 25, 2019, 12:52:02 PM</p>
        <p className='open'>See details</p>
      </div>
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
              name='bodyText'
              onChange={onChangeHandler}
              placeholder='Enter a Brief description'
            ></textarea>
            <button className='btnQ medium' type='submit'>
              Send
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default connect(null, { submitTicket })(Support)
