import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const index = () => {
  return (
    <div>
      <Route to='/login' component={Login} />
      <Route to='/register' component={Register} />
    </div>
  )
}

export default index
