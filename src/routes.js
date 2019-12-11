import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Pricing from './components/pricing'
import Trips from './components/trip'
import About from './components/about'
import Parcel from './components/parcel'
import Verify from './components/verify'
import Dashboard from './components/dashboard'
import Trust from './components/pages/trust'
import Terms from './components/pages/tos'
import Contact from './components/pages/contact'
import Privacy from './components/pages/privacy_policy'
import Travelers from './components/parcel/travelers'
import HowItWorks from './components/howItWorks'

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Login} path='/login' />
      <Route exact component={Register} path='/register' />
      <Route exact component={Pricing} path='/pricing' />
      <Route exact component={About} path='/about' />
      <Route exact component={Parcel} path='/parcel' />
      <Route exact component={Trips} path='/trips' />
      <Route exact component={Verify} path='/verify' />
      <Route exact component={Dashboard} path='/dashboard' />
      <Route exact component={Travelers} path='/travelers' />
      <Route exact component={Trust} path='/trust' />
      <Route exact component={Terms} path='/terms' />
      <Route exact component={HowItWorks} path='/howitworks' />
      <Route exact component={Contact} path='/contact' />
      <Route exact component={Privacy} path='/privacy' />
      <Route exact component={Home} path='/' />
    </Switch>
  )
}

export default Routes
