import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'

import './pages.css'

const TnS = (props) => {
  return (
    <div className='page-body'>
      <HeaderFooter redirect={props.location}>
        <Banner title='Trust & Safety' />
        <div className='page-container py-3'>
          <div className='py-2'>
            <h3>Trust and Safety</h3>
            <p className='trust-text'>
              Trust and Safety As part of our community of global senders and
              travelers, we have these few must-know tips to help you make the
              most of your experience. Scroll below for standards and
              expectations we’ve put in place to keep you safe.
            </p>
          </div>
          <div className='py-1'>
            <h3>Be Watchful</h3>
            <p className='trust-text'>
              Only deliver what You can see. Please, thoroughly check the
              content to be delivered, especially when it's a personal package.
              Never accept a closed package. Also, you have the right to refuse
              delivery at any time. Close up the package yourself after having
              confirmed that the contents are legitimate. In the event of doubt
              of suspect behavior on the part of the Sender, take pictures,
              immediately refuse the delivery and let us know at{' '}
              <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com.</a>
            </p>
          </div>
          <div className='py-1'>
            <h3>Profile Verification</h3>
            <p className='trust-text'>
              Users must complete a 2-step verification process to ensure that
              all parties are real people. You will be asked to verify your
              account via email and SMS. This helps protect our Members from
              fake accounts and spam. Your email address and phone number will
              be kept private.
            </p>
          </div>
          <div className='py-1'>
            <h3>Traveler Communication and Safety</h3>
            <br />
            <h4>Sender: </h4>
            <p className='trust-text'>
              We recommend senders, recipients and travelers meet in a public
              place, such as an airport or hotel lobby. Use the app messenger to
              coordinate a mutually convenient time and place to meet.
            </p>
            <br />
            <b>
              The sender has to guarantee that the item’s recipient will be
              present at the agreed time and place of delivery.
            </b>
            <br />
            <br />
            <h4>Traveler: </h4>
            <p className='trust-text'>
              We deter traveler theft of goods by processing a $0.01 collateral
              HOLD on a traveler's commission payout credit card or bank
              account. If a Traveler does not make good faith effort to deliver
              the package properly, or if PKLoop verifies for any reason that
              the Traveler steals the package and does not follow through with
              delivery, PKLoop expressly reserves all rights under applicable
              law to recover payment as well as all of its costs and expenses
              incurred, including billing Traveler for package value, reasonable
              attorneys' or other professionals' fees (collections), in pursuing
              such payment (s). Collection activity will affect and damage your
              credit score.
            </p>
          </div>
          <div className='py-1'>
            <h3>Risk of Loss and Insurance</h3>
            <p className='trust-text'>
              PKLoop recommends that Senders and Travelers procure their own
              insurance to cover the cost and expenses relating to a parcel.
              PKLoop may, but is not obligated to recommend or to offer links
              where Senders and Travelers may procure insurance relating to
              their trips. Optional Parcel Insurance available at this time
              through InsureSHip. Claims can be filed
              <a
                href='https://claims.insureship.com/lookup '
                style={{ textDecoration: 'none' }}
              >
                {' '}
                here
              </a>{' '}
              Phone: 866-701-3654 Email:{' '}
              <a href='mailto:claims@insureship.com'>claims@insureship.com</a>
            </p>
          </div>
          <div className='py-1'>
            <h3>User Ratings</h3>
            <p className='trust-text'>
              By rating your experience, it allows your voice to be heard,
              supports transparency and helps new users confidently send parcels
              and travel with PKLoop for the first time. Both senders and
              travelers should leave a review after a completed delivery. If you
              encounter an issue with a user, please contact our team at
              contact@pkloop.com
            </p>
          </div>
          <div className='py-1'>
            <h3>No Tolerance Policy</h3>
            <p className='trust-text'>
              PKLoop has a no tolerance policy for harassment or illegal
              activity of any kind. We may take action if a user does something
              to diminish trust within the community, such as theft, canceling
              multiple orders or deliveries, transacting outside of PKLoop or
              spamming accounts.
            </p>
          </div>
          <div className='py-1'>
            <h3>Payment Methods</h3>
            <p className='trust-text'>
              PKLoop accepts a range of payment methods including ACH, payment
              with checking/savings accounts, Visa, MasterCard and American
              Express, with more options available soon. For more information on
              accepted payment methods, please visit Stripe Connect Payment
              (need link).
            </p>
          </div>
          <div className='py-1'>
            <h3>Escrow Payment</h3>
            <p className='trust-text'>
              When you accept a travel match offer from a traveler, we will
              charge your payment card for the total order amount. This money is
              kept safe in our escrow account and is transferred to your
              traveler within 24 hours only when your recipient collects item
              (confirmed through traveler-recipient code match you send to your
              recipient){' '}
            </p>
          </div>
          <div className='py-1'>
            <h3>Refund</h3>
            <p className='trust-text'>
              You may cancel your request at any point before a traveler accepts
              to transport your parcel. Once you accept a traveler to transport
              your parcel, you are committed to paying the total order amount
              and your payment will be collected/held. If your traveler declines
              your parcel for suspicious reasons (picture proof
              required/submitted), you are eligible for a refund minus platform
              fees; If your traveler’s flight gets delayed over 24 hours, you
              are eligible for a full refund if your package is not shipped.
            </p>
          </div>
          <div className='py-1'>
            <h3>Priority Response</h3>
            <p className='trust-text'>
              Our dedicated team are on hand to resolve any issue that arises
              throughout the order and delivery process. Expect an answer within
              24 hours. For trust and safety concerns, we will expedite your
              ticket for a fast resolution{' '}
              <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a>
            </p>
          </div>
          <div className='py-1'>
            <h3> Code of Conduct</h3>
            <p className='trust-text'>
              Our dedicated team are on hand to resolve any issue that arises
              throughout the order and delivery process. Expect an answer within
              24 hours. For trust and safety concerns, we will expedite your
              ticket for a fast resolution{' '}
              <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a>
            </p>
          </div>
          <div className='py-1'>
            <h3> Respect</h3>
            <p className='trust-text'>
              PKLoop relies on the foundation of mutual respect. When
              communicating with your sender or traveler, treat them as you
              would like to be treated. Reports of abusive behavior may result
              in your account being blocked.
            </p>
          </div>
          <div className='py-1'>
            <h3> Be Responsive</h3>
            <p className='trust-text'>
              Senders and travelers are expected to reply to messages within 24
              hours of receipt. Travelers should update senders with a delivery
              update within 24 hours of their arrival. Responding to messages
              promptly encourages a positive rating, which is displayed publicly
              on your profile.
            </p>
          </div>
          <div className='py-1'>
            <h3> Safety</h3>
            <p className='trust-text'>
              Do your part to maintain a safe community by keeping all payments
              and communication on the PKLoop Site. We provide 2-step
              verification, secure payments and 24-hour customer support to
              protect you from fraudulent activity. Make sure that you
              understand and pay all applicable customs fees.
            </p>
          </div>
          <div className='py-1'>
            <h3> Secure Profile</h3>
            <p className='trust-text'>
              Complete your user profile to get the most out of your experience.
              Senders will prefer to select from travelers with a profile photo
              and vice versa. Your personal information, such as your email
              address, phone number, home address and payment details are kept
              private at all times.
            </p>
          </div>
        </div>
      </HeaderFooter>
    </div>
  )
}

export default TnS
