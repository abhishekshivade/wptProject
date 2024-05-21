import axios from "axios"
import { CUSTOMER_AC_DETAILS, CUSTOMER_LOGIN, CUSTOMER_PR_DETAILS, CUSTOMER_TR_DETAILS, GET_ALL_CUSTOMERS, REGISTER_CUSTOMER } from '../constants/ApiRputes'
import {} from './adminServices'
import { getToken } from "./authServices"

export const registerCustomer=customerData=>axios.post(REGISTER_CUSTOMER,customerData)

export const customerLogin=loginCredentials=>axios.post(CUSTOMER_LOGIN,loginCredentials)

export const getTransactionDetails=accountNumber=>axios.get(CUSTOMER_TR_DETAILS,accountNumber)

export const getPersonalDetails=async customerID=>{
    console.log("fetching")
    await axios.get(CUSTOMER_PR_DETAILS,{headers:{'Autth':`${getToken()}`}},customerID)
    console.log("done")
}
// axios.get('https://api.example.com/user', {
//   headers: {
//     'X-Custom-Header': 'value',
//     'Authorization': 'Bearer ANOTHER_ACCESS_TOKEN' // Overrides any defaults that are set
//   }
// })
    

export const getAccountDetails=accountNumber=>axios.get(CUSTOMER_AC_DETAILS,accountNumber)

export const getCustomers=()=>axios.get(GET_ALL_CUSTOMERS)