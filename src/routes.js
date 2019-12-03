import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Pricing from './components/pricing'
import Trips from './components/trips'
import About from './components/about'
import Parcel from './components/parcel'

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Login} path='/login' />
      <Route exact component={Register} path='/register' />
      <Route exact component={Pricing} path='/pricing' />
      <Route exact component={About} path='/about' />
      <Route component={Parcel} path='/parcel' />
      <Route component={Trips} path='/trips' />
      <Route exact component={Home} path='/' />
    </Switch>
  )
}

export default Routes
