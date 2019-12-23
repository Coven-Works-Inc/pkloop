import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import './howitworks.css'
import Cta from '../home/cta_banner'

const index = () => {
  return (
    <HeaderFooter>
      <Banner title='Same Day Global Shipping!' />
      <div className='top'>
        <div className='top-how-left'>
          <h3 className='how-h3'>DO YOU HAVE ENOUGH TIME TO PLAN AHEAD? </h3>
          <h3 className='how-h3 py-1'>
            INDIVIDUALS OR AGENCIES SHIPPING CONTAINERS OR CARGO?{' '}
          </h3>
          <h3 className='how-h3 py-1'>
            LIST YOUR DETAILS/SERVICES ON PK LOOP FOR FREE.{' '}
          </h3>
          <h3 className='how-h3 py-1'>
            CUSTOMERS LOOKING TO USE THESE SERVICES, FIND THEM HERE FOR FREE!
          </h3>
          <br />
          <p>
            Border Controls: Please learn about the local legislation in the
            countries of origin and destination. These costs will have to be
            paid by the Sender. (Enter amount under TIP function)
          </p>
          <br />
          <p>
            Possible Check-in questions while boarding an international flight:
            As a traveler, the item will be considered yours until hand
            delivered to Sender’s recipient.
          </p>
          <br />
          <p>
            You simply carry the item as you would do for a family member or a
            friend. All packages without exclusion must be inspected. For any
            questions, do not hesitate to contact us
          </p>
          <br />
          <p>
            Be Watchful, Only deliver what You can see. Please, thoroughly check
            the content to be delivered, especially when it's a personal
            package. Never accept a closed package. Also, you have the right to
            refuse delivery at any time. Close up the package yourself after
            having confirmed that the contents are legitimate. In the event of
            doubt of suspect behavior on the part of the Sender, immediately
            refuse the delivery and let us know by e-mail at{' '}
            <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a>
          </p>
        </div>
        <div className='top_right'>
          <h3>
            Are you looking to travel, send or receive a package? Follow the
            steps below:
          </h3>
          <br />

          <h3>For Senders:</h3>
          <ol className='how-list'>
            <li>
              Search for a traveler by City/Country, Departure Date or Airport
              Code. A list of travelers who match your search options is
              displayed.{' '}
            </li>
            <li>
              Once matched (i.e. a traveler accepts your request, Connect with
              these travelers through the secured in-app messenger.{' '}
            </li>
            <li>
              PKLoop holds $$$ amount based on package dimensions/weight you
              entered. You can agree on app suggested fees or negotiate with
              traveler (Tip). This sum is then locked in until delivery, at
              which point the traveler is paid.
            </li>
            <li>
              Meet Traveler in a public place (hotels or airports) to handover
              package at anytime up until 2 hours before Traveler’s departure.
            </li>
            <li>Leave a rating for the traveler.</li>
          </ol>
          <br />
          <p>
            If no travelers are available (in the event of a less traveled
            itinerary), post your Sender request so that future travelers will
            be able to contact you.
          </p>
          <br />
          <p style={{ color: 'red' }}>
            The sender has to guarantee that the item’s recipient will be
            present at the agreed time and place of delivery.
          </p>
          <br />
          <h3>For Travelers:</h3>
          <ol className='how-list'>
            <li>
              Post your Trip (Travel Dates, Departure/Arrival City, Country or
              Airport Code) using drop down menu. (In the comments box, you can
              enter more information such as Departure time or Flight number,
              One-way or roundtrip, regularly traveled route etc).{' '}
            </li>
            <li>
              {' '}
              A list of Senders is immediately displayed based on your itinerary
              (matched). Use in-app messenger to get in touch with matched
              Senders.
            </li>
            <li>
              {' '}
              PKLoop holds collateral $$ amount based on package
              dimensions/weight a Sender entered. You can Agree on app suggested
              fees or negotiate with Sender for a higher amount. Once agreed,
              submit the negotiated amount through the secure payment module.{' '}
            </li>
            <li>
              Confirm delivery arrangements, (preferably public places such as
              airports){' '}
            </li>
            <li>
              Travel Safe, Deliver parcel, (Enter match code) in order to
              complete delivery and get paid.{' '}
            </li>
            <li>Leave a rating for the Sender and Recipient.</li>
          </ol>

          <br />
          <p>
            If there are no matched senders at that time, (in the event of a
            less-traveled itinerary), trip remains online so that future Senders
            will be able to contact you.
          </p>
          <br />
          <p className='how-p'>
            Sample Fees Calculator Letters and documents within USA and Canada:
            $14.99 Packages within the USA ($14.99 + $1.5/pound) For example.
            Sending a 10 lb parcel will cost $14.99 + ($1.5/lb x10 lbs) = $29.99
            Letters and documents internationally: $24.99 up to $49.99
            (Travelers allowed to set pricing in this range) International
            Packages ($5.99/pound). For example. Sending a 10 lb parcel will
            cost $5.99/lb x10 lbs = $59.99
          </p>
          <br />
        </div>
      </div>
      <Cta />
    </HeaderFooter>
  )
}

export default index
