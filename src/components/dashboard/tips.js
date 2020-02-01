import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTip } from '../../actions/transActions'
// import { Link } from 'react-router-dom'

import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'
import Modal from '../common/modal'

import './dashboard.css'

const Tips = (props) => {

    useEffect(() => {
        if(props.tip){
            setModal(true)
        }
        setTimeout(() => {
            setModal(false)
        }, 3000)
    }, [props.tip])

    const [input, updateInput] = useState({
        amount: 0,
        email: ''
    })
    const [modalOpen, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modalOpen)
    }

    const handleInputChange = e => {
        e.preventDefault()
        updateInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const tipTraveler = () => {
        // call redeem code action
        const data = {
            amount: Number(input.amount),
            email: input.email
        }
        props.addTip(data)
    }

    return (
        <HeaderFooter redirect={props.location}>
            <div className='dashboard-header'>
                <h2>Give Tips</h2>
            </div>
            <div>
                <DashboardHeader />

                <div className='tips-main'>
                    <h5>Enter traveler email to give tip</h5>
                    <div>
                        <input type='email' name="email" placeholder="Traveler Email" onChange={handleInputChange} />
                        <input type='tel' name="amount" placeholder="Tip Amount" onChange={handleInputChange} />
                        <button onClick={tipTraveler}> Tip Traveler </button>
                    </div>
                </div>
            </div>
            <Modal show={modalOpen} onClose={toggleModal}>
                <h5>Tip successfully sent</h5>
            </Modal>
        </HeaderFooter>
    )
}

const mapStateToProps = state => {
    return {
        tip: state.transaction.tipSuccess
    }
}
export default connect(mapStateToProps, { addTip })(Tips);