import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { connectStripe } from '../../actions/authActions'

import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'

import './dashboard.css'

const StripeConnect = (props) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const code = query.get("code")
    const data = {
        code
    }
    useEffect(() => {
        props.connectStripe(data)
        console.log(code)
    })
    return (
        <HeaderFooter redirect={props.location}>
            {console.log(props)}
            <div className='dashboard-header'>
                <h2>You are successfully connected to stripe</h2>
            </div>
            <div>
                <DashboardHeader />

            </div>
        </HeaderFooter>
    )
}

export default connect(null, { connectStripe })(StripeConnect);