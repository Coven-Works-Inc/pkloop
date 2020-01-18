import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import './payment.css'
import axios from 'axios'
import { BASE_URL } from '../../config/constants'
import * as actions from '../../actions/balanceActions'

const Payment = (props) => {
  const amountToPay = Number(props.amount) * 100
  console.log(props)

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    axios.get(`${BASE_URL}/users/fetchUser`)
      .then(response => {
        console.log(response.data)
        setBalance(response.data.data.balance)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onToken = (token, addresses) => {
    console.log(token)
    // console.log(addresses)
    props.click()

    const data = {
      description: `Payment of $${props.amount} made by ${token.email} on ${token.created}`,
      source: token.id,
      currency: 'USD',
      amount: amountToPay
    }

    console.log(data)
    axios.post(`${BASE_URL}/payments`, data)
      .then(response => {
        console.log(response)
        getUserData();
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <StripeCheckout
        image={require('../../assets/payment-logo.png')}
        stripeKey="pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa"
        description="Connect with a traveler"
        name="Make payment to continue"
        locale="auto"
        amount={amountToPay}
        token={onToken}
        panelLabel="Pay"
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

const mapStateToProps = state => ({
  transaction: state.transaction,
  balance: state.balance
})

export default connect(mapStateToProps, actions)(Payment)
