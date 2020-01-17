import axios from 'axios';
import { ADD_INSURANCE, GET_ERRORS, LOADING } from './types';
import qs from 'qs';

const url = 'https://api.insureship.com/new_policy'
export const addInsurance =   (userData) => dispatch => {
    dispatch({
        type: LOADING,
        payload:true
    })
    // axios({
    //     method: 'post',
    //     url,
    //     data: qs.stringify({
    //         client_id: 77060,
    //         api_key: "bd0f9a243bc886c2123c526aa15bfa02913d75bea8ba4cab8147bc151f233256c500c43e6a42fbc303cf2b2e08136ceaba5fda4b3f24f2cf841d6f7cf25f2600",
    //         customer_name: "Moshood Abidemi",
    //         firstname: "Moshood",
    //         lastname: "Abidemi",
    //         items_ordered: "Chair",
    //         subtotal: 612,
    //         currency: "USD",
    //         coverage_amount: 12,
    //         order_number: "AD-50862"
    //     }),
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }).then(res => {
    //         dispatch({
    //             type: ADD_INSURANCE,
    //             payload: res.status
    //         })
    //     })
    //     .catch(err => {
    //         dispatch({s
    //             type: GET_ERRORS,
    //             payload: err
    //         })
    //     })
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            headers: {
            //   'Content-Type': 'application/json'
              'Content-Type': 'application/x-www-form-urlencoded',  
              'Access-Control-Allow-Origin': 'http://localhost:3000',
            //   'Access-Control-Allow-Credentials': 'true'
            },
            body: qs.stringify(userData) // body data type must match "Content-Type" header
          }).then(response => console.log(response))
          .then(data => {
              dispatch({
                  type: ADD_INSURANCE,
                  payload: data,
                  success: true
              })
          })
          .finally(() => {
              dispatch({
                  type: LOADING,
                  payload: false
              })
          })
}