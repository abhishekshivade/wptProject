import axios from "axios"
import { CUSTOMER_AC_DETAILS, CUSTOMER_LOGIN, CUSTOMER_PR_DETAILS, CUSTOMER_TR_DETAILS, GET_ALL_CUSTOMERS, REGISTER_CUSTOMER } from '../constants/ApiRputes'
import {} from './adminServices'
import { getToken } from "./authServices"

export const registerCustomer=customerData=>axios.post(REGISTER_CUSTOMER,customerData)

export const customerLogin=loginCredentials=>axios.post(CUSTOMER_LOGIN,loginCredentials)

export const getTransactionDetails=accountNumber=>axios.get(CUSTOMER_TR_DETAILS,accountNumber)

// export const getPersonalDetails=async customerID=>{
//     console.log("fetching")
//     await axios.get(CUSTOMER_PR_DETAILS,{headers:{'Autth':`${getToken()}`}},customerID)
//     console.log("done")
// }
// import axios from 'axios';

// const CUSTOMER_PR_DETAILS = 'https://example.com/api/customer-details';

export const getPersonalDetails = customerID => {
  const headers = {
    'Content-Type': 'application/json',
    'Auth': `${getToken()}` // Set 'Auth' header with the token
  };

  const data = {
    customerID // Set 'customerID' in the request body
  };

  return axios.post(CUSTOMER_PR_DETAILS, data, {
    headers
  });
};

export const getAccountDetails=accountNumber=>axios.get(CUSTOMER_AC_DETAILS,accountNumber)

export const getCustomers=()=>axios.get(GET_ALL_CUSTOMERS)