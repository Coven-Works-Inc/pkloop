import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import tripReducer from './tripReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  trips: tripReducer,
  loading: loadingReducer
})
