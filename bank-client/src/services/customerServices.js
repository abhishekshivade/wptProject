import axios from "axios"
import { CUSTOMER_AC_DETAILS, CUSTOMER_LOGIN, CUSTOMER_PR_DETAILS, CUSTOMER_TR_DETAILS, GET_ALL_CUSTOMERS, REGISTER_CUSTOMER } from '../constants/ApiRputes'
import {} from './adminServices'

export const registerCustomer=customerData=>axios.post(REGISTER_CUSTOMER,customerData)

export const customerLogin=loginCredentials=>axios.post(CUSTOMER_LOGIN,loginCredentials)

export const getTransactionDetails=accountNumber=>axios.get(CUSTOMER_TR_DETAILS,accountNumber)

export const getPersonalDetails=accountNumber=>axios.get(CUSTOMER_PR_DETAILS,accountNumber)

export const getAccountDetails=accountNumber=>axios.get(CUSTOMER_AC_DETAILS,accountNumber)

export const getCustomers=()=>axios.get(GET_ALL_CUSTOMERS)