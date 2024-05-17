import express from 'express'
import { createAccount, customerLogin, getAccountDetails, getPersonalDetails, getTransactions} from '../Controllers/customerControllers.js'
import { authenticateLogin } from '../Middlewares/authenticateLogin.js'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)
customerRouter.post('/Login',customerLogin)
customerRouter.get('/getTransactions',authenticateLogin,getTransactions)
customerRouter.get('/getPersonalDetails',authenticateLogin,getPersonalDetails)
customerRouter.get('/getAccountDetails',authenticateLogin,getAccountDetails)