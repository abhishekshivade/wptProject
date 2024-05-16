import express from 'express'
import { createAccount } from '../Controllers/userControllers'

export const customerRouter=express.Router()

customerRouter.post('/createAccount',createAccount)
