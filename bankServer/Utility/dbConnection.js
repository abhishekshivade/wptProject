import mysql from 'mysql'
import { DB_NAME, HOST, PASSWORD, USER } from './constants.js'

export const dbConnection=mysql.createConnection({
    host:HOST,
    user:USER,
    password:PASSWORD,
    database:DB_NAME
})