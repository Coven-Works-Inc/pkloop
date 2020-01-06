import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './payment.css'

const Payment = (props) => {
  return (
    <div className='payment-container'>
      <StripeCheckout
        image={require('../../assets/payment-logo.png')}
        stripeKey="pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa"
        description="Connect with a traveler"
        name="Make payment to continue"
        locale="auto"
        token={() => props.history.push('/login')}
      />
    </div>

    // <div className='payment-container'>
    //   <div className='payment-box'>
    //     {/* <div className='top-form'> */}
    //     <div className="close-button">
    //       <i className="material-icons">close</i>
    //     </div>
    //     <div className="payment-logo">
    //       <img
    //         src={require('../../assets/payment-logo.png')}
    //         className='logo'
    //         alt=''
    //       />
    //     </div>
    //     {/* </div> */}

    //     <div className="form-text">
    //       <div>
    //         <h2>Make payment to continue</h2>
    //         <p>Connect with a traveler</p>
    //       </div>
    //     </div>

    //     <form>
    //       <div className="form-body">
    //         <div className="input-box mb-input">
    //           <label><i class="far fa-envelope"></i></label>
    //           <input name="email" type="email" placeholder="Email" />
    //         </div>

    //         <div className="input-box nob-radius">
    //           <label><i class="far fa-credit-card"></i></label>
    //           <input name="cardNumber" type="text" placeholder="Card Number" />
    //         </div>

    //         <div className="input-group mb-input">
    //           <div className="input-box not-radius">
    //             <label><i class="far fa-calendar"></i></label>
    //             <input name="date" type="text" placeholder="MM / YY" />
    //           </div>
    //           <div className="input-box">
    //             <label><i class="fas fa-lock"></i></label>
    //             <input name="cvv" type="password" placeholder="CVV" />
    //           </div>
    //         </div>

    //         <div className="remember-me"> {/* class option => 'checked' */}
    //           <i class="material-icons">check_box_outline_blank</i>
    //           <p>Remember me</p>
    //         </div>

    //         <button>Pay $19.99</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  )
}

export default Payment
