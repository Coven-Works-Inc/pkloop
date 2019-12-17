import React, { Component } from 'react'

import HeaderFooter from '../headerFooter'
import './faq.css'

class index extends Component {
  state = {
    questions: [
      {
        active: true,
        question: 'Can I send a huge box?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Are boxes charged at the same rate as parcels?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Are you in Asia?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Do you have a physical office?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Do you do express delivery?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'How many people do you have on your platform?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Do you have insurance?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'Do your services cover any country of the world?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
      },
      {
        active: false,
        question: 'What other kind of service do you provide?',
        answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique in veniam architecto eligendi eius assumenda asperiores
              ratione sapiente modi.Quas corrupti id asperiores vitae.Sapiente
              amet eveniet repudiandae, adipisci perspiciatis voluptates nulla,
              ab labore deserunt quis ipsa dolores! Voluptates, et!`
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
      <HeaderFooter>
        <div className='faq-banner'>Frequently Asked Questions</div>
        <div id='faqs' className='faqs'>
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
        </div>
      </HeaderFooter>
    )
  }
}

export default index
