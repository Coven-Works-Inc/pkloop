import React from 'react'
import './App.css'
import './Widescreen.css'
import './Mobile.css'
import Routes from './routes'
import Notifications from 'react-notify-toast'
import ScrollToTop from './utils/scrollToTop'
import { Helmet } from 'helmet'

import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

if (localStorage.jwtToken) {
  // Set auth token as header
  setAuthToken(localStorage.jwtToken)
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken)
  // // SET USER and is Authenticated
  store.dispatch(setCurrentUser(decoded, localStorage.jwtToken))
  // Check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser())
    // TODO: Clear user profile too
    //Redirect to login
    window.location.href = '/login'
  }
}

function App () {
  ;<Helmet>
    <meta charSet='utf-8' />
    <title>MyPkloop | Parcel Delivery</title>
    <link rel='canonical' href='https://mypkloop.com' />
  </Helmet>
  return (
    <div className='App'>
      <Notifications />
      <Provider store={store}>
        <Router>
          <Routes />
          <ScrollToTop />
        </Router>
      </Provider>
    </div>
  )
}

export default App
