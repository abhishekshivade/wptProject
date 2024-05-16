import express from 'express'
import { createAccount, customerLogin} from '../Controllers/userControllers.js'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)
customerRouter.post('/Login',customerLogin)
