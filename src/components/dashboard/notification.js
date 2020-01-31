import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'
import { notify } from 'react-notify-toast'

const Notification = (props) => {

    return (
        <div className="notifications">
            <p>Created Date</p>
            <p>{props.message}</p>
            <button 
            style={{ textDecoration: 'none', color: 'rgba(0, 113, 188)' }}
            onClick={props.showTripDetails}>
             View details
            </button>
        </div>
    )
}

export default Notification;