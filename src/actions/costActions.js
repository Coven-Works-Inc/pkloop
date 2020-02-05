import axios from 'axios';
import { ADD_INSURANCE, GET_ERRORS, LOADING } from './types';
import qs from 'qs';
import { BASE_URL } from '../config/constants'

export const addInsurance =   (userData) => dispatch => {
   axios.post(`${BASE_URL}/transactions/payinsurance`, userData)
   .then(res => {
       console.log(res)
   })
}