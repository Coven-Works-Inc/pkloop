import React from 'react'
import { Link } from 'react-router-dom'

import './dashboard.css'

const Notification = (props) => {
    console.log(props)
    return (
        <div className="notifications">
            <p>Created Date</p>
            <p>{props.message}</p>
            <button>
                <Link to={{
                    pathname: '/dashboard/senderchat',
                    redirect: '/login'
                }} style={{ textDecoration: 'none', color: 'rgba(0, 113, 188)' }}>View Details</Link></button>
            {/* <button className="accept">Accept</button>
            <button className="decline">Decline</button> */}
        </div>
    )
}

export default Notification;