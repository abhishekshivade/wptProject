import express from 'express'
import { createAdmin } from '../Controllers/adminControllers.js'

export const adminRouter=express.Router()

adminRouter.post('/addAdmin',createAdmin)
