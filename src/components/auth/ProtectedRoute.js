import React from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest  }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated 
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: {from : props.location}
        }} />
    )} />
)

export default ProtectedRoute;