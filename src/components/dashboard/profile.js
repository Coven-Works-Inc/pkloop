import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import ProfilePicture from '../../assets/default-picture.jpg'
import { profileUpload } from '../../actions/profileActions'
import DashboardHeader from './header'
import HeaderFooter from '../headerFooter'

const Profile = props => {
  const [state, setState] = useState(props.user)
  const [photo, setPhoto] = useState('')
  const [imageName, setImageName] = useState('Set Display Picture')
  const [displayType, changeDisplayType] = useState('form')

  const fileInput = useRef(null)

  const onRefClick = () => {
    fileInput.current.click()
  }

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const onProfilePictureChange = e => {
    setPhoto(e.target.files[0])
    setImageName(e.target.files[0].name)
  }

  const submitHandler = e => {
    e.preventDefault()

    //TODO: Get The values set up in state and push to the action for upload

    const formData = {
      image: state.image,
      firstname: state.firstname,
      lastname: state.lastname,
      username: state.lastname,
      street: state.street,
      city: state.city,
      state: state.state,
      country: state.country,
      email: state.email,
      phone: state.phone
    }

    props.profileUpload(formData)
  }

  return (
    <HeaderFooter>
      <div className='dashboard-header'>
        <h2>Edit Profile</h2>
      </div>
      <div>
        <DashboardHeader />
        <div className='edit-profile'>
          <div>
            <p
              className={displayType === 'form' ? 'active' : 'sidemenu'}
              onClick={() => changeDisplayType('form')}
            >
              Update Profile
            </p>
            <p
              className={displayType === 'picture' ? 'active' : 'sidemenu'}
              onClick={() => changeDisplayType('picture')}
            >
              Update Picture
            </p>
          </div>
          {displayType === 'picture' && (
            <div
              className='profile-picture'
              style={{ display: 'flex', marginTop: '0.1rem' }}
            >
              <input
                style={{ display: 'none' }}
                type='file'
                id='fileElem'
                accept='image/*'
                onChange={onProfilePictureChange}
                ref={fileInput}
                onClick={onRefClick}
              />
              <button
                style={{
                  padding: '0.8rem 1rem',
                  color: '#fff',
                  borderRadius: '2px',
                  outline: 'none',
                  fontSize: '1rem',
                  backgroundColor: 'rgba(0, 189, 190)'
                }}
                onClick={onRefClick}
              >
                Browse
              </button>
              <div>
                {console.log(state.image)}
                <input
                  style={{ padding: '0.8rem 3rem', backgroundColor: '#efefef' }}
                  placeholder={imageName}
                  disabled
                />
              </div>
              <button>Submit</button>
            </div>
          )}
          {displayType === 'form' && (
            <div className='profile-form'>
              <form onSubmit={submitHandler}>
                <input
                  type='text'
                  placeholder='first name'
                  value={state.firstname}
                  name='firstname'
                  onChange={onChangeHandler}
                />
                <input
                  type='text'
                  placeholder='last name'
                  value={state.lastname}
                  name='lastname'
                  onChange={onChangeHandler}
                />
                <input
                  type='text'
                  placeholder='username'
                  value={state.username}
                  onChange={onChangeHandler}
                />
                <input
                  type='text'
                  name='street'
                  placeholder='street'
                  value={state.street}
                  onChange={onChangeHandler}
                />
                <input
                  type='text'
                  name={'city'}
                  placeholder='city'
                  value={state.city}
                  onChange={onChangeHandler}
                />
                <input
                  type='text'
                  name={'state'}
                  placeholder='state'
                  value={state.state}
                  onChange={onChangeHandler}
                />
                <input
                  type={'text'}
                  name={'country'}
                  placeholder={'country'}
                  value={state.country}
                  onChange={onChangeHandler}
                />
                <input
                  type='email'
                  placeholder='email address'
                  value={state.email}
                  name='email'
                  onChange={onChangeHandler}
                />
                <input
                  type='tel'
                  placeholder='phone number'
                  value={state.phone}
                  name='phone'
                  onChange={onChangeHandler}
                />
                <button className='btnSmall'>Save Changes</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </HeaderFooter>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    data: state.auth.data
  }
}
export default connect(mapStateToProps, { profileUpload })(Profile)
