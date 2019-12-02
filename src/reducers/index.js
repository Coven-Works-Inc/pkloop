import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loading: loadingReducer
})
