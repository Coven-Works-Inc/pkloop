import React from 'react'

const Balance = () => {
    return (
        <div className="balance-section">
            <div className="amount">
                <p>Amount made so far</p>
                <h2>$4500</h2>
            </div>
            <div className="balance">
                <div className="left-side">
                    <p>My PKLoop Balance</p>
                    <h2>$2000</h2>
                </div>
                <div className="right-side">
                    <button>Withdraw</button>
                    <button>Fund Balance</button>
                </div>
            </div>
        </div>
    )
}

export default Balance;
