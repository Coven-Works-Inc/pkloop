import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderFooter from '../headerFooter'

const senderChat = (props) => {
    console.log(props)
    return(
        <HeaderFooter>
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
                        <span className='gray'>Traveler</span>  {props.trip.username}
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
const mapStateToProps = (state) => {
    console.log(state.trips)
    return {
        trip: state.trips.trip.data
    }
}
export default connect(mapStateToProps)(senderChat)