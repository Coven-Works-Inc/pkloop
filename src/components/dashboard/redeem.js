import React, { useState } from 'react'
import { connect } from 'react-redux'
import { redeemCode } from '../../actions/transActions'
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

    const redeemUserCode = () => {
        // call redeem code action
        const data = {
            code
        }
        props.redeemCode(data)
    }

    return (
        <HeaderFooter redirect={props.location}>
            <div className='dashboard-header'>
                <h2>Redeem Codes</h2>
            </div>
            <div>
                <DashboardHeader />

                <div className='redeem-main'>
                    <input type='tel' maxLength="8" onChange={handleInputChange} />
                    <button onClick={redeemUserCode}> Redeem Code </button>
                </div>
            </div>
            <Modal show={modalOpen} onClose={toggleModal}>
                <h5>Code matched perfectly</h5>
            </Modal>
        </HeaderFooter>
    )
}

export default connect(null, { redeemCode })(Redeem);