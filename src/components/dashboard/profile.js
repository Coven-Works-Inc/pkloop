import React from 'react'
import ProfilePicture from '../../assets/default-picture.jpg'

const Profile = () => {
    return (
        <div className="edit-profile">
            <div className="profile-picture">
                <img src={ProfilePicture} alt="default profile" />
                <p>Change Picture</p>
            </div>
            <div className="profile-form">
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="City, Country" />
                    <input type="email" placeholder="Email Address" />
                    <input type="tel" placeholder="Phone Number" />
                    <button className="btnSmall">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;
