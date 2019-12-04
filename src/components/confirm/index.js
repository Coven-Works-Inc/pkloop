import React from 'react'
import HeaderFooter from '../header_footer'

const Confirm = () => {

    return (
        <HeaderFooter>
            <div className="empty-page">
                <p>Your account has been created successfully. Please check your email to confirm</p>
                <button className="btnQ">Go To Login</button>
            </div>
        </HeaderFooter>
    )
}

export default Confirm;