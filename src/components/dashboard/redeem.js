import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'
import Modal from '../common/modal'

import './dashboard.css'

const Redeem = (props) => {

    const [code, updateCode] = useState('')
    const [modalOpen, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modalOpen)
    }

    const handleInputChange = e => {
        e.preventDefault()
        updateCode(e.target.value)
    }

    const redeemCode = () => {
        // call redeem code action
    }

    return (
        <HeaderFooter redirect={props.location}>
            <div className='dashboard-header'>
                <h2>Redeem Codes</h2>
            </div>
            <div>
                <DashboardHeader />

                <div className='redeem-main'>
                    <h5>Enter the code sent to your mail to complete the transaction</h5>
                    <div>
                        <input type='tel' maxLength="6" onChange={handleInputChange} />
                        <button onClick={redeemCode}> Submit Code </button>
                    </div>

                </div>
            </div>
            <Modal show={modalOpen} onClose={toggleModal}>
                <h5>Code matched perfectly</h5>
            </Modal>
        </HeaderFooter>
    )
}

export default Redeem;