import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfilePicture from '../../assets/default-picture.jpg'
import { profileUpload } from '../../actions/profileActions'

const Profile = props => {
  const [state, setState] = useState(props.user)


  const onChangeHandler = e => {
    // setState({
    //   ...state,
    //   [e.target.name]: e.target.value
    // })

    console.log(e.target.files[0].name)
  }
  // const onProfilePictureChange = e => {
  //   console.log(e.target.files[0])
  //   props.updateProfilePicture(e.target.files[0])
  // }

  const submitHandler = e => {
    e.preventDefault()


  }

  const fd = new FormData()

  return (
    <div className='edit-profile'>
      {console.log(props.data)}
      <div className='profile-picture'>
        <div>
          <img src={ProfilePicture} alt='default profile' />
        </div>
        <input
            style={{ marginTop: '1rem', display:'block'}}
            name='image'
            type='file'
            id='fileElem'
            accept='image/*'
            onChange={onChangeHandler}
        />

      </div>
      <div className='profile-form'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='First Name'
            value={state.firstname}
            name='firstname'
            onChange={onChangeHandler}
          />
          <input
            type='text'
            placeholder='Last Name'
            value={state.lastname}
            name='lastname'
            onChange={onChangeHandler}
          />
          <input
            type='text'
            placeholder='Username'
            value={state.username}
            onChange={onChangeHandler}
          />
          <input
            type='text'
            placeholder='Street'
            value={state.street}
            onChange={onChangeHandler}
          />
          <input
              type='text'
              placeholder='City'
              value={state.city}
              onChange={onChangeHandler}
          />
          <input
              type='text'
              placeholder='State'
              value={state.state}
              onChange={onChangeHandler}
          />
          <input
            type='email'
            placeholder='Email Address'
            value={state.email}
            name='email'
            onChange={onChangeHandler}
          />
          <input
            type='tel'
            placeholder='Phone Number'
            value={state.phone}
            name='phone'
            onChange={onChangeHandler}
          />
          <button className='btnSmall' >Save Changes</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    data: state.auth.data
  }
}
export default connect(mapStateToProps)(Profile)
