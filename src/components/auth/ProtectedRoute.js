import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        props.isAuthenticated 
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
)
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, null)(ProtectedRoute)