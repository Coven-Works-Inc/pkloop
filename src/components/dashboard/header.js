import React from 'react'
import { Link } from 'react-router-dom'
import HeaderFoooter from '../headerFooter';

const DashboardHeader = (props) => {
    return(
            <div className='dashboard-body'>
            <div className='dashboard-menu'>
                <Link to="/dashboard/transactions"> <p>My transactions</p></Link>
                <Link to="/dashboard/profile"><p> Edit profile </p></Link>
                <Link to="/dashboard/balance"> <p>My balance</p></Link>
                <Link to="/dashboard/support"> <p> Support</p> </Link>
            </div>
        </div>
    )
}
export default DashboardHeader;