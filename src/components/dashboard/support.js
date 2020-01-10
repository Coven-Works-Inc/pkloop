import React, { useState } from 'react'
import Modal from '../common/modal'

const Support = () => {
    const [state, setState] = useState({
        modalOpen: false
    })
    return (
        <div className="support">
            <div className="support-header">
                <h2>My Support Tickets</h2>
                <button className="btnSmall">Open a new ticket</button>
            </div>
            <div className="table-header">
                <p>Status</p>
                <p>Subject</p>
                <p>Ticket ID</p>
                <p>Last updated</p>
                <p></p>
            </div>
            <div className="table-row">
                <p>Open</p>
                <p>Payment Confirmation</p>
                <p>#HPKL-240-16901</p>
                <p>Oct 25, 2019, 12:52:02 PM</p>
                <p className="open">See details</p>
            </div>
            <Modal show={state.modalOpen}></Modal>
        </div>
    )
}

export default Support;