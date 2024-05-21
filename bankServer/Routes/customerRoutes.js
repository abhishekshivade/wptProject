import express from 'express'
import { createAccount, customerLogin, getAccountDetails, getAllAccounts, getAllCustomers, getPersonalDetails, getTransactions} from '../Controllers/customerControllers.js'
import { authenticateLogin } from '../Middlewares/authenticateLogin.js'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)
customerRouter.post('/Login',customerLogin)
customerRouter.post('/getTransactions',authenticateLogin,getTransactions)
customerRouter.post('/getPersonalDetails',authenticateLogin,getPersonalDetails)
customerRouter.post('/getAccountDetails',authenticateLogin,getAccountDetails)
customerRouter.post('/listAllAccounts',authenticateLogin,getAllAccounts)
customerRouter.post('/getAllCustomers',authenticateLogin,getAllCustomers)