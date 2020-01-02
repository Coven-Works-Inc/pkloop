import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import tripReducer from './tripReducer'
import travelerReducer from './travelerReducer'
import transReducer from './transReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  trips: tripReducer,
  loading: loadingReducer,
  travelers: travelerReducer,
  transaction: transReducer
})
