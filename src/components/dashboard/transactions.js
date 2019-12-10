import React from 'react';

const Transactions = () => {
    return (
        <div className="transactions">
            <div className="table-header">
                <p>Status</p>
                <p>With</p>
                <p>Your role</p>
                <p>Last message</p>
                <p></p>
            </div>
            <div className="table-row">
                <p className="completed">Completed</p>
                <p>Sheldon Cooper</p>
                <p>Sender</p>
                <p>Oct 25, 2019, 12:52:02 PM</p>
                <p className="open">Open</p>
            </div>
            <div className="table-row">
                <p className="pending">Pending</p>
                <p>Sheldon Cooper</p>
                <p>Sender</p>
                <p>Oct 25, 2019, 12:52:02 PM</p>
                <p className="open">Open</p>
            </div>
            <div className="table-row">
                <p className="canceled">Declined/Canceled</p>
                <p>Sheldon Cooper</p>
                <p>Sender</p>
                <p>Oct 25, 2019, 12:52:02 PM</p>
                <p className="open">Open</p>
            </div>
            <div className="table-row traveler">
                <p className="completed">Completed</p>
                <p>Sheldon Cooper</p>
                <p>Traveler</p>
                <p>Oct 25, 2019, 12:52:02 PM</p>
                <p className="open">Open</p>
            </div>
        </div>
    )
}

export default Transactions;