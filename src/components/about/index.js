import React from 'react'
import HeaderFooter from '../headerFooter'
import Cta from '../home/cta_banner'

import './about.css'
import Human from '../../assets/about_img.jpg'

const About = (props) => {
  return (
    <div className="about-body">
      <HeaderFooter redirect={props.location}>
        <div className='about-banner'>
          <div className='about-bannertext'>
            <p>
              We are on a mission to help people <br /> access the world.
          </p>
          </div>
        </div>
        <div className='top'>
          <div className='top_left'>
            <h2>
              Economy-sharing is at an all-time frenzy. Our Founder knows life can be a
              balancing act between unplanned emergencies, importance of Same-Day Delivery,
               rapid transit times as well as saving on shipping.
          </h2>
          </div>
          <div className='top_right'>
            <p>
              Making choices that are good for you, your family, your wallet,
              and the planet can be tough, and it usually feels like something has to give.
              Our Founder experienced firsthand how same-day global shipping has never been available.
          </p>
            <br />
            <p>
              Desperation and an excruciating crucial financial decision led to this idea.
          </p>
            <br />
            <p>
              The Need for PKLoop occurred 2 months ago on a return international trip.
              A family member's passport that was mistakenly checked-in,
              cost $1450 to get the passport back to its origin and
              purchase new travel tickets resulting from missed flights.
              This was a hard choice to make considering the $1450
              unexpected expenditure was budgeted for a mortgage payment and student loans.
          </p>
            <br />
            <p>
              PKLoop’s mission is to connect senders with travelers on a platform
              that facilitates parcel exchange in as little as 12-48 hours at a
              fraction of the cost of the available services.
              The PKLoop experience provides a community of users who can take
              advantage of every day travel while providing services to
              help each other access the world in an economy-friendly sharing industry.
          </p>
            <br />
            <p>
              Early discussion and feedback show there’s an
              abundance of users vying for affordable 24-hour global
              delivery service. Feedback shows tremendous excitement about this service.
              Same-day delivery and affordable shipping out of state and internationally are unavailable!
          </p>
            <br />
            <p>
              Several folks still rely on making phone calls asking
              "Do you know anyone traveling to the country or shipping cargo to the country?
              The app will facilitate these needs and provide solutions.
          </p>
            <br />
            <ul className="about-list">
              <li>Low shipping cost</li>
              <li>Fast shipping and same-Day Shipping</li>
              <li>Reducing the carbon footprint. Limited ecofriendly shipping options.</li>
              <li>Peer to Peer transactions bring back the human touch/value.</li>
              <li>Free platform for Listing of personal travel itineraries or cargo company shipping schedules</li>
              <li>Free platform to search for travelers and companies available to carry a parcel.</li>
            </ul>
            <br />
            <p style={{ color: '#0071be', fontWeight: 'bold' }}>
              With PKLoop travelers can
              monetize extra space in their suitcases and Senders can get their parcels delivered faster and safer.
          </p>
          </div>
        </div>
        <div className='mission'>
          <div className='mission_left'>
            <img src={Human} alt='' />
          </div>
          <div className='mission_right'>
            <h2>Our Mission</h2>
            <p>
              PKLoop’s mission is to connect senders with travelers on a platform
              that facilitates parcel exchange in as little as 12-48 hours at a
              fraction of the cost of the available services.
          </p>
            <br />
            <p>
              The PKLoop experience is to provide a community of users who can
              take advantage of every day travel and provide services to help each
              other access the world in an economy-friendly sharing industry
          </p>
          </div>
        </div>
        <Cta />
      </HeaderFooter>
    </div>
  )
}

export default About
