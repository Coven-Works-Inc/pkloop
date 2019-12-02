import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const Routes = () => {
  return (
    <Switch>
      <Route component={Login} path='/login' />
      <Route component={Register} path='/register' />
      <Route exact component={Home} path='/' />
    </Switch>
  )
}

export default Routes
