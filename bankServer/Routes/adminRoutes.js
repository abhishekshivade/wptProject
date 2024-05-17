import express from 'express'
import { createAdmin, adminLogin } from '../Controllers/adminControllers.js'


export const adminRouter=express.Router()

adminRouter.post('/addAdmin',createAdmin)
adminRouter.post('/login',adminLogin);