import React from 'react'
import { Switch, Route, withRouter, Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/home'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Pricing from './components/pricing'
import Trips from './components/trip'
import About from './components/about'
import Parcel from './components/parcel'
import Verify from './components/verify'
import Payment from './components/payment'
import Dashboard from './components/dashboard'
import Trust from './components/pages/trust'
import Terms from './components/pages/tos'
import Contact from './components/pages/contact'
import Privacy from './components/pages/privacy_policy'
import Travelers from './components/parcel/travelers'
import HowItWorks from './components/howItWorks'
import Shippers from './components/shippers'
import Faq from './components/faq'
import PrivateRoute from './components/common/privateRoute'
import Forgot from './components/auth/forgot'
import Reset from './components/auth/reset'
import Chat from './components/dashboard/chat'

const Routes = props => {
  return (
    <Switch>
      <Route exact component={Login} path='/login' />
      <Route exact component={Register} path='/register' />
      <Route exact component={Pricing} path='/pricing' />
      <Route exact component={About} path='/about' />
      <Route exact component={Parcel} path='/parcel' />
      <PrivateRoute exact component={Trips} path='/trips' />
      <Route exact component={Verify} path='/verify' />
      <Route exact component={Payment} path='/payment' />
      <PrivateRoute
        exact
        path='/dashboard/transactions'
        component={Dashboard}
      />
      <Route exact component={Travelers} path='/travelers' />
      <Route exact component={Trust} path='/trust' />
      <Route exact component={Terms} path='/terms' />
      <Route exact component={HowItWorks} path='/howitworks' />
      <Route exact component={Shippers} path='/shippers' />
      <Route exact component={Contact} path='/contact' />
      <Route exact component={Faq} path='/faq' />
      <Route exact component={Privacy} path='/privacy' />
      <Route exact component={Forgot} path='/forgot' />
      <Route component={Reset} path='/reset' />
      <Route exact component={Chat} path='/dashboard/chat' />
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
