import React, { useState, useEffect } from 'react'
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
    
    useEffect(() => {
        if(props.transaction.success){
            setModal(true)
            setTimeout(() => {
                setModal(false)
            }, 3000)
        }

    },[props.transaction.success])
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
                    <h5>Enter the 8-digit code sent to your email to complete the transaction</h5>
                    <h5>(First 4-digit from sender and last 4-digit sent to your email)</h5>
                    <div>
                        <input type='tel' maxLength="8" onChange={handleInputChange} />
                        <button onClick={redeemUserCode}> Redeem Code </button>
                    </div>
                </div>
            </div>
            <Modal show={modalOpen} onClose={toggleModal}>
                <h5>Code matched perfectly</h5>
            </Modal>
        </HeaderFooter>
    )
}
const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    }
}
export default connect(mapStateToProps, { redeemCode })(Redeem);