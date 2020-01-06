import React, { Component } from 'react'

class Faqs extends Component {
  state = {
    questions: [
      {
        active: true,
        question: 'HOW DOES IT WORK?',
        answer: `PKLoop Connects Senders looking to ship parcels with Travelers already traveling to the destination. PKLoop facilitates package delivery within 12-48 hours at the lowest cost. Visit Our HOW IT WORKS page (please insert link) for a more detailed description of the PKLoop process. Our Motto: Good vibes only! Make money while you Travel the world. 
        
        Monetize the space in your hand luggage or suitcase. Make an extra $200-$400 with already scheduled travel plans. 


        For Cargo and Container Shipment: Individuals and Companies can freely advertise and list your upcoming shipment dates for Senders to find and contact you`
      },
      {
        active: false,
        question: 'Is the PKloop app free to use?',
        answer: `YES. PKLoop is 100% Free to access. Travelers list your trips for FREE, Cargo and Container Shipping Companies or Individuals can advertise and List your container shipment dates for FREE! For Senders, after you get matched with a traveler, agree on a transaction Fee and PKLoop collects payment on the traveler’s behalf. `
      },
      {
        active: false,
        question:
          'Why Use PKLoop as opposed to Traditional Shipping companies?',
        answer: `Traditional Same-day and Express shipping options tend to be outrageously costly. Our app compares prices across the board, displays available cost options (you can also compare pricing using attached chart). PKLoop travelers save you at least 50% in shipping fees. ($14.99 to send a 1 lb package to Canada using PKLoop vs $65 using 2-Day Express Shipping)
        Using a PKLoop traveler means faster custom clearance (minutes or hours) as opposed to days or even weeks.`
      },
      {
        active: false,
        question: 'Is PKLoop legal?',
        answer: `YES. Anyone over the age of 18 can use the PKLoop Site as Sender, traveler, or recipient. You simply carry the item as you would do for a family member or a friend.`
      }
    ]
  }

  toggleAnswer = index => {
    let question = { ...this.state.questions[index] }
    question.active = !question.active
    let questions = [...this.state.questions]
    questions[index] = question
    this.setState({
      questions: questions
    })
  }

  render () {
    return (
      <div id='faqs' className='faqs'>
        <h2>Frequently Asked Questions</h2>
        {this.state.questions.map((question, key) => (
          <div key={key} className='faqitem'>
            <div
              onClick={() => this.toggleAnswer(key)}
              className={'question ' + (question.active ? 'active' : '')}
            >
              <h3>{question.question}</h3>
              <i className='fas fa-question' />
            </div>
            {question.active && (
              <div className='answer'>
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div>
          <button className='btnQ'>MORE QUESTIONS</button>
        </div>
      </div>
    )
  }
}

export default Faqs
