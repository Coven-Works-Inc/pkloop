import React, { useState, useEffect } from 'react';
import HeaderFooter from '../headerFooter'

const senderChat = (props) => {
    return(
        <HeaderFooter>
            <div className="chat">
            <div className='chat-details'>
                <h3>
                    <span className='gray'>From</span>
                    <br />
                    <span className='gray'>To</span>
                </h3>
                <h5>
                    <span>
                        <span className='gray'>Sender</span>
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Arrival date</span>
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Means of transportation</span>
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Size of parcel</span>
                    </span>
                    <br />
                    <span>
                        <span className='gray'>Weight of parcel</span>
                    </span>
                    <br />
                </h5>
                <div>
                    <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }}
                    className='reusable-button'>ACCEPT TRANSACTION</button>
                    <button style={{ color: 'white', backgroundColor: "#0071bc", border: "#0071bc", outline: 'none' }} 
                    className='reusable-button'>VIEW RECEIVER'S DETAIL</button>
                    <button style={{ color: 'white', backgroundColor: "#abcc71", border: "#abcc71", outline: 'none' }}
                    className='reusable-button'>MARK AS COMPLETED</button>
                    <button style={{ color: 'white', backgroundColor: "#00bdbe", border: "#00bdbe", outline: 'none' }}
                    className='reusable-button'>DECLINE TRANSACTION</button>
                </div>
            </div>
        </div>
        </HeaderFooter>
    )
}
export default senderChat