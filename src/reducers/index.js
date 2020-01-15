import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import tripReducer from './tripReducer'
import travelerReducer from './travelerReducer'
import transReducer from './transReducer'
import shipReducer from './shipReducer'
import costReducer from './costReducer'
import supportReducer from './supportReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  trips: tripReducer,
  loading: loadingReducer,
  travelers: travelerReducer,
  transaction: transReducer,
  shippers: shipReducer,
  tickets: supportReducer,
  cost: costReducer
})
