import React from 'react'
import ProfilePicture from '../../assets/default-picture.jpg'

const Profile = () => {
    return (
        <div className="edit-profile">
            <div className="profile-picture">
                <img src={ProfilePicture} alt="default profile" />
            </div>
            <div className="profile-form"></div>
        </div>
    )
}

export default Profile;
