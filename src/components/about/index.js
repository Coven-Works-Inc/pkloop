import React from 'react'
import HeaderFooter from '../headerFooter'
import Cta from '../home/cta_banner'

import './banner.css'
import Human from '../../assets/about_img.jpg'

const About = () => {
  return (
    <HeaderFooter>
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
            Economy-sharing is at an all-time frenzy. Our Founder Besy knows
            life can be a balancing act between unplanned emergencies, time
            urgency and making a difference with rapid transit times as well as
            shipping cost savings
          </h2>
        </div>
        <div className='top_right'>
          <p>
            Making choices that are good for you, your family, your wallet, and
            the planet can be tough, and it usually feels like something has to
            give. Besy experienced firsthand how an everyday convenience isn’t
            always readily available.{' '}
          </p>
          <br />
          <p>
            Besy’s sister Tesa forgot to take out her passport (with travel visa
            to Belgium and NYC) when Tesa asked Besy to assist with some of her
            luggage and transport her suitcase two days ahead of Tesa’s
            scheduled departure from Cameroon to Belgium.
          </p>
          <br />
          <p>
            Once Besy took off from Cameroon, Tesa realized her passport had
            been checked in with Besy’s luggage. Besy was only aware of the
            unfortunate circumstance 21 hours later after arriving at her
            destination. In effort to return Tesa’s passport to Cameroon just in
            time and prevent forfeiture of the previous itinerary, Besy found
            herself asking travelers at the airport if they were travelling to
            Cameroon; she was unable to find a traveler heading to Cameroon. The
            gloomy experience left Besy feeling dejected and uneasy about the
            unexpected costs to utilize DHL (costs $151 3-5 day transit time)
            and new tickets costs over $1300 to reschedule Tesa’s flight. In
            total, it costs $1450 to get the passport back to Tesa and purchase
            new tickets. A hard choice to make considering the $1450 unexpected
            expenditure was Besy’s mortgage payment.
          </p>
          <br />
          <p>
            Feeling uneasy all week, Besy began to brainstorm about shipping
            options that could facilitate sending/receiving of documents/gifts
            without the long transit times/expensive costs.
          </p>
          <br />
          <p style={{ color: '#0071be', fontWeight: 'bold' }}>
            The PKLoop idea was conceived a few days later where travelers can
            monetize extra space in their suitcases.
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
  )
}

export default About
