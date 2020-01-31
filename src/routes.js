import React from 'react'
import { Switch, Route, withRouter, Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Pricing from './components/pricing'
import Trips from './components/trip'
import About from './components/about'
import Parcel from './components/parcel'
import Verify from './components/verify'
import Payment from './components/payment'
import Notification from './components/dashboard/notification'
import Trust from './components/pages/trust'
import Terms from './components/pages/tos'
import Contact from './components/pages/contact'
import Privacy from './components/pages/privacy_policy'
import Travelers from './components/parcel/travelers'
import HowItWorks from './components/howItWorks'
import Shippers from './components/shippers'
import Faq from './components/faq'
import PrivateRoute from './components/common/privateRoute'
import Forgot from './components/auth/Forgot'
import Password from './components/auth/password'
import Chat from './components/dashboard/chat'
import Profile from './components/dashboard/profile'
import SenderChat from './components/dashboard/sender'
import Transactions from './components/dashboard/transactions'
import Balance from './components/dashboard/balance'
import Support from './components/dashboard/support'
import TravelerChat from './components/dashboard/traveler'
import Redeem from './components/dashboard/redeem'
import Tips from './components/dashboard/tips'

const Routes = props => {
  return (
    <Switch>
      <Route exact component={Register} path='/Register' />
      <Route exact component={Pricing} path='/pricing' />
      <Route exact component={About} path='/about' />
      <Route exact component={Parcel} path='/parcel' />
      <PrivateRoute exact component={Trips} path='/trips' />
      <Route exact component={Verify} path='/verify' />
      <Route exact component={Payment} path='/payment' />
      <Route exact component={SenderChat} path='/dashboard/senderchat' />
      <Route exact component={TravelerChat} path='/dashboard/travelerchat' />
      <Route exact component={Travelers} path='/travelers' />
      <Route exact component={Trust} path='/trust' />
      <Route exact component={Terms} path='/terms' />
      <Route exact component={HowItWorks} path='/howitworks' />
      <Route exact component={Shippers} path='/shippers' />
      <Route exact component={Contact} path='/contact' />
      <Route exact component={Faq} path='/faq' />
      <Route exact component={Privacy} path='/privacy' />
      <Route exact component={Forgot} path='/Forgot' />
      <Route component={Password} path='/password' />
      <Route component={Transactions} path='/dashboard/transactions' />
      <Route component={Profile} path='/dashboard/profile' />
      <Route component={Balance} path='/dashboard/balance' />
      <Route component={Support} path='/dashboard/support' />
      <Route component={Redeem} path='/dashboard/redeem' />
      <Route component={Tips} path='/dashboard/tips' />
      <Route component={Notification} path='/dashboard/notification' />
      <Route exact component={Login} path='/Login' />
      <Route exact component={Chat} path='/dashboard/chat' />
      <Route exact component={Profile} path='/dashboard/profile' />
      <Route exact component={Home} path='/' />

      {/* <ProtectedRoute exact component={Dashboard} path='/dashboard' isAuthenticated={props.isAuthenticated}/> */}
    </Switch>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(withRouter(Routes))
