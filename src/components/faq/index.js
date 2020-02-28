import React, { Component } from 'react'

import HeaderFooter from '../headerFooter'
import './faq.css'

import { Link } from 'react-router-dom'
import FAQDocument from '../../assets/PKLOOP_FREQUENTLY_ASKED_QUESTIONS.pdf'

class index extends Component {
  state = {
    questions: [
      {
        active: true,
        question: <p>How does PKLoop work?</p>,
        answer: <p>PKLoop Connects Senders looking to ship parcels with Travelers already traveling to
        the destination. PKLoop facilitates package delivery within 12-48 hours at the lowest cost.
        Visit Our <Link to='/howitworks'>How It Works</Link> page for a more detailed description of the PKLoop process. Our Motto:
                          Good vibes only! Make money while you Travel the world. Monetize the space in your hand luggage
                          or suitcase. Make an extra $200-$400 with already scheduled travel plans. For Cargo and Container
                          Shipment: Individuals and Companies can freely advertise and list your upcoming shipment dates
        for Senders to find and contact you</p>
      },
      {
        active: false,
        question: <p>Is the PKloop app free to use?</p>,
        answer: <p>YES. PKLoop is 100% Free to access. Travelers list your trips for FREE, Cargo and Container Shipping Companies or Individuals can advertise and List your container shipment dates for FREE! For Senders, after you get matched with a traveler, agree on a transaction Fee and PKLoop collects payment on the traveler’s behalf.</p>
      },
      {
        active: false,
        question:
          <p>Why Use PKLoop as opposed to Traditional Shipping companies?</p>,
        answer: <p>Traditional Same-day and Express shipping options tend to be outrageously costly. Our app compares prices across the board, displays available cost options (you can also compare pricing using attached chart). PKLoop travelers save you at least 50% in shipping fees. ($14.99 to send a 1 lb package to Canada using PKLoop vs $65 using 2-Day Express Shipping)
        Using a PKLoop traveler means faster custom clearance (minutes or hours) as opposed to days or even weeks.</p>
      },
      {
        active: false,
        question: <p> Is PKLoop legal?</p >,
        answer: <p>YES. Anyone over the age of 18 can use the PKLoop Site as Sender, traveler, or recipient. You simply carry the item as you would do for a family member or a friend.</p>
      },
      {
        active: false,
        question: <p>What Safety Guidelines are in Place for PKLoop Users.</p>,
        answer: <p>Please visit our <Link to='/trust'>Trust and Safety</Link> Page</p>
      },
      {
        active: false,
        question: <p>How many people do you have on your platform?</p>,
        answer: <p>Our Platform is currently home to about 11000+ users and counting...</p>
      },
      {
        active: false,
        question: <p>Is PKLoop available on all app platforms?</p>,
        answer: <p>YES. PKLoop is available for use on iOS, Android and windows apps.</p>
      },
      {
        active: false,
        question:
          <p>How does my recipient get the package? I am skeptical about Package delivery</p>,
        answer: <p>From the airport, your traveler can hand carry your parcel directly to the recipient and confirm delivery. If the flight number is available, GPS tracking throughout the process gives you peace of mind on Traveler’s arrival. Sender, Traveler and Recipient codes must be entered and match to complete package exchange and finalize transaction completion.
        The sender has to guarantee that the item’s recipient will be present at the agreed time and place of delivery.</p>
      },
      {
        active: false,
        question:
          <p>How do I verify my phone number, reset my password OR delete my account</p>,
        answer: <p>If you forget your password, please click <Link to='/reset'>reset password</Link> on the <Link to='/login'>login page</Link> and we'll
        email you a secure password reset link. If you are having issues verifying your phone number,
        please email us <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a>. To delete your account, please send a request to our
        customer service team and we will facilitate your request</p>
      }
    ]
  }

  // <a href='/forgot' style="color: rgba(0, 189, 190)">

  toggleAnswer = index => {
    let question = { ...this.state.questions[index] }
    question.active = !question.active
    let questions = [...this.state.questions]
    questions[index] = question
    this.setState({
      questions: questions
    })
  }

  render() {
    return (
      <HeaderFooter redirect={this.props.location}>
        <div className='faq-banner'>Frequently Asked Questions</div>
        <div id='faqs' className='faqs'>
          {this.state.questions.map((question, key) => (
            <div key={key} className='faqitem'>
              <div
                onClick={() => this.toggleAnswer(key)}
                className={'question ' + (question.active ? 'active' : '')}
              >
                <div>{question.question}</div>
                <i className='fas fa-question' />
              </div>
              {question.active && (
                <div className='answer'>
                  <div>{question.answer}</div>
                </div>
              )}
            </div>
          ))}
          <div className='full-faq'>
            <p><a href={FAQDocument} target='_blank'>Download Full FAQ</a></p>
          </div>
        </div>
      </HeaderFooter>
    )
  }
}

export default index
