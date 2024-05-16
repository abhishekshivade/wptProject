import express from 'express'
import { createAccount } from '../Controllers/customerControllers.js'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)