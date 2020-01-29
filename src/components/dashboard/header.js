import React from 'react'
import { Link } from 'react-router-dom'
import HeaderFoooter from '../headerFooter';

const DashboardHeader = (props) => {
    return (
        <div className='dashboard-body'>
            <div className='dashboard-menu'>
                <Link to="/dashboard/transactions" style={{ textDecoration: 'none' }}> <p>My transactions</p></Link>
                <Link to="/dashboard/profile" style={{ textDecoration: 'none' }}><p> Edit profile </p></Link>
                <Link to="/dashboard/balance" style={{ textDecoration: 'none' }}> <p>My balance</p></Link>
                <Link to="/dashboard/support" style={{ textDecoration: 'none' }}> <p> Support</p> </Link>
            </div>
        </div>
    )
}
export default DashboardHeader;