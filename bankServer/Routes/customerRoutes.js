import express from 'express'
import { createAccount, customerLogin} from '../Controllers/customerControllers.js'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)
customerRouter.post('/Login',customerLogin)
