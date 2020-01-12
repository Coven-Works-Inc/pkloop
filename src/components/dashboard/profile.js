import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfilePicture from '../../assets/default-picture.jpg'
import axios from 'axios'
import { updateProfilePicture } from '../../actions/authActions';

const Profile = (props) => {
    const [state, setState] = useState(props.user)
    const onChangeHandler = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const onProfilePictureChange = e => {    
        props.updateProfilePicture(e.target.files)
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <div className="edit-profile">
            <div className="profile-picture">
                <img src={ProfilePicture} alt="default profile" />
                <input type="file" id="fileElem" accept="image/*" onChange={onProfilePictureChange} />
            </div>
            <div className="profile-form">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="First Name" value={state.firstname} name='firstname' onChange={onChangeHandler} />
                    <input type="text" placeholder="Last Name" value={state.lastname} name="lastname" onChange={onChangeHandler} />
                    <input type="text" placeholder="Username" value={state.username} onChange={onChangeHandler} />
                    <input type="text" placeholder="City, Country" onChange={onChangeHandler} />
                    <input type="email" placeholder="Email Address" value={state.email} name="email" onChange={onChangeHandler} />
                    <input type="tel" placeholder="Phone Number" value={state.phone} name="phone" onChange={onChangeHandler} />
                    <button className="btnSmall">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps, { updateProfilePicture })(Profile);
