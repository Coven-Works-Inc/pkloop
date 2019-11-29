import React from 'react'

const Faqs = () => {
  return (
    <div>
      <div id='faqs'>
        <div className='faq1'>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className='faqitem'>
          <h3>Can I send a huge box?</h3>
          <i className='fas fa-question' />
        </div>
        <div className='faqitem'>
          <h3>Are boxes charged at the same rate as parcels?</h3>
          <i className='fas fa-question' />
        </div>
        <div className='faqitem'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            in veniam architecto eligendi eius assumenda asperiores ratione
            sapiente modi. Quas corrupti id asperiores vitae. Sapiente amet
            eveniet repudiandae, adipisci perspiciatis voluptates nulla, ab
            labore deserunt quis ipsa dolores! Voluptates, et!
          </p>
        </div>
        <div className='faqitem'>
          <h3>Does your services cover every country of the world?</h3>
          <i className='fas fa-question' />
        </div>
        <div className='faqitem'>
          <h3>Do you do express delivery?</h3>
          <i className='fas fa-question' />
        </div>
        <div>
          <button className='btnQ'>MORE QUESTIONS</button>
        </div>
      </div>
    </div>
  )
}

export default Faqs
