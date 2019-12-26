import React from 'react'
// import HeaderFooter from '../headerFooter'
// import Banner from '../common/banner'
// import Card from '../common/card'
// import travelData from '../../travelers.json'

import Jeph from '../../assets/Jeph.jpg'
// import Jephtah from '../../assets/jephtah.JPG'

import './travel.css'

const Travelers = (props) => {

  console.log(props)

  //This function helps the user filter by location
  const getLocation = e => {
    let keyword = e.target.value.toUpperCase()
    const filtered = this.state.travelers.filter(traveler => {
      return traveler.location.toUpperCase().indexOf(keyword) > -1
    })

    this.setState({
      filtered
    })
  }

  //This function helps the user filter by destination
  const getDestination = e => {
    let keyword = e.target.value.toUpperCase()
    const filtered = this.state.travelers.filter(traveler => {
      return traveler.destination.toUpperCase().indexOf(keyword) > -1
    })

    this.setState({
      filtered
    })
  }

  const getTravellers = () => {
    let travelersList = [];
    props.travelers.map((traveler, key) => (
      travelersList.push(
        <div key={key} className='card'>
          <div className='card-left'>
            <img
              src={Jeph}
              alt=''
              style={{
                height: '150px',
                maxWidth: '100%'
              }}
            />
            <p style={{ marginTop: '2px' }}>{traveler.name}</p>

            <p className='button' onClick={props.toggle}>connect</p>
          </div>
          <div className='card-right'>
            <h3><span className="gray">From</span> {traveler.location}</h3>
            <h3><span className="gray">To</span> {traveler.destination}</h3>
            <p><span className="gray">Arrival Date</span> {traveler.arrival}</p>
            <p><span className="gray">Stopovers</span> {traveler.stopovers ? traveler.stopovers : 'None'}</p>
            <p><span className="gray">Means of transportation</span> {traveler.transport}</p>
            <p><span className="gray">Size of parcel willing to carry</span> {traveler.parcelSize}</p>
            <p><span className="gray">Weight of parcel willing to carry</span> {traveler.parcelWeight}</p>
          </div>
        </div>
      )
    ))
    return travelersList;
  }

  return (
    <section id='travel-container'>
      {getTravellers()}
    </section>
  )
}

export default Travelers
